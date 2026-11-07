import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site, telLink, waLink, waMessages } from "@/data/site";
import storyFood from "@/assets/story-food.jpg";
import kitchenImg from "@/assets/gallery-kitchen.jpg";
import wholeSpices from "@/assets/gallery-whole-spices.jpg";
import citykingLogo from "@/assets/Cityking Logo.png";
import founderImg from "@/assets/City King Founder.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Mukesh Kumar Sah & Sah Food Industries | City King Spices Siliguri" },
      {
        name: "description",
        content:
          "Discover Sah Food Industries, founded by Mukesh Kumar Sah (Founder & Owner) at Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling (WB – 734001). Dedicated to 100% pure cold-ground spices, everyday blended masalas, and authentic CTC tea.",
      },
      {
        name: "keywords",
        content:
          "About City King Spices, Sah Food Industries Siliguri, Mukesh Kumar Sah, Mukesh kr Sah, Founder City King, Darjeeling Spice Factory, Jalpaiguri Masala Manufacturer, Ektiasal Eastern Bypass Road, Cold Ground Masala Story, Laye Swad me Bahar, cityking.in",
      },
      { property: "og:title", content: "About Sah Food Industries & Founder Mukesh Kumar Sah | City King Spices" },
      {
        property: "og:description",
        content: "The authentic story of Sah Food Industries, founded by Mukesh Kumar Sah in Siliguri. 100% pure spices and tea.",
      },
      { property: "og:url", content: "https://citykingspices.in/about" },
      { property: "og:image", content: "https://citykingspices.in/City%20King%20Founder.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About City King Spices | Sah Food Industries" },
      { name: "twitter:description", content: "Founded by Mukesh Kumar Sah in Siliguri, West Bengal. 100% pure cold-ground spices." },
      { name: "twitter:image", content: "https://citykingspices.in/City%20King%20Founder.png" },
    ],
    links: [{ rel: "canonical", href: "https://citykingspices.in/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
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
                  alt="City King Official Brand Logo"
                  className="size-20 object-contain drop-shadow-[0_8px_16px_rgba(245,158,11,0.4)]"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>Our Heritage & Purpose</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              About {site.company}
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              Crafting honest, aromatic, and pure Indian spices from the foothills of Siliguri, West Bengal.
            </p>
          </div>
        </section>

        {/* FOUNDER & ORIGIN STORY */}
        <section className="py-20 bg-background">
          <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">The Origin</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display mt-1">
                  Rooted in Passion for Authentic Spices
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>{site.company}</strong> was founded by <strong>{site.owner}</strong> ({site.founderTitle}) at <strong>{site.streetAddress}, {site.city}, {site.district} (Pin {site.pincode}, {site.state})</strong> with a visionary purpose: to bring uncompromised spice purity to every Indian family's dining table.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <p className="text-muted-foreground leading-relaxed">
                  In a market often crowded with adulterated spices and artificial flavorings, <strong>City King Spices</strong> stands firmly for genuine taste. We source high-grade raw spices directly, clean them meticulously, and grind them under strict hygiene parameters to keep the essential aroma intact.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="p-6 rounded-2xl bg-card border border-border border-l-4 border-l-primary space-y-2">
                  <p className="font-display font-bold text-lg text-foreground italic">
                    "शुद्ध मसाले यानी सिटी किंग मसाले"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Our guiding principle — our spices must be pure enough for our own family's kitchen before reaching yours.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-accent/40 bg-card group">
                  <img
                    src={founderImg}
                    alt="Mukesh Kumar Sah - Founder & Owner of City King Masala Company (Sah Food Industries Siliguri)"
                    className="w-full h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/95 via-cocoa/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-cocoa-foreground space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/25 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      <Sparkles className="size-3.5" />
                      <span>Founder &amp; Owner</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                      {site.owner}
                    </h3>
                    <p className="text-cocoa-foreground/90 text-xs sm:text-sm font-medium">
                      Sah Food Industries • City King Masala Company
                    </p>
                    <div className="flex items-center gap-2 text-accent text-xs pt-1">
                      <MapPin className="size-3.5 shrink-0" />
                      <span className="line-clamp-1">{site.addressLine}</span>
                    </div>
                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-white transition-colors underline underline-offset-4"
                      >
                        Read Founder's Full Personal Message &amp; Vision →
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CORE PILLARS */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container-page">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">What We Stand For</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display">Our Core Values</h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Purity & Integrity",
                  desc: "We never compromise with fillers, artificial dyes, or starch. Every pack contains 100% natural, tested spices.",
                },
                {
                  icon: Heart,
                  title: "Flavor Preservation",
                  desc: "Our processing techniques preserve the natural volatile oils, guaranteeing rich aroma in every curry and tadka.",
                },
                {
                  icon: Users,
                  title: "Community & Trust",
                  desc: "We take immense pride in supporting local farmers, distributors, and kitchen cooks with consistent reliability.",
                },
              ].map((val, i) => (
                <Reveal key={val.title} delay={i * 100}>
                  <div className="p-8 rounded-2xl bg-background border border-border h-full space-y-4">
                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <val.icon className="size-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FACTORY & QUALITY GLIMPSE */}
        <section className="py-20 bg-background">
          <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Process</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display">From Whole Spices to Your Kitchen</h2>
                <div className="space-y-4">
                  {[
                    "Selection of the finest whole turmeric roots, red chillies, coriander, and cumin.",
                    "Hygienic cleaning and stone-free sorting.",
                    "Controlled low-temperature grinding to prevent loss of natural aroma.",
                    "Moisture-proof, airtight packaging for long shelf life.",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-leaf shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3"
                  >
                    View All Products
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border hover:border-primary font-medium px-6 py-3"
                  >
                    Contact Sah Food Industries
                  </Link>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={100}>
                <img
                  src={wholeSpices}
                  alt="Whole Indian Spices"
                  className="rounded-2xl h-64 w-full object-cover shadow-card"
                />
              </Reveal>
              <Reveal delay={200}>
                <img
                  src={kitchenImg}
                  alt="Cooking with City King Spices"
                  className="rounded-2xl h-64 w-full object-cover shadow-card mt-8"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
