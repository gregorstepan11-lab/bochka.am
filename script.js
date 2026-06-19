const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  btn.textContent = isOpen ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
    if (btn) btn.textContent = '☰';
  });
});
