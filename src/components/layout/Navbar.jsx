import { useCallback, useRef, useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { business, navLinks } from '../../data/site';
import { useScrollState } from '../../hooks/useScrollState';
import Button from '../ui/Button';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import MobileTabBar from './MobileTabBar';
import './Navbar.css';

export default function Navbar() {
  const { scrolled, activeId } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <div className="site-header__bar">
            <a href="#home" className="site-header__brand" aria-label="Umiya Enterprises – back to top">
              <Logo className="site-header__logo" />
            </a>

            <nav className="site-nav" aria-label="Primary">
              <ul className="site-nav__list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`site-nav__link${activeId === link.id ? ' is-active' : ''}`}
                      aria-current={activeId === link.id ? 'true' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-header__actions">
              <a href={business.phone.href} className="site-header__phone">
                <span className="site-header__phone-icon">
                  <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>
                  <span className="site-header__phone-label">Call us</span>
                  {business.phone.display}
                </span>
              </a>
              <Button href="#contact" className="site-header__cta" arrow>
                Get a Quote
              </Button>
              <button
                ref={toggleRef}
                type="button"
                className="site-header__toggle"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={24} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <MobileMenu open={menuOpen} onClose={closeMenu} activeId={activeId} />
      </header>
      <MobileTabBar activeId={activeId} />
    </>
  );
}
