import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { blogSections, blogPosts } from '../data/blogData';

// Import images directly if needed for hero/static parts not in data
import heroImage from '../assets/images/blog_hero.png';
import newsThumb from '../assets/images/blog_news_thumb.png'; // Reusing for news grid
import countryMap from '../assets/images/blog_country.png';   // Reusing
import logisticsImage from '../assets/images/blog_logistics.png'; // Reusing
import marketImage from '../assets/images/blog_market.png'; // Reusing

// Icons
import { MapPin, FileText, BarChart2, MessageCircle, HelpCircle, Mail, ArrowRight } from 'lucide-react';

const newsGridData = [
    {
        id: 1,
        category: 'Trade Pact',
        title: 'India–Oman Trade Pact Accelerates CEPA Rollout',
        date: 'Dec 18, 2025',
        summary: 'A new Comprehensive Economic Partnership Agreement (CEPA) is expected to be implemented within three months.',
        color: '#001f3f'
    },
    {
        id: 2,
        category: 'Policy',
        title: 'Ahead of Budget 2026: CII Proposes Import Duty Reforms',
        date: 'Dec 15, 2025',
        summary: 'CII has pitched lower import duties and a “trust-led” tax system to strengthen India’s trade competitiveness.',
        color: '#8B0000'
    },
    {
        id: 3,
        category: 'Logistics',
        title: 'Local MSMEs Push for Dedicated Cargo Flights',
        date: 'Dec 12, 2025',
        summary: 'MSMEs in Tamil Nadu call for direct cargo flights to Gulf and Asian destinations to boost exports.',
        color: '#708090'
    },
    {
        id: 4,
        category: 'Global Deal',
        title: 'UK–South Korea Trade Deal Boosts Key Sectors',
        date: 'Dec 10, 2025',
        summary: 'The UK and South Korea signed a trade deal opening up exports in automotive, food & drink, and pharmaceuticals.',
        color: '#006400'
    }
];

const countryNewsData = [
    { country: 'India', title: 'Export performance rose ~15% Nov 2024–Nov 2025' },
    { country: 'China', title: 'Cuts Pork Tariffs on EU Imports' },
    { country: 'Germany', title: 'China falling out of top five export destinations' },
    { country: 'USA', title: 'India shipments up >20% defying tariffs' }
];

const Blog = () => {
    // FAQ Accordion State
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Get the featured post (first one from data)
    const featuredPost = blogPosts[0];

    return (
        <div className="blog-page">
            {/* SECTION 1: BLOG HERO */}
            <section className="blog-hero">
                <div className="container hero-layout">
                    <div className="hero-text">
                        <h5 className="journal-label">GLOBAL TRADE JOURNAL</h5>
                        <h3>Daily Import–Export & International Trade Updates</h3>
                        <p className="intro-text">
                            Stay updated with the latest global trade developments, export regulations, shipping news, and agricultural market trends curated by AAYURA EXIM.
                        </p>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src={heroImage} alt="Global Trade Report" className="vertical-hero-img" />
                    </div>
                </div>
            </section>

            {/* SECTION 2: FEATURED STORY */}
            <section className="featured-story">
                <div className="container">
                    <div className="featured-card">
                        <div className="featured-img-container">
                            <img src={featuredPost.image} alt={featuredPost.title} />
                        </div>
                        <div className="featured-content">
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.summary}</p>
                            <Link to={`/blog/${featuredPost.id}`} className="read-more-btn">Read Full Story</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: LATEST TRADE UPDATES */}
            <section className="trade-updates">
                <div className="container">
                    <h3 className="section-heading">Latest Trade Updates</h3>
                    <div className="news-grid">
                        {newsGridData.map((item) => (
                            <div className="news-card" key={item.id}>
                                <div className="news-thumb">
                                    <img src={newsThumb} alt="Trade News" />
                                </div>
                                <div className="news-details">
                                    <span className="category-tag" style={{ backgroundColor: item.color }}>{item.category}</span>
                                    <h4>{item.title}</h4>
                                    <span className="news-date">{item.date}</span>
                                    <p>{item.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: COUNTRY-WISE TRADE NEWS */}
            <section className="country-focus">
                <div className="container">
                    <h3 className="section-heading">Country Focus: Global Trade Developments</h3>
                    <div className="country-layout">
                        <div className="country-map">
                            <img src={countryMap} alt="World Trade Map" />
                        </div>
                        <div className="country-cards">
                            {countryNewsData.map((item, index) => (
                                <div className="country-card" key={index}>
                                    <h4>{item.country}</h4>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: LOGISTICS & SHIPPING */}
            <section className="logistics-update">
                <div className="container logistics-layout">
                    <div className="logistics-image">
                        <img src={logisticsImage} alt="Container Ship" />
                    </div>
                    <div className="logistics-text">
                        <h3>Local MSMEs Push for Dedicated Cargo Flights</h3>
                        <p>Micro, Small & Medium Enterprises (MSMEs) in Tamil Nadu are calling for direct cargo flights to Gulf and Asian destinations, aiming to reduce logistics costs and boost export growth.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: MARKET PRICES & EXPORT TRENDS */}
            <section className="market-trends">
                <div className="container trends-layout">
                    <div className="trends-text">
                        <h3>Market Prices & Export Trends</h3>
                        <ul className="trends-list">
                            <li><strong>Global Trade</strong> expected to hit $35 trillion in 2025.</li>
                            <li><strong>Export Growth</strong>: India’s export performance rose ~15% Nov 2024–Nov 2025.</li>
                            <li><strong>Tariffs</strong>: WTO data shows import measures spiked fourfold from late 2024 to late 2025.</li>
                            <li><strong>Trade Deficit</strong>: India’s trade with China shows surge in exports but widening deficit persists.</li>
                        </ul>
                    </div>
                    <div className="trends-image">
                        <img src={marketImage} alt="Market Infographic" />
                    </div>
                </div>
            </section>

            {/* SECTION 11: EXPERT TRADE ANALYSIS */}
            <section className="expert-analysis">
                <div className="container analysis-layout">
                    <div className="analysis-text">
                        <span className="section-eyebrow">Beyond the Headlines</span>
                        <h3>{blogSections.expertAnalysis.title}</h3>
                        <p>{blogSections.expertAnalysis.text}</p>
                        <button className="read-more-link">Read Analysis <ArrowRight size={16} /></button>
                    </div>
                    <div className="analysis-image">
                        <img src={blogSections.expertAnalysis.image} alt="Trade Analyst" />
                    </div>
                </div>
            </section>

            {/* SECTION 12: WEEKLY GLOBAL TRADE DIGEST */}
            <section className="global-digest">
                <div className="container">
                    <h3 className="section-heading">Weekly Global Trade Digest</h3>
                    <div className="digest-layout">
                        <div className="digest-map-bg" style={{ backgroundImage: `url(${blogSections.weeklyDigest?.map})` }}>
                            {/* Map background handled by CSS/Image */}
                            {blogSections.weeklyDigest?.map && (
                                <img src={blogSections.weeklyDigest.map} alt="Global Map" className="digest-map-img" />
                            )}
                        </div>
                        <div className="digest-timeline">
                            {blogSections.weeklyDigest?.items?.map((item) => (
                                <div className="digest-item" key={item.id}>
                                    <div className="digest-flag">{item.flag}</div>
                                    <div className="digest-content">
                                        <h4>{item.country}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 13: REGULATORY & COMPLIANCE WATCH */}
            <section className="compliance-watch">
                <div className="container compliance-container">
                    <div className="compliance-content">
                        <h3 className="section-heading-left">Regulatory & Compliance Watch</h3>
                        <div className="accordion">
                            {blogSections.compliance.map((item, index) => (
                                <div className="accordion-item" key={item.id}>
                                    <div className="accordion-header">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="accordion-body">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="compliance-image">
                        <img src={blogSections.imageCompliance} alt="Compliance Documents" />
                    </div>
                </div>
            </section>

            {/* SECTION 14: EXPORT DATA & STATISTICS HUB */}
            <section className="data-hub">
                <div className="container">
                    <h3 className="section-heading">Export Data & Statistics Hub</h3>
                    <div className="data-grid">
                        <div className="data-chart-main">
                            <img src={blogSections.stats.image} alt="Export Statistics" />
                        </div>
                        <div className="data-cards-side">
                            {blogSections.stats.items.map((stat, idx) => (
                                <div className="data-card" key={idx}>
                                    <h5>{stat.label}</h5>
                                    <span className="data-value">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 15: AGRICULTURAL EXPORT SPOTLIGHT */}
            <section className="export-spotlight">
                <div className="container spotlight-layout">
                    <div className="spotlight-image">
                        <img src={blogSections.spotlight.image} alt="Indian Spices" />
                    </div>
                    <div className="spotlight-text">
                        <span className="spotlight-badge">Product Focus</span>
                        <h3>{blogSections.spotlight.title}</h3>
                        <p>{blogSections.spotlight.text}</p>
                    </div>
                </div>
            </section>

            {/* SECTION 16: INDUSTRY VOICES & QUOTES */}
            <section className="industry-voices">
                <div className="container">
                    <div className="quote-card" style={{ backgroundImage: `url(${blogSections.imageQuoteBg})` }}>
                        <div className="quote-content">
                            <MessageCircle size={40} className="quote-icon" />
                            <blockquote>"{blogSections.quotes[0].text}"</blockquote>
                            <cite>— {blogSections.quotes[0].author}</cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 17: EXPORTER KNOWLEDGE DESK (FAQ) */}
            <section className="knowledge-desk">
                <div className="container faq-layout">
                    <div className="faq-icons">
                        <img src={blogSections.imageFaq} alt="FAQ Icons" />
                    </div>
                    <div className="faq-content">
                        <h3>Exporter’s Knowledge Desk</h3>
                        <div className="faq-list">
                            {blogSections.faq.map((item, idx) => (
                                <div className="faq-item" key={idx} onClick={() => toggleFaq(idx)}>
                                    <div className="faq-question">
                                        <HelpCircle size={20} />
                                        <span>{item.q}</span>
                                        <span className="toggle-icon">{activeFaq === idx ? '-' : '+'}</span>
                                    </div>
                                    {activeFaq === idx && <div className="faq-answer">{item.a}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 18: TRADE ALERT SUBSCRIPTION */}
            <section className="trade-subscription">
                <div className="container sub-container">
                    <div className="sub-text">
                        <Mail size={32} style={{ marginBottom: '15px' }} />
                        <h3>Never Miss an Update</h3>
                        <p>Get Weekly Import-Export News & Market Insights directly to your inbox.</p>
                    </div>
                    <div className="sub-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button className="btn-sub">Subscribe</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;
