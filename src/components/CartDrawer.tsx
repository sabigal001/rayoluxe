import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ShieldCheck, 
  MessageCircle, 
  Lock,
  ArrowRight 
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onApplyCoupon: (code: string) => void;
  discountPercent: number;
  onProceedCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onApplyCoupon,
  discountPercent,
  onProceedCheckout
}) => {
  const [couponInput, setCouponInput] = useState('');
  const FREE_SHIPPING_THRESHOLD = 40000;
  const SHIPPING_FEE = 3500;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discountPercent;
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = subtotal === 0 ? 0 : (isFreeShipping ? 0 : SHIPPING_FEE);
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      onApplyCoupon(couponInput.trim());
      setCouponInput('');
    }
  };

  const formatNaira = (amount: number) => `\u20A6${amount.toLocaleString()}`;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let text = `*New Order Request \u2014 Rayo Luxe*\n`;
    text += `------------------------------------\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* (x${item.quantity}) \u2014 ${formatNaira(item.price * item.quantity)}\n`;
    });
    text += `------------------------------------\n`;
    text += `*Subtotal:* ${formatNaira(subtotal)}\n`;
    if (discountPercent > 0) {
      text += `*Discount (15%):* -${formatNaira(discountAmount)}\n`;
    }
    text += `*Delivery:* ${shipping === 0 ? 'FREE' : formatNaira(shipping)}\n`;
    text += `*Grand Total:* ${formatNaira(total)}\n\n`;
    text += `Please confirm availability and dispatch schedule. Thank you!`;

    window.open(`https://wa.me/2349155429018?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />

      {/* Right Drawer Panel */}
      <aside className={`drawer-panel-right liquid-glass-heavy ${isOpen ? 'active' : ''}`}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid rgba(220, 215, 208, 0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShoppingBag size={20} color="var(--color-champagne-dark)" />
            <h2 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 700 }}>Your Shopping Bag</h2>
            <span style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              background: 'rgba(255, 255, 255, 0.9)',
              color: 'var(--color-stone)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)'
            }}>
              {totalCount} {totalCount === 1 ? 'item' : 'items'}
            </span>
          </div>

          <button className="icon-btn" onClick={onClose} aria-label="Close Shopping Bag">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div style={{
          background: 'rgba(185, 131, 117, 0.08)',
          borderBottom: '1px solid rgba(220, 215, 208, 0.3)',
          padding: '12px 24px'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal)', marginBottom: 6 }}>
            {isFreeShipping ? (
              <span>Unlocked <strong>FREE Luxury Delivery</strong>!</span>
            ) : (
              <span>Add <strong>{formatNaira(FREE_SHIPPING_THRESHOLD - subtotal)}</strong> more for <strong>FREE Delivery</strong></span>
            )}
          </div>
          <div style={{ width: '100%', height: 4, background: 'rgba(220, 215, 208, 0.5)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
              height: '100%',
              background: 'var(--color-rose)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Scrollable Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '56px 20px' }}>
              <div style={{
                width: 68,
                height: 68,
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <ShoppingBag size={28} color="var(--color-stone-light)" />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8 }}>
                Your bag is empty
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-stone)', marginBottom: 24 }}>
                Explore our curated jewelry, perfumes, and lip care to treat yourself today.
              </p>
              <button 
                className="btn btn-primary" 
                onClick={onClose}
              >
                <span>Discover Products</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {items.map((item) => (
                <div 
                  key={item.id} 
                  style={{
                    display: 'flex',
                    gap: 14,
                    paddingBottom: 16,
                    borderBottom: '1px solid rgba(220, 215, 208, 0.3)'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: 'var(--radius-sm)',
                      objectFit: 'cover',
                      background: 'var(--bg-surface)'
                    }}
                  />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-obsidian)', lineHeight: 1.3 }}>
                        {item.name}
                      </span>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ color: 'var(--color-stone-light)', padding: 2 }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-obsidian)', margin: '4px 0 8px 0' }}>
                      {formatNaira(item.price)}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.85)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-full)'
                      }}>
                        <button 
                          onClick={() => onUpdateQty(item.id, -1)}
                          style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, minWidth: 20, textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQty(item.id, 1)}
                          style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-obsidian)' }}>
                        {formatNaira(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div style={{
            padding: '20px 24px',
            background: 'rgba(255, 255, 255, 0.65)',
            borderTop: '1px solid rgba(220, 215, 208, 0.4)'
          }}>
            {/* Promo Input */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <input 
                type="text" 
                placeholder="Enter promo code (e.g. RAYOLUXE15)"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  textTransform: 'uppercase'
                }}
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ padding: '9px 18px', fontSize: '0.82rem' }}
              >
                Apply
              </button>
            </form>

            {/* Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--color-stone)' }}>
                <span>Subtotal</span>
                <span>{formatNaira(subtotal)}</span>
              </div>
              
              {discountPercent > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--color-whatsapp)' }}>
                  <span>Discount (15%)</span>
                  <span>-{formatNaira(discountAmount)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--color-stone)' }}>
                <span>Estimated Delivery</span>
                <span>{shipping === 0 ? 'FREE' : formatNaira(shipping)}</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--color-obsidian)',
                borderTop: '1px solid rgba(220, 215, 208, 0.5)',
                paddingTop: 8,
                marginTop: 4
              }}>
                <span>Total</span>
                <span>{formatNaira(total)}</span>
              </div>
            </div>

            {/* Checkout Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
              <button 
                className="btn btn-whatsapp btn-block"
                onClick={handleWhatsAppCheckout}
              >
                <MessageCircle size={18} />
                <span>Complete Order via WhatsApp</span>
              </button>

              <button 
                className="btn btn-primary btn-block"
                onClick={onProceedCheckout}
              >
                <span>Proceed to Checkout</span>
                <Lock size={16} />
              </button>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--color-stone)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <ShieldCheck size={14} color="var(--color-champagne-dark)" />
              <span>100% Satisfaction Guarantee & Secure Ordering</span>
            </p>

          </div>
        )}

      </aside>
    </>
  );
};
