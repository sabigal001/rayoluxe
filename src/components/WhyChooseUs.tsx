import React from 'react';
import { 
  Sparkles, 
  Gem, 
  Package, 
  MessageSquareHeart, 
  Truck, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const promises = [
    {
      icon: <Sparkles size={24} color="var(--color-champagne-dark)" />,
      title: 'Carefully Selected Products',
      desc: 'Every piece in our boutique is individually inspected for beauty, skin-safety, and timeless longevity.'
    },
    {
      icon: <Gem size={24} color="var(--color-champagne-dark)" />,
      title: 'Quality and Elegance',
      desc: 'From non-tarnish 18k gold jewelry to authentic French fragrance oils, we never compromise on craftsmanship.'
    },
    {
      icon: <Package size={24} color="var(--color-champagne-dark)" />,
      title: 'Neat Luxury Packaging',
      desc: 'Unboxing should feel like a personal celebration. All orders arrive beautifully boxed with satin ribbons and cards.'
    },
    {
      icon: <MessageSquareHeart size={24} color="var(--color-champagne-dark)" />,
      title: 'Friendly Customer Service',
      desc: 'We answer with genuine warmth. Reach our founder and team anytime through WhatsApp or live chat.'
    },
    {
      icon: <Truck size={24} color="var(--color-champagne-dark)" />,
      title: 'Reliable Doorstep Delivery',
      desc: 'Prompt, protected dispatches with live updates so your treasures arrive in immaculate condition.'
    },
    {
      icon: <HeartHandshake size={24} color="var(--color-champagne-dark)" />,
      title: 'Customer Satisfaction',
      desc: 'Your joy is our measure of success. If anything isn’t exactly as envisioned, we resolve it without hesitation.'
    }
  ];

  return (
    <section className="what-to-expect-section" id="what-to-expect" style={{ padding: '96px 0' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            <span>The Rayo Luxe Promise</span>
          </span>
          <h2 className="section-title">What You Should Expect From Us</h2>
          <p className="section-desc">
            Our unyielding commitment to every woman is uncompromising quality, personal warmth, and unforgettable elegance.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24
        }}>
          {promises.map((item, index) => (
            <div 
              key={index} 
              className="liquid-glass" 
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '36px 28px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: 60,
                height: 60,
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                boxShadow: 'var(--glass-shadow)',
                border: '1px solid var(--glass-border-subtle)'
              }}>
                {item.icon}
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: 10 }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--color-stone)', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
