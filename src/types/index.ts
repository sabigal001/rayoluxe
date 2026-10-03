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
