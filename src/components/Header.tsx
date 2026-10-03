import React from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenMenu: () => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenMenu,
  onOpenCart,
  onOpenSearch,
  scrolled
}) => {
  return (
    <>
      {/* Top Announcement Bar (Infinite Continuous Marquee) */}
      <div className="announcement-bar">
        <div className="announcement-track">
          <span className="announcement-item">Complimentary luxury keepsake gift box on all orders</span>
          <span className="announcement-dot">•</span>
          <span className="announcement-item">Use code <strong>RAYOLUXE15</strong> for 15% off</span>
          <span className="announcement-dot">•</span>
          <span className="announcement-item">Express Doorstep Delivery Across Nigeria</span>
          <span className="announcement-dot">•</span>
          <span className="announcement-item">Handcrafted Jewelry & Signature French Perfumes</span>
          <span className="announcement-dot">•</span>
          <span className="announcement-item">Complimentary luxury keepsake gift box on all orders</span>
          <span className="announcement-dot">•</span>
          <span className="announcement-item">Use code <strong>RAYOLUXE15</strong> for 15% off</span>
          <span className="announcement-dot">•</span>
          <span className="announcement-item">Express Doorstep Delivery Across Nigeria</span>
          <span className="announcement-dot">•</span>
          <span className="announcement-item">Handcrafted Jewelry & Signature French Perfumes</span>
          <span className="announcement-dot">•</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          
          {/* LEFT: Hamburger Menu */}
          <div style={{ width: 80, display: 'flex', alignItems: 'center' }}>
            <button 
              className="icon-btn" 
              onClick={onOpenMenu}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} strokeWidth={1.75} />
            </button>
          </div>

          {/* CENTER: Brand Logo */}
          <div style={{ textAlign: 'center', flex: 1 }}>
            <a href="#hero" style={{ display: 'inline-block' }}>
              <span className="brand-title">RAYO LUXE</span>
              <span className="brand-sub">BEAUTY & LIFESTYLE</span>
            </a>
          </div>

          {/* RIGHT: Search & Cart Bag */}
          <div style={{ width: 80, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>
            <button 
              className="icon-btn" 
              onClick={onOpenSearch}
              aria-label="Search Catalog"
            >
              <Search size={20} strokeWidth={1.75} />
            </button>

            <button 
              className="icon-btn" 
              onClick={onOpenCart}
              aria-label="View Shopping Bag"
            >
              <ShoppingBag size={20} strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
