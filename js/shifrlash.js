function shifrlash() {
  let originalText = document.getElementById("validationOriginalText").value;
  let kalit = parseInt(document.getElementById("kalit").value);
  let shifrmatn = "";

  for (let i = 0; i < originalText.length; i++) {
    let char = originalText[i];
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + kalit) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + kalit) % 26) + 97);
      }
    }

    shifrmatn += char;
  }

  document.getElementById("shifrlanganText").value = shifrmatn;
}

function nusxalash() {
  const shifrlanganTextArea = document.getElementById("shifrlanganText");
  if (shifrlanganTextArea.length > 0) {
    shifrlanganTextArea.select();
    document.execCommand("copy");
    alert("Shifrlangan matn nusxalandi!");
  }else {
    alert("Shifrlangan matndan nusxa olish uchun asl matn va kalitni kiriting! ");
  }
}
