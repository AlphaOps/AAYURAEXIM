import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Import Hero Images
import imgSlide1 from '../assets/images/hero_slide_1.png'; // Spices Market
import imgSlide2 from '../assets/images/hero_slide_2.png'; // Logistics Port
import imgSlide4 from '../assets/images/hero_slide_4.png'; // Indian Farm

const heroImages = [imgSlide1, imgSlide2, imgSlide4];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            {/* Background Slideshow */}
            <div className="hero-slideshow">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <h1>Connecting India’s Finest to Global Markets</h1>
                <p className="hero-subtitle">Trusted exporter of agricultural & spice products from India.</p>
                <div className="hero-cta-group">
                    <Link to="/contact" className="btn-hero-primary">Enquire Now</Link>
                    <Link to="/about" className="btn-hero-outline">Our Story</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
