import { processSteps } from '../../data/content';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import './ProcessTimeline.css';

export default function ProcessTimeline() {
  return (
    <section id="process" data-nav="projects" className="section section--dark process" aria-labelledby="process-title">
      <div className="process__grid-bg" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="process-title"
          tone="light"
          align="center"
          eyebrow="How We Work"
          title="A Clear Process from Idea to Installation"
          text="Five straightforward steps, so you always know what happens next."
        />

        <ol className="process__steps">
          {processSteps.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} className="process__step" delay={i * 0.1}>
              <div className="process__marker">
                <span className="process__icon">
                  <Icon size={24} strokeWidth={1.9} aria-hidden="true" />
                </span>
              </div>
              <div className="process__body">
                <span className="process__num">Step {String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
