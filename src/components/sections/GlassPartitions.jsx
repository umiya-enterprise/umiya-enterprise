import { glassPartitionTypes } from '../../data/content';
import { images } from '../../data/images';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import './GlassPartitions.css';

export default function GlassPartitions() {
  return (
    <section id="glass-partitions" data-nav="services" className="section glass" aria-labelledby="glass-title">
      <div className="container glass__layout">
        <div className="glass__media">
          <Reveal variant="image" className="glass__img">
            <SmartImage image={images.glassMain} ratio={5 / 4} maxWidth={1280} sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
          <Reveal className="glass__inset" delay={0.2}>
            <SmartImage image={images.glassDetail} ratio={4 / 3} maxWidth={540} sizes="(min-width: 1024px) 20vw, 40vw" />
          </Reveal>
          <p className="glass__label" aria-hidden="true">
            Clear · Frosted · Framed
          </p>
        </div>

        <div className="glass__content">
          <SectionHeading
            id="glass-title"
            eyebrow="Glass Partitions"
            title="Divide Spaces. Keep the Light."
            text="Separate rooms while keeping them bright — for offices, clinics, showrooms and homes, with frosting where privacy is needed."
          />
          <ol className="glass__types">
            {glassPartitionTypes.map((type, i) => (
              <Reveal as="li" key={type.title} delay={i * 0.06}>
                <span className="glass__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{type.title}</h3>
                  <p>{type.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Button href="#contact" variant="blue" arrow>
              Discuss Glass Partitions
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
