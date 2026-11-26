// Mobile menu
const navBtn = document.querySelector('.nav-btn');
const nav = document.getElementById('nav');
navBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navBtn.setAttribute('aria-expanded', open);
  navBtn.textContent = open ? 'Close' : 'Menu';
});
nav.addEventListener('click', (e) => {
  if (e.target.closest('a') && nav.classList.contains('open')) navBtn.click();
});

// House style switcher
const gallery = document.querySelector('.gallery');
const tabs = document.querySelectorAll('.tabs button');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.setAttribute('aria-checked', t === tab));
    gallery.dataset.style = tab.dataset.style;
  });
});

// Copy email
const status = document.querySelector('.status');
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      status.textContent = 'Email copied.';
    } catch {
      status.textContent = 'Copy failed. The address is ' + btn.dataset.copy;
    }
    setTimeout(() => { status.textContent = ''; }, 3000);
  });
});

// Footer year
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
