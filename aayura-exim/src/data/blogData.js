import imgExpert from '../assets/images/blog_expert_analysis.png';
import imgDigest from '../assets/images/blog_global_digest.png';
import imgCompliance from '../assets/images/blog_compliance.png';
import imgStats from '../assets/images/blog_stats.png';
import imgSpotlight from '../assets/images/blog_spotlight.png';
import imgQuoteBg from '../assets/images/blog_quote_bg.png';
import imgFaq from '../assets/images/blog_faq_icons.png';

// Import existing blog images for re-use or related

import imgFeatured from '../assets/images/blog_featured.png';

export const blogPosts = [
    {
        id: 'global-trade-developments-dec-2025',
        title: 'Dec 2025 Global Trade & Export Trends: India, China, UK-Korea Deal & More',
        date: 'December 20, 2025',
        author: 'AAYURA Trade Desk',
        category: 'Market Intelligence',
        image: imgFeatured,
        summary: 'India’s overall exports rose sharply in November, with shipments to the U.S. up more than 20%, defying hefty tariffs and strengthening India’s trade position.',
        content: `
            <p><strong>December 20, 2025</strong> – As the year draws to a close, global trade dynamics are shifting rapidly. From India’s resilient export performance to major policy shifts in China and new trade agreements in the UK, December 2025 has been a pivotal month for international commerce.</p>

            <h2>India’s Export Resilience: Growth Despite Tariffs</h2>
            <p>In a surprising turn of events, India’s overall exports rose sharply between November 2024 and November 2025, registering a growth of approximately <strong>15%</strong>. This surge comes despite a challenging global environment marked by rising protectionism and tariff wars.</p>
            <p>Shipments to the United States saw a remarkable increase of over <strong>20%</strong>, defying hefty tariffs imposed earlier this year. "The resilience of Indian exporters is commendable," notes renewed trade analyst Dr. Arjun Mehta. "Diversification of the export basket—moving beyond traditional textiles into high-value engineering goods and processed food—is paying dividends."</p>

            <blockquote>
                “India’s agricultural exports are entering a high-growth phase due to improved logistics and sustained global demand for organic produce.”
                <cite>— Ministry of Commerce Spokesperson</cite>
            </blockquote>

            <h2>Strategic Trade Agreements: India–Oman CEPA</h2>
            <p>The Comprehensive Economic Partnership Agreement (CEPA) between India and Oman is accelerating towards full implementation. Expected to be operational within the next three months, this pact is set to eliminate duties on thousands of products, significantly boosting Indian agricultural exports to the Gulf region. This strategic move aligns with India's broader goal of strengthening ties with West Asia.</p>

            <h2>Global Agreements Tracker</h2>
            <h3>UK–South Korea Trade Deal</h3>
            <p>On the other side of the globe, the UK and South Korea have signed a landmark trade deal. This agreement opens up new avenues for exports in automotive, food & drink, and pharmaceuticals. For global traders, this signals a shift in supply chain focus, potentially creating new competitive pressures but also opening alternate routes for component sourcing.</p>
            <h3>EU–Mercosur Delays</h3>
            <p>Contrastingly, the EU–Mercosur deal continues to face headwinds, with delays citing environmental compliance. This stagnation is forcing South American exporters to look towards Asian markets, potentially increasing competition for Indian exporters in sectors like soy and meat.</p>

            <h2>Sector Spotlight: MSMEs & Logistics</h2>
            <p>Micro, Small & Medium Enterprises (MSMEs) in India are becoming vocal about their logistical needs. In Tamil Nadu, industry bodies are pushing for dedicated cargo flights to Gulf and Asian destinations. The aim is to reduce shipping times for perishables—a critical factor for the region's robust fruit and vegetable export sector.</p>
            <p>Currently, logistics costs account for a significant portion of the final product price. "Direct cargo flights could cut our turnaround time by 40% and costs by 15%," says a representative from the Tamil Nadu Exporters Association.</p>

            <h2>Trade Tensions: WTO Cases on the Rise</h2>
            <p>The World Trade Organization (WTO) data reveals a worrying trend: import restriction measures have spiked fourfold from late 2024 to late 2025. China recently filed a WTO case challenging specific tariff policies, highlighting the growing friction between major economic powers. For traders, this underscores the importance of staying agile and compliant with rapidly changing import regulations.</p>

            <h2>Data Insight: The $35 Trillion Forecast</h2>
            <img src="${imgStats}" alt="Global Trade Statistics" style="width: 100%; border-radius: 8px; margin: 20px 0;" />
            <p>Despite these headwinds, global trade is forecasted to hit a staggering <strong>$35 trillion</strong> in 2025. This growth is largely driven by the expanding economies of East Asia and Africa. For AAYURA EXIM, staying ahead of these trends means continuously monitoring market signals and adapting our sourcing strategies to ensure we deliver the best value to our partners worldwide.</p>

            <h2>Conclusion</h2>
            <p>December 2025 serves as a reminder that while the global trade landscape is fraught with challenges, opportunities abound for those who are prepared. Whether it's the booming US-India corridor or the emerging potential in the Gulf, the future of exports looks promising for India.</p>
        `
    }
];

export const blogSections = {
    expertAnalysis: {
        title: "Understanding Trade Policies",
        text: "While headlines highlight policy changes, the real impact on exporters lies in compliance timelines, tariff classifications, and logistics readiness. Our analysts break down what recent WTO shifts mean for your bottom line.",
        image: imgExpert
    },
    weeklyDigest: {
        map: imgDigest,
        items: [
            { id: 1, country: "India", flag: "🇮🇳", text: "Export growth driven by spices & grains." },
            { id: 2, country: "EU", flag: "🇪🇺", text: "Stricter food compliance checks announced." },
            { id: 3, country: "USA", flag: "🇺🇸", text: "Import demand stabilizes for agricultural goods." },
            { id: 4, country: "China", flag: "🇨🇳", text: "Tariffs on EU pork reduced significantly." }
        ]
    },
    compliance: [
        { id: 1, title: "New Import Regulations", content: "EU requires Digital Product Passports for all packaged foods starting Jan 2026." },
        { id: 2, title: "Certification Updates", content: "FSSAI introduces stricter norms for organic labeling." },
        { id: 3, title: "Customs Procedures", content: "India implements faceless assessment for all shipping bills." }
    ],
    imageCompliance: imgCompliance,
    stats: {
        image: imgStats,
        items: [
            { label: "Top Commodity", value: "Spices" },
            { label: "Fastest Growth", value: "USA" },
            { label: "Avg Shipping", value: "22 Days" }
        ]
    },
    spotlight: {
        title: "Indian Spices Demand",
        text: "Global demand for Indian turmeric and cardamom has surged by 15% this quarter, driven by the clean-label movement in Europe.",
        image: imgSpotlight
    },
    quotes: [
        { text: "India’s agricultural exports are entering a high-growth phase due to improved logistics and global demand.", author: "Trade Ministry Spokesperson" }
    ],
    imageQuoteBg: imgQuoteBg,
    faq: [
        { q: "What documents are required for agricultural exports?", a: "Commercial Invoice, Packing List, Bill of Lading, Phyto Certificate, and Certificate of Origin." },
        { q: "How long does international shipping take?", a: "It varies by destination; typically 20-30 days for Europe and 30-45 days for the Americas." }
    ],
    imageFaq: imgFaq,
    imageSubscribe: null // Using null/CSS for now as generation failed
};
