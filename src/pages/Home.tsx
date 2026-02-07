import '../App.css';
import IntroSection from '../components/IntroSection';
// import RecentPosts from '../components/RecentPosts';
import RecentProjects from '../components/RecentProjects';
import Hero from '../components/Hero';
import { handleResumeDownload } from '../lib/utils';

interface heroParams {
  title1: string
  title2: string
  subtitle: string
  primaryButton: {
    text: string
    to: string
  }
  secondaryButton: {
    text: string
    to: string
  }
}

const heroParams: heroParams = {
  title1: "Student &",
  title2: "Developer",
  subtitle: "Experimenting with tools for turning ideas into code.",
  primaryButton: {
    text: "View Projects",
    to: "/projects",
  },
  secondaryButton: {
    text: "About Me",
    to: "/about"
  }
}

function Home() {
  // Use photoId 2 (Highline Trail) for home hero
  const homeHeroPhotoId = 2;

  return (
    <div className='homepage'>
      <Hero 
        photoId={homeHeroPhotoId}
        title={<>{heroParams.title1} <br /> 
        <span className="text-primary">{heroParams.title2}</span>
        </>}
        subtitle={heroParams.subtitle}
        primaryButton={heroParams.primaryButton}
        secondaryButton={heroParams.secondaryButton}
        showAttribution={true}
      />

      <IntroSection/>

      <div className="home-content-wrapper">
        <div className="content">
          <RecentProjects/>
        </div>
      </div>

      {/* Resume Download Button */}
      <section className="about-section about-resume">
        <button 
          className="resume-button"
          onClick={handleResumeDownload}
        >
          <i className="fas fa-download"></i>
          Download Resume / CV
        </button>
      </section>
    </div>

  );
}

export default Home;