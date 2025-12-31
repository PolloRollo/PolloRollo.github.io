import { useState } from 'react';
import Card from './Card';
import './Carousel.css';

interface CarouselProps {
  title: string;
  items: Array<{
    id: number;
    title: string;
    slug: string;
    image?: string;
    keywords?: string[];
    abstract?: string;
  }>;
  category: string;
}

function Carousel({ title, items, category }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper">
        {items.length > 1 && (
          <button 
            className="carousel-button carousel-button-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
        )}
        <div className="carousel-slide-container">
          <div 
            className="carousel-slides" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => (
              <div key={item.id} className="carousel-slide">
                <Card 
                  id={item.id}
                  title={item.title}
                  slug={item.slug}
                  category={category}
                  image={item.image}
                  keywords={item.keywords}
                  abstract={item.abstract}
                />
              </div>
            ))}
          </div>
        </div>
        {items.length > 1 && (
          <button 
            className="carousel-button carousel-button-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        )}
      </div>
      {items.length > 1 && (
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;

