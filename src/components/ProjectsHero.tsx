import '../styles/components/ProjectsHero.css';

interface ProjectsHeroProps {
  image: string;
  title: string;
}

const ProjectsHero = ({ image, title }: ProjectsHeroProps) => {
  return (
    <section className="projects-hero">
      {/* Text with negative space effect - image shows through */}
      <div 
        className="projects-hero-text"
        style={{ '--projects-hero-bg-image': `url(${image})` } as React.CSSProperties}
      >
        <h1 className="projects-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default ProjectsHero;

