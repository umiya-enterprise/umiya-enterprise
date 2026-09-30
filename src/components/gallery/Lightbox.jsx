import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useBodyLock } from '../../hooks/useBodyLock';
import SmartImage from '../ui/SmartImage';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null;
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const touchX = useRef(null);
  useBodyLock(open);

  const count = items.length;
  const prev = () => onNavigate((index - 1 + count) % count);
  const next = () => onNavigate((index + 1) % count);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    return () => previouslyFocused?.focus?.({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowLeft') onNavigate((index - 1 + count) % count);
      else if (event.key === 'ArrowRight') onNavigate((index + 1) % count);
      else if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, index, count, onClose, onNavigate]);

  if (!open) return null;
  const item = items[index];

  const onTouchStart = (event) => {
    touchX.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event) => {
    if (touchX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 50) (delta > 0 ? prev : next)();
    touchX.current = null;
  };

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} – image ${index + 1} of ${count}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="lightbox__backdrop" onClick={onClose} aria-hidden="true" />

      <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Close gallery">
        <X size={24} strokeWidth={2.2} aria-hidden="true" />
      </button>

      <figure className="lightbox__figure" key={item.id}>
        <SmartImage image={item.image} maxWidth={1600} sizes="(min-width: 1200px) 1100px, 100vw" className="lightbox__img" priority />
        <figcaption className="lightbox__caption">
          <span>
            <span className="lightbox__type">{item.type}</span>
            <span className="lightbox__title">{item.title}</span>
          </span>
          <span className="lightbox__counter" aria-hidden="true">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </figcaption>
      </figure>

      {count > 1 && (
        <>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous image">
            <ChevronLeft size={26} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next image">
            <ChevronRight size={26} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </>
      )}
    </div>,
    document.body,
  );
}
