import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { business } from '../../data/site';
import { WhatsAppIcon } from '../ui/BrandIcons';
import './ScrollToTop.css';

/** Floating WhatsApp shortcut + back-to-top button (shown after scrolling). */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setVisible(window.scrollY > window.innerHeight * 0.9);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className={`floating-actions${visible ? ' is-visible' : ''}`}>
      <a
        href={business.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-actions__btn floating-actions__btn--whatsapp"
        aria-label="Chat with Umiya Enterprises on WhatsApp"
        tabIndex={visible ? 0 : -1}
      >
        <WhatsAppIcon size={24} />
      </a>
      <button
        type="button"
        className="floating-actions__btn floating-actions__btn--top"
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
      >
        <ArrowUp size={20} strokeWidth={2.4} aria-hidden="true" />
      </button>
    </div>
  );
}
