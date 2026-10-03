import React from 'react';
import { Heart } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section className="about-section" id="about" style={{ padding: '96px 0' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 56,
          alignItems: 'center'
        }}>
          
          {/* Framed Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--glass-shadow-hover)',
              border: '1px solid var(--glass-border)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" 
                alt="Rayo Luxe Philosophy"
                style={{ width: '100%', height: 460, objectFit: 'cover' }}
              />
            </div>

            <div className="liquid-glass-heavy" style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              padding: '14px 22px',
              borderRadius: 'var(--radius-md)'
            }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
                Founded with Love
              </span>
              <div className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-rose-dark)' }}>
                Elegance For Every Day
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="section-eyebrow">
              <Heart size={14} />
              <span>Our Story</span>
            </span>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 18 }}>
              The Heart Behind Rayo Luxe
            </h2>

            <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--color-obsidian)', lineHeight: 1.6, marginBottom: 18 }}>
              Rayo Luxe was born from a simple belief: every woman deserves to experience little everyday luxuries without friction, pretension, or compromise.
            </p>

            <p style={{ fontSize: '0.96rem', color: 'var(--color-stone)', lineHeight: 1.7, marginBottom: 18 }}>
              Whether it’s the quiet confidence of a fine gold chain against your skin, the mood-lifting elegance of a floral French perfume, a radiant swipe of botanical lip gloss, or the graceful drape of a breathable modal hijab—our curated pieces are selected to bring beauty and calm poise into your day.
            </p>

            <p style={{ fontSize: '0.96rem', color: 'var(--color-stone)', lineHeight: 1.7, marginBottom: 28 }}>
              We treat every single parcel as a personal gift: wrapped in soft tissue, tied with satin ribbon, and dispatched with love straight to your door.
            </p>

            <div style={{
              borderTop: '1px solid rgba(220, 215, 208, 0.6)',
              paddingTop: 20
            }}>
              <div className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-obsidian)' }}>
                Rayo Luxe Curators
              </div>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-champagne-dark)' }}>
                Beauty & Lifestyle Boutique
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
