import { useEffect, useRef } from 'react';

let observer;

function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  return observer;
}

/** Adds `is-visible` to the element once it scrolls into view (one shared observer). */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = getObserver();
    if (!io) {
      el.classList.add('is-visible');
      return undefined;
    }
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return ref;
}
