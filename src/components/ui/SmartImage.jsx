import { memo } from 'react';
import { getImageSources } from '../../utils/image';

/**
 * Responsive, lazy-loaded image from the central registry (data/images.js).
 * `ratio` crops on the CDN (width / height); `sizes` should describe the rendered width.
 */
function SmartImage({ image, alt, sizes = '100vw', maxWidth = 1280, ratio, priority = false, className, width, height }) {
  if (!image) return null;
  const { src, srcSet } = getImageSources(image, { maxWidth, ratio });
  const w = width ?? 1200;
  const h = height ?? Math.round(w / (ratio || 1.5));

  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt ?? image.alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
    />
  );
}

export default memo(SmartImage);
