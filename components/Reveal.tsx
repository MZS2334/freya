'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll-reveal: .reveal sınıfına sahip tüm elemanları
 * görünür olduklarında .is-in ekleyerek canlandırır.
 * Ayrıca [data-count] sayaçlarını çalıştırır.
 * Sayfa değişimlerinde yeniden bağlanır (layout persist kalır).
 */
export default function RevealEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)'));
    if ('IntersectionObserver' in window && !reduced) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              (en.target as HTMLElement).classList.add('is-in');
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('is-in'));
    }

    // Sayaçlar
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    if (counters.length && 'IntersectionObserver' in window && !reduced) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            cio.unobserve(el);
            const target = parseInt(el.dataset.count || '0', 10);
            const dur = 1800;
            let start: number | null = null;
            const node = el.childNodes[0];
            const step = (ts: number) => {
              if (!start) start = ts;
              const p = Math.min((ts - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              node.nodeValue = String(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        },
        { threshold: 0.4 },
      );
      counters.forEach((el) => cio.observe(el));
    }

  }, [pathname]);

  return null;
}
