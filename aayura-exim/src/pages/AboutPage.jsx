import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, ShieldCheck } from 'lucide-react';
import imgWhoWeAre from '../assets/images/about_who_we_are_trust.png';
import imgFarmToPort from '../assets/images/about_farm_to_port.png';
import certApedaNew from '../assets/images/cert_apeda_new.png';
import certFieo from '../assets/images/cert_fieo_v2.png';
import certSpicesBoard from '../assets/images/cert_spices_board_new.png';
import certIecBlue from '../assets/images/cert_iec_blue.png';
import certGst from '../assets/images/cert_gst_new.png';
import certHalal from '../assets/images/cert_halal_v3.png';
import certUdyogAadhar from '../assets/images/cert_udyog_aadhar_new.png';
import certCoconut from '../assets/images/cert_coconut_board_new.png';
import CtaBanner from '../components/CtaBanner';
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

                        </div>
                        <div className="about-image-wrapper">
                            <img src={imgWhoWeAre} alt="Trusted Global Sourcing Partner" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light about-vision">
                <div className="container">
                    <div className="vision-grid">
                        <div className="vision-card">
                            <div className="icon"><Eye size={32} strokeWidth={1.5} /></div>
                            <h3>OUR VISION</h3>
                            <span className="card-subtitle">Global Recognition</span>
                            <p>To become a globally recognized agricultural export partner, trusted for consistent quality, ethical trade practices, and long-term international relationships.</p>
                        </div>
                        <div className="vision-card">
                            <div className="icon"><Target size={32} strokeWidth={1.5} /></div>
                            <h3>OUR MISSION</h3>
                            <span className="card-subtitle">Excellence Delivered</span>
                            <p>To empower Indian farmers and global buyers by delivering premium-grade agricultural products through transparent processes, sustainable sourcing, and reliable export execution.</p>
                        </div>
                        <div className="vision-card">
                            <div className="icon"><ShieldCheck size={32} strokeWidth={1.5} /></div>
                            <h3>CORE VALUES</h3>
                            <span className="card-subtitle">Uncompromising Standards</span>
                            <ul className="values-list">
                                <li><strong>Integrity</strong> — Honest trade & transparent communication</li>
                                <li><strong>Quality Excellence</strong> — No compromise, at any stage</li>
                                <li><strong>Customer Commitment</strong> — Long-term partnerships over short-term gains</li>
                                <li><strong>Sustainability</strong> — Responsible sourcing & environmental care</li>
                                <li><strong>Reliability</strong> — Consistent supply & on-time delivery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section what-we-do">
                <div className="container">
                    <div className="what-we-do-grid">
                        <div className="what-we-do-content">
                            <span className="subtitle">What We Do</span>
                            <h2>From Indian Farms to Global Markets</h2>
                            <p className="lead-text">
                                AAYURA EXIM specializes in sourcing, processing, and exporting premium-quality Indian agricultural products to buyers across the globe.
                            </p>
                            <p>
                                We manage the complete export lifecycle — from farm selection to final delivery — ensuring consistency, freshness, and compliance at every stage.
                                Our operations are built on strong farmer partnerships, modern quality control systems, and internationally accepted export practices.
                            </p>

                            <ul className="capabilities-list">
                                <li>Direct sourcing from verified Indian farmers</li>
                                <li>Multi-level quality inspection & grading</li>
                                <li>Export-compliant packaging & labeling</li>
                                <li>End-to-end logistics & documentation</li>
                                <li>Customized orders as per buyer specifications</li>
                            </ul>
                        </div>
                        <div className="about-image-wrapper">
                            <img src={imgFarmToPort} alt="From Indian Farms to Global Markets" />
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

            <CtaBanner />
        </div>
    );
};

export default AboutPage;
