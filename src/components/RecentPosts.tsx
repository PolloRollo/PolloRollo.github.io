// src/Sidebar.tsx
// import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './RecentPosts.css'; // Optional: for styling

interface RecentPostsProps{
  title: string;
  count: number;
  source: string;
}

interface Articles{
  id: number;
  title: string;
  slug: string;
}

function RecentPosts(props: RecentPostsProps) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles (replace with actual API call or import JSON file)
    fetch(props.source)
      .then((res) => res.json())
      .then((data) => setArticles(data.slice(0, props.count))); // Get the 5 most recent
  }, []);

return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {articles.map((article: Articles) => (
          <li key={article.id}>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;