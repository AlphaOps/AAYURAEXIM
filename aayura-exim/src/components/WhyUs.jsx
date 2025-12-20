import React from 'react';
import { CheckCircle, Truck, DollarSign, Globe } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
    const features = [
        {
            icon: <CheckCircle size={40} />,
            title: "Trusted Exporter",
            desc: "Reliable partner from India with a proven track record."
        },
        {
            icon: <Globe size={40} />,
            title: "Global Standards",
            desc: "Products meeting international quality and safety norms."
        },
        {
            icon: <DollarSign size={40} />,
            title: "Competitive Pricing",
            desc: "Best market rates without compromising on quality."
        },
        {
            icon: <Truck size={40} />,
            title: "Efficient Logistics",
            desc: "Timely delivery and smooth export documentation."
        }
    ];

    return (
        <section id="why-choose-us" className="section why-us">
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--color-brand-blue)', fontSize: '3rem' }}>Why Choose AAYURA EXIM?</h2>
                <p className="section-subtitle" style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    color: 'var(--color-brand-blue-soft)',
                    marginTop: '10px'
                }}>
                    "We are committed to delivering excellence in every shipment."
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon-box">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
