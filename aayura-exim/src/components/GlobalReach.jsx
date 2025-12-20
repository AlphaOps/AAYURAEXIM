import React, { useEffect, useState } from 'react';
import './GlobalReach.css';
import mapBg from '../assets/images/bg_global_map.png';

const StatCounter = ({ end, duration, label, suffix = '+' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <div className="stat-item">
            <div className="stat-number">{count}{suffix}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const GlobalReach = () => {
    return (
        <section className="section global-reach" style={{ backgroundImage: `url(${mapBg})` }}>
            <div className="overlay-dark"></div>
            <div className="container relative-z">
                <div className="section-header-center">
                    <h2 className="section-title text-white">Our Global Footprint Plan</h2>
                    <p className="section-subtitle text-light">
                        Connecting premium Indian produce with international markets. We ensure timely delivery and quality across borders.
                    </p>
                </div>

                <div className="stats-grid">
                    <StatCounter end={25} duration={2000} label="Countries Served" />
                    <StatCounter end={150} duration={2000} label="Product Varieties" />
                    <StatCounter end={500} duration={2500} label="Happy Clients" />
                    <StatCounter end={5000} duration={3000} label="Tons Exported" />
                </div>

                <div className="delivery-regions">
                    <h3 className="text-white">Delivering To</h3>
                    <div className="region-tags">
                        <span>🇺🇸 USA</span>
                        <span>🇬🇧 UK</span>
                        <span>🇨🇦 Canada</span>
                        <span>🇦🇺 Australia</span>
                        <span>🇦🇪 UAE</span>
                        <span>🇪🇺 Europe</span>
                        <span>🇸🇬 Singapore</span>
                        <span>🇲🇾 Malaysia</span>
                        <span>🇯🇵 Japan</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
