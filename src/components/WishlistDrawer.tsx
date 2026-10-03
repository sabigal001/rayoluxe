import React from 'react';
import { X, Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onClearWishlist: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onAddToCart,
  onClearWishlist
}) => {
  if (!isOpen) return null;

  const formatNaira = (amount: number) => `\u20A6${amount.toLocaleString()}`;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div 
        className="drawer-panel drawer-panel-right liquid-glass-heavy"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Heart size={20} color="var(--color-rose)" fill="var(--color-rose)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600 }}>
              Saved Wishlist ({items.length})
            </h3>
          </div>
          <button 
            className="icon-btn" 
            onClick={onClose}
            aria-label="Close Wishlist"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="cart-empty" style={{ flex: 1 }}>
            <div className="empty-cart-icon" style={{ background: 'var(--color-rose-soft)' }}>
              <Heart size={32} color="var(--color-rose)" />
            </div>
            <h4>Your Wishlist is Empty</h4>
            <p>Save items you adore by tapping the heart icon on any product card while browsing.</p>
            <button className="btn btn-primary" onClick={onClose}>
              <span>Explore Collections</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list" style={{ flex: 1, overflowY: 'auto' }}>
              {items.map((item) => (
                <div key={item.id} className="cart-item-card" style={{ gap: 14 }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-img" 
                    style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                  />
                  <div className="cart-item-details" style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-stone)', letterSpacing: '0.1em' }}>
                          {item.categoryLabel}
                        </span>
                        <h4 className="cart-item-name" style={{ fontSize: '0.92rem', marginTop: 2 }}>{item.name}</h4>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item)}
                        style={{ color: 'var(--color-stone)', padding: 4 }}
                        title="Remove"
                        aria-label="Remove item from wishlist"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                      <span className="cart-item-price" style={{ fontWeight: 700, color: 'var(--color-obsidian)' }}>
                        {formatNaira(item.price)}
                      </span>
                      <button 
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          onAddToCart(item);
                          onRemoveItem(item);
                        }}
                        style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                      >
                        <ShoppingBag size={14} />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer with Clear All */}
            <div className="drawer-footer" style={{ borderTop: '1px solid rgba(220, 215, 208, 0.4)', padding: '16px 24px' }}>
              <button 
                onClick={onClearWishlist}
                style={{ width: '100%', textAlign: 'center', fontSize: '0.82rem', color: 'var(--color-stone)', textDecoration: 'underline' }}
              >
                Clear all saved items
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
