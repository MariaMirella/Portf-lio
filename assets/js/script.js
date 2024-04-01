
/* ScrollReveal */



/* Função para exibir/recolher menu responsivo */

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    navbar.style.height = "17.7rem";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    navbar.style.height = 0;
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

/* Fuction para quando apertar nos links, fechar o menu e mudar ícone*/
links.forEach((link) => {
  link.addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.height = "0";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
    checkbox.checked = false;
  });
});
