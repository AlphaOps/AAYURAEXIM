import React from 'react';
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
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#sourcing">Sourcing Process</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} />
                            <span>Registered Office, India</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+91 98508 47425</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>export@aayuraexim.com</span>
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
