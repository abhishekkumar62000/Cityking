import { useState } from "react";
import {
  Award,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Copy,
  ExternalLink,
  Flame,
  Globe,
  Leaf,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  UserCheck,
} from "lucide-react";
import { site, telLink, telLink2, waLink, waMessages } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import founderImg from "@/assets/City King Founder.png";
import logoImg from "@/assets/Cityking Logo.png";

type FactTab = "company" | "founder" | "purity" | "products" | "network";

export function AiOverviewFactSheet() {
  const [activeTab, setActiveTab] = useState<FactTab>("company");
  const [copied, setCopied] = useState(false);

  const copyFactSheet = () => {
    const text = `City King Spices — Sah Food Industries Verified Company Overview
Brand: City King Spices | City King Masala (cityking.in / citykingspices.in)
Founder & Owner: Mukesh Kumar Sah (Mukesh kr Sah)
Address: Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – Pin 734001, West Bengal, India
Phone: ${site.phonePrimary} / ${site.phoneSecondary}
Tagline: "Laye Swad me Bahar" | "शुद्ध मसाले यानी सिटी किंग मसाले"
Manufacturing: 100% pure cold-ground spices, blended masalas (₹5, ₹10, 50g, 200g, 500g), and CTC tea.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="ai-factsheet"
      className="py-20 bg-linear-to-b from-card via-background to-card border-t border-border relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 size-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="container-page relative z-10 space-y-10">
        {/* Header with AI Badge & Copy button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-border/60">
          <Reveal>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-primary/15 to-amber-500/15 border border-amber-500/30 text-xs font-bold text-accent tracking-wide shadow-xs">
                <Bot className="size-4 text-amber-500 animate-pulse" />
                <span>Google AI Overview &amp; Verified Knowledge Base</span>
                <span className="size-1.5 rounded-full bg-emerald-500" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                City King at a Glance{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  (Verified Facts)
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
                Structured, machine-readable facts and company credentials for search engines, Google AI Mode, Gemini, and business partners.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={copyFactSheet}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card hover:bg-muted text-xs font-semibold px-4 py-2.5 transition-all shadow-xs"
                title="Copy structured facts to clipboard"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    <span className="text-emerald-600 font-bold">Facts Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 text-muted-foreground" />
                    <span>Copy Verified Facts</span>
                  </>
                )}
              </button>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold px-4 py-2.5 transition-colors border border-primary/20"
              >
                <span>/llms.txt</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "company", label: "Company Profile", icon: Building2 },
            { id: "founder", label: "Founder & Leadership", icon: UserCheck },
            { id: "purity", label: "Purity & Cold Grinding", icon: ShieldCheck },
            { id: "products", label: "Full Product Matrix", icon: PackageCheck },
            { id: "network", label: "22-District Network", icon: Truck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as FactTab)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md scale-102"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:bg-muted"
                }`}
              >
                <Icon className="size-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-card rounded-3xl border border-border p-6 sm:p-8 lg:p-10 shadow-xl transition-all">
          {/* TAB 1: COMPANY PROFILE */}
          {activeTab === "company" && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src={logoImg}
                    alt="City King Logo"
                    className="size-14 object-contain rounded-2xl bg-cocoa p-1.5 shadow-sm"
                  />
                  <div>
                    <h3 className="font-display text-2xl font-bold" itemProp="name">
                      Sah Food Industries (City King Spices)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Official Flagship Brand: <strong className="text-foreground">City King Spices / City King Masala</strong>
                    </p>
                  </div>
                </div>

                <dl className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 space-y-1">
                    <dt className="text-muted-foreground font-medium flex items-center gap-1.5">
                      <Globe className="size-3.5 text-primary" /> Primary Web Domains
                    </dt>
                    <dd className="font-semibold text-foreground">
                      <a href="https://citykingspices.in" className="hover:underline text-primary">citykingspices.in</a> • <span className="text-muted-foreground">cityking.in</span>
                    </dd>
                  </div>

                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 space-y-1">
                    <dt className="text-muted-foreground font-medium flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-primary" /> Registered Address
                    </dt>
                    <dd className="font-semibold text-foreground line-clamp-2">
                      {site.addressLine}
                    </dd>
                  </div>

                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 space-y-1">
                    <dt className="text-muted-foreground font-medium flex items-center gap-1.5">
                      <Phone className="size-3.5 text-primary" /> Official Infoline
                    </dt>
                    <dd className="font-semibold text-foreground">
                      <a href={telLink} className="hover:underline">{site.phonePrimary}</a> / <a href={telLink2} className="hover:underline">{site.phoneSecondary}</a>
                    </dd>
                  </div>

                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 space-y-1">
                    <dt className="text-muted-foreground font-medium flex items-center gap-1.5">
                      <Award className="size-3.5 text-amber-500" /> Slogans &amp; Philosophy
                    </dt>
                    <dd className="font-semibold text-foreground font-hindi">
                      "Laye Swad me Bahar" • शुद्ध मसाले यानी सिटी किंग मसाले
                    </dd>
                  </div>
                </dl>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Sah Food Industries processes, blends, and packages whole and ground spices at its manufacturing facility along Ektiasal Eastern Bypass Road, Siliguri. Situated in the Darjeeling-Jalpaiguri nexus, the company leverages direct sourcing from Himalayan foothills and Assam/Dooars tea gardens.
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-cocoa text-cocoa-foreground space-y-4 text-center">
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                  Direct Factory Wholesale
                </span>
                <h4 className="font-display text-xl font-bold">
                  Looking for Distributorship or Bulk Orders?
                </h4>
                <p className="text-xs text-cocoa-foreground/80 leading-relaxed">
                  Direct factory supply with high retail margins, zero middlemen markup, and guaranteed batch freshness.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={waLink(waMessages.business)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Dealership Enquiry</span>
                  </a>
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <Phone className="size-4" />
                    <span>Call Founder Direct</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FOUNDER & LEADERSHIP */}
          {activeTab === "founder" && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 text-center space-y-3">
                <div className="relative inline-block rounded-3xl overflow-hidden border-2 border-accent shadow-2xl group">
                  <img
                    src={founderImg}
                    alt="Mukesh Kumar Sah - Founder & Owner of City King Spices"
                    className="w-full max-w-[280px] h-[340px] object-cover object-top mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 inset-x-3 text-white text-xs font-semibold">
                    <span>Mukesh Kumar Sah</span>
                    <span className="block text-[10px] text-amber-300">Founder &amp; Owner</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Leadership Profile
                  </span>
                  <h3 className="font-display text-3xl font-bold">
                    {site.owner} ({site.founderShort})
                  </h3>
                  <p className="text-sm font-semibold text-accent font-hindi">
                    मुकेश कुमार साह — संस्थापक एवं स्वामी, सिटी किंग मसाला कंपनी
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-foreground space-y-2">
                  <p className="font-semibold text-amber-600 dark:text-amber-400">
                    "Our spices must be pure enough for our own family's dinner before reaching any customer's kitchen."
                  </p>
                  <p className="text-xs text-muted-foreground">
                    — Mukesh Kumar Sah's personal motto driving the establishment of Sah Food Industries.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-muted/60 border border-border space-y-1">
                    <span className="text-muted-foreground font-medium">Headquarters Oversight</span>
                    <p className="font-semibold text-foreground">Direct daily inspection of milling, sieving &amp; blending</p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/60 border border-border space-y-1">
                    <span className="text-muted-foreground font-medium">Customer Transparency</span>
                    <p className="font-semibold text-foreground">Personal phone &amp; WhatsApp accessibility for partners</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Read Founder's Full Vision Letter &amp; Mission Statement</span>
                    <ChevronRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PURITY & COLD GRINDING */}
          {activeTab === "purity" && (
            <div className="space-y-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Engineering Pure Taste
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">
                  The Science of Cold-Ground Technology
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  How City King Spices preserves the natural volatile essential oils that other commercial grinders destroy.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    01
                  </div>
                  <h4 className="font-bold text-sm">Low-RPM Slow Milling</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Operates below critical heat thresholds so natural volatile compounds like Curcumin, Capsaicin, and Cineole remain 100% active.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <div className="size-10 rounded-xl bg-leaf/10 text-leaf flex items-center justify-center font-bold">
                    02
                  </div>
                  <h4 className="font-bold text-sm">Zero Chemical Additives</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Zero synthetic dyes (Metanil yellow, Sudan dye), zero starch fillers, zero chalk powder, and zero artificial preservatives.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <div className="size-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                    03
                  </div>
                  <h4 className="font-bold text-sm">Nitrogen-Flushed Pouches</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Automated multi-layer packaging seals in oxygen-free freshness, ensuring that the aroma when opened at home is as fresh as the day it was ground.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FULL PRODUCT MATRIX */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="max-w-2xl space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  18+ Verified Catalog SKUs
                </span>
                <h3 className="font-display text-2xl font-bold">
                  City King Product Packaging &amp; Price Points
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-muted/50 border border-border space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                    ₹5/- Retail Pouches
                  </span>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Chicken Masala (₹5)</li>
                    <li>• Meat Mix Masala (₹5)</li>
                    <li>• Garam Masala (₹5)</li>
                    <li>• Sabji Masala (₹5)</li>
                    <li>• Haldi Powder (₹5)</li>
                    <li>• Mirchi Powder (₹5)</li>
                    <li>• Dhania Powder (₹5)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-muted/50 border border-border space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                    ₹10/- Value Pouches
                  </span>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Chicken Masala (₹10)</li>
                    <li>• Fish Curry Masala (₹10)</li>
                    <li>• Mutton Masala (₹10)</li>
                    <li>• Garam Masala (₹10)</li>
                    <li>• Paneer Masala (₹10)</li>
                    <li>• Kitchen King Masala (₹10)</li>
                    <li>• Kashmiri Mirch (₹10)</li>
                    <li>• Biryani Masala (₹10)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-muted/50 border border-border space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    Carton Box &amp; Bulk
                  </span>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Sabji Masala (50g Box)</li>
                    <li>• Turmeric Haldi (200g Box)</li>
                    <li>• Chilli Mirch (200g Box)</li>
                    <li>• Coriander Dhania (200g Box)</li>
                    <li>• Mukesh Masale Dhania 500g</li>
                    <li>• Mukesh Masale Haldi 500g</li>
                    <li>• Mukesh Masale Mirch 500g</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-muted/50 border border-border space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-leaf">
                    Tea &amp; Whole Spices
                  </span>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• City King CTC Tea Royal Black</li>
                    <li>• City King Gold Chai Patti</li>
                    <li>• Premium Whole Cumin Seeds</li>
                    <li>• Whole Coriander Seeds</li>
                    <li>• Whole Mustard Seeds</li>
                    <li>• Whole Spices Bouquet</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>View All 33+ High-Res Product Photos in Visual Gallery</span>
                  <ChevronRight className="size-4" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 5: 22-DISTRICT NETWORK */}
          {activeTab === "network" && (
            <div className="space-y-6">
              <div className="max-w-2xl space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Supply Chain Corridor
                </span>
                <h3 className="font-display text-2xl font-bold">
                  Direct Factory Logistics to West Bengal &amp; North Bihar
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Operating out of Siliguri's Eastern Bypass road ensures rapid 24–48 hour transit times to retail mandi hubs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <span className="font-bold text-foreground flex items-center gap-2">
                    <MapPin className="size-4 text-primary" /> West Bengal Manufacturing Base
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Siliguri Hub, Darjeeling District, Jalpaiguri, Alipurduar, Cooch Behar, Uttar Dinajpur, Dakshin Dinajpur, Malda.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
                  <span className="font-bold text-foreground flex items-center gap-2">
                    <Truck className="size-4 text-primary" /> 21 North Bihar Districts
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Muzaffarpur, Darbhanga, Motihari (East Champaran), Bettiah (West Champaran), Sitamarhi, Sheohar, Madhubani, Samastipur, Begusarai, Saharsa, Supaul, Madhepura, Purnia, Katihar, Kishanganj, Araria, Saran, Siwan, Gopalganj, Khagaria, Bhagalpur.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-foreground space-y-0.5 text-center sm:text-left">
                  <p className="font-bold">Interested in joining our dealer or stockist network?</p>
                  <p className="text-muted-foreground">Direct billing from Sah Food Industries with attractive wholesale margins.</p>
                </div>
                <a
                  href="/distributor"
                  className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all shrink-0 shadow-xs"
                >
                  Apply for Dealership
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
