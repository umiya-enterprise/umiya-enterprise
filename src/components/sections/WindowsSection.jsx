import { windowBenefits, windowTypes } from '../../data/content';
import ImageTile from '../ui/ImageTile';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import './WindowsSection.css';

export default function WindowsSection() {
  return (
    <section id="windows" data-nav="services" className="section windows" aria-labelledby="windows-title">
      <div className="container">
        <div className="windows__head">
          <SectionHeading
            id="windows-title"
            eyebrow="Aluminium Windows"
            title="Aluminium Windows for Modern Spaces"
            text="Slim, strong frames that let in more light — fabricated to your measured opening, for homes, offices and showrooms."
          />

          <Reveal className="windows__benefits" delay={0.1}>
            <p className="windows__benefits-title">Why aluminium windows</p>
            <ul>
              {windowBenefits.map(({ title, icon: Icon }) => (
                <li key={title}>
                  <span className="windows__benefit-icon">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  {title}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="windows__grid" aria-label="Window types">
          {windowTypes.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.08}>
              <ImageTile
                {...item}
                kicker={String(i + 1).padStart(2, '0')}
                ratio={4 / 3}
                maxWidth={720}
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 80vw"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
