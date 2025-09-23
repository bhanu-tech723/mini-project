// Contact form submission alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting me! I will get back to you soon.");
  this.reset();
});

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Glow animation on hero buttons when page loads
window.addEventListener("load", () => {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.classList.add("animate-glow");
  });
});
