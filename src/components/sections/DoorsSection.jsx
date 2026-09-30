import { Check } from 'lucide-react';
import { doorTypes } from '../../data/content';
import { images } from '../../data/images';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import './DoorsSection.css';

export default function DoorsSection() {
  return (
    <section id="doors" data-nav="services" className="section doors" aria-labelledby="doors-title">
      <div className="container doors__layout">
        <div className="doors__content">
          <SectionHeading
            id="doors-title"
            eyebrow="Aluminium Doors"
            title="Doors That Make a Clean Entrance"
            text="Aluminium doors combine strength with slim, modern lines. We fabricate doors for homes, offices, shops and factories — with glass panels, solid infill or a mix of both, in finishes that match your windows."
          />
          <Reveal>
            <ul className="check-list doors__list">
              {doorTypes.map((type) => (
                <li key={type}>
                  <Check size={18} strokeWidth={2.6} aria-hidden="true" />
                  {type}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="btn-row">
            <Button href="#contact" arrow>
              Enquire About Doors
            </Button>
            <Button href="#projects" variant="outline">
              View Projects
            </Button>
          </Reveal>
        </div>

        <div className="doors__media">
          <Reveal variant="image" className="doors__img doors__img--main">
            <SmartImage image={images.doorsMain} ratio={3 / 4} maxWidth={960} sizes="(min-width: 1024px) 30vw, 60vw" />
          </Reveal>
          <Reveal variant="image" className="doors__img doors__img--side" delay={0.15}>
            <SmartImage image={images.doorsDetail} ratio={3 / 4} maxWidth={720} sizes="(min-width: 1024px) 22vw, 40vw" />
          </Reveal>
          <div className="doors__tag" aria-hidden="true">
            <span>Entrance</span>
            <span>Openable</span>
            <span>Sliding</span>
          </div>
        </div>
      </div>
    </section>
  );
}
