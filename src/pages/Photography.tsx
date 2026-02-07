import { useState, useEffect } from 'react';
import ProjectsHero from '../components/ProjectsHero';
import PhotoGallery from '../components/PhotoGallery';
import PhotoLightbox from '../components/PhotoLightbox';
import { loadJsonData } from '../lib/utils';
import '../styles/pages/Photography.css';

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

function Photography() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    loadJsonData('photos.json')
      .then((data) => {
        setPhotos(data.content);
      })
      .catch((error) => {
        console.error('Error loading photos:', error);
      });
  }, []);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedPhoto(null);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex < photos.length - 1) {
      setSelectedPhoto(photos[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex > 0) {
      setSelectedPhoto(photos[currentIndex - 1]);
    }
  };

  // Use photoId 6 (Sandy Crack) for photography hero
  const photographyHeroPhotoId = 10;

  return (
    <div className="photography-page">
      <ProjectsHero
        photoId={photographyHeroPhotoId}
        title="Images"
        showAttribution={true}
      />
      <div className="photography-content">
        <PhotoGallery photos={photos} onPhotoClick={handlePhotoClick} />
      </div>
      <PhotoLightbox
        photo={selectedPhoto}
        photos={photos}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default Photography;

