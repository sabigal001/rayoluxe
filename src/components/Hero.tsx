import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Gift, Truck } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onExploreCollections: () => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80',
];

export const Hero: React.FC<HeroProps> = ({
  onShopNow,
  onExploreCollections
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Background with transitioning images */}
      <div className="hero-bg-layer">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Rayo Luxe Beauty ${index + 1}`}
            className={`hero-bg-image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
        <div className="hero-backdrop-gradient" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <Sparkles size={14} color="var(--color-champagne-dark)" />
          <span>Bespoke Beauty & Lifestyle</span>
        </div>

        <h1 className="hero-title">Welcome to Rayo Luxe</h1>
        
        <p className="hero-subtitle">
          Beauty, elegance and little luxuries—carefully selected for you.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onShopNow}>
            <span>Shop Now</span>
            <ArrowRight size={16} />
          </button>
          <button className="btn btn-glass" onClick={onExploreCollections}>
            <span>Explore Our Collections</span>
          </button>
        </div>

        <div className="hero-trust-bar">
          <div className="trust-item">
            <ShieldCheck size={18} color="var(--color-champagne-dark)" />
            <span>100% Authentic Quality</span>
          </div>
          <div className="trust-item">
            <Gift size={18} color="var(--color-champagne-dark)" />
            <span>Deluxe Keepsake Unboxing</span>
          </div>
          <div className="trust-item">
            <Truck size={18} color="var(--color-champagne-dark)" />
            <span>Reliable Doorstep Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
