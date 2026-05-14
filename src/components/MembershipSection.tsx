import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Crown } from 'lucide-react';
import { cn } from '../lib/utils';

export const MembershipSection = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      name: { en: 'Silver Member', ar: 'العضوية الفضية' },
      price: '99',
      features: [
        { en: '10% Discount on all services', ar: 'خصم ١٠٪ على جميع الخدمات' },
        { en: 'Priority Booking', ar: 'أولوية الحجز' },
        { en: 'Birthday Gift', ar: 'هدية عيد ميلاد' },
      ],
      color: 'bg-slate-200'
    },
    {
      name: { en: 'Gold Member', ar: 'العضوية الذهبية' },
      price: '199',
      features: [
        { en: '20% Discount on all services', ar: 'خصم ٢٠٪ على جميع الخدمات' },
        { en: 'Free Monthly Blow Dry', ar: 'تجفيف شعر مجاني شهرياً' },
        { en: 'Priority Booking', ar: 'أولوية الحجز' },
        { en: 'Birthday Gift', ar: 'هدية عيد ميلاد' },
      ],
      color: 'bg-luxury-gold text-white',
      featured: true
    },
    {
      name: { en: 'VIP Royal', ar: 'العضوية الملكية VIP' },
      price: '499',
      features: [
        { en: '30% Discount on all services', ar: 'خصم ٣٠٪ على جميع الخدمات' },
        { en: 'Unlimited Blow Dries', ar: 'تجفيف شعر غير محدود' },
        { en: 'Monthly Facial treatment', ar: 'علاج الوجه شهرياً' },
        { en: 'Private Suite Access', ar: 'دخول الجناح الخاص' },
      ],
      color: 'bg-luxury-black text-white'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] font-medium mb-4 block text-luxury-gold">
            {t({ en: 'Exclusive Benefits', ar: 'مزايا حصرية' })}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif">{t({ en: 'Luxury VIP System', ar: 'نظام كبار الشخصيات الفاخر' })}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={cn(
                "p-10 rounded-[48px] flex flex-col relative overflow-hidden",
                tier.color,
                tier.featured ? "scale-105 shadow-2xl z-10" : "opacity-80"
              )}
            >
              {tier.featured && (
                <div className="absolute top-8 right-8">
                  <Crown className="w-8 h-8 opacity-20" />
                </div>
              )}
              
              <h3 className="text-2xl font-serif mb-2">{t(tier.name)}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm opacity-60">SAR</span>
                <span className="text-5xl font-serif font-bold">{tier.price}</span>
                <span className="text-sm opacity-60">/ {t({ en: 'month', ar: 'شهر' })}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-medium tracking-wide">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{t(f)}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
                tier.featured ? "bg-white text-luxury-black" : "bg-luxury-black text-white"
              )}>
                {t({ en: 'Join Membership', ar: 'انضم للعضوية' })}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
