import React, { useState, useEffect } from 'react';
import { Tag, Copy, Check, Clock, Gift, Percent, ArrowRight } from 'lucide-react';

interface DiscountsProps {
  onShopDiscounted: () => void;
  onApplyCoupon: (code: string) => void;
  onShowToast: (msg: string, type: 'success' | 'info') => void;
}

export const Discounts: React.FC<DiscountsProps> = ({
  onShopDiscounted,
  onApplyCoupon,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 45, seconds: 30 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 24, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    const code = 'RAYOLUXE15';
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      onApplyCoupon(code);
      onShowToast('Promo code RAYOLUXE15 copied & applied to your bag!', 'success');
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      onApplyCoupon(code);
      onShowToast('Promo code RAYOLUXE15 applied to your bag!', 'success');
    });
  };

  return (
    <section className="discounts-section" id="discounts" style={{ padding: '96px 0' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">
            <Tag size={14} />
            <span>Exclusive Opportunities</span>
          </span>
          <h2 className="section-title">Something Special For You</h2>
          <p className="section-desc">
            Take advantage of current promotions, seasonal bundles, and introductory gift codes.
          </p>
        </div>

        {/* Promo Main Banner */}
        <div className="liquid-glass" style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          boxShadow: 'var(--glass-shadow)',
          marginBottom: 32
        }}>
          
          <div style={{ padding: 'clamp(28px, 5vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(185, 131, 117, 0.15)',
              color: 'var(--color-rose-dark)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: 'var(--radius-full)',
              marginBottom: 16,
              width: 'fit-content'
            }}>
              <Percent size={12} />
              <span>Limited Time Offer</span>
            </span>

            <h3 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: 12 }}>
              15% Off Your Entire Order
            </h3>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-stone)', marginBottom: 24, lineHeight: 1.55 }}>
              Enjoy our introductory storewide discount on all fine jewelry, French fragrances, lip care, and curated beauty hampers.
            </p>

            {/* Coupon Box */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px dashed var(--color-champagne)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 18px',
              marginBottom: 24,
              width: 'fit-content',
              flexWrap: 'wrap'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-stone)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Coupon Code
                </span>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-obsidian)' }}>
                  RAYOLUXE15
                </span>
              </div>

              <button 
                className="btn btn-primary" 
                onClick={handleCopyCode}
                style={{ padding: '8px 18px', fontSize: '0.8rem' }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Applied!' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Countdown Timer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.84rem', color: 'var(--color-stone)', fontWeight: 600 }}>
                <Clock size={16} />
                <span>Ends in:</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.85)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', textAlign: 'center', minWidth: 46 }}>
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-obsidian)', lineHeight: 1 }}>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <small style={{ fontSize: '0.62rem', color: 'var(--color-stone)', textTransform: 'uppercase' }}>Hours</small>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.85)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', textAlign: 'center', minWidth: 46 }}>
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-obsidian)', lineHeight: 1 }}>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <small style={{ fontSize: '0.62rem', color: 'var(--color-stone)', textTransform: 'uppercase' }}>Mins</small>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.85)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', textAlign: 'center', minWidth: 46 }}>
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-obsidian)', lineHeight: 1 }}>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <small style={{ fontSize: '0.62rem', color: 'var(--color-stone)', textTransform: 'uppercase' }}>Secs</small>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              onClick={onShopDiscounted}
              style={{ alignSelf: 'flex-start' }}
            >
              <span>Shop Discounted Products</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Image */}
          <div style={{ position: 'relative', minHeight: 320, background: 'var(--bg-surface)' }}>
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Cosmetics Promotion"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-full)',
              width: 90,
              height: 90,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--glass-shadow)',
              border: '1px solid var(--glass-border)'
            }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-rose-dark)', letterSpacing: '0.1em' }}>
                SAVE
              </span>
              <strong style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-obsidian)', lineHeight: 1 }}>
                15%
              </strong>
            </div>
          </div>

        </div>

        {/* Perks Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20
        }}>
          <div className="liquid-glass" style={{ borderRadius: 'var(--radius-md)', padding: 22, display: 'flex', gap: 16 }}>
            <Gift size={24} color="var(--color-champagne-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, marginBottom: 4 }}>Free Gift On Orders Over {'\u20A6'}40,000</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-stone)', lineHeight: 1.45 }}>
                Complimentary rose gold botanical lip gloss added automatically to your package.
              </p>
            </div>
          </div>

          <div className="liquid-glass" style={{ borderRadius: 'var(--radius-md)', padding: 22, display: 'flex', gap: 16 }}>
            <Percent size={24} color="var(--color-champagne-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, marginBottom: 4 }}>Bundle & Save More</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-stone)', lineHeight: 1.45 }}>
                Enjoy an extra 10% reduction when purchasing any two perfume or jewelry items together.
              </p>
            </div>
          </div>

          <div className="liquid-glass" style={{ borderRadius: 'var(--radius-md)', padding: 22, display: 'flex', gap: 16 }}>
            <Clock size={24} color="var(--color-champagne-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, marginBottom: 4 }}>Stay Tuned</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-stone)', lineHeight: 1.45 }}>
                New seasonal boutique drops released monthly. Follow us on Instagram for early access.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
