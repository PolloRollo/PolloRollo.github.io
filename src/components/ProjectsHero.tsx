import { useState, useEffect } from 'react';
import '../styles/components/ProjectsHero.css';
import { getPhotoById, Photo } from '../lib/utils';
import cld from '../lib/cloudinary'; // Import the singleton

interface FocalPoint {
  x: number; // 0-100
  y: number; // 0-100
}

interface ProjectsHeroProps {
  photoId?: number;
  image?: string; // Fallback for backward compatibility
  title: string;
  focalPoint?: FocalPoint; // Override focal point if needed
  showAttribution?: boolean;
}

const ProjectsHero = ({ photoId, image, title, focalPoint, showAttribution = false }: ProjectsHeroProps) => {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [photoImage, setPhotoImage] = useState<string>('');
  const [bgPosition, setBgPosition] = useState<string>('center center');

  useEffect(() => {
    if (photoId) {
      getPhotoById(photoId).then(p => {
        if (p) {
          setPhoto(p);
          // Generate Cloudinary URL from cloudinaryId
          if (p.cloudinary) {
            const cloudinaryUrl = cld.image(p.cloudinary).toURL();
            setPhotoImage(cloudinaryUrl);
          } else if (p.image) {
            // Fallback to regular image if cloudinary not available
            setPhotoImage(p.image);
          }
          // Use photo's focalPoint if not overridden
          const effectiveFocalPoint = focalPoint || p.focalPoint;
          if (effectiveFocalPoint) {
            setBgPosition(`${effectiveFocalPoint.x}% ${effectiveFocalPoint.y}%`);
          } else {
            setBgPosition('center center');
          }
        }
      });
    } else if (image) {
      setPhotoImage(image);
      if (focalPoint) {
        setBgPosition(`${focalPoint.x}% ${focalPoint.y}%`);
      } else {
        setBgPosition('center center');
      }
    }
  }, [photoId, image, focalPoint]);
    
  return (
    <section className="projects-hero">
      {/* Text with negative space effect - image shows through */}
      <div 
        className="projects-hero-text"
        style={{ 
          '--projects-hero-bg-image': `url(${photoImage})`,
          '--projects-hero-bg-position': bgPosition
        } as React.CSSProperties}
      >
        <h1 className="projects-hero-title">{title}</h1>
        {showAttribution && photo && photo.attribution && (
          <div className="projects-hero-attribution">
            {photo.location && `${photo.location}`}
            {photo.date && ` • ${photo.date}`}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsHero;

