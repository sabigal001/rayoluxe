import React, { useState } from 'react';
import { X, Sparkles, Check, Copy, ArrowRight, Gift } from 'lucide-react';

interface VipClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyCoupon: (code: string) => void;
  onShowToast: (message: string, type: 'success' | 'info') => void;
}

export const VipClubModal: React.FC<VipClubModalProps> = ({
  isOpen,
  onClose,
  onApplyCoupon,
  onShowToast
}) => {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please enter your email', 'info');
      return;
    }
    setUnlocked(true);
    onShowToast('VIP discount unlocked', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('RAYOVIP10');
    setCopied(true);
    onShowToast('Code copied', 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyAndShop = () => {
    onApplyCoupon('RAYOVIP10');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-panel vip-modal-panel liquid-glass-heavy"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 480, textAlign: 'center', padding: '40px 32px' }}
      >
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close VIP modal"
        >
          <X size={18} />
        </button>

        <div className="vip-icon-badge" style={{ margin: '0 auto 18px' }}>
          <Gift size={28} color="var(--color-champagne-dark)" />
        </div>

        {!unlocked ? (
          <>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <Sparkles size={13} color="var(--color-champagne-dark)" />
              <span>Exclusive Invitation</span>
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 700, margin: '8px 0 10px', color: 'var(--color-obsidian)' }}>
              Join the Rayo Luxe VIP Circle
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)', lineHeight: 1.6, marginBottom: 24 }}>
              Subscribe to receive an instant <strong>10% OFF voucher</strong>, private collection drops, and invitations to exclusive Nigerian VIP masterclasses.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input 
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: '13px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--glass-border-subtle)',
                  background: '#FFF',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '13px 20px' }}>
                <span>Unlock VIP 10% Discount</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <span style={{ fontSize: '0.74rem', color: 'var(--color-stone-light)', display: 'block', marginTop: 14 }}>
              Zero spam. You can unsubscribe at any time.
            </span>
          </>
        ) : (
          <>
            <div className="vip-success-badge" style={{ margin: '0 auto 12px' }}>
              <Check size={24} color="#1EBE5D" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, margin: '4px 0 8px' }}>
              You're in the Circle!
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)', marginBottom: 20 }}>
              Use your exclusive voucher code at checkout to claim 10% off your entire order:
            </p>

            <div className="voucher-code-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '12px 20px', background: '#FFF', borderRadius: 'var(--radius-md)', border: '2px dashed var(--color-champagne)', marginBottom: 20 }}>
              <strong style={{ fontSize: '1.25rem', letterSpacing: '0.15em', color: 'var(--color-obsidian)' }}>
                RAYOVIP10
              </strong>
              <button 
                onClick={handleCopy}
                className="btn btn-sm"
                style={{ padding: '6px 12px', fontSize: '0.76rem', background: 'var(--color-obsidian)', color: '#FFF' }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <button 
              className="btn btn-primary"
              onClick={handleApplyAndShop}
              style={{ width: '100%', padding: '12px' }}
            >
              <span>Apply Code & Continue Shopping</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
