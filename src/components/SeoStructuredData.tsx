import { site } from "@/data/site";
import { products } from "@/data/products";
import { faqs } from "@/components/FaqSection";
import { serviceDistricts } from "@/data/network";
import { galleryItems } from "@/data/gallery";

export function SeoStructuredData() {
  const servedDistricts = serviceDistricts.map((d) => `${d.name}, ${d.state}`);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://citykingspices.in/#organization",
    name: site.company,
    alternateName: [
      "City King",
      "City King Masala",
      "City King Spices",
      "City King Company",
      "cityking.in",
      "citykingspices.in",
      "Sah Food Industries",
      "Sah Food Industries Siliguri",
      "Mukesh Masale",
      "सिटी किंग मसाले",
      "सिटी किंग मसाला कंपनी",
      "साह फूड इंडस्ट्रीज सिलीगुड़ी",
      "मुकेश कुमार साह सिटी किंग",
    ],
    url: "https://citykingspices.in",
    logo: "https://citykingspices.in/Cityking%20Logo.png",
    image: [
      "https://citykingspices.in/City%20King%20Founder.png",
      "https://citykingspices.in/hero-spices.jpg",
      "https://citykingspices.in/Cityking%20Logo.png",
    ],
    description:
      "Sah Food Industries (City King Spices) is an authentic manufacturer, miller, and distributor of 100% pure cold-ground spices, everyday blended masalas, and premium CTC tea based at Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling, West Bengal. Founded by Mukesh Kumar Sah.",
    telephone: [site.phonePrimary, site.phoneSecondary],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phonePrimary,
        contactType: "customer service",
        areaServed: ["IN"],
        availableLanguage: ["Hindi", "English", "Bengali", "Bhojpuri", "Maithili"],
      },
      {
        "@type": "ContactPoint",
        telephone: site.phoneSecondary,
        contactType: "sales & dealership",
        areaServed: ["IN"],
        availableLanguage: ["Hindi", "English", "Bengali", "Bhojpuri", "Maithili"],
      },
    ],
    founder: {
      "@type": "Person",
      "@id": "https://citykingspices.in/#founder",
      name: site.owner,
      alternateName: ["Mukesh kr Sah", "मुकेश कुमार साह", "Mukesh Sah City King"],
      jobTitle: "Founder & Owner of City King Masala Company",
      image: "https://citykingspices.in/City%20King%20Founder.png",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.district,
      postalCode: site.pincode,
      addressCountry: "IN",
    },
    areaServed: servedDistricts,
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
    slogan: `${site.tagline} — ${site.taglineHindi}`,
    knowsAbout: [
      "Pure Spices Manufacturing",
      "Turmeric Haldi Powder",
      "Chilli Mirchi Powder",
      "Coriander Dhaniya Powder",
      "Cumin Jeera Powder",
      "Sabji Masala",
      "Meat Masala",
      "Chicken Masala",
      "Fish Curry Masala",
      "Garam Masala",
      "Kitchen King Masala",
      "Biryani Masala",
      "CTC Tea Chai Patti",
      "North Bengal Food Processing",
      "Spices Dealership Distributorship",
    ],
  };

  const founderPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://citykingspices.in/#founder",
    name: site.owner,
    alternateName: ["Mukesh kr Sah", "मुकेश कुमार साह", "Mukesh Sah Siliguri"],
    jobTitle: "Founder & Owner of City King Masala Company",
    image: "https://citykingspices.in/City%20King%20Founder.png",
    worksFor: {
      "@type": "Organization",
      "@id": "https://citykingspices.in/#organization",
      name: site.company,
      url: "https://citykingspices.in",
    },
    url: "https://citykingspices.in/contact",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.district,
      postalCode: site.pincode,
      addressCountry: "IN",
    },
    description:
      "Mukesh Kumar Sah is the Founder & Owner of City King Masala Company (Sah Food Industries) in Siliguri, Dist- (Jalpaiguri) Darjeeling, West Bengal. Dedicated to authentic, cold-ground pure spices and CTC tea.",
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "WholesaleStore"],
    "@id": "https://citykingspices.in/#localbusiness",
    name: "Sah Food Industries — City King Masala Company",
    alternateName: [
      "City King Spices Siliguri",
      "City King Masala",
      "Sah Food Industries",
      "cityking.in",
      "citykingspices.in",
      "Mukesh Masale Siliguri",
    ],
    image: [
      "https://citykingspices.in/hero-spices.jpg",
      "https://citykingspices.in/City%20King%20Founder.png",
      "https://citykingspices.in/Cityking%20Logo.png",
    ],
    telephone: [site.phonePrimary, site.phoneSecondary],
    priceRange: "₹5 - ₹500",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, PhonePe, Google Pay, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.district,
      postalCode: site.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.7271",
      longitude: "88.3953",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    areaServed: servedDistricts,
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://citykingspices.in/#website",
    name: "City King Spices",
    alternateName: [
      "cityking.in",
      "citykingspices.in",
      "City King Masala",
      "Sah Food Industries Siliguri",
      "सिटी किंग मसाले",
    ],
    url: "https://citykingspices.in",
    inLanguage: ["en-IN", "hi-IN"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://citykingspices.in/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "City King Spices & Masala Packaging Gallery",
    description:
      "Official high-resolution photo gallery of City King spices pouches, packaging boxes, whole spices, and company moments by Sah Food Industries, Siliguri.",
    url: "https://citykingspices.in/gallery",
    author: {
      "@type": "Organization",
      name: site.company,
    },
    image: galleryItems.map((item, index) => {
      const fullUrl = item.src.startsWith("http")
        ? item.src
        : `https://citykingspices.in${item.src.startsWith("/") ? "" : "/"}${item.src}`;
      return {
        "@type": "ImageObject",
        position: index + 1,
        contentUrl: fullUrl,
        name: item.alt,
        caption: item.alt,
        description: `${item.alt} — Manufactured by Sah Food Industries (City King Spices), Ektiasal Eastern Bypass Road, Siliguri, West Bengal.`,
      };
    }),
  };

  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "City King Spices & Blended Masala Catalog",
    itemListElement: products.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: p.name,
        alternateName: p.hindiName,
        description: p.description,
        brand: {
          "@type": "Brand",
          name: "City King",
        },
        manufacturer: {
          "@type": "Organization",
          name: site.company,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: "https://citykingspices.in/products",
        },
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://citykingspices.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products & Spices Catalog",
        item: "https://citykingspices.in/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Product & Packaging Gallery",
        item: "https://citykingspices.in/gallery",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About Sah Food Industries",
        item: "https://citykingspices.in/about",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact Us & Founder's Message",
        item: "https://citykingspices.in/contact",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
