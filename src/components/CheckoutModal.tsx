import React, { useState } from 'react';
import { X, Check, ShieldCheck } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountPercent: number;
  onConfirmOrder: (details: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountPercent,
  onConfirmOrder
}) => {
  const [details, setDetails] = useState<OrderDetails>({
    name: '',
    phone: '',
    address: '',
    payment: 'Direct Bank Transfer'
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discountPercent;
  const shipping = subtotal >= 40000 ? 0 : (subtotal === 0 ? 0 : 3500);
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmOrder(details);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="liquid-glass-heavy" 
        style={{
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: 520,
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(24px, 4vw, 36px)',
          boxShadow: '0 24px 64px rgba(21, 19, 18, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
          paddingBottom: 14,
          borderBottom: '1px solid rgba(220, 215, 208, 0.4)'
        }}>
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.65rem', fontWeight: 700 }}>Express Checkout</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-stone)' }}>Rayo Luxe Priority Dispatch</span>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)', marginBottom: 20 }}>
          Please provide your delivery details below. We will immediately confirm your order and dispatch tracking via WhatsApp.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
              Full Name
            </label>
            <input 
              type="text" 
              required
              placeholder="e.g. Masturoh"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--glass-border)',
                fontSize: '0.92rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
              WhatsApp Phone Number
            </label>
            <input 
              type="tel" 
              required
              placeholder="e.g. 09155429018"
              value={details.phone}
              onChange={(e) => setDetails({ ...details, phone: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--glass-border)',
                fontSize: '0.92rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
              Delivery Street Address
            </label>
            <textarea 
              rows={2}
              required
              placeholder="House/Apt number, Street, City, State"
              value={details.address}
              onChange={(e) => setDetails({ ...details, address: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--glass-border)',
                fontSize: '0.92rem',
                resize: 'vertical'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
              Preferred Payment Method
            </label>
            <select
              value={details.payment}
              onChange={(e) => setDetails({ ...details, payment: e.target.value })}
              style={{
                width: '100%',
                padding: '11px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--glass-border)',
                fontSize: '0.92rem'
              }}
            >
              <option value="Direct Bank Transfer">Direct Bank Transfer</option>
              <option value="Online Card Payment">Online Card Payment (Visa / Master)</option>
              <option value="Payment On Delivery">Payment On Delivery</option>
            </select>
          </div>

          {/* Mini Summary Box */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: 'var(--radius-md)',
            padding: 16,
            marginTop: 6,
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--color-stone)', marginBottom: 6 }}>
              <span>Items to Dispatch:</span>
              <strong style={{ color: 'var(--color-obsidian)' }}>{count} {count === 1 ? 'item' : 'items'}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-obsidian)' }}>
              <span>Final Total:</span>
              <span style={{ color: 'var(--color-champagne-dark)' }}>{`\u20A6${total.toLocaleString()}`}</span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 8 }}>
            <span>Confirm & Send Order via WhatsApp</span>
            <Check size={16} />
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--color-stone)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <ShieldCheck size={13} color="var(--color-whatsapp)" />
            <span>Encrypted transmission & personal privacy protected</span>
          </p>
        </form>

      </div>
    </div>
  );
};
