import { Service, Specialist, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'h1',
    category: 'HAIR',
    name: { en: 'Luxury Haircut & Styling', ar: 'قص وتصفيف الشعر الفاخر' },
    price: 'SAR 250',
    duration: '60 min',
    description: { en: 'Precision cutting followed by a luxury blow-dry.', ar: 'قص دقيق يتبعه تجفيف فاخر للشعر.' },
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000'
  },
  {
    id: 'h2',
    category: 'HAIR',
    name: { en: 'Signature Balayage', ar: 'بالاياج ديوم المميز' },
    price: 'SAR 850',
    duration: '180 min',
    description: { en: 'Hand-painted highlights for a natural, sunkissed look.', ar: 'خصلات شعر ملونة يدوياً لمظهر طبيعي جذاب.' },
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000'
  },
  {
    id: 'n1',
    category: 'NAILS',
    name: { en: 'Russian Manicure', ar: 'مانيكير روسي' },
    price: 'SAR 180',
    duration: '75 min',
    description: { en: 'Deep cuticle care for a long-lasting, clean finish.', ar: 'عناية عميقة بالجلد الميت لنتائج نظيفة تدوم طويلاً.' },
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000'
  },
  {
    id: 's1',
    category: 'SKIN',
    name: { en: 'Royal HydraFacial', ar: 'هيدرا فيشيل ملكي' },
    price: 'SAR 450',
    duration: '90 min',
    description: { en: 'Advanced resurfacing and deep hydration treatment.', ar: 'علاج متطور لتجديد البشرة وترطيبها بعمق.' },
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000'
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'sp1',
    name: 'Hope',
    role: { en: 'Creative Director & Hairstylist', ar: 'المدير الإبداعي ومصفف الشعر' },
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000',
    bio: { en: 'Master of color transformations and precision cutting.', ar: 'خبير في تحويل ألوان الشعر والقص الدقيق.' }
  },
  {
    id: 'sp2',
    name: 'Abir',
    role: { en: 'Senior Hairstylist', ar: 'كبير مصففي الشعر' },
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000',
    bio: { en: 'Specializes in elegant updos and bridal styling.', ar: 'متخصص في تسريحات الشعر الراقية وتصفيف العرائس.' }
  },
  {
    id: 'sp3',
    name: 'Rose',
    role: { en: 'Lead Nail Artist', ar: 'كبيرة فناني الأظافر' },
    experience: '10 Years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000',
    bio: { en: 'Expert in intricate nail art and Russian techniques.', ar: 'خبيرة في فن الأظافر المعقد والتقنيات الروسية.' }
  },
  {
    id: 'sp4',
    name: 'Messho',
    role: { en: 'Skin Therapist', ar: 'أخصائية علاج البشرة' },
    experience: '8 Years',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000',
    bio: { en: 'Advanced facial treatments and skincare expert.', ar: 'خبيرة في علاجات الوجه المتقدمة والعناية بالبشرة.' }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    rating: 5,
    content: { 
      en: 'Hope is the best hairstylist! I have been coming here for 10 years and the service is always exceptional.', 
      ar: 'هوب هي أفضل مصففة شعر! آتي إلى هنا منذ 10 سنوات والخدمة دائماً استثنائية.' 
    },
    date: '2024-05-10'
  },
  {
    id: 'r2',
    author: 'Laila A.',
    rating: 5,
    content: { 
      en: 'Amazing nail work by Rose. Highly professional and welcoming staff.', 
      ar: 'عمل أظافر مذهل من قبل روز. طاقم عمل محترف للغاية ومرحب.' 
    },
    date: '2024-05-12'
  }
];
