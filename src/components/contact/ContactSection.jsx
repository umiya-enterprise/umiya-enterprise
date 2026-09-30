import { useState } from 'react';
import { CalendarCheck, Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { business } from '../../data/site';
import { scrollToId } from '../../utils/scroll';
import { WhatsAppIcon } from '../ui/BrandIcons';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from './ContactForm';
import './ContactSection.css';

const details = [
  ...business.contacts.map((contact) => ({ icon: Phone, label: contact.name, value: contact.display, href: contact.href })),
  { icon: WhatsAppIcon, label: 'WhatsApp', value: business.whatsapp.display, href: business.whatsapp.href, external: true },
  {
    icon: Mail,
    label: 'Email',
    value: (
      <>
        {business.email.display.split('@')[0]}@<wbr />
        {business.email.display.split('@')[1]}
      </>
    ),
    href: business.email.href,
  },
  { icon: MapPin, label: 'Address', value: business.address, href: business.mapsHref, external: true },
];

export default function ContactSection() {
  const [preset, setPreset] = useState(null);

  const requestSiteVisit = () => {
    setPreset((prev) => ({ requirement: 'Site Visit Request', nonce: (prev?.nonce ?? 0) + 1 }));
    scrollToId('contact-form');
  };

  return (
    <section id="contact" data-nav="contact" className="section section--light contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact Us"
          title="Let's Talk About Your Project"
          text="Call, WhatsApp or send us your requirement. We'll help you choose the right aluminium and glass solution for your space."
        />

        <div className="contact__layout">
          <Reveal as="aside" className="contact__info" aria-label="Contact details">
            <div className="contact__info-head">
              <p className="contact__business">{business.name}</p>
              <p>Aluminium &amp; Glass Solutions</p>
            </div>

            <ul className="contact__details">
              {details.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
                    <span className="contact__icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="contact__label">{label}</span>
                      <span className="contact__value">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="contact__hours">
              <p className="contact__hours-title">
                <Clock size={16} aria-hidden="true" />
                Business Hours
              </p>
              <dl>
                {business.hours.map((row) => (
                  <div key={row.days}>
                    <dt>{row.days}</dt>
                    <dd>{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="contact__visit">
              <p>Want us to measure and advise on site?</p>
              <button type="button" className="btn btn--primary btn--block" onClick={requestSiteVisit}>
                <CalendarCheck size={18} aria-hidden="true" />
                <span>Request a Site Visit</span>
              </button>
            </div>
          </Reveal>

          <Reveal id="contact-form" className="contact__form-wrap" delay={0.1}>
            <ContactForm preset={preset} />
          </Reveal>
        </div>

        <Reveal className="contact__map">
          <iframe
            className="contact__map-frame"
            src={business.mapEmbed}
            title={`${business.name} location on Google Maps`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="contact__map-card">
            <span className="contact__map-icon">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div className="contact__map-text">
              <p className="contact__map-label">Visit Our Shop</p>
              <p>{business.address}</p>
            </div>
            <Button href={business.mapsHref} icon={Navigation} className="contact__map-btn">
              Get Directions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
