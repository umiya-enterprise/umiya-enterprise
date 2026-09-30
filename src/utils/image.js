const UNSPLASH_BASE = 'https://images.unsplash.com/photo-';
const WIDTHS = [360, 540, 720, 960, 1280, 1600, 1920];

function unsplashUrl(id, width, ratio) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    q: width > 1000 ? '70' : '72',
    w: String(width),
  });
  if (ratio) params.set('h', String(Math.round(width / ratio)));
  return `${UNSPLASH_BASE}${id}?${params}`;
}

/**
 * Builds src / srcSet for an image registry entry.
 * @param {object} image  Entry from data/images.js
 * @param {object} opts   maxWidth: largest rendition needed, ratio: width / height crop
 */
export function getImageSources(image, { maxWidth = 1280, ratio } = {}) {
  if (!image) return {};
  if (image.provider === 'local') return { src: image.src };

  const widths = WIDTHS.filter((w) => w <= maxWidth);
  if (widths[widths.length - 1] !== maxWidth) widths.push(maxWidth);

  return {
    src: unsplashUrl(image.id, widths[Math.min(2, widths.length - 1)], ratio),
    srcSet: widths.map((w) => `${unsplashUrl(image.id, w, ratio)} ${w}w`).join(', '),
  };
}
