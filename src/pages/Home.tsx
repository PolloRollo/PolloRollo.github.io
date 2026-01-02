import '../App.css';
import { Link } from 'react-router-dom';
// import IntroSection from '../components/IntroSection';
import RecentPosts from '../components/RecentPosts';
import Hero from '../components/Hero';
import heroImage from '../assets/images/2024_03_SandyCrack.webp';

function Home() {

  return (
    <div className='homepage'>
      <Hero image={heroImage}>
        <div className="glass-panel rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Developer & <br />
            <span className="text-primary">Explorer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Building thoughtful digital experiences inspired by the natural world
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="hero-button hero-button-primary"
            >
              View Projects
            </Link>
            <Link
              to="/about"
              className="hero-button hero-button-secondary"
            >
              About Me
            </Link>
          </div>
        </div>
      </Hero>
      {/*<IntroSection />*/}
      <div className="home-content-wrapper">
        <div className="content">
          <RecentPosts 
            title="Recent Projects" count={5} source='projects.json'
          ></RecentPosts>
          <RecentPosts 
            title="Publications" count={3} source='research.json'
          ></RecentPosts>
        </div>
      </div>
    </div>
  );
}

export default Home;