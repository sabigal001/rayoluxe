import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="testimonials-section" style={{ padding: '80px 0', background: 'var(--bg-surface)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: 48 }}>
          <span className="section-eyebrow">
            <Sparkles size={14} color="var(--color-champagne-dark)" />
            <span>Verified Luxury Experiences</span>
          </span>
          <h2 className="section-title">Words from Our Discerning Clientele</h2>
          <p className="section-desc">
            Discover why beauty enthusiasts and collectors across Nigeria choose Rayo Luxe for daily luxury and bespoke gifting.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="testimonial-card-wrap">
          <div className="testimonial-card liquid-glass-heavy">
            <div className="quote-mark">
              <Quote size={40} color="var(--color-champagne)" />
            </div>

            {/* Stars */}
            <div className="stars-row" style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="var(--color-champagne)" color="var(--color-champagne)" />
              ))}
            </div>

            {/* Review text */}
            <p className="testimonial-quote">
              "{current.review}"
            </p>

            {/* Product Purchased Tag */}
            <div className="testimonial-product-tag">
              <span>Verified Purchase: <strong>{current.productName}</strong></span>
            </div>

            {/* Client Info */}
            <div className="testimonial-author-row">
              <img 
                src={current.avatar} 
                alt={current.name} 
                className="testimonial-avatar"
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-obsidian)' }}>
                    {current.name}
                  </h4>
                  {current.verified && (
                    <span className="verified-badge-pill" title="Verified Customer">
                      <ShieldCheck size={12} color="#1EBE5D" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-stone)' }}>
                  {current.city} • {current.date}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="testimonial-nav-arrows">
              <button 
                onClick={prevReview} 
                className="testimonial-arrow-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="testimonial-dots">
                {TESTIMONIALS.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`testimonial-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
              <button 
                onClick={nextReview} 
                className="testimonial-arrow-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
