import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Send } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string, type: 'success' | 'info') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(`Thank you, ${formData.name}! Your message has been sent. We will reply shortly.`, 'success');
    setFormData({ name: '', email: '', topic: 'Product Enquiry', message: '' });
  };

  return (
    <section className="contact-section" id="contact" style={{ padding: '96px 0' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">
            <Mail size={14} />
            <span>We Are Here For You</span>
          </span>
          <h2 className="section-title">Contact & Support</h2>
          <p className="section-desc">
            Have a question regarding product care, shade recommendations, or bespoke hampers? Our concierge team is ready to assist.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 40
        }}>
          
          {/* Support Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            
            <div className="liquid-glass" style={{ borderRadius: 'var(--radius-md)', padding: 26, display: 'flex', gap: 18 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-full)',
                background: 'rgba(30, 190, 93, 0.12)',
                color: 'var(--color-whatsapp)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MessageCircle size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: 4 }}>WhatsApp Concierge</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)', marginBottom: 8 }}>
                  Fast answers, shade matching, and custom gift package inquiries.
                </p>
                <a 
                  href="https://wa.me/2349155429018?text=Hello%20Rayo%20Luxe%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-whatsapp)', fontWeight: 700, fontSize: '0.88rem' }}
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>

            <div className="liquid-glass" style={{ borderRadius: 'var(--radius-md)', padding: 26, display: 'flex', gap: 18 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-full)',
                background: 'rgba(197, 160, 89, 0.12)',
                color: 'var(--color-champagne-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: 4 }}>Email Support</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)', marginBottom: 8 }}>
                  For wholesale orders, event packages, or press inquiries.
                </p>
                <a 
                  href="mailto:masturohalabi@gmail.com"
                  style={{ color: 'var(--color-champagne-dark)', fontWeight: 700, fontSize: '0.88rem' }}
                >
                  masturohalabi@gmail.com
                </a>
              </div>
            </div>

            <div className="liquid-glass" style={{ borderRadius: 'var(--radius-md)', padding: 26, display: 'flex', gap: 18 }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-full)',
                background: 'rgba(185, 131, 117, 0.12)',
                color: 'var(--color-rose-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Clock size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: 4 }}>Boutique Hours</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-stone)' }}>
                  Monday – Saturday: 9:00 AM – 8:00 PM
                </p>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-whatsapp)', fontWeight: 600 }}>
                  Online Store Open 24/7
                </span>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="liquid-glass-heavy" style={{ borderRadius: 'var(--radius-lg)', padding: 'clamp(24px, 4vw, 36px)' }}>
            <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 20 }}>
              Send Us a Quick Note
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Masturoh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
                  Email or WhatsApp Number
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. yourname@gmail.com or +123..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.92rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
                  Topic
                </label>
                <select 
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.92rem'
                  }}
                >
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Custom Gift Package">Custom Gift Package</option>
                  <option value="Delivery Question">Delivery Question</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6 }}>
                  Your Message
                </label>
                <textarea 
                  rows={4}
                  required
                  placeholder="How can we assist you today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.92rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
