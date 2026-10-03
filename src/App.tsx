import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, CartItem, ToastNotification, OrderDetails } from './types';

// Components
import { Header } from './components/Header';
// CategoryNav removed per user request
import { SideMenu } from './components/SideMenu';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { ProductGrid } from './components/ProductGrid';
import { ReadyToPurchase } from './components/ReadyToPurchase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Discounts } from './components/Discounts';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { AiAssistant } from './components/AiAssistant';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

const CART_STORAGE_KEY = 'rayo_luxe_cart_react_v1';

export const App: React.FC = () => {
  // State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [scrolled, setScrolled] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error('Storage error:', err);
    }
  }, [cart]);

  // Window scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast Helper
  const showToast = (message: string, type: 'success' | 'info' = 'info') => {
    const id = String(Date.now() + Math.random());
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
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

    showToast(`Added "${product.name}" to your shopping bag!`, 'success');
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
      showToast(`Removed "${item.name}" from your bag.`, 'info');
    }
  };

  const handleApplyCoupon = (code: string) => {
    if (code.toUpperCase().trim() === 'RAYOLUXE15') {
      setDiscountPercent(0.15);
      showToast('Promo code RAYOLUXE15 applied! (15% OFF)', 'success');
    } else {
      setDiscountPercent(0);
      showToast('Invalid promo code. Use RAYOLUXE15 for 15% off.', 'info');
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
      text += `*Discount (15%):* -${formatNaira(discountAmount)}\n`;
    }
    text += `*Delivery:* ${shipping === 0 ? 'FREE' : formatNaira(shipping)}\n`;
    text += `*Grand Total:* ${formatNaira(total)}\n\n`;
    text += `*Delivery Details:*\n`;
    text += `Name: ${details.name}\n`;
    text += `Phone: ${details.phone}\n`;
    text += `Address: ${details.address}\n`;
    text += `Payment Method: ${details.payment}\n\n`;
    text += `Please confirm dispatch. Thank you!`;

    window.open(`https://wa.me/2349155429018?text=${encodeURIComponent(text)}`, '_blank');

    setIsCheckoutOpen(false);
    setCart([]);
    showToast('Thank you! Redirecting to WhatsApp for confirmation...', 'success');
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

  return (
    <div className="app-layout">
      
      {/* Toast Notifications */}
      <div className="toast-stack">
        {toasts.map(toast => (
          <div key={toast.id} className="toast-item liquid-glass-heavy">
            <span>{toast.type === 'success' ? '✓' : '•'}</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Header */}
      <Header 
        cartCount={cartCount}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        scrolled={scrolled}
      />

      {/* CategoryNav removed — user requested removal of category bar below header */}

      {/* Hamburger Side Navigation */}
      <SideMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
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
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        {/* Section 4: Ready to Purchase */}
        <ReadyToPurchase 
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        {/* Section 5: What You Should Expect */}
        <WhyChooseUs />

        {/* Section 6: Discounts */}
        <Discounts 
          onShopDiscounted={() => scrollToSection('featured-products')}
          onApplyCoupon={handleApplyCoupon}
          onShowToast={showToast}
        />

        {/* About Us */}
        <AboutUs />

        {/* Contact Us */}
        <ContactSection onShowToast={showToast} />
      </main>

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
        onAddToCart={handleAddToCart}
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
      />

    </div>
  );
};

export default App;
