'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Phone, Instagram, Send, Sun, Moon, Star, ExternalLink, HelpCircle, CheckCircle2, ChevronDown, LayoutDashboard, Sparkles, ArrowRight, Clock, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import { supabase } from '@/lib/supabase';

const LandingPage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => setMounted(true), []);

  const handleStartDesign = () => {
    // Skip auth and go straight to template selection
    router.push('/dashboard/new');
  };

  return (
    <div className="min-h-screen bg-[#FFF9FA] dark:bg-[#121212] text-[#2D2424] dark:text-gray-100 font-sans selection:bg-[#E11D48]/20 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-[#FFE4E6]/50 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="font-playfair text-2xl font-black tracking-tighter text-[#E11D48]">TAKLIFNOMA</span>
            <span className="px-2 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] text-[10px] uppercase tracking-widest font-black">Asia</span>
          </button>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <a href="#namunalar" className="hover:text-[#E11D48] transition-colors">Namunalar</a>
            <a href="#xizmatlar" className="hover:text-[#E11D48] transition-colors">Xizmatlar</a>
            <Link href="/dashboard" className="hover:text-[#E11D48] transition-colors">Kabinet</Link>
            <a href="#aloqa" className="hover:text-[#E11D48] transition-colors">Aloqa</a>
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-[#E11D48] transition-all"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            
            <button 
              onClick={handleStartDesign}
              className="hidden md:flex px-8 py-3 bg-[#E11D48] text-white rounded-full text-xs font-black shadow-2xl shadow-[#E11D48]/20 hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest"
            >
              Taklifnoma qilish
            </button>
          </div>
          <a href="https://t.me/taklifnoma_asia" target="_blank" className="md:hidden w-12 h-12 rounded-full bg-[#E11D48] text-white flex items-center justify-center shadow-xl active:scale-90 transition-all">
            <Send size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-[#FFE4E6]/20 dark:bg-white/5 rounded-l-[100px] transform translate-x-20 hidden lg:block"></div>
        <div className="container mx-auto px-6 text-[#2D2424]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-5 text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900 dark:text-white break-words"
              >
                Taklifnomangiz <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E11D48] via-[#FB7185] to-[#E11D48] italic font-black">Barchani Esida Qoladi</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-gray-500 font-bold leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 md:px-0"
              >
                An'anaviy qog'oz taklifnomalardan voz keching. Biz bilan zamonaviy va premium 
                darajadagi virtual taklifnomalarni yarating.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#namunalar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D2424] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all group shadow-xl"
              >
                Namunani ko'rish <Star size={18} className="group-hover:rotate-45 transition-transform" />
              </Link>
               <button 
                onClick={handleStartDesign}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E11D48] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-[#E11D48]/30"
              >
                Taklifnoma qilish <Send size={18} />
              </button>
            </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features */}
      <section id="xizmatlar" className="py-24 bg-white dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-playfair text-4xl font-black mb-4 dark:text-white uppercase tracking-tighter">Nima uchun online taklifnoma?</h2>
          <div className="w-20 h-1 bg-[#E11D48] mx-auto"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: 'music_note', title: 'Musiqali hamrohlik', desc: 'Siz tanlagan maxsus musiqa fonda yangrab turadi.' },
            { icon: 'location_on', title: 'Locatsiya (Xarita)', desc: 'Mehmonlar Google yoki Yandex Maps orqali restoran manzilini topishadi.' },
            { icon: 'event', title: 'Kalendarga saqlash', desc: 'To\'y sanasini mehmonlar o\'z telefonlariga eslatma qilib qo\'yishadi.' },
            { icon: 'credit_card', title: 'To\'yona (Karta)', desc: 'Istasangiz to\'yona uchun karta raqamingizni ham joylab beramiz.' },
          ].map((item, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 hover:border-[#E11D48]/30 bg-[#FFF9FA] dark:bg-[#222] transition-all transform hover:-translate-y-2 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#E11D48]/10 flex items-center justify-center mb-6 group-hover:bg-[#E11D48] transition-colors">
                <span className="material-symbols-outlined text-[#E11D48] group-hover:text-white text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900 dark:text-white uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intermediate Order Button */}
      <div className="flex justify-center pb-12 bg-white dark:bg-[#1A1A1A]">
        <button 
          onClick={handleStartDesign}
          className="bg-[#E11D48] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-[#E11D48]/30 flex items-center gap-3 active:scale-95"
        >
          Taklifnoma qilish <Send size={20} />
        </button>
      </div>

      {/* Samples Portfolio */}
      <section id="namunalar" className="py-24 bg-[#FFF9FA] dark:bg-[#121212]">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-playfair text-4xl font-black mb-4 dark:text-white uppercase tracking-tighter">Taklifnoma Namunalarimiz</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic font-bold">"Bizning premium ishlarimiz bilan tanishing"</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { 
              title: 'Rolex Luxury Edition', 
              style: 'Zamonaviy, Rolex', 
              image: '/assets/rolex_invite_mockup.png',
              link: 'https://xurshid-mohinur-rolex.vercel.app/'
            },
            { 
              title: 'Pink Romance Edition', 
              style: 'Nozik, Pushti', 
              image: '/assets/pink_invite_mockup.png',
              link: 'https://xurshid-mohinur-pink.vercel.app/'
            },
            { 
              title: 'Gold & White (Rus)', 
              style: 'Premium, Rossiya', 
              image: '/assets/gold_white_invite_mockup.png',
              link: 'https://kenjabek-gold-white-rus.vercel.app/'
            },
            { 
              title: 'Gold & White Classic', 
              style: 'Elegant, Oq-Oltin', 
              image: '/assets/gold_white_invite_mockup.png',
              link: 'https://kenjabek-gold-white.vercel.app/'
            },
            { 
              title: 'Gold & White Elite', 
              style: 'Klassik, Oltin', 
              image: '/assets/gold_white_invite_mockup.png',
              link: 'https://kenjabek-snejana-gold-white.vercel.app/'
            },
            { 
              title: 'Pink Romantic Classic', 
              style: 'Nozik, Atirgulli', 
              image: '/assets/pink_invite_mockup.png',
              link: 'https://kenjabek-snejana-pink-classic.vercel.app/'
            },
            { 
              title: 'Gold Classic Premium', 
              style: 'Eksklyuziv, Boy', 
              image: '/assets/gold_white_invite_mockup.png',
              link: 'https://kenjabek-sofiya-goldclassic.vercel.app/?theme=goldclassic'
            }
          ].map((sample, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15, rotateX: 5 }}
              className="group relative h-[500px] md:h-[600px] rounded-[3.5rem] overflow-hidden border-[8px] border-gray-950 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-black transition-all perspective-1000"
            >
              {/* Live Website Preview (Iframe Mockup) */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700 bg-white">
                <iframe 
                  src={sample.link} 
                  className="w-[375px] h-[667px] origin-top-left border-none"
                  style={{
                    transform: 'scale(0.8)', // Adjust scale based on your card height
                    width: '125%',
                    height: '125%',
                  }}
                  title={sample.title}
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Overlay Gradient (slightly lighter to see the iframe) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-playfair text-xl font-black mb-1 text-white uppercase tracking-tight drop-shadow-lg">{sample.title}</h3>
                  <p className="text-[#E11D48] text-[10px] font-black mb-6 uppercase tracking-[0.3em] drop-shadow-md">{sample.style}</p>
                  <a 
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-3.5 bg-[#E11D48] text-white rounded-full text-xs font-black shadow-2xl hover:bg-white hover:text-[#E11D48] transition-all transform active:scale-90 mb-6 uppercase tracking-widest"
                  >
                    SAYTNI KO'RISH <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Speaker & Sensor bits */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-16 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </div>

              {/* Reflection Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Second Intermediate Order Button */}
      <div className="flex justify-center pb-12 bg-white dark:bg-[#1A1A1A] pt-12">
        <a 
          href="https://t.me/taklifnoma_asia" 
          target="_blank" 
          className="bg-[#E11D48] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-[#E11D48]/30 flex items-center gap-3 active:scale-95"
        >
          Taklifnoma qilish <Send size={20} />
        </a>
      </div>

      {/* Testimonials */}
      <section id="fikrlar" className="py-24 bg-white dark:bg-[#1A1A1A] overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-playfair text-4xl font-black mb-4 dark:text-white uppercase tracking-tighter">Mijozlar Fikri</h2>
          <div className="w-20 h-1 bg-[#E11D48] mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-[#2D2424]">
          {[
            { name: 'Azizbek & Madina', text: 'Taklifnoma juda ajoyib chiqdi! Hamma mehmonlarimizga yoqdi, ayniqsa musiqasi va xaritasi juda qulay bo\'ldi.', rating: 5 },
            { name: 'Sardorbek', text: 'Tez va sifatli xizmat. Bir kunda tayyorlab berishdi. Tilla rangli dizayni haqiqatdan ham premium ko\'rinadi.', rating: 5 },
            { name: 'Dilnoza', text: 'Raqamli taklifnoma haqiqatdan ham qulay ekan. Qog\'oz taklifnoma tarqatishdan ko\'ra 10 baravar oson va arzon!', rating: 5 },
          ].map((review, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-[#FFF9FA] dark:bg-[#222] border border-gray-100 dark:border-white/5 relative shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex gap-1 mb-6 text-[#E11D48]">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic mb-8 leading-relaxed font-bold font-serif text-lg">"{review.text}"</p>
              <div className="font-black text-gray-900 dark:text-white uppercase tracking-widest text-[10px]">— {review.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-playfair text-4xl font-black mb-4 dark:text-white uppercase tracking-tighter">Buyurtma berish jarayoni</h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold">Atigi 3 qadamda o'z taklifnomangizga ega bo'ling</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative text-[#2D2424]">
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-[#E11D48]/30"></div>
          
          {[
            { step: '01', title: 'Namuna tanlang', desc: 'Bizning katalogdan o\'zingizga yoqqan dizaynni tanlang.' },
            { step: '02', title: 'Ma\'lumotlarni yuboring', desc: 'To\'y bo\'ladigan sana, manzil va boshqa tafsilotlarni yozib yuboring.' },
            { step: '03', title: 'Taklifnomani oling', desc: 'Tayyor taklifnomani 24 soat ichida havola ko\'rinishida qabul qiling.' },
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#E11D48] text-white flex items-center justify-center text-2xl font-black mb-6 shadow-xl shadow-[#E11D48]/20 transform group-hover:scale-110 transition-transform">
                {item.step}
              </div>
              <h3 className="text-xl font-black mb-3 dark:text-white uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us / Stats */}
      <section className="py-24 bg-[#FFF9FA] dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 text-[#2D2424]">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-black leading-tight dark:text-white uppercase tracking-tighter">Nega aynan bizni <span className="text-[#E11D48]">tanlashadi?</span></h2>
            <div className="w-24 h-1 bg-[#E11D48] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { title: 'Tayyor va zamonaviy dizaynlar', desc: 'Bizda har qanday didga mos keladigan 20 dan ortiq eksklyuziv dizaynlar mavjud.' },
                  { title: 'Juda tez tayyorlanadi', desc: 'Sizning buyurtmangiz navbatga qarab 2-24 soat ichida tayyor bo\'ladi.' },
                  { title: 'Hamyonbop va qulay narx', desc: 'An\'anaviy taklifnomalardan 10 baravar arzon va tarqatish juda oson.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-[#E11D48]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg dark:text-white uppercase tracking-tighter">{feature.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-bold">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3.5rem] bg-[#E11D48]/10 flex items-center justify-center overflow-hidden border border-[#E11D48]/20 shadow-inner">
                <div className="text-center p-12 space-y-4">
                  <div className="text-7xl font-black text-[#E11D48] tracking-tighter">50+</div>
                  <div className="text-xl font-black dark:text-white uppercase tracking-widest">Mijozlar</div>
                  <div className="w-20 h-1 bg-[#E11D48] mx-auto"></div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-bold">Har kuni o'nlab oilalarga xizmat ko'rsatamiz.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E11D48] rounded-3xl -z-10 animate-pulse opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#1A1A1A]">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="font-playfair text-4xl font-black mb-4 dark:text-white uppercase tracking-tighter">Savollar</h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold">Tezkor javoblar</p>
        </div>

        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {[
            { q: "Buyurtma qancha vaqtda tayyor bo'ladi?", a: "Odatda buyurtmangiz 2-24 soat ichida tayyor bo'ladi." },
            { q: "To'lov qanday qilinadi?", a: "Click, Payme va barcha bank kartalari orqali." },
            { q: "Musiqani o'zgartirsa bo'ladimi?", a: "Albatta, istalgan musiqani qo'yib bera olamiz." },
          ].map((faq, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-[#FFF9FA] dark:bg-[#222] border border-gray-100 dark:border-white/5 transition-all hover:border-[#E11D48]/30 text-[#2D2424]">
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-tighter">{faq.q}</h4>
                <ChevronDown className="text-[#E11D48]" size={20} />
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm font-bold leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ultra-Minimal Footer CTA */}
      <div className="w-full py-8 text-center border-t border-white/5 bg-gray-950">
        <a 
          href="https://t.me/taklifnoma_asia" 
          target="_blank" 
          className="text-[#E11D48] text-[10px] font-black tracking-[0.4em] uppercase hover:brightness-125 transition-all flex items-center justify-center gap-2"
        >
          Taklifnoma.Asia — Taklifnoma qilish <Send size={12} />
        </a>
      </div>

      {/* Footer / Contact */}
      <footer id="aloqa" className="bg-[#1a1515] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-20">
            <div className="space-y-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-playfair text-3xl font-black tracking-tighter text-[#E11D48]">TAKLIFNOMA.ASIA</span>
              </button>
              <p className="text-gray-400 font-bold leading-relaxed">
                Zamonaviy to'ylar uchun eng chiroyli virtual taklifnomalar xizmati. Biz baxtli kunlaringizni go'zal qilish uchun ishlaymiz.
              </p>
            </div>
            
            <div className="space-y-10">
              <h4 className="text-[#E11D48] font-black uppercase tracking-[0.2em] text-[11px]">Aloqa Ma'lumotlari</h4>
              <div className="space-y-6">
                <a href="tel:+998915930833" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#E11D48] transition-colors">
                    <Phone size={20} className="text-[#E11D48]" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-[#E11D48] transition-colors whitespace-nowrap">+998 (91) 593-08-33</span>
                </a>
                <a href="https://t.me/taklifnoma_asia" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#E11D48] transition-colors">
                    <Send size={20} className="text-[#E11D48]" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold group-hover:text-[#E11D48] transition-colors whitespace-nowrap">Telegram Bog'lanish</span>
                </a>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[#E11D48] font-black uppercase tracking-[0.2em] text-[11px]">Ijtimoiy Tarmoqlar</h4>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/taklifnoma.asia?igsh=YTU1cGo0ZGI4MnQz" target="_blank" className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E11D48] transition-all transform hover:rotate-12">
                  <Instagram size={28} />
                </a>
                <a href="https://t.me/taklifnoma_asia" target="_blank" className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E11D48] transition-all transform hover:-rotate-12">
                  <Send size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center gap-6 text-gray-500 text-xs font-bold uppercase tracking-widest text-center">
            <p>&copy; 2026 Taklifnoma.Asia — Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
