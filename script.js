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

// Enquiry form: send in the background and show a thank-you message on the same page
const form = document.getElementById('enquiry');
if (form) {
  const status = form.querySelector('.form__status');
  const btn = form.querySelector('button[type="submit"]');
  const sent = document.getElementById('sent');
  const showSent = () => { form.hidden = true; sent.hidden = false; sent.focus(); };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form._honey.value) { showSent(); return; } // spam bot filled the hidden field
    btn.disabled = true; btn.textContent = 'Sending…';
    const data = Object.fromEntries(new FormData(form));
    delete data._next;
    try {
      const res = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('send failed');
      showSent();
    } catch {
      status.textContent = 'Sorry, that didn’t send. Please try again, or email aisling@acesocialz.com.';
      status.classList.add('is-error');
      btn.disabled = false; btn.textContent = 'Send enquiry';
    }
  });
}
