/**
 * Central, verified business data for Sah Food Industries / City King Spices.
 * Preserves authentic business details without fabricated claims.
 */

export const site = {
  company: "Sah Food Industries",
  brand: "City King",
  brandFull: "City King Spices",
  owner: "Mukesh Kumar Sah",
  founderTitle: "Founder & Owner of City King Company",
  founderShort: "Mukesh kr Sah",
  streetAddress: "Ektiasal Eastern Bypass Road",
  city: "Siliguri",
  district: "Dist- (Jalpaiguri) Darjeeling",
  state: "West Bengal",
  pincode: "734001",
  country: "India",
  addressLine: "Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – Pin 734001, West Bengal",
  fullAddress: "Sah Food Industries, Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling – Pin 734001, West Bengal",

  // Phone numbers
  phonePrimary: "+91 98326 53731",
  phoneSecondary: "+91 98004 92817",
  phoneDisplay: "+91 98326 53731 / +91 98004 92817",
  phoneDialPrimary: "+919832653731",
  phoneDialSecondary: "+919800492817",

  // Backward-compatible aliases
  phone: "+91 98326 53731",
  phoneDial: "+919832653731",
  whatsapp: "919832653731",
  whatsappSecondary: "919800492817",

  tagline: "Laye Swad me Bahar",
  taglineHindi: "शुद्ध मसाले यानी सिटी किंग मसाले",

  email: null as string | null,
  fssai: null as string | null,
  gstin: null as string | null,
  mapEmbedUrl: null as string | null,
  yearsInBusiness: null as string | null,

  social: {
    instagram: "https://www.instagram.com/citykingfoodproducts",
    facebook: "https://www.facebook.com/61586866477289/posts/122099686131228882/?substory_index=1416453786936211&rdid=cXSuocpcslRUdCbz#",
    youtube: null as string | null,
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Our Brand", to: "/brand" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function waLink(phoneOrMessage: string, maybeMessage?: string) {
  if (maybeMessage) {
    const cleanPhone = phoneOrMessage.replace(/\D/g, "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(maybeMessage)}`;
  }
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(phoneOrMessage)}`;
}

export const waMessages = {
  general: `Hello Sah Food Industries, I would like to know more about City King Spices and your products.`,
  generalEnquiry: `Hello Sah Food Industries, I would like to enquire about City King Spices products and prices.`,
  business: `Hello Sah Food Industries, I am interested in a business/distributor enquiry for City King Spices.`,
  product: (name: string) =>
    `Hello Sah Food Industries, I am interested in your ${name}. Please share product details.`,
};

export const telLink = `tel:${site.phoneDialPrimary}`;
export const telLink2 = `tel:${site.phoneDialSecondary}`;
