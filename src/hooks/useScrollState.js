import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has scrolled past `threshold` and which nav section is active.
 * Sections opt in with a `data-nav="<nav id>"` attribute.
 */
export function useScrollState(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > threshold);

      const line = window.innerHeight * 0.35;
      let current = 'home';
      document.querySelectorAll('[data-nav]').forEach((section) => {
        if (section.getBoundingClientRect().top <= line) current = section.dataset.nav;
      });
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return { scrolled, activeId };
}
