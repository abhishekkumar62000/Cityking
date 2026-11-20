import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/City King About.png";
import { Award, Flame, Leaf, MapPin, Package, ShieldCheck, Sparkles, Users } from "lucide-react";

const stats = [
  { icon: Package, en: "18+ Products", hi: "18+ उत्पाद", color: "text-amber-500" },
  { icon: Users, en: "Millions Trust", hi: "करोड़ों का भरोसा", color: "text-emerald-500" },
  { icon: MapPin, en: "Siliguri Hub", hi: "सिलीगुड़ी केंद्र", color: "text-red-500" },
  { icon: Award, en: "FSSAI Certified", hi: "FSSAI प्रमाणित", color: "text-blue-500" },
  { icon: Leaf, en: "100% Pure", hi: "100% शुद्ध", color: "text-green-500" },
  { icon: ShieldCheck, en: "No Preservatives", hi: "कोई परिरक्षक नहीं", color: "text-purple-500" },
];

const pillars = [
  {
    icon: Flame,
    en: { title: "Cold-Ground Spices", body: "Every spice is cold-ground at low temperatures to lock in natural aroma, essential oils, and colour — never heat-treated." },
    hi: { title: "कोल्ड-ग्राइंड मसाले", body: "हर मसाला कम तापमान पर पीसा जाता है ताकि प्राकृतिक सुगंध, तेल और रंग बना रहे।" },
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Leaf,
    en: { title: "Farm-Direct Sourcing", body: "We source directly from trusted farms across India — no middlemen, ensuring freshness and traceability in every batch." },
    hi: { title: "सीधे खेत से", body: "हम भारत के विश्वसनीय खेतों से सीधे मसाले लाते हैं — कोई बिचौलिया नहीं, हर बैच ताजा और ट्रेसेबल।" },
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: ShieldCheck,
    en: { title: "Zero Adulteration", body: "No artificial colours, no chemical preservatives. Only pure, clean spice powders that pass our triple-layer quality check." },
    hi: { title: "शून्य मिलावट", body: "कोई कृत्रिम रंग नहीं, कोई रासायनिक परिरक्षक नहीं। केवल शुद्ध मसाले जो हमारी तीन-स्तरीय गुणवत्ता जांच से गुजरते हैं।" },
    gradient: "from-blue-500 to-indigo-600",
  },
];

export function AboutCityKingSection() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf6ec] via-background to-[#fff8f0] dark:from-[#1a1008] dark:via-background dark:to-[#180e04]">
      {/* ── Decorative top dotted border ── */}
      <div className="relative w-full overflow-hidden h-10 flex items-center justify-center">
        <div
          className="w-full border-t-4 border-dashed border-primary/40"
          style={{ backgroundImage: "none" }}
        />
        {/* Center jewel */}
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
          <Sparkles className="size-3 text-white" />
        </span>
        {/* left & right dots decorations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1.5 pl-4">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="size-2 rounded-full bg-primary/30 inline-block" style={{ opacity: 1 - i * 0.1 }} />
          ))}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-1.5 pr-4 flex-row-reverse">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="size-2 rounded-full bg-primary/30 inline-block" style={{ opacity: 1 - i * 0.1 }} />
          ))}
        </div>
      </div>

      {/* ── Spice powder floating background particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "10%", left: "5%", size: 80, color: "bg-amber-400/10", delay: "0s" },
          { top: "60%", left: "2%", size: 50, color: "bg-red-400/10", delay: "1s" },
          { top: "30%", right: "4%", size: 100, color: "bg-orange-400/8", delay: "0.5s" },
          { top: "75%", right: "6%", size: 60, color: "bg-yellow-400/10", delay: "1.5s" },
          { top: "5%", right: "20%", size: 40, color: "bg-primary/8", delay: "2s" },
        ].map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full ${p.color} blur-2xl animate-pulse`}
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: "left" in p ? p.left : undefined,
              right: "right" in p ? p.right : undefined,
              animationDelay: p.delay,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      <div className="container-page relative z-10 py-16 lg:py-24">
        {/* ── Section header tag ── */}
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-5 py-2 rounded-full">
              <Sparkles className="size-3.5" />
              {isHi ? "हमारे बारे में" : "Our Story"}
            </span>
          </div>
        </Reveal>

        {/* ── Main Split Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Dramatic Image Block */}
          <Reveal>
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-amber-400/15 to-orange-500/10 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/10">
                <img
                  src={aboutImg}
                  alt="City King Masala — Sah Food Industries Siliguri — Pure Cold-Ground Spices by Mukesh Kumar Sah"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge bottom-left */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="bg-white/95 dark:bg-black/80 rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Sah Food Industries</p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">Siliguri, West Bengal</p>
                  </div>
                  <div className="bg-primary rounded-2xl px-4 py-3 shadow-lg text-center">
                    <p className="text-2xl font-black text-white leading-none">18+</p>
                    <p className="text-[10px] font-bold text-white/80 uppercase tracking-wider">{isHi ? "उत्पाद" : "Products"}</p>
                  </div>
                </div>
              </div>

              {/* Floating stat chips */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-950 rounded-2xl px-4 py-2.5 shadow-xl font-black text-sm flex items-center gap-2 rotate-3">
                <Award className="size-4" />
                FSSAI Certified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white rounded-2xl px-4 py-2.5 shadow-xl font-black text-sm flex items-center gap-2 -rotate-2">
                <Leaf className="size-4" />
                100% Pure
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Text Content */}
          <div className="space-y-7">
            <Reveal>
              <div>
                {/* Headline */}
                <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                  <span className="text-foreground">
                    {isHi ? "स्वागत है " : "Welcome to "}
                  </span>
                  <span className="bg-gradient-to-r from-primary via-amber-500 to-orange-500 bg-clip-text text-transparent">
                    {isHi ? "सिटी किंग मसाला" : "City King Masala"}
                  </span>
                </h2>
                {/* Underline accent */}
                <div className="mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-amber-400" />
              </div>
            </Reveal>

            <Reveal>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                {isHi
                  ? "सिटी किंग मसाला — साह फूड इंडस्ट्रीज, सिलीगुड़ी का गर्व — मुकेश कुमार साह द्वारा स्थापित एक ऐसा ब्रांड जो हर भारतीय रसोई में शुद्धता और स्वाद लाने के लिए समर्पित है।"
                  : "City King Masala — the pride of Sah Food Industries, Siliguri — is a brand founded by Mukesh Kumar Sah with a singular mission: to bring pure, unadulterated flavour to every Indian kitchen."}
              </p>
            </Reveal>

            <Reveal>
              <p className="text-base text-muted-foreground leading-relaxed">
                {isHi
                  ? "हमारी यात्रा एकटियासाल ईस्टर्न बाईपास रोड, सिलीगुड़ी से शुरू हुई — जहाँ आधुनिक कोल्ड-ग्राइंड तकनीक से हर मसाले का प्राकृतिक रंग, सुगंध और पोषण बरकरार रखा जाता है। बिहार और बंगाल के लाखों घरों में 'City King' का नाम विश्वास का पर्याय बन गया है।"
                  : "Our journey began at Ektiasal Eastern Bypass Road, Siliguri — where modern cold-grinding technology preserves every spice's natural colour, aroma, and nutrition. Across millions of homes in Bihar and Bengal, the name 'City King' has become synonymous with trust."}
              </p>
            </Reveal>

            {/* Three Pillars */}
            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  const content = isHi ? p.hi : p.en;
                  return (
                    <div
                      key={p.en.title}
                      className="group relative rounded-2xl bg-card border border-border hover:border-primary/40 p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                      {/* gradient bg on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${p.gradient} transition-opacity duration-300`} />
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-3 shadow-sm`}>
                        <Icon className="size-4 text-white" />
                      </div>
                      <p className="text-sm font-bold text-foreground leading-tight">{content.title}</p>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{content.body}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Stats Row */}
            <Reveal>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.en}
                      className="flex flex-col items-center gap-1.5 rounded-2xl bg-card border border-border p-3 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 text-center group"
                    >
                      <Icon className={`size-5 ${s.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-xs font-bold text-foreground">{isHi ? s.hi : s.en}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://wa.me/919832653731?text=Hi+City+King%2C+I+want+to+know+more+about+your+masala+products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 hover:from-primary/90 hover:to-amber-400 text-white font-bold px-6 py-3 shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm"
                >
                  <Sparkles className="size-4" />
                  {isHi ? "हमसे WhatsApp पर बात करें" : "Chat With Us on WhatsApp"}
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 transition-all duration-300 hover:scale-105 text-sm"
                >
                  <Package className="size-4" />
                  {isHi ? "सभी उत्पाद देखें" : "View All Products"}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Decorative bottom dotted border ── */}
      <div className="relative w-full overflow-hidden h-10 flex items-center">
        <div className="w-full border-t-4 border-dashed border-primary/30" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1.5 pl-4">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="size-1.5 rounded-full bg-primary/20 inline-block" />
          ))}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-1.5 pr-4 flex-row-reverse">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="size-1.5 rounded-full bg-primary/20 inline-block" />
          ))}
        </div>
      </div>
    </section>
  );
}
