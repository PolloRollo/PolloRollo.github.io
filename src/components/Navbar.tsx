import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
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
  const { theme, toggleTheme } = useTheme();

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
        <div className="navbar-toggle-container">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'} />
          </button>
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
      </div>
    </nav>
  );
};

export default Navbar;
