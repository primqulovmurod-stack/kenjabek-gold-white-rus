'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const StitchCustomizerPage = () => {
  const [names, setNames] = useState('Asal & Behruz');
  const [date, setDate] = useState('24.08.2026');
  const [time, setTime] = useState('18:00');
  const [location, setLocation] = useState("Tashkent, Navoi ko'chasi, 12\n\"Oltin Saroy\" restorani");
  const [message, setMessage] = useState('Sizni hayotimizdagi eng quvonchli kunda kutamiz...');

  return (
    <div className="bg-gilded-surface text-gilded-on-surface font-body selection:bg-gilded-primary/30 min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-20 bg-gilded-surface/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <button className="text-gilded-primary active:opacity-70 active:scale-95 transition-all">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <Link href="/stitch" className="font-headline text-xl tracking-[0.10em] text-gilded-primary font-medium lowercase hover:opacity-80 transition-opacity">
          taklifnoma.asia
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/stitch/cart" className="text-gilded-primary active:opacity-70 active:scale-95 transition-all">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
        </div>
      </header>
      <div className="fixed top-20 bg-gilded-surface-container h-[1px] w-full block z-50"></div>

      <main className="pt-28 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Customization Controls */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <div>
              <span className="font-manrope text-[10px] tracking-[0.2em] text-gilded-primary uppercase mb-2 block">Atelye Shaxsiylashtirish</span>
              <h2 className="font-headline text-3xl text-gilded-on-surface tracking-tight">Taklifnomangizni tahrirlash</h2>
              <p className="text-gilded-on-surface-variant mt-4 font-body leading-relaxed max-w-md">
                Hashamatli taklifnomangizning har bir detalini sozlang. Bizning raqamli atelyemiz sizning tasavvuringizni yuqori sifatli qog'ozda aks ettirishni ta'minlaydi.
              </p>
            </div>

            {/* Input Fields Section */}
            <div className="space-y-8">
              <div className="relative">
                <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-1 block">Kelin-Kuyov ismlari</label>
                <input 
                  className="w-full bg-transparent border-b border-gilded-outline-variant py-3 focus:border-gilded-primary focus:ring-0 transition-colors text-lg font-headline placeholder:text-gilded-surface-container-highest outline-none" 
                  value={names}
                  onChange={(e) => setNames(e.target.value)}
                  placeholder="Asal & Behruz" 
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                  <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-1 block">Sana</label>
                  <input 
                    className="w-full bg-transparent border-b border-gilded-outline-variant py-3 focus:border-gilded-primary focus:ring-0 transition-colors text-lg font-body placeholder:text-gilded-surface-container-highest outline-none" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="24.08.2026" 
                    type="text"
                  />
                </div>
                <div className="relative">
                  <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-1 block">Vaqti</label>
                  <input 
                    className="w-full bg-transparent border-b border-gilded-outline-variant py-3 focus:border-gilded-primary focus:ring-0 transition-colors text-lg font-body placeholder:text-gilded-surface-container-highest outline-none" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="18:00" 
                    type="text"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-1 block">Manzil</label>
                <input 
                  className="w-full bg-transparent border-b border-gilded-outline-variant py-3 focus:border-gilded-primary focus:ring-0 transition-colors text-lg font-body placeholder:text-gilded-surface-container-highest outline-none" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Toshkent, Navoiy ko'chasi, 12" 
                  type="text"
                />
              </div>
              <div className="relative">
                <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-1 block">Taklif matni</label>
                <textarea 
                  className="w-full bg-transparent border-b border-gilded-outline-variant py-3 focus:border-gilded-primary focus:ring-0 transition-colors text-lg font-body leading-relaxed placeholder:text-gilded-surface-container-highest resize-none outline-none" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Sizni hayotimizdagi eng quvonchli kunda kutamiz..." 
                  rows={4}
                ></textarea>
              </div>
            </div>

            {/* Tools Section */}
            <div className="space-y-10 pt-4">
              <div>
                <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-4 block">Tipografik uslub</label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="border border-gilded-primary py-4 px-2 text-gilded-primary font-headline text-sm bg-gilded-surface-container-low transition-all">Klassik</button>
                  <button className="border border-gilded-outline-variant py-4 px-2 text-gilded-on-surface-variant font-body text-sm hover:border-gilded-outline transition-all">Zamonaviy</button>
                  <button className="border border-gilded-outline-variant py-4 px-2 text-gilded-on-surface-variant italic font-headline text-sm hover:border-gilded-outline transition-all">Qo'lyozma</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-12">
                <div>
                  <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-4 block">Tekislash</label>
                  <div className="flex gap-4">
                    <button className="text-gilded-primary"><span className="material-symbols-outlined">format_align_left</span></button>
                    <button className="text-gilded-on-surface-variant hover:text-gilded-primary transition-colors"><span className="material-symbols-outlined">format_align_center</span></button>
                    <button className="text-gilded-on-surface-variant hover:text-gilded-primary transition-colors"><span className="material-symbols-outlined">format_align_right</span></button>
                  </div>
                </div>
                <div>
                  <label className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase mb-4 block">Oltin hoshiya</label>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-gradient-to-br from-gilded-primary to-gilded-primary-container cursor-pointer ring-2 ring-offset-2 ring-offset-gilded-surface ring-gilded-primary"></div>
                    <div className="w-6 h-6 bg-slate-300 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-offset-gilded-surface hover:ring-slate-300 transition-all"></div>
                    <div className="w-6 h-6 bg-zinc-900 cursor-pointer border border-gilded-outline-variant hover:ring-2 hover:ring-offset-2 hover:ring-offset-gilded-surface hover:ring-zinc-900 transition-all"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-8">
              <Link href="/stitch/cart" className="w-full bg-gradient-to-br from-gilded-primary to-gilded-primary-container text-gilded-on-primary font-manrope text-xs tracking-[0.2em] py-5 px-8 flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all">
                SAQLASH VA DAVOM ETISH
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Preview Area */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full bg-gilded-surface-container flex items-center justify-center p-8 lg:p-16 overflow-hidden">
                {/* Floating Controls for Preview */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 z-10">
                  <button className="w-10 h-10 bg-gilded-surface/80 backdrop-blur-md flex items-center justify-center text-gilded-primary border border-gilded-outline-variant/30">
                    <span className="material-symbols-outlined text-xl">zoom_in</span>
                  </button>
                  <button className="w-10 h-10 bg-gilded-surface/80 backdrop-blur-md flex items-center justify-center text-gilded-on-surface-variant border border-gilded-outline-variant/30">
                    <span className="material-symbols-outlined text-xl">layers</span>
                  </button>
                </div>
                
                {/* Invitation Paper Surface */}
                <div className="relative w-full h-full bg-[#fdfcf8] p-12 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
                  <div className="absolute inset-0 border-[20px] border-double border-gilded-primary/20 m-6"></div>
                  <div className="relative z-10 space-y-8 max-w-sm">
                    <div className="text-gilded-primary opacity-60">
                      <span className="material-symbols-outlined text-5xl font-light">auto_awesome</span>
                    </div>
                    <h3 className="font-headline text-4xl text-[#2d3137] tracking-tight leading-tight">{names}</h3>
                    <div className="w-12 h-[1px] bg-gilded-primary/40 mx-auto"></div>
                    <p className="font-headline italic text-lg text-[#554300]/80 whitespace-pre-wrap">
                      {message}
                    </p>
                    <div className="space-y-2 pt-4">
                      <p className="font-manrope text-xs tracking-[0.2em] text-[#2d3137] uppercase">{date}</p>
                      <p className="font-manrope text-[10px] tracking-widest text-gilded-primary uppercase">SOAT {time} DA</p>
                    </div>
                    <div className="pt-6">
                      <p className="font-manrope text-xs text-[#554300]/60 uppercase tracking-widest whitespace-pre-wrap">
                        {location}
                      </p>
                    </div>
                  </div>
                  {/* Decorative Gold Leaf */}
                  <img 
                    className="absolute bottom-0 right-0 w-32 h-32 opacity-30 pointer-events-none" 
                    alt="Gold Leaf decoration" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAay90b-LHiFSNVhqIGI9IhrWmKwLz9IVwXf0nU1KI7JEiBAPHuzrAf9SEuI7hCLer9aXvF5gEKwPK77l9WfnKL00ccCAEhcgq9IQb6DZXoiHCkfQV1zZplTRta1ilNqL22f8Nfg9anWtwqEKsuHBLoBJJIdAPxcy9ZqsmieWJzpvN5ku8sKUvAfXda8EVEXBMhqX_kacgjOQ_flGZxoqC9yowkVx_fwmBztCcauSSxbjHSbkx1B720eknyVTwo4TL1nkpLmIe3Oo"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center px-2">
                <div className="flex gap-4">
                  <button className="font-manrope text-[10px] tracking-widest text-gilded-primary border-b border-gilded-primary pb-1">ASOSIY KO'RINISH</button>
                  <button className="font-manrope text-[10px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-on-surface pb-1 transition-colors">ICHKI QISM</button>
                  <button className="font-manrope text-[10px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-on-surface pb-1 transition-colors">KONVERT</button>
                </div>
                <span className="font-manrope text-[10px] tracking-widest text-gilded-outline uppercase">Qog'oz: 300gsm Cotton Vellum</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gilded-surface border-t border-gilded-surface-container mt-20">
        <div className="w-full py-20 px-10 flex flex-col items-center text-center space-y-8 max-w-7xl mx-auto">
          <Link href="/stitch" className="font-headline text-lg text-gilded-primary mb-4 lowercase tracking-[0.1em] hover:opacity-80 transition-opacity">taklifnoma.asia</Link>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all whitespace-nowrap">MAXFIYLIK</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all whitespace-nowrap">SHARTLAR</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all whitespace-nowrap">ALOQA</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all whitespace-nowrap">MAHORAT</Link>
          </div>
          <div className="font-manrope text-[11px] tracking-widest text-gilded-primary-container opacity-60 uppercase">© 2026 TAKLIFNOMA.ASIA. BARCHA HUQUQLAR HIMOYA QILINGAN.</div>
        </div>
      </footer>

      {/* Moblie Footer Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 bg-gilded-surface/95 backdrop-blur-lg border-t border-gilded-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <Link href="/stitch" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">home</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">ASOSIY</span>
        </Link>
        <Link href="/stitch/collections" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">KOLLEKSIYA</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">person</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">PROFIL</span>
        </Link>
        <Link href="/stitch/cart" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">SAVAT</span>
        </Link>
      </nav>
    </div>
  );
};

export default StitchCustomizerPage;
