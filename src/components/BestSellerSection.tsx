import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Check,
  ChevronRight,
  Clock,
  Eye,
  Flame,
  Heart,
  Info,
  Layers,
  Leaf,
  MessageCircle,
  Minus,
  Package,
  Plus,
  RotateCcw,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Tag,
  Truck,
  Users,
  Utensils,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";

// Asset imports
import haldi from "@/assets/Cityking Haldi Powder Masala.png";
import mirchi from "@/assets/Cityking Mirchi Powder Masala.png";
import dhaniya from "@/assets/Cityking Dhaniya Powder Masala.png";
import jeera from "@/assets/Cityking Jeera Powder Masala.png";
import sabjiPng from "@/assets/Cityking Sabji Powder Masala.png";
import paneerPng from "@/assets/Cityking Kadai Paneer Powder Masala.png";
import teaBlack from "@/assets/Cityking Premium Chai Patti CTC Tea.png";
import teaGreen from "@/assets/Cityking Premium Chai Patti.png";

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

import { site, waLink } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export type BestSellerVariant = {
  size: string;
  weightGrams?: number;
  price: number;
  mrp: number;
  isPopular?: boolean;
  type: "pouch" | "box" | "bulk" | "pack";
  approxServings?: number;
};

export type BestSellerItem = {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: "everyday" | "non-veg" | "veg-blends" | "royal-tea" | "pouches";
  categoryLabel: string;
  image: string;
  altImage?: string;
  tag: string;
  tagColor?: string;
  rating: number;
  reviewCount: number;
  spiceLevel: 1 | 2 | 3 | 4 | 5; // 1: Mild, 5: Extra Hot
  aromaScore: number; // out of 5
  oilRetention: string;
  shortDesc: string;
  fullDesc: string;
  curcuminOrQuality: string;
  ingredients: string;
  shelfLife: string;
  storage: string;
  cookingTip: string;
  bestPairing: string;
  recipeSteps: [string, string, string];
  variants: BestSellerVariant[];
};

export const BEST_SELLER_PRODUCTS: BestSellerItem[] = [
  // 1. CHICKEN MASALA
  {
    id: "bs-chicken",
    slug: "chicken-masala",
    name: "City King Chicken Masala (Special Curry)",
    hindiName: "चिकन मसाला (शाही तरीदार स्वाद)",
    category: "non-veg",
    categoryLabel: "Non-Veg Blends",
    image: chickenImg,
    tag: "TOP SELLER",
    tagColor: "bg-red-600",
    rating: 4.95,
    reviewCount: 2150,
    spiceLevel: 4,
    aromaScore: 5,
    oilRetention: "Mace & Green Cardamom Oils Intact",
    shortDesc: "Rich aromatic blend with toasted whole spices for juicy, restaurant-grade chicken curry.",
    fullDesc:
      "Crafted with 16 royal spices roasted to peak fragrant maturity. City King Chicken Masala gives your chicken pieces a succulent crust, thick golden gravy, and that unmistakable Mughlai fragrance. Milled at low temperatures so essential coriander, nutmeg, and clove oils never evaporate.",
    curcuminOrQuality: "100% Whole Spices • Zero Artificial Flavors or MSG",
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
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 38, mrp: 46, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 70, mrp: 85, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 135, mrp: 165, type: "box", approxServings: 56 },
      { size: "500g Value Pack", weightGrams: 500, price: 310, mrp: 375, type: "pack", approxServings: 140 },
    ],
  },

  // 2. MUTTON MASALA
  {
    id: "bs-mutton",
    slug: "mutton-masala",
    name: "City King Mutton Masala (Desi Ghost Blend)",
    hindiName: "मटन मसाला (देसी मटन स्पेशल)",
    category: "non-veg",
    categoryLabel: "Non-Veg Blends",
    image: muttonImg,
    tag: "RICH & BOLD",
    tagColor: "bg-amber-800",
    rating: 4.9,
    reviewCount: 1680,
    spiceLevel: 4,
    aromaScore: 5,
    oilRetention: "Heavy Black Cardamom & Clove Volatiles",
    shortDesc: "Robust, slow-cooked spice formulation that tenderizes meat and delivers rich rogany gravy.",
    fullDesc:
      "Formulated for rich meats that demand bold heat and deep warmth. Features stone-crushed black cardamom, sweet cloves, dried ginger, and long-pepper notes that cut through the richness of mutton and yield velvety gravy with gleaming rogan.",
    curcuminOrQuality: "High Volatile Oil Retention • Zero Preservatives",
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
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 42, mrp: 50, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 78, mrp: 95, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 148, mrp: 180, type: "box", approxServings: 56 },
      { size: "500g Value Pack", weightGrams: 500, price: 340, mrp: 410, type: "pack", approxServings: 140 },
    ],
  },

  // 3. BIRYANI MASALA
  {
    id: "bs-biryani",
    slug: "biryani-masala",
    name: "City King Royal Dum Biryani Masala",
    hindiName: "शाही दम बिरयानी मसाला (खुलती खुशबू)",
    category: "non-veg",
    categoryLabel: "Royal Blends",
    image: biryaniImg,
    tag: "ROYAL AROMA",
    tagColor: "bg-purple-700",
    rating: 4.92,
    reviewCount: 1840,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Kewra & Star Anise Floral Volatiles Preserved",
    shortDesc: "Exotic Nizami & Kolkata Dum Biryani spice mix with floral aromatic whole spices.",
    fullDesc:
      "The master secret behind authentic Dum Biryani that fills the entire neighborhood with fragrance. Blended with stone-flower, green cardamom, mace, nutmeg, and shahi jeera to impart sweet warmth without muddying the rice grains.",
    curcuminOrQuality: "Exotic Aromatic Herbs • 100% Purity Certified",
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
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 45, mrp: 55, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 85, mrp: 105, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 160, mrp: 195, type: "box", approxServings: 56 },
    ],
  },

  // 4. MEAT MASALA
  {
    id: "bs-meat",
    slug: "meat-masala",
    name: "City King Meat Mix Masala (Tari Special)",
    hindiName: "मीट मसाला (स्पेशल तरी करी)",
    category: "non-veg",
    categoryLabel: "Non-Veg Blends",
    image: meatImg,
    tag: "DHABA STYLE",
    tagColor: "bg-amber-900",
    rating: 4.88,
    reviewCount: 1420,
    spiceLevel: 4,
    aromaScore: 4,
    oilRetention: "Robust Coriander-Cumin-Pepper Complex",
    shortDesc: "Authentic highway dhaba style gravy mix for all non-veg mutton and meat preparations.",
    fullDesc:
      "A punchy, well-balanced blend designed for hearty everyday meat gravies. Blends coarse coriander, hot chillies, toasted cumin, and pungent black pepper to produce rich, bubbling, deep-red sauce with homestyle warmth.",
    curcuminOrQuality: "No Synthetic Dyes • Cold Pulverized",
    ingredients: "Coriander, Cumin, Red Chilli, Black Pepper, Fenugreek, Clove, Cinnamon, Dry Mango, Asafoetida, Cardamom",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight canister away from sunlight",
    cookingTip: "Roast onions until deep brown before adding meat masala to get that signature highway dhaba dark gravy.",
    bestPairing: "Meat Curry, Keema Matar, Liver Fry & Spicy Stew",
    recipeSteps: [
      "Saute finely chopped onions and ginger-garlic in mustard oil till dark brown.",
      "Add City King Meat Masala along with a pinch of turmeric and stir 1 minute.",
      "Add meat and simmer until thick, rich gravy envelopes the pieces.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 40, mrp: 48, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 75, mrp: 90, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 142, mrp: 172, type: "box", approxServings: 56 },
    ],
  },

  // 5. FISH CURRY MASALA
  {
    id: "bs-fish",
    slug: "fish-curry-masala",
    name: "City King Fish Curry Masala (Macher Jhol)",
    hindiName: "फिश करी मसाला (बंगाली माछेर झोल स्वाद)",
    category: "non-veg",
    categoryLabel: "Non-Veg Blends",
    image: fishCurryImg,
    tag: "BENGAL FAVORITE",
    tagColor: "bg-cyan-700",
    rating: 4.89,
    reviewCount: 1290,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Yellow Mustard & Fennel Botanical Oils",
    shortDesc: "Signature North Bengal & Bengali Macher Jhol blend with yellow mustard and cooling cumin.",
    fullDesc:
      "Crafted specifically for freshwater Katla, Rohu, and river fish preparations popular across Bengal, Bihar, and Assam. Balanced with mustard seeds, cumin, fenugreek, and mild turmeric so the natural sweet flavor of the fish is enhanced, never overpowered.",
    curcuminOrQuality: "Single-Origin Ground Seeds • Zero Preservatives",
    ingredients: "Yellow Mustard, Cumin, Coriander, Turmeric, Dry Red Chilli, Fenugreek, Fennel Seeds, Black Mustard",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a dry cool cabinet",
    cookingTip: "Lightly fry marinated fish pieces in mustard oil first, then cook in the gravy made with City King Fish Masala.",
    bestPairing: "Rohu Curry, Katla Kalia, Shorshe Maach & Fish Fry",
    recipeSteps: [
      "Shallow-fry turmeric-salted fish in hot smoking mustard oil; set aside.",
      "Temper oil with kalonji/panch phoron, stir in City King Fish Masala paste with water.",
      "Add potatoes/cauliflower, bring to a gentle boil, return fish to gravy for 3 mins.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 36, mrp: 44, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 68, mrp: 82, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 130, mrp: 158, type: "box", approxServings: 56 },
    ],
  },

  // 6. GARAM MASALA
  {
    id: "bs-garam",
    slug: "garam-masala",
    name: "City King Shahi Garam Masala (Whole Spices)",
    hindiName: "शाही गरम मसाला (खड़ा मसाला ब्लेंड)",
    category: "veg-blends",
    categoryLabel: "Royal Blends",
    image: garamImg,
    tag: "FINISHING SPICE",
    tagColor: "bg-orange-800",
    rating: 4.96,
    reviewCount: 2410,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Pure Cardamom, Clove & Cinnamon Volatile Seal",
    shortDesc: "A pinnacle royal finishing blend that awakens curries and dals with just half a teaspoon.",
    fullDesc:
      "A masterpiece formulation of 15 royal spices including green cardamom, stone flower, cloves, cinnamon quills, and nutmeg. Add at the final 60 seconds of cooking to infuse your dishes with an irresistible festive aroma.",
    curcuminOrQuality: "Stone-Ground Whole Spices • 100% Volatiles Locked",
    ingredients: "Green Cardamom, Black Cardamom, Cloves, Cinnamon, Cumin, Coriander, Black Pepper, Mace, Nutmeg, Bay Leaf",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight glass jar away from moisture and direct light",
    cookingTip: "Always sprinkle 1/2 tsp at the very end of cooking, cover the pot with a tight lid for 2 minutes to seal fragrance.",
    bestPairing: "Dal Makhani, Shahi Paneer, Biryani, Kofta & Rich Curries",
    recipeSteps: [
      "Prepare your favorite dal or curry to completion.",
      "Just before turning off the heat, sprinkle 1/2 teaspoon of City King Garam Masala.",
      "Cover the lid tightly for 2 minutes so the warm volatile oils permeate the whole dish.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 6 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 12 },
      { size: "50g Box Pack", weightGrams: 50, price: 45, mrp: 55, type: "box", approxServings: 25 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 85, mrp: 105, type: "pouch", approxServings: 50 },
      { size: "200g Box Pack", weightGrams: 200, price: 165, mrp: 200, type: "box", approxServings: 100 },
    ],
  },

  // 7. KITCHEN KING MASALA
  {
    id: "bs-kitchen-king",
    slug: "kitchen-king-masala",
    name: "City King Kitchen King Masala (All-in-One)",
    hindiName: "किचन किंग मसाला (ऑल-इन-वन स्पेशल)",
    category: "veg-blends",
    categoryLabel: "Master Blends",
    image: kitchenKingImg,
    tag: "VERSATILE CHEF",
    tagColor: "bg-emerald-700",
    rating: 4.93,
    reviewCount: 1980,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Fenugreek, Mango & Turmeric Balanced Formula",
    shortDesc: "The versatile king of the kitchen that makes every vegetable, dal, and curry mouth-watering.",
    fullDesc:
      "The ultimate all-rounder blend that takes away all spice confusion. Combines warm spices with refreshing coriander and tangy amchur, transforming simple paneer dishes, mixed vegetables, or koftas into restaurant-level banquets.",
    curcuminOrQuality: "Harmonious 18-Spice Complex • Zero Additives",
    ingredients: "Coriander, Cumin, Red Chilli, Turmeric, Black Pepper, Dry Mango, Fenugreek, Clove, Nutmeg, Ginger, Cardamom",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a cool dry cabinet",
    cookingTip: "Add directly while sauteing ginger-garlic and onions; no extra coriander or cumin powder needed!",
    bestPairing: "Matar Paneer, Mixed Veg, Aloo Gobi, Chana Masala & Malai Kofta",
    recipeSteps: [
      "Saute cumin and chopped onions in ghee or oil until translucent.",
      "Add 1.5 tbsp City King Kitchen King Masala with tomato puree; fry 2 mins.",
      "Add vegetables or paneer with a cup of warm water, cover and simmer to perfection.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 40, mrp: 48, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 75, mrp: 90, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 145, mrp: 175, type: "box", approxServings: 56 },
    ],
  },

  // 8. KASHMIRI MIRCH MASALA
  {
    id: "bs-kashmiri-mirch",
    slug: "kashmiri-mirch-masala",
    name: "City King Kashmiri Mirch Powder",
    hindiName: "कश्मीरी लाल मिर्च (नेचुरल गहरा लाल रंग)",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: kashmiriMirchImg,
    tag: "VIBRANT RED",
    tagColor: "bg-red-700",
    rating: 4.97,
    reviewCount: 2200,
    spiceLevel: 2,
    aromaScore: 4,
    oilRetention: "Natural Oleoresin Red Color Intact",
    shortDesc: "Dazzling ruby-red colour with mild, sweet warmth — zero artificial dyes guaranteed.",
    fullDesc:
      "Carefully sourced stemless Kashmiri chillies naturally cold-ground to preserve their intense red pigmentation (capsanthin) and sweet mild heat. Gives rich butter paneer, curries, and tandoori gravies a showstopping glow without scorching the tongue.",
    curcuminOrQuality: "100% Natural Red Colour • Zero Sudan Dye or Starch",
    ingredients: "100% Stemless Sun-Dried Kashmiri Chillies",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight jar in a cool dark pantry to protect vibrant red color",
    cookingTip: "Mix with 1 tbsp warm oil or ghee before pouring into your curry for an irresistible glossy red rogan finish.",
    bestPairing: "Butter Chicken, Paneer Butter Masala, Rogan Josh & Tandoori Tikka",
    recipeSteps: [
      "Whisk 1 tbsp Kashmiri Mirch Powder with a tablespoon of lukewarm water or curd.",
      "Add to your simmering tomato gravy for pure natural red color.",
      "Finish with a spoonful of melted butter or ghee on top.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 6 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 12 },
      { size: "50g Box Pack", weightGrams: 50, price: 38, mrp: 46, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 72, mrp: 86, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 140, mrp: 170, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 330, mrp: 395, type: "pack", approxServings: 200 },
    ],
  },

  // 9. PANEER MASALA
  {
    id: "bs-paneer",
    slug: "paneer-masala",
    name: "City King Kadai Paneer Masala (Royal Shahi)",
    hindiName: "पनीर मसाला (शाही कड़ाही पनीर)",
    category: "veg-blends",
    categoryLabel: "Blended Masalas",
    image: paneerImg,
    altImage: paneerPng,
    tag: "ROYAL SPICE",
    tagColor: "bg-amber-600",
    rating: 4.91,
    reviewCount: 1720,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Mace, Cardamom & Fenugreek Volatiles Sealed",
    shortDesc: "Rich, fragrant Mughlai & Kadai spice blend for velvety restaurant-style paneer gravies.",
    fullDesc:
      "Formulated with whole crushed coriander seeds, Kashmiri chili, mace, green cardamom, and roasted fenugreek leaves (kasoori methi). Gives paneer cubes a luscious, aromatic coat that rivals famous Dhabas and grand banquets.",
    curcuminOrQuality: "With Crushed Whole Spices & Kasoori Methi • Royal Aroma",
    ingredients: "Coriander, Cumin, Kashmiri Mirch, Cinnamon, Clove, Black Cardamom, Kasuri Methi, Mace, Star Anise",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a sealed pouch or spice jar",
    cookingTip: "Dissolve 1 tablespoon in 2 tablespoons of warm milk or whisked curd before folding into your paneer gravy.",
    bestPairing: "Kadai Paneer, Shahi Paneer, Paneer Lababdar & Veg Kofta",
    recipeSteps: [
      "Saute bell peppers and onions in ghee on high flame for 2 mins (kadai style).",
      "Stir in tomato-cashew puree and 1.5 tbsp City King Paneer Masala.",
      "Toss in fresh paneer cubes and simmer 3 mins with crushed kasuri methi.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 38, mrp: 46, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 72, mrp: 85, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 138, mrp: 165, type: "box", approxServings: 56 },
    ],
  },

  // 10. SABJI MASALA
  {
    id: "bs-sabji",
    slug: "sabji-masala",
    name: "City King Sabji Masala (Master Blend)",
    hindiName: "सब्ज़ी मसाला (मास्टर ब्लेंड)",
    category: "veg-blends",
    categoryLabel: "Blended Masalas",
    image: sabjiImg,
    altImage: sabjiPng,
    tag: "DAILY HERO",
    tagColor: "bg-emerald-600",
    rating: 4.9,
    reviewCount: 1890,
    spiceLevel: 2,
    aromaScore: 4,
    oilRetention: "Toasted Coriander & Amchur Essence Preserved",
    shortDesc: "Complete all-in-one kitchen spice blend for homestyle dry & gravy seasonal vegetables.",
    fullDesc:
      "A golden master formulation of 14 roasted spices in exact harmony. Removes the guesswork from daily cooking — simply saute onions and tomatoes, add a spoonful of City King Sabji Masala, and watch ordinary aloo gobi, bhindi, or mixed veg turn into restaurant-grade delights.",
    curcuminOrQuality: "14-Spice Harmonious Recipe • No MSG or Starch",
    ingredients: "Coriander, Cumin, Turmeric, Dry Mango, Black Pepper, Clove, Nutmeg, Cardamom, Dry Ginger, Bay Leaves",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a dry cool cabinet",
    cookingTip: "Add towards the middle of frying your gravy, allowing the whole spices to caramelize without scorching.",
    bestPairing: "Aloo Gobi, Bhindi Fry, Parwal Gravy, Mixed Veg & Dal Fry",
    recipeSteps: [
      "Heat mustard oil, temper with cumin seeds and green chillies.",
      "Add vegetables and 1 tablespoon of City King Sabji Masala.",
      "Cover and slow-cook on low flame until tender and golden brown.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", weightGrams: 50, price: 35, mrp: 42, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 65, mrp: 78, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", weightGrams: 200, price: 120, mrp: 145, type: "box", approxServings: 56 },
    ],
  },

  // 11. JEERA POWDER
  {
    id: "bs-jeera",
    slug: "jeera-cumin-powder",
    name: "City King Jeera (Cumin) Powder",
    hindiName: "भुना जीरा पाउडर (पाचन व स्वाद)",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: jeera,
    tag: "ROASTED NOTE",
    tagColor: "bg-amber-700",
    rating: 4.89,
    reviewCount: 960,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Cuminaldehyde Essential Oils Locked",
    shortDesc: "Nutty, earthy roasted cumin notes for raitas, chaats, buttermilk & comfort dals.",
    fullDesc:
      "Selected cumin seeds gently dry-toasted to bring out maximum cuminaldehyde aroma, then milled into a velvety finishing spice. Elevates dahi vada, curd raita, roasted potatoes, and dal tadka.",
    curcuminOrQuality: "Slow Dry-Roasted • Intense Earthy Aroma",
    ingredients: "100% Pure Cleaned Cumin Seeds (Cuminum Cyminum)",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight glass or stainless steel jar away from moisture",
    cookingTip: "Sprinkle raw over boondi raita, buttermilk, or chaat for an instant digestive boost.",
    bestPairing: "Boondi Raita, Dal Tadka, Dahi Vada, Jeera Aloo & Chaat",
    recipeSteps: [
      "Prepare fresh curd raita with roasted cumin powder and black salt.",
      "Or temper in hot ghee with garlic for the ultimate yellow dal tadka.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 6 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", approxServings: 12 },
      { size: "50g Box Pack", weightGrams: 50, price: 42, mrp: 50, type: "box", isPopular: true, approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 78, mrp: 95, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 150, mrp: 180, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 350, mrp: 420, type: "pack", approxServings: 200 },
    ],
  },

  // 12. TURMERIC (HALDI)
  {
    id: "bs-haldi",
    slug: "turmeric-haldi-powder",
    name: "City King Turmeric (Haldi) Powder",
    hindiName: "शुद्ध हल्दी पाउडर (हाई करक्यूमिन)",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: haldi,
    tag: "BESTSELLER",
    tagColor: "bg-amber-500",
    rating: 4.96,
    reviewCount: 2850,
    spiceLevel: 1,
    aromaScore: 4,
    oilRetention: "Therapeutic Curcumin (>3%) Fully Preserved",
    shortDesc: "Rich natural curcumin, warm golden glow & pure homestyle aroma.",
    fullDesc:
      "Directly sourced and milled at low temperatures in our Siliguri factory. City King Haldi Powder preserves its natural essential volatile oils and therapeutic curcumin without starch fillers or artificial yellow dyes. Perfect for daily dals, subzis, and golden milk.",
    curcuminOrQuality: "High Curcumin Content (>3%) • Zero Lead Chromate",
    ingredients: "100% Selected Sun-Dried Indian Turmeric Rhizomes",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a cool, dry and airtight container away from direct sunlight",
    cookingTip: "Bloom in hot mustard oil or ghee for 15 seconds to release natural medicinal curcumin and vibrant color.",
    bestPairing: "Daily Dal, Comfort Khichdi, Golden Haldi Milk & Veg Curries",
    recipeSteps: [
      "Add 1/2 tsp Haldi to boiling lentils for bright golden broth.",
      "Bloom in tadka ghee along with mustard seeds and curry leaves.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 8 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 16 },
      { size: "50g Box Pack", weightGrams: 50, price: 28, mrp: 35, type: "box", approxServings: 25 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 50, mrp: 60, type: "pouch", approxServings: 50 },
      { size: "200g Box Pack", weightGrams: 200, price: 95, mrp: 115, type: "box", approxServings: 100 },
      { size: "500g Value Pack", weightGrams: 500, price: 220, mrp: 260, type: "pack", approxServings: 250 },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 410, mrp: 490, type: "bulk", approxServings: 500 },
    ],
  },

  // 13. CHILLI (MIRCHI)
  {
    id: "bs-mirchi",
    slug: "mirchi-chilli-powder",
    name: "City King Mirchi (Chilli) Powder",
    hindiName: "तीखी लाल मिर्च पाउडर (प्योर तीखापन)",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: mirchi,
    tag: "PURE HEAT",
    tagColor: "bg-red-600",
    rating: 4.93,
    reviewCount: 2310,
    spiceLevel: 5,
    aromaScore: 4,
    oilRetention: "Capsaicin & Natural Red Pigment Locked",
    shortDesc: "Vibrant natural red colour & balanced fiery heat without added dyes.",
    fullDesc:
      "Crafted from stemless, whole sun-dried red chillies pulverized at cold speeds to retain capsaicin and pungent aroma. Delivers natural deep red gravy color without Sudan dyes or artificial food coloring.",
    curcuminOrQuality: "100% Stemless Red Chillies • Natural Capsaicin Heat",
    ingredients: "100% Stemless Sun-Dried Red Chillies (No Additives)",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep in an airtight jar in a cool, dark kitchen shelf",
    cookingTip: "Mix with a teaspoon of water before adding to hot tadka oil so the chili never burns.",
    bestPairing: "Curries, Gravies, Spicy Tadkas, Chutneys & Pickles",
    recipeSteps: [
      "Saute in hot oil with onions to infuse authentic homestyle heat.",
      "Add to marinades for crispy fried fish or chicken pakoras.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 8 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 16 },
      { size: "50g Box Pack", weightGrams: 50, price: 30, mrp: 38, type: "box", approxServings: 25 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 55, mrp: 68, type: "pouch", approxServings: 50 },
      { size: "200g Box Pack", weightGrams: 200, price: 105, mrp: 125, type: "box", approxServings: 100 },
      { size: "500g Value Pack", weightGrams: 500, price: 245, mrp: 290, type: "pack", approxServings: 250 },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 460, mrp: 540, type: "bulk", approxServings: 500 },
    ],
  },

  // 14. CORIANDER (DHANIYA)
  {
    id: "bs-dhaniya",
    slug: "dhaniya-coriander-powder",
    name: "City King Dhaniya (Coriander) Powder",
    hindiName: "सुगंधित धनिया पाउडर (ताजा महक)",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: dhaniya,
    tag: "FRESH BOTANICAL",
    tagColor: "bg-emerald-600",
    rating: 4.88,
    reviewCount: 1450,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Linalool & Essential Terpenes Retained",
    shortDesc: "Fresh citrusy botanical aroma & rich body-building texture for curries.",
    fullDesc:
      "Ground from green-tinted, essential oil-rich coriander seeds. City King Dhaniya Powder builds thickness and depth in curries while keeping the palate cool and refreshing.",
    curcuminOrQuality: "High Volatile Oil Retention • Zero Starch Husk Adulteration",
    ingredients: "100% Whole Roasted Plump Coriander Seeds",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep tightly closed in an opaque container away from heat",
    cookingTip: "Add alongside ginger-garlic paste to create a hearty base that thickens your curry naturally.",
    bestPairing: "All Everyday Veg & Meat Gravies, Sambar & Rasam",
    recipeSteps: [
      "Combine 2 tbsp Dhaniya Powder with water into a slurry.",
      "Pour into hot fried onions to build a luscious, hearty gravy base.",
    ],
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch", approxServings: 6 },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 12 },
      { size: "50g Box Pack", weightGrams: 50, price: 26, mrp: 32, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 48, mrp: 58, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", weightGrams: 200, price: 90, mrp: 110, type: "box", approxServings: 80 },
      { size: "500g Value Pack", weightGrams: 500, price: 210, mrp: 250, type: "pack", approxServings: 200 },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 390, mrp: 460, type: "bulk", approxServings: 400 },
    ],
  },

  // 15. PREMIUM CTC TEA
  {
    id: "bs-tea-black",
    slug: "premium-ctc-tea-black",
    name: "City King Premium CTC Tea (Royal Black)",
    hindiName: "प्रीमियम सीटीसी चाय (रॉयल ब्लैक)",
    category: "royal-tea",
    categoryLabel: "Tea & Chai Patti",
    image: teaBlack,
    altImage: teaGreen,
    tag: "KADAK CHAI",
    tagColor: "bg-stone-900",
    rating: 4.95,
    reviewCount: 2900,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Malty Dooars & Darjeeling Liquor Strength",
    shortDesc: "Strong brisk liquor & rich amber color from Darjeeling & Dooars foothills.",
    fullDesc:
      "Harvested from the lush foothills of Darjeeling and Dooars. Specially curated CTC grain sizes ensure instantaneous colour release, brisk malty liquor, and a bold punch that cuts through rich buffalo milk.",
    curcuminOrQuality: "100% North Bengal Foothills CTC Tea Granules",
    ingredients: "Selected High-Grown CTC Black Tea",
    shelfLife: "18 Months from Manufacturing Date",
    storage: "Store in a moisture-free tin away from strong spices",
    cookingTip: "Boil water with crushed fresh ginger and cardamom, add tea grains and simmer 2 minutes before pouring milk.",
    bestPairing: "Morning Ginger Chai, Elaichi Milk Tea, Malai Chai & Evening Samosas",
    recipeSteps: [
      "Bring 1 cup water to rolling boil with crushed ginger and cardamom.",
      "Add 1 heaping teaspoon City King CTC Tea; simmer for 2 minutes.",
      "Add 1/2 cup milk and sugar, bring to 2 full boils and strain into kulhad.",
    ],
    variants: [
      { size: "100g Trial Pack", weightGrams: 100, price: 40, mrp: 50, type: "pack", approxServings: 50 },
      { size: "250g Fresh Pouch", weightGrams: 250, price: 95, mrp: 115, type: "pouch", isPopular: true, approxServings: 125 },
      { size: "500g Value Pack", weightGrams: 500, price: 180, mrp: 220, type: "pack", approxServings: 250 },
      { size: "1kg Family Bulk", weightGrams: 1000, price: 350, mrp: 420, type: "bulk", approxServings: 500 },
    ],
  },
];

export function BestSellerSection() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<BestSellerItem | null>(null);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [modalTab, setModalTab] = useState<"details" | "recipe" | "purity" | "wholesale">("details");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);
  const [servingMultiplier, setServingMultiplier] = useState<number>(1); // 1: small family, 2: big family, 5: caterer/hotel
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openProductModal = (product: BestSellerItem, initialVariantIdx = 0) => {
    setSelectedProduct(product);
    setSelectedVariantIdx(initialVariantIdx);
    setQuantity(1);
    setModalTab("details");
    setServingMultiplier(1);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToOrder = (product: BestSellerItem, variant: BestSellerVariant) => {
    try {
      window.dispatchEvent(
        new CustomEvent("add-to-order", {
          detail: {
            slug: product.slug,
            variant: variant.size,
            price: variant.price,
            quantity: quantity,
          },
        })
      );
    } catch {}

    setAddedNotice(`${product.name} (${variant.size}) × ${quantity} added to order bag!`);
    setTimeout(() => setAddedNotice(null), 3500);
  };

  // Category Filtering
  const filteredProducts = useMemo(() => {
    return BEST_SELLER_PRODUCTS.filter((item) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          item.name.toLowerCase().includes(q) ||
          item.hindiName.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.ingredients.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      // Tab filter
      if (activeCategory === "all") return true;
      if (activeCategory === "pouches") {
        return item.variants.some((v) => v.price <= 10);
      }
      if (activeCategory === "non-veg") {
        return item.category === "non-veg";
      }
      if (activeCategory === "veg-blends") {
        return item.category === "veg-blends";
      }
      if (activeCategory === "everyday") {
        return item.category === "everyday";
      }
      if (activeCategory === "royal-tea") {
        return item.category === "royal-tea" || item.id === "bs-garam" || item.id === "bs-biryani";
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const activeVariant = selectedProduct ? selectedProduct.variants[selectedVariantIdx] : null;
  const currentTotal = activeVariant ? activeVariant.price * quantity : 0;
  const currentMrpTotal = activeVariant ? activeVariant.mrp * quantity : 0;
  const savings = currentMrpTotal - currentTotal;
  const savingsPct = activeVariant ? Math.round(((activeVariant.mrp - activeVariant.price) / activeVariant.mrp) * 100) : 0;

  // Formatted WhatsApp Order URL
  const getWhatsAppOrderUrl = () => {
    if (!selectedProduct || !activeVariant) return waLink(site.whatsapp, "Hello City King Spices");
    const msg =
      `*ORDER ENQUIRY - CITY KING MASALA (SILIGURI FACTORY)*\n\n` +
      `📦 *Item:* ${selectedProduct.name}\n` +
      `🏷️ *Hindi:* ${selectedProduct.hindiName}\n` +
      `⚖️ *Pack Size:* ${activeVariant.size}\n` +
      `🔢 *Quantity:* ${quantity} units\n` +
      `💰 *Total Amount:* ₹${currentTotal} (MRP ₹${currentMrpTotal} - Save ${savingsPct}%)\n` +
      `🏭 *Factory:* Sah Food Industries, Ektiasal Bypass, Siliguri\n\n` +
      `Please confirm stock availability and factory dispatch details.`;
    return waLink(site.whatsapp, msg);
  };

  // Formatted Wholesale / B2B WhatsApp Enquiry URL
  const getWholesaleB2BUrl = () => {
    if (!selectedProduct) return waLink(site.whatsapp, "Hello City King Spices");
    const msg =
      `*WHOLESALE / DEALERSHIP ENQUIRY - CITY KING MASALA*\n\n` +
      `Hello Mukesh Ji,\nI am interested in bulk carton supply of *${selectedProduct.name}* (${selectedProduct.hindiName}) for my grocery store / distribution network.\n\n` +
      `Please share wholesale dealer price list, carton pack sizes (₹5 & ₹10 pouches / 50g-200g boxes), and minimum order quantity for direct factory dispatch from Siliguri.`;
    return waLink(site.whatsapp, msg);
  };

  return (
    <section id="best-seller" className="py-14 sm:py-24 bg-background relative overflow-hidden border-b border-border">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 -left-48 size-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 size-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative z-10">
        {/* =========================================================================
            HEADER & TITLE
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Flame className="size-3.5 text-primary animate-pulse" />
              <span>{lang === "hi" ? "सर्वाधिक लोकप्रिय मसाले" : "Flagship Best Sellers"}</span>
              <span className="text-primary/40">•</span>
              <span className="text-foreground font-semibold">
                {lang === "hi" ? "15+ शुद्ध मसाले • ₹5 से शुरू" : "15+ Products • Starting @ ₹5/-"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-foreground">
              {lang === "hi" ? (
                <>
                  किचन का <span className="text-primary">पसंदीदा चुनाव</span> — सिटी किंग बेस्ट सेलर
                </>
              ) : (
                <>
                  Kitchen’s <span className="text-primary">Choice Pick</span> — City King Best Sellers
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {lang === "hi"
                ? "चिकन, मटन, बिरयानी, फिश, गरम मसाला से लेकर हल्दी, मिर्ची, धनिया तक — सिलिगुड़ी फैक्ट्री से सीधे शुद्ध, कोल्ड-ग्राउंड मसाले। छोटे 15 ग्राम पाउच (₹5) से लेकर 1 किग्रा बल्क पैक तक।"
                : "From royal Chicken, Mutton, Biryani & Fish Curry to everyday Haldi, Mirchi & CTC Tea. Cold-ground at low temperatures in Siliguri to lock natural essential oils. Available from ₹5 mini pouches to 1kg wholesale cartons."}
            </p>
          </div>

          {/* Quick Badges & Search Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder={lang === "hi" ? "मसाला खोजें (चिकन, मटन, हल्दी)..." : "Search spices (Chicken, Haldi, Biryani)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-4 py-2.5 pl-9 rounded-full bg-card border border-border text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs"
              />
              <Sparkles className="size-4 text-muted-foreground absolute left-3 top-3 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-around gap-2 bg-card px-4 py-2.5 rounded-full border border-border shadow-xs text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-leaf">
                <ShieldCheck className="size-4" /> 100% Pure
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5 text-accent">
                <Truck className="size-4" /> Siliguri Hub
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5 text-primary">
                <Tag className="size-4" /> Starts ₹5
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTER TABS (With Count Badges)
           ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {[
            { id: "all", label: lang === "hi" ? "सभी मसाले (15)" : "All Best Sellers (15)" },
            { id: "pouches", label: lang === "hi" ? "₹5 और ₹10 पाउच" : "₹5 & ₹10 Mini Pouches" },
            { id: "non-veg", label: lang === "hi" ? "चिकन, मटन, बिरयानी, फिश" : "Non-Veg Curries" },
            { id: "veg-blends", label: lang === "hi" ? "सब्जी, पनीर, गरम मसाला" : "Veg & Royal Blends" },
            { id: "everyday", label: lang === "hi" ? "हल्दी, मिर्ची, धनिया, जीरा" : "Everyday Spices" },
            { id: "royal-tea", label: lang === "hi" ? "सीटीसी चाय व खुशबूदार" : "Chai & Aromatic" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md scale-102 ring-2 ring-primary/30"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/40 hover:bg-muted/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* =========================================================================
            PRODUCT CARDS GRID (Modeled After Kitchen Choice Reference Image)
           ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-5">
          {filteredProducts.map((product) => {
            const minPrice = Math.min(...product.variants.map((v) => v.price));
            const maxPrice = Math.max(...product.variants.map((v) => v.price));
            const isFav = wishlist[product.id];

            return (
              <div
                key={product.id}
                className="group relative bg-card dark:bg-card/95 rounded-2xl border border-border/80 hover:border-primary/60 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Top Image Container */}
                <div className="relative p-3.5 sm:p-4 flex flex-col items-center justify-center bg-gradient-to-b from-muted/25 via-background to-background min-h-[190px] sm:min-h-[220px]">
                  {/* Floating Tag */}
                  <span
                    className={`absolute top-2.5 left-2.5 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full text-white tracking-wider shadow-xs z-10 ${
                      product.tagColor || "bg-primary"
                    }`}
                  >
                    {product.tag}
                  </span>

                  {/* Floating Wishlist Heart */}
                  <button
                    type="button"
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-2.5 right-2.5 size-7 sm:size-8 rounded-full bg-background/90 hover:bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 transition-colors shadow-xs z-10"
                    aria-label="Add to Wishlist"
                  >
                    <Heart
                      className={`size-3.5 sm:size-4 transition-transform duration-200 ${
                        isFav ? "fill-red-500 text-red-500 scale-110" : "hover:scale-110"
                      }`}
                    />
                  </button>

                  {/* Product Pack Image */}
                  <div
                    onClick={() => openProductModal(product)}
                    className="relative cursor-pointer w-full flex items-center justify-center py-2"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-32 sm:h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                    />

                    {/* Quick View Hover Button (Directly inspired by user reference image!) */}
                    <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProductModal(product);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 hover:bg-black text-white text-xs font-bold shadow-lg backdrop-blur-xs transition-transform duration-200 hover:scale-105"
                      >
                        <Eye className="size-3.5 text-accent" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dark Action Button (ADD TO CART / QUICK SHOP - Like Reference Photo) */}
                <div className="px-3 sm:px-4 pt-1">
                  <button
                    type="button"
                    onClick={() => openProductModal(product)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-900 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-xs transition-all duration-200 hover:shadow-md active:scale-98 cursor-pointer"
                  >
                    <ShoppingBag className="size-3.5" />
                    <span>QUICK SHOP</span>
                  </button>
                </div>

                {/* Bottom Details Content */}
                <div className="p-3 sm:p-4 pt-2.5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Hindi Subtitle & Category */}
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
                      <span className="font-hindi font-semibold text-primary truncate max-w-[130px]">
                        {product.hindiName}
                      </span>
                      <div className="flex items-center gap-0.5 text-[11px] font-bold text-amber-500 shrink-0">
                        <Star className="size-3 fill-amber-500" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => openProductModal(product)}
                      className="font-display font-semibold text-xs sm:text-sm text-foreground line-clamp-1 hover:text-primary transition-colors cursor-pointer"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Pack size chips snippet */}
                    <div className="flex flex-wrap gap-1 mt-1.5 mb-2">
                      {product.variants.slice(0, 3).map((v, i) => (
                        <span
                          key={i}
                          className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded border ${
                            v.price <= 10
                              ? "bg-accent/15 border-accent/40 text-accent-foreground font-extrabold"
                              : "bg-muted/50 border-border text-muted-foreground"
                          }`}
                        >
                          {v.size.replace(" Box Pack", "").replace(" Fresh Pouch", "").replace(" Value Pack", "")}
                        </span>
                      ))}
                      {product.variants.length > 3 && (
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground px-1 py-0.5">
                          +{product.variants.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="pt-2 border-t border-border/60 flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] text-muted-foreground font-medium">Starting from</div>
                      <div className="font-extrabold text-sm sm:text-base text-foreground tracking-tight">
                        ₹{minPrice}.00{" "}
                        {minPrice !== maxPrice && (
                          <span className="text-[10px] sm:text-xs text-muted-foreground font-normal">
                            – ₹{maxPrice}.00
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Spice Level Indicator Icon */}
                    <div
                      className="flex items-center gap-0.5 text-[11px]"
                      title={`Spice Heat: ${product.spiceLevel}/5`}
                    >
                      {Array.from({ length: Math.min(3, product.spiceLevel) }).map((_, idx) => (
                        <Flame key={idx} className="size-3 text-red-500 fill-red-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state when search yields no match */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-card rounded-3xl border border-dashed border-border space-y-3">
            <Package className="size-10 text-muted-foreground mx-auto" />
            <h4 className="font-bold text-foreground">No masala found matching &ldquo;{searchQuery}&rdquo;</h4>
            <p className="text-xs text-muted-foreground">Try searching for Chicken, Haldi, Biryani, Mutton, or Sabji.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Added Notification Toast */}
        {addedNotice && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-zinc-950 text-white border border-border px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold animate-in fade-in slide-in-from-bottom duration-200">
            <Check className="size-4 text-leaf" />
            <span>{addedNotice}</span>
          </div>
        )}
      </div>

      {/* =========================================================================
          HIGHLY INTERACTIVE BLINKIT / FLIPKART MINUTES STYLE PRODUCT DETAILS MODAL
         ========================================================================= */}
      {selectedProduct && activeVariant && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={closeProductModal}
        >
          <div
            className="relative w-full max-w-4xl bg-card rounded-t-3xl sm:rounded-3xl border border-border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Interactive Tab Switcher */}
            <div className="sticky top-0 z-20 px-5 py-3 bg-card/95 backdrop-blur-md border-b border-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-extrabold text-primary uppercase tracking-wider">City King Masala</span>
                <span className="text-muted-foreground/40">/</span>
                <span className="text-muted-foreground">{selectedProduct.categoryLabel}</span>
              </div>

              {/* Modal Tabs */}
              <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-full text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setModalTab("details")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    modalTab === "details" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Pack & Price
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab("recipe")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    modalTab === "recipe" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Chef Recipe
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab("purity")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    modalTab === "purity" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Purity & Lab
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab("wholesale")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    modalTab === "wholesale" ? "bg-accent text-accent-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Wholesale B2B
                </button>
              </div>

              <button
                type="button"
                onClick={closeProductModal}
                className="size-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Modal Body Scroll Area */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* TAB 1: DETAILS & VARIANTS (Default) */}
              {modalTab === "details" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Left Side: Product Image & Flavor Meters */}
                  <div className="space-y-4">
                    <div className="relative rounded-2xl bg-gradient-to-b from-muted/40 via-muted/20 to-card p-6 flex flex-col items-center justify-center border border-border/80 min-h-[250px] sm:min-h-[290px] overflow-hidden group">
                      <span
                        className={`absolute top-3 left-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full text-white shadow-xs ${
                          selectedProduct.tagColor || "bg-primary"
                        }`}
                      >
                        {selectedProduct.tag}
                      </span>

                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="h-52 sm:h-64 w-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Origin Stamp */}
                      <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-border text-[10px] font-bold text-foreground flex items-center gap-1 shadow-xs">
                        <ShieldCheck className="size-3.5 text-leaf" />
                        <span>Mfd in Siliguri, WB</span>
                      </div>
                    </div>

                    {/* Interactive Flavor & Heat Meters */}
                    <div className="p-4 rounded-2xl bg-card border border-border shadow-xs space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                        <span>Aroma & Flavor Profile</span>
                        <span className="text-[10px] font-normal text-primary">Lab Authenticated</span>
                      </div>

                      {/* Heat Level Meter */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Flame className="size-3.5 text-red-500" />
                            <span>Spice Heat Level:</span>
                          </span>
                          <span className="font-bold text-foreground">
                            {selectedProduct.spiceLevel === 1 && "Mild & Gentle"}
                            {selectedProduct.spiceLevel === 2 && "Balanced Homestyle"}
                            {selectedProduct.spiceLevel === 3 && "Medium Spicy"}
                            {selectedProduct.spiceLevel === 4 && "Bold & Fiery"}
                            {selectedProduct.spiceLevel === 5 && "Extra Kadak Pungent"}
                          </span>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 h-2">
                          {[1, 2, 3, 4, 5].map((lvl) => (
                            <div
                              key={lvl}
                              className={`rounded-full transition-all ${
                                lvl <= selectedProduct.spiceLevel
                                  ? selectedProduct.spiceLevel >= 4
                                    ? "bg-red-500"
                                    : "bg-amber-500"
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Aroma Meter */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Sparkles className="size-3.5 text-accent" />
                            <span>Aroma & Volatile Oils:</span>
                          </span>
                          <span className="font-bold text-foreground">
                            {selectedProduct.aromaScore}/5 (High Essential Oils)
                          </span>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 h-2">
                          {[1, 2, 3, 4, 5].map((lvl) => (
                            <div
                              key={lvl}
                              className={`rounded-full transition-all ${
                                lvl <= selectedProduct.aromaScore ? "bg-leaf" : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="text-[11px] text-muted-foreground bg-muted/40 p-2 rounded-xl flex items-center gap-2">
                        <Leaf className="size-3.5 text-leaf shrink-0" />
                        <span>{selectedProduct.oilRetention}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Variants, Price, Meal Calculator, WhatsApp Order */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                          {selectedProduct.hindiName}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                          <Star className="size-3.5 fill-amber-500" />
                          <span>{selectedProduct.rating}</span>
                          <span className="text-muted-foreground font-normal">
                            ({selectedProduct.reviewCount}+ verified ratings)
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground leading-snug">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {selectedProduct.shortDesc}
                      </p>
                    </div>

                    {/* Price & Quantity Panel */}
                    <div className="p-4 rounded-2xl bg-muted/30 border border-border flex items-baseline justify-between gap-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                            ₹{activeVariant.price * quantity}
                          </span>
                          <span className="text-sm sm:text-base text-muted-foreground line-through">
                            ₹{activeVariant.mrp * quantity}
                          </span>
                          {savings > 0 && (
                            <span className="text-xs font-extrabold text-leaf bg-leaf/15 px-2 py-0.5 rounded-full">
                              Save {savingsPct}% (₹{savings})
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-muted-foreground">
                          Factory Price • Direct dispatch from Siliguri
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-card border border-border rounded-xl p-1 shadow-xs">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="size-7 rounded-lg hover:bg-muted flex items-center justify-center text-foreground disabled:opacity-40 transition-colors cursor-pointer"
                          disabled={quantity <= 1}
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-foreground">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => q + 1)}
                          className="size-7 rounded-lg hover:bg-muted flex items-center justify-center text-foreground transition-colors cursor-pointer"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Select Pack Size (Matrix Layout) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Select Pack Size (पैकेट साइज़ चुनें):
                        </label>
                        <span className="text-xs text-primary font-semibold">
                          Selected: {activeVariant.size}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {selectedProduct.variants.map((v, idx) => {
                          const isSelected = idx === selectedVariantIdx;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedVariantIdx(idx)}
                              className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer relative ${
                                isSelected
                                  ? "bg-primary/10 border-primary shadow-xs ring-2 ring-primary/40"
                                  : "bg-card hover:bg-muted/40 border-border"
                              }`}
                            >
                              {v.price <= 10 && (
                                <span className="absolute -top-2 right-2 text-[9px] font-extrabold bg-accent text-accent-foreground px-1.5 rounded-full shadow-2xs">
                                  Mini ₹{v.price}
                                </span>
                              )}
                              <div className="text-xs font-bold text-foreground truncate">
                                {v.size}
                              </div>
                              <div className="flex items-baseline gap-1 mt-0.5">
                                <span className="text-xs font-extrabold text-foreground">
                                  ₹{v.price}
                                </span>
                                <span className="text-[10px] text-muted-foreground line-through">
                                  ₹{v.mrp}
                                </span>
                                {v.approxServings && (
                                  <span className="text-[9px] text-muted-foreground ml-auto">
                                    ~{v.approxServings} meals
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Interactive Portion & Meal Calculator */}
                    {activeVariant.approxServings && (
                      <div className="p-3 rounded-xl bg-card border border-border text-xs flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Utensils className="size-4 text-primary" />
                          <span>
                            This {activeVariant.size} makes approx{" "}
                            <strong className="text-foreground">
                              {activeVariant.approxServings * quantity} delicious servings
                            </strong>
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Primary CTA Buttons */}
                    <div className="space-y-2 pt-2">
                      <a
                        href={getWhatsAppOrderUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-leaf hover:bg-leaf/90 text-leaf-foreground font-extrabold text-sm shadow-md transition-all duration-200 hover:scale-101 active:scale-98"
                      >
                        <MessageCircle className="size-4" />
                        <span>Order on WhatsApp (₹{currentTotal})</span>
                      </a>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToOrder(selectedProduct, activeVariant)}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-sm transition-all duration-200 hover:scale-101 active:scale-98 cursor-pointer"
                        >
                          <ShoppingBag className="size-4" />
                          <span>Add to Quick Bag</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setModalTab("wholesale")}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-xs border border-border transition-all cursor-pointer"
                        >
                          <Store className="size-4 text-accent" />
                          <span>Wholesale Carton</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CHEF RECIPE & COOKING GUIDE */}
              {modalTab === "recipe" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                    <Sparkles className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs">
                      <h4 className="font-bold text-amber-900 dark:text-amber-300">
                        Chef Mukesh Kumar Sah’s Golden Secret:
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProduct.cookingTip}
                      </p>
                    </div>
                  </div>

                  {/* 3-Step Recipe Walkthrough */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                      How to Cook the Perfect Dish (चरण-दर-चरण विधि)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {selectedProduct.recipeSteps.map((step, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-card border border-border shadow-xs space-y-2 relative">
                          <div className="size-6 rounded-full bg-primary text-primary-foreground font-extrabold text-xs flex items-center justify-center">
                            {i + 1}
                          </div>
                          <p className="text-xs text-foreground leading-relaxed">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Pairing Box */}
                  <div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="size-4 text-leaf" />
                      <span className="font-semibold text-foreground">Best Paired With:</span>
                      <span className="text-muted-foreground">{selectedProduct.bestPairing}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PURITY & LAB GUARANTEE */}
              {modalTab === "purity" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-card border border-border shadow-xs space-y-2">
                      <div className="flex items-center gap-2 text-leaf font-bold text-sm">
                        <Leaf className="size-4" />
                        <span>Low RPM Cold Grinding</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Conventional high-speed grinders heat raw spices to over 70°C, causing natural volatile essential oils to vaporize. City King uses low-temperature slow grinding to keep the natural aroma, color, and medicinal benefits 100% intact.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-card border border-border shadow-xs space-y-2">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <ShieldCheck className="size-4" />
                        <span>Zero Artificial Dyes & Starch</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Tested strictly against Sudan dyes, lead chromate, chalk, and wheat starch adulterants. Our raw spices are 100% genuine single-origin seeds and whole botanical ingredients.
                      </p>
                    </div>
                  </div>

                  {/* Specs Table */}
                  <div className="rounded-2xl border border-border overflow-hidden text-xs">
                    <div className="grid grid-cols-3 p-3 bg-muted/50 font-bold text-muted-foreground border-b border-border">
                      <span>Parameter</span>
                      <span className="col-span-2">Factory Standard</span>
                    </div>
                    <div className="grid grid-cols-3 p-3 border-b border-border">
                      <span className="text-muted-foreground">Ingredients</span>
                      <span className="col-span-2 font-semibold text-foreground">{selectedProduct.ingredients}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3 border-b border-border">
                      <span className="text-muted-foreground">Quality Metric</span>
                      <span className="col-span-2 font-semibold text-foreground">{selectedProduct.curcuminOrQuality}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3 border-b border-border">
                      <span className="text-muted-foreground">Shelf Life</span>
                      <span className="col-span-2 font-semibold text-foreground">{selectedProduct.shelfLife}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-muted-foreground">Manufacturer</span>
                      <span className="col-span-2 font-semibold text-foreground">
                        Sah Food Industries, Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – 734001, West Bengal
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: WHOLESALE B2B & DEALERSHIP */}
              {modalTab === "wholesale" && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-accent/15 to-transparent border border-accent/30 space-y-3">
                    <div className="flex items-center gap-2">
                      <Store className="size-5 text-accent" />
                      <h4 className="font-extrabold text-base text-foreground">
                        Wholesale & Kirana Dealership Supply
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Are you a grocery store owner, supermarket manager, or FMCG distributor in West Bengal, Bihar, Assam, or Sikkim? Sah Food Industries supplies bulk master cartons of ₹5 and ₹10 display hanging strips and 50g–500g boxes directly from our Siliguri factory.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-card border border-border">
                      <span className="font-bold text-foreground">₹5 & ₹10 Hanging Strips</span>
                      <p className="text-[11px] text-muted-foreground mt-1">24 pouches per hanging strip for attractive counter display.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border">
                      <span className="font-bold text-foreground">Master Outer Cartons</span>
                      <p className="text-[11px] text-muted-foreground mt-1">Secure corrugated boxes containing 12 to 48 units.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border">
                      <span className="font-bold text-foreground">Fast Regional Transport</span>
                      <p className="text-[11px] text-muted-foreground mt-1">Direct dispatch to Siliguri, Jalpaiguri, Kishanganj, Purnea & Katihar.</p>
                    </div>
                  </div>

                  <a
                    href={getWholesaleB2BUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-sm shadow-md transition-all duration-200"
                  >
                    <MessageCircle className="size-4" />
                    <span>Inquire Wholesale Rate Card on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>

            {/* Modal Bottom Sticky Bar */}
            <div className="sticky bottom-0 px-5 py-3 bg-card/95 backdrop-blur-md border-t border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="size-4 text-leaf" />
                <span>Express dispatch from Siliguri within 24–48 hours.</span>
              </div>

              <Link
                to="/products"
                onClick={closeProductModal}
                className="inline-flex items-center gap-1 font-bold text-primary hover:underline cursor-pointer"
              >
                <span>View All 15+ Products</span>
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
