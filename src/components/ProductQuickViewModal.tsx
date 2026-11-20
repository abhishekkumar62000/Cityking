import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Flame,
  Globe,
  Heart,
  Info,
  Leaf,
  MessageCircle,
  Minus,
  PackageCheck,
  Plus,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Tag,
  Truck,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";
import { Product, ProductVariant } from "@/data/products";
import { site, waLink } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToBag: (product: Product, variant: ProductVariant, quantity: number) => void;
}

export function ProductQuickViewModal({
  product,
  onClose,
  onAddToBag,
}: ProductQuickViewModalProps) {
  const { lang, setLang } = useLanguage();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"overview" | "recipe" | "specs" | "wholesale">("overview");

  if (!product) return null;

  const isHi = lang === "hi";

  const variants = product.variants && product.variants.length > 0
    ? product.variants
    : [
        { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch" as const },
        { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch" as const, isPopular: true },
        { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 34, mrp: 42, type: "box" as const },
        { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 65, mrp: 80, type: "pouch" as const },
        { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 125, mrp: 155, type: "box" as const },
      ];

  const activeVariant = variants[selectedVariantIdx] || variants[0];
  const totalPrice = activeVariant.price * quantity;
  const totalMrp = activeVariant.mrp * quantity;
  const totalSavings = totalMrp - totalPrice;
  const savingsPct = Math.round(((activeVariant.mrp - activeVariant.price) / activeVariant.mrp) * 100);

  // Formatted WhatsApp order message
  const getWhatsAppOrderUrl = () => {
    const msg = isHi
      ? `*ऑर्डर पूछताछ - सिटी किंग मसाले (सिलिगुड़ी फैक्ट्री)*\n\n` +
        `📦 *उत्पाद:* ${product.name} (${product.hindiName})\n` +
        `⚖️ *पैकेट साइज़:* ${activeVariant.sizeHi || activeVariant.size}\n` +
        `🔢 *मात्रा:* ${quantity} पैकेट\n` +
        `💰 *कुल मूल्य:* ₹${totalPrice} (MRP ₹${totalMrp} - बचत ${savingsPct}%)\n` +
        `🏭 *फैक्ट्री:* साह फूड इंडस्ट्रीज, एकतासाल बाइपास, सिलीगुड़ी\n\n` +
        `कृपया स्टॉक और फैक्ट्री डिलीवरी की पुष्टि करें। धन्यवाद!`
      : `*ORDER ENQUIRY - CITY KING SPICES (SILIGURI FACTORY)*\n\n` +
        `📦 *Product:* ${product.name}\n` +
        `🏷️ *Hindi Name:* ${product.hindiName}\n` +
        `⚖️ *Selected Pack:* ${activeVariant.size}\n` +
        `🔢 *Quantity:* ${quantity} pack(s)\n` +
        `💰 *Total Price:* ₹${totalPrice} (MRP ₹${totalMrp} - Save ${savingsPct}%)\n` +
        `🏭 *Factory:* Sah Food Industries, Ektiasal Bypass, Siliguri, WB\n\n` +
        `Please confirm stock availability and factory dispatch details.`;
    return waLink(site.whatsapp, msg);
  };

  // Formatted Wholesale B2B WhatsApp inquiry
  const getWholesaleB2BUrl = () => {
    const msg = isHi
      ? `*थोक / डीलरशिप पूछताछ - सिटी किंग मसाले*\n\n` +
        `नमस्ते मुकेश जी,\nमैं अपने किराना स्टोर/वितरण नेटवर्क के लिए *${product.name}* (${product.hindiName}) के मास्टर कार्टन और ₹5 व ₹10 लड़ी डिस्प्ले हैंगिंग स्ट्रिप की थोक आपूर्ति चाहता हूँ।\n\n` +
        `कृपया थोक मूल्य सूची और सिलीगुड़ी फैक्ट्री से ट्रांसपोर्ट डिलीवरी की जानकारी साझा करें।`
      : `*WHOLESALE DEALERSHIP ENQUIRY - CITY KING MASALA*\n\n` +
        `Hello Mukesh Ji,\nI am a retailer/distributor and want bulk master carton supply of *${product.name}* (${product.hindiName}).\n\n` +
        `Please share wholesale carton rate card, ₹5 & ₹10 hanging strip availability, and minimum order quantity for factory transport from Siliguri.`;
    return waLink(site.whatsapp, msg);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-card rounded-t-3xl sm:rounded-3xl border border-border/80 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with In-Modal Language Toggle */}
        <div className="px-5 py-3.5 bg-card/95 backdrop-blur-md border-b border-border/70 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs truncate">
            <span className="font-extrabold text-primary tracking-wider uppercase text-[11px]">
              City King
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="text-muted-foreground font-medium hidden sm:inline">
              {isHi ? product.categoryLabelHi || product.categoryLabel : product.categoryLabel}
            </span>
            <span className="text-muted-foreground/40 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-leaf">
              <span className="size-1.5 rounded-full bg-leaf animate-pulse" />
              <span>{isHi ? "फैक्ट्री फ्रेश उपलब्ध" : "Factory Fresh In Stock"}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick In-Modal Bilingual Switcher */}
            <div className="flex items-center bg-muted/60 p-0.5 rounded-full border border-border text-xs font-bold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  !isHi ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("hi")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-hindi ${
                  isHi ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                हिंदी
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="size-8 rounded-full bg-muted/70 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Side: Product Image & Refined Sensory Gauges (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              {/* Product Visual Presentation */}
              <div className="relative rounded-2xl bg-gradient-to-b from-amber-500/8 via-muted/20 to-card p-6 flex flex-col items-center justify-center border border-border/80 min-h-[250px] sm:min-h-[290px] overflow-hidden group">
                <span
                  className={`absolute top-3 left-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full text-white tracking-wider shadow-xs ${
                    product.tagColor || "bg-primary"
                  }`}
                >
                  {isHi ? product.tagHi || product.tag : product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 sm:h-64 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-106"
                />

                {/* Guarantee Stamp */}
                <div className="absolute bottom-3 right-3 bg-background/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-border text-[10px] font-bold text-foreground flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="size-3.5 text-leaf" />
                  <span>{isHi ? "100% शुद्धता प्रमाणित" : "100% Purity Certified"}</span>
                </div>
              </div>

              {/* Flavor & Sensory Gauges */}
              <div className="p-3.5 rounded-2xl bg-card border border-border/80 shadow-2xs space-y-2.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                  <span>{isHi ? "स्वाद व खुशबू प्रोफाइल" : "Flavor & Aroma Profile"}</span>
                  <span className="text-primary font-semibold text-[10px]">
                    {isHi ? "कोल्ड-ग्राउंड" : "Low RPM Milled"}
                  </span>
                </div>

                {/* Heat Level Meter */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Flame className="size-3.5 text-red-500" />
                      <span>{isHi ? "तीखापन:" : "Spice Heat:"}</span>
                    </span>
                    <span className="font-bold text-foreground">
                      {product.spiceLevel === 1 && (isHi ? "हल्का व सुपाच्य" : "Mild & Gentle")}
                      {product.spiceLevel === 2 && (isHi ? "संतुलित स्वाद" : "Balanced Homestyle")}
                      {product.spiceLevel === 3 && (isHi ? "मध्यम तीखा" : "Medium Spicy")}
                      {product.spiceLevel === 4 && (isHi ? "शाही तीखापन" : "Bold & Fiery")}
                      {product.spiceLevel === 5 && (isHi ? "कड़क तीखा" : "Extra Hot")}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 h-1.5">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <div
                        key={lvl}
                        className={`rounded-full transition-all ${
                          lvl <= (product.spiceLevel || 2)
                            ? product.spiceLevel >= 4
                              ? "bg-red-500"
                              : "bg-amber-500"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Aroma Volatiles Retention */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Sparkles className="size-3.5 text-accent" />
                      <span>{isHi ? "सुगंधित तेल:" : "Essential Oils:"}</span>
                    </span>
                    <span className="font-bold text-leaf">
                      {product.aromaScore || 5}/5 {isHi ? "सुरक्षित" : "Preserved"}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 h-1.5">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <div
                        key={lvl}
                        className={`rounded-full transition-all ${
                          lvl <= (product.aromaScore || 5) ? "bg-leaf" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-muted-foreground bg-muted/40 p-2 rounded-xl flex items-center gap-2">
                  <Leaf className="size-3.5 text-leaf shrink-0" />
                  <span>{isHi ? product.oilRetentionHi || product.oilRetention : product.oilRetention}</span>
                </div>
              </div>

              {/* Fast Dispatch Pill */}
              <div className="p-3 rounded-xl bg-leaf/10 border border-leaf/20 flex items-center gap-2.5 text-xs text-leaf-foreground">
                <Truck className="size-4 text-leaf shrink-0" />
                <span className="font-semibold text-[11px] leading-tight">
                  {isHi
                    ? "सिलिगुड़ी फैक्ट्री से 24–48 घंटे में सीधा ताजा प्रेषण।"
                    : "Direct factory dispatch from Siliguri within 24–48 hours."}
                </span>
              </div>
            </div>

            {/* Right Side: Clean E-Commerce Purchase Flow (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              {/* Title & Hindi Badge */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary font-hindi">
                    {product.hindiName}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="size-3.5 fill-amber-500" />
                    <span>{product.rating || 4.9}</span>
                    <span className="text-muted-foreground font-normal">
                      ({product.reviewCount || 1200}+ {isHi ? "रेटिंग" : "ratings"})
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground leading-snug">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {isHi ? product.shortHi || product.short : product.short}
                </p>
              </div>

              {/* Big Bold Price & Savings Block */}
              <div className="p-4 rounded-2xl bg-muted/30 border border-border/80 flex items-baseline justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      ₹{totalPrice}
                    </span>
                    <span className="text-sm sm:text-base text-muted-foreground line-through">
                      ₹{totalMrp}
                    </span>
                    {totalSavings > 0 && (
                      <span className="text-xs font-extrabold text-leaf bg-leaf/15 px-2 py-0.5 rounded-full">
                        {isHi ? `बचत ${savingsPct}% (₹${totalSavings})` : `Save ${savingsPct}% (₹${totalSavings})`}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {isHi
                      ? "सभी कर सहित • साह फूड इंडस्ट्रीज, सिलिगुड़ी"
                      : "Inclusive of all taxes • Sah Food Industries, Siliguri"}
                  </div>
                </div>

                {/* Quantity Counter */}
                <div className="flex items-center gap-2 bg-card border border-border rounded-xl p-1 shadow-2xs">
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

              {/* Clean Pack Size Selector (Standard Indian FMCG Market Sizes) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold uppercase tracking-wider text-muted-foreground text-[11px]">
                    {isHi ? "पैकेट साइज़ चुनें:" : "Select Pack Size:"}
                  </label>
                  <span className="text-primary font-bold text-xs">
                    {isHi ? activeVariant.sizeHi || activeVariant.size : activeVariant.size}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {variants.map((v, idx) => {
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
                            ₹{v.price} {isHi ? "पैक" : "Pack"}
                          </span>
                        )}
                        <div className="text-xs font-bold text-foreground truncate">
                          {isHi ? v.sizeHi || v.size : v.size}
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

              {/* Instant Action CTA Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-leaf hover:bg-leaf/90 text-leaf-foreground font-extrabold text-sm shadow-md transition-all duration-200 hover:scale-101 active:scale-98"
                >
                  <MessageCircle className="size-4" />
                  <span>
                    {isHi ? `व्हाट्सएप पर ऑर्डर करें (₹${totalPrice})` : `Order on WhatsApp (₹${totalPrice})`}
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onAddToBag(product, activeVariant, quantity)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-sm transition-all duration-200 hover:scale-101 active:scale-98 cursor-pointer"
                  >
                    <ShoppingBag className="size-4" />
                    <span>{isHi ? "ऑर्डर बैग में जोड़ें" : "Add to Order Bag"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("wholesale")}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-xs border border-border transition-all cursor-pointer"
                  >
                    <Store className="size-3.5 text-accent" />
                    <span>{isHi ? "थोक दरें (B2B)" : "Wholesale Cartons"}</span>
                  </button>
                </div>
              </div>

              {/* Interactive Multi-Tab Deep Details (Uncluttered & Structured) */}
              <div className="space-y-3 pt-3 border-t border-border/80">
                {/* Segmented Control */}
                <div className="grid grid-cols-4 gap-1 bg-muted/60 p-1 rounded-xl text-xs font-bold text-center">
                  <button
                    type="button"
                    onClick={() => setActiveTab("overview")}
                    className={`py-1.5 px-1 rounded-lg transition-all cursor-pointer text-[11px] truncate ${
                      activeTab === "overview" ? "bg-card text-foreground shadow-2xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isHi ? "खासियत" : "Highlights"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("recipe")}
                    className={`py-1.5 px-1 rounded-lg transition-all cursor-pointer text-[11px] truncate ${
                      activeTab === "recipe" ? "bg-card text-foreground shadow-2xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isHi ? "रेसिपी राज" : "Chef Tip"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("specs")}
                    className={`py-1.5 px-1 rounded-lg transition-all cursor-pointer text-[11px] truncate ${
                      activeTab === "specs" ? "bg-card text-foreground shadow-2xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isHi ? "सामग्री व लैब" : "Lab Specs"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("wholesale")}
                    className={`py-1.5 px-1 rounded-lg transition-all cursor-pointer text-[11px] truncate ${
                      activeTab === "wholesale" ? "bg-accent text-accent-foreground shadow-2xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isHi ? "थोक कार्टन" : "Wholesale"}
                  </button>
                </div>

                {/* TAB 1: HIGHLIGHTS & KEY BENEFITS */}
                {activeTab === "overview" && (
                  <div className="p-4 rounded-xl bg-card border border-border shadow-2xs space-y-3 animate-in fade-in duration-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {isHi ? "शुद्धता व स्वाद की 4 बड़ी विशेषताएं:" : "4 Pillars of City King Purity:"}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border flex items-start gap-2">
                        <Leaf className="size-4 text-leaf shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-foreground">
                            {isHi ? "कोल्ड-ग्राउंड ग्राइंडिंग" : "Low RPM Cold Milled"}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {isHi ? "प्राकृतिक आवश्यक तेल व औषधीय गुण सुरक्षित।" : "Locks natural volatile aromatic oils."}
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border flex items-start gap-2">
                        <ShieldCheck className="size-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-foreground">
                            {isHi ? "शून्य कृत्रिम रंग" : "Zero Synthetic Dyes"}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {isHi ? "सूडान डाई, लेड क्रोमेट व स्टार्च मिलावट मुक्त।" : "No Sudan dyes, lead chromate or starch."}
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border flex items-start gap-2">
                        <Truck className="size-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-foreground">
                            {isHi ? "सीधा सिलिगुड़ी प्रेषण" : "Direct Factory Dispatch"}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {isHi ? "एकतासाल बाइपास फैक्ट्री से 24–48 घंटे में।" : "Fresh batches dispatched within 24-48 hrs."}
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border flex items-start gap-2">
                        <Clock className="size-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-foreground">
                            {isHi ? "12 महीने फ्रेशनेस सील" : "12-Month Aroma Seal"}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {isHi ? "एयरटाइट पैकेजिंग खुशबू को ताज़ा रखती है।" : "Moisture-barrier multi-layer packaging."}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: CHEF RECIPE & SECRET TIPS */}
                {activeTab === "recipe" && (
                  <div className="p-4 rounded-xl bg-card border border-border shadow-2xs space-y-3 animate-in fade-in duration-200">
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
                      <div className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                        <Sparkles className="size-3.5 text-accent" />
                        <span>{isHi ? "शेफ मुकेश कुमार साह का खास सुझाव:" : "Chef Mukesh Kumar Sah’s Secret:"}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-5 text-[11px]">
                        {isHi ? product.cookingTipHi || product.cookingTip : product.cookingTip}
                      </p>
                    </div>

                    {product.recipeSteps && (
                      <div className="space-y-2">
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          {isHi ? "बनाने की 3 आसान विधियां:" : "3-Step Culinary Guide:"}
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          {(isHi && product.recipeStepsHi ? product.recipeStepsHi : product.recipeSteps).map((step, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-muted/30 border border-border">
                              <span className="inline-block size-5 rounded-full bg-primary text-primary-foreground text-center font-bold text-[10px] leading-5 mb-1">
                                {i + 1}
                              </span>
                              <p className="text-[11px] text-foreground leading-snug">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.bestPairing && (
                      <div className="text-[11px] text-muted-foreground flex items-center gap-2 pt-1 border-t border-border/60">
                        <UtensilsCrossed className="size-3.5 text-leaf shrink-0" />
                        <span>
                          <strong className="text-foreground">{isHi ? "इन व्यंजनों के साथ बेहतरीन:" : "Best paired with:"}</strong>{" "}
                          {isHi ? product.bestPairingHi || product.bestPairing : product.bestPairing}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: INGREDIENTS & LAB SPECS */}
                {activeTab === "specs" && (
                  <div className="p-4 rounded-xl bg-card border border-border shadow-2xs space-y-3 animate-in fade-in duration-200">
                    <div className="rounded-lg border border-border overflow-hidden text-xs">
                      <div className="grid grid-cols-3 p-2.5 bg-muted/40 font-bold text-muted-foreground border-b border-border">
                        <span>{isHi ? "मानक विवरण" : "Parameter"}</span>
                        <span className="col-span-2">{isHi ? "फैक्ट्री मानक" : "Factory Standard"}</span>
                      </div>
                      <div className="grid grid-cols-3 p-2.5 border-b border-border">
                        <span className="text-muted-foreground font-medium">{isHi ? "सामग्री" : "Ingredients"}</span>
                        <span className="col-span-2 font-semibold text-foreground">
                          {isHi ? product.ingredientsHi || product.ingredients : product.ingredients}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 p-2.5 border-b border-border">
                        <span className="text-muted-foreground font-medium">{isHi ? "शेल्फ लाइफ" : "Shelf Life"}</span>
                        <span className="col-span-2 font-semibold text-foreground">
                          {isHi ? product.shelfLifeHi || product.shelfLife : product.shelfLife}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 p-2.5 border-b border-border">
                        <span className="text-muted-foreground font-medium">{isHi ? "भंडारण" : "Storage"}</span>
                        <span className="col-span-2 text-foreground">
                          {isHi ? product.storageHi || product.storage : product.storage}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 p-2.5">
                        <span className="text-muted-foreground font-medium">{isHi ? "उत्पादक व पता" : "Facility Hub"}</span>
                        <span className="col-span-2 font-semibold text-foreground">
                          {site.fullAddress}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: WHOLESALE B2B & CARTONS */}
                {activeTab === "wholesale" && (
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 space-y-3 animate-in fade-in duration-200 text-xs">
                    <div className="flex items-center gap-2">
                      <Store className="size-4 text-accent" />
                      <h4 className="font-bold text-foreground">
                        {isHi ? "किराना व्यापारी व थोक डीलरशिप सप्लाई" : "Kirana Merchant & Dealership Supply"}
                      </h4>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      {isHi
                        ? "क्या आप पश्चिम बंगाल, बिहार या असम के किराना दुकानदार या डिस्ट्रीब्यूटर हैं? साह फूड इंडस्ट्रीज से सीधे थोक मास्टर कार्टन और ₹5 व ₹10 डिस्प्ले हैंगिंग लड़ी मंगवाएं।"
                        : "Direct factory supply of master corrugated cartons and ₹5 & ₹10 hanging display strips (24 pouches per strip) with fast road transport across Bengal, Bihar, and Assam."}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded bg-card border border-border">
                        <span className="font-bold text-foreground">₹5 & ₹10 Hanging Strips</span>
                        <p className="text-muted-foreground">24 pcs per counter strip.</p>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <span className="font-bold text-foreground">Master Outer Cartons</span>
                        <p className="text-muted-foreground">12 to 48 boxes per carton.</p>
                      </div>
                    </div>

                    <a
                      href={getWholesaleB2BUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground font-bold text-xs shadow-xs"
                    >
                      <MessageCircle className="size-3.5" />
                      <span>{isHi ? "थोक रेट कार्ड व्हाट्सएप पर मांगें" : "Request Wholesale Rate Card on WhatsApp"}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Strip */}
        <div className="px-5 py-3 bg-muted/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Award className="size-3.5 text-primary" />
            <span>Sah Food Industries • Founder Mukesh Kumar Sah</span>
          </div>

          <Link
            to="/products"
            onClick={onClose}
            className="inline-flex items-center gap-1 font-bold text-primary hover:underline cursor-pointer"
          >
            <span>{isHi ? "पूरा कैटलॉग देखें" : "View Full Catalog"}</span>
            <ChevronRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
