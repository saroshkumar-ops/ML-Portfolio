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

// ── Carousel + lightbox ──
(function () {
  const track = document.getElementById('track');
  if (!track) return;
  const slides = [...track.children];
  const total = slides.length;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dotsWrap = document.getElementById('dots');
  const caption = document.getElementById('carouselCaption');
  const count = document.getElementById('carouselCount');
  let i = 0;

  // captions from each figcaption
  const captions = slides.map(s => s.querySelector('figcaption')?.textContent.trim() || '');

  // build dots
  slides.forEach((_, idx) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', 'Go to chart ' + (idx + 1));
    b.addEventListener('click', () => go(idx));
    dotsWrap.appendChild(b);
  });
  const dots = [...dotsWrap.children];

  function go(n) {
    i = (n + total) % total;
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    caption.textContent = captions[i];
    count.textContent = `${i + 1} / ${total}`;
  }
  prev.addEventListener('click', () => go(i - 1));
  next.addEventListener('click', () => go(i + 1));
  go(0);

  // touch / swipe
  let x0 = null;
  track.addEventListener('touchstart', e => (x0 = e.touches[0].clientX), { passive: true });
  track.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1);
    x0 = null;
  });

  // ── Lightbox ──
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCaption');
  let lbI = 0;

  function openLB(n) {
    lbI = (n + total) % total;
    const img = slides[lbI].querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = captions[lbI];
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLB() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  slides.forEach((s, idx) => s.querySelector('img').addEventListener('click', () => openLB(idx)));
  document.getElementById('lbClose').addEventListener('click', closeLB);
  document.getElementById('lbPrev').addEventListener('click', () => openLB(lbI - 1));
  document.getElementById('lbNext').addEventListener('click', () => openLB(lbI + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') openLB(lbI - 1);
    if (e.key === 'ArrowRight') openLB(lbI + 1);
  });
})();

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
