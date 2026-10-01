import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

function ServiceCard({ service, index }) {
  const { title, description, icon: Icon, image, target } = service;
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="service-card">
      <div className="service-card__media">
        <SmartImage
          image={image}
          ratio={4 / 3}
          maxWidth={720}
          sizes="(min-width: 1280px) 300px, (min-width: 900px) 30vw, 45vw"
        />
        <span className="service-card__num" aria-hidden="true">
          {number}
        </span>
      </div>
      <div className="service-card__body">
        <span className="service-card__icon">
          <Icon size={20} strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__text">{description}</p>
        <a href={`#${target}`} className="service-card__link">
          View Details
          <span className="sr-only"> about {title}</span>
          <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default memo(ServiceCard);
