import { whyChooseUs } from '../../data/content';
import Button from '../ui/Button';
import FeatureCard from '../ui/FeatureCard';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section id="why-us" data-nav="why-us" className="section section--light why" aria-labelledby="why-title">
      <div className="grid-lines" aria-hidden="true" />
      <div className="container why__layout">
        <div className="why__intro">
          <SectionHeading
            id="why-title"
            eyebrow="Why Choose Us"
            title="Why Choose Umiya Enterprises?"
            text="Good aluminium work is about the details — accurate measurement, the right materials, neat joints and careful installation. That is how we approach every job, big or small."
          />
          <Reveal className="why__panel">
            <p className="why__panel-title">Aluminium · Glass · Fabrication</p>
            <p>One team for windows, doors, sliding systems, partitions and facades — from the first site visit to the final fitting.</p>
            <Button href="#contact" arrow>
              Get a Free Quote
            </Button>
          </Reveal>
        </div>

        <ul className="why__grid">
          {whyChooseUs.map((item, i) => (
            <li key={item.title}>
              <FeatureCard {...item} index={i + 1} delay={(i % 2) * 0.08} as="div" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
