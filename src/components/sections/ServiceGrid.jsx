import { services } from '../../data/services';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from './ServiceCard';
import './ServiceGrid.css';

export default function ServiceGrid() {
  return (
    <section id="services" data-nav="services" className="section section--light services" aria-labelledby="services-title">
      <div className="grid-lines" aria-hidden="true" />
      <div className="container">
        <div className="services__head">
          <SectionHeading
            id="services-title"
            eyebrow="Our Services"
            title="Aluminium & Glass Solutions for Every Space"
          />
          <Reveal className="services__intro">
            <p className="lead">
              From a single window to a full office fit-out — designed, fabricated and installed by one team.
            </p>
            <Button href="#contact" variant="outline" arrow>
              Request a Quote
            </Button>
          </Reveal>
        </div>

        <ul className="services__grid">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={(index % 4) * 0.06}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
