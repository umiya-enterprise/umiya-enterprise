import { Check } from 'lucide-react';
import { officePartitions } from '../../data/content';
import Button from '../ui/Button';
import ImageTile from '../ui/ImageTile';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import './OfficePartitions.css';

const planningPoints = [
  'Site visit and accurate measurement',
  'Layouts planned around your team and workflow',
  'Clear, frosted, tinted or board infill options',
];

export default function OfficePartitions() {
  return (
    <section
      id="office-partitions"
      data-nav="services"
      className="section section--light office"
      aria-labelledby="office-title"
    >
      <div className="container">
        <div className="office__head">
          <SectionHeading
            id="office-title"
            eyebrow="Office Partitions"
            title="Office Aluminium & Glass Partitions"
            text="Glass cabins, conference rooms and workstation divisions with neat aluminium framing — organised, open and professional."
          />
        </div>

        <ul className="office__bento rail">
          {officePartitions.map((item, i) => (
            <Reveal as="li" key={item.title} className={`office__cell office__cell--${i + 1}`} variant="fade" delay={(i % 3) * 0.08}>
              <ImageTile
                {...item}
                ratio={i === 0 ? 1 : 4 / 3}
                maxWidth={i === 0 ? 1280 : 720}
                sizes={i === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
              />
            </Reveal>
          ))}

          <Reveal as="li" className="office__cell office__cell--cta" variant="fade" delay={0.16}>
            <div className="office__plan">
              <h3 className="office__plan-title">Planning a new office or a renovation?</h3>
              <p>Share your floor plan or requirement and we will suggest a practical partition layout and material options.</p>
              <ul className="office__plan-list">
                {planningPoints.map((point) => (
                  <li key={point}>
                    <Check size={16} strokeWidth={2.8} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button href="#contact" arrow>
                Plan Your Office Space
              </Button>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
