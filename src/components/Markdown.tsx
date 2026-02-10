import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import '../styles/components/Markdown.css';  // Styling

interface MarkdownProps {
  url: string;
}

function Markdown( {url} : MarkdownProps) {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.status}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    void fetchReadme();
  }, [url]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Markdown;