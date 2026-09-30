import { useReveal } from '../../hooks/useReveal';

/**
 * Scroll-reveal wrapper. variant: 'up' (default) | 'fade' | 'image'.
 * `delay` is in seconds and is used for light staggering.
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className, style, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      data-reveal={variant === 'up' ? '' : variant}
      className={className}
      style={delay ? { ...style, '--delay': `${delay}s` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
