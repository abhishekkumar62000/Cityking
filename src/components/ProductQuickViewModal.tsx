import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Flame,
  Heart,
  Info,
  Leaf,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Truck,
  UtensilsCrossed,
  X,
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
  const { lang } = useLanguage();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeAccordion, setActiveAccordion] = useState<"none" | "recipe" | "specs" | "wholesale">("none");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  if (!product) return null;

  const variants = product.variants && product.variants.length > 0
    ? product.variants
    : [
        { size: "5g Mini Sachet", weightGrams: 5, price: 5, mrp: 6, type: "pouch" as const },
        { size: "10g Chota Pack", weightGrams: 10, price: 10, mrp: 12, type: "pouch" as const, isPopular: true },
        { size: "50g Box Pack", weightGrams: 50, price: 34, mrp: 42, type: "box" as const },
        { size: "100g Fresh Pouch", weightGrams: 100, price: 65, mrp: 80, type: "pouch" as const },
        { size: "200g Box Pack", weightGrams: 200, price: 125, mrp: 155, type: "box" as const },
      ];

  const activeVariant = variants[selectedVariantIdx] || variants[0];
  const totalPrice = activeVariant.price * quantity;
  const totalMrp = activeVariant.mrp * quantity;
  const totalSavings = totalMrp - totalPrice;
  const savingsPct = Math.round(((activeVariant.mrp - activeVariant.price) / activeVariant.mrp) * 100);

  // Formatted WhatsApp order message
  const getWhatsAppOrderUrl = () => {
    const msg =
      `*ORDER ENQUIRY - CITY KING SPICES (SILIGURI FACTORY)*\n\n` +
      `📦 *Item:* ${product.name}\n` +
      `🏷️ *Hindi:* ${product.hindiName}\n` +
      `⚖️ *Selected Pack:* ${activeVariant.size}\n` +
      `🔢 *Quantity:* ${quantity} pack(s)\n` +
      `💰 *Total Price:* ₹${totalPrice} (MRP ₹${totalMrp} - Save ${savingsPct}%)\n` +
      `🏭 *Factory:* Sah Food Industries, Ektiasal Bypass, Siliguri, WB\n\n` +
      `Please confirm stock availability and factory dispatch details.`;
    return waLink(site.whatsapp, msg);
  };

  // Formatted Wholesale B2B WhatsApp inquiry
  const getWholesaleB2BUrl = () => {
    const msg =
      `*WHOLESALE DEALERSHIP ENQUIRY - CITY KING MASALA*\n\n` +
      `Hello Mukesh Ji,\nI am a retailer/distributor and want bulk master carton supply of *${product.name}* (${product.hindiName}).\n\n` +
      `Please share wholesale carton rate card, ₹5 & ₹10 hanging strip availability, and minimum order quantity for factory transport from Siliguri.`;
    return waLink(site.whatsapp, msg);
  };

  const toggleAccordion = (name: "recipe" | "specs" | "wholesale") => {
    setActiveAccordion((prev) => (prev === name ? "none" : name));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-card rounded-t-3xl sm:rounded-3xl border border-border/80 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-card/95 backdrop-blur-md border-b border-border/70 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-extrabold text-primary tracking-wider uppercase text-[11px]">
              City King Spices
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="text-muted-foreground font-medium">{product.categoryLabel}</span>
            <span className="text-muted-foreground/40">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-leaf">
              <span className="size-1.5 rounded-full bg-leaf animate-pulse" />
              <span>Factory Fresh In Stock</span>
            </span>
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

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Side: Product Image & Refined Highlights (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              {/* Product Visual Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-muted/35 via-muted/15 to-card p-6 flex flex-col items-center justify-center border border-border/80 min-h-[250px] sm:min-h-[300px] overflow-hidden group">
                {product.tag && (
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full text-white tracking-wider shadow-xs ${
                      product.tagColor || "bg-primary"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 sm:h-64 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-106"
                />

                {/* Guarantee Stamp */}
                <div className="absolute bottom-3 right-3 bg-background/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-border text-[10px] font-bold text-foreground flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="size-3.5 text-leaf" />
                  <span>100% Pure Raw Spices</span>
                </div>
              </div>

              {/* Clean Sensory Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-card border border-border shadow-2xs flex items-center gap-2">
                  <Flame className="size-4 text-red-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-muted-foreground">Spice Heat</div>
                    <div className="font-bold text-foreground">
                      {product.spiceLevel ? `${product.spiceLevel}/5 Heat` : "Balanced"}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-card border border-border shadow-2xs flex items-center gap-2">
                  <Sparkles className="size-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-[10px] text-muted-foreground">Natural Oils</div>
                    <div className="font-bold text-foreground">Cold Preserved</div>
                  </div>
                </div>
              </div>

              {/* Dispatch Pill */}
              <div className="p-3 rounded-xl bg-leaf/10 border border-leaf/20 flex items-center gap-2.5 text-xs text-leaf-foreground">
                <Truck className="size-4 text-leaf shrink-0" />
                <span className="font-semibold text-[11px] leading-tight">
                  Direct factory dispatch from Siliguri within 24–48 hours.
                </span>
              </div>
            </div>

            {/* Right Side: Clean E-Commerce Purchase Flow (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              {/* Title & Hindi Badge */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary font-hindi">
                    {product.hindiName}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="size-3.5 fill-amber-500" />
                    <span>{product.rating || 4.9}</span>
                    <span className="text-muted-foreground font-normal">
                      ({product.reviewCount || 1200}+ reviews)
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground leading-snug">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {product.short}
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
                        Save {savingsPct}% (₹{totalSavings})
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Inclusive of all taxes • Mfd in Siliguri, West Bengal
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
                    Select Pack Size (पैकेट साइज़ चुनें):
                  </label>
                  <span className="text-primary font-bold text-xs">
                    {activeVariant.size}
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
                            ₹{v.price} Pack
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

              {/* Instant Action CTA Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-leaf hover:bg-leaf/90 text-leaf-foreground font-extrabold text-sm shadow-md transition-all duration-200 hover:scale-101 active:scale-98"
                >
                  <MessageCircle className="size-4" />
                  <span>Order on WhatsApp (₹{totalPrice})</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onAddToBag(product, activeVariant, quantity)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-sm transition-all duration-200 hover:scale-101 active:scale-98 cursor-pointer"
                  >
                    <ShoppingBag className="size-4" />
                    <span>Add to Order Bag</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleAccordion("wholesale")}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-bold text-xs border border-border transition-all cursor-pointer"
                  >
                    <Store className="size-3.5 text-accent" />
                    <span>Wholesale Cartons</span>
                  </button>
                </div>
              </div>

              {/* Clean Accordions for Secondary Details (Keeps UI Uncluttered) */}
              <div className="space-y-2 pt-2 border-t border-border/70">
                {/* Accordion 1: Chef Recipe Tip */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion("recipe")}
                    className="w-full p-3 bg-muted/20 hover:bg-muted/40 flex items-center justify-between text-xs font-bold text-foreground transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="size-3.5 text-accent" />
                      <span>Chef’s Secret Culinary Tip</span>
                    </span>
                    <ChevronDown
                      className={`size-4 text-muted-foreground transition-transform duration-200 ${
                        activeAccordion === "recipe" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === "recipe" && (
                    <div className="p-3.5 bg-card text-xs text-muted-foreground space-y-2 border-t border-border">
                      <p className="leading-relaxed text-foreground">
                        {product.cookingTip}
                      </p>
                      {product.bestPairing && (
                        <div className="text-[11px] text-primary font-medium flex items-center gap-1.5">
                          <UtensilsCrossed className="size-3 text-leaf" />
                          <span>Best paired with: {product.bestPairing}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Accordion 2: Ingredients & Purity Specs */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion("specs")}
                    className="w-full p-3 bg-muted/20 hover:bg-muted/40 flex items-center justify-between text-xs font-bold text-foreground transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="size-3.5 text-leaf" />
                      <span>Ingredients & Quality Guarantee</span>
                    </span>
                    <ChevronDown
                      className={`size-4 text-muted-foreground transition-transform duration-200 ${
                        activeAccordion === "specs" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === "specs" && (
                    <div className="p-3.5 bg-card text-xs text-muted-foreground space-y-2 border-t border-border">
                      <div className="grid grid-cols-3 gap-2 py-1 border-b border-border/60">
                        <span className="font-medium text-muted-foreground">Ingredients:</span>
                        <span className="col-span-2 text-foreground font-semibold">
                          {product.ingredients || "100% Pure Raw Spices"}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-1 border-b border-border/60">
                        <span className="font-medium text-muted-foreground">Shelf Life:</span>
                        <span className="col-span-2 text-foreground font-semibold">
                          {product.shelfLife || "12 Months from Mfd"}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-1">
                        <span className="font-medium text-muted-foreground">Facility:</span>
                        <span className="col-span-2 text-foreground font-semibold">
                          Sah Food Industries, Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling, WB
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Wholesale B2B Inquiries */}
                {activeAccordion === "wholesale" && (
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-xs space-y-2 animate-in fade-in">
                    <div className="flex items-center gap-2 font-bold text-foreground">
                      <Store className="size-4 text-accent" />
                      <span>Kirana Merchant & Dealership Supply</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[11px]">
                      Master cartons of ₹5 and ₹10 display hanging strips (24 pouches per strip) and bulk outer boxes available with factory transport across Bengal, Bihar, and Assam.
                    </p>
                    <a
                      href={getWholesaleB2BUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-accent-foreground font-bold text-xs shadow-xs"
                    >
                      <MessageCircle className="size-3.5" />
                      <span>Inquire Wholesale Rate Card on WhatsApp</span>
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
            <span>Full Catalog</span>
            <ChevronRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
