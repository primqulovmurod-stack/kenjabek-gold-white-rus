'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Lock, CheckCircle, ShieldCheck, X, ArrowRight, Heart } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  price?: string;
  invitationId?: string;
}

export default function PaymentModal({ isOpen, onClose, onSuccess, price = "190 000", invitationId = "YANGI" }: PaymentModalProps) {
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handlePay = () => {
    setStep('processing');
    setTimeout(() => {
        setStep('success');
    }, 2500);
  };

  const handleFinish = () => {
    onSuccess();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[1000] flex items-center justify-center p-6"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed z-[1010] w-full max-w-lg bg-white rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border border-[#FFE4E6] overflow-hidden"
          >
            {step === 'details' && (
                <div className="p-10 space-y-10">
                    <header className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="font-playfair text-3xl font-black text-gray-900 tracking-tight">To'lov</h2>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Xavfsiz va tezkor</p>
                        </div>
                        <button onClick={onClose} className="p-3 rounded-full hover:bg-gray-50 text-gray-300">
                            <X size={24} />
                        </button>
                    </header>

                    <div className="bg-[#E11D48]/5 rounded-[2.5rem] p-8 border border-[#FFE4E6]/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-[#E11D48] opacity-5">
                            <CreditCard size={120} />
                        </div>
                        <div className="relative space-y-2">
                             <p className="text-xs font-bold text-[#E11D48] uppercase tracking-widest leading-loose">Payme / Click</p>
                             <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-gray-900">{price}</span>
                                <span className="text-xl font-bold text-gray-400 uppercase">so'm</span>
                             </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Karta raqami (UZCARD / HUMO)</label>
                            <div className="relative">
                                <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                <input 
                                    placeholder="8600 **** **** ****"
                                    className="w-full pl-16 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#E11D48]/5 focus:border-[#E11D48]/30 outline-none transition-all text-sm font-medium"
                                    value={formData.cardNumber}
                                    onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Muddati</label>
                                <input 
                                    placeholder="MM/YY"
                                    className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#B8962E]/5 focus:border-[#B8962E]/30 outline-none transition-all text-sm font-medium"
                                    value={formData.expiry}
                                    onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">CVC/CVV</label>
                                <input 
                                    placeholder="***"
                                    className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#B8962E]/5 focus:border-[#B8962E]/30 outline-none transition-all text-sm font-medium"
                                    value={formData.cvc}
                                    onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    <footer className="pt-6">
                        <div className="space-y-4">
                            <div className="p-5 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
                                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Buyurtma ma'lumoti</p>
                                <p className="text-xs font-black text-[#E11D48] tracking-tight">{invitationId}</p>
                            </div>

                            <a 
                                href={`https://t.me/taklifnoma_asia?text=Assalomu alaykum, to'lovni amalga oshirdim. Buyurtma: ${invitationId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-4 py-6 rounded-[2rem] bg-[#229ED9] text-white font-black text-sm uppercase tracking-widest hover:brightness-110 shadow-xl shadow-[#229ED9]/20 transition-all group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
                                    <path d="M20.665 3.717C21.205 3.507 21.685 3.827 21.505 4.337L18.105 20.327C17.845 21.487 17.155 21.767 16.185 21.227L10.995 17.407L8.495 19.817C8.215 20.097 7.985 20.327 7.445 20.327L7.815 15.017L17.485 6.277C17.905 5.907 17.395 5.707 16.835 6.077L4.885 13.597L-0.255 11.987C-1.375 11.637 -1.395 10.867 0.205 10.247L20.665 3.717Z" fill="currentColor"/>
                                </svg>
                                <span>TELEGRAM ORQALI TASDIQLASH</span>
                            </a>

                            <button 
                                disabled={!formData.cardNumber}
                                onClick={handlePay}
                                className="w-full flex items-center justify-center gap-4 py-6 rounded-[2rem] bg-[#E11D48] text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-[#E11D48]/30 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                            >
                                <Lock size={18} />
                                <span>KARTA ORQALI TASDIQLASH</span>
                            </button>
                        </div>
                        <p className="mt-6 text-center flex items-center justify-center gap-2 text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                            <ShieldCheck size={14} className="text-green-400" />
                            Xavfsiz bank to'lovi • 3D Secure himoyasi
                        </p>
                    </footer>
                </div>
            )}

            {step === 'processing' && (
                <div className="p-20 text-center space-y-12">
                    <div className="relative">
                         <div className="w-24 h-24 border-4 border-[#E11D48]/10 border-t-[#E11D48] rounded-full animate-spin mx-auto"></div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#E11D48]">
                             <CreditCard size={32} />
                         </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-playfair text-2xl font-black text-gray-900">To'lov amalga oshirilmoqda</h3>
                        <p className="text-gray-400 text-sm font-medium">Iltimos, kutib turing...</p>
                    </div>
                </div>
            )}

            {step === 'success' && (
                <div className="p-16 text-center space-y-12 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 text-green-500 opacity-5">
                       <CheckCircle size={160} />
                    </div>
                    
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto border-4 border-green-100">
                        <CheckCircle size={48} className="text-green-500" />
                    </div>

                    <div className="space-y-6 relative z-10 text-center flex flex-col items-center">
                        <div className="space-y-2">
                            <h3 className="font-playfair text-3xl font-black text-gray-900 leading-tight">Muvaffaqiyatli!</h3>
                            <p className="text-gray-400 text-sm font-medium">Sizning to'lovingiz qabul qilindi. <br />Taklifnomangiz endi faol!</p>
                        </div>
                        
                        <div className="pt-8">
                            <button 
                                onClick={handleFinish}
                                className="w-full flex items-center justify-center gap-4 px-12 py-5 rounded-2xl bg-[#2D2424] text-white font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-black/10 group"
                            >
                                <span>Loyiha sahifasiga qaytish</span>
                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
