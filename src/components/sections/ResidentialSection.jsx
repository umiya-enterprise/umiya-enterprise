import { House } from 'lucide-react';
import { residentialServices } from '../../data/content';
import { images } from '../../data/images';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import './ResidentialSection.css';

export default function ResidentialSection() {
  return (
    <section id="residential" data-nav="services" className="section section--light residential" aria-labelledby="residential-title">
      <div className="container">
        <div className="residential__head">
          <SectionHeading id="residential-title" eyebrow="Residential Solutions" title="Designed for Modern Homes" />
          <Reveal as="p" className="lead residential__intro">
            Apartments, bungalows, villas and row houses — we help homeowners and builders create brighter, better
            ventilated and easy-to-maintain homes with aluminium and glass made to measure.
          </Reveal>
        </div>

        <div className="residential__layout">
          <div className="residential__media">
            <Reveal variant="image" className="residential__img">
              <SmartImage image={images.residentialMain} ratio={4 / 3} maxWidth={1280} sizes="(min-width: 1024px) 55vw, 100vw" />
            </Reveal>
            <Reveal variant="image" className="residential__img residential__img--small" delay={0.1}>
              <SmartImage image={images.residentialInterior} ratio={4 / 3} maxWidth={720} sizes="(min-width: 1024px) 27vw, 50vw" />
            </Reveal>
            <Reveal variant="image" className="residential__img residential__img--small" delay={0.2}>
              <SmartImage image={images.residentialFacade} ratio={4 / 3} maxWidth={720} sizes="(min-width: 1024px) 27vw, 50vw" />
            </Reveal>
            <div className="residential__badge">
              <House size={18} aria-hidden="true" />
              Homes · Apartments · Villas
            </div>
          </div>

          <div className="residential__panel">
            <ol className="residential__list">
              {residentialServices.map((service, i) => (
                <Reveal as="li" key={service.title} delay={i * 0.04}>
                  <span className="residential__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="btn-row residential__actions">
              <Button href="#contact" arrow>
                Plan Your Home Project
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
