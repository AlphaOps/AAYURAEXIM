import React from 'react';
import './Products.css';

// Importing high quality 4k generated images
import imgSpices from '../assets/images/product_spices.png';
import imgVegetables from '../assets/images/product_vegetables.png';
import imgDehydrated from '../assets/images/product_dehydrated.png';
import imgRice from '../assets/images/product_rice.png';
import imgHerbal from '../assets/images/product_herbal.png';

// import imgSeafood from '../assets/images/product_seafood.png'; // Removed
// import prodMango from '../assets/images/prod_mango.png'; // Placeholder removed
import imgFruits from '../assets/images/product_fruits.png'; // New setup

// Link for routing
import { Link } from 'react-router-dom';

const products = [
    {
        id: 'indian-spices',
        title: 'Indian Spices',
        desc: 'Whole & Ground Spices including Turmeric, Chilli, Cumin, and Cardamom. Authentic aroma and taste.',
        image: imgSpices
    },
    {
        id: 'fresh-vegetables',
        title: 'Fresh Vegetables',
        desc: 'Farm-fresh Onions, Potatoes, Garlic, Ginger, and Green Chillies packed hygienically for export.',
        image: imgVegetables
    },
    {
        id: 'fresh-fruits',
        title: 'Fresh Fruits',
        desc: 'Premium export-quality fruits including Mangoes, Bananas, and Pomegranates.',
        image: imgFruits
    },
    {
        id: 'dehydrated-products',
        title: 'Dehydrated Products',
        desc: 'Onion flakes, Garlic powder, and dried vegetables with long shelf life and high nutrition.',
        image: imgDehydrated
    },

    {
        id: 'herbal-products',
        title: 'Herbal Products',
        desc: 'Medicinal herbs and natural extracts suitable for pharmaceutical and cosmetic industries.',
        image: imgHerbal
    }
];

const Products = () => {
    return (
        <section id="products" className="section products">
            <div className="container">
                <div className="section-title">
                    <h2 style={{ color: 'var(--color-brand-blue)', fontSize: '3rem', marginBottom: '20px' }}>Our Product Categories</h2>
                    <p style={{
                        fontFamily: 'var(--font-heading)',
                        fontStyle: 'italic',
                        fontSize: '1.4rem',
                        color: 'var(--color-brand-blue-soft)',
                        marginTop: '10px'
                    }}>
                        "Discover the essence of India in our premium export collection."
                    </p>
                    <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-brand-blue)', margin: '20px auto' }}></div>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.title} />
                                <div className="overlay">
                                    <Link to={`/category/${product.id}`} className="btn btn-outline btn-sm">View Products</Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <Link to={`/category/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <h3>{product.title}</h3>
                                </Link>
                                <p>{product.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <a href="#contact" className="btn btn-primary">Download Product Brochure</a>
                </div>
            </div>
        </section>
    );
};

export default Products;
