import haldi from "@/assets/Cityking Haldi Powder Masala.png";
import mirchi from "@/assets/Cityking Mirchi Powder Masala.png";
import dhaniya from "@/assets/Cityking Dhaniya Powder Masala.png";
import jeera from "@/assets/Cityking Jeera Powder Masala.png";
import sabjiPng from "@/assets/Cityking Sabji Powder Masala.png";
import paneerPng from "@/assets/Cityking Kadai Paneer Powder Masala.png";
import teaBlack from "@/assets/Cityking Premium Chai Patti CTC Tea.png";
import teaGreen from "@/assets/Cityking Premium Chai Patti.png";
import teaClassic from "@/assets/Cityking Chai Patti Powder Masala.png";

// Real Product Masala Photos
import chickenImg from "@/assets/Chiken Masala.jpg";
import muttonImg from "@/assets/Mutton Masala.jpg";
import meatImg from "@/assets/Meat Masala.jpg";
import garamImg from "@/assets/Garam Masala.jpg";
import kitchenKingImg from "@/assets/Kitchen King Masala.jpg";
import kashmiriMirchImg from "@/assets/Kashmiri Mirch Masala.jpg";
import paneerImg from "@/assets/Paneer Masala.jpg";
import sabjiImg from "@/assets/Sabji Masala.jpg";

// Biryani & Fish Curry from public gallery
const biryaniImg = "/new-gallery/IMG-20261105-WA0017.jpg";
const fishCurryImg = "/new-gallery/IMG-20261105-WA0007.jpg";

export type CategoryId =
  | "everyday-spices"
  | "non-veg-masalas"
  | "blended-masalas"
  | "royal-blends"
  | "tea";

export type ProductVariant = {
  size: string;
  sizeHi?: string;
  weightGrams?: number;
  price: number;
  mrp: number;
  isPopular?: boolean;
  type: "pouch" | "box" | "bulk" | "pack";
  approxServings?: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: CategoryId;
  categoryLabel: string;
  categoryLabelHi?: string;
  image: string;
  imageIsPlaceholder: boolean;
  short: string;
  shortHi?: string;
  description: string;
  descriptionHi?: string;
  sizes: string[];
  featured: boolean;
  status: "available" | "coming-soon";
  tag: string;
  tagHi?: string;
  tagColor?: string;
  rating: number;
  reviewCount: number;
  spiceLevel: 1 | 2 | 3 | 4 | 5; // 1: Mild, 5: Extra Hot
  aromaScore: number; // 1-5
  oilRetention: string;
  oilRetentionHi?: string;
  ingredients: string;
  ingredientsHi?: string;
  shelfLife: string;
  shelfLifeHi?: string;
  storage: string;
  storageHi?: string;
  cookingTip: string;
  cookingTipHi?: string;
  bestPairing: string;
  bestPairingHi?: string;
  recipeSteps?: [string, string, string];
  recipeStepsHi?: [string, string, string];
  keyBenefits?: { en: string; hi: string }[];
  variants: ProductVariant[];
};

export const categories: { id: CategoryId; name: string; nameHi: string; blurb: string }[] = [
  {
    id: "everyday-spices",
    name: "Everyday Ground Spices",
    nameHi: "दैनिक पिसे मसाले",
    blurb: "100% pure cold-ground essential spices every Indian kitchen reaches for daily.",
  },
  {
    id: "non-veg-masalas",
    name: "Non-Veg Special Curries",
    nameHi: "नॉन-वेज स्पेशल मसाले",
    blurb: "Rich, aromatic Mughlai & Dhaba style formulations for chicken, mutton, biryani, and fish.",
  },
  {
    id: "blended-masalas",
    name: "Blended & Veg Masalas",
    nameHi: "मिश्रित व शाकाहारी मसाले",
    blurb: "Signature authentic masala blends for vegetables, paneer, and everyday banquets.",
  },
  {
    id: "royal-blends",
    name: "Royal & Exotic Blends",
    nameHi: "शाही व खड़े मसाले",
    blurb: "Handpicked whole spice powders including Shahi Garam Masala & Kitchen King.",
  },
  {
    id: "tea",
    name: "Chai Patti & CTC Tea",
    nameHi: "चाय पत्ती व सीटीसी चाय",
    blurb: "Premium CTC tea blends from Darjeeling and Dooars foothills for strong kadak chai.",
  },
];

export const products: Product[] = [
  // 1. CHICKEN MASALA
  {
    id: "ck-chicken-masala",
    slug: "chicken-masala",
    name: "City King Chicken Masala (Special Curry)",
    hindiName: "चिकन मसाला (शाही तरीदार)",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    categoryLabelHi: "नॉन-वेज करी",
    image: chickenImg,
    imageIsPlaceholder: false,
    short: "Rich aromatic blend with toasted whole spices for juicy, restaurant-grade chicken curry.",
    shortHi: "रसदार, रेस्टोरेंट जैसे चिकन करी के लिए 16 भुने खड़े मसालों का शाही मिश्रण।",
    description:
      "Crafted with 16 royal spices roasted to peak fragrant maturity. City King Chicken Masala gives your chicken pieces a succulent crust, thick golden gravy, and that unmistakable Mughlai fragrance. Milled at low temperatures so essential coriander, nutmeg, and clove oils never evaporate.",
    descriptionHi:
      "16 शाही साबुत मसालों को धीमी आंच पर भूनकर तैयार किया गया है। यह चिकन के टुकड़ों में गहरा स्वाद, गाढ़ी मसालेदार तरी और बेजोड़ खुशबू प्रदान करता है। कोल्ड-ग्राइंडिंग तकनीक से पीसा गया ताकि लौंग व जायफल के प्राकृतिक तेल सुरक्षित रहें।",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "TOP SELLER",
    tagHi: "सर्वाधिक लोकप्रिय",
    tagColor: "bg-red-600",
    rating: 4.95,
    reviewCount: 2150,
    spiceLevel: 4,
    aromaScore: 5,
    oilRetention: "Mace & Green Cardamom Oils Intact",
    oilRetentionHi: "जावित्री व छोटी इलायची के सुगंधित तेल सुरक्षित",
    ingredients: "Coriander, Cumin, Red Chilli, Black Pepper, Clove, Nutmeg, Cinnamon, Star Anise, Bay Leaves, Mace, Cardamom",
    ingredientsHi: "धनिया, जीरा, लाल मिर्च, काली मिर्च, लौंग, जायफल, दालचीनी, चक्रफूल, तेजपत्ता, जावित्री, छोटी इलायची",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Store in a cool, dry place away from direct sunlight",
    storageHi: "सीलन से दूर ठंडी व सूखी जगह पर एयरटाइट डिब्बे में रखें",
    cookingTip: "Marinate chicken with 1 tsp City King Chicken Masala, curd, and salt for 20 mins before cooking for maximum tenderness.",
    cookingTipHi: "पकाने से 20 मिनट पहले चिकन को 1 चम्मच चिकन मसाला, दही और नमक के साथ मैरीनेट करें। मांस बेहद कोमल और रसदार बनेगा।",
    bestPairing: "Chicken Curry, Butter Chicken, Chicken Kasha & Tandoori Gravy",
    bestPairingHi: "चिकन करी, बटर चिकन, चिकन कशा, तंदूरी ग्रेवी व रुमाली रोटी",
    recipeSteps: [
      "Brown sliced onions and ginger-garlic paste in hot mustard oil.",
      "Add 2 tbsp City King Chicken Masala with tomato puree and saute until oil separates.",
      "Add chicken pieces, sear for 5 mins, add warm water and simmer to rich perfection.",
    ],
    recipeStepsHi: [
      "सरसों के तेल में प्याज और अदरक-लहसुन पेस्ट को सुनहरा भूरा भूनें।",
      "2 चम्मच सिटी किंग चिकन मसाला और टमाटर प्यूरी डालकर तेल छूटने तक भूनें।",
      "चिकन के टुकड़े डालें, 5 मिनट तेज आंच पर भूनें, गुनगुना पानी डालकर धीमी आंच पर पकाएं।",
    ],
    keyBenefits: [
      { en: "16 Roasted Whole Spices Blend", hi: "16 भुने खड़े मसालों का प्रामाणिक अनुपात" },
      { en: "Zero Artificial Dyes or Starch Fillers", hi: "शून्य कृत्रिम रंग व स्टार्च मिलावट मुक्त" },
      { en: "Low-RPM Cold Ground (Natural Oils Locked)", hi: "धीमी गति कोल्ड-ग्राइंडिंग से खुशबू सुरक्षित" },
      { en: "Direct Factory Fresh Siliguri Dispatch", hi: "सिलिगुड़ी फैक्ट्री से सीधा ताजा प्रेषण" },
    ],
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 34, mrp: 42, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 65, mrp: 80, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 125, mrp: 155, type: "box", approxServings: 56 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 290, mrp: 350, type: "pack", approxServings: 140 },
    ],
  },

  // 2. MUTTON MASALA
  {
    id: "ck-mutton-masala",
    slug: "mutton-masala",
    name: "City King Mutton Masala (Desi Ghost Blend)",
    hindiName: "मटन मसाला (देसी मटन स्पेशल)",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    categoryLabelHi: "नॉन-वेज करी",
    image: muttonImg,
    imageIsPlaceholder: false,
    short: "Robust, slow-cooked spice formulation that tenderizes meat and delivers rich rogany gravy.",
    shortHi: "देसी मटन के लिए गाढ़ी तरी और चमकता रोगन देने वाला शक्तिशाली मसाला मिश्रण।",
    description:
      "Formulated for rich meats that demand bold heat and deep warmth. Features stone-crushed black cardamom, sweet cloves, dried ginger, and long-pepper notes that cut through the richness of mutton and yield velvety gravy with gleaming rogan.",
    descriptionHi:
      "काली बड़ी इलायची, लौंग, सोंठ और पीपल के संतुलित गुणों से तैयार। यह मटन को अंदर तक गलाकर नर्म बनाता है और तरी में गाढ़ापन व मनमोहक लाल रोगन लाता है।",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "RICH & BOLD",
    tagHi: "गाढ़ा रोगन स्वाद",
    tagColor: "bg-amber-800",
    rating: 4.9,
    reviewCount: 1680,
    spiceLevel: 4,
    aromaScore: 5,
    oilRetention: "Heavy Black Cardamom & Clove Volatiles",
    oilRetentionHi: "बड़ी इलायची व लौंग के भारी वाष्पशील तेल सुरक्षित",
    ingredients: "Black Cardamom, Cumin, Black Pepper, Dry Ginger, Mace, Cloves, Cinnamon, Coriander, Garlic, Mustard",
    ingredientsHi: "बड़ी इलायची, जीरा, काली मिर्च, सोंठ, जावित्री, लौंग, दालचीनी, धनिया, लहसुन, सरसों",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Keep in a dark airtight container away from steam",
    storageHi: "भाप और नमी से बचाकर सीलबंद डिब्बे में रखें",
    cookingTip: "Slow-roast (bhuna) the mutton with this masala for 15 minutes before pressure cooking to seal juices inside.",
    cookingTipHi: "कुकर बंद करने से पहले मटन को इस मसाले के साथ 15 मिनट धीमी आंच पर भूनें। स्वाद कई गुना बढ़ जाएगा।",
    bestPairing: "Mutton Kasha, Kosha Mangsho, Rogan Josh & Meat Pulao",
    bestPairingHi: "मटन कशा, कोशा मांगशो, रोगन जोश व मटन पुलाव",
    recipeSteps: [
      "Sear marinated mutton in hot mustard oil with whole bay leaves.",
      "Stir in City King Mutton Masala dissolved in a splash of warm water so spices never burn.",
      "Slow-cook on gentle heat until meat falls tenderly off the bone.",
    ],
    recipeStepsHi: [
      "सरसों तेल में तेजपत्ता डालकर मटन को तेज आंच पर हल्का भूनें।",
      "सिटी किंग मटन मसाला थोड़े गुनगुने पानी में घोलकर डालें ताकि मसाला जले नहीं।",
      "धीमी आंच पर तब तक पकाएं जब तक गोश्त हड्डियों से अलग न होने लगे।",
    ],
    keyBenefits: [
      { en: "Tenderizes Tough Meats Naturally", hi: "मांस को प्राकृतिक रूप से कोमल व सुपाच्य बनाता है" },
      { en: "Authentic Restaurant Rogan Finish", hi: "रेस्टोरेंट जैसा चमकदार लाल रोगन व गाढ़ी तरी" },
      { en: "100% Pure Crushed Whole Spices", hi: "100% शुद्ध कुटे साबुत मसाले" },
    ],
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 38, mrp: 46, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 72, mrp: 88, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 138, mrp: 170, type: "box", approxServings: 56 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 320, mrp: 390, type: "pack", approxServings: 140 },
    ],
  },

  // 3. BIRYANI MASALA
  {
    id: "ck-biryani-masala",
    slug: "biryani-masala",
    name: "City King Royal Dum Biryani Masala",
    hindiName: "दम बिरयानी मसाला (शाही खुशबूदार)",
    category: "non-veg-masalas",
    categoryLabel: "Royal Blends",
    categoryLabelHi: "शाही खुशबूदार मसाले",
    image: biryaniImg,
    imageIsPlaceholder: false,
    short: "Exotic Nizami & Kolkata Dum Biryani spice mix with floral aromatic whole spices.",
    shortHi: "निजामी व कोलकाता दम बिरयानी के लिए महकदार फूलों व खड़े मसालों का शाही मिश्रण।",
    description:
      "The master secret behind authentic Dum Biryani that fills the entire neighborhood with fragrance. Blended with stone-flower, green cardamom, mace, nutmeg, and shahi jeera to impart sweet warmth without muddying the rice grains.",
    descriptionHi:
      "असली दम बिरयानी का राज जो पूरे मोहल्ले में अपनी सुगंध फैला दे। पत्थर फूल, हरी इलायची, जावित्री, जायफल और शाही जीरे का विशेष मिश्रण जो चावल के एक-एक दाने को महका देता है।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "ROYAL AROMA",
    tagHi: "शाही खुशबू",
    tagColor: "bg-purple-700",
    rating: 4.92,
    reviewCount: 1840,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Kewra & Star Anise Floral Volatiles Preserved",
    oilRetentionHi: "केवड़ा, चक्रफूल व गुलाब की पंखुड़ियों के प्राकृतिक सुगंध सुरक्षित",
    ingredients: "Green Cardamom, Mace, Nutmeg, Star Anise, Shahi Jeera, Cloves, Cinnamon, Fennel, Rose Petals, Black Pepper",
    ingredientsHi: "हरी इलायची, जावित्री, जायफल, चक्रफूल, शाही जीरा, लौंग, दालचीनी, सौंफ, गुलाब की पंखुड़ियां, काली मिर्च",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Keep in a cool dry cabinet",
    storageHi: "खुशबू बनाए रखने के लिए एयरटाइट डिब्बे में रखें",
    cookingTip: "Layer between hot cooked basmati rice and marinated meat with saffron milk, then seal pot with dough for dum.",
    cookingTipHi: "चावल और गोश्त की तह लगाते समय ऊपर से यह मसाला और केसरिया दूध छिड़कें, फिर बर्तन को आटे से सील कर दम दें।",
    bestPairing: "Chicken Dum Biryani, Mutton Biryani, Veg Pulao & Awadhi Dum Rice",
    bestPairingHi: "चिकन दम बिरयानी, मटन बिरयानी, वेज पुलाव, नवरत्न पुलाव",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 40, mrp: 50, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 78, mrp: 95, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 150, mrp: 185, type: "box", approxServings: 56 },
    ],
  },

  // 4. MEAT MASALA
  {
    id: "ck-meat-masala",
    slug: "meat-masala",
    name: "City King Meat Mix Masala (Tari Special)",
    hindiName: "मीट मसाला (स्पेशल तरी करी)",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    categoryLabelHi: "नॉन-वेज करी",
    image: meatImg,
    imageIsPlaceholder: false,
    short: "Authentic highway dhaba style gravy mix for all non-veg mutton and meat preparations.",
    shortHi: "हाईवे ढाबा स्टाइल तीखी-मसालेदार तरीदार मीट करी के लिए खास मसाला।",
    description:
      "A punchy, well-balanced blend designed for hearty everyday meat gravies. Blends coarse coriander, hot chillies, toasted cumin, and pungent black pepper to produce rich, bubbling, deep-red sauce with homestyle warmth.",
    descriptionHi:
      "धनिया, लाल मिर्च, भुना जीरा और तीखी काली मिर्च का खास मिश्रण जो गोश्त की तरी को गहरा रंग और स्वादिष्ट तीखापन देता है।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "DHABA STYLE",
    tagHi: "ढाबा स्पेशल",
    tagColor: "bg-amber-900",
    rating: 4.88,
    reviewCount: 1420,
    spiceLevel: 4,
    aromaScore: 4,
    oilRetention: "Robust Coriander-Cumin-Pepper Complex",
    oilRetentionHi: "धनिया, जीरा व काली मिर्च के प्राकृतिक तेल सुरक्षित",
    ingredients: "Coriander, Cumin, Red Chilli, Black Pepper, Fenugreek, Clove, Cinnamon, Dry Mango, Asafoetida, Cardamom",
    ingredientsHi: "धनिया, जीरा, लाल मिर्च, काली मिर्च, मेथी, लौंग, दालचीनी, आमचूर, हींग, इलायची",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Airtight canister away from sunlight",
    storageHi: "धूप से दूर सूखे डिब्बे में रखें",
    cookingTip: "Roast onions until deep brown before adding meat masala to get that signature highway dhaba dark gravy.",
    cookingTipHi: "ढाबा जैसी डार्क ग्रेवी के लिए प्याज को गहरा भूरा भूनने के बाद ही मीट मसाला डालें।",
    bestPairing: "Meat Curry, Keema Matar, Liver Fry & Spicy Stew",
    bestPairingHi: "मीट तरी करी, कीमा मटर, कलेजी फ्राई व मटन स्टू",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 36, mrp: 44, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 68, mrp: 84, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 130, mrp: 160, type: "box", approxServings: 56 },
    ],
  },

  // 5. FISH CURRY MASALA
  {
    id: "ck-fish-curry",
    slug: "fish-curry-masala",
    name: "City King Fish Curry Masala (Macher Jhol)",
    hindiName: "फिश करी मसाला (माछेर झोल)",
    category: "non-veg-masalas",
    categoryLabel: "Non-Veg Curries",
    categoryLabelHi: "नॉन-वेज करी",
    image: fishCurryImg,
    imageIsPlaceholder: false,
    short: "Signature North Bengal & Bengali Macher Jhol blend with yellow mustard and cooling cumin.",
    shortHi: "पीली सरसों और ठंडे जीरे का पारंपरिक बंगाली माछेर झोल व मछली करी मसाला।",
    description:
      "Crafted specifically for freshwater Katla, Rohu, and river fish preparations popular across Bengal, Bihar, and Assam. Balanced with mustard seeds, cumin, fenugreek, and mild turmeric so the natural sweet flavor of the fish is enhanced, never overpowered.",
    descriptionHi:
      "रोहू, कतला और ताजी नदियों की मछली के लिए विशेष। पीली सरसों, जीरा, मेथी और शुद्ध हल्दी का सही संतुलन ताकि मछली का असली मीठा स्वाद निखरकर आए।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "BENGAL FAVORITE",
    tagHi: "बंगाल का पसंदीदा",
    tagColor: "bg-cyan-700",
    rating: 4.89,
    reviewCount: 1290,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Yellow Mustard & Fennel Botanical Oils",
    oilRetentionHi: "पीली सरसों व सौंफ के प्राकृतिक तेल सुरक्षित",
    ingredients: "Yellow Mustard, Cumin, Coriander, Turmeric, Dry Red Chilli, Fenugreek, Fennel Seeds, Black Mustard",
    ingredientsHi: "पीली सरसों, जीरा, धनिया, हल्दी, लाल मिर्च, मेथी दाना, सौंफ, राई",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Store in a dry cool cabinet",
    storageHi: "सूखी ठंडी जगह पर रखें",
    cookingTip: "Lightly fry marinated fish pieces in mustard oil first, then cook in the gravy made with City King Fish Masala.",
    cookingTipHi: "हल्दी-नमक लगी मछली को पहले सरसों तेल में हल्का तलें, फिर इस मसाले से बनी तरी में 3 मिनट उबालें।",
    bestPairing: "Rohu Curry, Katla Kalia, Shorshe Maach & Fish Fry",
    bestPairingHi: "रोहू करी, कतला कालिया, शोरशे माछ, फिश फ्राई व सादे चावल",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 34, mrp: 42, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 65, mrp: 80, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 124, mrp: 150, type: "box", approxServings: 56 },
    ],
  },

  // 6. SHAHI GARAM MASALA
  {
    id: "ck-garam-masala",
    slug: "garam-masala",
    name: "City King Shahi Garam Masala (Whole Spices)",
    hindiName: "शाही गरम मसाला (खड़ा मसाला ब्लेंड)",
    category: "royal-blends",
    categoryLabel: "Royal Blends",
    categoryLabelHi: "शाही खुशबूदार मसाले",
    image: garamImg,
    imageIsPlaceholder: false,
    short: "A pinnacle royal finishing blend that awakens curries and dals with just half a teaspoon.",
    shortHi: "दाल व सब्जियों में जान फूंकने वाला 15 खड़े मसालों का जादुई शाही मसाला।",
    description:
      "A masterpiece formulation of 15 royal spices including green cardamom, stone flower, cloves, cinnamon quills, and nutmeg. Add at the final 60 seconds of cooking to infuse your dishes with an irresistible festive aroma.",
    descriptionHi:
      "हरी इलायची, पत्थर फूल, लौंग, दालचीनी, जायफल और जावित्री से तैयार। खाना पकने के आखिरी 60 सेकंड में आधा चम्मच डालें और देखें कैसे पूरा घर महक उठता है।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "FINISHING SPICE",
    tagHi: "शाही फिनिशिंग",
    tagColor: "bg-orange-800",
    rating: 4.96,
    reviewCount: 2410,
    spiceLevel: 3,
    aromaScore: 5,
    oilRetention: "Pure Cardamom, Clove & Cinnamon Volatile Seal",
    oilRetentionHi: "इलायची, लौंग व दालचीनी की प्राकृतिक खुशबू बंद",
    ingredients: "Green Cardamom, Black Cardamom, Cloves, Cinnamon, Cumin, Coriander, Black Pepper, Mace, Nutmeg, Bay Leaf",
    ingredientsHi: "छोटी इलायची, बड़ी इलायची, लौंग, दालचीनी, जीरा, धनिया, काली मिर्च, जावित्री, जायफल, तेजपत्ता",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Airtight glass jar away from moisture and direct light",
    storageHi: "खुशबू सुरक्षित रखने के लिए कांच के जार में रखें",
    cookingTip: "Always sprinkle 1/2 tsp at the very end of cooking, cover the pot with a tight lid for 2 minutes to seal fragrance.",
    cookingTipHi: "हमेशा गैस बंद करने से ठीक पहले आधा चम्मच छिड़कें और 2 मिनट के लिए ढक्कन बंद कर दें।",
    bestPairing: "Dal Makhani, Shahi Paneer, Biryani, Kofta & Rich Curries",
    bestPairingHi: "दाल मखनी, शाही पनीर, वेज कोफ्ता, कोरमा व पुलाव",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 42, mrp: 52, type: "box", approxServings: 25 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 80, mrp: 98, type: "pouch", approxServings: 50 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 155, mrp: 190, type: "box", approxServings: 100 },
    ],
  },

  // 7. KITCHEN KING MASALA
  {
    id: "ck-kitchen-king",
    slug: "kitchen-king-masala",
    name: "City King Kitchen King Masala (All-in-One)",
    hindiName: "किचन किंग मसाला (ऑल-इन-वन)",
    category: "royal-blends",
    categoryLabel: "Master Blends",
    categoryLabelHi: "मास्टर ब्लेंड्स",
    image: kitchenKingImg,
    imageIsPlaceholder: false,
    short: "The versatile king of the kitchen that makes every vegetable, dal, and curry mouth-watering.",
    shortHi: "हर सब्जी, दाल और पनीर को होटल जैसा स्वादिष्ट बनाने वाला ऑल-इन-वन मसाला।",
    description:
      "The ultimate all-rounder blend that takes away all spice confusion. Combines warm spices with refreshing coriander and tangy amchur, transforming simple paneer dishes, mixed vegetables, or koftas into restaurant-level banquets.",
    descriptionHi:
      "मसालों का राजा जो किसी भी साधारण सब्जी, पनीर या दाल को शादी-ब्याह जैसा लजीज बना दे। इसमें धनिया, जीरा, आमचूर और गरम मसालों का ऐसा संतुलन है कि अलग से कुछ डालने की जरूरत नहीं।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "VERSATILE CHEF",
    tagHi: "रसोई का राजा",
    tagColor: "bg-emerald-700",
    rating: 4.93,
    reviewCount: 1980,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Fenugreek, Mango & Turmeric Balanced Formula",
    oilRetentionHi: "कसूरी मेथी, आमचूर व हल्दी का संतुलित सुगंधित फार्मूला",
    ingredients: "Coriander, Cumin, Red Chilli, Turmeric, Black Pepper, Dry Mango, Fenugreek, Clove, Nutmeg, Ginger, Cardamom",
    ingredientsHi: "धनिया, जीरा, लाल मिर्च, हल्दी, काली मिर्च, आमचूर, कसूरी मेथी, लौंग, जायफल, सोंठ, इलायची",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Store in a cool dry cabinet",
    storageHi: "सूखी व साफ जगह पर रखें",
    cookingTip: "Add directly while sauteing ginger-garlic and onions; no extra coriander or cumin powder needed!",
    cookingTipHi: "अदरक-लहसुन भूनते समय इसे सीधा डालें; अलग से धनिया या जीरा पाउडर डालने की कोई जरूरत नहीं।",
    bestPairing: "Matar Paneer, Mixed Veg, Aloo Gobi, Chana Masala & Malai Kofta",
    bestPairingHi: "मटर पनीर, मिक्स वेज, आलू गोभी, मलाई कोफ्ता व छोले",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 36, mrp: 44, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 68, mrp: 84, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 132, mrp: 160, type: "box", approxServings: 56 },
    ],
  },

  // 8. KASHMIRI MIRCH MASALA
  {
    id: "ck-kashmiri-mirch",
    slug: "kashmiri-mirch-masala",
    name: "City King Kashmiri Mirch Powder",
    hindiName: "कश्मीरी लाल मिर्च (नेचुरल लाल रंग)",
    category: "everyday-spices",
    categoryLabel: "Everyday Spices",
    categoryLabelHi: "दैनिक मसाले",
    image: kashmiriMirchImg,
    imageIsPlaceholder: false,
    short: "Dazzling ruby-red colour with mild, sweet warmth — zero artificial dyes guaranteed.",
    shortHi: "गहरा रूबी-लाल रंग और हल्का मीठा तीखापन — 100% प्राकृतिक रंग की गारंटी।",
    description:
      "Carefully sourced stemless Kashmiri chillies naturally cold-ground to preserve their intense red pigmentation (capsanthin) and sweet mild heat. Gives rich butter paneer, curries, and tandoori gravies a showstopping glow without scorching the tongue.",
    descriptionHi:
      "डंठल रहित असली कश्मीरी लाल मिर्चों को धीमी गति से पीसकर तैयार किया गया है। यह खाने को प्राकृतिक रूप से सुर्ख लाल रंग देता है बिना किसी हानिकारक रंग या सूडान डाई के।",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "VIBRANT RED",
    tagHi: "गहरा लाल रंग",
    tagColor: "bg-red-700",
    rating: 4.97,
    reviewCount: 2200,
    spiceLevel: 2,
    aromaScore: 4,
    oilRetention: "Natural Oleoresin Red Color Intact",
    oilRetentionHi: "प्राकृतिक ओलेओरेसिन लाल रंग पूरी तरह सुरक्षित",
    ingredients: "100% Stemless Sun-Dried Kashmiri Chillies",
    ingredientsHi: "100% डंठल रहित धूप में सुखाई गई शुद्ध कश्मीरी मिर्च",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Airtight jar in a cool dark pantry to protect vibrant red color",
    storageHi: "लाल रंग सुरक्षित रखने के लिए धूप से दूर अंधेरी अलमारी में रखें",
    cookingTip: "Mix with 1 tbsp warm oil or ghee before pouring into your curry for an irresistible glossy red rogan finish.",
    cookingTipHi: "तरी में डालने से पहले 1 चम्मच गुनगुने तेल या घी में घोलें। चमकदार लाल रंग तैरने लगेगा।",
    bestPairing: "Butter Chicken, Paneer Butter Masala, Rogan Josh & Tandoori Tikka",
    bestPairingHi: "पनीर बटर मसाला, बटर चिकन, तंदूरी टिक्का व कश्मीरी दम आलू",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 35, mrp: 44, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 68, mrp: 82, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 130, mrp: 160, type: "box", approxServings: 80 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 310, mrp: 375, type: "pack", approxServings: 200 },
    ],
  },

  // 9. PANEER MASALA
  {
    id: "ck-paneer-masala",
    slug: "paneer-masala",
    name: "City King Kadai Paneer Masala (Royal Shahi)",
    hindiName: "कड़ाही पनीर मसाला (शाही स्वाद)",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    categoryLabelHi: "मिश्रित मसाले",
    image: paneerImg,
    imageIsPlaceholder: false,
    short: "Rich, fragrant Mughlai & Kadai spice blend for velvety restaurant-style paneer gravies.",
    shortHi: "मखमली रेस्टोरेंट जैसी ग्रेवी के लिए दरदरे साबुत मसालों व कसूरी मेथी का शाही संगम।",
    description:
      "Formulated with whole crushed coriander seeds, Kashmiri chili, mace, green cardamom, and roasted fenugreek leaves (kasoori methi). Gives paneer cubes a luscious, aromatic coat that rivals famous Dhabas and grand banquets.",
    descriptionHi:
      "दरदरे कुटे धनिया बीज, कश्मीरी मिर्च, जावित्री, छोटी इलायची और कसूरी मेथी से तैयार। पनीर के टुकड़ों को ऐसा लजीज स्वाद देता है जो ढाबे और 5-स्टार होटल जैसा लगे।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "ROYAL SPICE",
    tagHi: "शाही पनीर स्वाद",
    tagColor: "bg-amber-600",
    rating: 4.91,
    reviewCount: 1720,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Mace, Cardamom & Fenugreek Volatiles Sealed",
    oilRetentionHi: "जावित्री, इलायची व मेथी के सुगंधित तेल सुरक्षित",
    ingredients: "Coriander, Cumin, Kashmiri Mirch, Cinnamon, Clove, Black Cardamom, Kasuri Methi, Mace, Star Anise",
    ingredientsHi: "धनिया, जीरा, कश्मीरी मिर्च, दालचीनी, लौंग, बड़ी इलायची, कसूरी मेथी, जावित्री, चक्रफूल",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Store in a sealed pouch or spice jar",
    storageHi: "सीलबंद जार में रखें",
    cookingTip: "Dissolve 1 tablespoon in 2 tablespoons of warm milk or whisked curd before folding into your paneer gravy.",
    cookingTipHi: "पनीर डालने से पहले 1 चम्मच मसाला गुनगुने दूध या फेंटी हुई मलाई में घोलकर ग्रेवी में मिलाएं।",
    bestPairing: "Kadai Paneer, Shahi Paneer, Paneer Lababdar & Veg Kofta",
    bestPairingHi: "कड़ाही पनीर, शाही पनीर, पनीर लबाबदार, पनीर टिक्का मसाला",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 35, mrp: 44, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 68, mrp: 82, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 128, mrp: 155, type: "box", approxServings: 56 },
    ],
  },

  // 10. SABJI MASALA
  {
    id: "ck-sabji-masala",
    slug: "sabji-masala",
    name: "City King Sabji Masala (Master Blend)",
    hindiName: "सब्ज़ी मसाला (मास्टर ब्लेंड)",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    categoryLabelHi: "मिश्रित मसाले",
    image: sabjiImg,
    imageIsPlaceholder: false,
    short: "Complete all-in-one kitchen spice blend for homestyle dry & gravy seasonal vegetables.",
    shortHi: "रोजमर्रा की सूखी व रसेदार मौसमी सब्जियों के लिए 14 मसालों का जादुई संतुलन।",
    description:
      "A golden master formulation of 14 roasted spices in exact harmony. Removes the guesswork from daily cooking — simply saute onions and tomatoes, add a spoonful of City King Sabji Masala, and watch ordinary aloo gobi, bhindi, or mixed veg turn into restaurant-grade delights.",
    descriptionHi:
      "14 भुने मसालों का सुनहरा नुस्खा। रोज की साधारण आलू गोभी, भिंडी, परवल या मिक्स वेज में 1 चम्मच डालें और घर के खाने को बनाएं दावत जैसा लाजवाब।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: true,
    status: "available",
    tag: "DAILY HERO",
    tagHi: "दैनिक पसंद",
    tagColor: "bg-emerald-600",
    rating: 4.9,
    reviewCount: 1890,
    spiceLevel: 2,
    aromaScore: 4,
    oilRetention: "Toasted Coriander & Amchur Essence Preserved",
    oilRetentionHi: "भुना धनिया व आमचूर का प्राकृतिक खट्टा-मीठा स्वाद सुरक्षित",
    ingredients: "Coriander, Cumin, Turmeric, Dry Mango, Black Pepper, Clove, Nutmeg, Cardamom, Dry Ginger, Bay Leaves",
    ingredientsHi: "धनिया, जीरा, हल्दी, आमचूर, काली मिर्च, लौंग, जायफल, इलायची, सोंठ, तेजपत्ता",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Store in a dry cool cabinet",
    storageHi: "सूखी ठंडी जगह पर रखें",
    cookingTip: "Add towards the middle of frying your gravy, allowing the whole spices to caramelize without scorching.",
    cookingTipHi: "सब्जी भूनते समय बीच में डालें ताकि मसाले जलें नहीं बल्कि घी-तेल में अच्छे से पक जाएं।",
    bestPairing: "Aloo Gobi, Bhindi Fry, Parwal Gravy, Mixed Veg & Dal Fry",
    bestPairingHi: "आलू गोभी, भिंडी फ्राई, परवल आलू, मिक्स वेज व दाल तड़का",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 32, mrp: 40, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 60, mrp: 74, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 115, mrp: 140, type: "box", approxServings: 56 },
    ],
  },

  // 11. TURMERIC (HALDI)
  {
    id: "ck-haldi",
    slug: "turmeric-haldi-powder",
    name: "City King Turmeric (Haldi) Powder",
    hindiName: "शुद्ध हल्दी पाउडर (>3% करक्यूमिन)",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    categoryLabelHi: "दैनिक पिसे मसाले",
    image: haldi,
    imageIsPlaceholder: false,
    short: "Warm golden colour and pure curcumin for everyday dals, sabzis and curries.",
    shortHi: "प्राकृतिक सुनहरा रंग और उच्च करक्यूमिन — बिना स्टार्च व बिना लेड क्रोमेट।",
    description:
      "City King Haldi Powder brings the familiar golden glow and natural earthy warmth that Indian cooking begins with. Milled at low temperatures to lock in medicinal curcumin.",
    descriptionHi:
      "सिलिगुड़ी फैक्ट्री में धीमी गति से पीसी गई शुद्ध साबुत हल्दी गांठें। इसमें 3% से अधिक प्राकृतिक करक्यूमिन मौजूद है जो स्वास्थ्य के लिए गुणकारी है। शून्य केमिकल, शून्य कृत्रिम पीला रंग।",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "BESTSELLER",
    tagHi: "100% शुद्ध",
    tagColor: "bg-amber-500",
    rating: 4.96,
    reviewCount: 2850,
    spiceLevel: 1,
    aromaScore: 4,
    oilRetention: "Therapeutic Curcumin (>3%) Fully Preserved",
    oilRetentionHi: "औषधीय करक्यूमिन (>3%) प्राकृतिक रूप से सुरक्षित",
    ingredients: "100% Selected Sun-Dried Indian Turmeric Rhizomes",
    ingredientsHi: "100% चुनी हुई धूप में सुखाई गई शुद्ध हल्दी गांठें",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Store in a cool, dry and airtight container away from direct sunlight",
    storageHi: "धूप से दूर सीलबंद सूखे डिब्बे में रखें",
    cookingTip: "Bloom in hot mustard oil or ghee for 15 seconds to release natural medicinal curcumin and vibrant color.",
    cookingTipHi: "तड़के के गरम तेल या घी में 15 सेकंड भूनें ताकि करक्यूमिन सक्रिय हो सके और चमकता पीला रंग आए।",
    bestPairing: "Daily Dal, Comfort Khichdi, Golden Haldi Milk & Veg Curries",
    bestPairingHi: "दैनिक अरहर दाल, खिचड़ी, हल्दी वाला दूध व सब्जी",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 22, mrp: 28, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 42, mrp: 52, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 80, mrp: 98, type: "box", approxServings: 80 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 185, mrp: 225, type: "pack", approxServings: 200 },
      { size: "1kg Master Bulk", sizeHi: "1 किग्रा मास्टर बल्क", weightGrams: 1000, price: 350, mrp: 420, type: "bulk", approxServings: 400 },
    ],
  },

  // 12. CHILLI (MIRCHI)
  {
    id: "ck-mirchi",
    slug: "mirchi-chilli-powder",
    name: "City King Mirchi (Chilli) Powder",
    hindiName: "तीखी लाल मिर्च पाउडर (प्योर तीखापन)",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    categoryLabelHi: "दैनिक पिसे मसाले",
    image: mirchi,
    imageIsPlaceholder: false,
    short: "Vibrant natural red colour and balanced fiery heat without artificial dyes.",
    shortHi: "डंठल रहित साबुत लाल मिर्चों से तैयार — प्राकृतिक तीखापन और गाढ़ा लाल रंग।",
    description:
      "City King Mirchi Powder adds deep red colour and clean, robust heat that elevates curries, gravies, chutneys, and tadkas. Made from selected stemless sun-dried red chillies.",
    descriptionHi:
      "चुनी हुई डंठल रहित लाल मिर्चों से तैयार। यह तीखेपन के साथ-साथ सब्जी को गहरा लाल रंग देती है। कोई मिलावटी रंग या तेल नहीं मिलाया जाता।",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "PURE HEAT",
    tagHi: "शुद्ध तीखापन",
    tagColor: "bg-red-600",
    rating: 4.93,
    reviewCount: 2310,
    spiceLevel: 5,
    aromaScore: 4,
    oilRetention: "Capsaicin & Natural Red Pigment Locked",
    oilRetentionHi: "कैप्सैसिन व प्राकृतिक लाल रंग सुरक्षित",
    ingredients: "100% Stemless Sun-Dried Red Chillies (No Additives)",
    ingredientsHi: "100% डंठल रहित धूप में सुखाई गई शुद्ध लाल मिर्च",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Keep in an airtight jar in a cool, dark kitchen shelf",
    storageHi: "अंधेरी सूखी जगह पर सीलबंद डिब्बे में रखें",
    cookingTip: "Mix with a teaspoon of water before adding to hot tadka oil so the chili never burns.",
    cookingTipHi: "गरम तड़के में डालने से पहले 1 चम्मच पानी में घोल लें ताकि मिर्च जले नहीं और तरी लाल बने।",
    bestPairing: "Curries, Gravies, Spicy Tadkas, Chutneys & Pickles",
    bestPairingHi: "रसेदार तरी, दाल तड़का, तीखी चटनी व अचार",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 26, mrp: 32, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 50, mrp: 60, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 96, mrp: 118, type: "box", approxServings: 80 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 225, mrp: 270, type: "pack", approxServings: 200 },
      { size: "1kg Master Bulk", sizeHi: "1 किग्रा मास्टर बल्क", weightGrams: 1000, price: 430, mrp: 510, type: "bulk", approxServings: 400 },
    ],
  },

  // 13. CORIANDER (DHANIYA)
  {
    id: "ck-dhaniya",
    slug: "dhaniya-coriander-powder",
    name: "City King Dhaniya (Coriander) Powder",
    hindiName: "सुगंधित धनिया पाउडर (ताजा महक)",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    categoryLabelHi: "दैनिक पिसे मसाले",
    image: dhaniya,
    imageIsPlaceholder: false,
    short: "Fresh, mellow aroma and body-building texture for curries and gravies.",
    shortHi: "ताजी हरी महक और तरी को गाढ़ापन देने वाला शत-प्रतिशत शुद्ध धनिया पाउडर।",
    description:
      "Finely ground from plump coriander seeds with a fresh, botanical aroma. City King Dhaniya Powder builds rich body in curries and balances sharper spices.",
    descriptionHi:
      "हरी छटा वाले साबुत धनिया बीजों से तैयार। यह करी को गाढ़ापन और ठंडक भरा स्वाद देता है। इसमें कोई भूसी या लकड़ी का चूर्ण नहीं होता।",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "FRESH BOTANICAL",
    tagHi: "ताजा महक",
    tagColor: "bg-emerald-600",
    rating: 4.88,
    reviewCount: 1450,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Linalool & Essential Terpenes Retained",
    oilRetentionHi: "लीनालूल व सुगंधित प्राकृतिक तेल सुरक्षित",
    ingredients: "100% Whole Roasted Plump Coriander Seeds",
    ingredientsHi: "100% भुने साबुत धनिया बीज",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Keep tightly closed in an opaque container away from heat",
    storageHi: "खुशबू बनाए रखने के लिए एयरटाइट डिब्बे में रखें",
    cookingTip: "Add alongside ginger-garlic paste to create a hearty base that thickens your curry naturally.",
    cookingTipHi: "अदरक-लहसुन पेस्ट के साथ डालें ताकि करी में प्राकृतिक गाढ़ापन आ सके।",
    bestPairing: "All Everyday Veg & Meat Gravies, Sambar & Rasam",
    bestPairingHi: "दैनिक सब्जियां, रसेदार तरी, सांभर व रसम",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 22, mrp: 28, type: "box", approxServings: 20 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 42, mrp: 52, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 80, mrp: 98, type: "box", approxServings: 80 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 185, mrp: 225, type: "pack", approxServings: 200 },
      { size: "1kg Master Bulk", sizeHi: "1 किग्रा मास्टर बल्क", weightGrams: 1000, price: 350, mrp: 420, type: "bulk", approxServings: 400 },
    ],
  },

  // 14. JEERA (CUMIN) POWDER
  {
    id: "ck-jeera",
    slug: "jeera-cumin-powder",
    name: "City King Jeera (Cumin) Powder",
    hindiName: "भुना जीरा पाउडर (पाचन व स्वाद)",
    category: "everyday-spices",
    categoryLabel: "Everyday Ground Spices",
    categoryLabelHi: "दैनिक पिसे मसाले",
    image: jeera,
    imageIsPlaceholder: false,
    short: "Earthy, nutty roasted cumin aroma for raitas, chaat, and daily sabzis.",
    shortHi: "रायता, चाट, दही वड़ा और दाल तड़का के लिए सौंधी भुनी महक वाला जीरा।",
    description:
      "City King Jeera Powder carries the warm, roasted aroma of selected cumin seeds — an essential finishing touch for raita, salads, chaat, and daily Indian gravies.",
    descriptionHi:
      "चुने हुए जीरे को धीमी आंच पर सौंधा भूनकर पीसा गया है। यह पेट के लिए सुपाच्य और छाछ, रायता, सलाद और दैनिक सब्जियों में जान डाल देता है।",
    sizes: ["5g", "10g", "50g", "100g", "200g", "500g"],
    featured: true,
    status: "available",
    tag: "ROASTED NOTE",
    tagHi: "सौंधी भुनी महक",
    tagColor: "bg-amber-700",
    rating: 4.89,
    reviewCount: 960,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Cuminaldehyde Essential Oils Locked",
    oilRetentionHi: "क्यूमिनाल्डिहाइड पाचक तेल पूरी तरह सुरक्षित",
    ingredients: "100% Pure Cleaned Cumin Seeds (Cuminum Cyminum)",
    ingredientsHi: "100% साफ किए हुए भुने शुद्ध जीरा बीज",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Airtight glass or stainless steel jar away from moisture",
    storageHi: "सीलन से दूर कांच या स्टील के जार में रखें",
    cookingTip: "Sprinkle raw over boondi raita, buttermilk, or chaat for an instant digestive boost.",
    cookingTipHi: "बूंदी रायते, छाछ या चाट पर ऊपर से कच्चा बुरकें; तुरंत पाचक और ताजगी भरा स्वाद मिलेगा।",
    bestPairing: "Boondi Raita, Dal Tadka, Dahi Vada, Jeera Aloo & Chaat",
    bestPairingHi: "बूंदी रायता, दाल तड़का, दही वड़ा, जीरा आलू व चाट",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", approxServings: 8 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 36, mrp: 44, type: "box", isPopular: true, approxServings: 20 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 68, mrp: 82, type: "pouch", approxServings: 40 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 130, mrp: 160, type: "box", approxServings: 80 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 310, mrp: 375, type: "pack", approxServings: 200 },
    ],
  },

  // 15. CHANA / CHHOLE MASALA
  {
    id: "ck-chana-masala",
    slug: "chana-chhole-masala",
    name: "City King Amritsari Chana Masala",
    hindiName: "चना / छोले मसाला (अमृतसरी स्वाद)",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    categoryLabelHi: "मिश्रित मसाले",
    image: sabjiPng,
    imageIsPlaceholder: false,
    short: "Dark, tangy and robust Punjabi Amritsari style blend with pomegranate and dry mango.",
    shortHi: "अनारदाना और आमचूर से भरपूर असली अमृतसरी भटूरे वाले छोले का मसाला।",
    description:
      "Crafted for authentic dark Amritsari Chhole and spicy desi chana. Infused with dried anardana, amchur, black salt, and roasted cumin to give chickpea gravy its traditional tangy, spiced depth.",
    descriptionHi:
      "काबुली चने और काले चने के लिए खास। सूखे अनारदाने, आमचूर, काला नमक और भुने मसालों का मेल जो छोलों को गहरा काला-भूरा रंग और चटपटा खट्टा स्वाद देता है।",
    sizes: ["5g", "10g", "50g", "100g", "200g"],
    featured: false,
    status: "available",
    tag: "TANGY & BOLD",
    tagHi: "चटपटा अनारदाना",
    tagColor: "bg-amber-800",
    rating: 4.88,
    reviewCount: 920,
    spiceLevel: 3,
    aromaScore: 4,
    oilRetention: "Anardana & Roasted Cumin Complex",
    oilRetentionHi: "अनारदाना व भुना जीरा पाचक अर्क सुरक्षित",
    ingredients: "Pomegranate Seeds (Anardana), Dry Mango, Coriander, Cumin, Black Salt, Black Pepper, Ginger, Cardamom",
    ingredientsHi: "अनारदाना, आमचूर, धनिया, जीरा, काला नमक, काली मिर्च, सोंठ, इलायची",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Airtight container in cool dry place",
    storageHi: "सीलन से दूर एयरटाइट डिब्बे में रखें",
    cookingTip: "Simmer boiled chana with this masala and a touch of tea-decoction for that traditional deep dark Amritsari color.",
    cookingTipHi: "उबले छोलों को इस मसाले और थोड़े चायपत्ती के पानी के साथ पकाएं; असली अमृतसरी डार्क रंग मिलेगा।",
    bestPairing: "Bhature Chana, Desi Chana Tari, Kulcha Chhole & Poori Aloo",
    bestPairingHi: "छोले भटूरे, अमृतसरी कुलचे, पूरी चना व रसेदार काले चने",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 2 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 4 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 34, mrp: 42, type: "box", approxServings: 14 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 65, mrp: 80, type: "pouch", approxServings: 28 },
      { size: "200g Box Pack", sizeHi: "200 ग्राम बॉक्स", weightGrams: 200, price: 125, mrp: 155, type: "box", approxServings: 56 },
    ],
  },

  // 16. CHATPATI CHAAT MASALA
  {
    id: "ck-chaat-masala",
    slug: "chaat-masala",
    name: "City King Chatpata Chaat Masala",
    hindiName: "चटपटा चाट मसाला",
    category: "blended-masalas",
    categoryLabel: "Blended Masalas",
    categoryLabelHi: "मिश्रित मसाले",
    image: paneerPng,
    imageIsPlaceholder: false,
    short: "Zesty, lip-smacking sprinkle for fruit chaat, dahi vada, pakoras and snacks.",
    shortHi: "फ्रूट चाट, दही वड़ा, पकौड़े और शाम के स्नैक्स पर बुरकने वाला चटपटा मसाला।",
    description:
      "A tantalizing sprinkle crafted with rock salt, dried green mango, asafoetida, mint, and toasted cumin. Instant magic on evening snacks, salads, sliced fruits, and street chaat.",
    descriptionHi:
      "सेंधा नमक, आमचूर, हींग, पुदीना और भुने जीरे का लजीज चूर्ण। कटे हुए फलों, सलाद, दही वड़े और कुरकुरे पकौड़ों पर छिड़कते ही मुंह में पानी ला दे।",
    sizes: ["5g", "10g", "50g", "100g"],
    featured: false,
    status: "available",
    tag: "ZESTY SPRINKLE",
    tagHi: "चटपटा छिड़काव",
    tagColor: "bg-yellow-600",
    rating: 4.92,
    reviewCount: 1120,
    spiceLevel: 2,
    aromaScore: 5,
    oilRetention: "Rock Salt & Mint Essential Aromatics",
    oilRetentionHi: "सेंधा नमक व पुदीने की ताजगी सुरक्षित",
    ingredients: "Dry Mango (Amchur), Rock Salt (Sendha Namak), Black Salt, Cumin, Mint, Asafoetida, Ginger, Black Pepper",
    ingredientsHi: "आमचूर, सेंधा नमक, काला नमक, जीरा, पुदीना, हींग, सोंठ, काली मिर्च",
    shelfLife: "12 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 12 महीने",
    storage: "Keep away from moisture in a shaker jar",
    storageHi: "नमी से दूर शेकर जार में रखें",
    cookingTip: "Sprinkle generously on fresh cut guava, apples, roasted paneer or aloo tikki right before serving.",
    cookingTipHi: "परोसने से ठीक पहले अमरुद, सेब, रोस्टेड पनीर या आलू टिक्की पर छिड़कें।",
    bestPairing: "Fruit Chaat, Dahi Vada, French Fries, Pakoras & Golgappa Pani",
    bestPairingHi: "फ्रूट चाट, दही भल्ला, आलू टिक्की, पानी पूरी का पानी",
    variants: [
      { size: "5g Mini Sachet", sizeHi: "5 ग्राम मिनी पाउच", weightGrams: 5, price: 5, mrp: 6, type: "pouch", approxServings: 4 },
      { size: "10g Chota Pack", sizeHi: "10 ग्राम छोटा पैक", weightGrams: 10, price: 10, mrp: 12, type: "pouch", isPopular: true, approxServings: 8 },
      { size: "50g Box Pack", sizeHi: "50 ग्राम बॉक्स", weightGrams: 50, price: 32, mrp: 40, type: "box", approxServings: 25 },
      { size: "100g Fresh Pouch", sizeHi: "100 ग्राम पाउच", weightGrams: 100, price: 60, mrp: 74, type: "pouch", approxServings: 50 },
    ],
  },

  // 17. CTC TEA ROYAL BLACK
  {
    id: "ck-ctc-black",
    slug: "premium-ctc-tea-black",
    name: "City King Premium CTC Tea (Royal Black)",
    hindiName: "प्रीमियम सीटीसी चाय (रॉयल ब्लैक)",
    category: "tea",
    categoryLabel: "Tea & Chai Patti",
    categoryLabelHi: "चाय पत्ती व सीटीसी चाय",
    image: teaBlack,
    imageIsPlaceholder: false,
    short: "Strong, brisk liquor with rich aroma for the energising morning cup.",
    shortHi: "दार्जिलिंग व डुआर्स की तलहटी से कड़क स्वाद, गाढ़ा रंग व स्फूर्तिदायक चाय।",
    description:
      "Crafted from premium Darjeeling and Dooars foothills garden tea leaves. City King Premium CTC Tea delivers brisk liquor, deep amber infusion, and unbeatable morning freshness.",
    descriptionHi:
      "उत्तरी बंगाल के मशहूर चाय बागानों से चुनी गई सीटीसी चाय। दूध के साथ तुरंत गहरा कड़क रंग, माल्टी स्वाद और ताजगी देने वाली कड़क चुस्की।",
    sizes: ["100g", "250g", "500g", "1kg Bulk"],
    featured: true,
    status: "available",
    tag: "KADAK CHAI",
    tagHi: "कड़क चाय",
    tagColor: "bg-stone-900",
    rating: 4.95,
    reviewCount: 2900,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Malty Dooars & Darjeeling Liquor Strength",
    oilRetentionHi: "डुआर्स व दार्जिलिंग का कड़क माल्टी स्वाद सुरक्षित",
    ingredients: "Selected High-Grown CTC Black Tea",
    ingredientsHi: "100% चुनी हुई उच्च कोटि की सीटीसी काली चाय पत्ती",
    shelfLife: "18 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 18 महीने",
    storage: "Store in a moisture-free tin away from strong spices",
    storageHi: "मसालों की गंध से दूर सूखे एयरटाइट डिब्बे में रखें",
    cookingTip: "Boil water with crushed fresh ginger and cardamom, add tea grains and simmer 2 minutes before pouring milk.",
    cookingTipHi: "पानी में कुटी अदरक व इलायची डालकर खौलाएं, चाय पत्ती डालकर 2 मिनट उबालें फिर गाढ़ा दूध मिलाएं।",
    bestPairing: "Morning Ginger Chai, Elaichi Milk Tea, Malai Chai & Evening Samosas",
    bestPairingHi: "सुबह की अदरक वाली चाय, इलायची चाय, मलाई मारके चाय व समोसे",
    variants: [
      { size: "100g Trial Pack", sizeHi: "100 ग्राम ट्रायल पैक", weightGrams: 100, price: 35, mrp: 44, type: "pack", approxServings: 50 },
      { size: "250g Fresh Pouch", sizeHi: "250 ग्राम पाउच", weightGrams: 250, price: 85, mrp: 105, type: "pouch", isPopular: true, approxServings: 125 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 165, mrp: 205, type: "pack", approxServings: 250 },
      { size: "1kg Family Bulk", sizeHi: "1 किग्रा फैमिली बल्क", weightGrams: 1000, price: 320, mrp: 390, type: "bulk", approxServings: 500 },
    ],
  },

  // 18. CTC TEA GOLD
  {
    id: "ck-ctc-green",
    slug: "premium-chai-patti-gold",
    name: "City King Gold Premium Chai Patti",
    hindiName: "गोल्ड प्रीमियम चाय पत्ती",
    category: "tea",
    categoryLabel: "Tea & Chai Patti",
    categoryLabelHi: "चाय पत्ती व सीटीसी चाय",
    image: teaGreen,
    imageIsPlaceholder: false,
    short: "Signature gold blend offering malty taste and perfect milk balance.",
    shortHi: "लंबे पत्तों व सीटीसी दानों का संगम — शाही स्वाद व महक का बेहतरीन संतुलन।",
    description:
      "Selected CTC tea granules providing strong color, aromatic briskness, and full-bodied cup flavor for true Indian chai lovers.",
    descriptionHi:
      "सीटीसी दानों और खुशबूदार पत्तियों का सुनहरा मिश्रण। दूध के साथ बेहतरीन स्वाद और हर चुस्की में ताजगी का अहसास।",
    sizes: ["100g", "250g", "500g", "1kg Bulk"],
    featured: false,
    status: "available",
    tag: "GOLDEN AROMA",
    tagHi: "गोल्डन स्वाद",
    tagColor: "bg-emerald-800",
    rating: 4.88,
    reviewCount: 1100,
    spiceLevel: 1,
    aromaScore: 5,
    oilRetention: "Curated Dual-Grade Blend • Invigorating",
    oilRetentionHi: "दोहरी ग्रेड की पत्तियों का संतुलित माल्टी अर्क",
    ingredients: "Pure Indian CTC and Long Leaf Tea Granules",
    ingredientsHi: "शुद्ध भारतीय सीटीसी व लॉन्ग लीफ चाय दाने",
    shelfLife: "18 Months from Manufacturing Date",
    shelfLifeHi: "निर्माण तिथि से 18 महीने",
    storage: "Keep in a dark, airtight container",
    storageHi: "अंधेरी सूखी जगह पर सीलबंद डिब्बे में रखें",
    cookingTip: "Simmer on low flame with milk for 3-4 minutes to achieve full-bodied creamy texture.",
    cookingTipHi: "दूध मिलाने के बाद धीमी आंच पर 3-4 मिनट खौलाएं ताकि मलाईदार झागदार चाय तैयार हो।",
    bestPairing: "Evening Chai, Cardamom Milk Tea & Biscuits",
    bestPairingHi: "शाम की चाय, बिस्किट, टोस्ट व नमकीन",
    variants: [
      { size: "100g Trial Pack", sizeHi: "100 ग्राम ट्रायल पैक", weightGrams: 100, price: 38, mrp: 48, type: "pack", approxServings: 50 },
      { size: "250g Fresh Pouch", sizeHi: "250 ग्राम पाउच", weightGrams: 250, price: 92, mrp: 115, type: "pouch", isPopular: true, approxServings: 125 },
      { size: "500g Value Pack", sizeHi: "500 ग्राम बचत पैक", weightGrams: 500, price: 180, mrp: 220, type: "pack", approxServings: 250 },
      { size: "1kg Family Bulk", sizeHi: "1 किग्रा फैमिली बल्क", weightGrams: 1000, price: 350, mrp: 420, type: "bulk", approxServings: 500 },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryName(id: CategoryId) {
  return categories.find((c) => c.id === id)?.name ?? "";
}

export type DishPairing = {
  id: string;
  name: string;
  nameHindi: string;
  icon: string;
  tagline: string;
  recommendedSlugs: string[];
  cookingTip: string;
  aromaNote: string;
};

export const dishPairings: DishPairing[] = [
  {
    id: "everyday-sabji",
    name: "Everyday Sabzi & Dry Veg",
    nameHindi: "सब्ज़ी और सूखी तरकारी",
    icon: "🥘",
    tagline: "A balanced, fragrant everyday blend that elevates simple vegetables into a feast.",
    recommendedSlugs: ["sabji-masala", "dhaniya-coriander-powder", "turmeric-haldi-powder"],
    cookingTip: "Add City King Sabji Masala right after frying onions and tomatoes for deep caramelised flavor.",
    aromaNote: "Warm, earthy & gently spiced aroma with toasted coriander.",
  },
  {
    id: "chicken-curry",
    name: "Juicy Chicken & Non-Veg Curry",
    nameHindi: "शाही चिकन और नॉन-वेज करी",
    icon: "🍗",
    tagline: "Restaurant-style rich golden Mughlai gravy and mouth-watering tender meat.",
    recommendedSlugs: ["chicken-masala", "kashmiri-mirch-masala", "turmeric-haldi-powder"],
    cookingTip: "Marinate chicken in curd and 1 tsp Chicken Masala for 20 mins before cooking.",
    aromaNote: "Toasted cardamom, clove and mace aroma.",
  },
  {
    id: "paneer-gravy",
    name: "Shahi & Kadhai Paneer",
    nameHindi: "शाही और कड़ाही पनीर",
    icon: "🍛",
    tagline: "Rich, aromatic restaurant-style velvety paneer gravies cooked at home.",
    recommendedSlugs: ["paneer-masala", "kashmiri-mirch-masala", "turmeric-haldi-powder"],
    cookingTip: "Dissolve a spoonful of Paneer Masala in warm milk or curd before adding to the gravy.",
    aromaNote: "Rich royal aroma with exotic spices and natural warmth.",
  },
  {
    id: "dal-tadka",
    name: "Dal Tadka & Comfort Dals",
    nameHindi: "दाल तड़का और कढ़ी",
    icon: "🍲",
    tagline: "The golden warmth and aromatic cumin tempering essential to every Indian meal.",
    recommendedSlugs: ["turmeric-haldi-powder", "jeera-cumin-powder", "mirchi-chilli-powder"],
    cookingTip: "Temper City King Jeera Powder in hot ghee with garlic and whole dried chillies for the ultimate tadka.",
    aromaNote: "Bright golden colour with robust roasted cumin notes.",
  },
  {
    id: "kadak-chai",
    name: "Morning Kadak CTC Chai",
    nameHindi: "कड़क सुबह की चाय",
    icon: "☕",
    tagline: "The strong, malty and invigorating cup of CTC tea to start every morning.",
    recommendedSlugs: ["premium-ctc-tea-black"],
    cookingTip: "Boil with crushed ginger, cardamom, and fresh milk for a rich Siliguri tea experience.",
    aromaNote: "Rich malty aroma with brisk liquor and bright amber infusion.",
  },
];
