import '../App.css';
import IntroSection from '../components/IntroSection';
import RecentPosts from '../components/RecentPosts';
import RecentProjects from '../components/RecentProjects';
import Hero from '../components/Hero';
import heroImage from '../assets/images/2024_03_SandyCrack.webp';

function Home() {

  return (
    <div className='homepage'>
      <Hero 
        image={heroImage}
        title={
          <>
            Title1 & <br />
            <span className="text-primary">Title2</span>
          </>
        }
        subtitle="Building thoughtful digital experiences inspired by the natural world"
        primaryButton={{
          text: "View Projects",
          to: "/projects"
        }}
        secondaryButton={{
          text: "About Me",
          to: "/about"
        }}
      />
      <IntroSection/>
      <div className="home-content-wrapper">
        <div className="content">
          <RecentProjects />
          <RecentPosts 
            title="Publications" count={3} source='research.json'
          ></RecentPosts>
        </div>
      </div>
    </div>
  );
}

export default Home;