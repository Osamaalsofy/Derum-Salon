import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

export const ReviewSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-luxury-nude/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
             <span className="text-[10px] uppercase tracking-[0.4em] font-medium mb-4 block text-luxury-gold">
              {t({ en: 'Testimonials', ar: 'شهادات العملاء' })}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif">{t({ en: 'Real Experiences', ar: 'تجارب حقيقية' })}</h2>
          </div>
          <a 
            href="https://maps.app.goo.gl/m229jqE5YFZA8vUX7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="luxury-button-outline"
          >
            {t({ en: 'Review us on Google', ar: 'قيمنا على جوجل' })}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-10 rounded-[40px] relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-luxury-black/5 -rotate-12 transition-transform group-hover:rotate-0" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < review.rating ? "fill-luxury-gold text-luxury-gold" : "text-gray-300")} />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                "{t(review.content)}"
              </p>

              <div className="flex items-center justify-between border-t border-luxury-black/5 pt-8">
                <div>
                  <div className="font-bold text-sm tracking-widest uppercase">{review.author}</div>
                  <div className="text-[10px] uppercase opacity-40 mt-1">{t({ en: 'Verified Client', ar: 'عميل معتمد' })}</div>
                </div>
                <div className="text-[10px] uppercase opacity-30 font-bold">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* repeated praise highlights */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex gap-8 animate-scroll-text whitespace-nowrap">
            {[
              "Hope is the best hairstylist",
              "Abir is highly professional",
              "Amazing nail work by Rose",
              "Messho is the best skin therapist",
              "Clients returning for 10+ years",
              "Excellent hair coloring",
              "Luxury service with great prices"
            ].map((praise, i) => (
              <span key={i} className="text-3xl font-serif text-luxury-gold/30 uppercase tracking-tighter">
                {praise} •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
