import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  MapPin,
  Search,
  Truck,
  Building2,
  Store,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Phone,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Award,
  PackageCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { serviceDistricts, DistrictServiceArea } from "@/data/network";
import { site, telLink, telLink2, waLink, waMessages } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Service Network | West Bengal & 21 North Bihar Districts | City King Spices | cityking.in" },
      {
        name: "description",
        content:
          "City King Spices (cityking.in) retail and distributor supply network across Siliguri, Dist- (Jalpaiguri) Darjeeling (WB) and 21 districts of North Bihar: Muzaffarpur, Darbhanga, Champaran, Purnia, Samastipur, Madhubani, Saharsa, Begusarai, etc. Direct factory dispatch from Sah Food Industries.",
      },
      {
        name: "keywords",
        content:
          "City King Service Network, Masala Distributor North Bihar, Spices Siliguri Darjeeling, Kirana Supply Muzaffarpur, Darbhanga Masala Mandi, Purnia Spice Wholesale, Motihari Bettiah Spices, Sah Food Industries Network, cityking.in network, citykingspices.in supply",
      },
      { property: "og:title", content: "Service & Supply Network | City King Spices (cityking.in)" },
      {
        property: "og:description",
        content: "Serving West Bengal and all 21 districts of North Bihar with fresh pure spices from Sah Food Industries Siliguri.",
      },
      { property: "og:url", content: "https://citykingspices.in/network" },
      { property: "og:image", content: "https://citykingspices.in/hero-spices.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "City King Spices Service Network" },
      { name: "twitter:description", content: "Direct factory distribution across West Bengal and 21 North Bihar districts." },
      { name: "twitter:image", content: "https://citykingspices.in/hero-spices.jpg" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: "https://citykingspices.in/network" }],
  }),
  component: NetworkPage,
});

type RegionFilter = "All" | "West Bengal" | "Tirhut" | "Saran" | "Mithila" | "Kosi" | "Seemanchal";

function NetworkPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>("All");
  const { lang, t } = useLanguage();

  const filteredDistricts = useMemo(() => {
    return serviceDistricts.filter((item) => {
      const matchesRegion = selectedRegion === "All" || item.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.hindiName.toLowerCase().includes(q) ||
        item.regionLabel.toLowerCase().includes(q) ||
        item.majorTowns.some((t) => t.toLowerCase().includes(q)) ||
        item.highwayRoute.toLowerCase().includes(q);

      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24">
        {/* =========================================================================
            1. HERO SECTION — OUR SERVICE NETWORK (WEST BENGAL & NORTH BIHAR)
           ========================================================================= */}
        <section className="relative py-16 sm:py-20 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-500/15 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-radial from-transparent via-cocoa/70 to-cocoa" />
          </div>

          <div className="container-page relative z-10 max-w-4xl mx-auto text-center space-y-4 px-4">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent backdrop-blur-md">
                <MapPin className="size-3.5" />
                <span>{lang === "hi" ? "हमारा सेवा और वितरण क्षेत्र" : "OUR SERVICE & RETAIL NETWORK"}</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.2] text-balance">
                West Bengal <span className="text-amber-400 font-normal">|</span> Entire North Bihar
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-sm sm:text-base md:text-lg text-cocoa-foreground/85 max-w-2xl mx-auto leading-relaxed">
                {lang === "hi" ? (
                  <>
                    <strong className="text-white">सिटी किंग मसाला कंपनी</strong> की सेवाएं पूरे{" "}
                    <strong className="text-amber-300">उत्तर बिहार के सभी 21 जिलों</strong> के बाजारों में पूरी तरह
                    सक्रिय हैं, और साथ ही <strong className="text-white">सिलीगुड़ी व दार्जिलिंग (पश्चिम बंगाल)</strong> के
                    हर जनरल स्टोर व किराना दुकानों में हमारा असली मसाला उपलब्ध है।
                  </>
                ) : (
                  <>
                    <strong className="text-white">City King Masala Company</strong> proudly services the{" "}
                    <strong className="text-amber-300">entire 21 districts of North Bihar</strong> and across{" "}
                    <strong className="text-white">Siliguri, Darjeeling (West Bengal)</strong> — actively stocked in
                    everyday General Stores and Kirana shops.
                  </>
                )}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-medium text-cocoa-foreground/80">
                <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Building2 className="size-3.5 text-accent" />
                  Siliguri Factory HQ (Pin 734001)
                </span>
                <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Store className="size-3.5 text-leaf" />
                  21 North Bihar Districts
                </span>
                <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Truck className="size-3.5 text-amber-400" />
                  Same-Day / Next-Day Road Dispatch
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =========================================================================
            2. INTERACTIVE DISTRICT SEARCH & DIRECTORY
           ========================================================================= */}
        <section className="py-14 sm:py-20 bg-background">
          <div className="container-page px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            {/* Search & Filter Header */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {lang === "hi" ? "उपलब्धता खोजें" : "Locate Your Market"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display">
                  {lang === "hi"
                    ? "अपने जिले या नजदीकी कस्बे में सिटी किंग खोजें"
                    : "Find City King Spices in Your District or Town"}
                </h2>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    lang === "hi"
                      ? "जिला, कस्बा या मंडी का नाम लिखें (उदा: दरभंगा, मुजफ्फरपुर, सीतामढ़ी, मोतिहारी, पूर्णिया, सिलीगुड़ी)..."
                      : "Type district, town or trading hub (e.g. Darbhanga, Muzaffarpur, Sitamarhi, Motihari, Purnia, Siliguri)..."
                  }
                  className="w-full pl-11 pr-4 py-3 sm:py-4 rounded-2xl bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary shadow-xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground bg-muted px-2.5 py-1 rounded-full"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Division / Region Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: "All", labelEn: "All 22 Districts", labelHi: "सभी 22 क्षेत्र" },
                  { id: "West Bengal", labelEn: "Siliguri & Darjeeling (HQ)", labelHi: "सिलीगुड़ी, दार्जिलिंग (HQ)" },
                  { id: "Tirhut", labelEn: "Tirhut (6 Districts)", labelHi: "तिरहुत प्रमंडल (6 जिले)" },
                  { id: "Saran", labelEn: "Saran (3 Districts)", labelHi: "सारण प्रमंडल (3 जिले)" },
                  { id: "Mithila", labelEn: "Mithila (4 Districts)", labelHi: "मिथिला प्रमंडल (4 जिले)" },
                  { id: "Kosi", labelEn: "Kosi (4 Districts)", labelHi: "कोशी प्रमंडल (4 जिले)" },
                  { id: "Seemanchal", labelEn: "Seemanchal (4 Districts)", labelHi: "सीमांचल प्रमंडल (4 जिले)" },
                ].map((tab) => {
                  const isActive = selectedRegion === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedRegion(tab.id as RegionFilter)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xs scale-105"
                          : "bg-card text-muted-foreground hover:text-foreground border border-border hover:bg-muted/60",
                      )}
                    >
                      {lang === "hi" ? tab.labelHi : tab.labelEn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Count Strip */}
            <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-3">
              <span>
                Showing <strong>{filteredDistricts.length}</strong> of 22 Active Service Markets
              </span>
              <span>Daily Supply from Sah Food Industries, Siliguri</span>
            </div>

            {/* Districts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDistricts.map((district) => {
                const isHQ = district.id === 0;
                return (
                  <div
                    key={district.id}
                    className={cn(
                      "p-6 rounded-3xl bg-card border transition-all duration-300 hover:shadow-xl flex flex-col justify-between group hover:-translate-y-1",
                      isHQ
                        ? "border-amber-500/60 ring-2 ring-amber-500/20 bg-amber-500/[0.03]"
                        : "border-border hover:border-primary/50",
                    )}
                  >
                    <div className="space-y-4">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-muted-foreground px-2 py-0.5 rounded bg-muted">
                            #{district.id < 10 ? `0${district.id}` : district.id}
                          </span>
                          <span className="text-[11px] font-semibold text-muted-foreground">
                            {district.regionLabel}
                          </span>
                        </div>

                        <span
                          className={cn(
                            "text-[11px] font-bold px-2.5 py-0.5 rounded-full border",
                            isHQ
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                              : district.status === "High Demand"
                                ? "bg-primary/10 text-primary border-primary/20"
                                : "bg-leaf/10 text-leaf border-leaf/20",
                          )}
                        >
                          {isHQ
                            ? "Manufacturing HQ"
                            : district.status === "High Demand"
                              ? "🔥 High Demand"
                              : "✓ General Stores Active"}
                        </span>
                      </div>

                      {/* District Title */}
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-1.5">
                          <span>{district.name}</span>
                          {isHQ && <Sparkles className="size-4 text-amber-500 shrink-0" />}
                        </h3>
                        <p className="text-xs font-semibold text-primary font-hindi mt-0.5">
                          {district.hindiName}
                        </p>
                      </div>

                      {/* Availability Detail */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {lang === "hi" ? district.availabilityNoteHi : district.availabilityNoteEn}
                      </p>

                      {/* Major Towns / Mandis */}
                      <div className="pt-2">
                        <p className="text-xs font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                          <Store className="size-3.5 text-primary" />
                          <span>{lang === "hi" ? "प्रमुख कस्बें व व्यापारिक केंद्र:" : "Key Towns & Mandis:"}</span>
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {district.majorTowns.map((town) => (
                            <span
                              key={town}
                              className="text-xs px-2.5 py-0.5 rounded-lg bg-background text-foreground/80 font-medium border border-border/80 shadow-2xs"
                            >
                              {town}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highway Transit Route */}
                      <div className="pt-1 text-[11px] text-muted-foreground flex items-center gap-1.5">
                        <Truck className="size-3 text-accent" />
                        <span>Route: {district.highwayRoute}</span>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 mt-5 border-t border-border/70 flex items-center justify-between gap-2">
                      <a
                        href={waLink(
                          site.phonePrimary,
                          `Hello Sah Food Industries, I am inquiring about City King Spices in ${district.name}. Please share store locations or dealership details.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-leaf/10 hover:bg-leaf text-leaf hover:text-white text-xs font-bold transition-all shadow-xs"
                      >
                        <MessageCircle className="size-3" />
                        <span>{lang === "hi" ? "दुकान पता करें" : "WhatsApp Inquiry"}</span>
                      </a>

                      <Link
                        to="/distributor"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-semibold"
                      >
                        <span>{lang === "hi" ? "डीलरशिप" : "Dealership"}</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty Search */}
            {filteredDistricts.length === 0 && (
              <div className="text-center py-16 p-8 rounded-3xl bg-card border border-border max-w-md mx-auto space-y-3">
                <Store className="size-10 text-muted-foreground mx-auto" />
                <h4 className="font-bold text-lg text-foreground">
                  {lang === "hi" ? "कोई जिला नहीं मिला" : "No Market Found"}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {lang === "hi"
                    ? "हम पूरे उत्तर बिहार के 21 जिलों और पश्चिम बंगाल में उपलब्ध हैं। कृपया दूसरा नाम खोजें।"
                    : "City King Spices is actively distributed across all 21 districts of North Bihar and West Bengal. Try searching another town or district."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRegion("All");
                  }}
                  className="text-xs font-semibold text-primary underline"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            3. RETAILER & DISTRIBUTOR ONBOARDING BANNER
           ========================================================================= */}
        <section className="py-16 bg-cocoa text-cocoa-foreground border-t border-white/10">
          <div className="container-page max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent">
                  <TrendingUp className="size-3.5" />
                  <span>High Dealer Margins & Reliable Dispatch</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {lang === "hi"
                    ? "अपने कस्बे या बाजार में सिटी किंग के अधिकृत विक्रेता बनें"
                    : "Become an Authorized City King Stockist in Your Market"}
                </h3>
                <p className="text-xs sm:text-sm text-cocoa-foreground/80 leading-relaxed">
                  {lang === "hi"
                    ? "साह फूड इंडस्ट्रीज (सिलीगुड़ी) से सीधे कारखाने के भाव पर शुद्ध मसाले प्राप्त करें। बिना बिचौलियों के सीधा संपर्क, समय पर आपूर्ति और उच्च ग्राहक संतुष्टि।"
                    : "Get fresh batches of unadulterated spices and CTC tea direct from Sah Food Industries' manufacturing facility in Siliguri. Enjoy competitive trade margins and point-of-sale branding support."}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-amber-300">
                  <span>Founder: {site.owner} ({site.founderShort})</span>
                  <span>•</span>
                  <span>Call: {site.phonePrimary} / {site.phoneSecondary}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  to="/distributor"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm font-bold shadow-lg transition-transform hover:scale-105"
                >
                  <span>{lang === "hi" ? "डीलरशिप फॉर्म भरें" : "Apply for Dealership"}</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
                >
                  <Phone className="size-4" />
                  <span>{site.phonePrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
