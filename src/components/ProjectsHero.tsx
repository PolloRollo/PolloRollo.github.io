import '../styles/components/ProjectsHero.css';

interface FocalPoint {
  x: number; // 0-100
  y: number; // 0-100
}

interface ProjectsHeroProps {
  image: string;
  title: string;
  focalPoint?: FocalPoint;
}

const ProjectsHero = ({ image, title, focalPoint }: ProjectsHeroProps) => {
  const bgPosition = focalPoint 
    ? `${focalPoint.x}% ${focalPoint.y}%`
    : "center center";
    
  return (
    <section className="projects-hero">
      {/* Text with negative space effect - image shows through */}
      <div 
        className="projects-hero-text"
        style={{ 
          '--projects-hero-bg-image': `url(${image})`,
          '--projects-hero-bg-position': bgPosition
        } as React.CSSProperties}
      >
        <h1 className="projects-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default ProjectsHero;

