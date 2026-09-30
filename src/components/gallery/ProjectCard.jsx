import { memo } from 'react';
import { Maximize2 } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

function ProjectCard({ project, index, onOpen }) {
  const { title, type, image, size } = project;
  return (
    <li className={`project-card project-card--${size}`} style={{ '--i': index }}>
      <button type="button" className="project-card__btn" onClick={() => onOpen(index)} aria-label={`View ${title} (${type}) in full screen`}>
        <SmartImage
          image={image}
          maxWidth={size === 'wide' ? 1280 : 720}
          ratio={size === 'tall' ? 3 / 4 : size === 'wide' ? 16 / 9 : 1}
          sizes={size === 'wide' ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
          className="project-card__img"
        />
        <span className="project-card__overlay" aria-hidden="true">
          <span className="project-card__zoom">
            <Maximize2 size={18} strokeWidth={2.2} />
          </span>
          <span className="project-card__meta">
            <span className="project-card__type">{type}</span>
            <span className="project-card__title">{title}</span>
          </span>
        </span>
      </button>
    </li>
  );
}

export default memo(ProjectCard);
