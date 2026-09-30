import { ArrowRight } from 'lucide-react';

/**
 * Brand button. Renders an <a> when `href` is set, otherwise a <button>.
 * variant: primary | blue | outline | light | ghost
 */
export default function Button({
  href,
  variant = 'primary',
  size,
  block = false,
  arrow = false,
  icon: Icon,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, size && `btn--${size}`, block && 'btn--block', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {Icon && <Icon size={18} strokeWidth={2.2} aria-hidden="true" />}
      <span>{children}</span>
      {arrow && <ArrowRight className="btn__arrow" size={18} strokeWidth={2.2} aria-hidden="true" />}
    </>
  );

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
