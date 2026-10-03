# Rayo Luxe — Luxury Beauty & Lifestyle

> **Handcrafted Fine Jewelry • Artisanal French Perfumes & Oils • Botanical Lip Oils • Pure Silk Hair Scarves • CeraVe Skincare • Curated Gift Hampers**

🌐 **Live Website**: [https://rayoluxe.vercel.app/](https://rayoluxe.vercel.app/)

Welcome to **Rayo Luxe**, an ultra-premium, mobile-first e-commerce web application meticulously designed for high-end lifestyle products. Built with modern TypeScript, React, Vite, and a bespoke liquid frosted glass design system.

---

## ✨ Features & Highlights

- **Luxury Aesthetics & Design System**:
  - Warm champagne gold leaf accents, obsidian espresso tones, and alabaster cashmere frosted glass surfaces.
  - Bespoke serif typography paired with clean, modern sans-serif fonts.
  - Subtle ambient lighting gradients and smooth micro-interactions.
  - Zero generic styling or clunky emojis — sleek, elegant SVG icons powered by `lucide-react`.

- **Moving Announcement Marquee**:
  - Smooth, continuous ticker running above the header featuring VIP promotions, coupon codes, and shipping perks with pause-on-hover capability.

- **Clean Minimalist Header**:
  - Focused branding with "RAYO LUXE | BEAUTY & LIFESTYLE".
  - Quick access to full-text search, live cart badge counter, and side navigation drawer.

- **Celestial Orbit Floating Action Buttons (FAB)**:
  - Planetary orbit animation with rotating rings and glowing satellites.
  - **AI Concierge Assistant**: Instant answers to common questions about products, shipping rates, orders, and promo codes.
  - **WhatsApp Direct Connect**: Immediate customer concierge via WhatsApp with pre-filled inquiry templates.

- **Realistic Naira Pricing (₦)**:
  - All catalog products are priced in Nigerian Naira (₦) with localized thousand separators and discount percentages.

- **Interactive Shopping & Express Checkout**:
  - Slide-out Cart Drawer with dynamic quantity adjustments and coupon code validation (`RAYOLUXE10` for 10% off).
  - WhatsApp Express Checkout modal automatically generates formatted order dispatches with customer delivery details.

- **Curated Collections & Filterable Product Grid**:
  - Filter by Fine Jewelry, French Perfumes, Lip Care, Bespoke Hijabs, Skincare, and Deluxe Gift Hampers.
  - Real-time catalog search modal with instant suggestions and add-to-cart actions.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with custom CSS variables and animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Cormorant Garamond* & *Plus Jakarta Sans*)

---

## 📂 Project Directory Structure

```plaintext
first-project/
├── public/
│   ├── assets/
│   │   └── images/          # Curated product images & categories
│   └── favicon.svg          # Luxury gold monogram RL favicon
├── src/
│   ├── assets/
│   │   └── images/          # Local asset duplicates for bundling
│   ├── components/
│   │   ├── AboutUs.tsx          # Brand story & heritage modal/section
│   │   ├── AiAssistant.tsx      # Orbiting AI concierge chat assistant
│   │   ├── CartDrawer.tsx       # Slide-out glass shopping bag drawer
│   │   ├── CheckoutModal.tsx    # Express WhatsApp checkout form
│   │   ├── Collections.tsx      # Curated category cards
│   │   ├── ContactSection.tsx   # Interactive inquiry form & details
│   │   ├── Discounts.tsx        # Promo code showcase & copy action
│   │   ├── FloatingWhatsApp.tsx # Celestial orbit WhatsApp FAB
│   │   ├── Footer.tsx           # Active customer service links & info
│   │   ├── Header.tsx           # Continuous marquee & sticky nav
│   │   ├── Hero.tsx             # Hero showcase with CTA buttons
│   │   ├── ProductGrid.tsx      # Filterable product cards & buy actions
│   │   ├── ReadyToPurchase.tsx  # Limited-edition highlight bundle
│   │   ├── SearchModal.tsx      # Real-time search modal
│   │   ├── SideMenu.tsx         # Slide-out mobile navigation drawer
│   │   └── WhyChooseUs.tsx      # 4 core luxury brand pillars
│   ├── data/
│   │   └── products.ts      # Product database with Naira pricing
│   ├── types/
│   │   └── index.ts         # TypeScript definitions
│   ├── App.tsx              # Root application layout & state
│   ├── index.css            # Custom luxury frosted glass design system
│   ├── main.tsx             # React entry point
│   └── vite-env.d.ts
├── index.html               # Semantic HTML5 entry with meta & favicon
├── package.json             # Dependencies and scripts
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite development and build settings
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd "first project"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📞 Concierge & Contact Information

- **Brand**: Rayo Luxe
- **WhatsApp Support**: [+234 915 542 9018](https://wa.me/2349155429018)
- **Direct Phone**: `09155429018`
- **Official Email**: [masturohalabi@gmail.com](mailto:masturohalabi@gmail.com)
- **Concierge Hours**: Monday – Saturday, 9:00 AM – 8:00 PM WAT

---

## 📄 License
This project is proprietary and created for **Rayo Luxe**. All rights reserved.
