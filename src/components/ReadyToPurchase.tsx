import React from 'react';
import { Zap, Check, MessageCircle, Plus } from 'lucide-react';
import { SPOTLIGHT_BUNDLE } from '../data/products';
import { Product } from '../types';

interface ReadyToPurchaseProps {
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ReadyToPurchase: React.FC<ReadyToPurchaseProps> = ({
  onAddToCart,
  onBuyNow
}) => {
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Rayo Luxe, I am ready to purchase the ${SPOTLIGHT_BUNDLE.name} (\u20A6${SPOTLIGHT_BUNDLE.price.toLocaleString()}) express!`
    );
    window.open(`https://wa.me/2349155429018?text=${text}`, '_blank');
  };

  return (
    <section className="ready-purchase-section" id="ready-to-purchase" style={{ padding: '96px 0' }}>
      <div className="container">
        
        <div className="liquid-glass" style={{
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(28px, 5vw, 56px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          
          {/* Left Column */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-champagne-dark)',
              marginBottom: 16,
              border: '1px solid var(--glass-border-subtle)'
            }}>
              <Zap size={14} />
              <span>Instant Express Ordering</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 14 }}>
              Ready to Purchase?
            </h2>

            <p style={{ color: 'var(--color-stone)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: 24 }}>
              Already know what you’d like? Enjoy our streamlined express ordering. Add your curated set in one click, or send your wishlist directly to our team via WhatsApp for same-day priority dispatch.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                <Check size={16} color="var(--color-whatsapp)" />
                <span>Zero complex registration or account creation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                <Check size={16} color="var(--color-whatsapp)" />
                <span>Immediate WhatsApp dispatch confirmation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                <Check size={16} color="var(--color-whatsapp)" />
                <span>Secure payment via bank transfer or card</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button 
                className="btn btn-whatsapp" 
                onClick={handleDirectWhatsApp}
              >
                <MessageCircle size={18} />
                <span>Order Directly via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: Spotlight Bundle Card */}
          <div className="liquid-glass-heavy" style={{
            borderRadius: 'var(--radius-lg)',
            padding: 24,
            border: '1px solid var(--glass-border)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-stone)' }}>
                Featured Express Pick
              </span>
              <span style={{
                background: 'rgba(185, 131, 117, 0.15)',
                color: 'var(--color-rose-dark)',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)'
              }}>
                {SPOTLIGHT_BUNDLE.discount}
              </span>
            </div>

            <div style={{
              aspectRatio: '16 / 10',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: 16
            }}>
              <img 
                src={SPOTLIGHT_BUNDLE.image} 
                alt={SPOTLIGHT_BUNDLE.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: 6 }}>
              {SPOTLIGHT_BUNDLE.name}
            </h3>

            <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)', marginBottom: 14 }}>
              {SPOTLIGHT_BUNDLE.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 18 }}>
              <span style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--color-obsidian)' }}>
                {`\u20A6${SPOTLIGHT_BUNDLE.price.toLocaleString()}`}
              </span>
              {SPOTLIGHT_BUNDLE.oldPrice && (
                <span style={{ fontSize: '0.92rem', textDecoration: 'line-through', color: 'var(--color-stone-light)' }}>
                  {`\u20A6${SPOTLIGHT_BUNDLE.oldPrice.toLocaleString()}`}
                </span>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <button 
                className="btn btn-glass" 
                onClick={() => onAddToCart(SPOTLIGHT_BUNDLE)}
                style={{ padding: '10px 14px', fontSize: '0.84rem' }}
              >
                <Plus size={16} />
                <span>Add to Bag</span>
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => onBuyNow(SPOTLIGHT_BUNDLE)}
                style={{ padding: '10px 14px', fontSize: '0.84rem' }}
              >
                <Zap size={16} />
                <span>Buy Now</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
