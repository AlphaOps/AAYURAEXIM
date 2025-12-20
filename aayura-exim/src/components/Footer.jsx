import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>AAYURA EXIM</h3>
                    <p className="footer-desc">
                        Your trusted global sourcing partner for premium Indian agricultural products. Quality, Transparency, and Reliability.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/#products">Products</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} />
                            <span>Pune, Maharashtra, India</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+91 98508 47425</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>info@aayuraexim.com<br />aayuraexim@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AAYURA EXIM. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
