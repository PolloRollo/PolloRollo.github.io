// src/Sidebar.tsx
// import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import './RecentPosts.css'; // Optional: for styling

interface CollectionPageProps{
  source: string,
}

interface Articles{
  id: number;
  title: string;
  slug: string;
}

function CollectionPage(props: CollectionPageProps) {


    const location = useLocation();
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        // Fetch articles (replace with actual API call or import JSON file)
        fetch(props.source)
        .then((res) => res.json())
        .then((data) => {
            setArticles(data.content); // Get the 5 most recent
            setCategory(data.category);
            })
    }, []);
    useEffect(() => {
        // Refetch or update content based on the new location
        console.log("Route changed:", location.pathname);
        fetch(props.source)  // Reuse code for fetching, may not be best solution.
        .then((res) => res.json())
        .then((data) => {
            setArticles(data.content); // Get the 5 most recent
            setCategory(data.category);
            })

    }, [location]);
    // Change ul to an actual element
    return (
        <div>
        <h2>{location.pathname}</h2>
        <ul>
            {articles.map((article: Articles) => (
            <li key={article.id}>
                <Link to={`/${category}/${article.slug}`}>{article.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default CollectionPage;