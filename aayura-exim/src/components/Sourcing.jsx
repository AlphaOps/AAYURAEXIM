import React from 'react';
import './Sourcing.css';

const steps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Understanding buyer needs & specs' },
    { num: '02', title: 'Supplier Verification', desc: 'Sourcing from trusted farmers/units' },
    { num: '03', title: 'Sampling & Approval', desc: 'Product quality verification' },
    { num: '04', title: 'Inspection & Compliance', desc: 'Strict QC & export documentation' },
    { num: '05', title: 'Packaging & Logistics', desc: 'Secure packing & shipment booking' },
    { num: '06', title: 'Global Delivery', desc: 'Timely delivery to destination' }
];

const Sourcing = () => {
    return (
        <section id="sourcing" className="section sourcing">
            <div className="container">
                <h2 className="section-title">Seamless Sourcing Process</h2>
                <p className="section-subtitle">A transparent and professional workflow from Indian farms to your warehouse.</p>

                <div className="process-flow">
                    {steps.map((step, index) => (
                        <div className="process-step" key={index}>
                            <div className="step-number">{step.num}</div>
                            <div className="step-content">
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                            {/* Connector line except for last item */}
                            {index !== steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sourcing;
