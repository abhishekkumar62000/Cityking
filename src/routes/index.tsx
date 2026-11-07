import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  ChevronRight,
  Compass,
  Flame,
  HeartHandshake,
  Layers,
  Leaf,
  MapPin,
  MessageCircle,
  Package,
  PackageCheck,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { categories, products } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { site, telLink, waLink, waMessages } from "@/data/site";
import { CookingGuide } from "@/components/CookingGuide";
import { PurityExplorer } from "@/components/PurityExplorer";
import { PurityWaterTest } from "@/components/PurityWaterTest";
import { RegionalTadkaMatcher } from "@/components/RegionalTadkaMatcher";
import { RegionalPresence } from "@/components/RegionalPresence";
import { FaqSection } from "@/components/FaqSection";
import { HeroProductShowcase } from "@/components/HeroProductShowcase";
import { HeroBannerSlider } from "@/components/HeroBannerSlider";
import { WhyChooseUsBannerSlider } from "@/components/WhyChooseUsBannerSlider";
import { ServiceNetworkSection } from "@/components/ServiceNetworkSection";
import { addToOrderBag } from "@/components/SmartOrderDrawer";

// Image assets
import heroSpices from "@/assets/hero-spices.jpg";
import storyFood from "@/assets/story-food.jpg";
import textureDark from "@/assets/texture-spice-dark.jpg";
import citykingLogo from "@/assets/Cityking Logo.png";

import { useLanguage } from "@/context/LanguageContext";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  const featuredProducts = products.slice(0, 6);
  const previewGallery = galleryItems.slice(0, 6);
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            1. TOP HERO SECTION — CINEMATIC 5-BANNER ADVERTISEMENT ROTATING BILLBOARD
           ========================================================================= */}
        <HeroBannerSlider />

        {/* =========================================================================
            2. SIGNATURE 3D PRODUCT SHOWCASE & BRAND NARRATIVE (MOVED TO SECTION 2)
           ========================================================================= */}
        <section
          id="interactive-showcase"
          className="relative min-h-[85vh] flex items-center justify-center pt-16 sm:pt-20 pb-16 overflow-hidden bg-cocoa text-cocoa-foreground border-t border-white/10"
        >
          {/* Layered Background with atmospheric spice imagery */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={heroSpices}
              alt="Authentic Indian Spices Background"
              className="w-full h-full object-cover opacity-20 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cocoa via-cocoa/90 to-cocoa/75" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
          </div>

          <div className="container-page relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-1.5 backdrop-blur-md shadow-sm">
                  <Sparkles className="size-3.5 text-accent animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent leading-normal">
                    {t("hero.badge")}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.28] sm:leading-[1.22] py-1 text-balance overflow-visible">
                  {t("hero.title1")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-accent to-amber-200">
                    {t("hero.title2")}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-base sm:text-lg lg:text-xl text-cocoa-foreground/85 max-w-2xl leading-relaxed py-0.5">
                  {t("hero.subtitle")}
                </p>
              </Reveal>

              {/* Taglines Banner */}
              <Reveal delay={250}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm pt-1 leading-normal">
                  <span className="font-display font-semibold text-accent tracking-wide text-base">
                    {t("hero.tagline")}
                  </span>
                  <span className="text-cocoa-foreground/40 hidden sm:inline">•</span>
                  <span className="text-cocoa-foreground/90 font-medium">
                    {t("hero.taglineHindi")}
                  </span>
                </div>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={300}>
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3.5 shadow-card hover:shadow-lift transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{t("hero.exploreBtn")}</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    to="/distributor"
                    className="inline-flex items-center gap-2 rounded-full border border-cocoa-foreground/30 hover:border-accent hover:text-accent font-medium px-6 py-3.5 transition-colors duration-200 backdrop-blur-sm"
                  >
                    <span>{t("hero.dealershipBtn")}</span>
                  </Link>

                  <a
                    href={waLink(waMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-medium px-5 py-3.5 shadow-sm transition-transform hover:-translate-y-0.5"
                    aria-label="Direct WhatsApp message to Sah Food Industries"
                  >
                    <MessageCircle className="size-4" />
                    <span>{t("hero.waBtn")}</span>
                  </a>
                </div>
              </Reveal>

              {/* Highlights 4-item Micro-grid */}
              <Reveal delay={400}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-cocoa-foreground/15 text-xs text-cocoa-foreground/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-accent shrink-0" />
                    <span className="font-semibold">{t("metric.purity")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="size-4 text-leaf shrink-0" />
                    <span className="font-semibold">{t("metric.coldGround")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="size-4 text-accent shrink-0" />
                    <span className="font-semibold">{t("metric.products")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="size-4 text-accent shrink-0" />
                    <span className="font-semibold">{t("metric.factory")}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Product Showcase Composition (Dynamic Auto-Rotating 3D Stage) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <Reveal delay={200}>
                <HeroProductShowcase />
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            LIVE MARQUEE TICKER (ATMOSPHERIC BRAND STRIP)
           ========================================================================= */}
        <div className="bg-primary text-primary-foreground py-3 overflow-hidden border-y border-primary/20">
          <div className="flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <Sparkles className="size-4 text-accent" /> 100% Pure Raw Spices
            </span>
            <span>•</span>
            <span>Laye Swad me Bahar</span>
            <span>•</span>
            <span>शुद्ध मसाले यानी सिटी किंग मसाले</span>
            <span>•</span>
            <span>Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – Pin 734001, West Bengal</span>
            <span>•</span>
            <span>Founder: Mukesh Kumar Sah (Mukesh kr Sah)</span>
            <span>•</span>
            <span>Ph: +91 98326 53731 / +91 98004 92817</span>
            <span>•</span>
            <span>Direct Wholesale & Dealership Enquiries</span>
            <span>•</span>
            <span>Natural Volatile Oils Preserved</span>
          </div>
        </div>

        {/* =========================================================================
            2. WHY CITY KING — 4 TRUTHFUL BRAND FEATURES
           ========================================================================= */}
        <section className="py-18 bg-card border-b border-border">
          <div className="container-page">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t("why.tag")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-balance">
                  {t("why.title")}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {t("why.sub")}
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Flame,
                  badge: lang === "hi" ? "🌿 100% असली मसाले" : "🌿 100% Pure Spices",
                  title: lang === "hi" ? "असली सुगंध व प्राकृतिक रंग" : "Authentic Aroma & Natural Colour",
                  desc:
                    lang === "hi"
                      ? "बिना किसी कृत्रिम रंग, स्टार्च या मिलावट के तैयार। धीमी गति से पिसे हुए मसाले जो तेलों की ताजगी सुरक्षित रखते हैं — बस आधा चम्मच ही आपकी दाल, तरी और तड़के में असली सुगंध और प्राकृतिक रंग भर देता है।"
                      : "Never adulterated with artificial dyes or starch. Cold-ground at gentle speeds to preserve volatile essential oils — so a single pinch releases that unforgettable homestyle fragrance and deep rich hue.",
                  highlight: lang === "hi" ? "“लाये स्वाद में बहार”" : "“Laye Swad me Bahar”",
                  accentColor: "group-hover:border-amber-500/50",
                  iconBg: "bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
                },
                {
                  icon: ShieldCheck,
                  badge: lang === "hi" ? "🛡️ परिवार की सेहत का भरोसा" : "🛡️ Family Health First",
                  title: lang === "hi" ? "हर निवाले में शुद्धता और सुरक्षा" : "Purity Tested for Family Health",
                  desc:
                    lang === "hi"
                      ? "सिलीगुड़ी कारखाने में आधुनिक स्वच्छता व कड़े मानकों से परखे गए मसाले — शून्य चॉक पाउडर, शून्य केमिकल और शून्य अशुद्धियां। अपने बच्चों और परिवार को परोसें पूरी तरह सुरक्षित, पौष्टिक और शुद्ध भोजन।"
                      : "Every batch is rigorously cleaned and inspected at our Siliguri hub — zero chalk powder, zero synthetic colors, zero harmful fillers. What you serve your family is 100% wholesome, clean and dependable.",
                  highlight: lang === "hi" ? "“शुद्ध मसाले यानी सिटी किंग मसाले”" : "“Pure Spices • Pure Health”",
                  accentColor: "group-hover:border-primary/50",
                  iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
                },
                {
                  icon: UtensilsCrossed,
                  badge: lang === "hi" ? "👑 संपूर्ण रसोई श्रृंखला" : "👑 Complete Kitchen Range",
                  title: lang === "hi" ? "दैनिक दाल से लेकर खास दावतों तक" : "From Daily Dal to Royal Feasts",
                  desc:
                    lang === "hi"
                      ? "एक ही भरोसेमंद ब्रांड के अंतर्गत संपूर्ण रसोई का सामान: रोज़मर्रा के पिसे मसाले (हल्दी, मिर्ची, धनिया, जीरा), दावतों के लिए शाही ब्लेंड्स (कढ़ाई पनीर, सब्जी मसाला) और ताजगी से भरपूर कड़क सीटीसी चाय।"
                      : "Your complete pantry under one trusted name: everyday staple powders (Haldi, Mirchi, Dhaniya, Jeera), celebratory master blends (Kadai Paneer, Sabji Masala), and energizing Darjeeling-terroir CTC Tea.",
                  highlight: lang === "hi" ? "9+ उत्पाद (पाउच व जार पैक)" : "9+ Branded Packs Available",
                  accentColor: "group-hover:border-leaf/50",
                  iconBg: "bg-leaf/10 text-leaf group-hover:bg-leaf group-hover:text-white",
                },
                {
                  icon: Truck,
                  badge: lang === "hi" ? "🚚 सिलीगुड़ी फैक्टरी से सीधी आपूर्ति" : "🚚 Direct From Siliguri Hub",
                  title: lang === "hi" ? "कारखाने से सीधी ताजगी व सर्वश्रेष्ठ मार्जिन" : "Factory-Fresh Batches & Fast Dispatch",
                  desc:
                    lang === "hi"
                      ? "साह फूड इंडस्ट्रीज, सिलीगुड़ी (पश्चिम बंगाल – 734001) में एम. साह की देखरेख में निर्मित। बिना लंबे गोदाम ठहराव के सीधे ताजा बैच डिलीवर होते हैं — जिससे मिले अधिकतम खुशबू और व्यापारियों को सबसे बढ़िया मुनाफा।"
                      : "Manufactured by Sah Food Industries in Siliguri, Darjeeling (734001) under owner M Sah’s personal supervision. Delivered fresh with no long warehouse decay — ensuring peak aroma for homes and superior margins for partners.",
                  highlight: lang === "hi" ? "सिलीगुड़ी पिन: 734001 • त्वरित डिलीवरी" : "Direct Siliguri Dispatch (734001)",
                  accentColor: "group-hover:border-primary/50",
                  iconBg: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
                },
              ].map((feat, idx) => (
                <Reveal key={feat.title} delay={idx * 80}>
                  <div className={`h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-background border border-border/80 ${feat.accentColor} hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden`}>
                    {/* Top ambient colored accent line */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Micro Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-[11px] font-semibold text-muted-foreground mb-4">
                        <span>{feat.badge}</span>
                      </div>

                      {/* Icon */}
                      <div className={`size-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${feat.iconBg}`}>
                        <feat.icon className="size-6 transition-transform group-hover:scale-110" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg text-foreground mb-2.5 leading-snug">
                        {feat.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    {/* Bottom Slogan / Feature Pill */}
                    <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-xs">
                      <span className="font-semibold text-primary/90 font-hindi">
                        {feat.highlight}
                      </span>
                      <Sparkles className="size-3 text-amber-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            WHY CHOOSE US ANIMATED BANNER SHOWCASE (AUTO-RUNNING 4-5 SECONDS CAROUSEL)
           ========================================================================= */}
        <WhyChooseUsBannerSlider />

        {/* =========================================================================
            3. INTERACTIVE KITCHEN GUIDE: "WHAT ARE YOU COOKING TODAY?"
           ========================================================================= */}
        <CookingGuide />

        {/* =========================================================================
            4. PRODUCT SECTION — MAJOR UPGRADE (EXPLORE OUR PRODUCTS)
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="container-page">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <Reveal>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {t("products.tag")}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold font-display">
                    {t("products.title")}
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-lg">
                    {t("products.sub")}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors group"
                >
                  <span>{t("products.viewCatalog")}</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {featuredProducts.map((p, idx) => (
                <Reveal key={p.id} delay={idx * 60}>
                  <div className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lift transition-all duration-300">
                    {/* Product Image Stage (contain fit to protect packaging) */}
                    <div className="relative aspect-4/3 bg-gradient-to-b from-muted/30 to-muted/80 p-6 flex items-center justify-center overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="max-h-full w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-400"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        {p.hindiName && (
                          <span className="inline-flex items-center rounded-full bg-cocoa/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-accent leading-normal overflow-visible">
                            {p.hindiName}
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-foreground border border-border/50 leading-normal">
                          {categories.find((c) => c.id === p.category)?.name}
                        </span>
                      </div>

                      {/* Quick Add To Bag Button */}
                      <button
                        type="button"
                        onClick={() => addToOrderBag(p.slug)}
                        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/95 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-foreground border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all active:scale-95"
                        title="Add to WhatsApp Order Bag"
                      >
                        <Plus className="size-3.5 text-accent" />
                        <span>{t("products.addBag")}</span>
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                          {lang === "hi" && p.hindiName ? p.hindiName : p.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {p.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border/80 flex items-center justify-between gap-3">
                        <a
                          href={waLink(waMessages.product(p.name))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold bg-leaf hover:bg-leaf/90 text-leaf-foreground px-4 py-2.5 rounded-full transition-transform active:scale-95 shadow-sm"
                          aria-label={`Enquire about ${p.name} on WhatsApp`}
                        >
                          <MessageCircle className="size-3.5" />
                          <span>{t("products.enquire")}</span>
                        </a>

                        <Link
                          to="/products"
                          className="text-xs font-semibold text-foreground/80 hover:text-primary flex items-center gap-1"
                        >
                          {t("products.viewDetails")} <ChevronRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. OUR SERVICE NETWORK — WEST BENGAL & ENTIRE NORTH BIHAR (22 DISTRICTS)
           ========================================================================= */}
        <ServiceNetworkSection />

        {/* =========================================================================
            6. REGIONAL TADKA & FLAVOR MATCHER (भारत का स्वाद)
           ========================================================================= */}
        <RegionalTadkaMatcher />

        {/* =========================================================================
            6. PURITY EXPLORER (THE 4 PILLARS OF CITY KING PURITY)
           ========================================================================= */}
        <PurityExplorer />

        {/* =========================================================================
            7. DIY KITCHEN SCIENCE: HOME PURITY WATER TEST
           ========================================================================= */}
        <PurityWaterTest />

        {/* =========================================================================
            8. SIGNATURE BRAND MOMENT — FULL-WIDTH MEMORABLE VISUAL
           ========================================================================= */}
        <section className="relative py-24 bg-cocoa text-cocoa-foreground overflow-hidden text-center">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={textureDark}
              alt="City King Golden Spice Texture"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cocoa/95 via-cocoa/85 to-cocoa/95" />
            <div className="absolute inset-0 bg-radial from-transparent via-cocoa/40 to-cocoa" />
          </div>

          <div className="container-page relative z-10 max-w-4xl mx-auto space-y-6">
            <Reveal>
              <div className="flex flex-col items-center justify-center mb-3">
                <div className="relative p-3 rounded-full bg-gradient-to-b from-accent/20 to-black/40 border border-accent/40 shadow-2xl backdrop-blur-md">
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-pulse-glow" />
                  <img
                    src={citykingLogo}
                    alt="City King Official Logo"
                    className="relative size-20 sm:size-24 object-contain drop-shadow-[0_10px_20px_rgba(245,158,11,0.5)] transition-transform hover:scale-110 duration-300"
                  />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                CITY KING SPICES • SAH FOOD INDUSTRIES
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-balance">
                "Laye Swad me Bahar"
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-display text-xl sm:text-2xl text-accent font-medium">
                शुद्ध मसाले यानी सिटी किंग मसाले
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-cocoa-foreground/75 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                {lang === "hi"
                  ? "हर भारतीय घर में प्यार से बनने वाले भोजन के लिए शुद्धता, प्राकृतिक महक और लाजवाब स्वाद।"
                  : "Prepared with purity, fresh aroma and traditional taste for every dish prepared with love in Indian homes."}
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="pt-2 flex justify-center">
                <Link
                  to="/brand"
                  className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3.5 shadow-card transition-all hover:scale-105"
                >
                  <span>{lang === "hi" ? "हमारा ब्रांड संकल्प" : "Discover Our Brand Promise"}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =========================================================================
            9. BRAND STORY SECTION — EDITORIAL ELEGANCE
           ========================================================================= */}
        <section className="py-20 bg-background">
          <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t("story.tag")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mt-2 leading-tight">
                  {t("story.title")}
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {t("story.p1")}
                </p>
              </Reveal>

              <Reveal delay={150}>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {t("story.p2")}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="p-6 rounded-2xl bg-card border border-border border-l-4 border-l-primary space-y-2">
                  <p className="font-display text-lg font-bold text-foreground">
                    "Laye Swad me Bahar"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    शुद्ध मसाले यानी सिटी किंग मसाले — {lang === "hi" ? "शुद्धता और ईमानदारी का वादा।" : "Our promise of honesty, purity, and unmatched flavour."}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 transition-colors"
                  >
                    <span>{t("story.readStory")}</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    to="/distributor"
                    className="inline-flex items-center gap-2 rounded-full border border-border hover:border-primary font-medium px-6 py-3 transition-colors"
                  >
                    <span>{t("b2b.btn")}</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
                  <img
                    src={storyFood}
                    alt="Authentic meal prepared with City King Spices"
                    className="w-full h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-cocoa-foreground">
                    <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                      Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling
                    </span>
                    <h3 className="font-display text-2xl font-bold mt-1">
                      Sah Food Industries
                    </h3>
                    <p className="text-xs text-cocoa-foreground/85 mt-1">
                      Founder: {site.owner} ({site.founderShort}) • Call: {site.phonePrimary} / {site.phoneSecondary}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. REGIONAL PRESENCE & LOGISTICS HUB
           ========================================================================= */}
        <RegionalPresence />

        {/* =========================================================================
            13. GALLERY UPGRADE — VISUAL TEASER
           ========================================================================= */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container-page">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <Reveal>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {lang === "hi" ? "सिटी किंग गैलरी" : "Visual Moments"}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold font-display">
                    {lang === "hi" ? "मसालों की दुनिया" : "Inside City King"}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {lang === "hi" ? "हमारे साबुत व पिसे मसाले, प्रीमियम पैकिंग और रसोई के खास पल।" : "Glimpse our whole spices, ground powders, and food moments."}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>{lang === "hi" ? "पूरी गैलरी देखें" : "Open Full Gallery"}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {previewGallery.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 50}>
                  <Link
                    to="/gallery"
                    className="group relative rounded-2xl overflow-hidden aspect-square border border-border bg-muted block shadow-sm hover:shadow-card transition-all"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[11px] text-cocoa-foreground font-medium line-clamp-2">
                        {item.alt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            14. FREQUENTLY ASKED QUESTIONS & KNOWLEDGE HUB
           ========================================================================= */}
        <FaqSection />

        {/* =========================================================================
            15. CONTACT / B2B CALLOUT
           ========================================================================= */}
        <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container-page relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-black/20 text-accent text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                {t("b2b.tag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight">
                {t("b2b.title")}
              </h2>
              <p className="text-primary-foreground/85 text-sm sm:text-base">
                {t("b2b.sub")}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                to="/distributor"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-accent font-semibold px-7 py-4 rounded-full shadow-card hover:shadow-lift transition-all hover:scale-105"
              >
                <span>{t("b2b.btn")}</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground font-medium px-6 py-4 rounded-full transition-colors"
              >
                <Phone className="size-4" />
                <span>Call {site.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



