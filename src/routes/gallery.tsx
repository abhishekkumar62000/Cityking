import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Search,
  Sparkles,
  X,
  ZoomIn,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { waLink } from "@/data/site";
import heroImg from "@/assets/hero-spices.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "City King Masala Gallery — 33+ Product Photos | Sah Food Industries Siliguri | cityking.in" },
      {
        name: "description",
        content:
          "Official photo gallery of City King Spices (cityking.in / citykingspices.in): 33+ authentic masala pouches, packaging boxes (Haldi, Mirchi, Dhaniya, Jeera, Chicken, Meat, Garam, Biryani, Fish Masala), premium CTC tea, and company journey moments from Sah Food Industries, Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling.",
      },
      {
        name: "keywords",
        content:
          "City King Gallery, City King Masala Photos, City King Spices Packaging, Chicken Masala Pouch, Meat Masala Pouch, Garam Masala Pouch, Biryani Masala Pack, Fish Curry Masala, Kitchen King Masala, Kashmiri Mirch Powder, Haldi Mirchi Dhania Jeera Pouch, Mukesh Masale Photos, Sah Food Industries Siliguri Gallery, cityking.in gallery, citykingspices.in photos, Mukesh Kumar Sah Company Photos",
      },
      { property: "og:title", content: "City King Masala Official Gallery — Sah Food Industries Siliguri" },
      {
        property: "og:description",
        content:
          "33+ official photos of City King spices packaging pouches, boxes, whole spices, and company journey moments from Sah Food Industries Siliguri.",
      },
      { property: "og:url", content: "https://citykingspices.in/gallery" },
      { property: "og:image", content: "https://citykingspices.in/new-gallery/IMG-20261105-WA0000.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "City King Masala Gallery | Sah Food Industries Siliguri" },
      { name: "twitter:description", content: "33+ official product packaging photos from City King Spices, Siliguri." },
      { name: "twitter:image", content: "https://citykingspices.in/new-gallery/IMG-20261105-WA0000.jpg" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: "https://citykingspices.in/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const selectedPhoto =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1,
    );
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative py-16 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src={heroImg}
              alt="City King Visual Experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cocoa/85" />
          </div>

          <div className="container-page relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>Official Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              City King in Pictures
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              Explore our full range of official masala pouches, retail boxes, whole spices,
              and authentic company moments from Sah Food Industries, Siliguri.
            </p>
          </div>
        </section>

        {/* TABS, SEARCH & MASONRY GALLERY */}
        <section className="py-12">
          <div className="container-page space-y-8">
            {/* Search and Category Filter Bar */}
            <div className="flex flex-col items-center gap-4">
              {/* Search Bar */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search spices or packs (e.g. Chicken, Haldi, Biryani)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {galleryCategories.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? galleryItems.length
                      : galleryItems.filter((i) => i.category === cat.id).length;
                  if (count === 0 && cat.id !== "all") return null;

                  const isActive = activeTab === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-card text-muted-foreground hover:text-foreground border border-border"
                      }`}
                    >
                      {cat.label} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Counter if searching */}
            {searchQuery && (
              <p className="text-center text-xs text-muted-foreground">
                Showing {filteredItems.length} photos matching "{searchQuery}"
              </p>
            )}

            {/* True Responsive Masonry Grid */}
            {filteredItems.length > 0 ? (
              <div className="masonry-grid" itemScope itemType="https://schema.org/ImageGallery">
                {filteredItems.map((item, idx) => (
                  <div key={item.id} className="masonry-item" itemScope itemType="https://schema.org/ImageObject">
                    <Reveal delay={Math.min(idx * 20, 200)}>
                      <div
                        onClick={() => setSelectedIndex(idx)}
                        className="group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer shadow-sm hover:shadow-lift transition-all duration-300"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          title={item.alt}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          loading={idx < 6 ? "eager" : "lazy"}
                          decoding={idx < 6 ? "auto" : "async"}
                          itemProp="contentUrl"
                        />
                        <meta itemProp="name" content={item.alt} />
                        <meta itemProp="description" content={`${item.alt} — Manufactured by Sah Food Industries (City King Spices), Siliguri, West Bengal.`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/95 via-cocoa/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                          <div className="self-end rounded-full bg-background/90 backdrop-blur-md p-2 text-foreground shadow-sm">
                            <ZoomIn className="size-4 text-primary" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/20 px-2 py-0.5 rounded-full inline-block">
                              {item.category === "masale"
                                ? "Product Range"
                                : item.category === "moments"
                                  ? "Journey"
                                  : item.category}
                            </span>
                            <p className="text-xs sm:text-sm text-cocoa-foreground font-medium mt-1 line-clamp-2">
                              {item.alt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-3">
                <p className="text-lg font-semibold text-foreground">No photos found</p>
                <p className="text-sm text-muted-foreground">
                  Try clearing your search query or selecting another tab.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveTab("all");
                  }}
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* LIGHTBOX MODAL WITH PREV / NEXT & WHATSAPP CTA */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl border border-border animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 size-10 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors shadow-md"
                aria-label="Close photo preview"
              >
                <X className="size-5" />
              </button>

              {/* Prev & Next Floating Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="size-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="size-6" />
              </button>

              {/* Image Preview Area */}
              <div className="relative flex-1 bg-black/95 flex items-center justify-center p-2 sm:p-4 min-h-[300px] overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Footer Controls & Info */}
              <div className="p-4 sm:p-5 bg-card border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                    {selectedPhoto.category === "masale"
                      ? "Official Product Range"
                      : selectedPhoto.category === "moments"
                        ? "Company Journey"
                        : selectedPhoto.category}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-semibold">
                    {selectedPhoto.alt}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
                  <a
                    href={waLink(`Hi City King, I am inquiring about this product from your gallery: ${selectedPhoto.alt}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 text-xs font-bold transition-colors shadow-xs"
                  >
                    <MessageCircle className="size-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">
                    {selectedIndex! + 1} / {filteredItems.length}
                  </span>
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
