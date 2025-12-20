import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productData } from '../data/products';
import './ProductCategory.css';
import '../components/Hero.css';

const ProductCategory = () => {
    const { id } = useParams();
    const data = productData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Category Not Found</h2>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        );
    }

    const heroImg = data.heroImage;

    return (
        <div className="product-category-page">
            <section className="hero-small" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})` }}>
                <div className="container">
                    <h1>{data.title}</h1>
                    <p>{data.subtitle}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="sub-product-grid">
                        {data.items.map((item) => (
                            <div className="sub-product-card" key={item.id}>
                                <div className="sub-product-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="sub-product-info">
                                    <span className="badge">{item.category}</span>
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                    <a href="#contact" className="btn-link">Enquire Now →</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <Link to="/" className="btn btn-outline">← Back to All Categories</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCategory;
