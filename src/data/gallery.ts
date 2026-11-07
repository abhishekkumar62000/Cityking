import haldi from "@/assets/Cityking Haldi Powder Masala.png";
import mirchi from "@/assets/Cityking Mirchi Powder Masala.png";
import dhaniya from "@/assets/Cityking Dhaniya Powder Masala.png";
import jeera from "@/assets/Cityking Jeera Powder Masala.png";
import sabji from "@/assets/Cityking Sabji Powder Masala.png";
import paneer from "@/assets/Cityking Kadai Paneer Powder Masala.png";
import teaBlack from "@/assets/Cityking Premium Chai Patti CTC Tea.png";
import teaGreen from "@/assets/Cityking Premium Chai Patti.png";
import teaClassic from "@/assets/Cityking Chai Patti Powder Masala.png";
import hero from "@/assets/hero-spices.jpg";
import food from "@/assets/story-food.jpg";
import kitchen from "@/assets/gallery-kitchen.jpg";
import whole from "@/assets/gallery-whole-spices.jpg";
import texture from "@/assets/texture-spice-dark.jpg";
import img1 from "@/assets/image1.jpeg";
import img2 from "@/assets/image2.jpeg";
import img3 from "@/assets/image3.jpeg";
import img4 from "@/assets/image4.jpeg";
import img5 from "@/assets/image5.jpeg";

export type GalleryCategory = "products" | "packaging" | "brand" | "food" | "moments" | "masale";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  awaitingBrandPhoto?: boolean;
};

export const galleryCategories: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "masale", label: "City King Masale (New)" },
  { id: "packaging", label: "Official Packaging" },
  { id: "moments", label: "City King Moments" },
  { id: "brand", label: "Brand Heritage" },
  { id: "food", label: "Culinary Moments" },
];

export const galleryItems: GalleryItem[] = [
  // New City King Product Range (33 items from new gallery folder)
  { id: "ng-1", src: "/new-gallery/IMG-20261105-WA0000.jpg", alt: "City King Chicken Masala Powder (₹5/- Pouch with Natural Ingredients)", category: "masale" },
  { id: "ng-2", src: "/new-gallery/IMG-20261105-WA0001.jpg", alt: "City King Dhania Powder (₹10/- Shuddh Masale Pouch)", category: "masale" },
  { id: "ng-3", src: "/new-gallery/IMG-20261105-WA0002.jpg", alt: "Mukesh Masale Dhania Powder (धनिया पाउडर 500g Net Wt)", category: "masale" },
  { id: "ng-4", src: "/new-gallery/IMG-20261105-WA0003.jpg", alt: "City King Haldi Powder (Premium Grade Turmeric Shuddh Masala Pouch)", category: "masale" },
  { id: "ng-5", src: "/new-gallery/IMG-20261105-WA0004.jpg", alt: "City King Meat Mix Masala Powder (₹5/- Natural Ingredients Pouch)", category: "masale" },
  { id: "ng-6", src: "/new-gallery/IMG-20261105-WA0005.jpg", alt: "Mukesh Masale Turmeric Powder (हल्दी पाउडर 500g Net Wt)", category: "masale" },
  { id: "ng-7", src: "/new-gallery/IMG-20261105-WA0006.jpg", alt: "City King Chicken Masala (Authentic Indian Masala ₹10/- Pack)", category: "masale" },
  { id: "ng-8", src: "/new-gallery/IMG-20261105-WA0007.jpg", alt: "City King Fish Curry Masala (Rich Aroma & Flavour ₹10/- Pack)", category: "masale" },
  { id: "ng-9", src: "/new-gallery/IMG-20261105-WA0008.jpg", alt: "City King Garam Masala (Whole Spices Blend ₹10/- Pack)", category: "masale" },
  { id: "ng-10", src: "/new-gallery/IMG-20261105-WA0009.jpg", alt: "City King Mutton Masala (Authentic Indian Masala ₹10/- Pack)", category: "masale" },
  { id: "ng-11", src: "/new-gallery/IMG-20261105-WA0010.jpg", alt: "City King Sabji Masala (50g Box Packaging)", category: "masale" },
  { id: "ng-12", src: "/new-gallery/IMG-20261105-WA0011.jpg", alt: "City King Paneer Masala (Authentic Indian Masala ₹10/- Pack)", category: "masale" },
  { id: "ng-13", src: "/new-gallery/IMG-20261105-WA0012.jpg", alt: "City King Chilli Mirch Powder (200g Box Packaging)", category: "masale" },
  { id: "ng-14", src: "/new-gallery/IMG-20261105-WA0013.jpg", alt: "City King Kitchen King Masala (Authentic Indian Masala ₹10/- Pack)", category: "masale" },
  { id: "ng-15", src: "/new-gallery/IMG-20261105-WA0014.jpg", alt: "City King Kashmiri Mirch Powder (Rich Natural Colour ₹10/- Pack)", category: "masale" },
  { id: "ng-16", src: "/new-gallery/IMG-20261105-WA0015.jpg", alt: "City King Turmeric Haldi Powder (200g Box Packaging)", category: "masale" },
  { id: "ng-17", src: "/new-gallery/IMG-20261105-WA0016.jpg", alt: "City King Coriander Dhania Powder (200g Box Packaging)", category: "masale" },
  { id: "ng-18", src: "/new-gallery/IMG-20261105-WA0017.jpg", alt: "City King Biryani Masala (Authentic Indian Masala ₹10/- Pack)", category: "masale" },
  { id: "ng-19", src: "/new-gallery/IMG-20261105-WA0018.jpg", alt: "City King Premium Quality Whole Spices Pouch", category: "masale" },
  { id: "ng-20", src: "/new-gallery/IMG-20261105-WA0019.jpg", alt: "City King Sabji Masala (Right Balance of Aroma Flavours Pouch)", category: "masale" },
  { id: "ng-21", src: "/new-gallery/IMG-20261105-WA0020.jpg", alt: "Mukesh Masale Dhania Powder (500g Classic Brown Pack)", category: "masale" },
  { id: "ng-22", src: "/new-gallery/IMG-20261105-WA0021.jpg", alt: "City King Jeera Powder (Sahi Swad Sahi Andaz Pouch)", category: "masale" },
  { id: "ng-23", src: "/new-gallery/IMG-20261105-WA0022.jpg", alt: "City King Jeera Powder (₹10/- Shuddh Masale Pouch)", category: "masale" },
  { id: "ng-24", src: "/new-gallery/IMG-20261105-WA0023.jpg", alt: "City King Haldi Powder (100% Shuddh Turmeric Pouch)", category: "masale" },
  { id: "ng-25", src: "/new-gallery/IMG-20261105-WA0024.jpg", alt: "City King Turmeric Powder (Sterilized Healthy Food ₹10/- Pouch)", category: "masale" },
  { id: "ng-26", src: "/new-gallery/IMG-20261105-WA0025.jpg", alt: "City King Garam Masala (No Preservatives No Added Colour ₹5/-)", category: "masale" },
  { id: "ng-27", src: "/new-gallery/IMG-20261105-WA0026.jpg", alt: "City King Dhania Powder (100% Pure Coriander Pouch)", category: "masale" },
  { id: "ng-28", src: "/new-gallery/IMG-20261105-WA0027.jpg", alt: "City King Dhania Powder (Premium Grade Coriander Pouch)", category: "masale" },
  { id: "ng-29", src: "/new-gallery/IMG-20261105-WA0028.jpg", alt: "City King Mirchi Powder (Premium Grade Red Chilli Pouch)", category: "masale" },
  { id: "ng-30", src: "/new-gallery/IMG-20261105-WA0029.jpg", alt: "Mukesh Masale Chilli Powder (मिर्च पाउडर 500g Net Wt)", category: "masale" },
  { id: "ng-31", src: "/new-gallery/IMG-20261105-WA0030.jpg", alt: "City King Mirchi Powder (100% Pure Chilli Pouch)", category: "masale" },
  { id: "ng-32", src: "/new-gallery/IMG-20261105-WA0031.jpg", alt: "City King Chilli Powder (₹10/- Shuddh Masale Pouch)", category: "masale" },
  { id: "ng-33", src: "/new-gallery/IMG-20261106-WA0004.jpg", alt: "City King Chicken Masala (Official Quality Certified ₹5/- Pouch)", category: "masale" },

  // City King Moments (Company Journey)
  { id: "g-img1", src: img1, alt: "City King Spices – Real Moments from Our Journey", category: "moments" },
  { id: "g-img2", src: img2, alt: "City King Masala – Pure Quality at Every Step", category: "moments" },
  { id: "g-img3", src: img3, alt: "City King Products – Trusted by Families Across North Bihar", category: "moments" },
  { id: "g-img4", src: img4, alt: "City King – Flavours that Bring India to Your Kitchen", category: "moments" },
  { id: "g-img5", src: img5, alt: "City King Chai & Masala – A Taste of Siliguri's Finest", category: "moments" },

  // Packaging & Heritage Pouch Renders
  { id: "g1", src: haldi, alt: "City King Turmeric (Haldi) Powder Official Sealed Pouch", category: "packaging" },
  { id: "g2", src: mirchi, alt: "City King Mirchi (Chilli) Powder Official Retail Pouch", category: "packaging" },
  { id: "g3", src: dhaniya, alt: "City King Dhaniya (Coriander) Powder Official Pouch", category: "packaging" },
  { id: "g4", src: jeera, alt: "City King Jeera (Cumin) Powder Official Pouch", category: "packaging" },
  { id: "g5", src: sabji, alt: "City King Sabji Masala Blend Official Pack", category: "packaging" },
  { id: "g6", src: paneer, alt: "City King Kadai Paneer Masala Official Pack", category: "packaging" },
  { id: "g7", src: teaBlack, alt: "City King Premium CTC Tea (Royal Black) Official Pouch", category: "packaging" },
  { id: "g8", src: teaGreen, alt: "City King Gold Premium Chai Patti Official Pack", category: "packaging" },
  { id: "g9", src: teaClassic, alt: "City King Classic Chai Patti Heritage Pack", category: "packaging" },

  // Brand & Food
  { id: "g10", src: hero, alt: "Pure Indian Spices Arranged with Whole Roots and Seeds", category: "brand" },
  { id: "g11", src: texture, alt: "Rich Golden Turmeric Powder in Dramatic Studio Light", category: "brand" },
  { id: "g12", src: whole, alt: "Whole Premium Spices Cleaned for Controlled Milling", category: "brand" },
  { id: "g13", src: kitchen, alt: "Homestyle Tadka Being Prepared with City King Spices", category: "food" },
  { id: "g14", src: food, alt: "Traditional Indian Meal of Paneer Gravy, Dal Tadka and Roti", category: "food" },
];
