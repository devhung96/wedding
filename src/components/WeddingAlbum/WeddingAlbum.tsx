import React from 'react';
import './WeddingAlbum.scss';

interface WeddingAlbumProps {
  title: string;
  images: {
    src: string;
    alt: string;
    className?: string;
    order?: number;
  }[];
}

const WeddingAlbum: React.FC<WeddingAlbumProps> = ({ title, images }) => {
  return (
    <div className="wedding-album">
      <div className="album-header">
        <h2 className="title">{title}</h2>
        <div className="line-right"></div>
      </div>

      <div className="album-grid offset-right">
        {images.sort((a, b) => (a.order || 0) - (b.order || 0)).map((image, index) => (
          <div
            key={index}
            className={`album-item ${image.className || ''}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingAlbum;