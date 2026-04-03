'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import Link from 'next/link';

const mockPayments = [
  { id: '1', amount: '50 000', date: '2026-03-15', status: 'Muvaffaqiyatli', slug: 'ali-laylo' },
  { id: '2', amount: '50 000', date: '2026-03-20', status: 'Kutilmoqda', slug: 'behzod-dilfuza' }
];

export default function BillingPage() {
  return (
    <div className="p-6 md:p-12 space-y-12">
      <header className="space-y-2">
        <h1 className="font-playfair text-4xl font-black text-gray-900 tracking-tight">To'lovlar</h1>
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase flex items-center gap-2">
            <CreditCard size={14} className="text-[#B8962E]" />
            HISOB-KITOB VA TO'LOV TARIXI
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subscription Info */}
          <div className="lg:col-span-1 space-y-6">
              <div className="bg-[#2D2424] text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-white opacity-5 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={120} />
                  </div>
                  <div className="relative space-y-8">
                      <div className="space-y-1">
                          <p className="text-[10px] font-bold text-[#B8962E] uppercase tracking-widest">Sizning balansingiz</p>
                          <h2 className="text-4xl font-black italic">Faol Emas</h2>
                      </div>
                      <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-bold py-2 border-b border-white/10 text-gray-400">
                              <span>Faol taklifnomalar</span>
                              <span className="text-white">1 ta</span>
                          </div>
                          <div className="flex items-center justify-between text-xs font-bold py-2 border-b border-white/10 text-gray-400">
                              <span>Jami to'lovlar</span>
                              <span className="text-white">50 000 so'm</span>
                          </div>
                      </div>
                      <button className="w-full py-4 bg-[#B8962E] text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#B8962E]/20">
                          Balansni to'ldirish
                      </button>
                  </div>
              </div>

              <div className="bg-white border border-[#EAD0A8]/20 rounded-[2.5rem] p-8 space-y-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <Heart size={16} className="text-red-400" fill="currentColor" />
                      Yordam kerakmi?
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">To'lovlarda muammo bo'lsa yoki maxsus buyurtma qilmoqchi bo'lsangiz, biz bilan bog'laning.</p>
                  <a href="https://t.me/taklifnoma_asia" target="_blank" className="text-xs font-bold text-[#B8962E] uppercase tracking-widest flex items-center gap-2 mt-2">
                      Telegram orqali bog'lanish <ArrowRight size={14} />
                  </a>
              </div>
          </div>

          {/* Payment History */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-[#EAD0A8]/20 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-[#EAD0A8]/10 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs font-black">Oxirgi to'lovlar</h3>
                  <div className="w-8 h-8 rounded-full bg-[#B8962E]/10 flex items-center justify-center text-[#B8962E]">
                      <Clock size={16} />
                  </div>
              </div>
              <div className="overflow-x-auto">
                  <table className="w-full text-left">
                      <thead>
                          <tr className="border-b border-[#EAD0A8]/5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                              <th className="px-8 py-6">ID</th>
                              <th className="px-8 py-6">Loyixa</th>
                              <th className="px-8 py-6">Miqdor</th>
                              <th className="px-8 py-6">Sana</th>
                              <th className="px-8 py-6 text-right">Xolati</th>
                          </tr>
                      </thead>
                      <tbody>
                          {mockPayments.map((p) => (
                              <tr key={p.id} className="border-b border-[#EAD0A8]/5 hover:bg-[#FDFCF9] transition-colors group">
                                  <td className="px-8 py-6 text-xs font-bold text-gray-400">{p.id}</td>
                                  <td className="px-8 py-6 text-xs font-bold text-gray-900">
                                      <Link href={`/${p.slug}`} className="hover:text-[#B8962E] transition-colors">{p.slug}</Link>
                                  </td>
                                  <td className="px-8 py-6 text-xs font-black text-gray-900">{p.amount} so'm</td>
                                  <td className="px-8 py-6 text-xs font-bold text-gray-400">{p.date}</td>
                                  <td className="px-8 py-6 text-right">
                                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                          p.status === 'Muvaffaqiyatli' 
                                          ? 'bg-green-50 text-green-600' 
                                          : 'bg-orange-50 text-orange-600'
                                      }`}>
                                          {p.status}
                                      </span>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              {mockPayments.length === 0 && (
                  <div className="p-20 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto text-gray-300">
                          <CreditCard size={32} />
                      </div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sizda hali to'lovlar mavjud emas</p>
                  </div>
              )}
          </div>
      </div>
    </div>
  );
}
