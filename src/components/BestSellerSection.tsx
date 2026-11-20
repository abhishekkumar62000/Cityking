import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Check,
  ChevronRight,
  Eye,
  Heart,
  Info,
  Leaf,
  MessageCircle,
  Package,
  Plus,
  Minus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
  Flame,
  Award,
  Clock,
  Share2,
} from "lucide-react";

import haldi from "@/assets/Cityking Haldi Powder Masala.png";
import mirchi from "@/assets/Cityking Mirchi Powder Masala.png";
import dhaniya from "@/assets/Cityking Dhaniya Powder Masala.png";
import jeera from "@/assets/Cityking Jeera Powder Masala.png";
import sabji from "@/assets/Cityking Sabji Powder Masala.png";
import paneer from "@/assets/Cityking Kadai Paneer Powder Masala.png";
import teaBlack from "@/assets/Cityking Premium Chai Patti CTC Tea.png";
import teaGreen from "@/assets/Cityking Premium Chai Patti.png";
import { site, waLink } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

export type BestSellerVariant = {
  size: string;
  weightGrams?: number;
  price: number;
  mrp: number;
  isPopular?: boolean;
  type: "pouch" | "box" | "bulk" | "pack";
};

export type BestSellerItem = {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: "everyday" | "blended" | "tea" | "pouches";
  categoryLabel: string;
  image: string;
  tag: string;
  tagColor?: string;
  rating: number;
  reviewCount: number;
  shortDesc: string;
  fullDesc: string;
  curcuminOrQuality: string;
  ingredients: string;
  shelfLife: string;
  storage: string;
  cookingTip: string;
  variants: BestSellerVariant[];
};

export const BEST_SELLER_PRODUCTS: BestSellerItem[] = [
  {
    id: "bs-haldi",
    slug: "turmeric-haldi-powder",
    name: "City King Turmeric (Haldi) Powder",
    hindiName: "शुद्ध हल्दी पाउडर",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: haldi,
    tag: "BESTSELLER",
    tagColor: "bg-amber-500",
    rating: 4.9,
    reviewCount: 1420,
    shortDesc: "Rich natural curcumin, warm golden glow & pure homestyle aroma.",
    fullDesc:
      "Directly sourced and milled at low temperatures in our Siliguri factory. City King Haldi Powder preserves its natural essential volatile oils and therapeutic curcumin without starch fillers or artificial yellow dyes. Perfect for daily dals, subzis, and golden milk.",
    curcuminOrQuality: "High Curcumin Content (>3%) • Zero Lead Chromate",
    ingredients: "100% Selected Sun-Dried Indian Turmeric Rhizomes",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a cool, dry and airtight container away from direct sunlight",
    cookingTip: "Bloom in hot mustard oil or ghee for 15 seconds to release natural medicinal curcumin and vibrant color.",
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch" },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true },
      { size: "50g Box Pack", weightGrams: 50, price: 28, mrp: 35, type: "box" },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 50, mrp: 60, type: "pouch" },
      { size: "200g Box Pack", weightGrams: 200, price: 95, mrp: 115, type: "box" },
      { size: "500g Value Pack", weightGrams: 500, price: 220, mrp: 260, type: "pack" },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 410, mrp: 490, type: "bulk" },
    ],
  },
  {
    id: "bs-mirchi",
    slug: "mirchi-chilli-powder",
    name: "City King Mirchi (Chilli) Powder",
    hindiName: "तीखी लाल मिर्च पाउडर",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: mirchi,
    tag: "HOT & PURE",
    tagColor: "bg-red-600",
    rating: 4.9,
    reviewCount: 1180,
    shortDesc: "Vibrant natural red colour & balanced fiery heat without added dyes.",
    fullDesc:
      "Crafted from stemless, whole sun-dried red chillies pulverized at cold speeds to retain capsaicin and pungent aroma. Delivers natural deep red gravy color without Sudan dyes or artificial food coloring.",
    curcuminOrQuality: "100% Stemless Red Chillies • Natural Capsaicin Heat",
    ingredients: "100% Stemless Sun-Dried Red Chillies (No Additives)",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep in an airtight jar in a cool, dark kitchen shelf",
    cookingTip: "Mix with a teaspoon of water before adding to hot tadka oil so the chili never burns.",
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch" },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true },
      { size: "50g Box Pack", weightGrams: 50, price: 30, mrp: 38, type: "box" },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 55, mrp: 68, type: "pouch" },
      { size: "200g Box Pack", weightGrams: 200, price: 105, mrp: 125, type: "box" },
      { size: "500g Value Pack", weightGrams: 500, price: 245, mrp: 290, type: "pack" },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 460, mrp: 540, type: "bulk" },
    ],
  },
  {
    id: "bs-dhaniya",
    slug: "dhaniya-coriander-powder",
    name: "City King Dhaniya (Coriander) Powder",
    hindiName: "सुगंधित धनिया पाउडर",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: dhaniya,
    tag: "FRESH AROMA",
    tagColor: "bg-emerald-600",
    rating: 4.8,
    reviewCount: 940,
    shortDesc: "Fresh citrusy botanical aroma & rich body-building texture for gravies.",
    fullDesc:
      "Ground from green-tinted, essential oil-rich coriander seeds. City King Dhaniya Powder builds thickness and depth in curries while keeping the palate cool and refreshing.",
    curcuminOrQuality: "High Volatile Oil Retention • Zero Starch Husk Adulteration",
    ingredients: "100% Whole Roasted Plump Coriander Seeds",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Keep tightly closed in an opaque container away from heat",
    cookingTip: "Add alongside ginger-garlic paste to create a hearty base that thickens your curry naturally.",
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch" },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true },
      { size: "50g Box Pack", weightGrams: 50, price: 26, mrp: 32, type: "box" },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 48, mrp: 58, type: "pouch" },
      { size: "200g Box Pack", weightGrams: 200, price: 90, mrp: 110, type: "box" },
      { size: "500g Value Pack", weightGrams: 500, price: 210, mrp: 250, type: "pack" },
      { size: "1kg Master Bulk", weightGrams: 1000, price: 390, mrp: 460, type: "bulk" },
    ],
  },
  {
    id: "bs-jeera",
    slug: "jeera-cumin-powder",
    name: "City King Jeera (Cumin) Powder",
    hindiName: "भुना जीरा पाउडर",
    category: "everyday",
    categoryLabel: "Everyday Spices",
    image: jeera,
    tag: "ROASTED NOTE",
    tagColor: "bg-amber-700",
    rating: 4.9,
    reviewCount: 860,
    shortDesc: "Nutty, earthy roasted cumin notes for raitas, chaats & comfort dals.",
    fullDesc:
      "Selected cumin seeds gently dry-toasted to bring out maximum cuminaldehyde aroma, then milled into a velvety finishing spice. Elevates dahi vada, curd raita, roasted potatoes, and dal tadka.",
    curcuminOrQuality: "Slow Dry-Roasted • Intense Earthy Aroma",
    ingredients: "100% Pure Cleaned Cumin Seeds (Cuminum Cyminum)",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Airtight glass or stainless steel jar away from moisture",
    cookingTip: "Sprinkle raw over boondi raita, buttermilk, or lemon water for an instant digestive boost.",
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch" },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch" },
      { size: "50g Box Pack", weightGrams: 50, price: 42, mrp: 50, type: "box", isPopular: true },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 78, mrp: 95, type: "pouch" },
      { size: "200g Box Pack", weightGrams: 200, price: 150, mrp: 180, type: "box" },
      { size: "500g Value Pack", weightGrams: 500, price: 350, mrp: 420, type: "pack" },
    ],
  },
  {
    id: "bs-sabji",
    slug: "sabji-masala",
    name: "City King Sabji Masala (Master Blend)",
    hindiName: "सब्ज़ी मसाला (मास्टर ब्लेंड)",
    category: "blended",
    categoryLabel: "Blended Masalas",
    image: sabji,
    tag: "SIGNATURE BLEND",
    tagColor: "bg-orange-600",
    rating: 4.9,
    reviewCount: 1650,
    shortDesc: "Complete all-in-one kitchen spice blend for homestyle dry & gravy vegetables.",
    fullDesc:
      "A golden master formulation of 14 roasted spices in exact harmony. Removes the guesswork from daily cooking — simply saute onions and tomatoes, add a spoonful of City King Sabji Masala, and watch ordinary aloo gobi, bhindi, or mixed veg turn into restaurant-grade delights.",
    curcuminOrQuality: "14-Spice Harmonious Recipe • No MSG or Starch",
    ingredients: "Coriander, Cumin, Turmeric, Dry Mango, Black Pepper, Clove, Nutmeg, Cardamom, Dry Ginger, Bay Leaves",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a dry cool cabinet",
    cookingTip: "Add towards the middle of frying your gravy, allowing the whole spices to caramelize without scorching.",
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch" },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true },
      { size: "50g Box Pack", weightGrams: 50, price: 35, mrp: 42, type: "box" },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 65, mrp: 78, type: "pouch" },
      { size: "200g Box Pack", weightGrams: 200, price: 120, mrp: 145, type: "box" },
    ],
  },
  {
    id: "bs-paneer",
    slug: "paneer-masala",
    name: "City King Kadai Paneer Masala",
    hindiName: "कड़ाही पनीर मसाला (शाही स्वाद)",
    category: "blended",
    categoryLabel: "Blended Masalas",
    image: paneer,
    tag: "ROYAL SPICE",
    tagColor: "bg-purple-600",
    rating: 4.9,
    reviewCount: 1320,
    shortDesc: "Rich, fragrant Mughlai & Kadai spice blend for velvety restaurant-style paneer.",
    fullDesc:
      "Formulated with whole crushed coriander seeds, Kashmiri chili, mace, green cardamom, and roasted fenugreek leaves (kasoori methi). Gives paneer cubes a luscious, aromatic coat that rivals famous Dhabas and grand banquets.",
    curcuminOrQuality: "With Crushed Whole Spices & Kasoori Methi • Royal Aroma",
    ingredients: "Coriander, Cumin, Kashmiri Mirch, Cinnamon, Clove, Black Cardamom, Kasuri Methi, Mace, Star Anise",
    shelfLife: "12 Months from Manufacturing Date",
    storage: "Store in a sealed pouch or spice jar",
    cookingTip: "Dissolve 1 tablespoon in 2 tablespoons of warm milk or whisked curd before folding into your paneer gravy.",
    variants: [
      { size: "15g Mini Pouch", weightGrams: 15, price: 5, mrp: 6, type: "pouch" },
      { size: "30g Chota Pack", weightGrams: 30, price: 10, mrp: 12, type: "pouch", isPopular: true },
      { size: "50g Box Pack", weightGrams: 50, price: 38, mrp: 46, type: "box" },
      { size: "100g Fresh Pouch", weightGrams: 100, price: 72, mrp: 85, type: "pouch" },
      { size: "200g Box Pack", weightGrams: 200, price: 138, mrp: 165, type: "box" },
    ],
  },
  {
    id: "bs-tea-black",
    slug: "premium-ctc-tea-black",
    name: "City King Premium CTC Tea (Royal Black)",
    hindiName: "प्रीमियम सीटीसी चाय (रॉयल ब्लैक)",
    category: "tea",
    categoryLabel: "Tea & Chai Patti",
    image: teaBlack,
    tag: "STRONG & BRISK",
    tagColor: "bg-stone-900",
    rating: 4.9,
    reviewCount: 1750,
    shortDesc: "Strong brisk liquor & rich amber color from Darjeeling & Dooars foothills.",
    fullDesc:
      "Harvested from the lush foothills of Darjeeling and Dooars. Specially curated CTC grain sizes ensure instantaneous colour release, brisk malty liquor, and a bold punch that cuts through rich buffalo milk.",
    curcuminOrQuality: "100% North Bengal Foothills CTC Tea Granules",
    ingredients: "Selected High-Grown CTC Black Tea",
    shelfLife: "18 Months from Manufacturing Date",
    storage: "Store in a moisture-free tin away from strong spices",
    cookingTip: "Boil water with crushed fresh ginger and cardamom, add tea grains and simmer 2 minutes before pouring milk.",
    variants: [
      { size: "100g Trial Pack", weightGrams: 100, price: 40, mrp: 50, type: "pack" },
      { size: "250g Fresh Pouch", weightGrams: 250, price: 95, mrp: 115, type: "pouch", isPopular: true },
      { size: "500g Value Pack", weightGrams: 500, price: 180, mrp: 220, type: "pack" },
      { size: "1kg Family Bulk", weightGrams: 1000, price: 350, mrp: 420, type: "bulk" },
    ],
  },
  {
    id: "bs-tea-green",
    slug: "premium-chai-patti-gold",
    name: "City King Gold Premium Chai Patti",
    hindiName: "गोल्ड प्रीमियम चाय पत्ती",
    category: "tea",
    categoryLabel: "Tea & Chai Patti",
    image: teaGreen,
    tag: "GOLDEN AROMA",
    tagColor: "bg-emerald-800",
    rating: 4.8,
    reviewCount: 910,
    shortDesc: "Malty brisk flavor & aromatic fragrance for true connoisseurs of chai.",
    fullDesc:
      "Selected orthodox leaf and CTC blend providing a deep golden amber infusion and smooth lingering aftertaste. Designed for tea lovers who appreciate aromatic complexity along with kadak strength.",
    curcuminOrQuality: "Curated Dual-Grade Blend • Naturally Invigorating",
    ingredients: "Pure Indian CTC and Long Leaf Tea Granules",
    shelfLife: "18 Months from Manufacturing Date",
    storage: "Keep in a dark, airtight container",
    cookingTip: "Simmer on low flame with milk for 3-4 minutes to achieve full-bodied creamy texture.",
    variants: [
      { size: "100g Trial Pack", weightGrams: 100, price: 45, mrp: 55, type: "pack" },
      { size: "250g Fresh Pouch", weightGrams: 250, price: 105, mrp: 125, type: "pouch", isPopular: true },
      { size: "500g Value Pack", weightGrams: 500, price: 200, mrp: 240, type: "pack" },
      { size: "1kg Family Bulk", weightGrams: 1000, price: 380, mrp: 460, type: "bulk" },
    ],
  },
];

export function BestSellerSection() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<BestSellerItem | null>(null);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openProductModal = (product: BestSellerItem, initialVariantIdx = 0) => {
    setSelectedProduct(product);
    setSelectedVariantIdx(initialVariantIdx);
    setQuantity(1);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToOrder = (product: BestSellerItem, variant: BestSellerVariant) => {
    // Dispatch custom event to sync with SmartOrderDrawer
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

    setAddedNotice(`${product.name} (${variant.size}) added to order bag!`);
    setTimeout(() => setAddedNotice(null), 3000);
  };

  const filteredProducts = BEST_SELLER_PRODUCTS.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "pouches") {
      // Products with ₹5 or ₹10 pouch
      return item.variants.some((v) => v.price <= 10);
    }
    return item.category === activeCategory;
  });

  const activeVariant = selectedProduct ? selectedProduct.variants[selectedVariantIdx] : null;
  const currentTotal = activeVariant ? activeVariant.price * quantity : 0;
  const currentMrpTotal = activeVariant ? activeVariant.mrp * quantity : 0;
  const savings = currentMrpTotal - currentTotal;
  const savingsPct = activeVariant ? Math.round(((activeVariant.mrp - activeVariant.price) / activeVariant.mrp) * 100) : 0;

  // Formatted WhatsApp order message
  const getWhatsAppOrderUrl = () => {
    if (!selectedProduct || !activeVariant) return waLink(site.whatsapp, "Hello City King Spices");
    const msg = `*ORDER ENQUIRY - CITY KING SPICES (SILIGURI)*\n\n` +
      `Product: *${selectedProduct.name}*\n` +
      `Hindi Name: ${selectedProduct.hindiName}\n` +
      `Pack Size: *${activeVariant.size}*\n` +
      `Quantity: *${quantity}*\n` +
      `Price: *₹${currentTotal}* (MRP ₹${currentMrpTotal})\n\n` +
      `Factory: Sah Food Industries, Siliguri, WB\n` +
      `Please confirm stock availability and dispatch details.`;
    return waLink(site.whatsapp, msg);
  };

  return (
    <section id="best-seller" className="py-14 sm:py-20 bg-background relative overflow-hidden border-b border-border">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-accent/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="container-page">
        {/* =========================================================================
            HEADER & TITLE
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
              <Flame className="size-3.5 text-primary animate-pulse" />
              <span>{lang === "hi" ? "सर्वाधिक बिकने वाले मसाले" : "Best Seller Collection"}</span>
              <span className="text-primary/40">•</span>
              <span className="text-foreground font-semibold">{lang === "hi" ? "₹5 से शुरू" : "Starting @ ₹5/-"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-foreground">
              {lang === "hi" ? (
                <>
                  किचन का <span className="text-primary">पसंदीदा चुनाव</span> — बेस्ट सेलर
                </>
              ) : (
                <>
                  Kitchen’s <span className="text-primary">Choice Pick</span> — Best Sellers
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {lang === "hi"
                ? "सिलिगुड़ी फैक्ट्री से सीधे शुद्ध, कोल्ड-ग्राउंड मसाले व चाय। 15 ग्राम पाउच (₹5) से लेकर 1 किग्रा बल्क पैक तक — पूरा स्वाद, शून्य मिलावट।"
                : "Directly milled in our Siliguri factory. Clean, cold-ground Indian spices & aromatic Darjeeling foothills CTC tea. From ₹5 mini trial pouches to 1kg family bulk packs."}
            </p>
          </div>

          {/* Quick Badges Counter */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-card p-3 rounded-2xl border border-border shadow-xs text-xs font-medium">
            <div className="flex items-center gap-1.5 text-leaf">
              <ShieldCheck className="size-4" />
              <span>100% Pure</span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1.5 text-accent">
              <Truck className="size-4" />
              <span>Factory Direct</span>
            </div>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1.5 text-primary font-bold">
              <span>₹5 Mini Pouches</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTER TABS
           ========================================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {[
            { id: "all", label: lang === "hi" ? "सभी बेस्ट सेलर" : "All Best Sellers" },
            { id: "pouches", label: lang === "hi" ? "₹5 और ₹10 पाउच" : "₹5 & ₹10 Mini Pouches" },
            { id: "everyday", label: lang === "hi" ? "हल्दी, मिर्ची, धनिया, जीरा" : "Everyday Spices" },
            { id: "blended", label: lang === "hi" ? "सब्जी व पनीर मसाला" : "Blended Masalas" },
            { id: "tea", label: lang === "hi" ? "रॉयल सीटीसी चाय" : "Tea & Chai Patti" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md scale-102"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* =========================================================================
            PRODUCT CARDS GRID (Modeled After Reference Kitchen Choice Image)
           ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const minPrice = Math.min(...product.variants.map((v) => v.price));
            const maxPrice = Math.max(...product.variants.map((v) => v.price));
            const isFav = wishlist[product.id];

            return (
              <div
                key={product.id}
                className="group relative bg-card dark:bg-card/95 rounded-2xl border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Media Area */}
                <div className="relative p-4 sm:p-5 flex flex-col items-center justify-center bg-gradient-to-b from-muted/30 to-transparent min-h-[200px] sm:min-h-[230px]">
                  {/* Floating Tag */}
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-extrabold px-2 py-0.5 rounded-full text-white tracking-wider shadow-xs ${
                      product.tagColor || "bg-primary"
                    }`}
                  >
                    {product.tag}
                  </span>

                  {/* Floating Wishlist Heart */}
                  <button
                    type="button"
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-3 right-3 size-8 rounded-full bg-background/90 hover:bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 transition-colors shadow-xs z-10"
                    aria-label="Add to Wishlist"
                  >
                    <Heart
                      className={`size-4 transition-transform duration-200 ${
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
                      className="h-36 sm:h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                    />

                    {/* Quick View Hover Pill (Inspired directly by user reference image!) */}
                    <div className="absolute inset-x-0 bottom-1 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProductModal(product);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 hover:bg-black text-white text-xs font-semibold shadow-lg backdrop-blur-xs transition-transform duration-200 hover:scale-105"
                      >
                        <Eye className="size-3.5 text-accent" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dark Action Button (ADD TO CART / QUICK SHOP - Like Reference Photo) */}
                <div className="px-4 pt-1">
                  <button
                    type="button"
                    onClick={() => openProductModal(product)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-200 hover:shadow-md active:scale-98 cursor-pointer"
                  >
                    <ShoppingBag className="size-3.5" />
                    <span>{product.variants.length > 1 ? "QUICK SHOP" : "ADD TO CART"}</span>
                  </button>
                </div>

                {/* Bottom Details Content */}
                <div className="p-4 pt-3 flex flex-col justify-between flex-1">
                  <div>
                    {/* Hindi subtitle / category */}
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
                      <span className="font-hindi font-medium text-primary">{product.hindiName}</span>
                      <span className="text-[10px] text-muted-foreground/80">{product.categoryLabel}</span>
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => openProductModal(product)}
                      className="font-display font-semibold text-sm sm:text-base text-foreground line-clamp-1 hover:text-primary transition-colors cursor-pointer"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Pack size chips snippet */}
                    <div className="flex flex-wrap gap-1 mt-2 mb-2">
                      {product.variants.slice(0, 4).map((v, i) => (
                        <span
                          key={i}
                          className={`text-[10px] px-1.5 py-0.5 rounded border ${
                            v.price <= 10
                              ? "bg-accent/15 border-accent/40 text-accent-foreground font-bold"
                              : "bg-muted/50 border-border text-muted-foreground"
                          }`}
                        >
                          {v.size.replace(" Box Pack", "").replace(" Fresh Pouch", "").replace(" Value Pack", "")}
                        </span>
                      ))}
                      {product.variants.length > 4 && (
                        <span className="text-[10px] text-muted-foreground px-1 py-0.5">
                          +{product.variants.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price Range & Rating */}
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Starting from</div>
                      <div className="font-extrabold text-base sm:text-lg text-foreground tracking-tight">
                        ₹{minPrice}.00{" "}
                        {minPrice !== maxPrice && (
                          <span className="text-xs text-muted-foreground font-normal">
                            – ₹{maxPrice}.00
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                      <Star className="size-3 fill-amber-500" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Added Notification Toast */}
        {addedNotice && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-zinc-950 text-white border border-border px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom duration-200">
            <Check className="size-4 text-leaf" />
            <span>{addedNotice}</span>
          </div>
        )}
      </div>

      {/* =========================================================================
          BLINKIT / FLIPKART MINUTES STYLE PRODUCT DETAILS MODAL / DRAWER
         ========================================================================= */}
      {selectedProduct && activeVariant && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={closeProductModal}
        >
          <div
            className="relative w-full max-w-3xl bg-card rounded-t-3xl sm:rounded-3xl border border-border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 px-5 py-3.5 bg-card/95 backdrop-blur-md border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-bold text-primary uppercase tracking-wide">City King Spices</span>
                <span>/</span>
                <span>{selectedProduct.categoryLabel}</span>
              </div>
              <button
                type="button"
                onClick={closeProductModal}
                className="size-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close details"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Left Side: Product Image & Highlights */}
                <div className="space-y-4">
                  <div className="relative rounded-2xl bg-muted/40 p-6 flex items-center justify-center border border-border/80 min-h-[240px] sm:min-h-[280px]">
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
                      className="h-52 sm:h-64 w-auto object-contain drop-shadow-xl"
                    />

                    {/* Guarantee Stamp */}
                    <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-border text-[10px] font-bold text-foreground flex items-center gap-1 shadow-xs">
                      <ShieldCheck className="size-3.5 text-leaf" />
                      <span>100% Purity Certified</span>
                    </div>
                  </div>

                  {/* Blinkit-style delivery promise pill */}
                  <div className="p-3 rounded-xl bg-leaf/10 border border-leaf/20 flex items-center gap-3 text-xs text-leaf-foreground">
                    <Truck className="size-4 text-leaf shrink-0" />
                    <div>
                      <span className="font-bold">Fast Factory Dispatch from Siliguri</span>
                      <p className="text-[11px] text-muted-foreground">Within 24–48 hours direct to your home or shop.</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Variant Selector, Pricing & CTAs */}
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">
                        {selectedProduct.hindiName}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star className="size-3.5 fill-amber-500" />
                        <span>{selectedProduct.rating}</span>
                        <span className="text-muted-foreground font-normal">
                          ({selectedProduct.reviewCount} verified reviews)
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

                  {/* Price Display */}
                  <div className="p-4 rounded-2xl bg-muted/30 border border-border flex items-baseline justify-between">
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
                        Inclusive of all taxes • Mfd in Siliguri
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-card border border-border rounded-xl p-1 shadow-xs">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="size-7 rounded-lg hover:bg-muted flex items-center justify-center text-foreground disabled:opacity-40 transition-colors"
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
                        className="size-7 rounded-lg hover:bg-muted flex items-center justify-center text-foreground transition-colors"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Blinkit Style Variant Pack Size Matrix */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Select Pack Size (पैकेट साइज़ चुनें):
                      </label>
                      <span className="text-xs text-primary font-semibold">
                        {activeVariant.size}
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
                                ? "bg-primary/10 border-primary shadow-xs ring-1 ring-primary"
                                : "bg-card hover:bg-muted/40 border-border"
                            }`}
                          >
                            {v.price <= 10 && (
                              <span className="absolute -top-2 right-2 text-[9px] font-extrabold bg-accent text-accent-foreground px-1.5 rounded-full">
                                Mini Pack
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
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Primary Action Buttons */}
                  <div className="space-y-2.5 pt-2">
                    <a
                      href={getWhatsAppOrderUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-leaf hover:bg-leaf/90 text-leaf-foreground font-bold text-sm shadow-md transition-all duration-200 hover:scale-101 active:scale-98"
                    >
                      <MessageCircle className="size-4" />
                      <span>Order on WhatsApp (₹{currentTotal})</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleAddToOrder(selectedProduct, activeVariant)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-sm transition-all duration-200 hover:scale-101 active:scale-98"
                    >
                      <ShoppingBag className="size-4" />
                      <span>Add to Quick Bag</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Technical Details & Highlights Section (Blinkit Style Specs) */}
              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  Product Highlights & Kitchen Truth
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-muted/30 border border-border">
                    <div className="flex items-center gap-1.5 text-leaf font-bold mb-1">
                      <Leaf className="size-4" />
                      <span>Cold Ground</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Milled at low RPM to seal natural oils & aroma.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-muted/30 border border-border">
                    <div className="flex items-center gap-1.5 text-accent font-bold mb-1">
                      <ShieldCheck className="size-4" />
                      <span>Zero Dyes</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">No artificial colors, starch fillers or MSG.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-muted/30 border border-border">
                    <div className="flex items-center gap-1.5 text-primary font-bold mb-1">
                      <Clock className="size-4" />
                      <span>{selectedProduct.shelfLife}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Fresh packaging locks aroma for 12 months.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-muted/30 border border-border">
                    <div className="flex items-center gap-1.5 text-amber-600 font-bold mb-1">
                      <Award className="size-4" />
                      <span>Siliguri Origin</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Sah Food Industries, Ektiasal Bypass, Siliguri.</p>
                  </div>
                </div>

                {/* Chef's Cooking Tip Box */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-foreground space-y-1">
                  <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-400">
                    <Sparkles className="size-4" />
                    <span>Chef’s Secret Cooking Tip:</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {selectedProduct.cookingTip}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="rounded-xl border border-border overflow-hidden text-xs">
                  <div className="grid grid-cols-3 p-3 bg-muted/40 font-semibold text-muted-foreground border-b border-border">
                    <span>Specification</span>
                    <span className="col-span-2">Details</span>
                  </div>
                  <div className="grid grid-cols-3 p-3 border-b border-border">
                    <span className="text-muted-foreground">Ingredients</span>
                    <span className="col-span-2 font-medium text-foreground">{selectedProduct.ingredients}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3 border-b border-border">
                    <span className="text-muted-foreground">Quality Metric</span>
                    <span className="col-span-2 font-medium text-foreground">{selectedProduct.curcuminOrQuality}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3 border-b border-border">
                    <span className="text-muted-foreground">Storage Info</span>
                    <span className="col-span-2 font-medium text-foreground">{selectedProduct.storage}</span>
                  </div>
                  <div className="grid grid-cols-3 p-3">
                    <span className="text-muted-foreground">Factory Hub</span>
                    <span className="col-span-2 font-medium text-foreground">
                      Sah Food Industries, Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – 734001, West Bengal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Sticky Bar */}
            <div className="sticky bottom-0 px-5 py-3.5 bg-card/95 backdrop-blur-md border-t border-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Info className="size-4 text-primary" />
                <span>Bulk wholesale dealership orders also available.</span>
              </div>

              <Link
                to="/products"
                onClick={closeProductModal}
                className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
              >
                <span>View Full Catalog</span>
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
