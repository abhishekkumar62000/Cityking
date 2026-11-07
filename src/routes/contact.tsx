import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Compass,
  Crown,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Send,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site, telLink, telLink2, waLink, waMessages } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import founderImg from "@/assets/City King Founder.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Founder's Message | Sah Food Industries | City King Spices Siliguri" },
      {
        name: "description",
        content:
          "Contact Sah Food Industries (City King Spices). Address: Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – Pin 734001, West Bengal. Phone: +91 98326 53731, +91 98004 92817. Read Founder Mukesh Kumar Sah's vision and message.",
      },
      {
        name: "keywords",
        content:
          "Contact City King Spices, Sah Food Industries Siliguri Phone Number, Mukesh Kumar Sah, Ektiasal Eastern Bypass Road, Jalpaiguri Darjeeling Spices Factory, Founder Message",
      },
      { property: "og:title", content: "Contact Sah Food Industries | City King Spices" },
      {
        property: "og:description",
        content:
          "Get in touch with Sah Food Industries, Siliguri. Read Founder Mukesh Kumar Sah's message on spice purity, vision, and dealership opportunities.",
      },
      { property: "og:url", content: "https://citykingspices.in/contact" },
    ],
    links: [{ rel: "canonical", href: "https://citykingspices.in/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState("Product Information");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMsg = `Hello ${site.company},\nName: ${name}\nPhone: ${phone}\nTopic: ${enquiryType}\nMessage: ${message}`;
    const url = waLink(fullMsg);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* HERO SECTION */}
        <section className="relative py-16 bg-cocoa text-cocoa-foreground overflow-hidden">
          <div className="container-page relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              <span>{lang === "hi" ? "सीधा संपर्क एवं संवाद" : "Get In Touch"}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              {lang === "hi"
                ? "साह फूड इंडस्ट्रीज से संपर्क करें"
                : "Contact Sah Food Industries"}
            </h1>
            <p className="text-cocoa-foreground/80 text-base sm:text-lg">
              {lang === "hi"
                ? "सिटी किंग मसालों, थोक आपूर्ति, डीलरशिप अथवा उत्पाद संबंधी किसी भी जानकारी के लिए हमसे बेझिझक जुड़ें।"
                : "Have questions about City King Spices, bulk supply, or retail dealership? We'd love to hear from you."}
            </p>
          </div>
        </section>

        {/* FOUNDER'S MESSAGE & VISION SHOWCASE */}
        <section className="py-16 bg-gradient-to-b from-card via-background to-card border-b border-border">
          <div className="container-page space-y-10">
            {/* Section Badge & Title */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/25 px-4 py-1 text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest">
                <Crown className="size-3.5 text-amber-600 dark:text-amber-400" />
                <span>
                  {lang === "hi" ? "संस्थापक का संदेश एवं दृष्टिकोण" : "Founder's Vision & Message"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-foreground">
                {lang === "hi"
                  ? "हर भारतीय रसोई के लिए शुद्धता का संकल्प"
                  : "A Personal Commitment to Every Family"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {lang === "hi"
                  ? "सिटी किंग मसाला कंपनी के संस्थापक मुकेश कुमार साह की ओर से हमारे आदरणीय ग्राहकों, माताओं-बहनों एवं व्यापारिक साथियों के नाम एक आत्मीय संदेश।"
                  : "A direct note from Mukesh Kumar Sah, Founder & Owner of City King Masala Company (Sah Food Industries)."}
              </p>
            </div>

            {/* Founder Card & Letter Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-card rounded-3xl p-6 sm:p-10 border border-border/80 shadow-card">
              {/* Founder Portrait Visual Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <Reveal>
                  <div className="relative group max-w-sm w-full">
                    {/* Decorative gold ambient glow */}
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/30 via-rose-500/20 to-amber-600/30 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />

                    <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-black shadow-xl">
                      <img
                        src={founderImg}
                        alt="Mukesh Kumar Sah, Founder & Owner of City King Masala Company"
                        className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="eager"
                      />
                    </div>

                    {/* Official Credentials Nameplate */}
                    <div className="mt-4 p-4 rounded-2xl bg-muted/60 border border-border text-center space-y-1">
                      <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400">
                        <Crown className="size-4" />
                        <span className="font-bold text-base sm:text-lg text-foreground">
                          {site.owner}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-primary">
                        {lang === "hi"
                          ? "संस्थापक एवं स्वामी (Founder & Owner)"
                          : "Founder & Owner"}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        City King Masala Company • Sah Food Industries
                      </p>
                      <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                        <MapPin className="size-3 text-accent shrink-0" />
                        <span>Siliguri, West Bengal</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Founder's Personal Letter & Vision Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <Reveal delay={100}>
                  {/* Quote Box */}
                  <div className="relative p-6 sm:p-7 rounded-2xl bg-background/80 border border-border/80 space-y-4">
                    <Quote className="size-8 text-amber-500/30 absolute top-4 right-4" />

                    <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-amber-600 dark:text-amber-400">
                      {lang === "hi"
                        ? "“लाए स्वाद में बहार” — स्वाद में कोई मिलावट नहीं"
                        : "“Taste Beyond Expectations” — Pure & Uncompromised"}
                    </p>

                    <div className="space-y-3 text-sm sm:text-base text-foreground/90 leading-relaxed font-sans">
                      {lang === "hi" ? (
                        <>
                          <p>
                            <strong>प्रिय आदरणीय ग्राहकों एवं भोजन प्रेमियों,</strong>
                          </p>
                          <p>
                            जब मैंने सिलीगुड़ी में <strong>साह फूड इंडस्ट्रीज</strong> की स्थापना की, तो मेरा
                            एकमात्र संकल्प था — <em>"मसाला ऐसा हो जो हर घर की थाली में सेहत और असली स्वाद की
                            खुशबू बिखेर दे।"</em> आज के बाज़ार में जब कृत्रिम रंग, स्टार्च और केमिकल की मिलावट आम
                            हो गई है, सिटी किंग का हर एक पैकेट हमारी ईमानदारी का प्रतीक है।
                          </p>
                          <p>
                            हम प्रमुख मंडियों से चुने हुए उच्च श्रेणी के साबुत मसालों को साफ़ करते हैं और
                            सिलीगुड़ी स्थित आधुनिक यूनिट में कम तापमान (कोल्ड ग्राइंडिंग) पर पीसते हैं, ताकि उनके
                            प्राकृतिक सुगंधित तेल, असली रंग और औषधीय गुण हमेशा सुरक्षित रहें।
                          </p>
                          <p>
                            अपने परिवार के भोजन में सिटी किंग मसालों पर अटूट विश्वास जताने के लिए आप सभी का
                            हृदय से आभार। हम वचन देते हैं कि आपके स्वास्थ्य और स्वाद से कभी समझौता नहीं करेंगे।
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            <strong>Dear Valued Customers and Food Lovers,</strong>
                          </p>
                          <p>
                            When I founded <strong>Sah Food Industries</strong> in Siliguri, our guiding
                            principle was straightforward: <em>every Indian kitchen deserves spices that are 100%
                            unadulterated, wholesome, and richly aromatic.</em> In a crowded market with artificial
                            fillers and colors, we made a solemn pledge — our spices must be pure enough for our own
                            family's dinner before reaching yours.
                          </p>
                          <p>
                            We handpick origin-harvested whole spices, clean them meticulously, and slow-grind
                            them at controlled low temperatures at our Siliguri plant so that all vital essential
                            oils and genuine health benefits remain locked in until you cook.
                          </p>
                          <p>
                            Thank you for inviting City King into your homes and daily meals. We will always honor
                            your trust with pure ingredients, vibrant natural colors, and unforgettable taste.
                          </p>
                        </>
                      )}
                    </div>

                    <div className="pt-2 border-t border-border flex items-center justify-between">
                      <div>
                        <p className="font-display font-bold text-sm text-foreground">
                          {site.owner}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {lang === "hi" ? "संस्थापक, सिटी किंग मसाला" : "Founder, City King Masala"}
                        </p>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="size-3" />
                        {lang === "hi" ? "100% शुद्धता गारंटी" : "100% Purity Guarantee"}
                      </span>
                    </div>
                  </div>
                </Reveal>

                {/* 3 Core Vision & Mission Pillars */}
                <Reveal delay={150}>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {/* Vision Pillar */}
                    <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                      <div className="size-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                        <Target className="size-4" />
                      </div>
                      <h4 className="font-bold text-xs uppercase tracking-wide text-foreground">
                        {lang === "hi" ? "हमारा विज़न (Vision)" : "Our Vision"}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-normal">
                        {lang === "hi"
                          ? "उत्तर बंगाल, बिहार और पूरे भारत के हर परिवार तक असली, शुद्ध व शाही मसाले पहुँचाना।"
                          : "To bring genuine, aromatic, and healthy spices to every home across North Bengal, Bihar & pan-India."}
                      </p>
                    </div>

                    {/* Mission Pillar */}
                    <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                      <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Compass className="size-4" />
                      </div>
                      <h4 className="font-bold text-xs uppercase tracking-wide text-foreground">
                        {lang === "hi" ? "हमारा मिशन (Mission)" : "Our Mission"}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-normal">
                        {lang === "hi"
                          ? "आधुनिक स्वच्छ तकनीक एवं पारंपरिक सुगंध की सुरक्षा के साथ शून्य-मिलावट उत्पादन।"
                          : "Hygienic cold-milling technology preserving natural oils with zero artificial adulteration."}
                      </p>
                    </div>

                    {/* Commitment Pillar */}
                    <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                      <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                        <HeartHandshake className="size-4" />
                      </div>
                      <h4 className="font-bold text-xs uppercase tracking-wide text-foreground">
                        {lang === "hi" ? "हमारा संकल्प (Promise)" : "Our Promise"}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-normal">
                        {lang === "hi"
                          ? "उचित मूल्य, वितरकों को पूरा सहयोग और ग्राहकों के स्वास्थ्य का अटूट ख्याल।"
                          : "Fair pricing, robust dealer support, and absolute dedication to consumer wellness."}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Direct Connect Buttons with Founder's Office */}
                <Reveal delay={200}>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={waLink("Hello Mukesh Ji, I would like to connect with City King Masala regarding products / business enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                    >
                      <MessageCircle className="size-4" />
                      <span>
                        {lang === "hi"
                          ? "संस्थापक कार्यालय से व्हाट्सएप पर जुड़ें"
                          : "Connect with Founder's Desk on WhatsApp"}
                      </span>
                    </a>
                    <a
                      href={telLink}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold px-4 py-2.5 text-xs sm:text-sm transition-colors"
                    >
                      <Phone className="size-4 text-primary" />
                      <span>{site.phonePrimary}</span>
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO & INQUIRY FORM SECTION */}
        <section className="py-16 bg-background">
          <div className="container-page grid lg:grid-cols-12 gap-12">
            {/* Contact Info Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {lang === "hi" ? "सीधा संपर्क" : "Direct Contact"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display">
                    {lang === "hi"
                      ? "सिलीगुड़ी कार्यालय से संपर्क करें"
                      : "Reach Out To Us Directly"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {lang === "hi"
                      ? "थोक ऑर्डर, डीलरशिप, रीटेल आपूर्ति अथवा सामान्य प्रश्नों के लिए सीधे संपर्क करें।"
                      : "Connect with our Siliguri office for retail orders, product pricing, dealership, and general questions."}
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                <Reveal delay={100}>
                  <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4 shadow-xs">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">
                        {lang === "hi"
                          ? "पंजीकृत कार्यालय एवं निर्माण इकाई"
                          : "Registered Office & Factory"}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        <strong className="text-foreground">{site.company}</strong>
                        <br />
                        {site.streetAddress}
                        <br />
                        {site.city}, {site.district} – Pin {site.pincode}, {site.state}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={130}>
                  <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4 shadow-xs">
                    <div className="size-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <UserCheck className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">
                        {lang === "hi" ? "संस्थापक एवं नेतृत्व" : "Founder & Leadership"}
                      </h4>
                      <p className="text-sm font-semibold text-foreground mt-1">
                        {site.owner}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {site.founderTitle}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={160}>
                  <div className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4 shadow-xs">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="size-5" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-sm text-foreground">
                        {lang === "hi" ? "सीधे संपर्क नंबर" : "Direct Contact Numbers"}
                      </h4>
                      <div className="mt-2 space-y-1.5 text-xs sm:text-sm">
                        <div className="flex items-center justify-between">
                          <a href={telLink} className="text-primary font-semibold hover:underline">
                            {site.phonePrimary}
                          </a>
                          <span className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            {lang === "hi" ? "प्राथमिक (Primary)" : "Primary"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <a href={telLink2} className="text-foreground/90 font-medium hover:underline">
                            {site.phoneSecondary}
                          </a>
                          <span className="text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            Sales / WhatsApp
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <a
                    href={waLink(waMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-leaf/10 border border-leaf/30 flex items-center justify-between gap-4 text-leaf hover:bg-leaf/20 transition-colors group shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-leaf text-leaf-foreground flex items-center justify-center shrink-0">
                        <MessageCircle className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">
                          {lang === "hi" ? "तुरंत व्हाट्सएप ऑर्डर डेस्क" : "Instant WhatsApp Order Desk"}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {lang === "hi" ? "त्वरित उत्तर" : "Direct response"}: {site.phonePrimary}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold underline group-hover:translate-x-1 transition-transform">
                      {lang === "hi" ? "बातचीत करें →" : "Chat Now →"}
                    </span>
                  </a>
                </Reveal>

                {/* Social Connect Box */}
                <Reveal delay={240}>
                  <div className="p-5 rounded-2xl bg-muted/60 border border-border space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                      {lang === "hi" ? "आधिकारिक सोशल मीडिया पेज" : "Official Social Media Channels"}
                    </h4>
                    <div className="flex items-center gap-3">
                      {site.social.instagram && (
                        <a
                          href={site.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 text-white text-xs font-semibold shadow-xs hover:opacity-95 transition-transform hover:scale-[1.02]"
                        >
                          <Instagram className="size-4" />
                          <span>Instagram</span>
                        </a>
                      )}
                      {site.social.facebook && (
                        <a
                          href={site.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-xs hover:bg-blue-700 transition-transform hover:scale-[1.02]"
                        >
                          <Facebook className="size-4" />
                          <span>Facebook</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="p-8 rounded-3xl bg-card border border-border shadow-card">
                  <h3 className="text-xl font-bold font-display text-foreground mb-2">
                    {lang === "hi" ? "पूछताछ संदेश भेजें" : "Send Us an Inquiry"}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    {lang === "hi"
                      ? "नीचे दिया गया फॉर्म भरें, आपका संदेश सीधे हमारे व्हाट्सएप पर प्रेषित हो जाएगा।"
                      : "Fill out the form below to message us directly via WhatsApp."}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          {lang === "hi" ? "आपका पूरा नाम *" : "Your Full Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1.5">
                          {lang === "hi" ? "मोबाइल नंबर *" : "Phone / Mobile Number *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        {lang === "hi" ? "पूछताछ का विषय" : "Inquiry Topic"}
                      </label>
                      <select
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none"
                      >
                        <option value="Product Information">
                          {lang === "hi" ? "उत्पाद जानकारी एवं मूल्य" : "Product Information & Pricing"}
                        </option>
                        <option value="Retail Purchase">
                          {lang === "hi" ? "घरेलू / खुदरा खरीद" : "Retail / Home Purchase"}
                        </option>
                        <option value="Distributor Enquiry">
                          {lang === "hi" ? "वितरक / डीलरशिप पूछताछ" : "Distributor / Dealership"}
                        </option>
                        <option value="Hotel / Catering Supply">
                          {lang === "hi" ? "होटल एवं कैटरिंग थोक आपूर्ति" : "Hotel / Catering Bulk Supply"}
                        </option>
                        <option value="Other">
                          {lang === "hi" ? "अन्य प्रश्न" : "Other Query"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        {lang === "hi" ? "आपका संदेश / आवश्यकता *" : "Your Message / Requirement *"}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={
                          lang === "hi"
                            ? "आपको कौन-से मसाले अथवा कितनी मात्रा चाहिए, यहाँ लिखें..."
                            : "Tell us what products or quantities you need..."
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm focus:border-primary focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3.5 shadow-md transition-all hover:scale-[1.01]"
                    >
                      <Send className="size-4" />
                      <span>
                        {lang === "hi"
                          ? "व्हाट्सएप पर संदेश भेजें"
                          : "Send Inquiry via WhatsApp"}
                      </span>
                    </button>

                    {submitted && (
                      <p className="text-center text-xs text-leaf font-medium">
                        ✓ Opening WhatsApp with your message details...
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
