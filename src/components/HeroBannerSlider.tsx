import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Play,
  Pause,
  ShieldCheck,
  Award,
} from "lucide-react";
import { site, waLink, waMessages } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

// Official 5 City King Masala Advertisement Banner images
import banner1 from "@/assets/City King Masala1.png";
import banner2 from "@/assets/City King Masala2.png";
import banner3 from "@/assets/City King Masala3.png";
import banner4 from "@/assets/City King Masala4.png";
import banner5 from "@/assets/City King Masala5.png";

const SLIDE_DURATION_MS = 5500; // 5.5 seconds per banner

export interface BannerSlide {
  id: number;
  image: string;
  alt: string;
  badgeEn: string;
  badgeHi: string;
  headlineEn: string;
  headlineHi: string;
  subEn: string;
  subHi: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 1,
    image: banner1,
    alt: "City King Masala — Premium Spice Range Campaign",
    badgeEn: "Official Brand Campaign",
    badgeHi: "ऑफिशियल ब्रांड कैंपेन",
    headlineEn: "Laye Swad me Bahar",
    headlineHi: "लाये स्वाद में बहार",
    subEn: "Pure Spices & Authentic Taste • Sah Food Industries, Siliguri",
    subHi: "शुद्ध मसाले यानी सिटी किंग मसाले • साह फूड इंडस्ट्रीज, सिलीगुड़ी",
  },
  {
    id: 2,
    image: banner2,
    alt: "City King Authentic Indian Masalas & Blends",
    badgeEn: "Master Blends & Special Masalas",
    badgeHi: "मास्टर ब्लेंड्स और स्पेशल मसाले",
    headlineEn: "Crafted for Every Indian Kitchen",
    headlineHi: "हर रसोई की पहली पसंद",
    subEn: "Rich aroma and natural colour preserved through cold processing",
    subHi: "स्वाभाविक सुगंध, गहरा रंग और पारंपरिक भारतीय स्वाद",
  },
  {
    id: 3,
    image: banner3,
    alt: "City King Special Blends & Kadai Paneer Masala",
    badgeEn: "Pure & Unadulterated",
    badgeHi: "100% शुद्ध और मिलावट रहित",
    headlineEn: "Pure Spices, Rich Flavour",
    headlineHi: "शुद्ध मसाले, भरपूर स्वाद",
    subEn: "From farm-selected whole spices to precision hygienic packaging",
    subHi: "खेतों से चुनी गई सामग्री से तैयार प्रामाणिक स्वाद",
  },
  {
    id: 4,
    image: banner4,
    alt: "City King Everyday Kitchen Essentials — Haldi, Mirchi & Dhaniya",
    badgeEn: "Everyday Cooking Essentials",
    badgeHi: "दैनिक रसोई की आवश्यक सामग्री",
    headlineEn: "Haldi • Mirchi • Dhaniya • Jeera",
    headlineHi: "हल्दी • मिर्ची • धनिया • जीरा",
    subEn: "Zero artificial colour, no starch fillers, 100% purity tested",
    subHi: "बिना किसी मिलावट, शुद्ध और सुरक्षित मसालों की गारंटी",
  },
  {
    id: 5,
    image: banner5,
    alt: "City King CTC Premium Tea & Pure Spices",
    badgeEn: "North Bengal Heritage",
    badgeHi: "उत्तरी बंगाल की समृद्ध धरोहर",
    headlineEn: "Taste The Royal Heritage",
    headlineHi: "शाही स्वाद और ताजगी का अनुभव",
    subEn: "City King Spices & Premium CTC Tea • Trusted by 10,000+ kitchens",
    subHi: "सिटी किंग मसाले और प्रीमियम सीटीसी चाय • खुशियों की मिठास",
  },
];

export function HeroBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const { lang, t } = useLanguage();

  const currentSlide = BANNER_SLIDES[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Timer for auto-sliding with smooth progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / SLIDE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  // Touch Swipe Handlers for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      goToNext(); // Swiped left -> next
    } else if (distance < -minSwipeDistance) {
      goToPrev(); // Swiped right -> prev
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
      aria-label="City King Masala Featured Campaign"
      className="relative w-full pt-20 sm:pt-24 pb-4 sm:pb-8 bg-cocoa text-cocoa-foreground overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-500/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-cocoa/60 to-cocoa" />
      </div>

      <div className="container-page relative z-10 px-3 sm:px-6 lg:px-8">
        {/* Top Header Eyebrow Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/35 px-3 py-1 backdrop-blur-md shadow-xs">
            <span className="flex size-2 rounded-full bg-accent animate-ping" />
            <Sparkles className="size-3.5 text-accent" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-accent leading-normal">
              {lang === "hi" ? currentSlide.badgeHi : currentSlide.badgeEn}
            </span>
          </div>

          {/* Slogan Banner */}
          <div className="hidden md:flex items-center gap-2 text-xs text-cocoa-foreground/75 font-medium">
            <ShieldCheck className="size-3.5 text-amber-400" />
            <span>{site.tagline}</span>
            <span className="text-cocoa-foreground/30">•</span>
            <span className="text-amber-300 font-hindi">{site.taglineHindi}</span>
          </div>

          {/* Slide counter & Pause/Play control */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-accent bg-black/40 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
              0{currentIndex + 1} <span className="text-white/40">/</span> 0{BANNER_SLIDES.length}
            </span>
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="p-1.5 rounded-md bg-black/40 border border-white/10 text-white/70 hover:text-white transition-colors"
              title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
              aria-label={isPaused ? "Play Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? <Play className="size-3" /> : <Pause className="size-3" />}
            </button>
          </div>
        </div>

        {/* =========================================================================
            MAIN CINEMATIC BANNER VIEWPORT
           ========================================================================= */}
        <div className="relative group w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 aspect-[16/10] sm:aspect-[2.2/1] lg:aspect-[2.48/1] min-h-[220px] sm:min-h-[320px] max-h-[720px]">
          {/* Slides Loop */}
          {BANNER_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                aria-hidden={!isActive}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out transform-gpu",
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none",
                )}
              >
                {/* Blurred ambient background image for aspect-ratio fit */}
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-35 filter brightness-75"
                />

                {/* Subtle gradient vignette to blend edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-[1]" />

                {/* The Main High-Res Sharp Banner Image */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  decoding="async"
                  className={cn(
                    "relative z-[2] w-full h-full object-contain object-center transition-transform duration-6000 ease-out",
                    isActive ? "scale-100 sm:scale-[1.015]" : "scale-105",
                  )}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                />

                {/* Bottom Overlay Text Caption (Bilingual & Subtle) */}
                <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-8 z-[3] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-4 pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 max-w-xl shadow-lg">
                    <p className="text-xs sm:text-sm font-bold text-amber-300 tracking-wide flex items-center gap-1.5">
                      <Award className="size-3.5 text-accent shrink-0" />
                      {lang === "hi" ? slide.headlineHi : slide.headlineEn}
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1 leading-snug mt-0.5">
                      {lang === "hi" ? slide.subHi : slide.subEn}
                    </p>
                  </div>

                  {/* Fast Action CTA */}
                  <div className="hidden lg:flex items-center gap-2 pointer-events-auto">
                    <a
                      href="#products"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
                    >
                      <span>{t("hero.ctaExplore")}</span>
                      <ArrowRight className="size-3" />
                    </a>
                    <a
                      href={waLink(site.phone, waMessages.generalEnquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
                    >
                      <MessageCircle className="size-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 size-9 sm:size-12 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 size-9 sm:size-12 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* Live Progress Bar at the very bottom edge of the banner */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-accent to-amber-300 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* =========================================================================
            BOTTOM SLIDE NAVIGATION DOCK & THUMBNAILS
           ========================================================================= */}
        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
          {/* Slide Dots / Pill Selector */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {BANNER_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "group relative flex items-center gap-1.5 py-1.5 px-2.5 rounded-full text-xs font-medium transition-all cursor-pointer",
                    isActive
                      ? "bg-amber-400 text-stone-950 font-bold shadow-md scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white/70 hover:text-white border border-white/5",
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full transition-all",
                      isActive ? "bg-stone-950" : "bg-white/40 group-hover:bg-white",
                    )}
                  />
                  <span className="text-[11px] leading-none">0{idx + 1}</span>
                  <span className="hidden md:inline text-[10px] opacity-80">
                    • {lang === "hi" ? slide.badgeHi : slide.badgeEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick jump to Interactive Showcase below */}
          <a
            href="#interactive-showcase"
            className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors font-medium group cursor-pointer"
          >
            <span>{lang === "hi" ? "नीचे 3D मसाला शोकेस देखें" : "Explore 3D Product Showcase Below"}</span>
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
