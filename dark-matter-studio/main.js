// ============================================================
// DARK MATTER STUDIO — main.js
// ============================================================

// Custom cursor
const cursor = document.getElementById('cursor');
if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .service-card, .cred-row, .discipline-col, .product-card, .pub-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });
}

// Nav scroll shrink
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .line-reveal').forEach(el => revealObs.observe(el));

// Contact form (Google Apps Script)
// Replace APPS_SCRIPT_URL below with the deployment URL from script.google.com
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL';

const cf = document.getElementById('cf');
if (cf) {
  cf.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('.cf-btn');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';

    // Collect form data into a plain object
    const formData = new FormData(cf);
    const payload = {};
    formData.forEach((value, key) => { payload[key] = value; });

    try {
      // Note: Apps Script doesn't return CORS headers, so we use no-cors mode.
      // We can't read the response, but the email will be delivered if the
      // request reaches the script. We optimistically show success.
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      const success = document.getElementById('cfSuccess');
      if (success) success.style.display = 'block';
      btn.textContent = 'Sent ✓';
      btn.style.opacity = '1';
      cf.reset();
    } catch (err) {
      console.error('Form submission error:', err);
      btn.textContent = 'Error — try emailing directly';
      btn.style.opacity = '1';
    }
  });
}
