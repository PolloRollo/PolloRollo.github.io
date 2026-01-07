import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "../components/Markdown";
import { loadJsonData } from "../lib/dataLoader";
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
interface Article {
  id: number;
  title: string;
  slug: string;
  raw: string;
  image?: string;
}

function ArticlePage({json}: ArticlePageProps) {
  const { slug } = useParams<{ slug: string }>(); // Use route parameters
  const [article, setArticle] = useState<Article | null>(null); // State to hold the article data
  const [category, setCategory] = useState<string>(''); // State to hold the category
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    loadJsonData(json)
      .then((data: Category) => {
        setCategory(data.category);
        const foundArticle = data.content.find((item) => item.slug === slug);
        if (foundArticle) {
          setArticle(foundArticle);
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
  const heroImage = article.image || '/src/assets/images/2020_08_Wildflowers.webp'; // Fallback image

  return (
    <>
      {isProjects ? (
        <ProjectsHero image={heroImage} title={article.title} />
      ) : (
        <ResearchHero image={heroImage} title={article.title} />
      )}
      <div className="article-page">
        <div className="article-content">
          <Markdown url={article.raw}></Markdown>
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
