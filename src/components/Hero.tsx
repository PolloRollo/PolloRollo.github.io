import { ReactNode, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/components/Hero.css';
import { getPhotoById, Photo } from '../lib/utils';
import cld from '../lib/cloudinary'; // Import the singleton
import { AdvancedImage } from '@cloudinary/react';

interface HeroButton {
  text: string;
  to: string;
  icon?: ReactNode;
}

interface HeroProps {
  photoId?: number;
  image?: string; // Fallback for backward compatibility
  title?: string | ReactNode;
  subtitle?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
  children?: ReactNode;
  showAttribution?: boolean;
}


const Hero = ({
  photoId,
  image,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  children,
  showAttribution = false,
}: HeroProps) => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [cloudinaryId, setCloudinaryId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (photoId) {
      getPhotoById(photoId).then(p => {
        if (p) {
          setPhoto(p);
          setCloudinaryId(p.cloudinary);
        }
      });
    }
  }, [photoId, image]);

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <AdvancedImage cldImg={cld.image(cloudinaryId)} />
        <div className="hero-overlay" />
        {showAttribution && photo && photo.attribution && (
          <div className="hero-attribution">
            {photo.location && `${photo.location}`}
            {photo.date && ` • ${photo.date}`}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="hero-content">
        {children ? (
          children
        ) : (
          <div className="hero-text-box">
            {title && (
              <h1 className="hero-title">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="hero-subtitle">
                {subtitle}
              </p>
            )}
            {(primaryButton || secondaryButton) && (
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
                {primaryButton && (
                  <Link
                    to={primaryButton.to}
                    className="hero-button hero-button-primary"
                  >
                    {primaryButton.text}
                    {primaryButton.icon}
                  </Link>
                )}
                {secondaryButton && (
                  <Link
                    to={secondaryButton.to}
                    className="hero-button hero-button-secondary"
                  >
                    {secondaryButton.text}
                    {secondaryButton.icon}
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
