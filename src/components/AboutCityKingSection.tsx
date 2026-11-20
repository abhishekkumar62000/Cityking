import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import aboutImg1 from "@/assets/City King About.png";
import aboutImg2 from "@/assets/City King About2.png";
import aboutImg3 from "@/assets/City King Masala1.png";
import founderImg from "@/assets/City King Founder.png";
import { DottedSectionDivider } from "@/components/DottedSectionDivider";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageCircle,
  Pause,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { waLink } from "@/data/site";
import { Link } from "@tanstack/react-router";

const slides = [
  {
    src: aboutImg1,
    alt: "City King Masala — Sah Food Industries Siliguri — Pure Cold-Ground Spices",
    tag: "Sah Food Industries • Siliguri",
    badge: "100% Shuddh Masale",
  },
  {
    src: aboutImg2,
    alt: "City King Spices Collection — Complete Premium Range of Authentic Masalas",
    tag: "Authentic Indian Flavors",
    badge: "Kitchen Choice Quality",
  },
  {
    src: aboutImg3,
    alt: "City King Flagship Packaging — Sealed Freshness Lock Packets",
    tag: "Factory Fresh Packaging",
    badge: "Starting @ ₹5/-",
  },
  {
    src: founderImg,
    alt: "Mukesh Kumar Sah — Founder & Owner of Sah Food Industries, Siliguri",
    tag: "Mukesh Kumar Sah • Founder",
    badge: "Purity & Trust",
  },
];

export function AboutCityKingSection() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  // Keyboard navigation for fullscreen
  useEffect(() => {
    if (!isFullscreen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, handlePrev, handleNext]);

  const activeSlide = slides[currentIndex];

  return (
    <section className="relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden">
      {/* ─── Top Authentic Dotted Line Divider ─── */}
      <DottedSectionDivider className="pt-6 pb-2" />

      <div className="container-page py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ─── LEFT: Interactive Auto-Playing Full-Screen Image Showcase ─── */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <Reveal>
              <div
                className="relative w-full max-w-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 group select-none"
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
              >
                {/* Image Display with smooth transition */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-black flex items-center justify-center">
                  {slides.map((slide, idx) => (
                    <img
                      key={idx}
                      src={slide.src}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-contain sm:object-cover transition-all duration-700 ease-in-out ${
                        idx === currentIndex
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-95 pointer-events-none z-0"
                      }`}
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  ))}

                  {/* Dark subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none z-20" />

                  {/* Top Overlay Controls: Fullscreen button + Play/Pause */}
                  <div className="absolute top-3.5 right-3.5 z-30 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlaying((p) => !p)}
                      className="size-8 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer"
                      title={isPlaying ? "Pause slideshow" : "Play slideshow"}
                      aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                      {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 fill-white" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFullscreen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 text-xs font-bold transition-all duration-200 shadow-lg cursor-pointer hover:scale-105"
                      title="View Full Screen"
                      aria-label="View Full Screen"
                    >
                      <Maximize2 className="size-3.5" />
                      <span className="hidden sm:inline">Full Screen</span>
                    </button>
                  </div>

                  {/* Top-Left Slide Counter */}
                  <div className="absolute top-3.5 left-3.5 z-30">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-md">
                      {currentIndex + 1} / {slides.length}
                    </span>
                  </div>

                  {/* Left & Right Arrow Buttons */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 size-9 rounded-full bg-black/50 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-lg opacity-80 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 size-9 rounded-full bg-black/50 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-lg opacity-80 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  {/* Bottom Badges */}
                  <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between text-white drop-shadow-md">
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      {activeSlide.tag}
                    </span>
                    <span className="text-xs sm:text-sm font-black bg-[#D97706] text-white px-3.5 py-1.5 rounded-full shadow-md">
                      {activeSlide.badge}
                    </span>
                  </div>
                </div>

                {/* Bottom Dots Indicator Bar */}
                <div className="py-2.5 px-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? "w-8 bg-[#D97706]"
                          : "w-2 bg-zinc-700 hover:bg-zinc-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─── RIGHT: Bold, Dark, Highlighted Text Formatting ─── */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D97706] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                <Sparkles className="size-3.5" />
                <span>{isHi ? "हमारी कहानी और पहचान" : "Our Heritage & Story"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#D97706] dark:text-[#F59E0B] tracking-tight leading-tight mt-2">
                {isHi ? "सिटी किंग मसाला में आपका स्वागत है" : "Welcome To City King Masala"}
              </h2>
            </Reveal>

            {isHi ? (
              <div className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-[17px] leading-relaxed font-semibold">
                <Reveal>
                  <p>
                    <strong className="font-black text-black dark:text-white">सिटी किंग मसाला (साह फूड इंडस्ट्रीज)</strong> में हमारा दृढ़ विश्वास है कि हर स्वादिष्ट भोजन की शुरुआत <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">100% शुद्ध और सुगंधित मसालों</strong> से होती है। सिलीगुड़ी (पश्चिम बंगाल) के हृदय से, हम आपके लिए सीधे खेतों से चुने गए साबुत मसालों, पिसे हुए पाउडरों और पारंपरिक भारतीय ब्लेंडेड मसालों की संपूर्ण श्रृंखला लाते हैं।
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    हमारी यात्रा संस्थापक <strong className="font-black text-black dark:text-white">मुकेश कुमार साह</strong> के एक सरल दृष्टिकोण से शुरू हुई — <strong className="font-black text-black dark:text-white">असली भारतीय स्वाद को हर घर और हर परिवार तक सुलभ बनाना</strong>। हम बिना किसी बिचौलिए के सीधे किसानों से उच्च-गुणवत्ता वाले मसाले प्राप्त करते हैं, जिससे हर मसाले का <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">प्राकृतिक तेल, चटक रंग और ताज़ा सुगंध</strong> पूरी तरह सुरक्षित रहता है।
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    आधुनिक <strong className="font-black text-black dark:text-white">कोल्ड-ग्राइंड तकनीक, FSSAI प्रमाणित स्वच्छता मानकों</strong> और ताजगी-सील पैकेजिंग के साथ, सिटी किंग मसाला आज बिहार और बंगाल के लाखों परिवारों और ढाबा-रेस्टोरेंट्स के लिए <strong className="font-black text-black dark:text-white">शुद्धता, विश्वास और स्वाद का प्रतीक</strong> बन चुका है। चाहे घर की रोजमर्रा सब्जी हो या शाही बिरयानी, सिटी किंग हर निवाले में स्वाद भर देता है।
                  </p>
                </Reveal>
              </div>
            ) : (
              <div className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-[17px] leading-relaxed font-semibold">
                <Reveal>
                  <p>
                    At <strong className="font-black text-black dark:text-white">City King Masala (Sah Food Industries)</strong>, we believe that every great dish begins with <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">pure, flavorful, and unadulterated ingredients</strong>. From the heart of <strong className="font-black text-black dark:text-white">Siliguri, West Bengal</strong>, we bring you a wide range of handpicked whole spices, ground powders, and traditional masalas — crafted to capture the true essence of Indian Kitchens.
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    Our journey began with a simple and steadfast vision by founder <strong className="font-black text-black dark:text-white">Mukesh Kumar Sah</strong> — to make <strong className="font-black text-black dark:text-white">authentic Indian flavors accessible and affordable across every home</strong>. We source directly from trusted farms across India, ensuring each spice retains its <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">natural essential oils, vibrant color, and rich freshness</strong>.
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    With modern cold-milling facilities, strict <strong className="font-black text-black dark:text-white">FSSAI food-safety checks, and air-tight freshness packaging</strong>, City King has become a name that stands for <strong className="font-black text-black dark:text-white">purity, trust, and tradition</strong>. Whether you’re cooking everyday homestyle dal-sabji or a festive royal biryani, our spices bring authentic aroma and balanced taste to every meal.
                  </p>
                </Reveal>
              </div>
            )}

            {/* ─── Highlights Badges Row ─── */}
            <Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Packaging</span>
                  <span className="text-sm font-black text-black dark:text-white">₹5, ₹10 to 1kg</span>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Processing</span>
                  <span className="text-sm font-black text-black dark:text-white">Cold Ground</span>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Quality</span>
                  <span className="text-sm font-black text-black dark:text-white">FSSAI Certified</span>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Purity</span>
                  <span className="text-sm font-black text-[#D97706] dark:text-[#F59E0B]">100% Pure</span>
                </div>
              </div>
            </Reveal>

            {/* ─── CTAs: Explore All Products + DIRECT LINK TO NAVBAR ABOUT SECTION + WhatsApp ─── */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* 1. Explore All Products */}
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white px-6 py-3 font-black text-sm tracking-wide shadow-lg shadow-amber-600/30 transition-all hover:scale-105"
                >
                  <span>{isHi ? "सभी उत्पाद देखें" : "Explore All Products"}</span>
                  <ArrowRight className="size-4" />
                </Link>

                {/* 2. DIRECT LINK TO NAVBAR ABOUT SECTION (Requested by user) */}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white px-6 py-2.5 font-black text-sm tracking-wide transition-all hover:scale-105 shadow-sm"
                >
                  <span>{isHi ? "कंपनी के बारे में (About Us)" : "About City King"}</span>
                  <ArrowUpRight className="size-4" />
                </Link>

                {/* 3. WhatsApp Enquiry */}
                <a
                  href={waLink("Hi City King, I want to know more about your company and products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-800 dark:border-zinc-200 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black px-5 py-2.5 font-bold text-sm tracking-wide transition-all"
                >
                  <MessageCircle className="size-4" />
                  <span>{isHi ? "व्हाट्सएप संपर्क" : "WhatsApp"}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ─── Bottom Authentic Dotted Line Divider ─── */}
      <DottedSectionDivider className="pb-6 pt-2" />

      {/* ─── FULLSCREEN LIGHTBOX MODAL ─── */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between pb-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-black uppercase tracking-wider bg-[#D97706] text-white px-3 py-1 rounded-full">
                {activeSlide.badge}
              </span>
              <span className="text-sm font-bold text-white/90">
                {activeSlide.tag}
              </span>
              <span className="text-xs text-white/50 hidden sm:inline">
                ({currentIndex + 1} of {slides.length})
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="size-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close Full Screen (Esc)"
              aria-label="Close Full Screen"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Fullscreen Image Container */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeSlide.src}
              alt={activeSlide.alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />

            {/* Left / Right Nav in Fullscreen */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/70 hover:bg-[#D97706] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-7" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/70 hover:bg-[#D97706] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="size-7" />
            </button>
          </div>

          {/* Bottom Caption & Thumbnails */}
          <div
            className="w-full max-w-5xl pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-semibold text-white/80 text-center sm:text-left">
              {activeSlide.alt}
            </p>
            <div className="flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`size-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === currentIndex
                      ? "border-[#D97706] scale-105"
                      : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={s.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
