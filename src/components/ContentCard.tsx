import { Link } from "react-router-dom";
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
  abstract = '',
  keywords = [],
  image,
  href,
  variant = "default",
  category,
}: ContentCardProps) => {
  if (variant === "compact") {
    return (
      <Link to={href} className="content-card content-card-compact">
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
          <div className="content-card-compact-content">
            <h3 className="content-card-title content-card-title-compact">
              {title}
            </h3>
            {abstract && (
              <p className="content-card-abstract content-card-abstract-compact">
                {abstract}
              </p>
            )}
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
      <Link to={href} className="content-card content-card-featured">
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
          <div className="content-card-featured-content">
            <h3 className="content-card-title content-card-title-featured">
              {title}
            </h3>
            {abstract && (
              <p className="content-card-abstract content-card-abstract-featured">
                {abstract}
              </p>
            )}
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
    <Link to={href} className="content-card content-card-default">
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
        <div className="content-card-default-content">
          <h3 className="content-card-title content-card-title-default">
            {title}
          </h3>
          {abstract && (
            <p className="content-card-abstract content-card-abstract-default">
              {abstract}
            </p>
          )}
          <div className="content-card-footer">
            {keywords.length > 0 && (
              <div className="content-card-keywords">
                {keywords.slice(0, 3).map((keyword, index) => (
                <span key={index} className="content-card-tag">
                  {keyword}
                </span>
              ))}
              </div>
            )}
            <span className="content-card-arrow">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ContentCard;

