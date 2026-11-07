import fs from "fs";

const baseUrl = "https://citykingspices.in";
const today = new Date().toISOString().split("T")[0];

const newGalleryImages = [
  { file: "IMG-20261105-WA0000.jpg", title: "City King Chicken Masala Powder (Rs 5 Pouch with Natural Ingredients)", caption: "City King Chicken Masala Powder pouch packaging by Sah Food Industries, Siliguri." },
  { file: "IMG-20261105-WA0001.jpg", title: "City King Dhania Powder (Rs 10 Shuddh Masale Pouch)", caption: "City King Coriander Dhania powder retail pouch by Sah Food Industries." },
  { file: "IMG-20261105-WA0002.jpg", title: "Mukesh Masale Dhania Powder (Dhaniya Powder 500g Net Wt)", caption: "Mukesh Masale Coriander Dhania powder 500g pack by Sah Food Industries Siliguri." },
  { file: "IMG-20261105-WA0003.jpg", title: "City King Haldi Powder (Premium Grade Turmeric Shuddh Masala Pouch)", caption: "City King Turmeric Haldi powder pouch packaging by Sah Food Industries." },
  { file: "IMG-20261105-WA0004.jpg", title: "City King Meat Mix Masala Powder (Rs 5 Natural Ingredients Pouch)", caption: "City King Meat Mix Masala powder Rs 5 retail pouch." },
  { file: "IMG-20261105-WA0005.jpg", title: "Mukesh Masale Turmeric Powder (Haldi Powder 500g Net Wt)", caption: "Mukesh Masale Turmeric Haldi powder 500g bulk pack." },
  { file: "IMG-20261105-WA0006.jpg", title: "City King Chicken Masala (Authentic Indian Masala Rs 10 Pack)", caption: "City King Chicken Masala Rs 10 pack by Sah Food Industries Siliguri." },
  { file: "IMG-20261105-WA0007.jpg", title: "City King Fish Curry Masala (Rich Aroma and Flavour Rs 10 Pack)", caption: "City King Fish Curry Masala pouch pack with natural aromatic spices." },
  { file: "IMG-20261105-WA0008.jpg", title: "City King Garam Masala (Whole Spices Blend Rs 10 Pack)", caption: "City King Garam Masala whole spices blend Rs 10 retail pouch." },
  { file: "IMG-20261105-WA0009.jpg", title: "City King Mutton Masala (Authentic Indian Masala Rs 10 Pack)", caption: "City King Mutton Masala Rs 10 pack manufactured in Siliguri." },
  { file: "IMG-20261105-WA0010.jpg", title: "City King Sabji Masala (50g Box Packaging)", caption: "City King Sabji Masala 50g carton box packaging by Sah Food Industries." },
  { file: "IMG-20261105-WA0011.jpg", title: "City King Paneer Masala (Authentic Indian Masala Rs 10 Pack)", caption: "City King Paneer Masala Rs 10 retail pouch packaging." },
  { file: "IMG-20261105-WA0012.jpg", title: "City King Chilli Mirch Powder (200g Box Packaging)", caption: "City King Red Chilli Mirch powder 200g box packaging." },
  { file: "IMG-20261105-WA0013.jpg", title: "City King Kitchen King Masala (Authentic Indian Masala Rs 10 Pack)", caption: "City King Kitchen King Masala Rs 10 all-purpose curry blend." },
  { file: "IMG-20261105-WA0014.jpg", title: "City King Kashmiri Mirch Powder (Rich Natural Colour Rs 10 Pack)", caption: "City King Kashmiri Mirch powder Rs 10 pack for natural red curry color." },
  { file: "IMG-20261105-WA0015.jpg", title: "City King Turmeric Haldi Powder (200g Box Packaging)", caption: "City King Turmeric Haldi powder 200g carton packaging." },
  { file: "IMG-20261105-WA0016.jpg", title: "City King Coriander Dhania Powder (200g Box Packaging)", caption: "City King Coriander Dhania powder 200g box packaging." },
  { file: "IMG-20261105-WA0017.jpg", title: "City King Biryani Masala (Authentic Indian Masala Rs 10 Pack)", caption: "City King Biryani Masala Rs 10 pouch packaging for fragrant dum biryani." },
  { file: "IMG-20261105-WA0018.jpg", title: "City King Premium Quality Whole Spices Pouch", caption: "City King whole spices sealed pouch pack by Sah Food Industries." },
  { file: "IMG-20261105-WA0019.jpg", title: "City King Sabji Masala (Right Balance of Aroma Flavours Pouch)", caption: "City King Sabji Masala retail pack for daily vegetable curries." },
  { file: "IMG-20261105-WA0020.jpg", title: "Mukesh Masale Dhania Powder (500g Classic Brown Pack)", caption: "Mukesh Masale Dhania powder 500g traditional wholesale packaging." },
  { file: "IMG-20261105-WA0021.jpg", title: "City King Jeera Powder (Sahi Swad Sahi Andaz Pouch)", caption: "City King Jeera Cumin powder pouch packaging with rich cumin aroma." },
  { file: "IMG-20261105-WA0022.jpg", title: "City King Jeera Powder (Rs 10 Shuddh Masale Pouch)", caption: "City King Jeera powder Rs 10 pouch packaging." },
  { file: "IMG-20261105-WA0023.jpg", title: "City King Haldi Powder (100% Shuddh Turmeric Pouch)", caption: "City King Haldi Turmeric powder pouch packaging." },
  { file: "IMG-20261105-WA0024.jpg", title: "City King Turmeric Powder (Sterilized Healthy Food Rs 10 Pouch)", caption: "City King Turmeric powder Rs 10 sterilized pouch." },
  { file: "IMG-20261105-WA0025.jpg", title: "City King Garam Masala (No Preservatives No Added Colour Rs 5)", caption: "City King Garam Masala Rs 5 single-use pouch." },
  { file: "IMG-20261105-WA0026.jpg", title: "City King Dhania Powder (100% Pure Coriander Pouch)", caption: "City King Coriander powder clean ground pouch." },
  { file: "IMG-20261105-WA0027.jpg", title: "City King Dhania Powder (Premium Grade Coriander Pouch)", caption: "City King Coriander Dhania powder premium pouch packaging." },
  { file: "IMG-20261105-WA0028.jpg", title: "City King Mirchi Powder (Premium Grade Red Chilli Pouch)", caption: "City King Red Chilli Mirchi powder premium pouch." },
  { file: "IMG-20261105-WA0029.jpg", title: "Mukesh Masale Chilli Powder (Mirch Powder 500g Net Wt)", caption: "Mukesh Masale Red Chilli Mirch powder 500g wholesale pack." },
  { file: "IMG-20261105-WA0030.jpg", title: "City King Mirchi Powder (100% Pure Chilli Pouch)", caption: "City King Red Chilli Mirch powder pure pouch." },
  { file: "IMG-20261105-WA0031.jpg", title: "City King Chilli Powder (Rs 10 Shuddh Masale Pouch)", caption: "City King Red Chilli powder Rs 10 retail pouch." },
  { file: "IMG-20261106-WA0004.jpg", title: "City King Chicken Masala (Official Quality Certified Rs 5 Pouch)", caption: "City King Chicken Masala Rs 5 certified pouch pack." },
];

const packagingImages = [
  { file: "Cityking%20Haldi%20Powder%20Masala.png", title: "City King Turmeric Haldi Powder Sealed Pouch", caption: "Official sealed pouch render of City King Turmeric Haldi Powder." },
  { file: "Cityking%20Mirchi%20Powder%20Masala.png", title: "City King Red Chilli Mirchi Powder Retail Pouch", caption: "Official retail pouch render of City King Red Chilli Mirchi Powder." },
  { file: "Cityking%20Dhaniya%20Powder%20Masala.png", title: "City King Coriander Dhaniya Powder Official Pouch", caption: "Official pouch render of City King Coriander Dhaniya Powder." },
  { file: "Cityking%20Jeera%20Powder%20Masala.png", title: "City King Cumin Jeera Powder Official Pouch", caption: "Official pouch render of City King Cumin Jeera Powder." },
  { file: "Cityking%20Sabji%20Powder%20Masala.png", title: "City King Sabji Masala Blend Official Pack", caption: "Official pouch render of City King Sabji Masala everyday blend." },
  { file: "Cityking%20Premium%20Chai%20Patti%20CTC%20Tea.png", title: "City King Premium CTC Tea Royal Black Official Pouch", caption: "Official pouch render of City King CTC Tea direct from North Bengal tea gardens." },
  { file: "Cityking%20Premium%20Chai%20Patti.png", title: "City King Gold Premium Chai Patti Official Pack", caption: "Official packaging render of City King Gold Premium Chai Patti." },
];

const momentImages = [
  { file: "image1.jpeg", title: "City King Spices Real Moments From Our Journey", caption: "Authentic company journey moments of Sah Food Industries Siliguri." },
  { file: "image2.jpeg", title: "City King Masala Pure Quality at Every Step", caption: "Quality inspection and processing at Sah Food Industries." },
  { file: "image3.jpeg", title: "City King Products Trusted Across North Bengal and Bihar", caption: "Families and retailers trusting City King Spices." },
  { file: "image4.jpeg", title: "City King Flavours That Bring India to Your Kitchen", caption: "Cooking authentic Indian cuisine with City King Masale." },
  { file: "image5.jpeg", title: "City King Chai and Masala Siliguri Finest Selection", caption: "Rich Siliguri CTC tea and pure ground spices." },
];

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/City%20King%20Founder.png</image:loc>
      <image:title>Mukesh Kumar Sah — Founder and Owner of City King Masala Company</image:title>
      <image:caption>Mukesh Kumar Sah, Founder and Owner of City King Spices (Sah Food Industries), Ektiasal Eastern Bypass Road, Siliguri, Dist- (Jalpaiguri) Darjeeling, West Bengal.</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/Cityking%20Logo.png</image:loc>
      <image:title>City King Spices Official Brand Logo — Sah Food Industries Siliguri</image:title>
      <image:caption>City King Spices - Laye Swad me Bahar. Pure cold-ground spices and CTC tea manufacturer in Siliguri.</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/hero-spices.jpg</image:loc>
      <image:title>Pure Indian Spices and Masale by City King</image:title>
      <image:caption>Whole spices and cold-milled spice powders by Sah Food Industries.</image:caption>
    </image:image>
  </url>

  <!-- Products Page -->
  <url>
    <loc>${baseUrl}/products</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
`;

for (const pkg of packagingImages) {
  xml += `    <image:image>
      <image:loc>${baseUrl}/${pkg.file}</image:loc>
      <image:title>${escapeXml(pkg.title)}</image:title>
      <image:caption>${escapeXml(pkg.caption)}</image:caption>
    </image:image>\n`;
}

xml += `  </url>

  <!-- Gallery Page with ALL 33+ Product Packaging Photos, Packaging Renders and Journey Moments -->
  <url>
    <loc>${baseUrl}/gallery</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
    <image:image>
      <image:loc>${baseUrl}/City%20King%20Founder.png</image:loc>
      <image:title>Mukesh Kumar Sah — Founder of City King Masala Company</image:title>
      <image:caption>Founder Mukesh Kumar Sah at City King Masala Company corporate headquarters in Siliguri.</image:caption>
    </image:image>
`;

for (const img of newGalleryImages) {
  xml += `    <image:image>
      <image:loc>${baseUrl}/new-gallery/${img.file}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>\n`;
}

for (const pkg of packagingImages) {
  xml += `    <image:image>
      <image:loc>${baseUrl}/${pkg.file}</image:loc>
      <image:title>${escapeXml(pkg.title)}</image:title>
      <image:caption>${escapeXml(pkg.caption)}</image:caption>
    </image:image>\n`;
}

for (const mmt of momentImages) {
  xml += `    <image:image>
      <image:loc>${baseUrl}/${mmt.file}</image:loc>
      <image:title>${escapeXml(mmt.title)}</image:title>
      <image:caption>${escapeXml(mmt.caption)}</image:caption>
    </image:image>\n`;
}

xml += `  </url>

  <!-- About Page -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>${baseUrl}/City%20King%20Founder.png</image:loc>
      <image:title>Mukesh Kumar Sah — Founder and Owner of Sah Food Industries</image:title>
      <image:caption>Mukesh Kumar Sah, founder of Sah Food Industries and City King Spices, dedicated to 100% pure unadulterated spices in Siliguri.</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/Cityking%20Logo.png</image:loc>
      <image:title>City King Spices Brand Heritage Logo</image:title>
      <image:caption>The royal seal of City King Spices representing purity, flavor and quality.</image:caption>
    </image:image>
  </url>

  <!-- Contact Us & Founder Message -->
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
    <image:image>
      <image:loc>${baseUrl}/City%20King%20Founder.png</image:loc>
      <image:title>Mukesh Kumar Sah — Founder and Owner, City King Masala Company</image:title>
      <image:caption>Official portrait and personal message to customers by Founder Mukesh Kumar Sah, Sah Food Industries Siliguri.</image:caption>
    </image:image>
  </url>

  <!-- Service Network & Dealership -->
  <url>
    <loc>${baseUrl}/network</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Distributor Program -->
  <url>
    <loc>${baseUrl}/distributor</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Brand Heritage -->
  <url>
    <loc>${baseUrl}/brand</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
    <image:image>
      <image:loc>${baseUrl}/Cityking%20Logo.png</image:loc>
      <image:title>City King Spices Royal Emblem</image:title>
      <image:caption>City King Masala Company brand emblem and identity.</image:caption>
    </image:image>
  </url>

</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml, "utf8");
console.log("Successfully generated public/sitemap.xml with full image sitemap extensions!");
