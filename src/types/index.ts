export type ProductCategory = 
  | 'all' 
  | 'jewelry' 
  | 'perfumes' 
  | 'lipgloss' 
  | 'hijabs' 
  | 'skincare' 
  | 'packages';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  inStock?: number;
  badge?: string;
  specs?: string[];
  notes?: {
    top?: string;
    heart?: string;
    base?: string;
  };
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'info';
}

export interface OrderDetails {
  name: string;
  phone: string;
  address: string;
  payment: string;
}

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  productName: string;
  review: string;
  verified: boolean;
  avatar: string;
}

export interface TrackingMilestone {
  step: number;
  title: string;
  description: string;
  time: string;
  completed: boolean;
  current: boolean;
}
