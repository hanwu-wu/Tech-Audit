function startAudit() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function exportExcel() {
  try {
    if (typeof XLSX === "undefined") throw new Error("SheetJS not loaded");

    const vesselName = document.getElementById("vesselName").value || "Unknown Vessel";
    const port = document.getElementById("port").value || "Unknown Port";
    const pic = document.getElementById("pic").value || "Unknown PIC";
    const auditDate = document.getElementById("auditDate").value || "Unknown Date";
    const fileName = `${auditDate}_${vesselName}_${pic}_Report`;

    const data = [
      ["Vessel Name", vesselName],
      ["Port", port],
      ["PIC", pic],
      ["Date", auditDate],
      [], // 空行
      ["題號", "問題", "答案", "照片路徑"], // 新增 "題號" 欄
    ];
    questions.forEach((q, i) => {
      const select = document.getElementById(q.id);
      const answer = select.value || "N/A";
      const photoInput = document.getElementById(`photo${i + 1}`);
      const photoName = photoInput.files[0] ? photoInput.files[0].name : "無照片";
      const questionNumber = i + 1; // 題號從 1 開始
      data.push([questionNumber, q.text, answer, photoName]); // 在第一欄添加題號
    });

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Audit Result");
    XLSX.writeFile(wb, `${fileName}.xlsx`);

  } catch (error) {
    console.error("Excel export failed:", error);
    alert("Excel export error: " + error.message);
  }
}

function exportPDF() {
  try {
    if (typeof jspdf === "undefined") throw new Error("jsPDF not loaded");

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const vesselName = document.getElementById("vesselName").value || "Unknown Vessel";
    const port = document.getElementById("port").value || "Unknown Port";
    const pic = document.getElementById("pic").value || "Unknown PIC";
    const auditDate = document.getElementById("auditDate").value || "Unknown Date";
    const fileName = `${auditDate}_${vesselName}_${pic}_Report`;

    let y = 10;
    doc.text(`Vessel Name: ${vesselName}`, 10, y);
    y += 10;
    doc.text(`Port: ${port}`, 10, y);
    y += 10;
    doc.text(`PIC: ${pic}`, 10, y);
    y += 10;
    doc.text(`Date: ${auditDate}`, 10, y);
    y += 15;

    const content = [];
    const promises = [];
    questions.forEach((q, i) => {
      const photoInput = document.getElementById(`photo${i + 1}`);
      const photo = photoInput.files[0];

      if (photo) {
        content.push({ id: q.id });
        promises.push(
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              const img = new Image();
              img.src = reader.result;
              img.onload = () => resolve({ index: i + 1, imgData: reader.result });
              img.onerror = () => reject(new Error(`Image ${i + 1} load failed`));
            };
            reader.onerror = () => reject(new Error(`Image ${i + 1} read failed`));
            reader.readAsDataURL(photo);
          })
        );
      }
    });

    if (content.length === 0) {
      alert("No photos uploaded. PDF export skipped.");
      return;
    }

    Promise.all(promises).then((images) => {
      images.forEach((img, idx) => {
        const item = content[idx];
        const text = `Question: ${item.id}`;
        doc.text(text, 10, y);
        y += 10;

        try {
          doc.addImage(img.imgData, "JPEG", 10, y, 50, 50);
          y += 55;
        } catch (e) {
          console.error(`Image ${item.id} failed to add:`, e);
          doc.text(`Failed to load image for ${item.id}`, 10, y);
          y += 10;
        }

        if (y > 250) {
          doc.addPage();
          y = 10;
        }
      });
      doc.save(`${fileName}_Photos.pdf`);
    }).catch((error) => {
      console.error("PDF image processing failed:", error);
      alert("PDF image processing error: " + error.message);
    });

  } catch (error) {
    console.error("PDF export failed:", error);
    alert("PDF export error: " + error.message);
  }
}
