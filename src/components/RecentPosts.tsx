import { useState, useEffect } from "react";
import Carousel from './Carousel';

interface RecentPostsProps{
  title: string,
  count: number,
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

function RecentPosts(props: RecentPostsProps) {

  const [articles, setArticles] = useState<Articles[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Fetch articles (replace with actual API call or import JSON file)
    const sourcePath = props.source.startsWith('/') ? props.source : `/${props.source}`;
    fetch(sourcePath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${props.source}`);
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.content.slice(0, props.count)); // Get the most recent items
        setCategory(data.category);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [props.source, props.count]);

  return (
    <Carousel 
      title={props.title}
      items={articles}
      category={category}
    />
  );
};

export default RecentPosts;