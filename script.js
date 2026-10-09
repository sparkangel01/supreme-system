// ============================================
// Smithfield Coin Company — Landing Page Script
// No images, no catalogue. Just a clean
// "We buy coins" site with WhatsApp contact
// and upfront fee notice.
// ============================================

const WHATSAPP_NUMBER = "15812874595";

// Smooth scroll for internal anchor links (if you add any later)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log("Smithfield Coin Company — site loaded. WhatsApp: +" + WHATSAPP_NUMBER);
