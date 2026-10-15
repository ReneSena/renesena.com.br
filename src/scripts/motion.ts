import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = window.matchMedia('(pointer: fine)').matches;

let lenis: Lenis | null = null;

export function getLenis() {
  if (reduced) return null;
  if (!lenis) {
    // âncoras com duração fixa: o lerp puro demora demais em saltos longos (ex.: Contato a partir do topo)
    lenis = new Lenis({
      lerp: 0.1,
      anchors: { offset: -70, duration: 0.9, easing: (t) => 1 - Math.pow(2, -10 * t) },
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis!.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  return lenis;
}

export { gsap, ScrollTrigger };

/** Trava/destrava o scroll da página (modal, menu) respeitando o Lenis. */
export function lockScroll(lock: boolean) {
  document.documentElement.style.overflow = lock ? 'hidden' : '';
  if (lock) lenis?.stop();
  else lenis?.start();
}

/** Pausa as animações CSS infinitas de cada [data-anim-zone] enquanto estiver fora da viewport. */
export function watchAnimZones() {
  const zones = document.querySelectorAll<HTMLElement>('[data-anim-zone]');
  if (!zones.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.classList.toggle('is-offscreen', !e.isIntersecting)),
    { rootMargin: '100px 0px' },
  );
  zones.forEach((z) => io.observe(z));
}
