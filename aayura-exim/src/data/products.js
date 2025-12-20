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
import prodDehydratedGarlicGranules from '../assets/images/prod_dehydrated_garlic_granules.png';
import prodChickpeasKabuli from '../assets/images/prod_chickpeas_kabuli.png'; // New Import
import prodMungDal from '../assets/images/prod_mung_dal.png'; // New Import
import prodToorDal from '../assets/images/prod_toor_dal.png'; // New Import
import prodSteviaLeaves from '../assets/images/prod_stevia_leaves.png'; // New Import
import prodAmlaFresh from '../assets/images/prod_amla_fresh.png'; // New Import
import prodMintLeaves from '../assets/images/prod_mint_leaves.png'; // New Import
import prodAshwagandhaRoots from '../assets/images/prod_ashwagandha_roots.png'; // New Import
import prodAloeVera from '../assets/images/prod_aloe_vera.png'; // New Import
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
            { id: "s1", name: "Cumin Seeds (Jeera)", desc: "High essential oil content, intense aroma, machine cleaned.", category: "Whole Spices", image: prodCuminSeeds },
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
            { id: "d5", name: "Dehydrated Garlic Granules", desc: "Strong flavor, used in seasonings and sauces.", category: "Dehydrated", image: prodDehydratedGarlicGranules }
        ]
    },
    "herbal-products": {
        title: "Herbal & Medicinal Products",
        subtitle: "Nature's best healing herbs processed for pharmaceutical and cosmetic use.",
        heroImage: imgHerbal,
        items: [
            { id: "h1", name: "Stevia Leaves", desc: "Natural sweetener, zero calorie, high purity.", category: "Herbs", image: prodSteviaLeaves },
            { id: "h2", name: "Amla (Indian Gooseberry)", desc: "Dried amla, rich in Vitamin C, for immunity and hair care.", category: "Herbs", image: prodAmlaFresh },
            { id: "h3", name: "Mint Leaves", desc: "Aromatic dried mint for culinary and medicinal use.", category: "Herbs", image: prodMintLeaves },
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
    "rice-beans": {
        title: "Rice & Pulses",
        subtitle: "The finest Indian grains, sorted and polished for global kitchens.",
        heroImage: imgRice,
        items: [
            { id: "r1", name: "1121 Basmati Rice", desc: "Extra long grain, aromatic, best for biryani.", category: "Basmati Rice", image: defaultImages.rice },
            { id: "r2", name: "1509 Basmati Rice", desc: "Long grain, cost-effective basmati variety.", category: "Basmati Rice", image: defaultImages.rice },
            { id: "r3", name: "Sona Masoori Rice", desc: "Medium grain, lightweight and aromatic.", category: "Non-Basmati Rice", image: defaultImages.rice },
            { id: "r4", name: "IR 64 Rice", desc: "Long/Medium grain, widely used for daily consumption.", category: "Non-Basmati Rice", image: defaultImages.rice },
            { id: "p1", name: "Chick Peas (Kabuli Chana)", desc: "Large white chickpeas, high protein.", category: "Pulses", image: prodChickpeasKabuli },
            { id: "p2", name: "Mung Dal", desc: "Split green gram, cleaned and sorted.", category: "Pulses", image: prodMungDal },
            { id: "p3", name: "Toor Dal", desc: "Pigeon peas split, staple Indian lentil.", category: "Pulses", image: prodToorDal }
        ]
    }
};
