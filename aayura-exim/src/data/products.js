// Product Images
import imgSpices from '../assets/images/product_spices.png';
import imgVegetables from '../assets/images/product_vegetables.png';
import imgDehydrated from '../assets/images/product_dehydrated.png';
import imgRice from '../assets/images/product_rice.png';
import imgHerbal from '../assets/images/product_herbal.png';
import imgSeafood from '../assets/images/product_seafood.png';
import imgFruits from '../assets/images/product_fruits.png'; // Added missing import

// Sub Product Images (Specific)
import prodBanana from '../assets/images/prod_banana.png';
import prodPomegranate from '../assets/images/prod_pomegranate.png';
import prodMango from '../assets/images/prod_mango.png';
import prodLemon from '../assets/images/prod_lemon.png';
import prodDrumstick from '../assets/images/prod_drumstick.png';
import prodChilliGreen from '../assets/images/prod_chilli_green.png';
import prodOnionRedFresh from '../assets/images/prod_onion_red_fresh.png';
import prodCuminSeeds from '../assets/images/prod_cumin_seeds.png';
import prodBlackPepper from '../assets/images/prod_black_pepper.png';
import prodTurmericPowder from '../assets/images/prod_turmeric_powder.png';
import prodCuminPowder from '../assets/images/prod_cumin_powder.png';
import prodDryGinger from '../assets/images/prod_dry_ginger.png';
import prodCorianderWhole from '../assets/images/prod_coriander_whole.png';
import prodCorianderPowder from '../assets/images/prod_coriander_powder.png';
import prodTomatoFresh from '../assets/images/prod_tomato_fresh.png'; // New Import
import prodCucumberFresh from '../assets/images/prod_cucumber_fresh.png'; // New Import
import prodWatermelonFresh from '../assets/images/prod_watermelon_fresh.png'; // New Import
import prodGrapesFresh from '../assets/images/prod_grapes_fresh.png'; // New Import
import prodCoconutSemiHusked from '../assets/images/prod_coconut_semi_husked_v2.png'; // Updated to v2 for cache busting
import prodDehydratedOnionWhiteFlakes from '../assets/images/prod_dehydrated_onion_white_flakes.png';
import prodDehydratedGingerFlakes from '../assets/images/prod_dehydrated_ginger_flakes.png';
import prodDehydratedPotatoFlakes from '../assets/images/prod_dehydrated_potato_flakes.png';
import prodDehydratedGarlicFlakes from '../assets/images/prod_dehydrated_garlic_flakes.png'; // New Import
import prodChickpeasKabuli from '../assets/images/prod_chickpeas_kabuli.png'; // New Import
import prodMungDal from '../assets/images/prod_mung_dal.png'; // New Import
import prodToorDal from '../assets/images/prod_toor_dal.png'; // New Import
import prodSteviaLeaves from '../assets/images/prod_stevia_leaves.png'; // New Import
import prodAmlaFresh from '../assets/images/prod_amla_fresh.png'; // New Import
import prodMintLeaves from '../assets/images/prod_mint_leaves.png'; // New Import
import prodAshwagandhaRoots from '../assets/images/prod_ashwagandha_roots.png'; // New Import
import prodAloeVera from '../assets/images/prod_aloe_vera.png'; // New Import
import prodSteviaWholePowder from '../assets/images/prod_stevia_leaves_powder.png';
import prodAmlaWholePowder from '../assets/images/prod_amla_whole_powder.png';
import prodMintWholePowder from '../assets/images/prod_mint_leaves_powder.png';
// Fallbacks/Pre-existing
import subTurmeric from '../assets/images/sub_turmeric.png';
import subChilli from '../assets/images/sub_chilli.png';
import subCardamom from '../assets/images/sub_cardamom.png';
import subOnionRed from '../assets/images/sub_onion_red.png';
import subMoringa from '../assets/images/sub_moringa.png';

// We will map these dynamically or use default category images until specific ones are generated
const defaultImages = {
    spices: imgSpices,
    veg: imgVegetables,
    dehydrated: imgDehydrated,
    rice: imgRice,
    herbal: imgHerbal,
    seafood: imgSeafood
};

export const productData = {
    "indian-spices": {
        title: "Indian Spices",
        subtitle: "Authentic, aromatic, and premium quality spices directly from Indian farms.",
        heroImage: imgSpices,
        items: [
            {
                id: "s1",
                name: "Cumin Seeds (Jeera)",
                scientificName: "Cuminum cyminum",
                desc: "Premium Indian cumin seeds sourced from verified farms and processed to meet international export standards.",
                category: "Whole Spices",
                image: prodCuminSeeds,
                // UNIVERSAL EXPORT SNAPSHOT
                snapshot: {
                    origin: "India",
                    type: "Whole Spices (Dried Seeds)",
                    processing: "Machine Cleaned / Sortex Cleaned",
                    packaging: "25kg / 50kg / Customized",
                    moq: "As per requirement",
                    hsCode: "090931"
                },
                // UNIVERSAL PRODUCT STORY (2-PARAGRAPH TEMPLATE)
                story: {
                    heading: "The Story Behind Our Cumin Seeds",
                    // Para 1: Farm/Sourcing (Matches Image 1)
                    p1: "Our Cumin Seeds (Jeera) are sourced from carefully selected growing regions of India known for favorable climate, soil conditions, and consistent crop quality. We work directly with experienced farmers and sourcing partners to ensure purity, traceability, and reliable supply.",
                    // Para 2: Processing/Quality (Matches Image 2)
                    p2: "After harvesting, the product undergoes controlled cleaning, grading, and quality inspection to meet export requirements. Each batch is handled with care to preserve its natural characteristics, aroma, color, and shelf life during international transportation."
                },
                // SPECS (FROM PDF / TEMPLATE)
                specs: [
                    { label: "Purity", value: "As per export grade (99% / 99.5%)" },
                    { label: "Moisture", value: "Export standard (Max 9-10%)" },
                    { label: "Cleaning", value: "Machine Cleaned / Sortex" },
                    { label: "Admixture", value: "Max 1%" },
                    { label: "Flavor", value: "Warm, Earthy, Spicy-Sweet" },
                    { label: "Shelf Life", value: "Long shelf stability (24 Months)" }
                ],
                // COMPLIANCE
                compliance: {
                    text: "Our Cumin Seeds are packed in export-compliant packaging to ensure product safety and quality during international shipment.",
                    packaging: ["PP Bags (25kg/50kg)", "Jute Bags", "Paper Bags", "Customized Solutions"],
                    certs: ["FSSAI", "Spices Board", "ISO", "HACCP"]
                },
                // IDEAL FOR
                idealFor: [
                    "Importers & Bulk Traders",
                    "Wholesalers & Distributors",
                    "Food Manufacturers",
                    "Private Label Buyers"
                ]
            },
            { id: "s2", name: "Turmeric Finger", desc: "High curcumin content, vibrant yellow color, polished & unpolished.", category: "Whole Spices", image: subTurmeric },
            { id: "s3", name: "Ginger", desc: "Premium dried ginger roots, bleached and unbleached options.", category: "Whole Spices", image: prodDryGinger },
            { id: "s4", name: "Black Pepper Whole", desc: "Bold black peppercorns, TGSEB and MG-1 grades available.", category: "Whole Spices", image: prodBlackPepper },
            { id: "s5", name: "Green Cardamom", desc: "Aromatic green pods, 6mm to 8mm+ grades available.", category: "Whole Spices", image: subCardamom },
            { id: "s6", name: "Coriander Whole", desc: "Greenish, aromatic seeds, Eagle and Scoop grades.", category: "Whole Spices", image: prodCorianderWhole },
            { id: "s7", name: "Cumin Powder", desc: "Freshly ground cumin with rich aroma and fine texture.", category: "Ground Spices", image: prodCuminPowder },
            { id: "s8", name: "Turmeric Powder", desc: "Pure turmeric powder with high curcumin, no artificial colors.", category: "Ground Spices", image: prodTurmericPowder },
            { id: "s9", name: "Chilli Powder", desc: "Vibrant red chilli powder, varying heat levels (Kashmiri/Reshampatti).", category: "Ground Spices", image: subChilli },
            { id: "s10", name: "Coriander Powder", desc: "Fine powder made from premium roasted coriander seeds.", category: "Ground Spices", image: prodCorianderPowder }
        ]
    },
    "dehydrated-products": {
        title: "Dehydrated Products",
        subtitle: "Long shelf-life, nutrient-rich dehydrated vegetables for global industries.",
        heroImage: imgDehydrated,
        items: [
            { id: "d1", name: "Dehydrated Red Onion Flakes", desc: "Premium red onion flakes, pungent aroma, low moisture.", category: "Dehydrated Onion", image: subOnionRed },
            { id: "d2", name: "Dehydrated White Onion Flakes", desc: "Sweet and sharp white onion flakes, export quality.", category: "Dehydrated Onion", image: prodDehydratedOnionWhiteFlakes },
            { id: "d3", name: "Dehydrated Ginger Flakes", desc: "Dried ginger slices, spicy and aromatic.", category: "Dehydrated", image: prodDehydratedGingerFlakes },
            { id: "d4", name: "Dehydrated Potato Flakes", desc: "Ready-to-use potato flakes for mash and bakery products.", category: "Dehydrated", image: prodDehydratedPotatoFlakes },
            { id: "d5", name: "Dehydrated Garlic Flakes", desc: "Aromatic dried garlic flakes with pungent flavor, ready for culinary use.", category: "Dehydrated", image: prodDehydratedGarlicFlakes }
        ]
    },
    "herbal-products": {
        title: "Herbal & Medicinal Products",
        subtitle: "Nature's best healing herbs processed for pharmaceutical and cosmetic use.",
        heroImage: imgHerbal,
        items: [
            { id: "h1", name: "Stevia Leaves – Whole & Powder", desc: "Naturally dried stevia leaves and finely ground stevia powder, used as a zero-calorie natural sweetener.", category: "Herbs", image: prodSteviaWholePowder },
            { id: "h2", name: "Amla (Indian Gooseberry) – Whole & Powder", desc: "Whole dried amla and finely milled amla powder, rich in Vitamin C, processed under hygienic export conditions.", category: "Herbs", image: prodAmlaWholePowder },
            { id: "h3", name: "Mint Leaves – Whole & Powder", desc: "Aromatic dried mint leaves available in dried leaf form and powdered form for culinary and medicinal use.", category: "Herbs", image: prodMintWholePowder },
            { id: "h4", name: "Ashwagandha", desc: "Premium adaptogen herb for stress relief and vitality.", category: "Herbs", image: prodAshwagandhaRoots },
            { id: "h5", name: "Aloe Vera", desc: "Dried aloe leaves/powder for cosmetic applications.", category: "Herbs", image: prodAloeVera },
            { id: "h6", name: "Moringa Powder", desc: "Superfood rich in vitamins and antioxidants.", category: "Herbs", image: subMoringa }
        ]
    },
    "fresh-vegetables": {
        title: "Fresh Vegetables",
        subtitle: "Farm-fresh Onions, Potatoes, Garlic, Ginger, and Green Chillies packed hygienically for export.",
        heroImage: imgVegetables,
        items: [
            { id: "f1", name: "Red Onion", desc: "Nashik's famous red onions, varying sizes (45mm+).", category: "Vegetables", image: prodOnionRedFresh },
            { id: "f2", name: "Green Chilli", desc: "Spicy G4/G5 green chillies, fresh and crisp.", category: "Vegetables", image: prodChilliGreen },
            { id: "f3", name: "Lemon", desc: "Juicy yellow/green lemons, export quality packaging.", category: "Vegetables", image: prodLemon },
            { id: "f4", name: "Drumstick", desc: "Fresh, tender drumsticks for culinary use.", category: "Vegetables", image: prodDrumstick },
            { id: "f8", name: "Tomato", desc: "Fresh, juicy red tomatoes, bright color and firm texture.", category: "Vegetables", image: prodTomatoFresh },
            { id: "f9", name: "Cucumber", desc: "Crisp, green cucumbers, perfect for salads and export.", category: "Vegetables", image: prodCucumberFresh }
        ]
    },
    "fresh-fruits": {
        title: "Fresh Fruits",
        subtitle: "Premium export-quality fruits, handpicked for sweetness and freshness.",
        heroImage: prodMango,
        items: [
            { id: "f5", name: "Banana", desc: "Cavendish bananas, spotless yellow.", category: "Fruits", image: prodBanana },
            { id: "f6", name: "Pomegranate", desc: "Bhagwa variety, deep red arils, sweet taste.", category: "Fruits", image: prodPomegranate },
            { id: "f7", name: "Mango", desc: "Seasonal Alphonso and Kesar mangoes.", category: "Fruits", image: prodMango },
            { id: "f10", name: "Watermelon", desc: "Sweet, juicy, large dark green watermelons.", category: "Fruits", image: prodWatermelonFresh },
            { id: "f11", name: "Grapes", desc: "Fresh seedless grapes, sweet and crunchy (Thompson/Sonaka).", category: "Fruits", image: prodGrapesFresh },
            { id: "f12", name: "Semi Husked Coconut", desc: "Mature, fresh coconuts with partial husk, rich water content.", category: "Fruits", image: prodCoconutSemiHusked }
        ]
    },

};
