import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  Building2,
  CheckCircle2,
  Handshake,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Truck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site, telLink, waLink, waMessages } from "@/data/site";

export const Route = createFileRoute("/distributor")({
  head: () => ({
    meta: [
      { title: "Distributor & Dealership Enquiry | City King Spices | Sah Food Industries Siliguri | cityking.in" },
      {
        name: "description",
        content:
          "Partner with City King Spices (cityking.in). Apply for masala dealership, stockist, super stockist, and retail wholesale opportunities across West Bengal, North Bihar, and Eastern India. High margins, dedicated marketing support, and direct factory dispatch from Sah Food Industries, Ektiasal Eastern Bypass Road, Siliguri. Call +91 98326 53731, +91 98004 92817.",
      },
      {
        name: "keywords",
        content:
          "City King Dealership, Spices Distributor Enquiry, Masala Wholesale Margin, FMCG Distributorship West Bengal, Spices Dealership Bihar, Sah Food Industries Dealership, Mukesh Kumar Sah Masala Dealership, cityking.in distributor, citykingspices.in dealership",
      },
      { property: "og:title", content: "Dealership & Distributor Enquiry | City King Spices (cityking.in)" },
      {
        property: "og:description",
        content: "High-margin FMCG dealership and wholesale opportunities with City King Spices. Direct factory supply from Siliguri.",
      },
      { property: "og:url", content: "https://citykingspices.in/distributor" },
      { property: "og:image", content: "https://citykingspices.in/City%20King%20Founder.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "City King Spices Dealership & Distribution" },
      { name: "twitter:description", content: "Lucrative FMCG masala distributorship direct from Sah Food Industries Siliguri." },
      { name: "twitter:image", content: "https://citykingspices.in/City%20King%20Founder.png" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: "https://citykingspices.in/distributor" }],
  }),
  component: DistributorPage,
});

function DistributorPage() {
  const [businessName, setBusinessName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [cityState, setCityState] = useState("");
  const [businessType, setBusinessType] = useState("Distributor / Stockist");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*City King Spices — Business / Distributor Enquiry*\n\nBusiness Name: ${businessName}\nContact Person: ${contactPerson}\nPhone: ${phone}\nLocation: ${cityState}\nBusiness Type: ${businessType}\nNotes: ${notes || "N/A"}`;
    const url = waLink(msg);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative py-20 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="container-page relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>Partner With Sah Food Industries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              Distributor & Wholesale Partnership
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              Join the growing network of City King Spices distributors, stockists, and supermarket partners across West Bengal, Northeast India, and nationwide.
            </p>
          </div>
        </section>

        {/* PERKS / WHY DISTRIBUTE CITY KING */}
        <section className="py-16 bg-background">
          <div className="container-page">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">High Returns</span>
                <h2 className="text-3xl font-bold font-display">Why Partner With City King Spices?</h2>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Attractive Profit Margins",
                  desc: "Lucrative distributor and retailer margins designed for sustainable business growth.",
                },
                {
                  icon: ShieldCheck,
                  title: "Superior Product Purity",
                  desc: "Zero adulteration ensures high customer repeat purchase and word-of-mouth trust.",
                },
                {
                  icon: Truck,
                  title: "Reliable Supply Chain",
                  desc: "Consistent stock availability and timely dispatch directly from our Siliguri facility.",
                },
                {
                  icon: Handshake,
                  title: "Direct Founder Coordination",
                  desc: `Direct coordination with Founder ${site.owner} and commercial dispatch (+91 98326 53731 / +91 98004 92817).`,
                },
              ].map((perk, i) => (
                <Reveal key={perk.title} delay={i * 80}>
                  <div className="p-6 rounded-2xl bg-card border border-border h-full space-y-3">
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <perk.icon className="size-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">{perk.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{perk.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION FORM & CONTACT */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Enquiry Process</span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display">
                    Start Your Dealership Discussion Today
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Whether you are an established FMCG distributor, wholesale merchant, or a retail chain owner, we welcome your partnership.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-3 pt-2">
                {[
                  "Distributor rights for dedicated territories/districts",
                  "Wholesale supply for hotel chains, canteens, and caterers",
                  "Modern trade packaging & shelf support",
                  "Marketing materials and promotional assistance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-leaf shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border space-y-3">
                <h4 className="text-sm font-bold text-foreground">Need Immediate Discussion?</h4>
                <p className="text-xs text-muted-foreground">Call the business management directly:</p>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href={telLink}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                  >
                    <Phone className="size-4" />
                    <span>{site.phoneDisplay}</span>
                  </a>
                  <a
                    href={waLink(waMessages.business)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-leaf hover:underline"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Direct Business Desk</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="p-8 rounded-3xl bg-background border border-border shadow-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="size-5 text-primary" />
                    <h3 className="text-xl font-bold font-display text-foreground">
                      Distributor Enquiry Form
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">
                    Submit your firm details below. We will review your application and connect via WhatsApp/Call promptly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          Enterprise / Firm Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="e.g. Maa Tara Traders"
                          className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactPerson}
                          onChange={(e) => setContactPerson(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9800000000"
                          className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          Target City / District & State *
                        </label>
                        <input
                          type="text"
                          required
                          value={cityState}
                          onChange={(e) => setCityState(e.target.value)}
                          placeholder="e.g. Siliguri, Jalpaiguri (WB)"
                          className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Business Operation Type
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:border-primary focus:outline-none"
                      >
                        <option value="Distributor / Stockist">Distributor / Super Stockist</option>
                        <option value="Wholesale Merchant">Wholesale Merchant / Mandi Trader</option>
                        <option value="Supermarket / Retail Chain">Supermarket / Retail Chain</option>
                        <option value="Hotel / Catering Supplier">HORECA / Hotel & Catering Supplier</option>
                        <option value="Institutional Buyer">Institutional / Bulk Buyer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Additional Notes / Distribution Experience
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Mention existing brands distributed, retail coverage count, or monthly turnover..."
                        className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-sm focus:border-primary focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 shadow-md transition-all hover:scale-[1.01]"
                    >
                      <Send className="size-4" />
                      <span>Submit Distributor Application on WhatsApp</span>
                    </button>

                    {submitted && (
                      <p className="text-center text-xs text-leaf font-medium">
                        ✓ Opening WhatsApp to transmit your dealership credentials...
                      </p>
                    )}
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
