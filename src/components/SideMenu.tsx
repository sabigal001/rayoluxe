import React from 'react';
import { 
  X, 
  Home, 
  ShoppingBag, 
  Zap, 
  Mail, 
  Heart, 
  ShieldCheck, 
  Tag, 
  MessageCircle 
} from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onNavigate: (sectionId: string) => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  onClose,
  onOpenCart,
  cartCount,
  onNavigate
}) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />

      {/* Left Drawer Panel */}
      <aside className={`drawer-panel-left liquid-glass-heavy ${isOpen ? 'active' : ''}`}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid rgba(220, 215, 208, 0.4)'
        }}>
          <div>
            <span className="brand-title" style={{ fontSize: '1.45rem' }}>RAYO LUXE</span>
            <span className="brand-sub">Little Luxuries</span>
          </div>
          <button 
            className="icon-btn" 
            onClick={onClose}
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul style={{ listStyle: 'none', padding: '18px 14px', flex: 1, overflowY: 'auto' }}>
          <li>
            <button 
              onClick={() => onNavigate('hero')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '13px 16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-obsidian)',
                fontWeight: 600,
                fontSize: '0.94rem',
                textAlign: 'left'
              }}
            >
              <Home size={18} color="var(--color-champagne-dark)" />
              <span>Home</span>
            </button>
          </li>

          <li>
            <button 
              onClick={() => { onClose(); onOpenCart(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '13px 16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-obsidian)',
                fontWeight: 600,
                fontSize: '0.94rem',
                textAlign: 'left'
              }}
            >
              <ShoppingBag size={18} color="var(--color-champagne-dark)" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span style={{
                  marginLeft: 'auto',
                  background: 'var(--color-rose)',
                  color: '#fff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </li>

          <li>
            <button 
              onClick={() => onNavigate('ready-to-purchase')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '13px 16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-obsidian)',
                fontWeight: 600,
                fontSize: '0.94rem',
                textAlign: 'left'
              }}
            >
              <Zap size={18} color="var(--color-champagne-dark)" />
              <span>Ready to Purchase</span>
            </button>
          </li>

          <li>
            <button 
              onClick={() => onNavigate('contact')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '13px 16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-obsidian)',
                fontWeight: 600,
                fontSize: '0.94rem',
                textAlign: 'left'
              }}
            >
              <Mail size={18} color="var(--color-champagne-dark)" />
              <span>Contact Us</span>
            </button>
          </li>

          <li>
            <button 
              onClick={() => onNavigate('about')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '13px 16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-obsidian)',
                fontWeight: 600,
                fontSize: '0.94rem',
                textAlign: 'left'
              }}
            >
              <Heart size={18} color="var(--color-champagne-dark)" />
              <span>About Us</span>
            </button>
          </li>

          <li>
            <button 
              onClick={() => onNavigate('what-to-expect')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '13px 16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-obsidian)',
                fontWeight: 600,
                fontSize: '0.94rem',
                textAlign: 'left'
              }}
            >
              <ShieldCheck size={18} color="var(--color-champagne-dark)" />
              <span>What You Should Expect From Us</span>
            </button>
          </li>

          <li>
            <button 
              onClick={() => onNavigate('discounts')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '13px 16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-obsidian)',
                fontWeight: 600,
                fontSize: '0.94rem',
                textAlign: 'left'
              }}
            >
              <Tag size={18} color="var(--color-champagne-dark)" />
              <span>Discounts</span>
              <span style={{
                marginLeft: 'auto',
                background: 'rgba(185, 131, 117, 0.15)',
                color: 'var(--color-rose-dark)',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)'
              }}>
                15% OFF
              </span>
            </button>
          </li>
        </ul>

        {/* Footer */}
        <div style={{
          padding: '24px',
          borderTop: '1px solid rgba(220, 215, 208, 0.4)',
          background: 'rgba(255, 255, 255, 0.5)'
        }}>
          <p style={{
            fontSize: '0.78rem',
            color: 'var(--color-stone)',
            textAlign: 'center',
            marginBottom: '12px'
          }}>
            Need personal shopping assistance?
          </p>
          <a 
            href="https://wa.me/2349155429018?text=Hello%20Rayo%20Luxe%2C%20I%20would%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-block"
            style={{ fontSize: '0.85rem', padding: '10px' }}
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </aside>
    </>
  );
};
