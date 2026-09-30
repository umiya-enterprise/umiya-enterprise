import { Check } from 'lucide-react';
import { aboutAudiences, aboutHighlights, aboutStrengths } from '../../data/content';
import { images } from '../../data/images';
import FeatureCard from '../ui/FeatureCard';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" data-nav="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__layout">
          <div className="about__media">
            <Reveal variant="image" className="about__img-main">
              <SmartImage image={images.aboutMain} ratio={4 / 5} maxWidth={960} sizes="(min-width: 1024px) 40vw, 90vw" />
            </Reveal>
            <Reveal className="about__img-detail" delay={0.2}>
              <SmartImage image={images.aboutDetail} ratio={1} maxWidth={540} sizes="(min-width: 1024px) 18vw, 40vw" />
            </Reveal>
            <Reveal className="about__badge" delay={0.3}>
              <span className="about__badge-kicker">Our approach</span>
              <strong>Measured. Fabricated. Installed.</strong>
            </Reveal>
            <span className="about__frame" aria-hidden="true" />
          </div>

          <div className="about__content">
            <SectionHeading id="about-title" eyebrow="About Umiya Enterprises" title="Built with Precision. Designed to Last." />
            <Reveal className="about__copy">
              <p className="lead">
                Umiya Enterprises provides aluminium and glass fabrication solutions — from windows and sliding systems
                to doors, partitions and facades — made to measure for each space we work on.
              </p>
              <p>
                We combine quality materials with careful fabrication and professional installation, so every frame
                fits well, operates smoothly and keeps its clean finish for years of everyday use.
              </p>
            </Reveal>

            <Reveal className="about__audiences">
              <p className="about__label">We work with</p>
              <ul className="about__chips">
                {aboutAudiences.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <ul className="check-list about__strengths">
                {aboutStrengths.map((item) => (
                  <li key={item}>
                    <Check size={18} strokeWidth={2.6} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="about__cta">
              <Button href="#contact" variant="blue" arrow>
                Talk to Our Team
              </Button>
            </Reveal>
          </div>
        </div>

        <ul className="about__highlights">
          {aboutHighlights.map((item, i) => (
            <li key={item.title}>
              <FeatureCard {...item} variant="compact" delay={i * 0.06} as="div" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
