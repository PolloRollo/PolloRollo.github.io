import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import ContentCard from '../components/ContentCard';
import ProjectsHero from '../components/ProjectsHero';
import ResearchHero from '../components/ResearchHero';
import { loadJsonData } from '../lib/utils';
import '../styles/pages/CollectionPage.css';

interface CollectionPageProps {
  source: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  category?: string;
  image?: string; // Fallback for backward compatibility
  photoId?: number; // New: photo ID from photos.json
  keywords?: string[];
  abstract?: string;
}

function CollectionPage({ source }: CollectionPageProps) {
  const location = useLocation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Load articles from JSON file using data loader
    loadJsonData(source)
      .then((data) => {
        setArticles(data.content);
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error loading articles:', error);
      });
  }, [source]);

  useEffect(() => {
    // Refetch or update content based on the new location
    console.log("Route changed:", location.pathname);
    loadJsonData(source)
      .then((data) => {
        setArticles(data.content);
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error loading articles:', error);
      });
  }, [location, source]);

  const getPageTitle = () => {
    if (location.pathname === '/projects') {
      return 'Projects';
    } else if (location.pathname === '/research') {
      return 'Research & Publications';
    }
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getCategoryPath = (cat: string) => {
    return cat === 'projects' ? '/projects' : cat === 'research' ? '/research' : `/${cat}`;
  };

  const isProjectsPage = location.pathname === '/projects';
  const isResearchPage = location.pathname === '/research';

  // Use photoId 6 (Park Avenue) for projects hero
  const projectsHeroPhotoId = 6;

  return (
    <div className="collection-page">
      {isProjectsPage && (
        <ProjectsHero 
          photoId={projectsHeroPhotoId}
          title={getPageTitle()}
          showAttribution={true}
        />
      )}
      {isResearchPage && (
        <ResearchHero 
          image="/images/2024_05_TwilightLake.webp"
          title={getPageTitle()} 
        />
      )}
      {!isProjectsPage && !isResearchPage && (
        <h1 className="collection-page-title">{getPageTitle()}</h1>
      )}
      <BentoGrid itemCount={articles.length}>
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
                photoId={article.photoId}
                href={href}
                variant={variant}
                category={article.category}
              />
            </BentoItem>
          );
        })}
      </BentoGrid>
    </div>
  );
}

export default CollectionPage;