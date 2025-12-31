import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from '../components/Card';
import './CollectionPage.css';

interface CollectionPageProps{
  source: string,
}

interface Articles{
  id: number;
  title: string;
  slug: string;
  image?: string;
  keywords?: string[];
  abstract?: string;
}

function CollectionPage(props: CollectionPageProps) {
    const location = useLocation();
    const [articles, setArticles] = useState<Articles[]>([]);
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        // Fetch articles (replace with actual API call or import JSON file)
        const sourcePath = props.source.startsWith('/') ? props.source : `/${props.source}`;
        fetch(sourcePath)
        .then((res) => res.json())
        .then((data) => {
            setArticles(data.content);
            setCategory(data.category);
            })
        .catch((error) => {
            console.error('Error fetching articles:', error);
        });
    }, [props.source]);

    useEffect(() => {
        // Refetch or update content based on the new location
        console.log("Route changed:", location.pathname);
        const sourcePath = props.source.startsWith('/') ? props.source : `/${props.source}`;
        fetch(sourcePath)
        .then((res) => res.json())
        .then((data) => {
            setArticles(data.content);
            setCategory(data.category);
            })
        .catch((error) => {
            console.error('Error fetching articles:', error);
        });
    }, [location, props.source]);

    const getPageTitle = () => {
        if (location.pathname === '/projects') {
            return 'Projects';
        } else if (location.pathname === '/research') {
            return 'Research & Publications';
        }
        return category.charAt(0).toUpperCase() + category.slice(1);
    };

    return (
        <div className="collection-page">
            <h1 className="collection-page-title">{getPageTitle()}</h1>
            <div className="collection-grid">
                {articles.map((article: Articles) => (
                    <Card 
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        slug={article.slug}
                        category={category}
                        image={article.image}
                        keywords={article.keywords}
                        abstract={article.abstract}
                    />
                ))}
            </div>
        </div>
    );
};

export default CollectionPage;