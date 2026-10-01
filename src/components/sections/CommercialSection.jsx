import { commercialUseCases } from '../../data/content';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import './CommercialSection.css';

export default function CommercialSection() {
  return (
    <section id="commercial" data-nav="services" className="section commercial" aria-labelledby="commercial-title">
      <div className="container">
        <div className="commercial__head">
          <SectionHeading
            id="commercial-title"
            eyebrow="Commercial Solutions"
            title="Aluminium & Glass for Business Spaces"
            text="Windows, doors, partitions, shopfronts and facades for business spaces that need to look professional every day."
          />
        </div>

        <ul className="commercial__grid rail">
          {commercialUseCases.map(({ title, text, icon: Icon, image }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 0.07}>
              <article className="use-case">
                <div className="use-case__media">
                  <SmartImage image={image} ratio={16 / 10} maxWidth={720} sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 75vw" />
                </div>
                <div className="use-case__body">
                  <span className="use-case__icon">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal as="li" delay={0.14}>
            <div className="commercial__cta">
              <p className="commercial__cta-kicker">Have a commercial project?</p>
              <h3>Tell us about your site, timeline and requirements.</h3>
              <Button href="#contact" variant="light" arrow>
                Discuss Your Project
              </Button>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
