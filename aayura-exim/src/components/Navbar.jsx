import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo_main.png';

// NavHashLink definition moved inside or below


// Helper component for navigation links that handle hash scrolling and menu closing
// Moved outside to prevent re-creation on every render
// Helper component for navigation links
const NavHashLink = ({ to, children, setOpen }) => {
    // If we are navigating to a hash
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
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="AAYURA EXIM Logo" className="logo-img" />
                    <span className="logo-text">AAYURA EXIM</span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <NavHashLink to="/#products" setOpen={setMobileMenuOpen}>Products</NavHashLink>
                    <NavHashLink to="/#quality" setOpen={setMobileMenuOpen}>Quality</NavHashLink>
                    <NavHashLink to="/#why-us" setOpen={setMobileMenuOpen}>Why Us</NavHashLink>
                    <Link to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <Link to="/contact" className="btn btn-primary nav-btn" onClick={() => setMobileMenuOpen(false)}>Enquire Now</Link>
                </div>

                <div className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
