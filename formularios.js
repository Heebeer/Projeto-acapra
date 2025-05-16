const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Controle das abas dos formulários
const tabBtns = document.querySelectorAll(".tab__btn");
const formTabs = document.querySelectorAll(".form__tab");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove a classe active de todos os botões e formulários
    tabBtns.forEach(b => b.classList.remove("active"));
    formTabs.forEach(tab => tab.classList.remove("active"));
    
    // Adiciona a classe active ao botão clicado
    btn.classList.add("active");
    
    // Mostra o formulário correspondente
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(`form-${tabId}`).classList.add("active");
  });
});

// Validação e envio dos formulários
document.getElementById("form-adocao").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulário de adoção enviado com sucesso! Entraremos em contato em breve.");
  this.reset();
});

document.getElementById("form-depoimento").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Obrigado pelo seu depoimento! Se autorizado, ele será publicado em breve.");
  this.reset();
});

// Efeitos de scroll
ScrollReveal().reveal(".forms__container", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
});