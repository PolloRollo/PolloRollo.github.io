import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const siteName = 'PolloRollo';

const tabs = [
  { id: 1, label: 'Home', link: '/' , type: 'Link'},
  { id: 2, label: 'Projects', link: '/projects' , type: 'Link'},
  { id: 3, label: 'Research', link: '/research' , type: 'Link'},
  { id: 4, label: 'About', link: '/about', type: 'Button'}
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleResize = () => {
    setIsButtonVisible(window.innerWidth <= 960);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          {siteName}
          <i className="fab fa-typo3" />
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <Link to={tab.link} className="nav-links" onClick={closeMenu}>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
        {isButtonVisible && (
          <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
