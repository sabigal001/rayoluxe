import React from 'react';
import { 
  Sparkles, 
  Gem, 
  Flame, 
  Droplets, 
  Layers, 
  Gift 
} from 'lucide-react';
import { ProductCategory } from '../types';

interface CategoryNavProps {
  activeCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

interface CategoryItem {
  id: ProductCategory;
  label: string;
  icon: React.ReactNode;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  const categories: CategoryItem[] = [
    { id: 'all', label: 'All Items', icon: <Sparkles size={16} strokeWidth={1.8} /> },
    { id: 'jewelry', label: 'Jewelry Store', icon: <Gem size={16} strokeWidth={1.8} /> },
    { id: 'perfumes', label: 'Perfume Store', icon: <Flame size={16} strokeWidth={1.8} /> },
    { id: 'lipgloss', label: 'Lipgloss Store', icon: <Sparkles size={16} strokeWidth={1.8} /> },
    { id: 'hijabs', label: 'Hijabs Store', icon: <Layers size={16} strokeWidth={1.8} /> },
    { id: 'skincare', label: 'Skincare Store', icon: <Droplets size={16} strokeWidth={1.8} /> },
    { id: 'packages', label: 'Packages', icon: <Gift size={16} strokeWidth={1.8} /> }
  ];

  return (
    <nav className="category-nav-bar" aria-label="Category Navigation">
      <div className="container">
        <div className="category-scroll">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
