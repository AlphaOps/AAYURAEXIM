import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './Blog.css'; // Re-use blog styles or create separate if needed
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Article Not Found</h2>
                <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <div className="container">
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={16} /> Back to Trade Journal
                </Link>

                <article className="single-post">
                    <header className="post-header">
                        <span className="post-category">{post.category}</span>
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-meta">
                            <span className="meta-item"><User size={16} /> {post.author}</span>
                            <span className="meta-item"><Calendar size={16} /> {post.date}</span>
                        </div>
                    </header>

                    <div className="post-image">
                        <img src={post.image} alt={post.title} />
                    </div>

                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                    <div className="post-footer">
                        <div className="share-section">
                            <span>Share this article:</span>
                            {/* Placeholder social links */}
                            <button className="share-btn">LinkedIn</button>
                            <button className="share-btn">Twitter</button>
                            <button className="share-btn">Email</button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
