import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Eye,
  MessageCircle,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { products, type Product } from "@/data/products";
import { site, waLink, waMessages } from "@/data/site";
import { addToOrderBag } from "@/components/SmartOrderDrawer";
import heroImg from "@/assets/texture-spice-dark.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Masala Catalog | City King Spices | Sah Food Industries Siliguri | cityking.in" },
      {
        name: "description",
        content:
          "Shop City King Spices complete masala catalog by Sah Food Industries (cityking.in). 100% pure cold-ground Haldi Powder, Mirchi Powder, Dhaniya Powder, Jeera Powder, Sabji Masala, Chicken Masala, Meat Masala, Fish Curry Masala, Garam Masala, Kitchen King Masala, Biryani Masala and premium CTC Chai Patti — direct from Ektiasal Eastern Bypass Road, Siliguri, Jalpaiguri, West Bengal.",
      },
      {
        name: "keywords",
        content:
          "City King Products, Haldi Powder Siliguri, Mirchi Powder Siliguri, Dhaniya Powder, Jeera Powder, Sabji Masala, Chicken Masala, Meat Masala, Fish Curry Masala, Garam Masala, Kitchen King Masala, Biryani Masala, Kashmiri Mirch Powder, Paneer Masala, CTC Chai Patti, Spices Catalog Siliguri, Mukesh Masale, City King Masala Online, Sah Food Industries Products, cityking.in products",
      },
      { property: "og:title", content: "Products & Masala Catalog | City King Spices (cityking.in)" },
      {
        property: "og:description",
        content:
          "Complete catalog of City King pure spices, blended masalas and CTC tea manufactured by Sah Food Industries, Siliguri, West Bengal.",
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

type FilterType = "all" | "masala" | "spice-powder" | "tea";

function ProductsPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: "all", label: "All Products" },
    { id: "masala", label: "Masala" },
    { id: "spice-powder", label: "Spice Powder" },
    { id: "tea", label: "Tea" },
  ];

  const filteredProducts = products.filter((p) => {
    let matchesFilter = true;
    if (selectedFilter === "masala") {
      matchesFilter = p.category === "blended-masalas";
    } else if (selectedFilter === "spice-powder") {
      matchesFilter = p.category === "powdered-spices" || p.category === "everyday-spices";
    } else if (selectedFilter === "tea") {
      matchesFilter = p.category === "tea";
    }

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      (p.hindiName && p.hindiName.includes(q)) ||
      p.description.toLowerCase().includes(q);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HEADER HERO */}
        <section className="relative py-16 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src={heroImg} alt="City King Spice Range" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-cocoa/85" />
          </div>

          <div className="container-page relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>Explore Our Products</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              City King Spices & Masalas
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              Authentic Indian spices, aromatic masala blends and fine CTC tea crafted by Sah Food Industries, Siliguri.
            </p>
          </div>
        </section>

        {/* CONTROLS & CATALOG */}
        <section className="py-12">
          <div className="container-page space-y-8">
            {/* Search and Filters Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {filterTabs.map((tab) => {
                  const isActive = selectedFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedFilter(tab.id)}
                      className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm scale-100"
                          : "bg-background text-muted-foreground hover:text-foreground border border-border"
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
                  placeholder="Search spices (e.g. Haldi, Jeera)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Results Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-card rounded-2xl border border-dashed border-border space-y-3">
                <Package className="size-12 text-muted-foreground mx-auto" />
                <h3 className="text-lg font-bold font-display">No spices found</h3>
                <p className="text-sm text-muted-foreground">
                  Try searching with a different keyword or selecting another filter category.
                </p>
                <button
                  onClick={() => {
                    setSelectedFilter("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-semibold text-primary underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((p, idx) => (
                  <Reveal key={p.id} delay={idx * 50}>
                    <div className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lift transition-all duration-300">
                      {/* Product Image Stage (contain fit) */}
                      <div className="relative aspect-4/3 bg-gradient-to-b from-muted/30 to-muted/80 p-6 flex items-center justify-center overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="max-h-full w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-400"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          {p.hindiName && (
                            <span className="inline-flex items-center rounded-full bg-cocoa/90 backdrop-blur-md px-3 py-0.5 text-xs font-bold text-accent">
                              {p.hindiName}
                            </span>
                          )}
                        </div>

                        {/* Quick View Trigger on Hover */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => addToOrderBag(p.slug)}
                            className="inline-flex items-center gap-1 rounded-full bg-background/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-foreground border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                            title="Add to WhatsApp Order Bag"
                          >
                            <Plus className="size-3.5 text-accent" />
                            <span>Add</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveProduct(p)}
                            className="inline-flex items-center gap-1 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity border border-border shadow-sm hover:bg-accent hover:text-accent-foreground"
                          >
                            <Eye className="size-3.5" />
                            <span>View</span>
                          </button>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {p.description}
                          </p>

                          {p.sizes && p.sizes.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {p.sizes.map((s) => (
                                <span
                                  key={s}
                                  className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-muted text-foreground border border-border/60"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="pt-4 border-t border-border space-y-3">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-3.5 text-leaf shrink-0" />
                            <span>100% Pure & Freshly Ground</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setActiveProduct(p)}
                              className="inline-flex items-center justify-center rounded-full border border-border hover:border-primary px-3 py-2.5 text-xs font-semibold text-foreground transition-colors"
                            >
                              View Product
                            </button>

                            <a
                              href={waLink(waMessages.product(p.name))}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-leaf hover:bg-leaf/90 text-leaf-foreground px-3 py-2.5 rounded-full shadow-sm transition-transform active:scale-95"
                              aria-label={`Enquire about ${p.name} on WhatsApp`}
                            >
                              <MessageCircle className="size-3.5" />
                              <span>Enquire</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* PRODUCT DETAILS MODAL */}
        {activeProduct && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveProduct(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 z-10 size-10 rounded-full bg-muted text-foreground hover:bg-muted-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Close product view"
              >
                <X className="size-5" />
              </button>

              <div className="grid sm:grid-cols-2">
                <div className="bg-muted/40 p-8 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-border">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="max-h-64 max-w-full object-contain"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    {activeProduct.hindiName && (
                      <span className="inline-block text-xs font-bold text-accent px-3 py-1 rounded-full bg-cocoa">
                        {activeProduct.hindiName}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold font-display text-foreground">
                      {activeProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activeProduct.description}
                    </p>

                    {activeProduct.sizes && activeProduct.sizes.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                          Available Packaging Sizes:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProduct.sizes.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-bold px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="size-4 text-leaf" />
                      <span>Natural Oils & Aroma Preserved</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="size-4 text-leaf" />
                      <span>Zero Adulteration or Artificial Dyes</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          addToOrderBag(activeProduct.slug);
                          setActiveProduct(null);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 text-xs font-semibold shadow-sm transition-transform active:scale-95"
                      >
                        <ShoppingBag className="size-3.5" />
                        <span>Add to Bag</span>
                      </button>

                      <a
                        href={waLink(waMessages.product(activeProduct.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground py-3 px-4 text-xs font-semibold shadow-md transition-transform active:scale-95"
                      >
                        <MessageCircle className="size-3.5" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

