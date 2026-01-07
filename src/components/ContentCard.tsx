import { Link } from "react-router-dom";
import { siteConfig } from '../config/siteConfig';
import '../styles/components/ContentCard.css';

interface ContentCardProps {
  title: string;
  abstract?: string;
  keywords?: string[];
  image?: string;
  href: string;
  variant?: "default" | "featured" | "compact";
  category?: string;
}

const ContentCard = ({
  title,
  keywords = [],
  image,
  href,
  variant = "default",
  category,
}: ContentCardProps) => {
  // Get category config if category exists
  const categoryConfig = category && siteConfig.projectCategories[category as keyof typeof siteConfig.projectCategories];
  
  // Get badge style with auto-contrast text color
  const getBadgeStyle = () => {
    if (!categoryConfig) return undefined;
    
    const hslValues = categoryConfig.color.split(' ');
    const lightness = parseInt(hslValues[2]);
    const textColor = lightness > 50 ? '20%' : '95%';
    
    return {
      backgroundColor: `hsl(${categoryConfig.color})`,
      color: `hsl(${hslValues[0]} ${hslValues[1]}% ${textColor})`,
    };
  };

  const badgeStyle = getBadgeStyle();

  // Render category badge component
  const renderCategoryBadge = () => {
    if (!categoryConfig) return null;
    
    return (
      <div className="content-card-category-badge" style={badgeStyle}>
        <span className="content-card-category-label">{categoryConfig.label}</span>
      </div>
    );
  };
  if (variant === "compact") {
    return (
      <Link to={href} className="content-card content-card-compact" data-category={category}>
        <article className="content-card-compact-inner">
          {image && (
            <div className="content-card-image-compact">
              <img
                src={image}
                alt={title}
                className="content-card-image"
                loading="lazy"
              />
            </div>
          )}
          {renderCategoryBadge()}
          <div className="content-card-compact-content">
            <h3 className="content-card-title content-card-title-compact">
              {title}
            </h3>
            {keywords.length > 0 && (
              <div className="content-card-keywords">
                {keywords.slice(0, 2).map((keyword, index) => (
                <span key={index} className="content-card-tag content-card-tag-small">
                  {keyword}
                </span>
              ))}
              </div>
            )}
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link to={href} className="content-card content-card-featured" data-category={category}>
        <article className="content-card-featured-inner">
          {image && (
            <div className="content-card-image-featured">
              <img
                src={image}
                alt={title}
                className="content-card-image"
                loading="lazy"
              />
            </div>
          )}
          {renderCategoryBadge()}
          <div className="content-card-featured-content">
            <div className="content-card-header">
              <h3 className="content-card-title content-card-title-featured">
                {title}
              </h3>
              <span className="content-card-arrow">→</span>
            </div>
            {keywords.length > 0 && (
              <div className="content-card-keywords">
                {keywords.map((keyword, index) => (
                  <span key={index} className="content-card-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={href} className="content-card content-card-default" data-category={category}>
      <article className="content-card-default-inner">
        {image && (
          <div className="content-card-image-default">
            <img
              src={image}
              alt={title}
              className="content-card-image"
              loading="lazy"
            />
          </div>
        )}
        {renderCategoryBadge()}
        <div className="content-card-default-content">
          <div className="content-card-header">
            <h3 className="content-card-title content-card-title-default">
              {title}
            </h3>
            <span className="content-card-arrow">→</span>
          </div>
          {keywords.length > 0 && (
            <div className="content-card-keywords">
              {keywords.slice(0, 3).map((keyword, index) => (
                <span key={index} className="content-card-tag">
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ContentCard;

