function asl() {
  let shifrMatn = document.getElementById("validationshifrMatn").value;
  let kalit = parseInt(document.getElementById("kalit").value);
  let aslMatn1 = "";

  for (let i = 0; i < shifrMatn.length; i++) {
    let char = shifrMatn[i];

    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 - kalit + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 - kalit + 26) % 26) + 97);
      }
      aslMatn1 += char;
    }

    document.getElementById("aslMatn").value = aslMatn1;
  }
}

function nusxalash() {
  const shifrlanganTextArea = document.getElementById("aslMatn");
  if (shifrlanganTextArea.length > 0) {
    shifrlanganTextArea.select();
    document.execCommand("copy");
    alert("Asl matn nusxalandi!");
  }else {
     alert("Iltimos nusxalash uchun shifrlangan matn va kalitni kiriting!");
  }
}
