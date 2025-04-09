// 頁面切換功能
function startAudit() {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
}

// 匯出 Excel 功能
function exportExcel() {
  // 收集基本資訊
  const vesselName = document.getElementById("vesselName").value;
  const port = document.getElementById("port").value;
  const pic = document.getElementById("pic").value;
  const auditDate = document.getElementById("auditDate").value;

  // 準備 Excel 資料
  const excelData = [];

  // 添加基本資訊（從第 2 行開始）
  excelData.push(["", ""]); // 第 1 行為空
  excelData.push(["", "Vessel Name", vesselName]); // 第 2 行
  excelData.push(["", "Port", port]); // 第 3 行
  excelData.push(["", "Date", auditDate]); // 第 4 行
  excelData.push(["", "PIC", pic]); // 第 5 行（新增 PIC）
  excelData.push(["", "Question", "Answer", "Photo"]); // 第 6 行（表頭）
  excelData.push(["", ""]); // 第 7 行為空行

  // 收集問題答案（從第 8 行開始）
  questions.forEach((q, index) => {
    const questionNumber = index + 1;
    const parts = q.text.split("/");
    const mainText = parts[0].trim();
    const subText = parts.length > 1 ? "/" + parts.slice(1).join("/").trim() : "";
    const answer = document.getElementById(q.id).value;
    const photoInput = document.getElementById("photo" + q.id.slice(1));
    const photoFile = photoInput.files.length > 0 ? photoInput.files[0].name : "No photo";

    // 格式化問題文字（只包含編號和題目文字）
    const questionText = `${questionNumber}-${mainText} ${subText}`;

    // 添加問題資料
    excelData.push(["", questionText, answer || "Not answered", photoFile]);
  });

  // 使用 xlsx 匯出 Excel
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(excelData);

  // 設置欄寬
  ws["!cols"] = [
    { wch: 5 },  // A 欄（空）
    { wch: 50 }, // B 欄（問題）
    { wch: 15 }, // C 欄（答案）
    { wch: 30 }  // D 欄（照片）
  ];

  // 添加工作表到工作簿
  XLSX.utils.book_append_sheet(wb, ws, "Audit Report");

  // 生成檔案名稱：date_vessel name_port_pic_report.xlsx
  const fileName = `${auditDate}_${vesselName}_${port}_${pic}_report.xlsx`;

  // 保存 Excel 檔案
  XLSX.writeFile(wb, fileName);

  // 顯示提示視窗
  alert("請將檔案郵件附件給海技 PIC");
}

// 匯出 PDF 功能（包含基本資訊和照片）
function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let yOffset = 10;

  // 收集基本資訊
  const vesselName = document.getElementById("vesselName").value;
  const port = document.getElementById("port").value;
  const pic = document.getElementById("pic").value;
  const auditDate = document.getElementById("auditDate").value;

  // 添加基本資訊
  doc.setFontSize(16);
  doc.text("Audit Photos", 10, yOffset);
  yOffset += 10;

  doc.setFontSize(12);
  doc.text(`Vessel Name: ${vesselName}`, 10, yOffset);
  yOffset += 10;
  doc.text(`Date: ${auditDate}`, 10, yOffset);
  yOffset += 10;
  doc.text(`PIC: ${pic}`, 10, yOffset);
  yOffset += 10;
  doc.text(`Port: ${port}`, 10, yOffset);
  yOffset += 15; // 留出一些間距

  // 遍歷問題，檢查是否有照片
  const promises = [];
  questions.forEach((q, index) => {
    const photoInput = document.getElementById("photo" + q.id.slice(1));
    if (photoInput.files.length > 0) {
      const file = photoInput.files[0];
      const promise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imgData = e.target.result;
          resolve({ questionNumber: index + 1, imgData });
        };
        reader.readAsDataURL(file);
      });
      promises.push(promise);
    }
  });

  // 等待所有照片載入完成
  Promise.all(promises).then((results) => {
    results.forEach((result, idx) => {
      if (yOffset > 280) { // 如果當前頁面已滿，新增一頁
        doc.addPage();
        yOffset = 10;
      }

      // 添加題目編號
      doc.setFontSize(12);
      doc.text(`Question ${result.questionNumber}`, 10, yOffset);
      yOffset += 10;

      // 添加照片
      try {
        doc.addImage(result.imgData, "JPEG", 10, yOffset, 64, 36); // 調整照片大小
        yOffset += 80; // 為下一張照片留出空間
      } catch (error) {
        console.error(`Error adding image for Question ${result.questionNumber}:`, error);
        doc.text(`Error loading image for Question ${result.questionNumber}`, 10, yOffset);
        yOffset += 10;
      }

      // 如果不是最後一張照片，添加分隔線
      if (idx < results.length - 1) {
        doc.setLineWidth(0.5);
        doc.line(10, yOffset, 200, yOffset);
        yOffset += 5;
      }
    });

    // 生成檔案名稱：date_vessel name_port_pic_report.pdf
    const fileName = `${auditDate}_${vesselName}_${port}_${pic}_report.pdf`;

    // 保存 PDF
    doc.save(fileName);

    // 顯示提示視窗
    alert("請將檔案郵件附件給海技 PIC");
  }).catch((error) => {
    console.error("Error generating PDF:", error);
    alert("匯出 PDF 時發生錯誤，請檢查控制台！");
  });
}
