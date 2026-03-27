'use client';

import React from 'react';
import Link from 'next/link';

const StitchCartPage = () => {
  return (
    <div className="bg-gilded-surface text-gilded-on-surface font-body selection:bg-gilded-primary/30 min-h-screen">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-20 bg-gilded-surface/90 backdrop-blur-md z-50">
        <button className="text-gilded-on-surface-variant hover:text-gilded-primary transition-colors duration-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link href="/stitch" className="font-headline text-xl tracking-[0.10em] text-gilded-primary font-medium lowercase hover:opacity-80 transition-opacity">
          taklifnoma.asia
        </Link>
        <div className="relative">
          <Link href="/stitch/cart" className="text-gilded-primary transition-colors duration-300">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-2 bg-gilded-primary text-gilded-on-primary text-[10px] font-bold px-1 min-w-[14px] h-[14px] flex items-center justify-center rounded-full">2</span>
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-40 px-6 max-w-5xl mx-auto min-h-screen">
        {/* Title & Count */}
        <div className="mb-16">
          <span className="font-manrope text-[10px] tracking-[0.2em] text-gilded-primary uppercase mb-2 block">SIZNING TANLOVINGIZ</span>
          <h2 className="font-headline text-4xl md:text-5xl font-light tracking-tight">Savat</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Items Column */}
          <div className="lg:col-span-7 space-y-12">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-gilded-outline-variant/20">
              <div className="w-full md:w-44 aspect-[3/4] overflow-hidden bg-gilded-surface-container-high">
                <img 
                  alt="Luxury Wedding Invitation" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZAtARigKT5hKo2Fm3XxqFo8l1AYnaqIYyNg6iJOqsUShrNOT0D-iB_kN1JOIujnbwzoHINxQHzlNHwszwrm7S6HRDt39KxAUxVgUTBA_HL1OPUdWf9PVBuJsISw4YO457AdM0pGa6IDHiwZ2XvpZIZ81bhMppaSZe1MZCPrCUA53QbFdIbjjejBY9snsi92GZUP1xEtQj0tSt4fLlHZWZSZpAV7k3aTyyJZLGPb8XRn_LkF145eO1084ODv9gdhy0C3pGK5bV2w"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-xl text-gilded-on-surface">Oltin Bitik To'plami</h3>
                    <p className="text-gilded-on-surface-variant text-sm mt-1">Premium Vellum Qog'oz</p>
                  </div>
                  <button className="text-gilded-on-surface-variant hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                </div>
                <div className="bg-gilded-surface-container-low p-4 space-y-2">
                  <p className="text-[11px] font-manrope tracking-widest text-gilded-on-surface-variant uppercase">SHAXSIYLASHTIRISH</p>
                  <p className="text-sm font-light text-gilded-on-surface">Kelin-Kuyov: <span className="text-gilded-primary italic">Asal & Behruz</span></p>
                  <p className="text-sm font-light text-gilded-on-surface">Sana: <span className="text-gilded-primary">24.08.2026</span></p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-4 bg-gilded-surface-container border border-gilded-outline-variant/10 px-4 py-2">
                    <button className="text-gilded-primary hover:scale-110 active:scale-90 transition-transform"><span className="material-symbols-outlined text-lg">remove</span></button>
                    <span className="font-manrope text-sm w-8 text-center">100</span>
                    <button className="text-gilded-primary hover:scale-110 active:scale-90 transition-transform"><span className="material-symbols-outlined text-lg">add</span></button>
                  </div>
                  <p className="font-headline text-lg text-gilded-primary">4 500 000 UZS</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-gilded-outline-variant/20">
              <div className="w-full md:w-44 aspect-[3/4] overflow-hidden bg-gilded-surface-container-high">
                <img 
                  alt="Handmade Envelope" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5k-6ndMkGZMhlG3xB7sqdAjiFVOSjk1McHmRUMj5qYoHBmE7twLlT5Bk0irn3TLLV7EEOfv05s8jLQyfHhN9mnG6jdbNhohMJLglnYmL_w-WXWNTa8yzjz0BPl67A_1XC3NNSo348LCCo8pAtpu2co3gSl8HWU9SM-Q4MUW3HYO-1zNMfa-dPdHY4BVyHzsbAPnqrMzv3RF7fNZ6g4a-lp1eeYpCVWrGjg188SjBOMGA3XKJOlbrNENfu23lfqjl2otG2s25ihfg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-xl text-gilded-on-surface">Tungi Muhr</h3>
                    <p className="text-gilded-on-surface-variant text-sm mt-1">Qo'lda bosilgan mum muhr</p>
                  </div>
                  <button className="text-gilded-on-surface-variant hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                </div>
                <div className="bg-gilded-surface-container-low p-4 space-y-2">
                  <p className="text-[11px] font-manrope tracking-widest text-gilded-on-surface-variant uppercase">SHAXSIYLASHTIRISH</p>
                  <p className="text-sm font-light text-gilded-on-surface">Rang: <span className="text-gilded-primary">To'q ko'k va Oltin</span></p>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-4 bg-gilded-surface-container border border-gilded-outline-variant/10 px-4 py-2">
                    <button className="text-gilded-primary hover:scale-110 active:scale-90 transition-transform"><span className="material-symbols-outlined text-lg">remove</span></button>
                    <span className="font-manrope text-sm w-8 text-center">100</span>
                    <button className="text-gilded-primary hover:scale-110 active:scale-90 transition-transform"><span className="material-symbols-outlined text-lg">add</span></button>
                  </div>
                  <p className="font-headline text-lg text-gilded-primary">1 200 000 UZS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-5">
            <div className="bg-gilded-surface-container p-8 lg:p-12 sticky top-32">
              <h3 className="font-headline text-2xl mb-8">Savat jami</h3>
              <div className="space-y-6 pb-8 border-b border-gilded-outline-variant/30">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gilded-on-surface-variant font-light">Mahsulotlar (200 dona)</span>
                  <span className="text-gilded-on-surface">5 700 000 UZS</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gilded-on-surface-variant font-light">Dizayn xizmati</span>
                  <span className="text-gilded-on-surface">300 000 UZS</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gilded-on-surface-variant font-light">Yetkazib berish</span>
                  <span className="text-gilded-primary font-manrope text-[10px] tracking-widest uppercase">BEPUL</span>
                </div>
              </div>
              <div className="py-8 flex justify-between items-center">
                <span className="font-headline text-xl">Umumiy:</span>
                <span className="font-headline text-2xl text-gilded-primary tracking-tight">6 000 000 UZS</span>
              </div>
              <div className="space-y-4">
                <Link href="/stitch/checkout" className="w-full py-5 bg-gradient-to-br from-gilded-primary to-gilded-primary-container text-gilded-on-primary font-manrope text-xs tracking-[0.2em] font-bold uppercase hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center">
                  To'lovga o'tish
                </Link>
                <Link href="/stitch/collections" className="w-full py-5 border border-gilded-primary/20 text-gilded-primary font-manrope text-xs tracking-[0.2em] font-medium uppercase hover:bg-gilded-primary/5 transition-all flex items-center justify-center">
                  Katalogga qaytish
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-gilded-on-surface-variant opacity-60">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                <p className="text-[10px] tracking-widest leading-relaxed uppercase font-manrope">Xavfsiz to'lov va kafolatlangan yetkazib berish</p>
              </div>
            </div>
          </div>
        </div>
      </main>

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
        <Link href="/stitch/cart" className="flex flex-col items-center justify-center text-gilded-primary bg-gilded-surface-container-highest/30 rounded-none p-2">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>shopping_cart</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">SAVAT</span>
        </Link>
      </nav>

      {/* Desktop Footer */}
      <footer className="w-full py-20 px-10 bg-gilded-surface border-t border-gilded-surface-container mt-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-7xl mx-auto">
          <Link href="/stitch" className="font-headline text-lg text-gilded-primary mb-4 lowercase tracking-[0.1em] hover:opacity-80 transition-opacity">taklifnoma.asia</Link>
          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">MAXFIYLIK</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">SHARTLAR</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">ALOQA</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">MAHORAT</Link>
          </nav>
          <p className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-primary-container uppercase">© 2026 TAKLIFNOMA.ASIA. BARCHA HUQUQLAR HIMOYA QILINGAN.</p>
        </div>
      </footer>

    </div>
  );
};

export default StitchCartPage;
