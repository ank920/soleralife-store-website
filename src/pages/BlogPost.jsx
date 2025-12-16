import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import SEO from '../components/SEO';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        blogService.getPostBySlug(slug).then(data => {
            setPost(data);
            setLoading(false);
        });
    }, [slug]);

    if (loading) return <div className="loading-state">Loading article...</div>;

    if (!post) return (
        <div className="error-state container">
            <h2>Article not found</h2>
            <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
    );

    const articleSchema = post ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": [
            post.image
        ],
        "datePublished": "2023-10-12T08:00:00+08:00", // Ideally from post.date
        "author": [{
            "@type": "Person",
            "name": post.author,
            "url": "https://soleralife.com/about-us"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Solera Life Sciences",
            "logo": {
                "@type": "ImageObject",
                "url": "https://soleralife.com/logo.png"
            }
        },
        "description": post.excerpt
    } : null;

    return (
        <article className="blog-post-page">
            {post && <SEO
                title={post.title}
                description={post.excerpt}
                canonical={`https://soleralife.com/blog/${slug}`}
                schema={articleSchema}
                type="article"
            />}
            <div className="post-hero" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="post-overlay">
                    <div className="container">
                        <Link to="/blog" className="back-link"><ArrowLeft size={20} /> Back to Blog</Link>
                        <h1>{post.title}</h1>
                        <div className="post-meta-heavy">
                            <span><User size={16} /> {post.author}</span>
                            <span><Calendar size={16} /> {post.date}</span>
                            <span><Clock size={16} /> {post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container post-container">
                <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </article>
    );
};

export default BlogPost;
