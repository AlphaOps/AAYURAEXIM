import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/images/logo_main.png';

// Helper component for navigation links
const NavHashLink = ({ to, children, setOpen }) => {
    if (to.includes('#')) {
        return (
            <a href={to} className="navbar-link" onClick={() => setOpen(false)}>
                {children}
            </a>
        );
    }
    return (
        <Link to={to} className="navbar-link" onClick={() => setOpen(false)}>
            {children}
        </Link>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className="site-header">
            {/* TOP MINI BAR */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-bar-left">
                        <span>Serving Global Markets | Trusted Export Partner</span>
                    </div>
                    <div className="top-bar-right">
                        <a href="mailto:info@aayuraexim.com" className="top-link"><Mail size={14} /> info@aayuraexim.com</a>
                        <span className="separator">|</span>
                        <a href="https://wa.me/919850847425" target="_blank" rel="noopener noreferrer" className="top-link"><Phone size={14} /> +91 98508 47425</a>
                        <span className="separator">|</span>
                        <span className="lang-selector"><Globe size={14} /> EN</span>
                    </div>
                </div>
            </div>

            {/* MAIN NAVBAR */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    {/* LEFT: LOGO */}
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="AAYURA EXIM Logo" className="logo-img" />
                        <span className="logo-text">AAYURA EXIM</span>
                    </Link>

                    {/* CENTER: MENU */}
                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <NavHashLink to="/#products" setOpen={setMobileMenuOpen}>Products</NavHashLink>
                        <Link to="/blog" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                        <Link to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

                        {/* Mobile Only CTA */}
                        <div className="mobile-cta-container">
                            <Link to="/contact" className="btn btn-cta mobile-cta" onClick={() => setMobileMenuOpen(false)}>ENQUIRE NOW</Link>
                        </div>
                    </div>

                    {/* RIGHT: CTA BUTTON (Desktop) */}
                    <div className="nav-right-cta">
                        <Link to="/contact" className="btn btn-cta desktop-cta">ENQUIRE NOW</Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
