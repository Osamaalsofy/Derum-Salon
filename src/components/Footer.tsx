import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="text-3xl font-serif tracking-[0.2em] font-bold uppercase mb-8">
              Derum <span className="text-luxury-gold">Salon</span>
            </div>
            <p className="text-sm opacity-50 font-light leading-relaxed mb-8">
              {t({ 
                en: 'Providing luxury beauty experiences and expert care for over a decade. Dedicated to your confidence and beauty.', 
                ar: 'نقدم تجارب جمال فاخرة ورعاية خبيرة لأكثر من عقد من الزمان. مكرسون لثقتك وجمالك.' 
              })}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-luxury-gold transition-colors">{t({ en: 'Home', ar: 'الرئيسية' })}</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-luxury-gold transition-colors">{t({ en: 'Services', ar: 'خدماتنا' })}</button></li>
              <li><button onClick={() => document.getElementById('specialists')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-luxury-gold transition-colors">{t({ en: 'Our Specialists', ar: 'أخصائياتنا' })}</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-luxury-gold transition-colors">{t({ en: 'Gallery', ar: 'المعرض' })}</button></li>
              <li><button onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-luxury-gold transition-colors">{t({ en: 'Membership', ar: 'العضوية' })}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-luxury-gold">Contact</h4>
            <ul className="space-y-6 text-sm opacity-60">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>King Road, Jeddah, Saudi Arabia</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>+966 50 000 0000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>hello@derumsalon.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-luxury-gold">Opening Hours</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li className="flex justify-between">
                <span>Sat - Thu</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri</span>
                <span>2:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6 opacity-30 text-[10px] uppercase tracking-[0.2em] font-bold">
          <div>© 2024 DERUM SALON. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
