import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: { en: 'Home', ar: 'الرئيسية' }, href: '#' },
    { name: { en: 'Services', ar: 'خدماتنا' }, href: '#services' },
    { name: { en: 'Specialists', ar: 'أخصائياتنا' }, href: '#specialists' },
    { name: { en: 'Gallery', ar: 'المعرض' }, href: '#gallery' },
    { name: { en: 'Membership', ar: 'العضوية' }, href: '#membership' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href === '#' ? 'root' : href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
      scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-2xl font-serif tracking-[0.2em] font-light uppercase">Derum</span>
          <span className="h-4 w-[1px] bg-luxury-gold hidden sm:block"></span>
          <span className="text-[10px] tracking-widest uppercase opacity-60 hidden sm:block">Salon</span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[11px] uppercase tracking-[0.15em] font-medium hover:text-luxury-gold transition-colors opacity-70 hover:opacity-100"
            >
              {t(link.name)}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="px-3 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
               onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
            {language === 'en' ? (
              <>EN <span className="opacity-30">/</span> <span className="font-medium">AR</span></>
            ) : (
              <><span className="font-medium">EN</span> <span className="opacity-30">/</span> AR</>
            )}
          </div>
          
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 border border-luxury-black text-[11px] uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all shadow-sm active:translate-y-px"
          >
            {t({ en: 'Book Appointment', ar: 'احجز موعد' })}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-luxury-cream lg:hidden flex flex-col p-8 gap-6 text-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-serif tracking-widest"
                onClick={(e) => {
                  handleScrollTo(e, link.href);
                  setIsOpen(false);
                }}
              >
                {t(link.name)}
              </a>
            ))}
            <hr className="border-luxury-cream" />
            <div className="flex flex-col gap-4">
               <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'ar' : 'en');
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-3 text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'العربية' : 'English'}
              </button>
              <button 
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="luxury-button w-full"
              >
                {t({ en: 'Book Appointment', ar: 'حجز موعد' })}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
