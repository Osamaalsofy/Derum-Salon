import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Calendar } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-luxury-cream">
      {/* Subtle Luxury Corner Elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-luxury-gold/5 rounded-bl-full pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-white/30 blur-[120px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-[20px] uppercase tracking-[0.3em] font-semibold mb-4 block">
              {t({ en: 'Excellence in Beauty', ar: 'التميز في الجمال' })}
            </span>
            
            <h1 className="text-6xl md:text-[88px] font-serif leading-[0.9] font-light mb-8">
              {t({ en: 'Luxury Beauty', ar: 'جمال فاخر' })} <br/>
              <span className="italic text-luxury-gold">
                {t({ en: 'Experience', ar: 'تجربة' })}
              </span><br/>
              {t({ en: 'Tailored For You', ar: 'مصممة لك' })}
            </h1>

            <p className="text-sm md:text-base leading-relaxed opacity-70 max-w-sm mb-10">
              {t({ 
                en: 'Trusted by hundreds of loyal clients for over a decade. Experience the ultimate transformation in our newly renovated sanctuary.', 
                ar: 'يثق بها مئات العملاء المخلصين لأكثر من عقد. اختبري أقصى درجات التحول في ملاذنا المجدد حديثاً.' 
              })}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="luxury-button w-full sm:w-auto"
              >
                {t({ en: 'Book Now', ar: 'احجز الآن' })}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-luxury-black pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-all">
                {t({ en: 'Inquiry via WhatsApp', ar: 'استفسار عبر واتساب' })}
              </a>
            </div>

            {/* Proof Section */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-luxury-black/10">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=100',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100',
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100'
                ].map((url, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-luxury-cream bg-luxury-nude overflow-hidden">
                    <img src={url} alt="client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1 text-[10px] text-luxury-gold italic">
                  ★★★★★
                </div>
                <p className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">4.6/5 based on 800+ reviews</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content: Interactive Grid Inspo */}
        <div className="lg:col-span-7 grid grid-cols-2 grid-rows-3 gap-6 h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-1 row-span-3 bg-luxury-nude rounded-[40px] overflow-hidden relative group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute bottom-8 left-8 text-white z-20">
              <p className="text-[10px] uppercase tracking-widest mb-1 opacity-80">{t({ en: 'Signature Style', ar: 'أسلوب مميز' })}</p>
              <h3 className="text-4xl font-serif italic leading-none">{t({ en: 'Master Hair Coloring', ar: 'خبير تلوين الشعر' })}</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200" 
              alt="Salon" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <span className="text-luxury-gold text-2xl">✧</span>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-1">{t({ en: 'Specialized Facials', ar: 'علاجات الوجه المتخصصة' })}</h4>
              <p className="text-[20px] opacity-60" style={{ height: '40px', width: '209.396px' }}>{t({ en: 'HydraFacial & Skin Therapy', ar: 'هيدرا فيشيل وعلاج البشرة' })}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-luxury-black text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between"
          >
            <span className="text-luxury-gold text-2xl">✦</span>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-1">{t({ en: 'VIP Membership', ar: 'عضوية كبار الشخصيات' })}</h4>
              <p className="text-[10px] opacity-60">{t({ en: 'Priority booking & exclusive gifts', ar: 'أولوية الحجز وهدايا حصرية' })}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="col-span-1 bg-luxury-gold/10 border border-luxury-gold/20 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-luxury-nude overflow-hidden border border-luxury-gold/20">
                <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=100" alt="Hope" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-tighter opacity-50">{t({ en: 'Expert Specialist', ar: 'أخصائية خبيرة' })}</p>
                <p className="text-md italic font-serif leading-none">Hope A.</p>
              </div>
            </div>
            <p className="text-[11px] leading-tight italic opacity-80">
              "{t({ 
                en: '10+ years of returning clients. The best hairstylist in the city.', 
                ar: 'أكثر من ١٠ سنوات من العملاء العائدين. أفضل مصففة شعر في المدينة.' 
              })}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

