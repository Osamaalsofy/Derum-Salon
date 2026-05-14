import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES, SPECIALISTS } from '../constants';
import { Check, ChevronRight, Calendar, User, ShoppingBag, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export const BookingSystem = () => {
  const { t, isRtl } = useLanguage();
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    serviceId: '',
    specialistId: '',
    date: '',
    time: '',
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const selectedService = SERVICES.find(s => s.id === booking.serviceId);
  const selectedSpecialist = SPECIALISTS.find(s => s.id === booking.specialistId);

  return (
    <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Progress Sidebar */}
        <div className="bg-luxury-black/5 p-8 border-r border-luxury-black/5">
          <h3 className="font-serif text-xl mb-8">{t({ en: 'Your Booking', ar: 'حجزك' })}</h3>
          <div className="space-y-6">
            {[
              { id: 1, name: { en: 'Service', ar: 'الخدمة' }, icon: ShoppingBag, value: selectedService ? t(selectedService.name) : null },
              { id: 2, name: { en: 'Specialist', ar: 'الأخصائية' }, icon: User, value: selectedSpecialist ? selectedSpecialist.name : null },
              { id: 3, name: { en: 'Date & Time', ar: 'التاريخ والوقت' }, icon: Calendar, value: booking.date ? `${booking.date} @ ${booking.time}` : null },
            ].map((s) => (
              <div key={s.id} className={cn(
                "flex items-start gap-4 transition-all",
                step >= s.id ? "opacity-100" : "opacity-30"
              )}>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs",
                  step > s.id ? "bg-luxury-gold text-white" : step === s.id ? "bg-luxury-black text-white" : "border border-luxury-black/20"
                )}>
                  {step > s.id ? <Check className="w-4 h-4" /> : s.id}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-semibold opacity-50">{t(s.name)}</div>
                  <div className="text-sm font-medium mt-1">{s.value || '---'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Area */}
        <div className="md:col-span-2 p-8 md:p-12 min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
                className="space-y-6"
              >
                <header>
                  <h2 className="text-3xl font-serif mb-2">{t({ en: 'Choose a Service', ar: 'اختر الخدمة' })}</h2>
                  <p className="text-sm text-gray-500">{t({ en: 'Select the treatment you desire', ar: 'اختر العلاج الذي ترغبين فيه' })}</p>
                </header>
                <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setBooking({ ...booking, serviceId: s.id });
                        nextStep();
                      }}
                      className={cn(
                        "p-4 rounded-xl border text-left flex items-center justify-between transition-all group",
                        booking.serviceId === s.id ? "border-luxury-gold bg-luxury-gold/5" : "border-luxury-black/10 hover:border-luxury-gold/50"
                      )}
                    >
                      <div>
                        <div className="font-medium">{t(s.name)}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3" /> {s.duration} • {s.price}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
                className="space-y-6"
              >
                <header>
                  <h2 className="text-3xl font-serif mb-2">{t({ en: 'Select Specialist', ar: 'اختر الأخصائية' })}</h2>
                  <p className="text-sm text-gray-500">{t({ en: 'Our experts are ready to serve you', ar: 'خبيراتنا جاهزات لخدمتك' })}</p>
                </header>
                <div className="grid grid-cols-2 gap-4">
                  {SPECIALISTS.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => {
                        setBooking({ ...booking, specialistId: spec.id });
                        nextStep();
                      }}
                      className={cn(
                        "p-4 rounded-3xl border transition-all text-center group",
                        booking.specialistId === spec.id ? "border-luxury-gold bg-luxury-gold/5" : "border-luxury-black/10 hover:border-luxury-gold"
                      )}
                    >
                      <img src={spec.image} alt={spec.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                      <div className="font-serif text-lg">{spec.name}</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">{t(spec.role)}</div>
                    </button>
                  ))}
                </div>
                <button onClick={prevStep} className="text-xs font-semibold tracking-widest uppercase opacity-50 hover:opacity-100">{t({ en: 'Back', ar: 'العودة' })}</button>
              </motion.div>
            )}

             {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
                className="space-y-8"
              >
                <header>
                  <h2 className="text-3xl font-serif mb-2">{t({ en: 'Confirm Booking', ar: 'تأكيد الحجز' })}</h2>
                  <p className="text-sm text-gray-500">{t({ en: 'Review and finalize your appointment', ar: 'راجع وقم بإنهاء موعدك' })}</p>
                </header>
                
                <div className="p-6 bg-luxury-black text-white rounded-3xl space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-60">{t({ en: 'Service', ar: 'الخدمة' })}</span>
                    <span className="font-serif">{t(selectedService!.name)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-60">{t({ en: 'Specialist', ar: 'الأخصائية' })}</span>
                    <span className="font-serif">{selectedSpecialist!.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-60">{t({ en: 'Price', ar: 'السعر' })}</span>
                    <span className="text-luxury-gold font-bold">{selectedService!.price}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder={t({ en: 'Your Name', ar: 'اسمك' })} className="w-full p-4 rounded-xl bg-luxury-black/5 border-none focus:ring-2 focus:ring-luxury-gold" />
                    <input type="tel" placeholder={t({ en: 'Phone Number', ar: 'رقم الهاتف' })} className="w-full p-4 rounded-xl bg-luxury-black/5 border-none focus:ring-2 focus:ring-luxury-gold" />
                  </div>
                  <button 
                    onClick={() => setStep(4)}
                    className="luxury-button w-full !py-5 text-sm"
                  >
                    {t({ en: 'Complete Booking', ar: 'إتمام الحجز' })}
                  </button>
                </div>
                <button onClick={prevStep} className="text-xs font-semibold tracking-widest uppercase opacity-50 hover:opacity-100">{t({ en: 'Back', ar: 'العودة' })}</button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center h-full space-y-6"
              >
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center text-white">
                  <Check className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-serif uppercase tracking-tighter">
                  {t({ en: 'Appointment Secured', ar: 'تم تأمين الموعد' })}
                </h2>
                <p className="max-w-xs text-gray-500">
                  {t({ 
                    en: 'An automated confirmation has been sent to your WhatsApp and email.', 
                    ar: 'تم إرسال تأكيد تلقائي إلى واتساب والبريد الإلكتروني الخاص بك.' 
                  })}
                </p>
                <button 
                  onClick={() => setStep(1)}
                  className="luxury-button-outline"
                >
                  {t({ en: 'Book Another', ar: 'حجز آخر' })}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
