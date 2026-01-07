import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BentoGrid, BentoItem } from './BentoGrid';
import ContentCard from './ContentCard';
import { loadJsonData } from '../lib/dataLoader';
import '../styles/components/RecentPosts.css';

interface RecentPostsProps {
  title: string;
  count: number;
  source: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  image?: string;
  keywords?: string[];
  abstract?: string;
}

function RecentPosts({ title, count, source }: RecentPostsProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Load articles from JSON file using data loader
    loadJsonData(source)
      .then((data) => {
        setArticles(data.content.slice(0, count)); // Get the most recent items
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error loading articles:', error);
      });
  }, [source, count]);

  if (articles.length === 0) {
    return null;
  }

  const getCategoryPath = (cat: string) => {
    return cat === 'projects' ? '/projects' : cat === 'research' ? '/research' : `/${cat}`;
  };

  // Check if we should show "See more" card (for publications/research)
  const showSeeMore = source === 'research.json';
  const totalItemCount = articles.length + (showSeeMore ? 1 : 0);

  return (
    <div className="recent-posts">
      <h2 className="recent-posts-title">{title}</h2>
      <BentoGrid itemCount={totalItemCount}>
        {articles.map((article, index) => {
          const href = `${getCategoryPath(category)}/${article.slug}`;
          // Make first item featured if we have enough items
          const variant = index === 0 && articles.length >= 3 ? 'featured' : 'default';
          
          return (
            <BentoItem key={article.id} featured={variant === 'featured'}>
              <ContentCard
                title={article.title}
                abstract={article.abstract}
                keywords={article.keywords}
                image={article.image}
                href={href}
                variant={variant}
                category={category}
              />
            </BentoItem>
          );
        })}
        {/* "See more" card for publications */}
        {showSeeMore && (
          <BentoItem>
            <Link to="/research" className="content-card content-card-default see-more-card">
              <article className="content-card-default-inner see-more-card-inner">
                <div className="content-card-default-content see-more-content">
                  <h3 className="content-card-title content-card-title-default">
                    See more
                  </h3>
                  <div className="content-card-footer">
                    <span className="content-card-arrow">→</span>
                  </div>
                </div>
              </article>
            </Link>
          </BentoItem>
        )}
      </BentoGrid>
    </div>
  );
}

export default RecentPosts;