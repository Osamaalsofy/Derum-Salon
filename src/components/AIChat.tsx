import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Send, X, MessageCircle, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

export const AIChat = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { 
      role: 'bot', 
      text: language === 'ar' ? 'مرحباً! أنا مستشارك الذكي للجمال في صالون ديوم. كيف يمكنني مساعدتك اليوم؟' : 'Hello! I am your AI Beauty Consultant at Derum Salon. How can I help you today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const apiKey = typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : undefined;
      
      if (!apiKey) {
        throw new Error('API Key missing');
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are a professional luxury beauty consultant for Derum Salon. Provide expert advice on hair, skin, and styling. Mention our specialists like Hope (Hair), Abir (Styling), Rose (Nails), and Messho (Skin) when relevant. Keep it elegant and helpful. The user's language is ${language}. User says: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are an elite beauty consultant at Derum Salon, a premium women's salon. Your tone is sophisticated, welcoming, and professional. You help with beauty tips, service recommendations, and general styling advice. You represent the height of luxury beauty standards in Saudi Arabia."
        }
      });

      const botResponse = response.text || (language === 'ar' ? 'عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً.' : 'Sorry, something went wrong. Please try again later.');
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: language === 'ar' ? 'عذراً، المساعد الذكي غير متاح حالياً.' : 'Sorry, the AI assistant is currently unavailable.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-luxury-black text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-luxury-gold transition-colors duration-500"
      >
        <Sparkles className="w-8 h-8" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] glass-card rounded-[40px] shadow-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-luxury-black text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-none">{t({ en: 'AI Consultant', ar: 'المستشار الذكي' })}</h3>
                  <span className="text-[8px] uppercase tracking-widest opacity-60">Derum Luxury Intelligence</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 custom-scrollbar bg-luxury-cream/30">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "flex items-end gap-2",
                  m.role === 'user' ? "flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    m.role === 'user' ? "bg-luxury-gold" : "bg-luxury-black"
                  )}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Sparkles className="w-4 h-4 text-white" />}
                  </div>
                  <div className={cn(
                    "max-w-[75%] p-4 rounded-3xl text-sm leading-relaxed",
                    m.role === 'user' ? "bg-luxury-gold text-white rounded-br-none" : "bg-white text-luxury-black shadow-sm rounded-bl-none"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-luxury-black rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-sm italic text-xs text-gray-400">
                    AI is thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-luxury-cream">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t({ en: 'Ask our AI beauty assistant...', ar: 'اسأل مساعد الجمال الذكي...' })}
                  className="w-full p-4 pr-14 rounded-full bg-luxury-black/5 border-none focus:ring-2 focus:ring-luxury-gold text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 top-2 w-10 h-10 bg-luxury-black text-white rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors disabled:opacity-30"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
