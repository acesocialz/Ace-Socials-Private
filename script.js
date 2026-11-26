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
