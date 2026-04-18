AOS.init();

const navbar = document.getElementById("mainNavbar");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

navbar.classList.add("navbar-transparent");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
    navbar.classList.remove("navbar-transparent");
  } else {
    navbar.classList.add("navbar-transparent");
    navbar.classList.remove("navbar-scrolled");
  }

  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Scroll suave
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
