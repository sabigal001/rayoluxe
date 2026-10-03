import React, { useState } from 'react';
import { X, Search, CheckCircle, Clock, Truck, MessageCircle } from 'lucide-react';
import { TrackingMilestone } from '../types';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [orderQuery, setOrderQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const sampleMilestones: TrackingMilestone[] = [
    {
      step: 1,
      title: 'Order Confirmed & Prepared',
      description: 'Items handpicked and placed into luxury keepsake gift box with satin ribbon.',
      time: 'Today, 09:30 AM',
      completed: true,
      current: false
    },
    {
      step: 2,
      title: 'Quality Verification Completed',
      description: 'Hypoallergenic gold purity and fragrance seal passed final inspection.',
      time: 'Today, 11:15 AM',
      completed: true,
      current: false
    },
    {
      step: 3,
      title: 'Dispatched with VIP Courier',
      description: 'In transit via GIG Logistics / Speedaf Express Doorstep Dispatch.',
      time: 'Today, 02:45 PM',
      completed: true,
      current: true
    },
    {
      step: 4,
      title: 'Out for Doorstep Delivery',
      description: 'Courier agent scheduled for delivery to your location.',
      time: 'Estimated Tomorrow',
      completed: false,
      current: false
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    setHasSearched(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-panel tracking-modal-panel liquid-glass-heavy"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 580, maxHeight: '90vh', overflowY: 'auto' }}
      >
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close tracking modal"
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div className="vip-icon-badge" style={{ margin: '0 auto 12px' }}>
            <Truck size={24} color="var(--color-champagne-dark)" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 700 }}>
            Live Order Tracking
          </h3>
          <p style={{ fontSize: '0.86rem', color: 'var(--color-stone)' }}>
            Enter your Rayo Luxe order reference or phone number to track your VIP parcel.
          </p>
        </div>

        {/* Search form */}
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-stone)' }} />
            <input 
              type="text" 
              placeholder="e.g. RL-28491 or 09155429018"
              value={orderQuery}
              onChange={(e) => setOrderQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 16px 11px 38px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--glass-border-subtle)',
                background: '#FFF',
                fontSize: '0.88rem'
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ padding: '0 20px' }}>
            <span>Track</span>
          </button>
        </form>

        {/* Results Timeline */}
        {hasSearched && (
          <div className="tracking-results-card">
            <div className="tracking-meta-header" style={{ padding: '14px 18px', background: 'rgba(197, 160, 89, 0.1)', borderRadius: 'var(--radius-md)', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-stone)' }}>Reference</span>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700 }}>{orderQuery.toUpperCase().startsWith('RL') ? orderQuery.toUpperCase() : `RL-${orderQuery.slice(-5) || '92841'}`}</h4>
              </div>
              <span className="status-pill status-in-transit">
                <Clock size={12} />
                <span>In Transit</span>
              </span>
            </div>

            <div className="tracking-timeline">
              {sampleMilestones.map((m) => (
                <div key={m.step} className={`timeline-item ${m.completed ? 'completed' : ''} ${m.current ? 'current' : ''}`}>
                  <div className="timeline-dot-wrap">
                    {m.completed ? (
                      <CheckCircle size={18} color="var(--color-champagne-dark)" fill="rgba(197,160,89,0.2)" />
                    ) : (
                      <div className="timeline-empty-dot" />
                    )}
                  </div>
                  <div className="timeline-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-obsidian)' }}>{m.title}</h5>
                      <span style={{ fontSize: '0.74rem', color: 'var(--color-stone)' }}>{m.time}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-stone)', marginTop: 2, lineHeight: 1.4 }}>{m.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, padding: 14, background: '#FFF', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--glass-border-subtle)' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-stone)', display: 'block', marginBottom: 8 }}>
                Need help with your dispatch?
              </span>
              <a 
                href={`https://wa.me/2349155429018?text=Hello%20Rayo%20Luxe%2C%20I%20am%20inquiring%20about%20order%20${encodeURIComponent(orderQuery || 'RL-92841')}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-whatsapp"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, margin: '0 auto' }}
              >
                <MessageCircle size={15} />
                <span>Contact Dispatch Manager</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
