import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Search,
  Share2,
  Sparkles,
  X,
  ZoomIn,
  Check,
  Grid3X3,
  LayoutGrid,
  Camera,
  Star,
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

/* ─── SEO Meta ─────────────────────────────────────────────────────────── */
export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "City King Masala Gallery – 33+ Product Photos | Sah Food Industries Siliguri | cityking.in" },
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
      { property: "og:title", content: "City King Masala Official Gallery – Sah Food Industries Siliguri" },
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

/* ─── Helpers ───────────────────────────────────────────────────────────── */
function getPouchBadge(alt: string): string | null {
  if (alt.includes("₹5")) return "₹5 Pouch";
  if (alt.includes("₹10")) return "₹10 Pouch";
  if (alt.includes("50g")) return "50g Box";
  if (alt.includes("200g")) return "200g Box";
  if (alt.includes("500g")) return "500g Bulk";
  if (alt.includes("CTC") || alt.includes("Chai")) return "North Bengal Tea";
  if (alt.includes("Whole")) return "Whole Spices";
  return null;
}

function categoryLabel(cat: string): string {
  const map: Record<string, string> = {
    masale: "City King Products",
    moments: "Company Journey",
    packaging: "Official Packaging",
    brand: "Brand Heritage",
    food: "Culinary Moments",
  };
  return map[cat] ?? cat;
}

/* ─── Masonry item size helper (pseudo-random but deterministic) ─────────── */
const SIZE_MAP: ("normal" | "tall" | "wide")[] = [
  "normal", "tall", "normal", "wide", "normal", "normal", "tall",
  "normal", "wide", "normal", "normal", "tall", "normal", "normal",
  "wide", "tall", "normal", "normal", "normal", "wide",
];
function getSize(idx: number): "normal" | "tall" | "wide" {
  return SIZE_MAP[idx % SIZE_MAP.length];
}

/* ─── Single Gallery Card ────────────────────────────────────────────────── */
function GalleryCard({
  item,
  idx,
  viewMode,
  onClick,
}: {
  item: GalleryItem;
  idx: number;
  viewMode: "masonry" | "grid";
  onClick: () => void;
}) {
  const badge = getPouchBadge(item.alt);
  const size = viewMode === "masonry" ? getSize(idx) : "normal";

  const heightClass =
    size === "tall"
      ? "row-span-2 aspect-[3/4]"
      : size === "wide"
      ? "col-span-2 aspect-[16/9]"
      : "aspect-square";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1 ${heightClass} border border-border/50 hover:border-primary/40`}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Always-visible category chip */}
      <div className="absolute top-3 left-3">
        <span className="text-[9px] font-black uppercase tracking-widest bg-primary/90 text-white px-2 py-0.5 rounded-full shadow-sm">
          {categoryLabel(item.category)}
        </span>
      </div>

      {/* Price badge */}
      {badge && (
        <div className="absolute top-3 right-3">
          <span className="text-[9px] font-black uppercase tracking-widest bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
            <Star className="size-2" />
            {badge}
          </span>
        </div>
      )}

      {/* Hover bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
        <p className="text-white text-xs font-semibold leading-snug line-clamp-2 drop-shadow-lg">
          {item.alt}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white/80 bg-white/20 rounded-full px-2.5 py-1 backdrop-blur-sm">
            <ZoomIn className="size-3" />
            Click to preview
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Lightbox Modal ─────────────────────────────────────────────────────── */
function LightboxModal({
  items,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const item = items[selectedIndex];
  if (!item) return null;

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin + item.src);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const badge = getPouchBadge(item.alt);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Inner container — stop propagation */}
      <div
        className="relative w-full max-w-5xl max-h-[95vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900 border-b border-white/10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/20 px-3 py-1 rounded-full">
              {categoryLabel(item.category)}
            </span>
            {badge && (
              <span className="text-[10px] font-black uppercase tracking-widest bg-amber-400 text-amber-950 px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="size-2.5" />
                {badge}
              </span>
            )}
            <span className="text-xs text-white/40 hidden sm:inline">
              {selectedIndex + 1} / {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="size-9 rounded-full bg-white/10 hover:bg-red-500/80 text-white flex items-center justify-center transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Image area */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[55vh] p-3">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />

          {/* Prev / Next buttons */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 bg-zinc-900 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1 flex-1 min-w-0">
            <p className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-2 pr-4">
              {item.alt}
            </p>
            <p className="text-xs text-white/40">Sah Food Industries · Siliguri 734001</p>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-xs font-semibold transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="size-3.5" />
                  Share
                </>
              )}
            </button>
            <a
              href={waLink(`Hi City King, I am interested in this product from your gallery: ${item.alt}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-xs font-bold transition-all duration-200 shadow-lg"
            >
              <MessageCircle className="size-3.5" />
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page Component ────────────────────────────────────────────────── */
function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"masonry" | "grid">("masonry");

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        item.alt.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((p) => (p! <= 0 ? filteredItems.length - 1 : p! - 1));
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((p) => (p! >= filteredItems.length - 1 ? 0 : p! + 1));
  }, [selectedIndex, filteredItems.length]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, handlePrev, handleNext]);

  const totalCount = filteredItems.length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden h-56 sm:h-72 lg:h-80 flex items-center justify-center">
          <img
            src={heroImg}
            alt="City King Masala Gallery — Pure Spice Collection by Sah Food Industries Siliguri"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          {/* Animated spice dots bg */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-amber-400/20 blur-xl animate-pulse"
                style={{
                  width: 20 + (i * 15) % 60,
                  height: 20 + (i * 15) % 60,
                  top: `${(i * 37) % 90}%`,
                  left: `${(i * 23) % 95}%`,
                  animationDelay: `${(i * 0.4).toFixed(1)}s`,
                  animationDuration: "3s",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-4">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-primary/80 backdrop-blur-sm text-white px-5 py-2 rounded-full mb-4 shadow-lg">
                <Camera className="size-3.5" />
                Official Photo Gallery
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl tracking-tight">
                City King{" "}
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Masala Gallery
                </span>
              </h1>
              <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl mx-auto">
                {totalCount} authentic product photos from Sah Food Industries, Siliguri — Haldi, Mirchi, Masale &amp; More
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── STICKY FILTER BAR ────────────────────────────────────────────── */}
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container-page py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-0 w-full sm:w-auto sm:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                placeholder="Search masala, chai, haldi…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 flex-1 min-w-0">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as GalleryCategory | "all")}
                  className={`shrink-0 text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 whitespace-nowrap border ${
                    activeTab === cat.id
                      ? "bg-primary text-white border-primary shadow-sm shadow-primary/40"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Count + View toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                {totalCount} photos
              </span>
              <div className="flex rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 transition-colors ${viewMode === "masonry" ? "bg-primary text-white" : "bg-card text-muted-foreground hover:bg-muted"}`}
                  title="Masonry view"
                >
                  <LayoutGrid className="size-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${viewMode === "grid" ? "bg-primary text-white" : "bg-card text-muted-foreground hover:bg-muted"}`}
                  title="Grid view"
                >
                  <Grid3X3 className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── GALLERY GRID ──────────────────────────────────────────────────── */}
        <section className="container-page py-10 pb-16">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
              <span className="text-5xl">🌶️</span>
              <p className="text-lg font-bold text-foreground">No photos found</p>
              <p className="text-sm text-muted-foreground">Try a different category or clear your search</p>
              <button
                onClick={() => { setActiveTab("all"); setSearchQuery(""); }}
                className="mt-2 text-sm font-bold text-primary hover:underline"
              >
                Show all photos
              </button>
            </div>
          ) : viewMode === "masonry" ? (
            /* ── MASONRY GRID ── */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3 sm:gap-4">
              {filteredItems.map((item, idx) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  idx={idx}
                  viewMode="masonry"
                  onClick={() => setSelectedIndex(idx)}
                />
              ))}
            </div>
          ) : (
            /* ── UNIFORM GRID ── */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filteredItems.map((item, idx) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  idx={idx}
                  viewMode="grid"
                  onClick={() => setSelectedIndex(idx)}
                />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          {filteredItems.length > 0 && (
            <Reveal>
              <div className="mt-14 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 via-amber-400/10 to-orange-400/10 border border-primary/20 rounded-3xl px-8 py-6 shadow-sm">
                  <div className="text-center sm:text-left">
                    <p className="font-black text-foreground text-lg">
                      Want to stock City King Masala?
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Wholesale &amp; distribution enquiries welcome — Siliguri to PAN India
                    </p>
                  </div>
                  <a
                    href={waLink("Hi City King, I want to become a distributor / retailer. Please share your product catalogue and pricing.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-400 text-white font-bold px-6 py-3 shadow-lg shadow-primary/30 transition-all hover:scale-105 text-sm whitespace-nowrap"
                  >
                    <MessageCircle className="size-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          )}
        </section>
      </main>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      {selectedIndex !== null && (
        <LightboxModal
          items={filteredItems}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <Footer />
    </div>
  );
}
