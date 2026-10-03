import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Truck, 
  Gift, 
  Sparkles, 
  Check, 
  Flame
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'reviews'>('overview');

  if (!isOpen || !product) return null;

  const formatNaira = (amount: number) => `\u20A6${amount.toLocaleString()}`;

  const handleAdd = () => {
    onAddToCart(product, quantity);
  };

  const handleBuy = () => {
    onBuyNow(product);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-panel quickview-panel liquid-glass-heavy"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 860, maxHeight: '92vh', overflowY: 'auto' }}
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="quickview-grid">
          {/* Left Column: Image & Badges */}
          <div className="quickview-media">
            <div className="quickview-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="quickview-main-image"
              />
              {product.badge && (
                <span className="product-badge badge-bestseller" style={{ top: 16, left: 16 }}>
                  {product.badge}
                </span>
              )}
              {product.discount && (
                <span className="product-badge badge-discount" style={{ top: 16, right: 16 }}>
                  {product.discount}
                </span>
              )}
            </div>

            {/* Quick trust metrics */}
            <div className="quickview-trust-grid">
              <div className="trust-mini-item">
                <ShieldCheck size={16} color="var(--color-champagne-dark)" />
                <span>100% Authentic Quality</span>
              </div>
              <div className="trust-mini-item">
                <Truck size={16} color="var(--color-champagne-dark)" />
                <span>Fast Nationwide Delivery</span>
              </div>
              <div className="trust-mini-item">
                <Gift size={16} color="var(--color-champagne-dark)" />
                <span>Signature Keepsake Box</span>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="quickview-info">
            <div className="quickview-header">
              <span className="quickview-category">{product.categoryLabel}</span>
              <h2 className="quickview-title">{product.name}</h2>
              
              {/* Rating */}
              <div className="product-rating" style={{ margin: '8px 0 12px' }}>
                <div className="stars" style={{ display: 'flex', gap: 3 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={15} 
                      fill="var(--color-champagne)" 
                      color="var(--color-champagne)" 
                    />
                  ))}
                </div>
                <span className="rating-score" style={{ fontWeight: 600, fontSize: '0.86rem' }}>
                  {product.rating}
                </span>
                <span className="rating-count" style={{ fontSize: '0.82rem', color: 'var(--color-stone)' }}>
                  ({product.reviews} verified reviews)
                </span>
              </div>

              {/* Price */}
              <div className="product-price-row" style={{ alignItems: 'baseline', gap: 12 }}>
                <span className="current-price" style={{ fontSize: '1.65rem', fontWeight: 700 }}>
                  {formatNaira(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="old-price" style={{ fontSize: '1.05rem', textDecoration: 'line-through' }}>
                    {formatNaira(product.oldPrice)}
                  </span>
                )}
              </div>

              {/* Stock urgency indicator */}
              {product.inStock && product.inStock <= 5 && (
                <div className="stock-urgency-badge">
                  <Flame size={14} color="#C44536" />
                  <span>Hurry, only <strong>{product.inStock} items left</strong> in stock!</span>
                </div>
              )}
            </div>

            {/* Tabs: Overview, Specs, Fragrance Notes */}
            <div className="quickview-tabs">
              <button 
                className={`quickview-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              {product.specs && (
                <button 
                  className={`quickview-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specs')}
                >
                  Specifications
                </button>
              )}
              {product.notes && (
                <button 
                  className={`quickview-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Scent Profile
                </button>
              )}
            </div>

            {/* Tab Contents */}
            <div className="quickview-tab-content">
              {activeTab === 'overview' && (
                <p className="quickview-description">{product.description}</p>
              )}

              {activeTab === 'specs' && product.specs && (
                <ul className="quickview-specs-list">
                  {product.specs.map((spec, i) => (
                    <li key={i}>
                      <Check size={14} color="var(--color-champagne-dark)" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'reviews' && product.notes && (
                <div className="scent-notes-box">
                  <div className="scent-note-row">
                    <span className="scent-level">Top Notes:</span>
                    <span className="scent-val">{product.notes.top}</span>
                  </div>
                  <div className="scent-note-row">
                    <span className="scent-level">Heart Notes:</span>
                    <span className="scent-val">{product.notes.heart}</span>
                  </div>
                  <div className="scent-note-row">
                    <span className="scent-level">Base Notes:</span>
                    <span className="scent-val">{product.notes.base}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="quickview-actions-wrap">
              <div className="quickview-qty-row">
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                  Quantity:
                </span>
                <div className="quantity-control" style={{ background: '#FFF' }}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist Button */}
                <button 
                  className={`quickview-wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
                  onClick={() => onToggleWishlist(product)}
                  title={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
                  aria-label="Toggle Wishlist"
                >
                  <Heart size={18} fill={isWishlisted ? "var(--color-rose)" : "none"} color={isWishlisted ? "var(--color-rose)" : "currentColor"} />
                  <span>{isWishlisted ? 'Saved' : 'Wishlist'}</span>
                </button>
              </div>

              <div className="quickview-cta-row">
                <button 
                  className="btn btn-primary"
                  onClick={handleAdd}
                  style={{ flex: 1, padding: '14px 20px' }}
                >
                  <ShoppingBag size={18} />
                  <span>Add to Bag</span>
                </button>
                <button 
                  className="btn btn-whatsapp"
                  onClick={handleBuy}
                  style={{ flex: 1, padding: '14px 20px' }}
                >
                  <Sparkles size={18} />
                  <span>Buy via WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
