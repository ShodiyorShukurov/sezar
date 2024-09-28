document.addEventListener("keydown", function (e) {
  // if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") ) {
  //   e.preventDefault();
  // }

  // Klaviatura orqali nusxa olishni cheklash
  // if (
  //   (e.ctrlKey && e.key === "c") ||
  //   (e.ctrlKey && e.key === "a") ||
  //   (e.ctrlKey && e.key === "s")
  // ) {
  //   e.preventDefault();
  // }
});

// Butun sahifada o'ng tugmani o'chirish
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Matnni belgilashni oldini olish
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});


(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();