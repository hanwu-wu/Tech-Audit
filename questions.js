const questions = [
  { id: "Q1", text: "A_載重線標誌清晰/ A13/ CNSKU/ PSC", isImportant: false },
  { id: "Q2", text: "B_梯口救生圈自亮燈測試/ 233/ HKHKG/ PSC", isImportant: true },
  { id: "Q3", text: "B_梯口人員記錄簿有OOW、SSO簽名/ 105/ CNSKU/ Internal", isImportant: false },
  { id: "Q4", text: "B_國際通岸接頭螺栓尺5cm/ 509/ CNSKU/ PSC", isImportant: false },
  { id: "Q5", text: "B_住艙水密門膠條無脆化、油漆", isImportant: false },
  { id: "Q6", text: "C_辦公室、廚房、餐廳自閉門檢查/ 326/ CNSKU/ Internal", isImportant: false },
  { id: "Q7", text: "C_裝貨電腦 & REFCON電腦防毒軟體更新/ 373/ TWKEL/ CLASS", isImportant: false },
  { id: "Q8", text: "C_USB端口有使用一次性材質封條/ 376/ TWKHH/ CLASS (資安認證船型)", isImportant: false },
  { id: "Q9", text: "C_走道無擺放個人物品/ 323/ TWKEL/ Internal", isImportant: false },
  { id: "Q10", text: "D_密閉空間演習包含CK-0706-2/ 501/ CNTAO/ Internal", isImportant: true },
  { id: "Q11", text: "D_ISPS文件(Port Log & ISPS Drill)放置上鎖抽屜/ 370/ JPOSA/ PSC", isImportant: false },
  { id: "Q12", text: "D_休息時數符合規定/ 171/ JPOSA/ PSC", isImportant: false },
  { id: "Q13", text: "D_休息時數表與操演時間相符/ A09/ CNSKU/ PSC", isImportant: false },
  { id: "Q14", text: "D_連續密閉空間演習地點不重複/ 171/ TWTPE/ CLASS", isImportant: false },
  { id: "Q15", text: "D_壓艙水紀錄簿 PARTICULAR 更新/ 723/ CNSKU/ PSC", isImportant: false },
  { id: "Q16", text: "E_救生艇筏操作說明清晰且張貼應急燈下/ 328/ JPNGO/ PSC", isImportant: false },
  { id: "Q17", text: "E_救生艇啟動測試/ 311/ KRINC/ PSC", isImportant: false },
  { id: "Q18", text: "F_船副熟悉CO2釋放流程/ 275/ JPHKT/ PSC", isImportant: true },
  { id: "Q19", text: "F_水霧系統面板指示燈顯示正常/ 101/ JPHIJ/ PSC", isImportant: false },
  { id: "Q20", text: "F_船副熟悉機艙水霧系統操作/ 509/ CNSKU/ PSC", isImportant: false },
  { id: "Q21", text: "I_MF-HF AC-DC切換/ 509/ CNSKU/ PSC", isImportant: false },
  { id: "Q22", text: "G_雜糧類食品有個別包裝且保持密封/ 376/ TWKHH/ CLASS", isImportant: false },
  { id: "Q23", text: "G_伙食吊SWL 標示清晰/ 503/ CNSKU/ Internal", isImportant: false },
  { id: "Q24", text: "G_伙食吊安全銷正常/ 723/ CNSKU/ PSC", isImportant: false },
  { id: "Q25", text: "G_冷凍庫門上無結霜/ 313/ HKHKG/ Internal", isImportant: false },
  { id: "Q26", text: "H_病房對外門能正常開啟/ 271/ TWKEL/ Internal", isImportant: false },
  { id: "Q27", text: "I_海圖更新紀錄/ 513/ CNSHA/ PSC", isImportant: true },
  { id: "Q28", text: "I_海圖標示禁航區/ 373/ TWKEL/ CLASS", isImportant: false },
  { id: "Q29", text: "I_羅經甲板的電梯逃生孔狀況正常/ 505/ CNSKU/ Internal", isImportant: false },
  { id: "Q30", text: "I_航海日誌午報填寫完整/ 323/ TWKEL/ Internal", isImportant: false },
  { id: "Q31", text: "I_駕駛台兩側救生圈外觀正常/ 517/ CNTAO/ Internal", isImportant: false },
  { id: "Q32", text: "I_GMDSS 週-月檢紀錄/ 503/ CNSKU/ Internal", isImportant: false },
  { id: "Q33", text: "I_張貼INM-C 取消警報程序/ A09/ CNSKU/ PSC", isImportant: false },
  { id: "Q34", text: "I_羅經差紀錄簿每班填寫/ A09/ CNSKU/ PSC", isImportant: false },
  { id: "Q35", text: "I_航海日誌寫出工作語言/ 313/ HKHKG/ Internal", isImportant: false },
  { id: "Q36", text: "I_INM-C AC-DC切換/ 509/ CNSKU/ PSC", isImportant: false },
  { id: "Q37", text: "I_MF-HF DSC測試紀錄為船到岸/ 515/ CNTAO/ PSC", isImportant: false },
  { id: "Q38", text: "I_航海日誌第一頁小艇施放紀錄/ 515/ CNTAO/ Internal", isImportant: false },
  { id: "Q39", text: "J_Turnbuckles 正常/ 723/ CNSKU/ PSC", isImportant: false },
  { id: "Q40", text: "L_舵機集油槽無油漬/ A06/ TWKHH/ Internal", isImportant: false },
  { id: "Q41", text: "L_油漆間灑水測試/ 723/ CNSKU/ PSC", isImportant: false },
  { id: "Q42", text: "L_船艉救生圈自亮燈測試/ 287/ TWKEL/ Internal", isImportant: false },
  { id: "Q43", text: "L_油漆間防火檔板狀況正常/ 509/ CNSKU/ PSC", isImportant: true },
  { id: "Q44", text: "L_油漆間排風扇運轉正常/ 509/ CNSKU/ PSC", isImportant: false },
  { id: "Q45", text: "M_輪機日誌有前次加油紀錄/ 322/ TWKHH/ Internal", isImportant: false },
  { id: "Q46", text: "M_換油前後MGO油量紀錄於輪機日誌/ 351/ KRPUS/ PSC", isImportant: false },
  { id: "Q47", text: "M_生活汙水高位警報測試/ 723/ CNSKU/ PSC", isImportant: false },
  { id: "Q48", text: "M_電器設備間有絕緣墊/ 287/ TWKEL/ Internal", isImportant: false },
  { id: "Q49", text: "M_機艙天窗關閉/ 723/ CNSKU/ PSC", isImportant: false },
  { id: "Q50", text: "M_機艙防火檔板測試/ 509/ CNSKU/ PSC", isImportant: false },
];

document.addEventListener("DOMContentLoaded", () => {
  // 渲染分類文字
  const categoriesDiv = document.getElementById("categories");
  const categories = [
    "A 船殼 / B 梯口 / C 辦公室 / D 文件 / E 求生裝備 / F 滅火裝備",
    "G 廚房 / H 病房 / I 駕駛台 / J 甲板 / K 船艏 / L 船艉 / M 機艙",
  ];
  categoriesDiv.innerHTML = categories.map(cat => `<div>${cat}</div>`).join("");

  // 渲染問題表單
  const auditForm = document.getElementById("auditForm");
  questions.forEach((q, index) => {
    const questionNumber = index + 1;
    // 拆分題目文字
    const parts = q.text.split("/");
    let mainText = parts[0].trim();
    let subText = parts.length > 1 ? "/" + parts.slice(1).join(" / ").trim() : "";

    const div = document.createElement("div");
    div.className = "question";
    // 如果是重要題目，添加 highlight 類
    const highlightClass = q.isImportant ? " highlight" : "";
    div.innerHTML = `
      <div class="question-label${highlightClass}">
        <span class="main-text">${questionNumber}-${mainText}</span>
        ${subText ? `<span class="sub-text">${subText}</span>` : ""}
      </div>
      <div class="options">
        <select name="${q.id}" id="${q.id}">
          <option value="" disabled selected>Please Select</option>
          <option value="OK">OK</option>
          <option value="FAIL">FAIL</option>
          <option value="NIL">NIL</option>
        </select>
      </div>
      <input type="file" id="photo${q.id.slice(1)}" accept="image/*">
    `;
    auditForm.appendChild(div);

    // 初始檢查：將未作答的下拉選單設為紅色背景
    const select = document.getElementById(q.id);
    if (!select.value) {
      select.classList.add("unanswered");
    }

    // 監聽下拉選單變化
    select.addEventListener("change", () => {
      if (!select.value) {
        select.classList.add("unanswered");
      } else {
        select.classList.remove("unanswered");
      }
    });
  });
});
