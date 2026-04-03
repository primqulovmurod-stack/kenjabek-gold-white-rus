'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Chrome, Mail, Lock, ArrowRight, Heart } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setLoading(true);
    // In production, this would use supabase.auth.signInWithOAuth
    // For local dev, let's mock a successful login after a short delay
    setTimeout(() => {
        router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] flex items-center justify-center p-6 selection:bg-[#B8962E]/20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")` }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white p-12 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-[#EAD0A8]/20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 text-[#B8962E] opacity-5">
           <Heart size={160} fill="currentColor" />
        </div>

        <div className="relative text-center mb-12 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#B8962E]/10 rounded-full flex items-center justify-center mb-6 border border-[#B8962E]/20">
                <Heart size={32} className="text-[#B8962E]" fill="currentColor" />
            </div>
            <h1 className="font-playfair text-3xl font-black text-gray-900 mb-2">Xush Kelibsiz</h1>
            <p className="text-gray-400 text-sm font-medium tracking-widest uppercase">Shaxsiy Kabinetingizga kiring</p>
        </div>

        <div className="space-y-4">
            <button 
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-4 py-5 rounded-2xl bg-[#2D2424] text-white font-bold hover:bg-black transition-all group relative overflow-hidden shadow-xl"
            >
                {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                    <>
                        <Chrome size={20} />
                        <span>GOOGLE BILAN KIRISH</span>
                        <ArrowRight size={18} className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all transition-duration-500" />
                    </>
                )}
            </button>

            <div className="flex items-center gap-4 py-4 opacity-30">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Yoki Email orqali</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="space-y-3">
                <div className="relative group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#B8962E] transition-colors" size={18} />
                    <input 
                        type="email" 
                        placeholder="Email manzilingiz"
                        className="w-full pl-16 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#B8962E]/5 focus:border-[#B8962E]/30 outline-none transition-all text-sm font-medium"
                    />
                </div>
                <div className="relative group">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#B8962E] transition-colors" size={18} />
                    <input 
                        type="password" 
                        placeholder="Parolingiz"
                        className="w-full pl-16 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#B8962E]/5 focus:border-[#B8962E]/30 outline-none transition-all text-sm font-medium"
                    />
                </div>
            </div>

            <button 
                onClick={() => router.push('/dashboard')}
                className="w-full py-5 rounded-2xl border border-[#B8962E]/30 text-[#B8962E] font-bold hover:bg-[#B8962E]/5 transition-all mt-4 tracking-widest text-[11px]"
            >
                KIRISH
            </button>
        </div>

        <div className="mt-12 text-center">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest italic">
                &copy; 2026 TAKLIFNOMA.ASIA — Barchasi Go'zallik bilan
            </p>
        </div>
      </motion.div>
    </div>
  );
}
