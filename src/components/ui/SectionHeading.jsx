import Reveal from './Reveal';
import './SectionHeading.css';

/**
 * Section eyebrow + heading + optional intro. The eyebrow mark echoes the slanted bars of the logo's "E".
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  align = 'left',
  tone = 'default',
  as: Tag = 'h2',
  className = '',
  children,
}) {
  return (
    <Reveal className={`section-heading section-heading--${align} section-heading--${tone} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag id={id} className="section-heading__title">
        {title}
      </Tag>
      {text && <p className="section-heading__text lead">{text}</p>}
      {children}
    </Reveal>
  );
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`eyebrow ${className}`}>
      <span className="eyebrow__mark" aria-hidden="true">
        <span />
        <span />
      </span>
      {children}
    </p>
  );
}
