import React from 'react';
import './Organic.css';

const Organic = () => {
    return (
        <section className="section organic">
            <div className="container">
                <div className="organic-content">
                    <h5>Sustainable & Ethical Sourcing</h5>
                    <h2>Premium Product Development</h2>
                    <p>
                        We actively support the export of residue-controlled and premium-grade products for markets that demand clean, natural, and sustainable food solutions. Our approach aligns with global trends toward health-conscious and eco-friendly consumption.
                    </p>
                    <div className="organic-tags">
                        <span>🌱 100% Natural</span>
                        <span>🚫 Residue Free</span>
                        <span>🌍 Ethically Sourced</span>
                        <span>💎 Premium Grade</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organic;
