import '../styles/components/ResearchHero.css';

interface ResearchHeroProps {
  image: string;
  title: string;
}

const ResearchHero = ({ image, title }: ResearchHeroProps) => {
  return (
    <section 
      className="research-hero"
      style={{ '--research-hero-bg-image': `url(${image})` } as React.CSSProperties}
    >
      {/* Background image that will be clipped by text */}
      <div className="research-hero-background">
        <img src={image} alt="Research hero background" />
      </div>
      
      {/* Text that acts as a window to the image */}
      <h1 className="research-hero-title">{title}</h1>
    </section>
  );
};

export default ResearchHero;

