import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CtaBanner.css';


const CtaBanner = () => {
    return (
        <section className="cta-banner">
            <div className="cta-background">
                {/* Map overlay removed as per user request */}
            </div>

            <div className="container relative-z">
                <div className="cta-content">
                    <div className="cta-text-group">
                        <h2>Ready to Partner with a Trusted Export House?</h2>
                        <p>
                            Premium-quality Indian agricultural products, delivered with consistency, compliance, and global reliability.
                        </p>
                    </div>

                    <div className="cta-actions">
                        <Link to="/contact" className="btn btn-primary-cta">
                            Talk to Our Export Team
                        </Link>
                        <Link to="/#products" className="btn-secondary-link">
                            Request product catalog <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
