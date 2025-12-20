import React from 'react';
import './Quality.css';

// Import Certificate Images
import certApedaNew from '../assets/images/cert_apeda_new.png'; // Updated APEDA Image
import certFieo from '../assets/images/cert_fieo_v2.png';
import certSpicesBoard from '../assets/images/cert_spices_board_new.png'; // Updated Spices Image
import certIecBlue from '../assets/images/cert_iec_blue.png';
import certGst from '../assets/images/cert_gst_new.png'; // Updated GST Image
import certHalal from '../assets/images/cert_halal_v3.png'; // Updated Halal Image (v3)
import certMsme from '../assets/images/cert_msme_new.png'; // Updated MSME Image
import certUdyogAadhar from '../assets/images/cert_udyog_aadhar_new.png'; // Updated Udyog Aadhar Image
import certCoconut from '../assets/images/cert_coconut_board_new.png'; // Updated Coconut Image

const Quality = () => {
    const certs = [
        {
            img: certUdyogAadhar,
            title: 'UDYOG AADHAR',
            subtitle: 'MSME : Micro, Small and Medium Enterprises',
            color: '#1a3c87' // Dark blue for MSME
        },
        {
            img: certCoconut,
            title: 'Coconut Development Board',
            subtitle: 'Ministry of Agriculture and Farmers Welfare, Govt. of India',
            color: '#006837' // Green for Coconut
        },
        {
            img: certApedaNew,
            title: 'APEDA',
            subtitle: 'Agricultural & Processed Food Products Export Development Authority',
            color: '#2e7d32' // Green
        },
        {
            img: certSpicesBoard,
            title: 'SPICES BOARD INDIA',
            subtitle: 'Ministry of Commerce & Industry, Govt. of India',
            color: '#8b0000' // Dark Red
        },
        {
            img: certFieo,
            title: 'FIEO MEMBERSHIP',
            subtitle: 'FEDERATION OF INDIAN EXPORT ORGANISATIONS',
            color: '#4fc3f7' // Light Blue
        },
        {
            img: certIecBlue,
            title: 'IEC CODE',
            subtitle: 'Import Export Code Registration',
            color: '#0d47a1' // Deep Blue
        },
        {
            img: certGst,
            title: 'GST REGISTERED',
            subtitle: 'GOODS AND SERVICES TAX COUNCIL',
            color: '#f57c00' // Orange/Blue mix
        },
        {
            img: certHalal,
            title: 'HALAL CERTIFIED',
            subtitle: 'Islamic Food and Nutrition Council',
            color: '#00695c' // Teal
        },
    ];

    // Duplicate list for seamless scrolling
    const marqueeCerts = [...certs, ...certs];

    return (
        <section className="section quality">
            <div className="container">
                <div className="quality-content">
                    {/* Left Side: Membership & Certifications Title */}
                    <div className="quality-text" style={{ minWidth: 'max-content', marginRight: '30px' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', color: 'var(--color-brand-blue)', fontSize: '2.0rem', margin: 0, whiteSpace: 'nowrap' }}>
                            Membership & Certifications
                        </h2>
                    </div>

                    {/* Right Side: Horizontal Scrolling Marquee */}
                    <div className="certs-display" style={{ flex: 1, overflow: 'hidden', padding: '10px 0', border: 'none', background: 'transparent' }}>
                        <div className="certs-container">
                            <div className="certs-track">
                                {marqueeCerts.map((cert, index) => (
                                    <div className="cert-card" key={index} style={{ borderColor: '#e0e0e0', minWidth: '650px' }}>
                                        <div style={{ width: '180px', height: '180px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img
                                                src={cert.img}
                                                alt={cert.title}
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'contain',
                                                    transform: 'none'
                                                }}
                                            />
                                        </div>
                                        <div className="cert-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '35px' }}>
                                            <span style={{ fontSize: '1.8rem', fontWeight: '900', color: cert.color || '#333', textTransform: 'uppercase', lineHeight: '1.2' }}>
                                                {cert.title}
                                            </span>
                                            {cert.subtitle && (
                                                <span style={{ fontSize: '1rem', color: '#666', marginTop: '10px', lineHeight: '1.4', fontWeight: '500', textAlign: 'left' }}>
                                                    {cert.subtitle}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
