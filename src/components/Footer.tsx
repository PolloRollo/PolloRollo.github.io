import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

// Configurable values - could be moved to a config file or props
const BRAND_NAME = 'PolloRollo';
const COPYRIGHT_NAME = 'David Rollo';

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  //{ label: 'Research', to: '/research' },
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/pollorollo',
    iconClass: 'fa-brands fa-github',
    ariaLabel: 'GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/david-rollo-126080269/',
    iconClass: 'fa-brands fa-linkedin',
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:davidarollo@outlook.com',
    iconClass: 'fa-regular fa-envelope',
    ariaLabel: 'Email',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <i className="fa-solid fa-mountain-sun footer-logo-icon"></i>
              <span className="footer-logo-text">{BRAND_NAME}</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4 className="footer-heading">Navigate</h4>
            <nav className="footer-nav">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="footer-social-link"
                  aria-label={social.ariaLabel}
                >
                  <i className={social.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {COPYRIGHT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
