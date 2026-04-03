'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Shield, Camera, Heart, Save, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = React.useState<any>({
    full_name: 'Murod Priqulov',
    email: 'murod@taklifnoma.asia',
    phone: '+998 90 123 45 67'
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/dashboard/login');
  };

  return (
    <div className="p-6 md:p-12 space-y-12">
      <header className="space-y-2">
        <h1 className="font-playfair text-4xl font-black text-gray-900 tracking-tight">Profil</h1>
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase flex items-center gap-2">
            <User size={14} className="text-[#B8962E]" />
            SHAXSIY MA'LUMOTLARNI BOSHQARISH
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-32">
          {/* Profile Card */}
          <div className="lg:col-span-1 space-y-6">
              <div className="bg-white border border-[#EAD0A8]/20 rounded-[2.5rem] p-12 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-[#B8962E] opacity-5">
                      <Shield size={120} />
                  </div>
                  <div className="relative space-y-8 flex flex-col items-center">
                    <div className="relative">
                        <div className="w-40 h-40 rounded-full border-4 border-[#B8962E]/10 bg-gray-50 flex items-center justify-center text-4xl font-black text-[#B8962E] shadow-inner group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                            {user.full_name[0]}
                        </div>
                        <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-white border border-[#EAD0A8]/20 shadow-xl flex items-center justify-center text-gray-400 hover:text-[#B8962E] transition-colors">
                            <Camera size={18} />
                        </button>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-black text-gray-900 leading-tight">{user.full_name}</h2>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Premium Mijoz</p>
                    </div>
                    <div className="w-full h-px bg-[#EAD0A8]/10" />
                    <div className="w-full space-y-4">
                        <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                            <span>Jami taklifnomalar</span>
                            <span className="text-gray-900">12 ta</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                            <span>A'zolik</span>
                            <span className="text-green-500 font-black uppercase">Oltin</span>
                        </div>
                    </div>
                  </div>
              </div>

              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-4 py-5 rounded-2xl bg-red-50 text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-100 transition-all border border-red-100/50"
              >
                  <LogOut size={18} /> Chiqish
              </button>
          </div>

          {/* Settings Section */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-[#EAD0A8]/20 shadow-sm p-12 space-y-12">
              <div className="flex items-center justify-between border-b border-[#EAD0A8]/10 pb-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#B8962E]">Profilni yangilash</h3>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#B8962E] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-[#B8962E]/20 hover:scale-105 transition-all active:scale-95">
                      <Save size={16} /> O'zgarishlarni saqlash
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 flex items-center gap-2">
                          <User size={10} /> To'liq ismingiz
                      </label>
                      <input 
                        type="text" 
                        value={user.full_name} 
                        onChange={(e) => setUser({...user, full_name: e.target.value})}
                        className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:ring-4 focus:ring-[#B8962E]/5 outline-none transition-all text-sm font-bold" 
                      />
                  </div>
                  <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 flex items-center gap-2">
                          <Mail size={10} /> Email manzilingiz
                      </label>
                      <input 
                        type="email" 
                        value={user.email} 
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:ring-4 focus:ring-[#B8962E]/5 outline-none transition-all text-sm font-bold opacity-60 cursor-not-allowed" 
                        disabled
                      />
                  </div>
                  <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 flex items-center gap-2">
                          <Phone size={10} /> Telefon raqamingiz
                      </label>
                      <input 
                        type="tel" 
                        value={user.phone} 
                        onChange={(e) => setUser({...user, phone: e.target.value})}
                        className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:ring-4 focus:ring-[#B8962E]/5 outline-none transition-all text-sm font-bold" 
                      />
                  </div>
                  <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-400 uppercase ml-2 flex items-center gap-2">
                          <MapPin size={10} /> Shahar
                      </label>
                      <input 
                        type="text" 
                        placeholder="Toshkent"
                        className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl focus:ring-4 focus:ring-[#B8962E]/5 outline-none transition-all text-sm font-bold" 
                      />
                  </div>
              </div>

              <div className="pt-12 border-t border-[#EAD0A8]/10 space-y-8">
                  <h3 className="text-xs font-black uppercase tracking-widest text-red-400 flex items-center gap-2">
                      <Shield size={14} /> Hisob Xavfsizligi
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6">
                      <button className="px-8 py-4 bg-gray-50 text-gray-600 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-all border border-gray-100">
                          Parolni o'zgartirish
                      </button>
                      <button className="px-8 py-4 bg-red-50 text-red-500 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all border border-red-100">
                          Hisobni o'chirish
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
