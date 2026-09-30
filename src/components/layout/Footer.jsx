import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { business } from '../../data/site';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons';
import Logo from './Logo';
import './Footer.css';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '#windows', label: 'Aluminium Windows' },
  { href: '#sliding', label: 'Sliding Doors' },
  { href: '#office-partitions', label: 'Office Partitions' },
  { href: '#glass-partitions', label: 'Glass Partitions' },
  { href: '#facades', label: 'Facades' },
];

const socials = [
  { href: business.social.instagram, label: 'Instagram', icon: InstagramIcon },
  { href: business.social.facebook, label: 'Facebook', icon: FacebookIcon },
  { href: business.whatsapp.href, label: 'WhatsApp', icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__edge" aria-hidden="true" />
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <a href="#home" className="site-footer__logo-link" aria-label="Umiya Enterprises – back to top">
            <Logo className="site-footer__logo" height={96} />
          </a>
          <p>
            All types of glass &amp; aluminium work — windows, doors, partitions and custom solutions for home and
            commercial projects.
          </p>
          <ul className="site-footer__social" aria-label="Social media">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="site-footer__col" aria-labelledby="footer-quick">
          <h2 id="footer-quick" className="site-footer__title">
            Quick Links
          </h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-labelledby="footer-services">
          <h2 id="footer-services" className="site-footer__title">
            Services
          </h2>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col site-footer__contact">
          <h2 className="site-footer__title">Contact</h2>
          <ul>
            {business.contacts.map((contact) => (
              <li key={contact.href}>
                <Phone size={16} aria-hidden="true" />
                <a href={contact.href}>
                  {contact.name}: {contact.display}
                </a>
              </li>
            ))}
            <li>
              <WhatsAppIcon size={16} />
              <a href={business.whatsapp.href} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">WhatsApp: </span>
                {business.whatsapp.display}
              </a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={business.email.href}>{business.email.display}</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <address>{business.address}</address>
            </li>
            <li>
              <Clock size={16} aria-hidden="true" />
              <span>
                {business.hours[0].days}: {business.hours[0].time}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© 2026 Umiya Enterprises. All Rights Reserved.</p>
        <p className="site-footer__tagline">Aluminium · Glass · Fabrication</p>
      </div>
    </footer>
  );
}
