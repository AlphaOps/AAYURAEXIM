import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productData } from '../data/products';
import './ProductDetailPage.css';

// Imported specific assets for Cumin (Pilot Product)
import imgStoryFarm from '../assets/images/cumin_story_farm_harvest.png';
import imgStoryProcessing from '../assets/images/cumin_story_processing.png';
import imgHeroReal from '../assets/images/cumin_seeds_hero_closeup.png';

// Fallback
import farmImage from '../assets/images/about_farm_to_port.png';

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // Find product across all categories using useMemo (prevents setState loop)
    const product = React.useMemo(() => {
        let foundProduct = null;
        Object.values(productData).forEach(category => {
            const item = category.items.find(p => p.id === id);
            if (item) foundProduct = item;
        });
        return foundProduct;
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div style={{ padding: '100px', textAlign: 'center' }}>Loading Project Details...</div>;
    }

    // Determine images based on product ID (Pilot logic)
    const isCumin = id === 's1';

    // 1. MAIN HERO IMAGE
    const finalHeroImage = isCumin ? imgHeroReal : product.image;

    // 2. STORY IMAGES (Universal System: Farm & Processing)
    const storyImage1 = isCumin ? imgStoryFarm : farmImage; // Farm/Origin
    const storyImage2 = isCumin ? imgStoryProcessing : farmImage; // Processing/Quality (Ideally needs processing fallback)

    // Snapshot Fallback
    const snapshot = product.snapshot || {
        origin: "India", type: "Whole/Ground", processing: "Standard", packaging: "Custom", moq: "As per requirement", hsCode: "N/A"
    };

    // Story Fallback (Handle new p1/p2 format vs old content array)
    const storyData = product.story || {};
    const storyHeading = storyData.heading || `The Story Behind Our ${product.name}`;
    const storyP1 = storyData.p1 || (storyData.content ? storyData.content[0] : "Sourcing description unavailable.");
    const storyP2 = storyData.p2 || (storyData.content ? storyData.content[1] : "Processing description unavailable.");

    // Specs Fallback
    const specs = product.specs || [
        { label: "Quality", value: "Export Grade" },
        { label: "Origin", value: "India" }
    ];

    // Compliance Fallback
    const compliance = product.compliance || {
        text: `Our ${product.name} is packed in export-compliant packaging to ensure product safety and quality during international shipment.`,
        packaging: ["Standard Export Packaging"],
        certs: []
    };

    const idealFor = product.idealFor || ["Importers", "Wholesalers", "Manufacturers"];

    const scrollToStory = () => {
        const element = document.getElementById('product-story');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const handleEnquire = () => {
        navigate('/contact');
    };

    return (
        <div className="product-detail-page">

            {/* 1. HERO SECTION (Universal Layout) */}
            <section className="pdp-hero">
                <div className="container">
                    <div className="pdp-hero-grid">

                        {/* LEFT: MAIN PRODUCT IMAGE ONLY */}
                        <div className="pdp-gallery">
                            <div className="pdp-main-image" style={{ marginBottom: 0 }}>
                                <img src={finalHeroImage} alt={product.name} />
                            </div>
                        </div>

                        {/* RIGHT: PRODUCT INFO + TRUST + CTAs */}
                        <div className="pdp-info">
                            <span className="pdp-category-tag">{product.category}</span>
                            <h1 className="pdp-title">{product.name} – Export Quality</h1>
                            {product.scientificName && <span className="pdp-scientific">{product.scientificName}</span>}

                            <p className="pdp-trust-line">
                                {product.desc}
                            </p>

                            <div className="pdp-actions">
                                <button className="btn-pdp-primary" onClick={handleEnquire}>Enquire Now</button>
                                <button className="btn-pdp-secondary" onClick={scrollToStory}>📖 View Product Story</button>
                            </div>

                            {/* 2. EXPORT SNAPSHOT (Box) */}
                            <div className="export-snapshot">
                                <h3 className="snapshot-title">Export Snapshot</h3>
                                <div className="snapshot-grid">
                                    <div className="snapshot-item">
                                        <span className="sn-label">Origin</span>
                                        <span className="sn-value">{snapshot.origin}</span>
                                    </div>
                                    <div className="snapshot-item">
                                        <span className="sn-label">Processing</span>
                                        <span className="sn-value">{snapshot.processing}</span>
                                    </div>
                                    <div className="snapshot-item" style={{ marginTop: '15px' }}>
                                        <span className="sn-label">Packaging</span>
                                        <span className="sn-value">{snapshot.packaging}</span>
                                    </div>
                                    <div className="snapshot-item" style={{ marginTop: '15px' }}>
                                        <span className="sn-label">MOQ</span>
                                        <span className="sn-value">{snapshot.moq}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PRODUCT STORY SECTION (Universal 2-Row Layout) */}
            <section id="product-story" className="pdp-story-section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontFamily: 'Playfair Display', fontSize: '2.5rem', marginBottom: '60px' }}>
                        {storyHeading}
                    </h2>

                    {/* ROW 1: [Image: Farm] [Text: Sourcing] */}
                    <div className="story-row">
                        <div className="story-col-img">
                            <img src={storyImage1} alt="Farm Sourcing" />
                        </div>
                        <div className="story-col-text">
                            <p>{storyP1}</p>
                        </div>
                    </div>

                    {/* ROW 2: [Text: Processing] [Image: Processing] */}
                    <div className="story-row reverse-mobile" style={{ marginTop: '60px' }}>
                        <div className="story-col-text">
                            <p>{storyP2}</p>
                        </div>
                        <div className="story-col-img">
                            <img src={storyImage2} alt="Processing Facility" />
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. SPECS (Universal Table) */}
            <section className="pdp-specs-section">
                <div className="container">
                    <div className="specs-layout">

                        <div className="specs-card">
                            <h3>Quality Specifications & Export Standards</h3>
                            <table className="specs-table">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'left', padding: '15px 20px', color: '#888' }}>Parameter</th>
                                        <th style={{ textAlign: 'left', padding: '15px 20px', color: '#888' }}>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specs.map((spec, idx) => (
                                        <tr key={idx}>
                                            <td className="spec-label">{spec.label}</td>
                                            <td className="spec-value">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                                * Specifications can be customized as per buyer and destination country requirements.
                            </p>
                        </div>

                        {/* 5. COMPLIANCE & PACKAGING */}
                        <div className="compliance-card">
                            <h3>Packaging & Compliance</h3>
                            <p className="compliance-text">{compliance.text}</p>

                            <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#333' }}>Packaging Options:</h4>
                            <ul className="compliance-list">
                                {compliance.packaging.map((pkg, i) => (
                                    <li key={i}>{pkg}</li>
                                ))}
                            </ul>

                            <p style={{ marginTop: '20px', fontSize: '0.95rem', color: '#555' }}>
                                Compliance and documentation are provided based on destination country regulations.
                            </p>

                            {compliance.certs && compliance.certs.length > 0 && (
                                <div style={{ marginTop: '25px' }}>
                                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                        {compliance.certs.map((c, i) => (
                                            <span key={i} style={{ background: '#eee', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#555' }}>
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. IDEAL FOR */}
            <section className="ideal-for-section">
                <div className="container">
                    <h2 className="ideal-title">Ideal For</h2>
                    <div className="ideal-grid">
                        {idealFor.map((item, idx) => (
                            <div key={idx} className="ideal-card">
                                <span>✔</span> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="pdp-bottom-cta">
                <div className="container">
                    <h2>Interested in Sourcing Export-Quality {product.name}?</h2>
                    <div className="cta-buttons-row">
                        <button className="btn-blue-solid" onClick={handleEnquire}>Enquire Now</button>
                        <button className="btn-white-outline" onClick={handleEnquire}>Request Specifications / Samples</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;
