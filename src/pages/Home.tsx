import React from 'react';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { ServiceCard, SpecialistCard } from '../components/Cards';
import { SERVICES, SPECIALISTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { BookingSystem } from '../components/BookingSystem';
import { ReviewSection } from '../components/ReviewSection';
import { BentoGallery } from '../components/BentoGallery';
import { MembershipSection } from '../components/MembershipSection';
import { Footer } from '../components/Footer';
import { AIChat } from '../components/AIChat';
import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';

export const Home = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <Navbar />
      <Hero />

      {/* Featured Services */}
      <section className="py-24 px-6 bg-white overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
               <span className="text-[20px] uppercase tracking-[0.4em] font-medium mb-4 block text-luxury-gold">
                {t({ en: 'Signature Care', ar: 'عنايتنا المميزة' })}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif">
                {t({ en: 'Discover Our Luxury Services', ar: 'اكتشفي خدماتنا الفاخرة' })}
              </h2>
            </div>
            <button className="luxury-button-outline">
              {t({ en: 'View All Services', ar: 'جميع الخدمات' })}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section className="py-32 relative overflow-hidden bg-luxury-black text-white" id="experience">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-40">
          <img src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=1000" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[30px] uppercase tracking-[0.4em] font-medium mb-6 block text-luxury-gold">
              {t({ en: 'The Experience', ar: 'التجربة' })}
            </span>
            <h2 className="text-5xl md:text-8xl font-serif mb-10 leading-tight">
              {t({ en: 'Elegance & Professionalism', ar: 'الأناقة والاحترافية' })}
            </h2>
            <p className="text-xl font-light opacity-60 leading-relaxed mb-12">
              {t({ 
                en: 'Step into a world where beauty meets luxury. Our master stylists and skin therapists provide a transformation that goes beyond the surface. We celebrate your femininity with expert precision and global luxury standards.', 
                ar: 'خطوة إلى عالم يلتقي فيه الجمال بالفخامة. يقدم خبراؤنا في تصفيف الشعر وعلاجات البشرة تحولاً يتجاوز السطح. نحتفل بأنوثتك بدقة خبيرة ومعايير فخامة عالمية.' 
              })}
            </p>
            <div className="grid grid-cols-2 gap-12 text-[20px]">
              <div>
                <div className="text-4xl font-serif text-luxury-gold mb-2">10+</div>
                <div className="text-[20px] uppercase tracking-widest opacity-40 text-white">{t({ en: 'Years Excellence', ar: 'سنوات من التميز' })}</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-luxury-gold mb-2">4.6★</div>
                <div className="text-[20px] uppercase tracking-widest opacity-40">{t({ en: 'Google Reputation', ar: 'سمعتنا على جوجل' })}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[60px] overflow-hidden border border-white/10"
          >
             <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-32 px-6 relative" id="booking">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600" 
            className="w-full h-full object-cover rounded-none" 
            alt="" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
             <span className="text-[10px] uppercase tracking-[0.4em] font-medium mb-4 block text-luxury-gold">
              {t({ en: 'Appointment', ar: 'المواعيد' })}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif">{t({ en: 'Experience Luxury', ar: 'عيشي الرفاهية' })}</h2>
          </div>
          <BookingSystem />
        </div>
      </section>

      <div id="gallery">
        <BentoGallery />
      </div>

      {/* Specialists Section */}
      <section className="py-24 px-6 bg-white" id="specialists">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
             <span className="text-[20px] uppercase tracking-[0.4em] font-medium mb-4 block text-luxury-gold">
              {t({ en: 'Expert Hands', ar: 'أيدي خبيرة' })}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif">{t({ en: 'Meet Our Specialists', ar: 'تعرفي على أخصائياتنا' })}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPECIALISTS.map((specialist, i) => (
              <motion.div
                key={specialist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SpecialistCard specialist={specialist} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewSection />
      
      <div id="membership">
        <MembershipSection />
      </div>

      {/* Bottom Floating Navigation (Frosted Glass Style) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center bg-white/60 backdrop-blur-xl border border-white/80 px-4 py-3 rounded-full shadow-2xl gap-8 z-40 hidden md:flex">
        <button 
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-1.5 px-4 py-2 bg-luxury-black text-white rounded-full text-[10px] uppercase tracking-widest cursor-pointer hover:bg-luxury-gold transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse"></span>
          {t({ en: 'Book', ar: 'حجز' })}
        </button>
        <div className="flex gap-6 items-center px-4">
          <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-4 h-4 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
          </a>
        </div>
        <div className="h-4 w-[1px] bg-black/10"></div>
        <div 
          className="px-3 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer hover:text-luxury-gold transition-colors"
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        >
          {language === 'en' ? 'EN' : 'AR'} <span className="opacity-30">/</span> {language === 'en' ? 'AR' : 'EN'}
        </div>
      </div>

      {/* Floating WhatsApp (Mobile) */}
      <a 
        href="https://wa.me/966500000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-32 right-10 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold pr-2">
          WhatsApp Inquiries
        </span>
      </a>
    </div>
  );
};
