// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll for sections/cards
const revealEls = document.querySelectorAll(
  '.timeline li, .card, .concept, .takeaway, .section-head, .table-wrap'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// Subtle active-link highlight
const sections = [...document.querySelectorAll('section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;
  for (const s of sections) if (s.offsetTop <= y) current = s.id;
  links.forEach(l => l.style.color =
    l.getAttribute('href') === '#' + current ? '#fff' : '');
}, { passive: true });
