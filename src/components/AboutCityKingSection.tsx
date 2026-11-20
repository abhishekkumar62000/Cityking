import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/City King About.png";
import { DottedSectionDivider } from "@/components/DottedSectionDivider";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";
import { Link } from "@tanstack/react-router";

export function AboutCityKingSection() {
  const { lang } = useLanguage();
  const isHi = lang === "hi";

  return (
    <section className="relative bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden">
      {/* ─── Top Authentic Dotted Line Divider ─── */}
      <DottedSectionDivider className="pt-6 pb-2" />

      <div className="container-page py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* ─── LEFT: Big, Properly Scaled Spice Bowl Visual ─── */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <Reveal>
              <div className="relative w-full max-w-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 group">
                <img
                  src={aboutImg}
                  alt="City King Masala — Sah Food Industries Siliguri — Pure Cold-Ground Spices"
                  className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/11] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white drop-shadow-md">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    Sah Food Industries • Siliguri
                  </span>
                  <span className="text-xs sm:text-sm font-black bg-[#D97706] px-3.5 py-1.5 rounded-full shadow-md">
                    100% Shuddh Masale
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─── RIGHT: Bold, Dark, Highlighted Text Formatting ─── */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#D97706] dark:text-[#F59E0B] tracking-tight leading-tight">
                {isHi ? "सिटी किंग मसाला में आपका स्वागत है" : "Welcome To City King Masala"}
              </h2>
            </Reveal>

            {isHi ? (
              <div className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-[17px] leading-relaxed font-semibold">
                <Reveal>
                  <p>
                    <strong className="font-black text-black dark:text-white">सिटी किंग मसाला (साह फूड इंडस्ट्रीज)</strong> में हमारा दृढ़ विश्वास है कि हर स्वादिष्ट भोजन की शुरुआत <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">100% शुद्ध और सुगंधित मसालों</strong> से होती है। सिलीगुड़ी (पश्चिम बंगाल) के हृदय से, हम आपके लिए सीधे खेतों से चुने गए साबुत मसालों, पिसे हुए पाउडरों और पारंपरिक भारतीय ब्लेंडेड मसालों की संपूर्ण श्रृंखला लाते हैं।
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    हमारी यात्रा संस्थापक <strong className="font-black text-black dark:text-white">मुकेश कुमार साह</strong> के एक सरल दृष्टिकोण से शुरू हुई — <strong className="font-black text-black dark:text-white">असली भारतीय स्वाद को हर घर और हर परिवार तक सुलभ बनाना</strong>। हम बिना किसी बिचौलिए के सीधे किसानों से उच्च-गुणवत्ता वाले मसाले प्राप्त करते हैं, जिससे हर मसाले का <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">प्राकृतिक तेल, चटक रंग और ताज़ा सुगंध</strong> पूरी तरह सुरक्षित रहता है।
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    आधुनिक <strong className="font-black text-black dark:text-white">कोल्ड-ग्राइंड तकनीक, FSSAI प्रमाणित स्वच्छता मानकों</strong> और ताजगी-सील पैकेजिंग के साथ, सिटी किंग मसाला आज बिहार और बंगाल के लाखों परिवारों और ढाबा-रेस्टोरेंट्स के लिए <strong className="font-black text-black dark:text-white">शुद्धता, विश्वास और स्वाद का प्रतीक</strong> बन चुका है। चाहे घर की रोजमर्रा सब्जी हो या शाही बिरयानी, सिटी किंग हर निवाले में स्वाद भर देता है।
                  </p>
                </Reveal>
              </div>
            ) : (
              <div className="space-y-4 text-zinc-900 dark:text-zinc-100 text-base sm:text-[17px] leading-relaxed font-semibold">
                <Reveal>
                  <p>
                    At <strong className="font-black text-black dark:text-white">City King Masala (Sah Food Industries)</strong>, we believe that every great dish begins with <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">pure, flavorful, and unadulterated ingredients</strong>. From the heart of <strong className="font-black text-black dark:text-white">Siliguri, West Bengal</strong>, we bring you a wide range of handpicked whole spices, ground powders, and traditional masalas — crafted to capture the true essence of Indian Kitchens.
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    Our journey began with a simple and steadfast vision by founder <strong className="font-black text-black dark:text-white">Mukesh Kumar Sah</strong> — to make <strong className="font-black text-black dark:text-white">authentic Indian flavors accessible and affordable across every home</strong>. We source directly from trusted farms across India, ensuring each spice retains its <strong className="font-black text-[#D97706] dark:text-[#F59E0B]">natural essential oils, vibrant color, and rich freshness</strong>.
                  </p>
                </Reveal>

                <Reveal>
                  <p>
                    With modern cold-milling facilities, strict <strong className="font-black text-black dark:text-white">FSSAI food-safety checks, and air-tight freshness packaging</strong>, City King has become a name that stands for <strong className="font-black text-black dark:text-white">purity, trust, and tradition</strong>. Whether you’re cooking everyday homestyle dal-sabji or a festive royal biryani, our spices bring authentic aroma and balanced taste to every meal.
                  </p>
                </Reveal>
              </div>
            )}

            {/* ─── Highlights Badges Row ─── */}
            <Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Packaging</span>
                  <span className="text-sm font-black text-black dark:text-white">₹5, ₹10 to 1kg</span>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Processing</span>
                  <span className="text-sm font-black text-black dark:text-white">Cold Ground</span>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Quality</span>
                  <span className="text-sm font-black text-black dark:text-white">FSSAI Certified</span>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 text-center">
                  <span className="block text-xs font-bold text-zinc-500 uppercase">Purity</span>
                  <span className="text-sm font-black text-[#D97706] dark:text-[#F59E0B]">100% Pure</span>
                </div>
              </div>
            </Reveal>

            {/* ─── CTAs ─── */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white px-6 py-3 font-black text-sm tracking-wide shadow-lg shadow-amber-600/30 transition-all hover:scale-105"
                >
                  <span>{isHi ? "सभी उत्पाद देखें" : "Explore All Products"}</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={waLink("Hi City King, I am interested in City King Masala products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-800 dark:border-zinc-200 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black px-6 py-2.5 font-bold text-sm tracking-wide transition-all"
                >
                  <MessageCircle className="size-4" />
                  <span>{isHi ? "व्हाट्सएप पर संपर्क करें" : "WhatsApp Enquiry"}</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ─── Bottom Authentic Dotted Line Divider ─── */}
      <DottedSectionDivider className="pb-6 pt-2" />
    </section>
  );
}
