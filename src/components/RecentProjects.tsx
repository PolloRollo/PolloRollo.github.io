import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BentoGrid, BentoItem } from './BentoGrid';
import ContentCard from './ContentCard';
import '../styles/components/RecentPosts.css';

interface Article {
  id: number;
  title: string;
  slug: string;
  image?: string;
  keywords?: string[];
  abstract?: string;
}

function RecentProjects() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    const sourcePath = '/projects.json';
    fetch(sourcePath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch projects.json`);
        }
        return res.json();
      })
      .then((data) => {
        // Get only the 2 most recent projects
        setArticles(data.content.slice(0, 2));
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  if (articles.length === 0) {
    return null;
  }

  const getCategoryPath = (cat: string) => {
    return cat === 'projects' ? '/projects' : cat === 'research' ? '/research' : `/${cat}`;
  };

  return (
    <div className="recent-posts">
      <h2 className="recent-posts-title">Recent Projects</h2>
      <BentoGrid>
        {articles.map((article, index) => {
          const href = `${getCategoryPath(category)}/${article.slug}`;
          // Make first item featured (large)
          const variant = index === 0 ? 'featured' : 'default';
          
          return (
            <BentoItem key={article.id} featured={index === 0}>
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
        {/* "See more" card */}
        <BentoItem>
          <Link to="/projects" className="content-card content-card-default see-more-card">
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
      </BentoGrid>
    </div>
  );
}

export default RecentProjects;

