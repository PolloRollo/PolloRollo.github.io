import { useEffect, useState } from 'react';
import '../styles/components/PhotoLightbox.css';
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

interface PhotoLightboxProps {
  photo: Photo | null;
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PhotoLightbox = ({
  photo,
  photos,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: PhotoLightboxProps) => {
  const [cloudinaryId, setCloudinaryId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (photo) {
      setCloudinaryId(photo.cloudinary);
    }
  }, [photo]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const hasNext = currentIndex < photos.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAttributionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (photo.attributionUrl) {
      window.open(photo.attributionUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="photo-lightbox" onClick={handleBackdropClick}>
      <div className="photo-lightbox-content">
        <button
          className="photo-lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ×
        </button>

        {hasPrevious && (
          <button
            className="photo-lightbox-nav photo-lightbox-nav-prev"
            onClick={onPrevious}
            aria-label="Previous photo"
          >
            ‹
          </button>
        )}

        {hasNext && (
          <button
            className="photo-lightbox-nav photo-lightbox-nav-next"
            onClick={onNext}
            aria-label="Next photo"
          >
            ›
          </button>
        )}

        <div className="photo-lightbox-image-container">
          <AdvancedImage 
            cldImg={cld.image(cloudinaryId)} 
            alt={photo.title}
            className="photo-lightbox-image"
          />
        </div>

        <div className="photo-lightbox-info">
          {photo.title && (
            <h2 className="photo-lightbox-title">{photo.title}</h2>
          )}
          {((photo.date ?? photo.location) != null) && (
            <div className="photo-lightbox-meta">
              {photo.date && <span>{photo.date}</span>}
              {photo.date && photo.location && <span> • </span>}
              {photo.location && <span>{photo.location}</span>}
            </div>
          )}
          {photo.attribution && (
            <div
              className={`photo-lightbox-attribution ${
                photo.attributionUrl ? 'photo-lightbox-attribution-link' : ''
              }`}
              onClick={photo.attributionUrl ? handleAttributionClick : undefined}
            >
              {photo.attribution}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoLightbox;

