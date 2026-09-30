import { Phone } from 'lucide-react';
import { business } from '../../data/site';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta__panel">
          <div className="cta__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">
              Let&apos;s Build Your Space Better.
            </h2>
            <p className="cta__text">
              Looking for aluminium windows, sliding systems, partitions or glass solutions? Let&apos;s discuss your
              requirements.
            </p>
            <div className="btn-row">
              <Button href="#contact-form" size="lg" arrow>
                Get a Free Quote
              </Button>
              <Button href="#contact" size="lg" variant="ghost">
                Contact Us
              </Button>
            </div>
          </div>
          <a href={business.phone.href} className="cta__call">
            <span className="cta__call-icon">
              <Phone size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="cta__call-label">Prefer to talk?</span>
              {business.phone.display}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
