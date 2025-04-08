const questions = [
  { id: "q1", text: "A-載重線標誌清晰/ A13/ CNSKU/ PSC" },
  { id: "q2", text: "B-梯口救生圈自亮燈測試/ 233/ HKHKG/ PSC" },
  { id: "q3", text: "B-梯口人員記錄簿有OOW、SSO簽名/ 105/ CNSKU/ Internal" },
  { id: "q4", text: "B-國際通岸接頭螺栓尺5cm/ 509/ CNSKU/ PSC" },
  { id: "q5", text: "B-住艙水密門膠條無脆化、油漆" },
  { id: "q6", text: "C-辦公室、廚房、餐廳自閉門檢查/ 326/ CNSKU/ Internal" },
  { id: "q7", text: "C-裝貨電腦 & REFCON電腦防毒軟體更新/ 373/ TWKEL/ CLASS" },
  { id: "q8", text: "C-USB端口有使用一次性材質封條/ 376/ TWKHH/ CLASS (資安認證船型)" },
  { id: "q9", text: "C-走道無擺放個人物品/ 323/ TWKEL/ Internal" },
  { id: "q10", text: "D-密閉空間演習包含CK-0706-2/ 501/ CNTAO/ Internal" },
  { id: "q11", text: "D-ISPS文件(Port Log / ISPS Drill)放置上鎖抽屜/ 370/ JPOSA/ PSC" },
  { id: "q12", text: "D-休息時數符合規定/ 171/ JPOSA/ PSC" },
  { id: "q13", text: "D-休息時數表與操演時間相符/ A09/ CNSKU/ PSC" },
  { id: "q14", text: "D-連續密閉空間演習地點不重複/ 171/ TWTPE/ CLASS" },
  { id: "q15", text: "D-壓艙水紀錄簿 PARTICULAR 更新/ 723/ CNSKU/ PSC" },
  { id: "q16", text: "E-救生艇筏操作說明清晰且張貼應急燈下/ 328/ JPNGO/ PSC" },
  { id: "q17", text: "E-救生艇啟動測試/ 311/ KRINC/ PSC" },
  { id: "q18", text: "F-船副熟悉CO2釋放流程/ 275/ JPHKT/ PSC" },
  { id: "q19", text: "F-水霧系統面板指示燈顯示正常/ 101/ JPHIJ/ PSC" },
  { id: "q20", text: "F-船副熟悉機艙水霧系統操作/ 509/ CNSKU/ PSC" },
  { id: "q21", text: "I-MF/HF AC/DC切換/ 509/ CNSKU/ PSC" },
  { id: "q22", text: "G-雜糧類食品有個別包裝且保持密封/ 376/ TWKHH/ CLASS" },
  { id: "q23", text: "G-伙食吊SWL 標示清晰/ 503/ CNSKU/ Internal" },
  { id: "q24", text: "G-伙食吊安全銷正常/ 723/ CNSKU/ PSC" },
  { id: "q25", text: "G-冷凍庫門上無結霜/ 313/ HKHKG/ Internal" },
  { id: "q26", text: "H-病房對外門能正常開啟/ 271/ TWKEL/ Internal" },
  { id: "q27", text: "I-海圖更新紀錄/ 513/ CNSHA/ PSC" },
  { id: "q28", text: "I-海圖標示禁航區/ 373/ TWKEL/ CLASS" },
  { id: "q29", text: "I-羅經甲板的電梯逃生孔狀況正常/ 505/ CNSKU/ Internal" },
  { id: "q30", text: "I-航海日誌午報填寫完整/ 323/ TWKEL/ Internal" },
  { id: "q31", text: "I-駕駛台兩側救生圈外觀正常/ 517/ CNTAO/ Internal" },
  { id: "q32", text: "I-GMDSS 週/月檢紀錄/ 503/ CNSKU/ Internal" },
  { id: "q33", text: "I-張貼INM-C 取消警報程序/ A09/ CNSKU/ PSC" },
  { id: "q34", text: "I-羅經差紀錄簿每班填寫/ A09/ CNSKU/ PSC" },
  { id: "q35", text: "I-航海日誌寫出工作語言/ 313/ HKHKG/ Internal" },
  { id: "q36", text: "I-INM-C AC/DC切換/ 509/ CNSKU/ PSC" },
  { id: "q37", text: "I-MF/ HF DSC測試紀錄為船到岸/ 515/ CNTAO/ PSC" },
  { id: "q38", text: "I-航海日誌第一頁小艇施放紀錄/ 515/ CNTAO/ Internal" },
  { id: "q39", text: "J-Turnbuckles 正常/ 723/ CNSKU/ PSC" },
  { id: "q40", text: "L-舵機集油槽無油漬/ A06/ TWKHH/ Internal" },
  { id: "q41", text: "L-油漆間灑水測試/ 723/ CNSKU/ PSC" },
  { id: "q42", text: "L-船艉救生圈自亮燈測試/ 287/ TWKEL/ Internal" },
  { id: "q43", text: "L-油漆間防火檔板狀況正常/ 509/ CNSKU/ PSC" },
  { id: "q44", text: "L-油漆間排風扇運轉正常/ 509/ CNSKU/ PSC" },
  { id: "q45", text: "M-輪機日誌有前次加油紀錄/ 322/ TWKHH/ Internal" },
  { id: "q46", text: "M-換油前後MGO油量紀錄於輪機日誌/ 351/ KRPUS/ PSC" },
  { id: "q47", text: "M-生活汙水高位警報測試/ 723/ CNSKU/ PSC" },
  { id: "q48", text: "M-電器設備間有絕緣墊/ 287/ TWKEL/ Internal" },
  { id: "q49", text: "M-機艙天窗關閉/ 723/ CNSKU/ PSC" },
  { id: "q50", text: "M-機艙防火檔板測試/ 509/ CNSKU/ PSC" },
];

document.addEventListener("DOMContentLoaded", () => {
  const auditForm = document.getElementById("auditForm");
  questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
      <label>${q.text}</label>
      <div class="options">
        <input type="radio" name="${q.id}" value="OK" id="${q.id}_ok"><label for="${q.id}_ok">OK</label>
        <input type="radio" name="${q.id}" value="FAIL" id="${q.id}_fail"><label for="${q.id}_fail">FAIL</label>
        <input type="radio" name="${q.id}" value="NIL" id="${q.id}_nil"><label for="${q.id}_nil">NIL</label>
      </div>
      <input type="file" id="photo${q.id.slice(1)}" accept="image/*">
    `;
    auditForm.appendChild(div);
  });
});