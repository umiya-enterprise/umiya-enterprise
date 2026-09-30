import { factoryItems } from '../../data/content';
import { images } from '../../data/images';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import './FactoryPartitions.css';

const mosaic = [
  { image: images.factoryOffice, caption: 'Office cabins' },
  { image: images.factoryWorkspace, caption: 'Industrial sites' },
  { image: images.factoryFabrication, caption: 'Aluminium framing' },
  { image: images.factoryFloor, caption: 'Workspace divisions' },
];

export default function FactoryPartitions() {
  return (
    <section
      id="factory-partitions"
      data-nav="services"
      className="section factory"
      aria-labelledby="factory-title"
    >
      <div className="factory__texture" aria-hidden="true" />
      <div className="container factory__layout">
        <div className="factory__content">
          <SectionHeading
            id="factory-title"
            tone="light"
            eyebrow="Factory & Industrial"
            title="Functional Partition Solutions for Industrial Spaces"
            text="Factories need spaces that are organised, safe to work in and easy to supervise. We build aluminium and glass partitions, office cabins and work area divisions that fit around production floors and warehouses."
          />
          <Reveal as="ul" className="factory__list">
            {factoryItems.map((item, i) => (
              <li key={item}>
                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </Reveal>
          <Reveal className="btn-row">
            <Button href="#contact" arrow>
              Discuss Factory Requirements
            </Button>
          </Reveal>
        </div>

        <ul className="factory__mosaic">
          {mosaic.map((item, i) => (
            <Reveal as="li" key={item.caption} variant="image" delay={i * 0.1} className={`factory__tile factory__tile--${i + 1}`}>
              <figure>
                <SmartImage image={item.image} ratio={4 / 5} maxWidth={720} sizes="(min-width: 1024px) 22vw, 45vw" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
