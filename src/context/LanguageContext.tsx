import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "hi";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.network": "Services",
    "nav.brand": "Brand",
    "nav.about": "About Us",
    "nav.distributor": "Distributor",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.orderBag": "Order Bag",
    "nav.dealership": "Dealership",
    "nav.call": "Call Factory",

    // Hero
    "hero.badge": "SAH FOOD INDUSTRIES • SILIGURI, DARJEELING",
    "hero.title1": "Pure Spices, Rich Aroma &",
    "hero.title2": "Regal Taste for Every Kitchen.",
    "hero.subtitle":
      "Directly milled and packed in Siliguri from select whole raw spices. Crafted with low-temperature cold grinding to preserve 100% natural essential oils, vibrant natural colour, and mouth-watering aroma.",
    "hero.tagline": "“Laye Swad me Bahar”",
    "hero.taglineHindi": "शुद्ध मसाले यानी सिटी किंग मसाले",
    "hero.exploreBtn": "Explore 9+ Products",
    "hero.dealershipBtn": "Dealership Enquiry",
    "hero.waBtn": "WhatsApp Order",

    // Metric items
    "metric.purity": "100% Pure Spices",
    "metric.coldGround": "Cold-Ground Oils",
    "metric.products": "9+ Branded Packs",
    "metric.factory": "Siliguri Factory Hub",

    // Section Titles
    "why.tag": "The Sah Food Commitment • Siliguri Hub",
    "why.title": "Why Millions Trust City King in Every Meal",
    "why.sub": "Pure, cold-processed spices with zero adulteration — releasing that unforgettable homestyle aroma, rich natural colour, and pure taste that brings families together.",

    "products.tag": "Our Essential Range",
    "products.title": "Explore Our Products",
    "products.sub": "Packaged with care to preserve natural essential oils and authentic Indian kitchen flavour.",
    "products.viewCatalog": "View Complete Catalog",
    "products.addBag": "Add to Order Bag",
    "products.enquire": "Enquire",
    "products.viewDetails": "View Details",

    "story.tag": "THE CITY KING STORY",
    "story.title": "Pure Spices. Authentic Taste.",
    "story.p1": "Sah Food Industries was established at Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling (Pin 734001, West Bengal) by Founder Mukesh Kumar Sah (Mukesh kr Sah) with a clear vision: delivering clean, aromatic, and unadulterated spices for households that cherish authentic homemade meals.",
    "story.p2": "Every batch of City King spice is carefully ground to preserve its natural essential oils, vibrant natural colour, and inviting aroma that defines delicious everyday Indian dishes.",
    "story.readStory": "Read Full Story",

    "b2b.tag": "Distributor & Wholesale Opportunity",
    "b2b.title": "Partner with City King Spices in Your Region",
    "b2b.sub": "Join Sah Food Industries' expanding retail, wholesale, and distributor network across West Bengal and India.",
    "b2b.btn": "Distributor Enquiry",

    "footer.rights": "All rights reserved. Manufactured by Sah Food Industries, Siliguri.",
    "footer.siliguri": "Siliguri, Dist- (Jalpaiguri) Darjeeling, West Bengal – Pin 734001",
  },
  hi: {
    // Nav
    "nav.home": "मुख्य पृष्ठ",
    "nav.products": "उत्पाद श्रृंखला",
    "nav.network": "सेवाएं",
    "nav.brand": "ब्रांड पहचान",
    "nav.about": "हमारे बारे में",
    "nav.distributor": "डीलरशिप",
    "nav.gallery": "गैलरी",
    "nav.contact": "संपर्क करें",
    "nav.orderBag": "ऑर्डर बैग",
    "nav.dealership": "डीलरशिप फॉर्म",
    "nav.call": "फैक्ट्री कॉल",

    // Hero
    "hero.badge": "साह फूड इंडस्ट्रीज • सिलीगुड़ी, दार्जिलिंग",
    "hero.title1": "शुद्ध मसाले, शाही सुगंध एवं",
    "hero.title2": "हर रसोई के लिए लाजवाब स्वाद।",
    "hero.subtitle":
      "सिलीगुड़ी में चुने हुए साबुत खड़े मसालों से सीधे तैयार। धीमी गति और कम तापमान पर पिसाई (कोल्ड ग्राइंडिंग) ताकि मसालों का प्राकृतिक तेल, असली रंग और पारंपरिक महक शत-प्रतिशत सुरक्षित रहे।",
    "hero.tagline": "“लाए स्वाद में बहार”",
    "hero.taglineHindi": "शुद्ध मसाले यानी सिटी किंग मसाले",
    "hero.exploreBtn": "सभी 9+ उत्पाद देखें",
    "hero.dealershipBtn": "डीलरशिप पूछताछ",
    "hero.waBtn": "व्हाट्सएप पर ऑर्डर",

    // Metric items
    "metric.purity": "100% शुद्ध मसाले",
    "metric.coldGround": "सुरक्षित प्राकृतिक तेल",
    "metric.products": "9+ प्रीमियम पैक",
    "metric.factory": "सिलीगुड़ी फैक्ट्री हब",

    // Section Titles
    "why.tag": "साह फूड इंडस्ट्रीज का संकल्प • सिलीगुड़ी",
    "why.title": "हर भारतीय रसोई की पहली पसंद — सिटी किंग मसाले",
    "why.sub": "बिना किसी मिलावट, कृत्रिम रंग या स्टार्च के तैयार शुद्ध मसाले — जो हर निवाले में घोलें असली स्वाद, प्राकृतिक रंग और मनभावन महक।",

    "products.tag": "हमारी खास उत्पाद श्रृंखला",
    "products.title": "सिटी किंग मसाले और चाय",
    "products.sub": "प्राकृतिक तेल और असली भारतीय स्वाद को बरकरार रखने के लिए विशेष सुरक्षात्मक पैकिंग।",
    "products.viewCatalog": "पूरा कैटलॉग देखें",
    "products.addBag": "ऑर्डर बैग में जोड़ें",
    "products.enquire": "पूछताछ करें",
    "products.viewDetails": "विवरण देखें",

    "story.tag": "सिटी किंग की कहानी",
    "story.title": "शुद्ध मसाले। असली स्वाद।",
    "story.p1": "साह फूड इंडस्ट्रीज की स्थापना एकतियासाल ईस्टर्न बाईपास रोड, सिलीगुड़ी, दार्जिलिंग (पिन 734001, पश्चिम बंगाल) में संस्थापक मुकेश कुमार साह (मुकेश कुमार साह) द्वारा एक स्पष्ट संकल्प के साथ की गई: हर घर तक बिना किसी मिलावट के शुद्ध, ताज़ा और महकदार मसाले पहुंचाना।",
    "story.p2": "सिटी किंग का हर बैच प्राकृतिक तेलों और मनभावन सुगंध को सुरक्षित रखकर तैयार किया जाता है, जो रोज़मर्रा के भोजन को स्वादिष्ट बनाता है।",
    "story.readStory": "पूरी कहानी पढ़ें",

    "b2b.tag": "थोक व्यापार एवं डिस्ट्रीब्यूटरशिप",
    "b2b.title": "अपने क्षेत्र में सिटी किंग के साथ व्यापार शुरू करें",
    "b2b.sub": "पश्चिम बंगाल, बिहार, असम और पूरे भारत में साह फूड इंडस्ट्रीज के तेज़ी से बढ़ते डिस्ट्रीब्यूशन नेटवर्क से जुड़ें।",
    "b2b.btn": "वितरक पूछताछ फॉर्म",

    "footer.rights": "सर्वाधिकार सुरक्षित। निर्माता: साह फूड इंडस्ट्रीज, सिलीगुड़ी।",
    "footer.siliguri": "सिलीगुड़ी, जिला- (जलपाईगुड़ी) दार्जिलिंग, पश्चिम बंगाल – पिन 734001",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ck_lang") as Language;
      if (saved === "en" || saved === "hi") {
        setLangState(saved);
        document.documentElement.lang = saved;
        document.documentElement.setAttribute("data-lang", saved);
      } else {
        document.documentElement.lang = "en";
        document.documentElement.setAttribute("data-lang", "en");
      }
    } catch {}
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("ck_lang", newLang);
      document.documentElement.lang = newLang;
      document.documentElement.setAttribute("data-lang", newLang);
    } catch {}
  };

  const toggleLang = () => {
    const next = lang === "en" ? "hi" : "en";
    setLang(next);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      lang: "en" as Language,
      setLang: () => {},
      toggleLang: () => {},
      t: (key: string) => translations["en"]?.[key] || key,
    };
  }
  return context;
}
