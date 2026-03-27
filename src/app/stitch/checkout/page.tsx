'use client';

import React from 'react';
import Link from 'next/link';

const StitchCheckoutPage = () => {
  return (
    <div className="bg-gilded-surface text-gilded-on-surface font-body selection:bg-gilded-primary-container selection:text-gilded-on-primary-container min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-20 bg-gilded-surface/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <button className="text-gilded-primary transition-all active:opacity-70 active:scale-95">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <Link href="/stitch" className="font-headline text-xl tracking-[0.10em] text-gilded-primary font-medium lowercase hover:opacity-80 transition-opacity">
          taklifnoma.asia
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/stitch/cart" className="text-gilded-primary transition-all active:opacity-70 active:scale-95">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
        </div>
      </header>
      <div className="bg-gilded-surface-container h-[1px] w-full block fixed top-20 z-50"></div>

      <main className="pt-32 pb-24 px-6 lg:px-20 max-w-7xl mx-auto min-h-screen">
        {/* Multi-step Indicator */}
        <div className="flex justify-center items-center gap-4 mb-20">
          <div className="flex items-center gap-3">
            <span className="text-gilded-primary font-headline text-lg italic">01</span>
            <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gilded-primary">YETKAZIB BERISH</span>
          </div>
          <div className="w-12 h-[1px] bg-gilded-outline-variant opacity-30"></div>
          <div className="flex items-center gap-3 opacity-50">
            <span className="text-gilded-on-surface-variant font-headline text-lg italic">02</span>
            <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gilded-on-surface-variant">TO'LOV</span>
          </div>
          <div className="w-12 h-[1px] bg-gilded-outline-variant opacity-30"></div>
          <div className="flex items-center gap-3 opacity-50">
            <span className="text-gilded-on-surface-variant font-headline text-lg italic">03</span>
            <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gilded-on-surface-variant">TEKSHIRUV</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Checkout Forms */}
          <div className="lg:col-span-7 space-y-20">
            {/* Shipping Form Section */}
            <section>
              <h2 className="font-headline text-2xl mb-12 tracking-tight">Yetkazib berish ma'lumotlari</h2>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Ism</label>
                    <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="JULIAN" type="text"/>
                  </div>
                  <div className="relative group">
                    <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Familiya</label>
                    <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="BEAUMONT" type="text"/>
                  </div>
                </div>
                <div className="relative group">
                  <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Manzil</label>
                  <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="TOSHKENT SHAHRI, AMIR TEMUR KO'CHASI, 102-UY" type="text"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="md:col-span-2">
                    <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Shahar</label>
                    <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="TOSHKENT" type="text"/>
                  </div>
                  <div>
                    <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Pochta indeksi</label>
                    <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="100001" type="text"/>
                  </div>
                </div>
              </form>
            </section>

            {/* Delivery Methods Section */}
            <section>
              <h2 className="font-headline text-2xl mb-12 tracking-tight">Yetkazib berish turi</h2>
              <div className="space-y-4">
                <label className="relative flex items-center justify-between p-6 bg-gilded-surface-container border border-gilded-primary/20 cursor-pointer group hover:bg-gilded-surface-container-high transition-all">
                  <input defaultChecked className="sr-only" name="delivery" type="radio"/>
                  <div className="flex items-center gap-6">
                    <div className="w-5 h-5 border border-gilded-primary flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-gilded-primary"></div>
                    </div>
                    <div>
                      <div className="font-manrope text-xs tracking-[0.15em] text-gilded-primary uppercase">Ekspress Oltin</div>
                      <div className="text-gilded-on-surface-variant text-sm mt-1">2-3 ish kuni • Premium darajadagi xizmat</div>
                    </div>
                  </div>
                  <div className="font-headline italic text-lg text-gilded-primary">45 000 UZS</div>
                </label>
                <label className="relative flex items-center justify-between p-6 bg-gilded-surface-container border border-transparent cursor-pointer group hover:border-gilded-outline-variant transition-all">
                  <input className="sr-only" name="delivery" type="radio"/>
                  <div className="flex items-center gap-6">
                    <div className="w-5 h-5 border border-gilded-outline-variant flex items-center justify-center group-hover:border-gilded-primary">
                      <div className="w-2.5 h-2.5 bg-gilded-primary opacity-0 transition-opacity"></div>
                    </div>
                    <div>
                      <div className="font-manrope text-xs tracking-[0.15em] text-gilded-on-surface uppercase">Standart</div>
                      <div className="text-gilded-on-surface-variant text-sm mt-1">5-7 ish kuni</div>
                    </div>
                  </div>
                  <div className="font-headline italic text-lg text-gilded-on-surface">12 000 UZS</div>
                </label>
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <h2 className="font-headline text-2xl mb-12 tracking-tight">To'lov turi</h2>
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="flex-1 flex items-center justify-center gap-3 p-4 bg-gilded-surface-container-highest border border-transparent hover:border-gilded-primary/40 transition-all">
                  <span className="material-symbols-outlined text-gilded-primary">credit_card</span>
                  <span className="font-manrope text-[10px] tracking-widest uppercase">Karta</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-3 p-4 bg-gilded-surface-container-highest border border-transparent hover:border-gilded-primary/40 transition-all">
                  <span className="material-symbols-outlined text-gilded-primary">account_balance</span>
                  <span className="font-manrope text-[10px] tracking-widest uppercase">Bank o'tkazmasi</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-3 p-4 bg-gilded-surface-container-highest border border-transparent hover:border-gilded-primary/40 transition-all">
                  <span className="material-symbols-outlined text-gilded-primary">payments</span>
                  <span className="font-manrope text-[10px] tracking-widest uppercase">Naqd pul</span>
                </button>
              </div>
              <div className="space-y-10">
                <div className="relative group">
                  <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Karta egasining ismi</label>
                  <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="JULIAN BEAUMONT" type="text"/>
                </div>
                <div className="relative group">
                  <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Karta raqami</label>
                  <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="**** **** **** 4829" type="text"/>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">Amal qilish muddati</label>
                    <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="MM/YY" type="text"/>
                  </div>
                  <div className="relative group">
                    <label className="block font-manrope text-[10px] tracking-[0.1em] text-gilded-on-surface-variant uppercase mb-2">CVV</label>
                    <input className="w-full bg-transparent border-0 border-b border-gilded-outline-variant py-2 text-gilded-on-surface focus:border-gilded-primary transition-all duration-300 outline-none" placeholder="***" type="password"/>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              <div className="bg-gilded-surface-container p-10">
                <h3 className="font-headline text-xl mb-10 tracking-tight">Buyurtma xulosasi</h3>
                {/* Order Items */}
                <div className="space-y-8 mb-10 pb-10 border-b border-gilded-outline-variant/20">
                  <div className="flex gap-6 items-start">
                    <div className="w-20 h-28 bg-gilded-surface-container-highest flex-shrink-0 relative overflow-hidden">
                      <img className="w-full h-full object-cover opacity-80" alt="Versailles Collection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkEofzgoorB8RobnjqFlWNyTjIoBC08XfQthzPURzvr-McAl5YG5UYniETQN8b5Gz-reClnP4BZkfpZYN56ATYaGNZ5lPViQtGjZiBX_q9z_p2NY4eWCs0TM_V9Eyu8AoKnGbGV4hATgaOIAbrs6Y99s95VESAA-08053W-NfutS8Z_AMu-aJtJ6DrOcG0fZIam1a5xoRzn3oIN1Fmo5Z-I9Gj5wLkRnimntOtsuqzTcdU-UJFAUcElR4lO9WmehROQUhpYm9VJXM"/>
                    </div>
                    <div className="flex flex-col justify-between flex-grow h-28 py-1">
                      <div>
                        <div className="font-manrope text-[10px] tracking-widest text-gilded-primary uppercase mb-1">Taklifnoma to'plami</div>
                        <h4 className="font-headline text-lg leading-tight">The Versailles To'plami</h4>
                        <p className="text-xs text-gilded-on-surface-variant mt-1">Miqdor: 100 • Vellum Wrap</p>
                      </div>
                      <div className="font-headline italic text-on-surface">1 450 000 UZS</div>
                    </div>
                  </div>
                </div>
                {/* Calculations */}
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gilded-on-surface-variant tracking-wider font-manrope text-[10px] uppercase">MAHSULOTLAR</span>
                    <span className="text-gilded-on-surface">1 450 000 UZS</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gilded-on-surface-variant tracking-wider font-manrope text-[10px] uppercase">YETKAZIB BERISH (EKSRESS OLTIN)</span>
                    <span className="text-gilded-on-surface">45 000 UZS</span>
                  </div>
                </div>
                {/* Total */}
                <div className="flex justify-between items-end mb-12">
                  <span className="font-headline text-2xl tracking-tight">JAMI</span>
                  <div className="text-right">
                    <div className="font-headline italic text-3xl text-gilded-primary">1 495 000 UZS</div>
                    <div className="text-[10px] tracking-widest text-gilded-on-surface-variant font-manrope uppercase">UZS</div>
                  </div>
                </div>
                {/* CTA */}
                <button className="w-full py-5 bg-gilded-primary text-gilded-on-primary font-manrope text-[11px] tracking-[0.3em] font-bold uppercase transition-all hover:bg-gilded-primary-container active:scale-[0.98] duration-300">
                  Buyurtmani tasdiqlash
                </button>
                {/* Security & Trust */}
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 text-gilded-on-surface-variant opacity-60">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="font-manrope text-[9px] tracking-widest uppercase">XAVFSIZ VA SHIFRLANGAN TRANZAKSIYA</span>
                  </div>
                  <Link className="font-manrope text-[9px] tracking-widest uppercase text-gilded-on-surface-variant hover:text-gilded-primary transition-colors border-b border-transparent hover:border-gilded-primary pb-0.5" href="#">MAXFIYLIK SIYOSATI</Link>
                </div>
              </div>
              {/* Artisan Note */}
              <div className="p-8 border border-gilded-primary/10 flex gap-6 items-center">
                <span className="material-symbols-outlined text-gilded-primary text-3xl">auto_awesome</span>
                <p className="text-xs italic text-gilded-on-surface-variant leading-relaxed">
                  Har bir to'plam bizning ustaxonamizda ustalar tomonidan qo'lda tayyorlanadi. Oltin hoshiya teksturasidagi biroz farqlar uning haqiqiyligi belgisidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gilded-surface border-t border-gilded-surface-container mt-20">
        <div className="max-w-7xl mx-auto py-20 px-10 flex flex-col items-center text-center space-y-8">
          <Link href="/stitch" className="font-headline text-lg text-gilded-primary mb-4 lowercase tracking-[0.1em] hover:opacity-80 transition-opacity">taklifnoma.asia</Link>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">MAXFIYLIK</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">SHARTLAR</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">ALOQA</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">MAHORAT</Link>
          </div>
          <p className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant uppercase">© 2026 TAKLIFNOMA.ASIA. BARCHA HUQUQLAR HIMOYA QILINGAN.</p>
        </div>
      </footer>

    </div>
  );
};

export default StitchCheckoutPage;
