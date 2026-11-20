import haldi from "@/assets/Cityking Haldi Powder Masala.png";
import mirchi from "@/assets/Cityking Mirchi Powder Masala.png";
import dhaniya from "@/assets/Cityking Dhaniya Powder Masala.png";
import jeera from "@/assets/Cityking Jeera Powder Masala.png";
import sabjiPng from "@/assets/Cityking Sabji Powder Masala.png";
import paneerPng from "@/assets/Cityking Kadai Paneer Powder Masala.png";
import teaBlack from "@/assets/Cityking Premium Chai Patti CTC Tea.png";
import teaGreen from "@/assets/Cityking Premium Chai Patti.png";
import teaClassic from "@/assets/Cityking Chai Patti Powder Masala.png";

// Real Product Masala Photos
import chickenImg from "@/assets/Chiken Masala.jpg";
import muttonImg from "@/assets/Mutton Masala.jpg";
import meatImg from "@/assets/Meat Masala.jpg";
import garamImg from "@/assets/Garam Masala.jpg";
import kitchenKingImg from "@/assets/Kitchen King Masala.jpg";
import kashmiriMirchImg from "@/assets/Kashmiri Mirch Masala.jpg";
import paneerImg from "@/assets/Paneer Masala.jpg";
import sabjiImg from "@/assets/Sabji Masala.jpg";

// Biryani & Fish Curry from public gallery
const biryaniImg = "/new-gallery/IMG-20261105-WA0017.jpg";
const fishCurryImg = "/new-gallery/IMG-20261105-WA0007.jpg";

export type CategoryId =
  | "everyday-spices"
  | "non-veg-masalas"
  | "blended-masalas"
  | "royal-blends"
  | "tea";

export type ProductVariant = {
  size: string;
  weightGrams?: number;
  price: number;
  mrp: number;
  isPopular?: boolean;
  type: "pouch" | "box" | "bulk" | "pack";
  approxServings?: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: CategoryId;
  categoryLabel: string;
  image: string;
  imageIsPlaceholder: boolean;
  short: string;
  description: string;
  sizes: string[];
  featured: boolean;
  status: "available" | "coming-soon";
  tag: string;
  tagColor?: string;
  rating: number;
  reviewCount: number;
  spiceLevel: 1 | 2 | 3 | 4 | 5; // 1: Mild, 5: Extra Hot
  aromaScore: number; // 1-5
  oilRetention: string;
  ingredients: string;
  shelfLife: string;
  storage: string;
  cookingTip: string;
  bestPairing: string;
  recipeSteps?: [string, string, string];
  variants: ProductVariant[];
};

export const categories: { id: CategoryId; name: string; blurb: string }[] = [
  {
    id: "everyday-spices",
    name: "Everyday Ground Spices",
    blurb: "100% pure cold-ground essential spices every Indian kitchen reaches for daily.",
  },
  {
    id: "non-veg-masalas",
    name: "Non-Veg Special Curries",
    blurb: "Rich, aromatic Mughlai & Dhaba style formulations for chicken, mutton, biryani, and fish.",
  },
  {
    id: "blended-masalas",
    name: "Blended & Veg Masalas",
    blurb: "Signature authentic masala blends for vegetables, paneer, and everyday banquets.",
  },
  {
    id: "royal-blends",
    name: "Royal & Exotic Blends",
    blurb: "Handpicked whole spice powders including Shahi Garam Masala & Kitchen King.",
  },
  {
    id: "tea",
    name: "Chai Patti & CTC Tea",
    blurb: "Premium CTC tea blends from Darjeeling and Dooars foothills for strong kadak chai.",
  },
];

export const products: Product[] = [
  // 1. CHICKEN MASALA
  {
    id: "ck-chicken-masala",
    slug: "chicken-masala",
    name: "City King Chicken Masala (Special Curry)",
    hindiName: "चिकन मसाला",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    image: chickenImg,
    imageIsPlaceholder: false,
    short: "Rich aromatic blend with toasted whole spices for juicy, restaurant-grade chicken curry.",
    description:
      "Crafted with 16 royal spices roasted to peak fragrant maturity. City King Chicken Masala gives your chicken pieces a succulent crust, thick golden gravy, and that unmistakable Mughlai fragrance. Milled at low temperatures so essential coriander, nutmeg, and clove oils never evaporate.",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "TOP SELLER",
    tagColor: "bg-red-600",
    rating: 4.95,
    reviewCount: 2150,
    spiceLevel: 4,
    aromaScore: 5,
    oilRetention: "Mace & Green Cardamom Oils Intact",
    ingredients: "Coriander, Cumin, Red Chilli, Black Pepper, Clove, Nutmeg, Cinnamon, Star Anise, Bay Leaves, Mace, Cardamom",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a cool dry place in an airtight jar",
    cookingTip: "Marinate chicken with 1 tsp City King Chicken Masala, curd, and salt for 20 mins before cooking for maximum tenderness.",
    bestPairing: "Chicken Curry, Butter Chicken, Chicken Kasha & Tandoori Gravy",
    recipeSteps: [
      "Brown sliced onions and ginger-garlic paste in hot mustard oil.",
      "Add 2 tbsp City King Chicken Masala with tomato puree and saute until oil separates.",
      "Add chicken pieces, sear for 5 mins, add warm water and simmer to rich perfection.",
    ],
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 34, mrp: 42, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 65, mrp: 80, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 125, mrp: 155, type: "box", approxServings: 56 },
      { size: "500g Value Pack", weightGrams: 500, price: 290, mrp: 350, type: "pack", approxServings: 140 },
    ],
  },

  // 2. MUTTON MASALA
  {
    id: "ck-mutton-masala",
    slug: "mutton-masala",
    name: "City King Mutton Masala (Desi Ghost Blend)",
    hindiName: "मटन मसाला",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    image: muttonImg,
    imageIsPlaceholder: false,
    short: "Robust, slow-cooked spice formulation that tenderizes meat and delivers rich rogany gravy.",
    description:
      "Formulated for rich meats that demand bold heat and deep warmth. Features stone-crushed black cardamom, sweet cloves, dried ginger, and long-pepper notes that cut through the richness of mutton and yield velvety gravy with gleaming rogan.",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "RICH & BOLD",
    tagColor: "bg-amber-800",
    rating: 4.9,
    reviewCount: 1680,
    spiceLevel: 4,
    aromaScore: 5,
    oilRetention: "Heavy Black Cardamom & Clove Volatiles",
    ingredients: "Black Cardamom, Cumin, Black Pepper, Dry Ginger, Mace, Cloves, Cinnamon, Coriander, Garlic, Mustard",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep in a dark airtight container away from steam",
    cookingTip: "Slow-roast (bhuna) the mutton with this masala for 15 minutes before pressure cooking to seal juices inside.",
    bestPairing: "Mutton Kasha, Kosha Mangsho, Rogan Josh & Meat Pulao",
    recipeSteps: [
      "Sear marinated mutton in hot mustard oil with whole bay leaves.",
      "Stir in City King Mutton Masala dissolved in a splash of warm water so spices never burn.",
      "Slow-cook on gentle heat until meat falls tenderly off the bone.",
    ],
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 38, mrp: 46, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 72, mrp: 88, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 138, mrp: 170, type: "box", approxServings: 56 },
      { size: "500g Value Pack", weightGrams: 500, price: 320, mrp: 390, type: "pack", approxServings: 140 },
    ],
  },

  // 3. BIRYANI MASALA
  {
    id: "ck-biryani-masala",
    slug: "biryani-masala",
    name: "City King Royal Dum Biryani Masala",
    hindiName: "दम बिरयानी मसाला",
    category: "non-veg-masalas",
    categoryLabel: "Royal Blends",
    image: biryaniImg,
    imageIsPlaceholder: false,
    short: "Exotic Nizami & Kolkata Dum Biryani spice mix with floral aromatic whole spices.",
    description:
      "The master secret behind authentic Dum Biryani that fills the entire neighborhood with fragrance. Blended with stone-flower, green cardamom, mace, nutmeg, and shahi jeera to impart sweet warmth without muddying the rice grains.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "ROYAL AROMA",
    tagColor: "bg-purple-700",
    rating: 4.92,
    reviewCount: 1840,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Kewra & Star Anise Floral Volatiles Preserved",
    ingredients: "Green Cardamom, Mace, Nutmeg, Star Anise, Shahi Jeera, Cloves, Cinnamon, Fennel, Rose Petals, Black Pepper",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep in a cool dry cabinet",
    cookingTip: "Layer between hot cooked basmati rice and marinated meat with saffron milk, then seal pot with dough for dum.",
    bestPairing: "Chicken Dum Biryani, Mutton Biryani, Veg Pulao & Awadhi Dum Rice",
    recipeSteps: [
      "Marinate meat/veg with 1 tbsp Biryani Masala, fried onions (barista) and ghee.",
      "Par-boil long-grain Basmati rice with whole spices until 70% done.",
      "Layer rice over meat, sprinkle extra Biryani Masala on top, and dum-cook for 25 mins.",
    ],
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 40, mrp: 50, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 78, mrp: 95, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 150, mrp: 185, type: "box", approxServings: 56 },
    ],
  },

  // 4. MEAT MASALA
  {
    id: "ck-meat-masala",
    slug: "meat-masala",
    name: "City King Meat Mix Masala (Tari Special)",
    hindiName: "मीट मसाला",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    image: meatImg,
    imageIsPlaceholder: false,
    short: "Authentic highway dhaba style gravy mix for all non-veg mutton and meat preparations.",
    description:
      "A punchy, well-balanced blend designed for hearty everyday meat gravies. Blends coarse coriander, hot chillies, toasted cumin, and pungent black pepper to produce rich, bubbling, deep-red sauce with homestyle warmth.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "DHABA STYLE",
    tagColor: "bg-amber-900",
    rating: 4.88,
    reviewCount: 1420,
    spiceLevel: 4,
    aromaScore: 4,
    oilRetention: "Robust Coriander-Cumin-Pepper Complex",
    ingredients: "Coriander, Cumin, Red Chilli, Black Pepper, Fenugreek, Clove, Cinnamon, Dry Mango, Asafoetida, Cardamom",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight canister away from sunlight",
    cookingTip: "Roast onions until deep brown before adding meat masala to get that signature highway dhaba dark gravy.",
    bestPairing: "Meat Curry, Keema Matar, Liver Fry & Spicy Stew",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 36, mrp: 44, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 68, mrp: 84, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 130, mrp: 160, type: "box", approxServings: 56 },
    ],
  },

  // 5. FISH CURRY MASALA
  {
    id: "ck-fish-curry",
    slug: "fish-curry-masala",
    name: "City King Fish Curry Masala (Macher Jhol)",
    hindiName: "फिश करी मसाला",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    image: fishCurryImg,
    imageIsPlaceholder: false,
    short: "Signature North Bengal & Bengali Macher Jhol blend with yellow mustard and cooling cumin.",
    description:
      "Crafted specifically for freshwater Katla, Rohu, and river fish preparations popular across Bengal, Bihar, and Assam. Balanced with mustard seeds, cumin, fenugreek, and mild turmeric so the natural sweet flavor of the fish is enhanced, never overpowered.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "BENGAL FAVORITE",
    tagColor: "bg-cyan-700",
    rating: 4.89,
    reviewCount: 1290,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Yellow Mustard & Fennel Botanical Oils",
    ingredients: "Yellow Mustard, Cumin, Coriander, Turmeric, Dry Red Chilli, Fenugreek, Fennel Seeds, Black Mustard",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a dry cool cabinet",
    cookingTip: "Lightly fry marinated fish pieces in mustard oil first, then cook in the gravy made with City King Fish Masala.",
    bestPairing: "Rohu Curry, Katla Kalia, Shorshe Maach & Fish Fry",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 34, mrp: 42, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 65, mrp: 80, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 124, mrp: 150, type: "box", approxServings: 56 },
    ],
  },

  // 6. SHAHI GARAM MASALA
  {
    id: "ck-garam-masala",
    slug: "garam-masala",
    name: "City King Shahi Garam Masala (Whole Spices)",
    hindiName: "गरम मसाला",
    category: "royal-blends",
    categoryLabel: "Royal Blends",
    image: garamImg,
    imageIsPlaceholder: false,
    short: "A pinnacle royal finishing blend that awakens curries and dals with just half a teaspoon.",
    description:
      "A masterpiece formulation of 15 royal spices including green cardamom, stone flower, cloves, cinnamon quills, and nutmeg. Add at the final 60 seconds of cooking to infuse your dishes with an irresistible festive aroma.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "FINISHING SPICE",
    tagColor: "bg-orange-800",
    rating: 4.96,
    reviewCount: 2410,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Pure Cardamom, Clove & Cinnamon Volatile Seal",
    ingredients: "Green Cardamom, Black Cardamom, Cloves, Cinnamon, Cumin, Coriander, Black Pepper, Mace, Nutmeg, Bay Leaf",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight glass jar away from moisture and direct light",
    cookingTip: "Always sprinkle 1/2 tsp at the very end of cooking, cover the pot with a tight lid for 2 minutes to seal fragrance.",
    bestPairing: "Dal Makhani, Shahi Paneer, Biryani, Kofta & Rich Curries",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 42, mrp: 52, type: "box", approxServings: 25 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 80, mrp: 98, type: "pouch", approxServings: 50 },
      { size: "200g Box Pack", weightGrams: 200, price: 155, mrp: 190, type: "box", approxServings: 100 },
    ],
  },

  // 7. KITCHEN KING MASALA
  {
    id: "ck-kitchen-king",
    slug: "kitchen-king-masala",
    name: "City King Kitchen King Masala (All-in-One)",
    hindiName: "किचन किंग मसाला",
    category: "royal-blends",
    categoryLabel: "Master Blends",
    image: kitchenKingImg,
    imageIsPlaceholder: false,
    short: "The versatile king of the kitchen that makes every vegetable, dal, and curry mouth-watering.",
    description:
      "The ultimate all-rounder blend that takes away all spice confusion. Combines warm spices with refreshing coriander and tangy amchur, transforming simple paneer dishes, mixed vegetables, or koftas into restaurant-level banquets.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "VERSATILE CHEF",
    tagColor: "bg-emerald-700",
    rating: 4.93,
    reviewCount: 1980,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Fenugreek, Mango & Turmeric Balanced Formula",
    ingredients: "Coriander, Cumin, Red Chilli, Turmeric, Black Pepper, Dry Mango, Fenugreek, Clove, Nutmeg, Ginger, Cardamom",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a cool dry cabinet",
    cookingTip: "Add directly while sauteing ginger-garlic and onions; no extra coriander or cumin powder needed!",
    bestPairing: "Matar Paneer, Mixed Veg, Aloo Gobi, Chana Masala & Malai Kofta",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 36, mrp: 44, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 68, mrp: 84, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 132, mrp: 160, type: "box", approxServings: 56 },
    ],
  },

  // 8. KASHMIRI MIRCH MASALA
  {
    id: "ck-kashmiri-mirch",
    slug: "kashmiri-mirch-masala",
    name: "City King Kashmiri Mirch Powder",
    hindiName: "कश्मीरी लाल मिर्च",
    category: "everyday-spices",
    categoryLabel: "Everyday Spices",
    image: kashmiriMirchImg,
    imageIsPlaceholder: false,
    short: "Dazzling ruby-red colour with mild, sweet warmth — zero artificial dyes guaranteed.",
    description:
      "Carefully sourced stemless Kashmiri chillies naturally cold-ground to preserve their intense red pigmentation (capsanthin) and sweet mild heat. Gives rich butter paneer, curries, and tandoori gravies a showstopping glow without scorching the tongue.",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "VIBRANT RED",
    tagColor: "bg-red-700",
    rating: 4.97,
    reviewCount: 2200,
    spiceLevel: 2,
    aromaScore: 4,
    oilRetention: "Natural Oleoresin Red Color Intact",
    ingredients: "100% Stemless Sun-Dried Kashmiri Chillies",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight jar in a cool dark pantry to protect vibrant red color",
    cookingTip: "Mix with 1 tbsp warm oil or ghee before pouring into your curry for an irresistible glossy red rogan finish.",
    bestPairing: "Butter Chicken, Paneer Butter Masala, Rogan Josh & Tandoori Tikka",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 35, mrp: 44, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 68, mrp: 82, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 130, mrp: 160, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 310, mrp: 375, type: "pack", approxServings: 200 },
    ],
  },

  // 9. PANEER MASALA
  {
    id: "ck-paneer-masala",
    slug: "paneer-masala",
    name: "City King Kadai Paneer Masala (Royal Shahi)",
    hindiName: "पनीर मसाला",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    image: paneerImg,
    imageIsPlaceholder: false,
    short: "Rich, fragrant Mughlai & Kadai spice blend for velvety restaurant-style paneer gravies.",
    description:
      "Formulated with whole crushed coriander seeds, Kashmiri chili, mace, green cardamom, and roasted fenugreek leaves (kasoori methi). Gives paneer cubes a luscious, aromatic coat that rivals famous Dhabas and grand banquets.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "ROYAL SPICE",
    tagColor: "bg-amber-600",
    rating: 4.91,
    reviewCount: 1720,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Mace, Cardamom & Fenugreek Volatiles Sealed",
    ingredients: "Coriander, Cumin, Kashmiri Mirch, Cinnamon, Clove, Black Cardamom, Kasuri Methi, Mace, Star Anise",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a sealed pouch or spice jar",
    cookingTip: "Dissolve 1 tablespoon in 2 tablespoons of warm milk or whisked curd before folding into your paneer gravy.",
    bestPairing: "Kadai Paneer, Shahi Paneer, Paneer Lababdar & Veg Kofta",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 35, mrp: 44, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 68, mrp: 82, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 128, mrp: 155, type: "box", approxServings: 56 },
    ],
  },

  // 10. SABJI MASALA
  {
    id: "ck-sabji-masala",
    slug: "sabji-masala",
    name: "City King Sabji Masala (Master Blend)",
    hindiName: "सब्ज़ी मसाला",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    image: sabjiImg,
    imageIsPlaceholder: false,
    short: "Complete all-in-one kitchen spice blend for homestyle dry & gravy seasonal vegetables.",
    description:
      "A golden master formulation of 14 roasted spices in exact harmony. Removes the guesswork from daily cooking — simply saute onions and tomatoes, add a spoonful of City King Sabji Masala, and watch ordinary aloo gobi, bhindi, or mixed veg turn into restaurant-grade delights.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "DAILY HERO",
    tagColor: "bg-emerald-600",
    rating: 4.9,
    reviewCount: 1890,
    spiceLevel: 2,
    aromaScore: 4,
    oilRetention: "Toasted Coriander & Amchur Essence Preserved",
    ingredients: "Coriander, Cumin, Turmeric, Dry Mango, Black Pepper, Clove, Nutmeg, Cardamom, Dry Ginger, Bay Leaves",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a dry cool cabinet",
    cookingTip: "Add towards the middle of frying your gravy, allowing the whole spices to caramelize without scorching.",
    bestPairing: "Aloo Gobi, Bhindi Fry, Parwal Gravy, Mixed Veg & Dal Fry",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 32, mrp: 40, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 60, mrp: 74, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 115, mrp: 140, type: "box", approxServings: 56 },
    ],
  },

  // 11. TURMERIC (HALDI)
  {
    id: "ck-haldi",
    slug: "turmeric-haldi-powder",
    name: "City King Turmeric (Haldi) Powder",
    hindiName: "हल्दी पाउडर",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    image: haldi,
    imageIsPlaceholder: false,
    short: "Warm golden colour and pure curcumin for everyday dals, sabzis and curries.",
    description:
      "City King Haldi Powder brings the familiar golden glow and natural earthy warmth that Indian cooking begins with. Milled at low temperatures to lock in medicinal curcumin.",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "BESTSELLER",
    tagColor: "bg-amber-500",
    rating: 4.96,
    reviewCount: 2850,
    spiceLevel: 1,
    aromaScore: 4,
    oilRetention: "Therapeutic Curcumin (>3%) Fully Preserved",
    ingredients: "100% Selected Sun-Dried Indian Turmeric Rhizomes",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a cool, dry and airtight container away from direct sunlight",
    cookingTip: "Bloom in hot mustard oil or ghee for 15 seconds to release natural medicinal curcumin and vibrant color.",
    bestPairing: "Daily Dal, Comfort Khichdi, Golden Haldi Milk & Veg Curries",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 22, mrp: 28, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 42, mrp: 52, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 80, mrp: 98, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 185, mrp: 225, type: "pack", approxServings: 200 },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 350, mrp: 420, type: "bulk", approxServings: 400 },
    ],
  },

  // 12. CHILLI (MIRCHI)
  {
    id: "ck-mirchi",
    slug: "mirchi-chilli-powder",
    name: "City King Mirchi (Chilli) Powder",
    hindiName: "मिर्ची पाउडर",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    image: mirchi,
    imageIsPlaceholder: false,
    short: "Vibrant natural red colour and balanced fiery heat without artificial dyes.",
    description:
      "City King Mirchi Powder adds deep red colour and clean, robust heat that elevates curries, gravies, chutneys, and tadkas. Made from selected stemless sun-dried red chillies.",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "PURE HEAT",
    tagColor: "bg-red-600",
    rating: 4.93,
    reviewCount: 2310,
    spiceLevel: 5,
    aromaScore: 4,
    oilRetention: "Capsaicin & Natural Red Pigment Locked",
    ingredients: "100% Stemless Sun-Dried Red Chillies (No Additives)",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep in an airtight jar in a cool, dark kitchen shelf",
    cookingTip: "Mix with a teaspoon of water before adding to hot tadka oil so the chili never burns.",
    bestPairing: "Curries, Gravies, Spicy Tadkas, Chutneys & Pickles",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 26, mrp: 32, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 50, mrp: 60, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 96, mrp: 118, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 225, mrp: 270, type: "pack", approxServings: 200 },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 430, mrp: 510, type: "bulk", approxServings: 400 },
    ],
  },

  // 13. CORIANDER (DHANIYA)
  {
    id: "ck-dhaniya",
    slug: "dhaniya-coriander-powder",
    name: "City King Dhaniya (Coriander) Powder",
    hindiName: "धनिया पाउडर",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    image: dhaniya,
    imageIsPlaceholder: false,
    short: "Fresh, mellow aroma and body-building texture for curries and gravies.",
    description:
      "Finely ground from plump coriander seeds with a fresh, botanical aroma. City King Dhaniya Powder builds rich body in curries and balances sharper spices.",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "FRESH BOTANICAL",
    tagColor: "bg-emerald-600",
    rating: 4.88,
    reviewCount: 1450,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Linalool & Essential Terpenes Retained",
    ingredients: "100% Whole Roasted Plump Coriander Seeds",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep tightly closed in an opaque container away from heat",
    cookingTip: "Add alongside ginger-garlic paste to create a hearty base that thickens your curry naturally.",
    bestPairing: "All Everyday Veg & Meat Gravies, Sambar & Rasam",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 22, mrp: 28, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 42, mrp: 52, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 80, mrp: 98, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 185, mrp: 225, type: "pack", approxServings: 200 },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 350, mrp: 420, type: "bulk", approxServings: 400 },
    ],
  },

  // 14. JEERA (CUMIN) POWDER
  {
    id: "ck-jeera",
    slug: "jeera-cumin-powder",
    name: "City King Jeera (Cumin) Powder",
    hindiName: "जीरा पाउडर",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    image: jeera,
    imageIsPlaceholder: false,
    short: "Earthy, nutty roasted cumin aroma for raitas, chaat, and daily sabzis.",
    description:
      "City King Jeera Powder carries the warm, roasted aroma of selected cumin seeds — an essential finishing touch for raita, salads, chaat, and daily Indian gravies.",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "ROASTED NOTE",
    tagColor: "bg-amber-700",
    rating: 4.89,
    reviewCount: 960,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Cuminaldehyde Essential Oils Locked",
    ingredients: "100% Pure Cleaned Cumin Seeds (Cuminum Cyminum)",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight glass or stainless steel jar away from moisture",
    cookingTip: "Sprinkle raw over boondi raita, buttermilk, or chaat for an instant digestive boost.",
    bestPairing: "Boondi Raita, Dal Tadka, Dahi Vada, Jeera Aloo & Chaat",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 36, mrp: 44, type: "box", isPopular: true, approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 68, mrp: 82, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 130, mrp: 160, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 310, mrp: 375, type: "pack", approxServings: 200 },
    ],
  },

  // 15. CHANA / CHHOLE MASALA
  {
    id: "ck-chana-masala",
    slug: "chana-chhole-masala",
    name: "City King Amritsari Chana Masala",
    hindiName: "चना / छोले मसाला",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    image: sabjiPng,
    imageIsPlaceholder: false,
    short: "Dark, tangy and robust Punjabi Amritsari style blend with pomegranate and dry mango.",
    description:
      "Crafted for authentic dark Amritsari Chhole and spicy desi chana. Infused with dried anardana, amchur, black salt, and roasted cumin to give chickpea gravy its traditional tangy, spiced depth.",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: false,
    status: "available",
    tag: "TANGY & BOLD",
    tagColor: "bg-amber-800",
    rating: 4.88,
    reviewCount: 920,
    spiceLevel: 3,
    aromaScore: 4,
    oilRetention: "Anardana & Roasted Cumin Complex",
    ingredients: "Pomegranate Seeds (Anardana), Dry Mango, Coriander, Cumin, Black Salt, Black Pepper, Ginger, Cardamom",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight container in cool dry place",
    cookingTip: "Simmer boiled chana with this masala and a touch of tea-decoction for that traditional deep dark Amritsari color.",
    bestPairing: "Bhature Chana, Desi Chana Tari, Kulcha Chhole & Poori Aloo",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", weightGrams: 50, price: 34, mrp: 42, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 65, mrp: 80, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 125, mrp: 155, type: "box", approxServings: 56 },
    ],
  },

  // 16. CHATPATI CHAAT MASALA
  {
    id: "ck-chaat-masala",
    slug: "chaat-masala",
    name: "City King Chatpata Chaat Masala",
    hindiName: "चाट मसाला",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    image: paneerPng,
    imageIsPlaceholder: false,
    short: "Zesty, lip-smacking sprinkle for fruit chaat, dahi vada, pakoras and snacks.",
    description:
      "A tantalizing sprinkle crafted with rock salt, dried green mango, asafoetida, mint, and toasted cumin. Instant magic on evening snacks, salads, sliced fruits, and street chaat.",
    sizes: ["5g", "10g", "50g", "100g"],
    featured: false,
    status: "available",
    tag: "ZESTY SPRINKLE",
    tagColor: "bg-yellow-600",
    rating: 4.92,
    reviewCount: 1120,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Rock Salt & Mint Essential Aromatics",
    ingredients: "Dry Mango (Amchur), Rock Salt (Sendha Namak), Black Salt, Cumin, Mint, Asafoetida, Ginger, Black Pepper",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep away from moisture in a shaker jar",
    cookingTip: "Sprinkle generously on fresh cut guava, apples, roasted paneer or aloo tikki right before serving.",
    bestPairing: "Fruit Chaat, Dahi Vada, French Fries, Pakoras & Golgappa Pani",
    variants: [
      { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 32, mrp: 40, type: "box", approxServings: 25 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 60, mrp: 74, type: "pouch", approxServings: 50 },
    ],
  },

  // 17. CTC TEA ROYAL BLACK
  {
    id: "ck-ctc-black",
    slug: "premium-ctc-tea-black",
    name: "City King Premium CTC Tea (Royal Black)",
    hindiName: "प्रीमियम सीटीसी चाय (रॉयल ब्लैक)",
    category: "tea",
    categoryLabel: "Tea & Chai Patti",
    image: teaBlack,
    imageIsPlaceholder: false,
    short: "Strong, brisk liquor with rich aroma for the energising morning cup.",
    description:
      "Crafted from premium Darjeeling and Dooars foothills garden tea leaves. City King Premium CTC Tea delivers brisk liquor, deep amber infusion, and unbeatable morning freshness.",
    sizes: ["100g", "250g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "KADAK CHAI",
    tagColor: "bg-stone-900",
    rating: 4.95,
    reviewCount: 2900,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Malty Dooars & Darjeeling Liquor Strength",
    ingredients: "Selected High-Grown CTC Black Tea",
    shelfLife: "18 Months from Manufacturing Date",
    storage: "Store in a moisture-free tin away from strong spices",
    cookingTip: "Boil water with crushed fresh ginger and cardamom, add tea grains and simmer 2 minutes before pouring milk.",
    bestPairing: "Morning Ginger Chai, Elaichi Milk Tea, Malai Chai & Evening Samosas",
    variants: [
      { size: "100g Trial Pack", weightGrams: 100, price: 35, mrp: 44, type: "pack", approxServings: 50 },
      { size: "250g Fresh Pouch", weightGrams: 250, price: 85, mrp: 105, type: "pouch", isPopular: true, approxServings: 125 },
      { size: "500g Value Pack", weightGrams: 500, price: 165, mrp: 205, type: "pack", approxServings: 250 },
      { size: "1kg Family Bulk", weightGrams: 1000, price: 320, mrp: 390, type: "bulk", approxServings: 500 },
    ],
  },

  // 18. CTC TEA GOLD
  {
    id: "ck-ctc-green",
    slug: "premium-chai-patti-gold",
    name: "City King Gold Premium Chai Patti",
    hindiName: "प्रीमियम गोल्ड चाय पत्ती",
    category: "tea",
    categoryLabel: "Tea & Chai Patti",
    image: teaGreen,
    imageIsPlaceholder: false,
    short: "Signature gold blend offering malty taste and perfect milk balance.",
    description:
      "Selected CTC tea granules providing strong color, aromatic briskness, and full-bodied cup flavor for true Indian chai lovers.",
    sizes: ["100g", "250g", "500g", "1kg Bulk"],
    featured: false,
    status: "available",
    tag: "GOLDEN AROMA",
    tagColor: "bg-emerald-800",
    rating: 4.88,
    reviewCount: 1100,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Curated Dual-Grade Blend • Invigorating",
    ingredients: "Pure Indian CTC and Long Leaf Tea Granules",
    shelfLife: "18 Months from Manufacturing Date",
    storage: "Keep in a dark, airtight container",
    cookingTip: "Simmer on low flame with milk for 3-4 minutes to achieve full-bodied creamy texture.",
    bestPairing: "Evening Chai, Cardamom Milk Tea & Biscuits",
    variants: [
      { size: "100g Trial Pack", weightGrams: 100, price: 38, mrp: 48, type: "pack", approxServings: 50 },
      { size: "250g Fresh Pouch", weightGrams: 250, price: 92, mrp: 115, type: "pouch", isPopular: true, approxServings: 125 },
      { size: "500g Value Pack", weightGrams: 500, price: 180, mrp: 220, type: "pack", approxServings: 250 },
      { size: "1kg Family Bulk", weightGrams: 1000, price: 350, mrp: 420, type: "bulk", approxServings: 500 },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryName(id: CategoryId) {
  return categories.find((c) => c.id === id)?.name ?? "";
}

export type DishPairing = {
  id: string;
  name: string;
  nameHindi: string;
  icon: string;
  tagline: string;
  recommendedSlugs: string[];
  cookingTip: string;
  aromaNote: string;
};

export const dishPairings: DishPairing[] = [
  {
    id: "everyday-sabji",
    name: "Everyday Sabzi & Dry Veg",
    nameHindi: "सब्ज़ी और सूखी तरकारी",
    icon: "🥘",
    tagline: "A balanced, fragrant everyday blend that elevates simple vegetables into a feast.",
    recommendedSlugs: ["sabji-masala", "dhaniya-coriander-powder", "turmeric-haldi-powder"],
    cookingTip: "Add City King Sabji Masala right after frying onions and tomatoes for deep caramelised flavor.",
    aromaNote: "Warm, earthy & gently spiced aroma with toasted coriander.",
  },
  {
    id: "chicken-curry",
    name: "Juicy Chicken & Non-Veg Curry",
    nameHindi: "शाही चिकन और नॉन-वेज करी",
    icon: "🍗",
    tagline: "Restaurant-style rich golden Mughlai gravy and mouth-watering tender meat.",
    recommendedSlugs: ["chicken-masala", "kashmiri-mirch-masala", "turmeric-haldi-powder"],
    cookingTip: "Marinate chicken in curd and 1 tsp Chicken Masala for 20 mins before cooking.",
    aromaNote: "Toasted cardamom, clove and mace aroma.",
  },
  {
    id: "paneer-gravy",
    name: "Shahi & Kadhai Paneer",
    nameHindi: "शाही और कड़ाही पनीर",
    icon: "🍛",
    tagline: "Rich, aromatic restaurant-style velvety paneer gravies cooked at home.",
    recommendedSlugs: ["paneer-masala", "kashmiri-mirch-masala", "turmeric-haldi-powder"],
    cookingTip: "Dissolve a spoonful of Paneer Masala in warm milk or curd before adding to the gravy.",
    aromaNote: "Rich royal aroma with exotic spices and natural warmth.",
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka & Comfort Dals",
    nameHindi: "दाल तड़का और कढ़ी",
    icon: "🍲",
    tagline: "The golden warmth and aromatic cumin tempering essential to every Indian meal.",
    recommendedSlugs: ["turmeric-haldi-powder", "jeera-cumin-powder", "mirchi-chilli-powder"],
    cookingTip: "Temper City King Jeera Powder in hot ghee with garlic and whole dried chillies for the ultimate tadka.",
    aromaNote: "Bright golden colour with robust roasted cumin notes.",
  },
  {
    id: "kadak-chai",
    name: "Morning Kadak CTC Chai",
    nameHindi: "कड़क सुबह की चाय",
    icon: "☕",
    tagline: "The strong, malty and invigorating cup of CTC tea to start every morning.",
    recommendedSlugs: ["premium-ctc-tea-black"],
    cookingTip: "Boil with crushed ginger, cardamom, and fresh milk for a rich Siliguri tea experience.",
    aromaNote: "Rich malty aroma with brisk liquor and bright amber infusion.",
  },
];
