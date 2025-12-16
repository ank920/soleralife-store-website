import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import './BlogList.css';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        blogService.getPosts().then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="loading-container">Loading articles...</div>;
    }

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Solera Life Sciences Blog",
        "url": "https://soleralife.com/blog",
        "description": "Expert perspectives on infection prevention, safety, and healthcare technology.",
    };

    return (
        <div className="blog-page">
            <SEO
                title="Blog - Solera Life Sciences"
                description="Expert perspectives on infection prevention and healthcare technologies from Solera Life Sciences."
                canonical="https://soleralife.com/blog"
                schema={blogSchema}
            />

            <header className="blog-header">
                <div className="container">
                    <h1>Latest Insights</h1>
                    <p>Expert perspectives on infection prevention, safety, and healthcare technology.</p>
                </div>
            </header>

            <div className="container blog-grid-container">
                <div className="blog-grid">
                    {posts.map(post => (
                        <article key={post.id} className="blog-card">
                            <div className="card-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="date"><Calendar size={14} /> {post.date}</span>
                                    <span className="read-time">{post.readTime}</span>
                                </div>
                                <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
                                <p className="excerpt">{post.excerpt}</p>
                                <div className="card-footer">
                                    <div className="author">
                                        <User size={14} /> {post.author}
                                    </div>
                                    <Link to={`/blog/${post.slug}`} className="read-more">
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
