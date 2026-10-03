import React from 'react';
import { ShoppingBag, Zap, Star, Sparkles } from 'lucide-react';
import { Product, ProductCategory } from '../types';

interface ProductGridProps {
  products: Product[];
  activeFilter: ProductCategory;
  onFilterChange: (filter: ProductCategory) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activeFilter,
  onFilterChange,
  onAddToCart,
  onBuyNow
}) => {
  const filterTabs: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'jewelry', label: 'Jewelry' },
    { id: 'perfumes', label: 'Perfumes' },
    { id: 'lipgloss', label: 'Lip Gloss' },
    { id: 'hijabs', label: 'Hijabs' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'packages', label: 'Packages' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="products-section" id="featured-products" style={{ padding: '96px 0' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            <span>Customer Favorites</span>
          </span>
          <h2 className="section-title">Bestselling Products</h2>
          <p className="section-desc">
            Our most-loved beauty and lifestyle pieces, crafted for exceptional durability and timeless elegance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="products-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-tab ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => onFilterChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="product-card liquid-glass">
              
              <div className="product-img-box">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.discount && (
                  <span className="product-discount-badge">{product.discount}</span>
                )}
              </div>

              <div className="product-details">
                <span className="product-cat-name">{product.categoryLabel}</span>
                <h3 className="product-title">{product.name}</h3>

                {/* Rating */}
                <div className="product-stars">
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill={i < Math.floor(product.rating) ? 'var(--color-champagne)' : 'none'}
                        color="var(--color-champagne)"
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.74rem', color: 'var(--color-stone)', marginLeft: 4 }}>
                    ({product.reviews})
                  </span>
                </div>

                {/* Price Row */}
                <div className="product-price-row">
                  <span className="product-price">{'\u20A6'}{product.price.toLocaleString()}</span>
                  {product.oldPrice && (
                    <span className="product-old-price">{'\u20A6'}{product.oldPrice.toLocaleString()}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="product-buttons">
                  <button 
                    className="btn-add-bag" 
                    onClick={() => onAddToCart(product)}
                  >
                    <ShoppingBag size={14} />
                    <span>Add to Bag</span>
                  </button>
                  <button 
                    className="btn-buy-now" 
                    onClick={() => onBuyNow(product)}
                  >
                    <Zap size={14} />
                    <span>Buy Now</span>
                  </button>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
