document.addEventListener("DOMContentLoaded", function() {

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
      body.classList.add('light-mode');
  }

  themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      
      if (body.classList.contains('light-mode')) {
          localStorage.setItem('theme', 'light');
      } else {
          localStorage.setItem('theme', 'dark');
      }
  });

  if (document.getElementById("typed-text")) {
    new Typed("#typed-text", {
      strings: ["Java/Spring Boot.", "Python.", "JavaScript."],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  }

  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      formMessage.textContent = "";
      formMessage.className = "";

      if (nome === "" || email === "" || mensagem === "") {
        showMessage("Por favor, preencha todos os campos.", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage("Por favor, insira um e-mail válido.", "error");
        return;
      }

      showMessage("Mensagem enviada com sucesso! Obrigado.", "success");
      contactForm.reset();
      
      setTimeout(() => {
        formMessage.textContent = "";
      }, 5000);
    });
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.add(type);
  }

 
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (menuHamburger) {
    menuHamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

 
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
});