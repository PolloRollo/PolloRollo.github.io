import '../App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RecentPosts from '../components/RecentPosts';
import heroImage from '../assets/images/2024_03_SandyCrack.webp';

function Home() {

  return (
    <div className='homepage'>
      <div className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` }}>
        <h1 className="hero-title">Welcome to PolloRollo</h1>
        <p className="hero-subtitle">a Github site by David Rollo</p>
      </div>
      <div className="home-content-wrapper">
        <Link to="/about" className="navbar-logo">
          <Sidebar
            photoUrl='/src/assets/images/IMG_0453.webp'
            websiteName='ME'
            description='Click here to learn more.'
          ></Sidebar>
        </Link>
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