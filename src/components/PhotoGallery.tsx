import PhotoCard from './PhotoCard';
import '../styles/components/PhotoGallery.css';

interface Photo {
  id: number;
  title: string;
  slug: string;
  image: string;
  attribution?: string;
  attributionUrl?: string;
  date?: string;
  location?: string;
  focalPoint?: { x: number; y: number };
}

interface PhotoGalleryProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const PhotoGallery = ({ photos, onPhotoClick }: PhotoGalleryProps) => {
  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onClick={onPhotoClick} />
      ))}
    </div>
  );
};

export default PhotoGallery;

