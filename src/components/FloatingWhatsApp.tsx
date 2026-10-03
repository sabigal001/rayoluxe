import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="orbital-whatsapp">
      {/* Orbital ring lines */}
      <div className="orbital-ring orbital-ring-1" />
      <div className="orbital-ring orbital-ring-2" />
      <div className="orbital-dot orbital-dot-1" />
      <div className="orbital-dot orbital-dot-2" />
      <div className="orbital-dot orbital-dot-3" />
      
      <a 
        href="https://wa.me/2349155429018?text=Hello%20Rayo%20Luxe%2C%20I%20would%20like%20to%20make%20an%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Direct WhatsApp Concierge"
      >
        <MessageCircle size={24} color="#FFF" />
      </a>
    </div>
  );
};
