import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Check,
  Eye,
  Flame,
  Heart,
  Package,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Truck,
  X,
} from "lucide-react";
import { products, type Product, type ProductVariant } from "@/data/products";
import { ProductQuickViewModal } from "@/components/ProductQuickViewModal";
import { useLanguage } from "@/context/LanguageContext";

export function BestSellerSection() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToOrder = (product: Product, variant: ProductVariant, quantity: number) => {
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

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          item.name.toLowerCase().includes(q) ||
          item.hindiName.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.short.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      // Filter tabs
      if (activeCategory === "all") return true;
      if (activeCategory === "pouches") {
        return item.variants?.some((v) => v.price <= 10) ?? false;
      }
      if (activeCategory === "non-veg") {
        return item.category === "non-veg-masalas";
      }
      if (activeCategory === "veg-blends") {
        return item.category === "blended-masalas" || item.category === "royal-blends";
      }
      if (activeCategory === "everyday") {
        return item.category === "everyday-spices";
      }
      if (activeCategory === "tea") {
        return item.category === "tea";
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Flame className="size-3.5 text-primary animate-pulse" />
              <span>{lang === "hi" ? "सर्वाधिक लोकप्रिय मसाले" : "Flagship Best Sellers"}</span>
              <span className="text-primary/40">•</span>
              <span className="text-foreground font-semibold">
                {lang === "hi" ? "18+ शुद्ध मसाले • ₹5 से शुरू" : "18+ Products • Starting @ ₹5/-"}
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
                ? "चिकन, मटन, बिरयानी, फिश, गरम मसाला से लेकर हल्दी, मिर्ची, धनिया तक — सिलिगुड़ी फैक्ट्री से सीधे शुद्ध, कोल्ड-ग्राउंड मसाले। छोटे 5 ग्राम पाउच (₹5) से लेकर 1 किग्रा बल्क पैक तक।"
                : "From royal Chicken, Mutton, Biryani & Fish Curry to everyday Haldi, Mirchi & CTC Tea. Cold-ground at low temperatures in Siliguri to lock natural essential oils. Available from ₹5 mini pouches to 1kg wholesale packs."}
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
            { id: "all", label: lang === "hi" ? "सभी मसाले (18+)" : "All Best Sellers (18+)" },
            { id: "pouches", label: lang === "hi" ? "₹5 और ₹10 पाउच" : "₹5 & ₹10 Mini Pouches" },
            { id: "non-veg", label: lang === "hi" ? "चिकन, मटन, बिरयानी, फिश" : "Non-Veg Curries" },
            { id: "veg-blends", label: lang === "hi" ? "सब्जी, पनीर, गरम मसाला" : "Veg & Royal Blends" },
            { id: "everyday", label: lang === "hi" ? "हल्दी, मिर्ची, धनिया, जीरा" : "Everyday Spices" },
            { id: "tea", label: lang === "hi" ? "रॉयल सीटीसी चाय" : "Chai & Tea" },
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
            const minPrice = product.variants ? Math.min(...product.variants.map((v) => v.price)) : 5;
            const maxPrice = product.variants ? Math.max(...product.variants.map((v) => v.price)) : 100;
            const isFav = wishlist[product.id];

            return (
              <div
                key={product.id}
                className="group relative bg-card dark:bg-card/95 rounded-2xl border border-border/80 hover:border-primary/60 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Top Image Container */}
                <div className="relative p-3.5 sm:p-4 flex flex-col items-center justify-center bg-gradient-to-b from-muted/25 via-background to-background min-h-[190px] sm:min-h-[220px]">
                  {/* Floating Tag */}
                  {product.tag && (
                    <span
                      className={`absolute top-2.5 left-2.5 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full text-white tracking-wider shadow-xs z-10 ${
                        product.tagColor || "bg-primary"
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}

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
                    onClick={() => setSelectedProduct(product)}
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
                          setSelectedProduct(product);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 hover:bg-black text-white text-xs font-bold shadow-lg backdrop-blur-xs transition-transform duration-200 hover:scale-105"
                      >
                        <Eye className="size-3.5 text-accent" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dark Action Button (ADD TO CART / QUICK SHOP) */}
                <div className="px-3 sm:px-4 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
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
                        <span>{product.rating || 4.9}</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-display font-semibold text-xs sm:text-sm text-foreground line-clamp-1 hover:text-primary transition-colors cursor-pointer"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Pack size chips snippet */}
                    <div className="flex flex-wrap gap-1 mt-1.5 mb-2">
                      {product.variants?.slice(0, 3).map((v, i) => (
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
                      {product.variants && product.variants.length > 3 && (
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
                    {product.spiceLevel && (
                      <div
                        className="flex items-center gap-0.5 text-[11px]"
                        title={`Spice Heat: ${product.spiceLevel}/5`}
                      >
                        {Array.from({ length: Math.min(3, product.spiceLevel) }).map((_, idx) => (
                          <Flame key={idx} className="size-3 text-red-500 fill-red-500" />
                        ))}
                      </div>
                    )}
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
          ULTRA-PREMIUM, NON-MESSY PRODUCT QUICK VIEW MODAL
         ========================================================================= */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToBag={(prod, variant, qty) => {
          handleAddToOrder(prod, variant, qty);
        }}
      />
    </section>
  );
}
