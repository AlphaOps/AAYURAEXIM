import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Hero from '../components/Hero';
import ValueStrip from '../components/ValueStrip';
import Products from '../components/Products';
import GlobalReach from '../components/GlobalReach';
import Certificates from '../components/Certificates';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'auto', block: 'start' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="home-page">
            <Hero />
            <ValueStrip />

            {/* Inline About / Introduction */}
            <section className="section" id="intro" style={{ padding: '80px 0', textAlign: 'center', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {/* 1. Small Uppercase Welcome */}
                        <h6 style={{
                            fontSize: '0.9rem',
                            letterSpacing: '3px',
                            color: 'var(--color-brand-grey)',
                            fontWeight: '500',
                            marginBottom: '20px',
                            fontFamily: 'var(--font-body)',
                            textTransform: 'uppercase'
                        }}>
                            WELCOME TO
                        </h6>

                        {/* 2. Large Brand Name */}
                        <h1 style={{
                            fontSize: '4rem',
                            color: 'var(--color-brand-blue)',
                            fontFamily: 'var(--font-heading)',
                            margin: '0 0 30px 0',
                            letterSpacing: '-1px'
                        }}>
                            AAYURA EXIM
                        </h1>

                        {/* 3. Horizontal Divider */}
                        <div style={{
                            width: '80px',
                            height: '2px',
                            backgroundColor: 'var(--color-brand-blue)',
                            margin: '0 auto 35px auto'
                        }}></div>

                        {/* 4. Two-line Descriptor */}
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: 'var(--color-brand-blue-soft)',
                            fontFamily: 'var(--font-body)',
                            fontWeight: '300',
                            lineHeight: '1.4',
                            marginBottom: '50px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Premier Exporter<br />
                            Rooted in Indian Integrity
                        </h3>

                        {/* 5. Italic Quote */}
                        <p style={{
                            fontSize: '1.6rem',
                            color: 'var(--color-brand-blue-soft)',
                            fontFamily: 'var(--font-heading)',
                            fontStyle: 'italic',
                            opacity: '0.9'
                        }}>
                            “Export-quality Indian agricultural products, crafted for global markets.”
                        </p>
                    </div>
                </div>
            </section>

            <Products />
            <GlobalReach />
            <Certificates />

            {/* CTA Section */}
            <section className="section" style={{ backgroundColor: '#FAF7F2', padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--color-primary-dark)' }}>Looking for a Reliable Trade Partner?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '40px', color: '#666' }}>We deliver quality, trust, and consistency.</p>
                    <a href="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Request a Quote</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
