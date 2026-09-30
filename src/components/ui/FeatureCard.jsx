import Reveal from './Reveal';
import './FeatureCard.css';

export default function FeatureCard({ icon: Icon, title, text, index, delay = 0, variant = 'default', as: Tag = 'article' }) {
  return (
    <Reveal className="feature-card-reveal" delay={delay}>
      <Tag className={`feature-card feature-card--${variant}`}>
        <div className="feature-card__head">
          {Icon && (
            <span className="feature-card__icon">
              <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
            </span>
          )}
          {index != null && (
            <span className="feature-card__index" aria-hidden="true">
              {String(index).padStart(2, '0')}
            </span>
          )}
        </div>
        <h3 className="feature-card__title">{title}</h3>
        {text && <p className="feature-card__text">{text}</p>}
      </Tag>
    </Reveal>
  );
}
