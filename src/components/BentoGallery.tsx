import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const items = [
  { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000', size: 'tall' },
  { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000', size: 'small' },
];

export const BentoGallery = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
             <span className="text-[20px] uppercase tracking-[0.4em] font-medium mb-4 block text-luxury-gold">
              {t({ en: 'Visual Excellence', ar: 'التميز البصري' })}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif">
              {t({ en: 'Customer Transformations', ar: 'تحولات عملائنا' })}
            </h2>
          </div>
          <button className="luxury-button-outline">
            {t({ en: 'View Full Gallery', ar: 'مشاهدة المعرض الكامل' })}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 0.98 }}
              className={cn(
                "relative rounded-[40px] overflow-hidden group",
                item.size === 'large' ? "md:col-span-2 md:row-span-2" : "",
                item.size === 'tall' ? "md:row-span-2" : ""
              )}
            >
              <img 
                src={item.url} 
                alt="Salon Gallery" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                  +
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
