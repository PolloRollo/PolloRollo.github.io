import '../App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RecentPosts from '../components/RecentPosts';

function Home() {

  return (
    <>
    <Link to="/about" className="navbar-logo">
    <Sidebar
        photoUrl='/vite.svg'
        websiteName='David Rollo'
        description='This is my website.'
      ></Sidebar>
    </Link>
    <RecentPosts 
      title="Recent Projects" count={3} source='projects.json'
    ></RecentPosts>
    <RecentPosts 
      title="Research" count={3} source='research.json'
    ></RecentPosts>
    </>
  );
}

export default Home;