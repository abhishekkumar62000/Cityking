import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Check,
  Eye,
  Flame,
  Heart,
  MessageCircle,
  Package,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Truck,
  X,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { products, type Product, type ProductVariant } from "@/data/products";
import { ProductQuickViewModal } from "@/components/ProductQuickViewModal";
import { useLanguage } from "@/context/LanguageContext";
import heroImg from "@/assets/texture-spice-dark.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Masala Catalog | City King Spices | Sah Food Industries Siliguri | cityking.in" },
      {
        name: "description",
        content:
          "Shop City King Spices complete 18+ masala catalog by Sah Food Industries (cityking.in). 100% pure cold-ground Haldi Powder, Mirchi Powder, Dhaniya Powder, Jeera Powder, Sabji Masala, Chicken Masala, Mutton Masala, Meat Masala, Fish Curry Masala, Garam Masala, Kitchen King Masala, Biryani Masala, Kashmiri Mirch, and premium CTC Chai Patti. Available in ₹5 & ₹10 mini pouches to 1kg wholesale packs from Siliguri, West Bengal.",
      },
      {
        name: "keywords",
        content:
          "City King Products, Haldi Powder Siliguri, Mirchi Powder Siliguri, Dhaniya Powder, Jeera Powder, Sabji Masala, Chicken Masala, Mutton Masala, Meat Masala, Fish Curry Masala, Garam Masala, Kitchen King Masala, Biryani Masala, Kashmiri Mirch Powder, Paneer Masala, CTC Chai Patti, Spices Catalog Siliguri, Mukesh Masale, City King Masala Online, Sah Food Industries Products, cityking.in products",
      },
      { property: "og:title", content: "Products & Masala Catalog | City King Spices (cityking.in)" },
      {
        property: "og:description",
        content:
          "Complete catalog of 18+ City King pure spices, blended masalas and CTC tea manufactured by Sah Food Industries, Siliguri, West Bengal.",
      },
      { property: "og:url", content: "https://citykingspices.in/products" },
      { property: "og:image", content: "https://citykingspices.in/Cityking%20Haldi%20Powder%20Masala.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "City King Spices Products — Sah Food Industries Siliguri" },
      { name: "twitter:description", content: "100% pure cold-ground spices, masalas and CTC tea direct from Siliguri." },
      { name: "twitter:image", content: "https://citykingspices.in/Cityking%20Haldi%20Powder%20Masala.png" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: "https://citykingspices.in/products" }],
  }),
  component: ProductsPage,
});

type FilterType = "all" | "pouches" | "non-veg" | "blended" | "everyday" | "tea";

function ProductsPage() {
  const { lang } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: "all", label: lang === "hi" ? "सभी मसाले (18+)" : "All Products (18+)" },
    { id: "pouches", label: lang === "hi" ? "₹5 और ₹10 पाउच" : "₹5 & ₹10 Mini Pouches" },
    { id: "non-veg", label: lang === "hi" ? "चिकन, मटन, बिरयानी, फिश" : "Non-Veg Curries" },
    { id: "blended", label: lang === "hi" ? "सब्जी, पनीर, गरम मसाला" : "Blended Masalas" },
    { id: "everyday", label: lang === "hi" ? "हल्दी, मिर्ची, धनिया, जीरा" : "Everyday Spices" },
    { id: "tea", label: lang === "hi" ? "रॉयल सीटीसी चाय" : "Chai & Tea" },
  ];

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

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.hindiName && p.hindiName.includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      // Filter tabs
      if (selectedFilter === "all") return true;
      if (selectedFilter === "pouches") {
        return p.variants?.some((v) => v.price <= 10) ?? false;
      }
      if (selectedFilter === "non-veg") {
        return p.category === "non-veg-masalas";
      }
      if (selectedFilter === "blended") {
        return p.category === "blended-masalas" || p.category === "royal-blends";
      }
      if (selectedFilter === "everyday") {
        return p.category === "everyday-spices";
      }
      if (selectedFilter === "tea") {
        return p.category === "tea";
      }

      return true;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HEADER HERO */}
        <section className="relative py-16 sm:py-20 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src={heroImg} alt="City King Spice Range" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-cocoa/85" />
          </div>

          <div className="container-page relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent shadow-xs">
              <Sparkles className="size-3.5" />
              <span>{lang === "hi" ? "सिलिगुड़ी का शुद्ध मसाला कैटलॉग" : "Official Spices & Masala Catalog"}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight tracking-tight">
              {lang === "hi" ? "सिटी किंग मसाले एवं चाय" : "City King Spices & Masalas"}
            </h1>
            <p className="text-cocoa-foreground/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {lang === "hi"
                ? "साह फूड इंडस्ट्रीज, सिलीगुड़ी द्वारा तैयार 100% शुद्ध कोल्ड-ग्राउंड मसाले। 5 ग्राम (₹5) व 10 ग्राम (₹10) मिनी पाउच से लेकर 1 किग्रा मास्टर बल्क कार्टन तक।"
                : "100% pure cold-ground spices, aromatic blended masalas, and high-grown CTC tea crafted by Sah Food Industries, Siliguri. Available from ₹5 trial pouches to 1kg wholesale cartons."}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-cocoa-foreground/90">
              <span className="flex items-center gap-1.5 text-accent">
                <ShieldCheck className="size-4" /> 100% Pure Raw Spices
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-leaf">
                <Truck className="size-4" /> Direct Siliguri Factory
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white">
                <Tag className="size-4" /> Starting @ ₹5/-
              </span>
            </div>
          </div>
        </section>

        {/* CONTROLS & CATALOG */}
        <section className="py-12 sm:py-16">
          <div className="container-page space-y-8">
            {/* Search and Filters Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border shadow-xs">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                {filterTabs.map((tab) => {
                  const isActive = selectedFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedFilter(tab.id)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm scale-102 ring-2 ring-primary/30"
                          : "bg-background text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={lang === "hi" ? "मसाला खोजें (चिकन, हल्दी, मटन)..." : "Search spices (Chicken, Haldi, Biryani)..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 rounded-full text-xs sm:text-sm bg-background border border-border focus:border-primary focus:outline-none transition-colors shadow-2xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Results Grid (Kitchen Choice Style + Ultra-Luxurious Cards) */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-card rounded-3xl border border-dashed border-border space-y-3">
                <Package className="size-12 text-muted-foreground mx-auto" />
                <h3 className="text-lg font-bold font-display">No spices found</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Try searching with a different keyword or selecting another filter category.
                </p>
                <button
                  onClick={() => {
                    setSelectedFilter("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-5">
                {filteredProducts.map((p, idx) => {
                  const minPrice = p.variants ? Math.min(...p.variants.map((v) => v.price)) : 5;
                  const maxPrice = p.variants ? Math.max(...p.variants.map((v) => v.price)) : 100;
                  const isFav = wishlist[p.id];

                  return (
                    <Reveal key={p.id} delay={idx * 30}>
                      <div
                        itemScope
                        itemType="https://schema.org/Product"
                        className="group relative bg-card dark:bg-card/95 rounded-2xl border border-border/80 hover:border-primary/60 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 h-full"
                      >
                        <meta itemProp="name" content={p.name} />
                        <meta itemProp="description" content={p.description} />
                        <meta itemProp="image" content={`https://citykingspices.in${p.image}`} />

                        {/* Top Image Container */}
                        <div className="relative p-3.5 sm:p-4 flex flex-col items-center justify-center bg-gradient-to-b from-muted/25 via-background to-background min-h-[190px] sm:min-h-[220px]">
                          {/* Floating Tag */}
                          {p.tag && (
                            <span
                              className={`absolute top-2.5 left-2.5 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full text-white tracking-wider shadow-xs z-10 ${
                                p.tagColor || "bg-primary"
                              }`}
                            >
                              {p.tag}
                            </span>
                          )}

                          {/* Floating Wishlist Heart */}
                          <button
                            type="button"
                            onClick={(e) => toggleWishlist(p.id, e)}
                            className="absolute top-2.5 right-2.5 size-7 sm:size-8 rounded-full bg-background/90 hover:bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 transition-colors shadow-xs z-10"
                            aria-label="Add to Wishlist"
                          >
                            <Heart
                              className={`size-3.5 sm:size-4 transition-transform duration-200 ${
                                isFav ? "fill-red-500 text-red-500 scale-110" : "hover:scale-110"
                              }`}
                            />
                          </button>

                          {/* Product Image */}
                          <div
                            onClick={() => setSelectedProduct(p)}
                            className="relative cursor-pointer w-full flex items-center justify-center py-2"
                          >
                            <img
                              src={p.image}
                              alt={p.name}
                              loading="lazy"
                              className="h-32 sm:h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                            />

                            {/* Quick View Hover Button */}
                            <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:pointer-events-auto">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProduct(p);
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 hover:bg-black text-white text-xs font-bold shadow-lg backdrop-blur-xs transition-transform duration-200 hover:scale-105"
                              >
                                <Eye className="size-3.5 text-accent" />
                                <span>Quick View</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Dark Action Button (QUICK SHOP) */}
                        <div className="px-3 sm:px-4 pt-1">
                          <button
                            type="button"
                            onClick={() => setSelectedProduct(p)}
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
                                {p.hindiName}
                              </span>
                              <div className="flex items-center gap-0.5 text-[11px] font-bold text-amber-500 shrink-0">
                                <Star className="size-3 fill-amber-500" />
                                <span>{p.rating || 4.9}</span>
                              </div>
                            </div>

                            {/* Product Title */}
                            <h3
                              onClick={() => setSelectedProduct(p)}
                              className="font-display font-semibold text-xs sm:text-sm text-foreground line-clamp-1 hover:text-primary transition-colors cursor-pointer"
                              title={p.name}
                            >
                              {p.name}
                            </h3>

                            {/* Pack size chips snippet */}
                            <div className="flex flex-wrap gap-1 mt-1.5 mb-2">
                              {p.variants?.slice(0, 3).map((v, i) => (
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
                              {p.variants && p.variants.length > 3 && (
                                <span className="text-[9px] sm:text-[10px] text-muted-foreground px-1 py-0.5">
                                  +{p.variants.length - 3}
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
                            {p.spiceLevel && (
                              <div
                                className="flex items-center gap-0.5 text-[11px]"
                                title={`Spice Heat: ${p.spiceLevel}/5`}
                              >
                                {Array.from({ length: Math.min(3, p.spiceLevel) }).map((_, i) => (
                                  <Flame key={i} className="size-3 text-red-500 fill-red-500" />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Added Notification Toast */}
        {addedNotice && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-zinc-950 text-white border border-border px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold animate-in fade-in slide-in-from-bottom duration-200">
            <Check className="size-4 text-leaf" />
            <span>{addedNotice}</span>
          </div>
        )}

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
      </main>

      <Footer />
    </div>
  );
}
