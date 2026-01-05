import '../styles/components/ResearchHero.css';

interface ResearchHeroProps {
  image: string;
  title: string;
}

const ResearchHero = ({ image, title }: ResearchHeroProps) => {
  return (
    <section className="research-hero">
      {/* Container that matches image size with background color */}
      <div className="research-hero-container">
        {/* Background image positioned behind */}
        <div className="research-hero-background">
          <img src={image} alt="Research hero background" />
        </div>
        
        {/* Text box with background color - text acts as window to image */}
        <div 
          className="research-hero-text-box"
          style={{ '--research-hero-bg-image': `url(${image})` } as React.CSSProperties}
        >
          <h1 className="research-hero-title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default ResearchHero;

