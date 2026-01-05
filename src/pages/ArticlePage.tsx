import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "../components/Markdown";
import { loadJsonData } from "../lib/dataLoader";
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
}

function ArticlePage({json}: ArticlePageProps) {
  const { slug } = useParams<{ slug: string }>(); // Use route parameters
  const [article, setArticle] = useState<Article | null>(null); // State to hold the article data
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    // Load articles from JSON file using data loader
    loadJsonData(json)
      .then((data: Category) => {
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

  return (
    <div>
      <h1>{article.title}</h1>
      <Markdown url={article.raw}></Markdown>
    </div>
  );
}

export default ArticlePage;
