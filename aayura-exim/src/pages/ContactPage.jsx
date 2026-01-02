import React, { useEffect } from 'react';
import './ContactPage.css'; // We'll create/update this or use Contact.css
import '../components/Contact.css'; // Using existing CSS file target
import { MapPin, Phone, Mail, Clock, Send, Globe, ShieldCheck } from 'lucide-react';

// Import existing assets as fallbacks/placeholders
import mapBg from '../assets/images/bg_global_map.png';
import heroBg from '../assets/images/hero_export.png';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleScrollToForm = () => {
        const formSection = document.getElementById('contact-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="contact-page-redesign">

            {/* SECTION 1: HERO / TOP SECTION */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <span className="hero-subtitle">Let’s Trade Beyond Borders</span>
                    <h1>Get in Touch with AAYURA EXIM</h1>
                    <p className="hero-intro">
                        Your Trusted Partner in Global Agricultural Trade. Whether you are an importer, distributor, wholesaler, or global buyer, our team is ready to assist you throughout the process.
                    </p>
                    <div className="hero-cta-group">
                        <button className="btn btn-primary" onClick={handleScrollToForm}>Request a Quote</button>
                        <button className="btn btn-outline" onClick={handleScrollToForm}>Talk to Export Team</button>
                    </div>
                </div>
                <div className="contact-hero-image" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="hero-overlay-tech"></div>
                    {/* Placeholder for: Ultra-realistic professional contact image */}
                </div>
            </section>

            {/* SECTION 2: CONTACT INFORMATION (TRUST BUILDER) */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Reach Our Global Trade Desk</h2>
                        <p>Available for international trade inquiries 24/7</p>
                    </div>
                    <div className="info-cards-grid">
                        <div className="info-card">
                            <div className="icon-box"><MapPin size={24} /></div>
                            <h3>Registered Office</h3>
                            <p>India (Global Export Operations)<br />Pune, Maharashtra</p>
                        </div>
                        <div className="info-card">
                            <div className="icon-box"><Phone size={24} /></div>
                            <h3>Phone / WhatsApp</h3>
                            <p>+91 98508 47425</p>
                        </div>
                        <div className="info-card">
                            <div className="icon-box"><Mail size={24} /></div>
                            <h3>Email Us</h3>
                            <p>info@aayuraexim.com<br />aayuraexim@gmail.com</p>
                        </div>
                        <div className="info-card">
                            <div className="icon-box"><Clock size={24} /></div>
                            <h3>Working Hours</h3>
                            <p>Mon–Sat | 9:00 AM – 8:00 PM (IST)<br />Response within 24 business hrs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CONTACT FORM (TECH + CLEAN) */}
            <section className="contact-form-section" id="contact-form">
                <div className="container form-layout">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2>Send Us Your Inquiry</h2>
                            <p>Tell us about your product requirement, destination country, and quantity.</p>
                        </div>
                        <form
                            className="tech-form"
                            method="POST"
                            name="trade-inquiry"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="trade-inquiry" />
                            <input type="hidden" name="bot-field" />

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" name="company" placeholder="Global Traders Ltd." required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" placeholder="john@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone / WhatsApp</label>
                                    <input type="tel" name="phone" placeholder="+1 234 567 890" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" name="country" placeholder="Destination Country" required />
                                </div>
                                <div className="form-group">
                                    <label>Product of Interest</label>
                                    <select name="product">
                                        <option>Select Product</option>
                                        <option>Spices</option>
                                        <option>Grains</option>
                                        <option>Fresh Produce</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Message / Requirements</label>
                                <textarea name="message" rows="4" placeholder="Describe your requirement..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-submit">
                                Submit Trade Inquiry <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>
                            <p className="security-note"><ShieldCheck size={14} /> Your information is secure & confidential.</p>
                        </form>
                    </div>
                    <div className="form-visual" style={{ backgroundImage: `url(${mapBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="visual-overlay">
                            <div className="connector-card">
                                <Globe size={48} className="connector-icon" />
                                <h3>Global Trade Connector</h3>
                                <div className="connector-stats">
                                    <div className="stat-row">
                                        <span className="dot online"></span>
                                        <span>Export Network Active</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="dot processing"></span>
                                        <span>24/7 Support Desk</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default ContactPage;
