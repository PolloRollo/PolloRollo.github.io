import '../App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RecentPosts from '../components/RecentPosts';

function Home() {

  return (
    <div className='homepage'>
    <Link to="/about" className="navbar-logo">
    <Sidebar
        photoUrl='/vite.svg'
        websiteName='David Rollo'
        description='This is my website.'
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
  );
}

export default Home;