import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import aboutImg1 from "@/assets/City King About.png";
import aboutImg2 from "@/assets/City King About2.png";
import founderImg from "@/assets/City King Founder.png";
import masalaRangeImg from "@/assets/City King Masala1.png";
import { DottedSectionDivider } from "@/components/DottedSectionDivider";
import {
  ArrowRight,
  Building2,
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
    image: aboutImg1,
    titleEn: "100% Shuddh Indian Spices",
    titleHi: "100% शुद्ध भारतीय मसाले",
    captionEn: "Traditional stone-ground aroma & natural color",
    captionHi: "पारंपरिक खुशबू, प्राकृतिक रंग व असली स्वाद",
    tag: "Flagship Spices",
  },
  {
    image: aboutImg2,
    titleEn: "Kitchen Choice Premium Range",
    titleHi: "रसोई की पहली पसंद",
    captionEn: "Blended masalas crafted for authentic Indian meals",
    captionHi: "दैनिक दाल, सब्जी, बिरयानी व मीट के लिए सर्वोत्तम",
    tag: "Kitchen Choice",
  },
  {
    image: founderImg,
    titleEn: "Mukesh Kumar Sah — Founder",
    titleHi: "मुकेश कुमार साह — संस्थापक",
    captionEn: "Sah Food Industries, Siliguri Hub",
    captionHi: "साह फूड इंडस्ट्रीज, सिलीगुड़ी केंद्र",
    tag: "Founder & Visionary",
  },
  {
    image: masalaRangeImg,
    titleEn: "Sealed Freshness-Lock Packaging",
    titleHi: "ताजगी-सील पैकेजिंग",
    captionEn: "Available from ₹5 mini pouches to 1kg bulk",
    captionHi: "₹5 और ₹10 मिनी पाउच से लेकर 1 किग्रा पैक तक",
    tag: "Packaging Range",
  },
];

export function AboutCityKingSection() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto-play effect (4 seconds interval)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <section id="about-section" className="relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden">
      {/* ─── Top Authentic Dotted Line Divider ─── */}
      <DottedSectionDivider className="pt-6 pb-2" />

      <div className="container-page py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ─── LEFT: Multi-Image Auto-Playing Showcase with Fullscreen ─── */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <Reveal>
              <div className="relative w-full max-w-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 group">
                
                {/* Active Image with smooth cross-fade */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-black">
                  <img
                    key={currentIndex}
                    src={currentSlide.image}
                    alt={isHi ? currentSlide.titleHi : currentSlide.titleEn}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                  {/* Top Floating Tag & Fullscreen Trigger */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1.5 shadow-md">
                      <Sparkles className="size-3" />
                      {currentSlide.tag}
                    </span>

                    <button
                      type="button"
                      onClick={() => setIsFullscreen(true)}
                      className="size-8 sm:size-9 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 shadow-md"
                      title={isHi ? "फ़ुल स्क्रीन देखें" : "View Fullscreen"}
                    >
                      <Maximize2 className="size-4" />
                    </button>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 size-9 sm:size-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 z-10"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 size-9 sm:size-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 z-10"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 text-white">
                    <div className="space-y-0.5 max-w-sm">
                      <h4 className="text-sm sm:text-base font-black text-amber-300 drop-shadow-md">
                        {isHi ? currentSlide.titleHi : currentSlide.titleEn}
                      </h4>
                      <p className="text-xs text-white/90 drop-shadow-sm font-medium">
                        {isHi ? currentSlide.captionHi : currentSlide.captionEn}
                      </p>
                    </div>

                    <div className="text-[10px] font-black uppercase tracking-wider bg-[#D97706] text-white px-2.5 py-1 rounded-full shadow-md shrink-0">
                      {currentIndex + 1} / {slides.length}
                    </div>
                  </div>
                </div>

                {/* Slider Controls Bar (Dots + Play/Pause) */}
                <div className="p-3 bg-zinc-950 flex items-center justify-between border-t border-zinc-800">
                  {/* Dot Indicators */}
                  <div className="flex items-center gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? "w-7 bg-[#D97706]"
                            : "w-2 bg-zinc-700 hover:bg-zinc-500"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Play/Pause & Fullscreen Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlaying((p) => !p)}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 transition-colors"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="size-3 text-amber-400" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="size-3 text-emerald-400" />
                          <span>Auto Play</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFullscreen(true)}
                      className="text-xs text-amber-400 hover:text-amber-300 font-bold px-2 py-1 flex items-center gap-1"
                    >
                      <Maximize2 className="size-3" />
                      <span>{isHi ? "बड़ा देखें" : "Full View"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─── RIGHT: Bold, Dark, Highlighted Text Formatting ─── */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal>
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-[#D97706] bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full inline-block">
                  {isHi ? "साह फूड इंडस्ट्रीज • सिलीगुड़ी" : "Sah Food Industries • Siliguri"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#D97706] dark:text-[#F59E0B] tracking-tight leading-tight">
                  {isHi ? "सिटी किंग मसाला में आपका स्वागत है" : "Welcome To City King Masala"}
                </h2>
              </div>
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
                    आधुनिक <strong className="font-black text-black dark:text-white">कोल्ड-ग्राइंड तकनीक, FSSAI प्रमाणित स्वच्छता मानकों</strong> और ताजगी-सील पैकेजिंग के साथ, सिटी किंग मसाला आज बिहार और बंगाल के लाखों परिवारों और ढाबा-रेस्टोरेंट्स के लिए <strong className="font-black text-black dark:text-white">शुद्धता, विश्वास और स्वाद का प्रतीक</strong> बन चुका है।
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
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

            {/* ─── CTAs: "Explore All Products" + DIRECT LINK TO NAVBAR ABOUT SECTION ─── */}
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

                {/* 2. Direct Link to Navbar About Page / Section */}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 px-6 py-3 font-black text-sm tracking-wide shadow-md transition-all hover:scale-105"
                  title={isHi ? "कंपनी के बारे में विस्तृत जानकारी" : "Read Full Company Heritage & Story"}
                >
                  <Building2 className="size-4 text-amber-400 dark:text-amber-600" />
                  <span>{isHi ? "कंपनी के बारे में जानें (About City King)" : "About City King (Sah Food)"}</span>
                </Link>

                {/* 3. WhatsApp Direct Enquiry */}
                <a
                  href={waLink("Hi City King, I am interested in City King Masala products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-800 dark:border-zinc-200 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black px-5 py-2.5 font-bold text-sm tracking-wide transition-all"
                >
                  <MessageCircle className="size-4 text-emerald-600" />
                  <span>{isHi ? "व्हाट्सएप संपर्क" : "WhatsApp"}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ─── FULLSCREEN LIGHTBOX PREVIEW MODAL ─── */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-[#D97706] px-3 py-1 rounded-full">
                  {currentSlide.tag}
                </span>
                <span className="font-bold text-sm sm:text-base">
                  {isHi ? currentSlide.titleHi : currentSlide.titleEn}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="size-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                aria-label="Close Fullscreen"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Big Image Frame */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center max-h-[75vh]">
              <img
                src={currentSlide.image}
                alt={isHi ? currentSlide.titleHi : currentSlide.titleEn}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />

              {/* Prev/Next on Fullscreen */}
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-110"
              >
                <ChevronRight className="size-7" />
              </button>
            </div>

            {/* Bottom Info & Thumbnails */}
            <div className="w-full pt-3 flex items-center justify-between text-white text-xs">
              <span className="text-white/70">
                {isHi ? currentSlide.captionHi : currentSlide.captionEn}
              </span>
              <div className="flex items-center gap-1.5">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`size-10 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex ? "border-[#D97706] scale-105" : "border-white/30 opacity-60"
                    }`}
                  >
                    <img src={s.image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Bottom Authentic Dotted Line Divider ─── */}
      <DottedSectionDivider className="pb-6 pt-2" />
    </section>
  );
}
