import { CircleCheck } from 'lucide-react';
import { sectors, trustHighlights } from '../../data/content';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import './TrustHighlights.css';

export default function TrustHighlights() {
  return (
    <section id="highlights" data-nav="projects" className="section trust" aria-labelledby="trust-title">
      <div className="container">
        <div className="trust__layout">
          <div className="trust__intro">
            <SectionHeading id="trust-title" eyebrow="Customer Trust" title="What You Can Expect from Us" />
            <Reveal as="blockquote" className="trust__statement">
              <p>
                Every project is measured on site, fabricated with care and installed with attention to the smallest
                detail — because the finish is what you live and work with every day.
              </p>
              <footer>— Umiya Enterprises</footer>
            </Reveal>
          </div>

          <ul className="trust__list rail">
            {trustHighlights.map((item, i) => (
              <Reveal as="li" key={item.title} className="trust__item" delay={i * 0.07}>
                <CircleCheck size={24} strokeWidth={2} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="trust__sectors">
          <p className="trust__sectors-label">Spaces we work on</p>
          <ul>
            {sectors.map((sector) => (
              <li key={sector}>{sector}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
