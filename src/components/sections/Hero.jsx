import { AppWindow, Building, DoorOpen, LayoutGrid } from 'lucide-react';
import { images } from '../../data/images';
import Button from '../ui/Button';
import { Eyebrow } from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import './Hero.css';

const capabilities = [
  { href: '#windows', icon: AppWindow, title: 'Windows & Sliding', text: 'Sliding · Openable · Fixed' },
  { href: '#office-partitions', icon: LayoutGrid, title: 'Partitions', text: 'Office · Glass · Factory' },
  { href: '#doors', icon: DoorOpen, title: 'Doors & Glass Work', text: 'Entrance · Sliding · Glass' },
  { href: '#facades', icon: Building, title: 'Facades & Shopfronts', text: 'Aluminium · Glass' },
];

export default function Hero() {
  return (
    <section id="home" data-nav="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <SmartImage image={images.hero} priority sizes="100vw" maxWidth={1920} className="hero__image" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__frame" aria-hidden="true">
        <span />
      </div>

      <div className="container hero__content">
        <Eyebrow className="hero__eyebrow">Aluminium · Glass · Fabrication</Eyebrow>
        <h1 id="hero-title" className="hero__title">
          Premium <span className="hero__title-accent">Aluminium &amp; Glass</span> Solutions
        </h1>
        <p className="hero__text">
          All types of glass &amp; aluminium work — windows, doors, partitions and custom solutions for home and
          commercial projects.
        </p>
        <div className="btn-row hero__actions">
          <Button href="#contact" size="lg" arrow>
            Get a Free Quote
          </Button>
          <Button href="#services" size="lg" variant="ghost">
            Explore Our Services
          </Button>
        </div>
      </div>

      <div className="container hero__bottom">
        <ul className="hero__capabilities" aria-label="What we do">
          {capabilities.map(({ href, icon: Icon, title, text }) => (
            <li key={href}>
              <a href={href} className="hero__capability">
                <span className="hero__capability-icon">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
