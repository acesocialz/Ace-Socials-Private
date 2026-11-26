// Work page filters
const filterBtns = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.gallery .item');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filterBtns.forEach((b) => b.setAttribute('aria-pressed', b === btn));
    items.forEach((it) => { it.hidden = f !== 'all' && it.dataset.cat !== f; });
  });
});

// Footer year
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// Enquiry form: send in the background (Web3Forms) and show a thank-you on the same page.
// Never hangs: gives up after 12 seconds and offers email instead.
const form = document.getElementById('enquiry');
if (form) {
  const status = form.querySelector('.form__status');
  const btn = form.querySelector('button[type="submit"]');
  const sent = document.getElementById('sent');
  const showSent = () => { form.hidden = true; sent.hidden = false; sent.focus(); };
  const fail = () => {
    status.innerHTML = 'Sorry, that didn\u2019t go through. Please try again, or email <a href="mailto:aisling@acesocialz.com">aisling@acesocialz.com</a>.';
    status.classList.add('is-error');
    btn.disabled = false; btn.textContent = 'Send enquiry';
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.botcheck.checked) { showSent(); return; } // spam bot ticked the hidden box
    btn.disabled = true; btn.textContent = 'Sending\u2026';
    status.classList.remove('is-error'); status.textContent = '';
    const data = Object.fromEntries(new FormData(form));
    delete data.redirect; delete data.botcheck;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 12000);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
        signal: ctl.signal,
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || out.success !== true) throw new Error(out.message || 'send failed');
      showSent();
    } catch {
      fail();
    } finally {
      clearTimeout(timer);
    }
  });
}
