import React from 'react';
import './About.css';
import aboutImg from '../assets/images/about_warehouse.png';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image">
                    <img src={aboutImg} alt="About AAYURA EXIM" />
                    <div className="experience-badge">
                        <span className="years">Premium</span>
                        <span className="text">Quality</span>
                    </div>
                </div>

                <div className="about-content">
                    <h4 className="sub-heading">Who We Are</h4>
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Global Sourcing Partner from India</h2>

                    <p className="about-text">
                        AAYURA EXIM is a leading Indian export company and global sourcing partner, specializing in Spices, Fresh Vegetables, Dehydrated Products, Herbal Products, and Rice & Beans. Based in India, we supply high-quality, export-grade products to international markets with a strong focus on quality, compliance, and long-term partnerships.
                    </p>

                    <p className="about-text">
                        As an experienced exporter from India, we connect global buyers with reliable Indian manufacturers, farmers, and processors, ensuring consistent supply, competitive pricing, and adherence to international food safety and quality standards.
                    </p>

                    <div className="about-features">
                        <div className="feature-item">
                            <span className="feature-icon">🌿</span>
                            <div>
                                <h5>Pure & Natural</h5>
                                <p>100% natural sourcing</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🌍</span>
                            <div>
                                <h5>Global Standard</h5>
                                <p>Export compliant</p>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" className="btn btn-secondary" style={{ marginTop: '30px' }}>Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default About;
