import { useState, useEffect } from 'react';
import '../styles/components/PhotoCard.css';
import cld from '../lib/cloudinary';
import { AdvancedImage } from '@cloudinary/react';

interface Photo {
  id: number;
  title: string;
  slug: string;
  cloudinary: string;
  attribution?: string;
  attributionUrl?: string;
  date?: string;
  location?: string;
  focalPoint?: { x: number; y: number };
}

interface PhotoCardProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

const PhotoCard = ({ photo, onClick }: PhotoCardProps) => {
  const [cloudinaryId, setCloudinaryId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (photo) {
      setCloudinaryId(photo.cloudinary);
    }
  }, [photo]);

  const handleClick = () => {
    onClick(photo);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(photo);
    }
  };

  return (
    <div
      className="photo-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${photo.title}`}
    >
      <div className="photo-card-image-container">
        <AdvancedImage 
          cldImg={cld.image(cloudinaryId)} 
          alt={photo.title}
          className="photo-card-image"
          loading="lazy"
        />
        <div className="photo-card-overlay">
          {(photo.attribution || photo.title || photo.date) && (
            <div className="photo-card-attribution">
              {photo.title && (
                <div className="photo-card-title">{photo.title}</div>
              )}
              {(photo.date || photo.location) && (
                <div className="photo-card-meta">
                  {photo.date && <span>{photo.date}</span>}
                  {photo.date && photo.location && <span> • </span>}
                  {photo.location && <span>{photo.location}</span>}
                </div>
              )}
              {photo.attribution && (
                <div className="photo-card-attribution-text">
                  {photo.attribution}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;

