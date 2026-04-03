'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, ShieldCheck, Mail, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const [step, setStep] = useState<'selection' | 'accountSelection' | 'processing' | 'success'>('selection');
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const mockUsers = [
    { name: 'Murodbek Primqulov', email: 'murodil@gmail.com', img: 'https://i.pravatar.cc/150?u=murod' },
    { name: 'Taklifnoma Admin', email: 'admin@taklifnoma.asia', img: 'https://i.pravatar.cc/150?u=admin' }
  ];

  useEffect(() => {
    if (step === 'processing') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setStep('success');
            return 100;
          }
          return prev + 1.2;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (step === 'success') {
      const timer = setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [step, router]);

  return (
    <div className="min-h-screen bg-[#FFF9FA] flex items-center justify-center p-6 bg-[radial-gradient(#FFE4E6_1px,transparent_1px)] [background-size:20px_20px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(225,29,72,0.15)] border border-[#FFE4E6] p-10 md:p-12 relative overflow-hidden min-h-[580px] flex flex-col items-center justify-center"
      >
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E11D48]/5 rounded-bl-[100px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E11D48]/5 rounded-tr-[100px] -z-0"></div>

        <AnimatePresence mode="wait">
          {step === 'selection' && (
            <motion.div 
              key="selection"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-10 relative z-10 w-full"
            >
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E11D48]/10 text-[#E11D48] text-[9px] font-black uppercase tracking-widest mb-2 border border-[#E11D48]/10">
                  <Sparkles size={12} fill="currentColor" /> Xavfsiz Kirish
                </div>
                <h1 className="font-playfair text-4xl font-black text-gray-900 tracking-tight leading-tight">Taklifnoma.Asia</h1>
                <p className="text-gray-400 text-sm font-medium">Boshqaruv paneliga kirish uchun tasdiqlang</p>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setStep('accountSelection')}
                  className="w-full flex items-center justify-between group p-6 bg-white border border-gray-100 rounded-[2rem] hover:border-[#E11D48]/30 hover:bg-[#FFF9FA] transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-50 overflow-hidden relative">
                       <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google" className="w-7 h-7" />
                    </div>
                    <div className="text-left">
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-0.5">Davom etish</p>
                        <h3 className="text-lg font-black text-gray-900 group-hover:text-[#E11D48] transition-colors leading-tight">Google Hisobi</h3>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-gray-300 group-hover:translate-x-2 transition-transform group-hover:text-[#E11D48]" />
                </button>

                <div className="flex items-center gap-4 py-4">
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">yoki</span>
                  <div className="flex-1 h-[1px] bg-gray-100"></div>
                </div>

                <div className="space-y-3">
                   <div className="relative group">
                     <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E11D48] transition-colors" size={18} />
                     <input 
                       disabled
                       placeholder="Email manzili"
                       className="w-full pl-16 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-medium outline-none opacity-50 cursor-not-allowed"
                     />
                   </div>
                   <div className="relative group">
                     <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E11D48] transition-colors" size={18} />
                     <input 
                       disabled
                       placeholder="Parol"
                       type="password"
                       className="w-full pl-16 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-medium outline-none opacity-50 cursor-not-allowed"
                     />
                   </div>
                </div>
              </div>

              <div className="text-center">
                 <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center justify-center gap-2">
                    <ShieldCheck size={14} className="text-green-400" />
                    Barcha ma'lumotlar himoyalangan
                 </p>
              </div>
            </motion.div>
          )}

          {step === 'accountSelection' && (
            <motion.div 
               key="accountSelection"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="space-y-8 w-full relative z-10 text-center"
            >
               <div className="space-y-2">
                  <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google" className="w-10 h-10 mx-auto mb-4" />
                  <h2 className="text-2xl font-black text-gray-900 leading-tight">Hisobni tanlang</h2>
                  <p className="text-gray-400 text-sm font-medium">Taklifnoma.Asia ilovasiga davom etish</p>
               </div>

               <div className="space-y-2 py-4">
                  {mockUsers.map((user, i) => (
                    <button 
                      key={i}
                      onClick={() => setStep('processing')}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
                    >
                       <img src={user.img} className="w-10 h-10 rounded-full border-2 border-white shadow-md" />
                       <div className="text-left">
                          <p className="text-sm font-black text-gray-900 group-hover:text-[#E11D48] transition-colors">{user.name}</p>
                          <p className="text-xs text-gray-400 font-medium">{user.email}</p>
                       </div>
                    </button>
                  ))}
                  
                  <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors opacity-60">
                     <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <User size={20} />
                     </div>
                     <div className="text-left">
                        <p className="text-sm font-bold text-gray-900">Boshqa hisobdan foydalanish</p>
                     </div>
                  </button>
               </div>

               <p className="text-[10px] text-gray-400 leading-relaxed px-6">
                 Davom etsangiz, Google hisobingizdagi nom, rasm va email manzilini Taklifnoma.Asia ilovasi bilan ulashga rozilik berasiz.
               </p>
            </motion.div>
          )}

          {step === 'processing' && (
            <motion.div 
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 space-y-12 text-center"
            >
               <div className="relative inline-block">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-gray-50"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="#E11D48"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={377}
                      strokeDashoffset={377 - (377 * progress) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-300 ease-out"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google" className="w-10 h-10 animate-pulse" />
                  </div>
               </div>

               <div className="space-y-4">
                  <h2 className="font-playfair text-3xl font-black text-gray-900 italic">Google hisobingizga <br /> ulanmoqda</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Iltimos, kutib turing... {Math.round(progress)}%</p>
               </div>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 space-y-12 text-center flex flex-col items-center"
            >
               <div className="w-24 h-24 bg-green-50 rounded-[2rem] flex items-center justify-center border-4 border-green-100 text-green-500">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                  >
                    <ShieldCheck size={48} />
                  </motion.div>
               </div>

               <div className="space-y-4">
                  <h2 className="font-playfair text-3xl font-black text-gray-900 leading-tight">Muvaffaqiyatli!</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Dashboardga o'tilmoqda</p>
               </div>
               
               <div className="w-full h-1 bg-gray-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    className="h-full bg-[#E11D48]"
                  ></motion.div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
