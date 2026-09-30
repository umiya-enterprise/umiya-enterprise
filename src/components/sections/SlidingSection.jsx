import { slidingItems } from '../../data/content';
import Button from '../ui/Button';
import ImageTile from '../ui/ImageTile';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import './SlidingSection.css';

const features = ['Space-saving operation', 'Wide, open views', 'Custom panel sizes', 'Homes, balconies & offices'];

export default function SlidingSection() {
  return (
    <section id="sliding" data-nav="services" className="section section--dark sliding" aria-labelledby="sliding-title">
      <div className="sliding__lines" aria-hidden="true" />
      <div className="container">
        <div className="sliding__head">
          <SectionHeading
            id="sliding-title"
            tone="light"
            eyebrow="Sliding Windows & Doors"
            title="Seamless Sliding. Modern Living."
            text="Sliding systems open up rooms without taking up space. We build large glass sliding doors, balcony sliders and office sliding systems that glide easily and look sharp when closed."
          />
          <Reveal className="sliding__cta">
            <Button href="#contact" arrow>
              Get Sliding System Quote
            </Button>
          </Reveal>
        </div>

        <ul className="sliding__gallery">
          {slidingItems.map((item, i) => (
            <Reveal as="li" key={item.title} className={`sliding__item sliding__item--${i + 1}`} variant="fade" delay={i * 0.08}>
              <ImageTile
                {...item}
                ratio={i === 0 ? 4 / 5 : 3 / 2}
                maxWidth={i === 0 ? 1280 : 960}
                sizes={i === 0 ? '(min-width: 1024px) 45vw, 100vw' : '(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw'}
              />
            </Reveal>
          ))}
        </ul>

        <Reveal as="ul" className="sliding__features" aria-label="Sliding system highlights">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
