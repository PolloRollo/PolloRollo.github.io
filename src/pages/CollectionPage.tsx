import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import ContentCard from '../components/ContentCard';
import '../styles/pages/CollectionPage.css';

interface CollectionPageProps {
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

function CollectionPage({ source }: CollectionPageProps) {
  const location = useLocation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Fetch articles (replace with actual API call or import JSON file)
    const sourcePath = source.startsWith('/') ? source : `/${source}`;
    fetch(sourcePath)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.content);
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [source]);

  useEffect(() => {
    // Refetch or update content based on the new location
    console.log("Route changed:", location.pathname);
    const sourcePath = source.startsWith('/') ? source : `/${source}`;
    fetch(sourcePath)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.content);
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
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

  return (
    <div className="collection-page">
      <h1 className="collection-page-title">{getPageTitle()}</h1>
      <BentoGrid>
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
      </BentoGrid>
    </div>
  );
}

export default CollectionPage;