import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  id: number;
  title: string;
  slug: string;
  category: string;
  image?: string;
  keywords?: string[];
  abstract?: string;
}

function Card({ title, slug, category, image, keywords, abstract }: CardProps) {
  return (
    <Link to={`/${category}/${slug}`} className="card-link">
      <div className="card">
        {image && (
          <div className="card-image-container">
            <img src={image} alt={title} className="card-image" />
          </div>
        )}
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          {keywords && keywords.length > 0 && (
            <div className="card-keywords">
              {keywords.map((keyword, index) => (
                <span key={index} className="card-keyword">{keyword}</span>
              ))}
            </div>
          )}
          {abstract && (
            <p className="card-abstract">{abstract}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;

