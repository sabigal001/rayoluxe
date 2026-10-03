import React, { useState, useEffect } from 'react';
import { Check, Info } from 'lucide-react';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, CartItem, ToastNotification, OrderDetails } from './types';

// Core Components
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { ProductGrid } from './components/ProductGrid';
import { ReadyToPurchase } from './components/ReadyToPurchase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Discounts } from './components/Discounts';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Drawers & Modals
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { VipClubModal } from './components/VipClubModal';

// Floating Widgets
import { AiAssistant } from './components/AiAssistant';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const CART_STORAGE_KEY = 'rayo_luxe_cart_react_v1';
const WISHLIST_STORAGE_KEY = 'rayo_luxe_wishlist_react_v1';
const VIP_SEEN_KEY = 'rayo_luxe_vip_seen_v1';

export const App: React.FC = () => {
  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted in localStorage)
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Navigation & Modal States
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isVipClubOpen, setIsVipClubOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Discount & Toasts
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [scrolled, setScrolled] = useState(false);

  // Sync Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error('Cart storage error:', err);
    }
  }, [cart]);

  // Sync Wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (err) {
      console.error('Wishlist storage error:', err);
    }
  }, [wishlist]);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timed VIP Club invitation popup (shows once per session)
  useEffect(() => {
    const seen = sessionStorage.getItem(VIP_SEEN_KEY);
    if (!seen) {
      const timer = setTimeout(() => {
        setIsVipClubOpen(true);
        sessionStorage.setItem(VIP_SEEN_KEY, 'true');
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Toast Helper
  const showToast = (message: string, type: 'success' | 'info' = 'info') => {
    const id = String(Date.now() + Math.random());
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2200);
  };

  // Cart Operations
  const handleAddToCart = (product: Product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: qty
      }];
    });

    showToast('Added to bag', 'success');
  };

  const handleBuyNow = (product: Product) => {
    handleAddToCart(product, 1);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    const item = cart.find(i => i.id === id);
    setCart(prev => prev.filter(i => i.id !== id));
    if (item) {
      showToast('Removed from bag', 'info');
    }
  };

  // Wishlist Operations
  const isProductWishlisted = (id: string) => {
    return wishlist.some(item => item.id === id);
  };

  const handleToggleWishlist = (product: Product) => {
    const exists = isProductWishlisted(product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast('Removed from wishlist', 'info');
    } else {
      setWishlist(prev => [...prev, product]);
      showToast('Saved to wishlist', 'success');
    }
  };

  const handleRemoveFromWishlist = (product: Product) => {
    setWishlist(prev => prev.filter(item => item.id !== product.id));
    showToast('Removed from wishlist', 'info');
  };

  const handleClearWishlist = () => {
    setWishlist([]);
    showToast('Wishlist cleared', 'info');
  };

  // Coupon application
  const handleApplyCoupon = (code: string) => {
    const normalized = code.toUpperCase().trim();
    if (normalized === 'RAYOLUXE15') {
      setDiscountPercent(0.15);
      showToast('15% discount applied', 'success');
    } else if (normalized === 'RAYOVIP10') {
      setDiscountPercent(0.10);
      showToast('10% discount applied', 'success');
    } else {
      setDiscountPercent(0);
      showToast('Invalid promo code', 'info');
    }
  };

  const formatNaira = (amount: number) => `\u20A6${amount.toLocaleString()}`;

  const handleConfirmOrder = (details: OrderDetails) => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = subtotal * discountPercent;
    const shipping = subtotal >= 40000 ? 0 : 3500;
    const total = Math.max(0, subtotal - discountAmount + shipping);

    let text = `*New Order Request — Rayo Luxe*\n`;
    text += `------------------------------------\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* (x${item.quantity}) — ${formatNaira(item.price * item.quantity)}\n`;
    });
    text += `------------------------------------\n`;
    text += `*Subtotal:* ${formatNaira(subtotal)}\n`;
    if (discountPercent > 0) {
      text += `*Discount:* -${formatNaira(discountAmount)} (${discountPercent * 100}%)\n`;
    }
    text += `*VIP Shipping:* ${shipping === 0 ? 'FREE (Orders ₦40,000+)' : formatNaira(shipping)}\n`;
    text += `*Total Order Value:* ${formatNaira(total)}\n\n`;
    text += `*Customer Details:*\n`;
    text += `Name: ${details.name}\n`;
    text += `Phone: ${details.phone}\n`;
    text += `Delivery Address: ${details.address}\n`;
    text += `Payment Method: ${details.payment}\n\n`;
    text += `Please confirm dispatch. Thank you!`;

    window.open(`https://wa.me/2349155429018?text=${encodeURIComponent(text)}`, '_blank');

    setIsCheckoutOpen(false);
    setCart([]);
    showToast('Connecting to WhatsApp...', 'success');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <div className="app-layout">
      
      {/* Toast Notifications */}
      <div className="toast-stack" aria-live="polite" aria-atomic="true">
        {toasts.map(toast => (
          <div key={toast.id} className="toast-item">
            <span className={`toast-icon-wrap ${toast.type}`}>
              {toast.type === 'success' ? (
                <Check size={13} strokeWidth={2.75} />
              ) : (
                <Info size={13} strokeWidth={2.75} />
              )}
            </span>
            <span className="toast-text">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Header */}
      <Header 
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        scrolled={scrolled}
      />

      {/* Hamburger Side Navigation */}
      <SideMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenVipClub={() => setIsVipClubOpen(true)}
        onNavigate={(id) => {
          setIsMenuOpen(false);
          scrollToSection(id);
        }}
      />

      {/* Main Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero 
          onShopNow={() => scrollToSection('featured-products')}
          onExploreCollections={() => scrollToSection('collections')}
        />

        {/* Section 2: Collections */}
        <Collections 
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            scrollToSection('featured-products');
          }}
        />

        {/* Section 3: Bestselling Products */}
        <ProductGrid 
          products={PRODUCTS}
          activeFilter={activeCategory}
          onFilterChange={(cat) => setActiveCategory(cat)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onBuyNow={handleBuyNow}
          onQuickView={(p) => setSelectedProduct(p)}
          isWishlisted={isProductWishlisted}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* Section 4: Ready to Purchase */}
        <ReadyToPurchase 
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onBuyNow={handleBuyNow}
        />

        {/* Section 5: What You Should Expect (4 Core Pillars) */}
        <WhyChooseUs />

        {/* Section 6: Verified Clientele Testimonials Carousel */}
        <TestimonialsSection />

        {/* Section 7: Discounts & Promotions */}
        <Discounts 
          onShopDiscounted={() => scrollToSection('featured-products')}
          onApplyCoupon={handleApplyCoupon}
          onShowToast={showToast}
        />

        {/* Section 8: About Us Heritage */}
        <AboutUs />

        {/* Section 9: Contact Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Product Detail / Quick View Modal */}
      <ProductDetailModal 
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isWishlisted={selectedProduct ? isProductWishlisted(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemoveItem={handleRemoveFromWishlist}
        onAddToCart={(p) => handleAddToCart(p, 1)}
        onClearWishlist={handleClearWishlist}
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveFromCart}
        onApplyCoupon={handleApplyCoupon}
        discountPercent={discountPercent}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Express Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        discountPercent={discountPercent}
        onConfirmOrder={handleConfirmOrder}
      />

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />

      {/* Live Order Tracking Modal */}
      <OrderTrackingModal 
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      {/* VIP Club Invitation Modal */}
      <VipClubModal 
        isOpen={isVipClubOpen}
        onClose={() => setIsVipClubOpen(false)}
        onApplyCoupon={handleApplyCoupon}
        onShowToast={showToast}
      />

      {/* Floating Concierge AI Assistant */}
      <AiAssistant />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer 
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToSection('featured-products');
        }}
        onNavigate={(id) => scrollToSection(id)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenVipClub={() => setIsVipClubOpen(true)}
      />

    </div>
  );
};

export default App;
