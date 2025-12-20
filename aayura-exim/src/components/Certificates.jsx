import React from 'react';
import './Certificates.css';

// Import certificate images from user uploads
import certSpices from '../assets/images/cert_spices_board_new.png';
import certGst from '../assets/images/cert_gst_new.png';
import certFieo from '../assets/images/cert_fieo_new.png';
import certIec from '../assets/images/cert_iec_new.png';
import certCoconut from '../assets/images/cert_coconut_board_new.png';
import certUdyog from '../assets/images/cert_udyog_aadhar_new.png';
import certHalal from '../assets/images/cert_halal_updated.png';

const certificates = [
    { img: certSpices, name: "Spices Board" },
    { img: certGst, name: "GST Registered" },
    { img: certFieo, name: "FIEO" },
    { img: certIec, name: "IEC" },
    { img: certCoconut, name: "Coconut Board" },
    { img: certUdyog, name: "MSME Udyog Aadhar" },
    { img: certHalal, name: "Halal" }
];

const Certificates = () => {
    return (
        <section className="certificates-section">
            <div className="container">
                <div className="certificates-header">
                    <h2>Accreditations & Certifications</h2>
                    <p>Recognized by Leading Global Trade Authorities</p>
                </div>

                {/* Scrolling Marquee Container */}
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {/* Original Set */}
                        {certificates.map((cert, index) => (
                            <div className="cert-card" key={`org-${index}`}>
                                <img src={cert.img} alt={cert.name} />
                            </div>
                        ))}
                        {/* Duplicate Set for Seamless Loop */}
                        {certificates.map((cert, index) => (
                            <div className="cert-card" key={`dup-${index}`}>
                                <img src={cert.img} alt={cert.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
