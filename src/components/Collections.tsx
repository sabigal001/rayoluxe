import React from 'react';
import { 
  ArrowRight, 
  Gem, 
  Flame, 
  Sparkles, 
  Layers, 
  Droplets, 
  Gift 
} from 'lucide-react';
import { ProductCategory } from '../types';

interface CollectionsProps {
  onSelectCategory: (category: ProductCategory) => void;
}

interface CollectionMeta {
  id: ProductCategory;
  name: string;
  tag: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  const collections: CollectionMeta[] = [
    {
      id: 'jewelry',
      name: 'Fine Jewelry',
      tag: 'Timeless & Pure',
      desc: 'Delicate 18k gold chains, minimalist rings, and pearl accents made to sparkle with effortless grace.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      icon: <Gem size={20} color="var(--color-champagne-dark)" />
    },
    {
      id: 'perfumes',
      name: 'Perfumes & Oils',
      tag: 'Eau de Parfum & Attar',
      desc: 'Captivating French fragrances and alcohol-free concentrated perfume oils featuring royal jasmine, golden oud, and bourbon vanilla.',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
      icon: <Flame size={20} color="var(--color-champagne-dark)" />
    },
    {
      id: 'lipgloss',
      name: 'Lip Care & Gloss',
      tag: 'Cushion Shine',
      desc: 'Hydrating botanical oils and glass-finish glosses infused with hyaluronic acid for plump, radiant lips.',
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles size={20} color="var(--color-champagne-dark)" />
    },
    {
      id: 'hijabs',
      name: 'Hijabs & Hair Scarves',
      tag: 'Silk, Modal & Chiffon',
      desc: 'Breathable modal silks, textured chiffon, and 100% pure mulberry silk hair wraps designed to protect hair and elevate styling.',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
      icon: <Layers size={20} color="var(--color-champagne-dark)" />
    },
    {
      id: 'skincare',
      name: 'Skincare & CeraVe',
      tag: 'Ceramides & Botanicals',
      desc: 'Authentic CeraVe dermatologist cleansers and creams paired with organic rosehip oils to nourish and restore your skin barrier.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      icon: <Droplets size={20} color="var(--color-champagne-dark)" />
    },
    {
      id: 'packages',
      name: 'Gift Hampers',
      tag: 'Curated Sets',
      desc: 'Thoughtfully assembled luxury beauty packages nestled in signature gift boxes with satin ribbons.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
      icon: <Gift size={20} color="var(--color-champagne-dark)" />
    }
  ];

  return (
    <section className="collections-section" id="collections" style={{ padding: '96px 0' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={14} />
            <span>Discover The Range</span>
          </span>
          <h2 className="section-title">Shop Our Collections</h2>
          <p className="section-desc">
            Handpicked essentials designed to enhance your daily elegance, poise, and personal radiance.
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((item) => (
            <article key={item.id} className="collection-card liquid-glass">
              <div className="collection-img-box">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="collection-tag">{item.tag}</span>
              </div>
              <div className="collection-body">
                <div style={{ marginBottom: 10 }}>{item.icon}</div>
                <h3 className="collection-name">{item.name}</h3>
                <p className="collection-text">{item.desc}</p>
                <button
                  className="btn btn-glass"
                  onClick={() => onSelectCategory(item.id)}
                  style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.84rem' }}
                >
                  <span>Shop Collection</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
