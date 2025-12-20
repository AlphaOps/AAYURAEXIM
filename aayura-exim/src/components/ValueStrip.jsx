import React from 'react';
import './ValueStrip.css';

const ValueStrip = () => {
    return (
        <section className="value-strip">
            <div className="container">
                <div className="value-grid">
                    <div className="value-block block-saffron">
                        <div className="value-icon">🌍</div>
                        <h3>Trusted Exporter</h3>
                        <p>Delivering Indian heritage to 20+ countries with reliability.</p>
                    </div>
                    <div className="value-block block-olive">
                        <div className="value-icon">✅</div>
                        <h3>Verified Quality</h3>
                        <p>Strict quality checks ensuring global export standards.</p>
                    </div>
                    <div className="value-block block-turmeric">
                        <div className="value-icon">🤝</div>
                        <h3>Transparent Trade</h3>
                        <p>Ethical practices and clear communication at every step.</p>
                    </div>
                    <div className="value-block block-chilli">
                        <div className="value-icon">⚓</div>
                        <h3>Seamless Logistics</h3>
                        <p>End-to-end shipping solutions for timely delivery.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueStrip;
