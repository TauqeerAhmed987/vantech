import { useEffect, useRef, useState } from 'react';

/**
 * Pins a section in the viewport while scrolling through it, sequentially
 * revealing `count` items one at a time (accumulating — earlier items stay
 * visible once revealed). Requires `overflow-x: clip` on #root (NOT
 * `overflow-x: hidden` on html/body — that silently breaks position:sticky,
 * see src/styles/global.css) for the sticky pin to work at all.
 */
export function usePinnedReveal(count: number, perItemPx = 260) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || count <= 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setActiveIndex(count - 1);
      return;
    }

    const scrollSpan = perItemPx * (count - 1);
    let raf = 0;

    const measure = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      if (rect.top > 0) {
        setActiveIndex(0);
        return;
      }
      const progress = Math.min(1, Math.max(0, -rect.top / scrollSpan));
      setActiveIndex(Math.min(count - 1, Math.round(progress * (count - 1))));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [count, perItemPx]);

  return { wrapperRef, activeIndex, scrollSpan: perItemPx * (count - 1) };
}
