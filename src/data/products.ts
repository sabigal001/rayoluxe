import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // Jewelry
  {
    id: 'jewel-1',
    name: 'Aurelia 18K Gold Pearl Pendant',
    category: 'jewelry',
    categoryLabel: 'Fine Jewelry',
    price: 35000,
    oldPrice: 45000,
    discount: '22% OFF',
    rating: 5,
    reviews: 28,
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d727b750?auto=format&fit=crop&w=800&q=80',
    description: 'Delicate 18k gold chain with a lustrous freshwater pearl drop. Non-tarnish, water-resistant, and hypoallergenic.'
  },
  {
    id: 'jewel-2',
    name: 'Elysian Minimalist Ring Trio',
    category: 'jewelry',
    categoryLabel: 'Fine Jewelry',
    price: 28000,
    oldPrice: 35000,
    discount: '20% OFF',
    rating: 4.9,
    reviews: 19,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    description: 'Set of 3 stackable textured 18k gold-plated bands. Designed for effortless everyday styling.'
  },
  {
    id: 'jewel-3',
    name: 'Soleste Crystal Droplet Huggies',
    category: 'jewelry',
    categoryLabel: 'Fine Jewelry',
    price: 22000,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 14,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    description: 'Sparkling cubic zirconia crystal drop huggie earrings crafted with a secure, comfortable latch.'
  },

  // Perfumes
  {
    id: 'perf-matelot',
    name: 'Matelot Eau de Parfum (with Keepsake Pouch)',
    category: 'perfumes',
    categoryLabel: 'French Perfumes',
    price: 35000,
    oldPrice: 42000,
    discount: '17% OFF',
    rating: 5,
    reviews: 38,
    image: '/assets/images/product1.png',
    description: 'Crisp coastal floral French Eau de Parfum with amber and citrus notes. Comes with the signature nautical striped drawstring keepsake pouch.'
  },
  {
    id: 'perf-1',
    name: 'Jasmin D\'Or Eau de Parfum (50ml)',
    category: 'perfumes',
    categoryLabel: 'French Perfumes',
    price: 48000,
    oldPrice: 58000,
    discount: '17% OFF',
    rating: 5,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    description: 'A captivating blend of royal French jasmine, warm golden amber, and soft velvety bourbon vanilla.'
  },
  {
    id: 'perf-2',
    name: 'Velvet Santal & Rose Mist',
    category: 'perfumes',
    categoryLabel: 'French Perfumes',
    price: 38000,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 31,
    image: 'https://images.unsplash.com/photo-1594035910387-fea081ae7aeb?auto=format&fit=crop&w=800&q=80',
    description: 'Creamy sandalwood layered with dewy Damascus rose petals for all-day captivating silage.'
  },
  {
    id: 'perf-3',
    name: 'Golden Oud Royal Concentrated Perfume Oil (12ml)',
    category: 'perfumes',
    categoryLabel: 'Luxury Perfume Oils',
    price: 26000,
    oldPrice: 32000,
    discount: '18% OFF',
    rating: 5,
    reviews: 54,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    description: 'Pure alcohol-free concentrated oil perfume blending Cambodian agarwood, Madagascar vanilla, and warm saffron for 24hr+ longevity.'
  },
  {
    id: 'perf-4',
    name: 'Tahitian Vanilla & White Musk Perfume Oil Roll-On',
    category: 'perfumes',
    categoryLabel: 'Luxury Perfume Oils',
    price: 18500,
    oldPrice: 24000,
    discount: '23% OFF',
    rating: 4.9,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80',
    description: 'Silky rollerball perfume elixir featuring powdery Egyptian white musk, warm coconut nectar, and caramelized Tahitian vanilla.'
  },

  // Lip Gloss
  {
    id: 'lip-1',
    name: 'Aura Glow Plumping Lip Gloss - Rose Nude',
    category: 'lipgloss',
    categoryLabel: 'Lip Care',
    price: 12000,
    oldPrice: 16000,
    discount: '25% OFF',
    rating: 5,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80',
    description: 'Glass-finish cushion gloss infused with hyaluronic acid, organic jojoba oil, and micro-fine shimmer.'
  },
  {
    id: 'lip-2',
    name: 'Glaze & Tint Botanical Lip Oil',
    category: 'lipgloss',
    categoryLabel: 'Lip Care',
    price: 9500,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 23,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    description: 'Deeply conditioning non-sticky lip elixir delivering intense moisture and a natural radiant tint.'
  },

  // Hijabs & Hair Scarves
  {
    id: 'hijab-1',
    name: 'Luxe Modal Silk Scarf - Champagne Rose',
    category: 'hijabs',
    categoryLabel: 'Bespoke Hijabs',
    price: 15000,
    oldPrice: 19000,
    discount: '21% OFF',
    rating: 5,
    reviews: 47,
    image: 'https://images.unsplash.com/photo-1590003551476-1a3e3aff1a57?auto=format&fit=crop&w=800&q=80',
    description: 'Featherlight, breathable modal silk blend. Drapes effortlessly without slipping, wrinkle resistant.'
  },
  {
    id: 'hijab-2',
    name: 'Premium Textured Chiffon - Soft Mocha',
    category: 'hijabs',
    categoryLabel: 'Bespoke Hijabs',
    price: 12000,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 35,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80',
    description: 'Flowy, non-opaque textured chiffon scarf in a flattering neutral mocha shade for refined styling.'
  },
  {
    id: 'hijab-3',
    name: 'Mulberry Silk Satin Hair Scarf - Emerald & Gold Flora',
    category: 'hijabs',
    categoryLabel: 'Luxury Hair Scarves',
    price: 16500,
    oldPrice: 22000,
    discount: '25% OFF',
    rating: 5,
    reviews: 29,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
    description: '100% pure mulberry silk square hair scarf. Protects hair follicles from friction, locks in natural moisture, and styles effortlessly.'
  },
  {
    id: 'hijab-4',
    name: 'Monogram Silk Jacquard Ribbon Hair Wrap',
    category: 'hijabs',
    categoryLabel: 'Luxury Hair Scarves',
    price: 13500,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    description: 'Versatile glossy twill ribbon scarf for chic ponytails, hair buns, neck ties, or luxury handbag adornment.'
  },

  // Skincare (CeraVe & Botanicals)
  {
    id: 'skin-1',
    name: 'Aura Radiance Rosehip & C Face Oil',
    category: 'skincare',
    categoryLabel: 'Botanical Skincare',
    price: 25000,
    oldPrice: 32000,
    discount: '22% OFF',
    rating: 5,
    reviews: 39,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    description: 'Cold-pressed organic rosehip seed oil infused with active Vitamin C for a luminous, healthy complexion.'
  },
  {
    id: 'skin-2',
    name: 'Botanical Rosewater Hydrating Mist',
    category: 'skincare',
    categoryLabel: 'Botanical Skincare',
    price: 14000,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 27,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    description: '100% pure organic Bulgarian rosewater mist that instantly calms redness, balances pH, and refreshes skin.'
  },
  {
    id: 'skin-3',
    name: 'CeraVe Hydrating Facial Cleanser (473ml)',
    category: 'skincare',
    categoryLabel: 'Dermatologist Skincare',
    price: 22000,
    oldPrice: 27000,
    discount: '18% OFF',
    rating: 5,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic CeraVe daily hydrating wash with 3 essential ceramides and hyaluronic acid to cleanse without disrupting skin barrier.'
  },
  {
    id: 'skin-4',
    name: 'CeraVe Moisturizing Cream with Ceramides (454g)',
    category: 'skincare',
    categoryLabel: 'Dermatologist Skincare',
    price: 28000,
    oldPrice: 35000,
    discount: '20% OFF',
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1608248597359-54d6a457497d?auto=format&fit=crop&w=800&q=80',
    description: 'Rich, non-comedogenic barrier restoration cream with patented MVE delivery technology for all-day deep hydration.'
  },
  {
    id: 'skin-5',
    name: 'CeraVe Daily Moisturizing Lotion (355ml)',
    category: 'skincare',
    categoryLabel: 'Dermatologist Skincare',
    price: 24000,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight, oil-free daily moisturizer formulated with ceramides & hyaluronic acid for silky smooth, hydrated skin.'
  },

  // Packages
  {
    id: 'pkg-1',
    name: 'The Rayo Luxe Deluxe Keepsake Hamper',
    category: 'packages',
    categoryLabel: 'Gift Packages',
    price: 65000,
    oldPrice: 85000,
    discount: '24% OFF',
    rating: 5,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    description: 'Curated luxury collection including Jasmin D\'Or 50ml, Aura Glow Lip Gloss, Silk Modal Scarf, and gold jewelry keepsake box.'
  },
  {
    id: 'pkg-2',
    name: 'Glow & Glam Essentials Gift Box',
    category: 'packages',
    categoryLabel: 'Gift Packages',
    price: 42000,
    oldPrice: 55000,
    discount: '24% OFF',
    rating: 4.9,
    reviews: 41,
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=800&q=80',
    description: 'Self-care ritual hamper featuring Botanical Lip Oil, Rosewater Mist, and 18K Gold Huggie Earrings.'
  }
];

export const SPOTLIGHT_BUNDLE: Product = {
  id: 'spotlight-glow-bundle',
  name: 'Rayo Luxe Glow & Glam Set',
  category: 'packages',
  categoryLabel: 'Curated Bundle',
  price: 52000,
  oldPrice: 62000,
  discount: 'Save ₦10,000',
  rating: 5,
  reviews: 73,
  image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  description: 'Includes Hydrating Lip Gloss, Silk Modal Hijab & Golden Pearl Pendant in deluxe signature packaging.'
};
