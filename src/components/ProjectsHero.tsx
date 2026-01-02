import '../styles/components/ProjectsHero.css';

interface ProjectsHeroProps {
  image: string;
  title: string;
}

const ProjectsHero = ({ image, title }: ProjectsHeroProps) => {
  return (
    <section className="projects-hero">
      {/* Image Container */}
      <div className="projects-hero-image">
        <img src={image} alt="Projects hero" />
      </div>
      
      {/* Text with negative space effect */}
      <div className="projects-hero-text">
        <h1 className="projects-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default ProjectsHero;

