// ============================
// Smooth Scroll for Navbar
// ============================
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Navbar height adjustment
        behavior: 'smooth'
      });
    }
  });
});

// ============================
// Contact Form Submission
// ============================
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple fake submission simulation
  formStatus.textContent = 'Sending message...';
  formStatus.style.color = '#0077ff';

  setTimeout(() => {
    formStatus.textContent = 'Message sent successfully! ✅';
    formStatus.style.color = 'green';
    form.reset();
  }, 1500);
});