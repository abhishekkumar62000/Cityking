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

export type GalleryCategory = "products" | "packaging" | "brand" | "food" | "moments";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  awaitingBrandPhoto?: boolean;
};

export const galleryCategories: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "moments", label: "City King Moments" },
  { id: "packaging", label: "Official Packaging" },
  { id: "products", label: "Spices & Teas" },
  { id: "brand", label: "Brand Heritage" },
  { id: "food", label: "Culinary Moments" },
];

export const galleryItems: GalleryItem[] = [
  { id: "g-img1", src: img1, alt: "City King Spices – Real Moments from Our Journey", category: "moments" },
  { id: "g-img2", src: img2, alt: "City King Masala – Pure Quality at Every Step", category: "moments" },
  { id: "g-img3", src: img3, alt: "City King Products – Trusted by Families Across North Bihar", category: "moments" },
  { id: "g-img4", src: img4, alt: "City King – Flavours that Bring India to Your Kitchen", category: "moments" },
  { id: "g-img5", src: img5, alt: "City King Chai & Masala – A Taste of Siliguri's Finest", category: "moments" },
  { id: "g1", src: haldi, alt: "City King Turmeric (Haldi) Powder Official Sealed Pouch", category: "packaging" },
  { id: "g2", src: mirchi, alt: "City King Mirchi (Chilli) Powder Official Retail Pouch", category: "packaging" },
  { id: "g3", src: dhaniya, alt: "City King Dhaniya (Coriander) Powder Official Pouch", category: "packaging" },
  { id: "g4", src: jeera, alt: "City King Jeera (Cumin) Powder Official Pouch", category: "packaging" },
  { id: "g5", src: sabji, alt: "City King Sabji Masala Blend Official Pack", category: "packaging" },
  { id: "g6", src: paneer, alt: "City King Kadai Paneer Masala Official Pack", category: "packaging" },
  { id: "g7", src: teaBlack, alt: "City King Premium CTC Tea (Royal Black) Official Pouch", category: "packaging" },
  { id: "g8", src: teaGreen, alt: "City King Gold Premium Chai Patti Official Pack", category: "packaging" },
  { id: "g9", src: teaClassic, alt: "City King Classic Chai Patti Heritage Pack", category: "packaging" },
  { id: "g10", src: hero, alt: "Pure Indian Spices Arranged with Whole Roots and Seeds", category: "brand" },
  { id: "g11", src: texture, alt: "Rich Golden Turmeric Powder in Dramatic Studio Light", category: "brand" },
  { id: "g12", src: whole, alt: "Whole Premium Spices Cleaned for Controlled Milling", category: "brand" },
  { id: "g13", src: kitchen, alt: "Homestyle Tadka Being Prepared with City King Spices", category: "food" },
  { id: "g14", src: food, alt: "Traditional Indian Meal of Paneer Gravy, Dal Tadka and Roti", category: "food" },
];

