/* =========================================================
   BHANU PRASAD NAIK — PORTFOLIO JS
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuToggle.textContent = isOpen
      ? "✕"
      : "☰";

  });


  /* Close menu after clicking a link */

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.textContent = "☰";

    });

  });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navItems.forEach(link => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");

    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  updateActiveNav
);

updateActiveNav();


/* ================= REVEAL ANIMATIONS ================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const backTop =
  document.getElementById("backTop");

if (backTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

      backTop.classList.add("show");

    } else {

      backTop.classList.remove("show");

    }

  });


  backTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* ================= CONTACT FORM ================= */

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const name =
        this.querySelector(
          'input[name="name"]'
        ).value.trim();

      const email =
        this.querySelector(
          'input[name="email"]'
        ).value.trim();

      const message =
        this.querySelector(
          'textarea[name="message"]'
        ).value.trim();


      if (!name || !email || !message) {

        alert(
          "Please fill in all fields."
        );

        return;
      }


      /*
        This is currently a frontend-only form.

        Later you can connect it to:
        - Formspree
        - EmailJS
        - Resend
        - Your own backend
      */

      alert(
        `Thanks ${name}! Your message has been received.`
      );

      this.reset();

    }
  );

}


/* ================= PAGE LOAD ================= */

window.addEventListener("load", () => {

  document.body.classList.add(
    "loaded"
  );

});