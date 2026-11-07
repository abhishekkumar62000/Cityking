import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site, telLink, waLink, waMessages } from "@/data/site";
import { Link } from "@tanstack/react-router";

export interface FaqItem {
  q: string;
  qHindi: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "What is Sah Food Industries and what brand does it operate?",
    qHindi: "साह फूड इंडस्ट्रीज क्या है और इसका कौन सा ब्रांड है?",
    a: "Sah Food Industries is a premier food manufacturing firm based at Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling (West Bengal – Pin 734001), founded by Mukesh Kumar Sah (Mukesh kr Sah). It manufactures, grinds, and packages the premium spice brand 'City King Spices' including pure ground spices, blended masalas, and CTC tea under the motto 'Laye Swad me Bahar' (शुद्ध मसाले यानी सिटी किंग मसाले).",
  },
  {
    q: "Where is the registered factory and office of City King Spices located?",
    qHindi: "सिटी किंग मसाले की फैक्ट्री और कार्यालय कहां स्थित है?",
    a: "The registered manufacturing and business operations of Sah Food Industries are located at Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – Pin 734001, West Bengal. Direct dispatches are organized across North Bengal, Bihar, Assam, and pan-India transport terminals.",
  },
  {
    q: "Are City King Spices 100% unadulterated and free of chemical food dyes?",
    qHindi: "क्या सिटी किंग मसाले बिना किसी मिलावट और कृत्रिम रंग के होते हैं?",
    a: "Yes. City King Spices are 100% pure and unadulterated. We never use artificial dyes (such as Metanil yellow or Sudan red), sawdust, rice starch, or synthetic additives. Whole raw spices are cleaned, sun-dried, and ground at controlled temperatures to preserve natural curcumin, capsaicin, and volatile aroma oils.",
  },
  {
    q: "What products are currently available in the City King range?",
    qHindi: "सिटी किंग रेंज में वर्तमान में कौन से उत्पाद उपलब्ध हैं?",
    a: "Our product portfolio includes Turmeric (Haldi) Powder, Chilli (Mirchi) Powder, Coriander (Dhaniya) Powder, Cumin (Jeera) Powder, Sabji Masala, Paneer Masala, and premium CTC Tea.",
  },
  {
    q: "How can retailers, Kirana store owners, and wholesalers apply for dealership?",
    qHindi: "दुकानदार, थोक व्यापारी और वितरक डीलरशिप के लिए कैसे संपर्क करें?",
    a: "Retailers and distributors can apply directly using our online Distributor Enquiry form, calling +91 98326 53731 or +91 98004 92817, or messaging our direct WhatsApp commercial desk. We offer competitive dealer margins, reliable dispatch, and point-of-sale shelf support.",
  },
  {
    q: "How do I place an instant order or enquire about product pricing?",
    qHindi: "तत्काल ऑर्डर कैसे करें या कीमतों की जानकारी कैसे प्राप्त करें?",
    a: "You can tap any product card's 'Enquire on WhatsApp' button, use the floating 'Quick Order Bag' on our website, or call Founder Mukesh Kumar Sah directly at +91 98326 53731 / +91 98004 92817.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-card border-y border-border relative overflow-hidden">
      <div className="container-page max-w-4xl space-y-12">
        <Reveal>
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <HelpCircle className="size-3.5 text-accent" />
              <span>मसाला ज्ञान • FAQ & Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Everything you need to know about City King Spices, purity guarantees, and dealership opportunities.
            </p>
          </div>
        </Reveal>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 40}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-background border-primary/50 shadow-md"
                      : "bg-background/80 border-border hover:border-border/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-foreground"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="text-sm sm:text-base font-bold font-display">{faq.q}</p>
                      <p className="text-xs text-muted-foreground font-normal mt-0.5">{faq.qHindi}</p>
                    </div>
                    <div
                      className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-4 animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Contact Help banner */}
        <div className="p-6 rounded-2xl bg-cocoa text-cocoa-foreground border border-cocoa-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-base text-accent">Have a Custom Requirement or Bulk Order?</h4>
            <p className="text-xs text-cocoa-foreground/75 mt-0.5">
              Speak directly with {site.owner} ({site.company}, Siliguri)
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={telLink}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent hover:bg-accent/90 text-cocoa font-bold px-4 py-2 text-xs transition-colors"
            >
              <Phone className="size-3.5" />
              <span>{site.phoneDisplay}</span>
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-leaf hover:bg-leaf/90 text-leaf-foreground font-bold px-4 py-2 text-xs transition-colors"
            >
              <MessageCircle className="size-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
