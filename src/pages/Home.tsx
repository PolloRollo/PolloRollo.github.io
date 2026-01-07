import '../App.css';
import IntroSection from '../components/IntroSection';
// import RecentPosts from '../components/RecentPosts';
import RecentProjects from '../components/RecentProjects';
import Hero from '../components/Hero';
import heroImage from '../assets/images/2020_08_Highline.webp';

interface heroParams {
  image: string
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
  image: heroImage,
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

  return (
    <div className='homepage'>
      <Hero 
        image={heroParams.image}
        title={<>{heroParams.title1} <br /> 
        <span className="text-primary">{heroParams.title2}</span>
        </>}
        subtitle={heroParams.subtitle}
        primaryButton={heroParams.primaryButton}
        secondaryButton={heroParams.secondaryButton}
      />

      <IntroSection/>

      <div className="home-content-wrapper">
        <div className="content">
          <RecentProjects/>
        </div>
      </div>
    </div>
  );
}

export default Home;