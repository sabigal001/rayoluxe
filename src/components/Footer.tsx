import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigate: (sectionId: string) => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigate,
  onOpenCart
}) => {
  return (
    <footer style={{
      background: 'var(--color-obsidian)',
      color: '#FAF7F2',
      padding: '80px 0 32px 0',
      borderTop: '1px solid rgba(197, 160, 89, 0.2)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
          marginBottom: 60
        }}>
          
          {/* Brand Column */}
          <div style={{ maxWidth: 320 }}>
            <span className="brand-title" style={{ color: '#FFF', fontSize: '1.75rem', display: 'block', marginBottom: 6 }}>
              RAYO LUXE
            </span>
            <p className="font-serif" style={{ color: 'var(--color-champagne-light)', fontStyle: 'italic', fontSize: '0.94rem', marginBottom: 14 }}>
              "Beauty, elegance and little luxuries."
            </p>
            <p style={{ fontSize: '0.86rem', color: '#9E948B', lineHeight: 1.6, marginBottom: 20 }}>
              Your sanctuary for fine gold jewelry, bespoke French fragrances, hydrating lip glosses, premium hijabs, and curated beauty hampers.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a 
                href="https://wa.me/2349155429018?text=Hello%20Rayo%20Luxe!"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(30, 190, 93, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-whatsapp)',
                  fontSize: '0.82rem',
                  fontWeight: 700
                }}
              >
                WA
              </a>
              <a 
                href="mailto:masturohalabi@gmail.com"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(197, 160, 89, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-champagne-light)',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}
              >
                @
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: 18, letterSpacing: '0.04em' }}>
              Shop
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => { onSelectCategory('jewelry'); onNavigate('featured-products'); }} style={{ color: '#BDB3A9' }}>
                  Fine Jewelry
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('perfumes'); onNavigate('featured-products'); }} style={{ color: '#BDB3A9' }}>
                  French Perfumes
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('lipgloss'); onNavigate('featured-products'); }} style={{ color: '#BDB3A9' }}>
                  Lip Gloss & Oils
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('hijabs'); onNavigate('featured-products'); }} style={{ color: '#BDB3A9' }}>
                  Modal Hijabs
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('skincare'); onNavigate('featured-products'); }} style={{ color: '#BDB3A9' }}>
                  Glow Skincare
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('packages'); onNavigate('featured-products'); }} style={{ color: '#BDB3A9' }}>
                  Gift Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Column */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: 18, letterSpacing: '0.04em' }}>
              Customer
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem' }}>
              <li><button onClick={() => onNavigate('contact')} style={{ color: '#BDB3A9' }}>Contact Us</button></li>
              <li><button onClick={() => onNavigate('ready-to-purchase')} style={{ color: '#BDB3A9' }}>Ready to Purchase</button></li>
              <li><button onClick={() => onNavigate('discounts')} style={{ color: '#BDB3A9' }}>Discounts & Offers</button></li>
              <li><button onClick={onOpenCart} style={{ color: '#BDB3A9' }}>My Shopping Bag</button></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: 18, letterSpacing: '0.04em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.88rem' }}>
              <li><button onClick={() => onNavigate('about')} style={{ color: '#BDB3A9' }}>About Us</button></li>
              <li><button onClick={() => onNavigate('what-to-expect')} style={{ color: '#BDB3A9' }}>What You Should Expect</button></li>
              <li>
                <a href="https://wa.me/2349155429018?text=Hello%20Rayo%20Luxe%2C%20I%20would%20like%20to%20partner%20with%20you." target="_blank" rel="noopener noreferrer" style={{ color: '#BDB3A9' }}>
                  Partnerships & Wholesale
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: '0.8rem',
          color: '#827870'
        }}>
          <p>
            &copy; {new Date().getFullYear()} <strong>RAYO LUXE</strong>. All Rights Reserved. Crafted with elegance for your beauty & lifestyle.
          </p>

          <div style={{ display: 'flex', gap: 18 }}>
            <span>Direct Bank Transfer</span>
            <span>Payment On Delivery</span>
            <span>WhatsApp Ordering</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
