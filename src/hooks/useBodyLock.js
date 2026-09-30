import { useEffect } from 'react';

/** Prevents background scrolling while an overlay (menu, lightbox) is open. */
export function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollbar ? `${scrollbar}px` : '';
    document.body.classList.add('is-locked');
    return () => {
      document.body.classList.remove('is-locked');
      document.body.style.paddingRight = '';
    };
  }, [locked]);
}
