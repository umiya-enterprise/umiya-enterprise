import { memo } from 'react';
import SmartImage from './SmartImage';
import './ImageTile.css';

/** Image card with a caption over a gradient. Used across the solution sections. */
function ImageTile({ image, title, text, kicker, icon: Icon, ratio = 4 / 3, sizes, maxWidth = 960, className = '', as: Tag = 'figure' }) {
  return (
    <Tag className={`image-tile ${className}`}>
      <SmartImage image={image} ratio={ratio} maxWidth={maxWidth} sizes={sizes} className="image-tile__img" />
      <div className="image-tile__caption">
        {Icon && (
          <span className="image-tile__icon">
            <Icon size={18} strokeWidth={2} aria-hidden="true" />
          </span>
        )}
        {kicker && <span className="image-tile__kicker">{kicker}</span>}
        <h3 className="image-tile__title">{title}</h3>
        {text && <p className="image-tile__text">{text}</p>}
      </div>
    </Tag>
  );
}

export default memo(ImageTile);
