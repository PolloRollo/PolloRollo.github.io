import { ReactNode } from "react";
import { Link } from "react-router-dom";
import '../styles/components/Hero.css';

interface HeroButton {
  text: string;
  to: string;
  icon?: ReactNode;
}

interface HeroProps {
  image: string;
  title?: string | ReactNode;
  subtitle?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
  children?: ReactNode;
}


const Hero = ({
  image,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  children,
}: HeroProps) => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img src={image} alt="Hero background" />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        {children ? (
          children
        ) : (
          <div className="hero-text-box">
            {title && (
              <h1 className="hero-title">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="hero-subtitle">
                {subtitle}
              </p>
            )}
            {(primaryButton || secondaryButton) && (
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
                {primaryButton && (
                  <Link
                    to={primaryButton.to}
                    className="hero-button hero-button-primary"
                  >
                    {primaryButton.text}
                    {primaryButton.icon}
                  </Link>
                )}
                {secondaryButton && (
                  <Link
                    to={secondaryButton.to}
                    className="hero-button hero-button-secondary"
                  >
                    {secondaryButton.text}
                    {secondaryButton.icon}
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
