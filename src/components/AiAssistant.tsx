import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X } from 'lucide-react';
import { AiChatMessage } from '../types';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<AiChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello, welcome to Rayo Luxe. I am your personal shopping assistant. Tap any question below or type your inquiry.',
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    'What products do you sell?',
    'How do I place an order?',
    'How do I contact Rayo Luxe?',
    'Do you deliver?',
    'How can I check my cart?',
    'How do I get discounts?',
    'How can I purchase a product?'
  ];

  const getKnowledgeResponse = (text: string): string => {
    const lower = text.toLowerCase();

    if (lower.includes('what products') || lower.includes('sell') || lower.includes('items') || lower.includes('collection') || lower.includes('cerave') || lower.includes('scarf') || lower.includes('oil')) {
      return `At Rayo Luxe, we curate exceptional everyday luxuries:
• Fine Jewelry: Non-tarnish 18k gold chains, rings & freshwater pearl pendants
• French Perfumes & Oils: Royal jasmine, Golden Oud royal perfume oil (12ml) & Tahitian Vanilla musk roll-on
• Lip Care: Non-sticky cushion glosses & botanical lip oils
• Hijabs & Hair Scarves: Modal silk scarves & 100% pure Mulberry silk hair wraps
• Skincare & CeraVe: Authentic CeraVe Hydrating Cleanser, Moisturizing Cream & Lotion, alongside organic rosehip face oils
• Curated Gift Sets: Pre-curated unboxing hampers in satin-tied gift boxes`;
    }

    if (lower.includes('how do i place an order') || lower.includes('order') || lower.includes('purchase')) {
      return `Ordering is effortless:
1. Select your desired items and add them to your shopping bag.
2. Open your bag on the top right.
3. Tap "Complete Order via WhatsApp" for instant confirmation, or "Proceed to Checkout" to provide your delivery address!`;
    }

    if (lower.includes('contact') || lower.includes('reach') || lower.includes('support')) {
      return `You can connect with us directly:
• WhatsApp: Tap the green WhatsApp button at the bottom left or call 09155429018.
• Email: masturohalabi@gmail.com
• Concierge Hours: Monday through Saturday, 9:00 AM – 8:00 PM.`;
    }

    if (lower.includes('deliver') || lower.includes('shipping') || lower.includes('dispatch')) {
      return `We provide reliable door-to-door delivery.
• Standard Dispatches: 1 to 3 business days.
• Free Delivery: Enjoy complimentary luxury delivery on all orders of ₦40,000 and above!`;
    }

    if (lower.includes('cart') || lower.includes('bag')) {
      return `You can view your items at any time by clicking the shopping bag icon on the top right. Inside, you can adjust quantities, apply promo codes, or proceed to express checkout.`;
    }

    if (lower.includes('discount') || lower.includes('promo') || lower.includes('coupon') || lower.includes('code')) {
      return `Enjoy 15% OFF your entire order with code RAYOLUXE15! Plus, orders over \u20A640,000 receive complimentary delivery and a deluxe botanical lip oil sample.`;
    }

    return `Thank you for your question! I am here to help you select the ideal fine jewelry, perfumes, or beauty gifts at Rayo Luxe. You can ask about our delivery timelines, promo codes, or chat directly with our founder on WhatsApp for custom orders.`;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: AiChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getKnowledgeResponse(text);
      const botMsg: AiChatMessage = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: botResponse,
        timestamp: 'Just now'
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="floating-ai">
      {/* Orbital planet decoration */}
      <div className="orbital-ring orbital-ring-1" />
      <div className="orbital-ring orbital-ring-2" />
      <div className="orbital-dot orbital-dot-1" />
      <div className="orbital-dot orbital-dot-2" />
      <div className="orbital-dot orbital-dot-3" />

      {/* Floating Toggle Button */}
      <button 
        className="ai-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Rayo Luxe Concierge Assistant"
      >
        <Sparkles size={22} color="var(--color-champagne-light)" />
      </button>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div 
          className="liquid-glass-heavy"
          style={{
            position: 'fixed',
            bottom: 96,
            left: 28,
            width: 360,
            maxWidth: 'calc(100vw - 40px)',
            height: 520,
            maxHeight: 'calc(100vh - 130px)',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(21, 19, 18, 0.28)',
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            background: 'var(--color-obsidian)',
            color: '#FAF7F2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 34,
                height: 34,
                borderRadius: 'var(--radius-full)',
                background: 'rgba(197, 160, 89, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={16} color="var(--color-champagne-light)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 700, lineHeight: 1.2 }}>Rayo Luxe Concierge</h4>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-champagne-light)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-whatsapp)' }} />
                  Online • Fast Replies
                </span>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              style={{ color: '#D4CDC5' }}
              aria-label="Close Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Stream */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            background: 'rgba(250, 247, 242, 0.6)'
          }}>
            {messages.map((m) => (
              <div 
                key={m.id}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.86rem',
                  lineHeight: 1.5,
                  background: m.sender === 'user' ? 'var(--color-obsidian)' : '#FFF',
                  color: m.sender === 'user' ? '#FAF7F2' : 'var(--color-obsidian)',
                  border: m.sender === 'bot' ? '1px solid var(--glass-border)' : 'none',
                  whiteSpace: 'pre-line',
                  boxShadow: 'var(--glass-shadow)'
                }}
              >
                {m.text}
              </div>
            ))}

            {isTyping && (
              <div style={{
                alignSelf: 'flex-start',
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8rem',
                color: 'var(--color-stone)',
                background: '#FFF',
                fontStyle: 'italic',
                border: '1px solid var(--glass-border)'
              }}>
                Rayo Luxe Concierge is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div style={{
            padding: '8px 12px',
            background: '#FFF',
            borderTop: '1px solid rgba(220, 215, 208, 0.4)',
            display: 'flex',
            gap: 6,
            overflowX: 'auto',
            scrollbarWidth: 'none'
          }}>
            {quickPrompts.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                style={{
                  flexShrink: 0,
                  background: 'var(--bg-canvas)',
                  border: '1px solid var(--glass-border)',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'var(--color-charcoal)'
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(inputVal); }}
            style={{
              padding: '10px 14px',
              background: '#FFF',
              borderTop: '1px solid rgba(220, 215, 208, 0.4)',
              display: 'flex',
              gap: 8,
              alignItems: 'center'
            }}
          >
            <input 
              type="text" 
              placeholder="Ask about perfumes, delivery, orders..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-canvas)',
                fontSize: '0.86rem',
                border: '1px solid var(--glass-border)'
              }}
            />
            <button 
              type="submit" 
              style={{
                width: 36,
                height: 36,
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-obsidian)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Send Message"
            >
              <Send size={15} />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
