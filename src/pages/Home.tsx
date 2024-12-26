import '../App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Home() {

  return (
    <>
    <Link to="/about" className="navbar-logo">
    <Sidebar
        photoUrl='/build/vite.svg'
        websiteName='David Rollo'
        description='This is my website.'
      ></Sidebar>
    </Link>
      
    </>
  );
}

export default Home;