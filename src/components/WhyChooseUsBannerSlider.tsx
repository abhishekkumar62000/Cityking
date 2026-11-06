import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

// Official Why Choose Us 3 Banner images
import whyBanner1 from "@/assets/Why Choose Us1.png";
import whyBanner2 from "@/assets/Why Choose Us2.png";
import whyBanner3 from "@/assets/Why Choose Us3.png";

const AUTO_ROTATE_MS = 4800; // 4.8 - 5 seconds automatic cycle

export interface WhySlide {
  id: number;
  image: string;
  alt: string;
  badgeEn: string;
  badgeHi: string;
  captionEn: string;
  captionHi: string;
  subEn: string;
  subHi: string;
}

const WHY_SLIDES: WhySlide[] = [
  {
    id: 1,
    image: whyBanner1,
    alt: "Why Choose City King Spices — Purity & Trust",
    badgeEn: "100% Pure & Cold Ground",
    badgeHi: "100% शुद्ध और प्राकृतिक पिसाई",
    captionEn: "Uncompromising Quality & Natural Aroma",
    captionHi: "गुणवत्ता और प्राकृतिक सुगंध की संपूर्ण गारंटी",
    subEn: "Selected whole spices processed with strict hygiene standards in Siliguri",
    subHi: "सिलीगुड़ी में आधुनिक स्वच्छता मानकों के साथ तैयार किए गए असली मसाले",
  },
  {
    id: 2,
    image: whyBanner2,
    alt: "City King Spices — Traditional Recipe Mastery",
    badgeEn: "Traditional Flavor Secret",
    badgeHi: "पारंपरिक स्वाद का असली राज",
    captionEn: "Laye Swad me Bahar — In Every Kitchen",
    captionHi: "लाये स्वाद में बहार — हर गृहणी का विश्वास",
    subEn: "Natural essential oils retained for maximum taste, aroma, and rich colour",
    subHi: "मसालों के प्राकृतिक तैलीय तत्व सुरक्षित, जिससे मिले भरपूर स्वाद और रंग",
  },
  {
    id: 3,
    image: whyBanner3,
    alt: "City King Spices — Direct From Sah Food Industries",
    badgeEn: "Direct From Factory",
    badgeHi: "सीधे कारखाने से आपकी रसोई तक",
    captionEn: "The Purity Seal of Sah Food Industries",
    captionHi: "साह फूड इंडस्ट्रीज की शुद्धता की मुहर",
    subEn: "Zero artificial dyes, zero starch fillers — 100% authentic Indian spices",
    subHi: "बिना किसी मिलावट, कृत्रिम रंग या स्टार्च के शुद्ध मसालों की आपूर्ति",
  },
];

export function WhyChooseUsBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const { lang } = useLanguage();

  const currentSlide = WHY_SLIDES[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % WHY_SLIDES.length);
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + WHY_SLIDES.length) % WHY_SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Automatic running timer (running continuously without needing user click)
  useEffect(() => {
    const intervalStep = 50; // update progress bar smoothly
    const stepIncrement = (intervalStep / AUTO_ROTATE_MS) * 100;

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
  }, [goToNext]);

  // Mobile Touch Swipe Handlers
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
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
      aria-label="Why Choose City King Spices Animated Showcase"
      className="py-12 sm:py-16 bg-gradient-to-b from-card via-background to-card border-b border-border overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container-page px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-primary mb-2">
              <Sparkles className="size-3.5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {lang === "hi" ? "सिटी किंग की विशेषता" : "The City King Advantage"}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {lang === "hi" ? (
                <>
                  हर पैकेट में <span className="text-primary">शुद्धता और स्वाद</span> की गारंटी
                </>
              ) : (
                <>
                  Guaranteed <span className="text-primary">Purity & Freshness</span> In Every Pack
                </>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
              {lang === "hi"
                ? "साह फूड इंडस्ट्रीज, सिलीगुड़ी द्वारा आधुनिक स्वच्छता और कड़े गुणवत्ता मानकों के साथ तैयार।"
                : "Crafted with stringent quality controls by Sah Food Industries, Siliguri."}
            </p>
          </div>

          {/* Slide Indicator Badge */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              0{currentIndex + 1} / 0{WHY_SLIDES.length}
            </span>
            <span className="text-xs text-muted-foreground hidden md:inline">
              {site.tagline} • <span className="text-primary font-medium">{site.taglineHindi}</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            ANIMATED AUTO-RUNNING BANNER VIEWPORT (4-5 SECONDS TRANSITION)
           ========================================================================= */}
        <div className="relative group w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border/80 bg-stone-900 aspect-[16/10] sm:aspect-[2.2/1] lg:aspect-[2.48/1] min-h-[220px] sm:min-h-[300px] max-h-[640px]">
          {WHY_SLIDES.map((slide, idx) => {
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
                {/* Ambient Blurred Background for aspect-ratio fit */}
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-40 filter brightness-75"
                />

                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-[1]" />

                {/* Main High-Res Sharp Banner Image */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  decoding="async"
                  className={cn(
                    "relative z-[2] w-full h-full object-contain object-center transition-transform duration-5000 ease-out",
                    isActive ? "scale-100 sm:scale-[1.015]" : "scale-105",
                  )}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-8 z-[3] flex items-end justify-between gap-4 pointer-events-none">
                  <div className="bg-black/65 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 max-w-xl shadow-lg">
                    <div className="flex items-center gap-1.5 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
                      <ShieldCheck className="size-4 text-accent shrink-0" />
                      <span>{lang === "hi" ? slide.captionHi : slide.captionEn}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5">
                      {lang === "hi" ? slide.subHi : slide.subEn}
                    </p>
                  </div>

                  {/* Micro badge */}
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md text-amber-200 text-xs font-semibold">
                    <Award className="size-3.5 text-accent" />
                    <span>{lang === "hi" ? slide.badgeHi : slide.badgeEn}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 size-9 sm:size-11 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
            aria-label="Previous Why Choose Us Banner"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 size-9 sm:size-11 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
            aria-label="Next Why Choose Us Banner"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Live Progress Bar showing 5-second countdown */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-white/15 z-20">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-primary to-amber-300 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom Slide Indicators */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {WHY_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={cn(
                  "group relative flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold transition-all cursor-pointer",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border",
                )}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full transition-all",
                    isActive ? "bg-primary-foreground" : "bg-muted-foreground group-hover:bg-foreground",
                  )}
                />
                <span className="text-[11px] leading-none">0{idx + 1}</span>
                <span className="hidden sm:inline text-[11px] opacity-90">
                  • {lang === "hi" ? slide.badgeHi : slide.badgeEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
