import { useState, useEffect } from "react";
import { BentoGrid, BentoItem } from './BentoGrid';
import ContentCard from './ContentCard';
import { loadJsonData, JsonDataFile, Article } from '../lib/utils';
import { siteConfig } from '../config/siteConfig';
import '../styles/components/RecentPosts.css';

interface Article {
  id: number;
  title: string;
  slug: string;
  category?: string;
  photoId?: number; // Photo ID from photos.json for Cloudinary
  keywords?: string[];
}

function RecentProjects() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Load projects from JSON file using data loader
    loadJsonData('projects.json')
      .then((data) => {
        const typedData = data as JsonDataFile<Article>;
        // Get only the 2 most recent projects
        setArticles(typedData.content.slice(0, 2));
        setCategory(typedData.category);
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
            photoId={siteConfig.seeMore.projects.photoId}
            href="/projects"
            variant="default"
          />
        </BentoItem>
      </BentoGrid>
    </div>
  );
}

export default RecentProjects;

