import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Specialist, Service } from '../types';
import { Instagram, ArrowRight, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export const SpecialistCard: React.FC<{ specialist: Specialist }> = ({ specialist }) => {
  const { t } = useLanguage();

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative h-[500px] rounded-[40px] overflow-hidden"
    >
      <img 
        src={specialist.image} 
        alt={specialist.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-luxury-gold/80 mb-2 block">
          {t({ en: specialist.experience + ' Experience', ar: 'خبرة ' + specialist.experience })}
        </span>
        <h3 className="text-3xl font-serif mb-1">{specialist.name}</h3>
        <p className="text-[11px] uppercase tracking-widest opacity-60 mb-6">{t(specialist.role)}</p>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[10px] uppercase tracking-[0.2em] font-bold py-2 border-b border-white/20 hover:border-luxury-gold transition-all"
          >
            {t({ en: 'Book with ' + specialist.name, ar: 'احجز مع ' + specialist.name })}
          </button>
          <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-luxury-gold transition-all">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { t } = useLanguage();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card rounded-[32px] p-2 flex flex-col gap-4 overflow-hidden group"
    >
      <div className="aspect-[4/3] rounded-[28px] overflow-hidden relative">
        <img 
          src={service.image} 
          alt={t(service.name)} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
           <span className="px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-bold tracking-widest uppercase text-luxury-black">
            {service.category}
          </span>
          <span className="px-4 py-1.5 bg-luxury-black/80 backdrop-blur-md rounded-full text-[9px] font-bold tracking-widest uppercase text-white">
            {service.price}
          </span>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h3 className="text-2xl font-serif mb-2 group-hover:text-luxury-gold transition-colors">{t(service.name)}</h3>
        <p className="text-xs text-gray-500 font-light leading-relaxed mb-6 line-clamp-2">
          {t(service.description)}
        </p>
        
        <div className="flex items-center justify-between border-t border-luxury-black/5 pt-4">
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold opacity-40">
            <Clock className="w-3 h-3" />
            {service.duration}
          </div>
          <button className="flex items-center gap-2 group/btn">
            <span className="text-[10px] uppercase font-bold tracking-widest">{t({ en: 'View Details', ar: 'التفاصيل' })}</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
