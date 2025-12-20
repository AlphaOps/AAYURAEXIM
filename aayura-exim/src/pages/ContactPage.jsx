import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="container text-center" style={{ padding: '60px 0 20px' }}>
                <span className="subtitle" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>Get In Touch</span>
                <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>Contact Us</h1>
            </div>
            <Contact />
        </div>
    );
};

export default ContactPage;
