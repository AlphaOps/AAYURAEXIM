import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgWarehouse from '../assets/images/about_warehouse.png';
import certApedaNew from '../assets/images/cert_apeda_new.png';
import certFieo from '../assets/images/cert_fieo_v2.png';
import certSpicesBoard from '../assets/images/cert_spices_board_new.png';
import certIecBlue from '../assets/images/cert_iec_blue.png';
import certGst from '../assets/images/cert_gst_new.png';
import certHalal from '../assets/images/cert_halal_v3.png';
import certMsme from '../assets/images/cert_msme_new.png';
import certUdyogAadhar from '../assets/images/cert_udyog_aadhar_new.png';
import certCoconut from '../assets/images/cert_coconut_board_new.png';
import './AboutPage.css';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="container relative-z">
                    <h1>About AAYURA EXIM</h1>
                    <p>Connecting Indian Heritage with the World</p>
                </div>
            </section>

            <section className="section about-profile">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <span className="subtitle">Who We Are</span>
                            <h2>Trusted Global Sourcing Partner</h2>
                            <p>
                                AAYURA EXIM is a premier export house based in India, dedicated to delivering the finest quality agricultural products to international markets.
                                With deep roots in the rich soil of India, we bridge the gap between traditional Indian farmers and global buyers.
                            </p>
                            <p>
                                Our journey began with a simple vision: to share the purity of Indian spices and fresh produce with the world. Today, we stand as a symbol of trust, quality, and reliability.
                            </p>
                            <div className="stats-mini">
                                <div><strong>10+</strong> Years Experience</div>
                                <div><strong>50+</strong> Global Clients</div>
                                <div><strong>20+</strong> Countries Served</div>
                            </div>
                        </div>
                        <div className="about-image-wrapper">
                            <img src={imgWarehouse} alt="Our Infrastructure" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light about-vision">
                <div className="container">
                    <div className="vision-grid">
                        <div className="vision-card">
                            <div className="icon">👁️</div>
                            <h3>Our Vision</h3>
                            <p>To become the most preferred and trusted partner for global sourcing of Indian agricultural products, known for our commitment to quality and integrity.</p>
                        </div>
                        <div className="vision-card">
                            <div className="icon">🚀</div>
                            <h3>Our Mission</h3>
                            <p>To empower Indian farmers by taking their produce to global markets while ensuring our international clients receive only the freshest, premium-grade products.</p>
                        </div>
                        <div className="vision-card">
                            <div className="icon">💎</div>
                            <h3>Core Values</h3>
                            <p>Integrity, Quality, Transparency, and Customer Satisfaction are the pillars of our business operations.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-certs">
                <div className="container">
                    <span className="subtitle">Quality Assurance</span>
                    <h2>Certified & Recognized</h2>
                    <p className="section-desc">We adhere to strict international quality standards.</p>

                    <div className="about-certs-container">
                        <div className="about-certs-track">
                            {[
                                { title: 'UDYOG AADHAR', img: certUdyogAadhar },
                                { title: 'Coconut Development Board', img: certCoconut },
                                { title: 'APEDA', img: certApedaNew },
                                { title: 'SPICES BOARD INDIA', img: certSpicesBoard },
                                { title: 'FIEO MEMBERSHIP', img: certFieo },
                                { title: 'IEC CODE', img: certIecBlue },
                                { title: 'GST REGISTERED', img: certGst },
                                { title: 'HALAL CERTIFIED', img: certHalal },
                                // Duplicates for smooth loop
                                { title: 'UDYOG AADHAR', img: certUdyogAadhar },
                                { title: 'Coconut Development Board', img: certCoconut },
                                { title: 'APEDA', img: certApedaNew },
                                { title: 'SPICES BOARD INDIA', img: certSpicesBoard },
                                { title: 'FIEO MEMBERSHIP', img: certFieo },
                                { title: 'IEC CODE', img: certIecBlue },
                                { title: 'GST REGISTERED', img: certGst },
                                { title: 'HALAL CERTIFIED', img: certHalal }
                            ].map((cert, index) => (
                                <div className="about-cert-card" key={index}>
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        style={{
                                            transform: 'none'
                                        }}
                                    />
                                    <h4>{cert.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container text-center">
                    <h2>Ready to Partner with Us?</h2>
                    <p>Get in touch for premium quality sourcing.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us Now</Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
