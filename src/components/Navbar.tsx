import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { NavLink } from './NavLink';
import '../styles/components/Navbar.css';

// Configurable values - could be moved to a config file or props
const BRAND_NAME = 'PolloRollo';
const BRAND_ICON = 'fa-solid fa-mountain-sun'; // Font Awesome icon class

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  //{ to: '/research', label: 'Research' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar-header">
      <div className="navbar-glass-panel">
        <div className="navbar-container">
          <nav className="navbar-nav">
            {/* Logo */}
            <Link
              to="/"
              className="navbar-logo"
              onClick={() => setIsOpen(false)}
            >
              <i className={BRAND_ICON}></i>
              <span className="navbar-logo-text">{BRAND_NAME}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-desktop">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="navbar-link"
                  activeClassName="navbar-link-active"
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={toggleTheme}
                className="navbar-theme-toggle"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="navbar-mobile-controls">
              <button
                onClick={toggleTheme}
                className="navbar-theme-toggle"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="navbar-menu-toggle"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="navbar-mobile-menu">
              <div className="navbar-mobile-links">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="navbar-mobile-link"
                    activeClassName="navbar-mobile-link-active"
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
