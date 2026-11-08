import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Flame,
  Layers,
  Leaf,
  ShieldAlert,
  Sparkles,
  Sun,
  Utensils,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site, waLink, waMessages } from "@/data/site";
import heroImg from "@/assets/hero-spices.jpg";
import textureImg from "@/assets/texture-spice-dark.jpg";
import citykingLogo from "@/assets/Cityking Logo.png";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Brand Philosophy & Purity Promise | City King Spices | Sah Food Industries | cityking.in" },
      {
        name: "description",
        content:
          "Discover the City King brand promise (cityking.in) — “Laye Swad me Bahar - शुद्ध मसाले यानी सिटी किंग मसाले”. Founded by Mukesh Kumar Sah at Sah Food Industries, Siliguri. Zero artificial dyes, zero starch fillers, cold milling technology preserving natural volatile oils and authentic Indian spices flavor.",
      },
      {
        name: "keywords",
        content:
          "City King Brand, Laye Swad me Bahar, Spice Purity Standard, Cold Grinding Technology, No Artificial Colors, Authentic Indian Spices, Sah Food Industries Siliguri, Mukesh Kumar Sah Vision, cityking.in, citykingspices.in, शुद्ध मसाले यानी सिटी किंग मसाले",
      },
      { property: "og:title", content: "Brand Philosophy & Purity | City King Spices (cityking.in)" },
      {
        property: "og:description",
        content: "Our commitment to unadulterated spices for every Indian kitchen. Sah Food Industries Siliguri.",
      },
      { property: "og:url", content: "https://citykingspices.in/brand" },
      { property: "og:image", content: "https://citykingspices.in/Cityking%20Logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "City King Spices Brand Philosophy" },
      { name: "twitter:description", content: "100% pure cold-ground spices from Sah Food Industries Siliguri." },
      { name: "twitter:image", content: "https://citykingspices.in/Cityking%20Logo.png" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: "https://citykingspices.in/brand" }],
  }),
  component: BrandPage,
});

function BrandPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative py-20 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="container-page relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-2">
              <div className="p-3 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-md shadow-lg">
                <img
                  src={citykingLogo}
                  alt="City King Crown Crest"
                  className="size-20 object-contain drop-shadow-[0_8px_16px_rgba(245,158,11,0.4)]"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>The Brand Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              The City King Spices Promise
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              शुद्ध मसाले यानी सिटी किंग मसाले — The culinary heartbeat of authentic Indian kitchens.
            </p>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="py-20 bg-background">
          <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Philosophy</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display">
                  Why "City King"?
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-muted-foreground leading-relaxed">
                  In every Indian household, food is love, celebration, and tradition. Spices are not mere seasonings — they are the soul of the dish.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>City King</strong> was created to be the king of flavours in your home and in your city. We believe great food doesn't need complicated recipes; it needs pure, potent, and honest spices that release their aroma the instant they touch warm oil.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Sun className="size-6 text-accent mb-2" />
                    <h4 className="font-bold text-sm">Sun-Dried Quality</h4>
                    <p className="text-xs text-muted-foreground mt-1">Sourced from optimal climatic zones.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Flame className="size-6 text-primary mb-2" />
                    <h4 className="font-bold text-sm">Rich Colour & Heat</h4>
                    <p className="text-xs text-muted-foreground mt-1">Natural pigments with zero adulterants.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={150}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
                  <img
                    src={textureImg}
                    alt="City King Golden Spices"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-transparent to-transparent flex items-end p-8">
                    <div className="text-cocoa-foreground">
                      <p className="text-xs uppercase tracking-widest text-accent font-semibold">City King Standard</p>
                      <h3 className="text-2xl font-bold font-display">Pure Golden Turmeric & Fresh Masalas</h3>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* COMPARISON / WHAT MAKES US DIFFERENT */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container-page max-w-4xl">
            <Reveal>
              <div className="text-center mb-16 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Uncompromising Difference</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display">The City King Purity Difference</h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              <Reveal delay={100}>
                <div className="p-6 rounded-2xl bg-background border border-primary/40 space-y-4 h-full">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">City King Spices</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-foreground/90">
                    <li className="flex items-center gap-2">✓ 100% pure raw spices with natural oils</li>
                    <li className="flex items-center gap-2">✓ Ground at slow speeds to preserve vital aroma</li>
                    <li className="flex items-center gap-2">✓ Free of synthetic dyes, rice flour, and starch</li>
                    <li className="flex items-center gap-2">✓ Packaged under strict hygiene conditions in Siliguri</li>
                    <li className="flex items-center gap-2">✓ Rich aroma in small quantities — highly economical</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="p-6 rounded-2xl bg-background/60 border border-border space-y-4 h-full opacity-85">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">
                      ✗
                    </div>
                    <h3 className="font-display font-bold text-lg text-muted-foreground">Market Loose Spices</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">✗ Mixed with husks and low-grade fillers</li>
                    <li className="flex items-center gap-2">✗ Overheated grinding that destroys natural aroma</li>
                    <li className="flex items-center gap-2">✗ Artificial colorants to fake brightness</li>
                    <li className="flex items-center gap-2">✗ Open-air dust and humidity contamination</li>
                    <li className="flex items-center gap-2">✗ Requires double the quantity for standard taste</li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3.5 shadow-card hover:shadow-lift transition-all hover:scale-105"
              >
                <span>Discover the City King Catalog</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
