import { useState, useEffect } from "react";
import { BentoGrid, BentoItem } from './BentoGrid';
import ContentCard from './ContentCard';
import { loadJsonData } from '../lib/utils';
import { siteConfig } from '../config/siteConfig';
import '../styles/components/RecentPosts.css';

interface Article {
  id: number;
  title: string;
  slug: string;
  category?: string;
  image?: string; // Fallback for backward compatibility
  photoId?: number; // New: photo ID from photos.json
  keywords?: string[];
}

function RecentProjects() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Load projects from JSON file using data loader
    loadJsonData('projects.json')
      .then((data) => {
        // Get only the 2 most recent projects
        setArticles(data.content.slice(0, 2));
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
      });
  }, []);

  if (articles.length === 0) {
    return null;
  }

  const getCategoryPath = (cat: string) => {
    return cat === 'projects' ? '/projects' : cat === 'research' ? '/research' : `/${cat}`;
  };

  // Include "See more" card in count
  const totalItemCount = articles.length + 1;

  return (
    <div className="recent-posts">
      <h2 className="recent-posts-title">Recent Projects</h2>
      <BentoGrid itemCount={totalItemCount}>
        {articles.map((article, index) => {
          const href = `${getCategoryPath(category)}/${article.slug}`;
          // Make first item featured (large)
          const variant = index === 0 ? 'featured' : 'default';
          
          return (
            <BentoItem key={article.id} featured={index === 0}>
              <ContentCard
                title={article.title}
                keywords={article.keywords}
                image={article.image}
                photoId={article.photoId}
                href={href}
                variant={variant}
                category={article.category}
              />
            </BentoItem>
          );
        })}
        {/* "See more" card */}
        <BentoItem>
          <ContentCard
            title={siteConfig.seeMore.projects.title}
            image={siteConfig.seeMore.projects.image}
            href="/projects"
            variant="default"
          />
        </BentoItem>
      </BentoGrid>
    </div>
  );
}

export default RecentProjects;

