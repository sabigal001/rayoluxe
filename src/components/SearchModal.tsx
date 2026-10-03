import React, { useState } from 'react';
import { Search, X, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddToCart
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const matches = trimmed.length > 0
    ? products.filter(p => 
        p.name.toLowerCase().includes(trimmed) || 
        p.category.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed)
      )
    : [];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="liquid-glass-heavy"
        style={{
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: 640,
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(21, 19, 18, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '18px 24px',
          borderBottom: '1px solid rgba(220, 215, 208, 0.4)'
        }}>
          <Search size={20} color="var(--color-stone-light)" />
          <input 
            type="text" 
            autoFocus
            placeholder="Search jewelry, perfumes, lip gloss, hijabs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              fontSize: '1rem',
              color: 'var(--color-obsidian)',
              fontWeight: 500
            }}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              style={{ color: 'var(--color-stone-light)' }}
            >
              <X size={18} />
            </button>
          )}
          <button className="icon-btn" onClick={onClose} aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {trimmed.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--color-stone)', padding: '48px 0', fontSize: '0.92rem' }}>
              Type any keyword to search our beauty & lifestyle catalog...
            </p>
          ) : matches.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--color-stone)', padding: '48px 0', fontSize: '0.92rem' }}>
              No items found matching "<strong>{query}</strong>". Explore our categories or ask our assistant!
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {matches.map((product) => (
                <div 
                  key={product.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: 10,
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: 52, height: 52, borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-obsidian)' }}>
                      {product.name}
                    </h4>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-champagne-dark)' }}>
                      {'\u20A6'}{product.price.toLocaleString()}
                    </span>
                  </div>

                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    style={{ padding: '8px 14px', fontSize: '0.78rem' }}
                  >
                    <ShoppingBag size={14} />
                    <span>Add</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
