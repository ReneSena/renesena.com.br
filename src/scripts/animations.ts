import { gsap, ScrollTrigger, reduced, finePointer, getLenis, watchAnimZones } from './motion';

document.documentElement.classList.add('motion-ready');
getLenis();
watchAnimZones();

if (!reduced) {
  // ---------- hero ----------
  // A intro roda em CSS (Hero.astro) para aparecer no primeiro paint; aqui só os scrubs de saída.
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (hero) {
    // saída do hero: foto sobe mais devagar que a página (parallax leve)
    gsap.to(hero.querySelector('[data-hero-photo]'), {
      yPercent: -14,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  // ---------- manifesto: palavras acendem com o scroll ----------
  const quote = document.querySelector<HTMLElement>('[data-manifesto]');
  if (quote) {
    gsap.to(quote.querySelectorAll('.word'), {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: { trigger: quote, start: 'top 80%', end: 'bottom 45%', scrub: true },
    });
  }

  // ---------- reveals ----------
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top bottom',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', overwrite: true }),
  });

}

if (finePointer && !reduced) {
  // ---------- botões magnéticos ----------
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.4);
    });
    el.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  });

  // ---------- tilt 3D ----------
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    const inner = card.firstElementChild as HTMLElement;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      inner.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
      inner.style.setProperty('--rx', `${(0.5 - py) * 10}deg`);
      inner.style.setProperty('--gx', `${px * 100}%`);
      inner.style.setProperty('--gy', `${py * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      inner.style.setProperty('--rx', '0deg');
      inner.style.setProperty('--ry', '0deg');
    });
  });
}

// recalcula posições quando fontes/imagens terminam de carregar
window.addEventListener('load', () => ScrollTrigger.refresh());
