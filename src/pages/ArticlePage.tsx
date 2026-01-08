import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "../components/Markdown";
import { loadJsonData, getPhotoById } from "../lib/utils";
import ProjectsHero from "../components/ProjectsHero";
import ResearchHero from "../components/ResearchHero";
import '../styles/pages/ArticlePage.css';
// import ReactMarkdown from "react-markdown";

interface ArticlePageProps {
    json: string
}

// Define the article type
interface Category {
    category: string
    content: Article[]
}

// Define the article type
interface FocalPoint {
  x: number; // 0-100
  y: number; // 0-100
}

interface Article {
  id: number;
  title: string;
  slug: string;
  raw: string;
  image?: string; // Fallback for backward compatibility
  photoId?: number; // New: photo ID from photos.json
  focalPoint?: FocalPoint; // Deprecated, use photo's focalPoint instead
  github?: string;
  paper?: string;
  technologies?: string[];
}

function ArticlePage({json}: ArticlePageProps) {
  const { slug } = useParams<{ slug: string }>(); // Use route parameters
  const [article, setArticle] = useState<Article | null>(null); // State to hold the article data
  const [category, setCategory] = useState<string>(''); // State to hold the category
  const [error, setError] = useState<string | null>(null); // State for error handling
  const [heroImage, setHeroImage] = useState<string>('/images/2020_08_Wildflowers.webp');
  const [photoId, setPhotoId] = useState<number | undefined>(undefined);

  useEffect(() => {
    loadJsonData(json)
      .then((data: Category) => {
        setCategory(data.category);
        const foundArticle = data.content.find((item) => item.slug === slug);
        if (foundArticle) {
          setArticle(foundArticle);
          // Resolve photo ID if present
          if (foundArticle.photoId) {
            setPhotoId(foundArticle.photoId);
            getPhotoById(foundArticle.photoId).then(photo => {
              if (photo) {
                setHeroImage(photo.image);
              }
            });
          } else if (foundArticle.image) {
            setHeroImage(foundArticle.image);
            setPhotoId(undefined);
          }
        } else {
          setError("Article not found.");
        }
      })
      .catch((err) => setError(err.message));
  }, [slug, json]);

  if (error) {
    return <div>Error: {error} </div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  // Determine which hero to use based on category
  const isProjects = category === 'projects';

  return (
    <>
      {isProjects ? (
        <ProjectsHero 
          photoId={photoId}
          image={heroImage}
          title={article.title}
          showAttribution={true}
        />
      ) : (
        <ResearchHero image={heroImage} title={article.title} />
      )}
      <div className="article-page">
        {/* GitHub Link, Paper Link, and Technologies Section */}
        {(article.github || article.paper || (article.technologies && article.technologies.length > 0)) && (
          <div className="article-metadata">
            {(article.github || article.paper) && (
              <div className="article-buttons">
                {article.github && (
                  <a 
                    href={article.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    <i className="fa-brands fa-github"></i>
                    View on GitHub
                  </a>
                )}
                {article.paper && (
                  <a 
                    href={article.paper} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-button"
                  >
                    <i className="fa-solid fa-file"></i>
                    View Paper
                  </a>
                )}
              </div>
            )}
            {article.technologies && article.technologies.length > 0 && (
              <div className="technologies-list">
                {article.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="article-content">
          <Markdown url={article.raw}></Markdown>
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
