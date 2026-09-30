import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Mail, Phone, X } from 'lucide-react';
import { business, navLinks } from '../../data/site';
import { useBodyLock } from '../../hooks/useBodyLock';
import { scrollToId } from '../../utils/scroll';
import Button from '../ui/Button';
import { WhatsAppIcon } from '../ui/BrandIcons';
import Logo from './Logo';
import './MobileMenu.css';

export default function MobileMenu({ open, onClose, activeId }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll('a[href], button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const goTo = (event, id) => {
    event.preventDefault();
    onClose();
    requestAnimationFrame(() => scrollToId(id));
  };

  return createPortal(
    <div className={`mobile-menu${open ? ' is-open' : ''}`} inert={!open}>
      <div className="mobile-menu__backdrop" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        id="mobile-menu"
        className="mobile-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="mobile-menu__top">
          <Logo className="mobile-menu__logo" height={44} />
          <button ref={closeRef} type="button" className="mobile-menu__close" onClick={onClose} aria-label="Close menu">
            <X size={24} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ '--i': index }}>
                <a
                  href={`#${link.id}`}
                  className={`mobile-menu__link${activeId === link.id ? ' is-active' : ''}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={(event) => goTo(event, link.id)}
                >
                  {link.label}
                  <ArrowRight className="mobile-menu__arrow" size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <Button href="#contact" block arrow onClick={(event) => goTo(event, 'contact')}>
            Get a Free Quote
          </Button>
          <Button href={business.whatsapp.href} variant="outline" block icon={WhatsAppIcon}>
            Chat on WhatsApp
          </Button>
          <div className="mobile-menu__contact">
            {business.contacts.map((contact) => (
              <a key={contact.href} href={contact.href}>
                <Phone size={16} aria-hidden="true" />
                <span>
                  {contact.name}: {contact.display}
                </span>
              </a>
            ))}
            <a href={business.email.href}>
              <Mail size={16} aria-hidden="true" />
              {business.email.display}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
