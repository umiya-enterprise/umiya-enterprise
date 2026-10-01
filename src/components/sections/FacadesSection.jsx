import { facadeTypes } from '../../data/content';
import { images } from '../../data/images';
import Button from '../ui/Button';
import ImageTile from '../ui/ImageTile';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import './FacadesSection.css';

export default function FacadesSection() {
  return (
    <section id="facades" data-nav="services" className="facades" aria-labelledby="facades-title">
      <div className="facades__banner">
        <div className="facades__bg" aria-hidden="true">
          <SmartImage image={images.facadeBackdrop} alt="" maxWidth={1920} sizes="100vw" />
        </div>
        <div className="container facades__intro">
          <SectionHeading
            id="facades-title"
            tone="light"
            eyebrow="Glass & Aluminium Facades"
            title="Modern Facades. Strong First Impressions."
            text="Aluminium and glass facades that give offices, showrooms and commercial buildings a clean, contemporary face."
          />
          <Reveal className="btn-row">
            <Button href="#contact" arrow>
              Discuss a Facade Project
            </Button>
            <Button href="#projects" variant="ghost">
              See Our Work
            </Button>
          </Reveal>
        </div>
      </div>

      <div className="container">
        <ul className="facades__cards" aria-label="Facade applications">
          {facadeTypes.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.07}>
              <ImageTile
                {...item}
                kicker={String(i + 1).padStart(2, '0')}
                ratio={3 / 4}
                maxWidth={540}
                sizes="(min-width: 1024px) 240px, 60vw"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
