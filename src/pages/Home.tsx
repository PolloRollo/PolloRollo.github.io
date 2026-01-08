import { useState, useEffect } from 'react';
import '../App.css';
import IntroSection from '../components/IntroSection';
// import RecentPosts from '../components/RecentPosts';
import RecentProjects from '../components/RecentProjects';
import Hero from '../components/Hero';
import { loadJsonData } from '../lib/dataLoader';
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
  const [heroPhoto, setHeroPhoto] = useState<string>(heroImage);

  useEffect(() => {
    // Load photos and use the first one as hero image, or fallback to default
    loadJsonData('photos.json')
      .then((data) => {
        if (data.content && data.content.length > 0) {
          // Use the first photo from the gallery
          setHeroPhoto(data.content[0].image);
        }
      })
      .catch((error) => {
        console.error('Error loading photos for hero:', error);
        // Keep default heroImage on error
      });
  }, []);

  return (
    <div className='homepage'>
      <Hero 
        image={heroPhoto}
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