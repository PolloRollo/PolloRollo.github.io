import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import '../styles/components/IntroSection.css';
import cld from '../lib/cloudinary';
import { AdvancedImage } from '@cloudinary/react';

interface IntroSectionProps {
  image?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkTo?: string;
}

const IntroSection = ({ 
  image = siteConfig.intro.image,
  title = siteConfig.intro.title,
  description = siteConfig.intro.description,
  linkText = siteConfig.intro.linkText,
  linkTo = siteConfig.intro.linkTo,
}: IntroSectionProps) => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <Link
          to={linkTo}
          className="intro-link"
        >
          <div className="intro-content">
            {image && (
              <div className="intro-image-wrapper">
                <AdvancedImage
                  cldImg={cld.image(image)}
                  alt="Profile"
                  className="intro-image"
                />
              </div>
            )}
            <div className="intro-text">
              <h2 className="intro-title">
                {title}
              </h2>
              <p className="intro-description">
                {description}
              </p>
              <span className="intro-link-text">
                {linkText}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;

