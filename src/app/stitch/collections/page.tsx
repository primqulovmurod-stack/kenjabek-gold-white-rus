'use client';

import React from 'react';
import Link from 'next/link';

const StitchCollectionsPage = () => {
  return (
    <div className="bg-gilded-surface text-gilded-on-surface font-body selection:bg-gilded-primary-container/30 selection:text-gilded-primary overflow-x-hidden min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-20 bg-gilded-surface/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <button className="text-gilded-on-surface-variant hover:text-gilded-primary transition-colors duration-300 active:opacity-70 active:scale-95">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <Link href="/stitch" className="font-headline text-xl tracking-[0.10em] text-gilded-primary font-medium lowercase hover:opacity-80 transition-opacity">taklifnoma.asia</Link>
        <div className="flex items-center gap-4">
          <Link href="/stitch/cart" className="text-gilded-on-surface-variant hover:text-gilded-primary transition-colors duration-300 active:opacity-70 active:scale-95">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
        </div>
      </header>
      <div className="fixed top-20 bg-gilded-surface-container h-[1px] w-full block z-50"></div>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Search and Introduction */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-xl">
              <span className="font-manrope text-[10px] tracking-[0.3em] text-gilded-primary uppercase mb-4 block">Arxiv 2026</span>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                Taklifnomalar <span className="italic text-gold-gradient">San'ati</span>
              </h1>
            </div>
            <div className="w-full md:w-80">
              <div className="relative group">
                <input 
                  className="w-full bg-transparent border-b border-gilded-outline/30 focus:border-gilded-primary py-3 px-0 font-manrope text-xs tracking-widest uppercase transition-all outline-none focus:ring-0" 
                  placeholder="Kolleksiyalarni qidirish..." 
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-0 top-3 text-gilded-outline/50 group-focus-within:text-gilded-primary">search</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <nav className="mb-16 flex flex-col md:flex-row gap-8 items-center justify-between sticky top-24 z-40 bg-gilded-surface/80 backdrop-blur-sm py-4">
          <div className="flex gap-10 overflow-x-auto hide-scrollbar w-full md:w-auto">
            <button className="font-manrope text-[11px] tracking-widest text-gilded-primary border-b border-gilded-primary pb-1 whitespace-nowrap">BARCHA ISHLAR</button>
            <button className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary transition-colors pb-1 whitespace-nowrap">ONLINE TAKLIFNOMA</button>
            <button className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary transition-colors pb-1 whitespace-nowrap">TO'Y</button>
            <button className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary transition-colors pb-1 whitespace-nowrap">BIZNES</button>
            <button className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary transition-colors pb-1 whitespace-nowrap">MAXSUS</button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant group-hover:text-gilded-primary">NARX ORALIG'I</span>
              <span className="material-symbols-outlined text-gilded-outline text-sm">expand_more</span>
            </div>
            <div className="h-4 w-[1px] bg-gilded-outline/20"></div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant group-hover:text-gilded-primary">SARALASH</span>
              <span className="material-symbols-outlined text-gilded-outline text-sm">sort</span>
            </div>
          </div>
        </nav>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {[
            { id: 1, collection: "Qirollik Kolleksiyasi", title: "Oltin Barg To'plami", price: "450 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs7mPUa-zpuq0G4SScDNauAGdcrwmrWta0k3nQZESzbDj9YkagUzqB54pzKqkpGA7zQGhH9ltPYzs1ZXylBXntA6VOCma5Lq2pNec1dUqDDauUh0J46Qzs1Eea8IXmeRnxQzLfj4pB87WH6wP3Lox_z1LICRpOrflzFheWj0yeUd2QSYN7-GV_DacpIrjJXU3h_UZfK4wsORmmqDX9KH-_HIi6hE3v180mtUmOiB_HfGk4L4vJHswgZ-SJNL4KDsil2K5hlMPvXps", offset: false },
            { id: 2, collection: "Sardorlar To'plami", title: "Qora Marvarid", price: "380 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb7LSPJC0hSfNHVFDEKq3-UuiX09PRmwz5JmBKItWBP373rCyUDENpEk5UTIUALTIXVcbRe99NkdpEuI4fgotWxoieWtDetvfEHB6kj3yc7dfNHQ4AAVMeKHfZ7-0alnyppu6QMcxyiyemnf3tLtLD1tmxndTH8CpKVq8G_mWzbcIRD8KzyT6n9Uk3zUBKfgEnde5tm3xnL64qhtt05143mo7jiWKfKpJHdLtrkMir2XFe7y_Q1hi8yorSThRrrVfjhAnIfYpN76E", offset: true },
            { id: 7, collection: "Online Taklifnoma", title: "Gold White (Rus)", price: "Online", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJY6oc4m9UYkr4DAZLkRRQgwcqIW9BA6lcSh6nfodHXDxr4cQOil0YCashTqvFTEKIDutn5pnAFVmr1dUAlKajlbj1Az_xksEiyecL4mXg7MTWAYFhpfDNFFAyeMBo1SbWOEYeqSVg32jAbxb1LfS6h0hPmhGNWMjFOGHLnB1WzspSxhSxU2CLtX0_wjGi8vGk-94di19XOaDpZ9m47KEw7iJGNQzXTMQLdEVlrw3ibYSe2jQ8o-Rhb7dz1gMajrJuFA886RG8-f0", offset: false, external: "https://kenjabek-gold-white-rus.vercel.app/" },
            { id: 8, collection: "Online Taklifnoma", title: "Gold White Classic", price: "Online", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEGzLlNnrDbbBVsGt0dINPnOXLjinqiV3dTKacWgUg0qaBh6KQw8tJsPcPe8J1L33XAOB2YdGEBb-HjX4JMUUMVdV3yyq847s7vzzhw6_TA8Xe3fx-CTTXtpTt4yCSyGSD2nA9VbX2B2JfJ9oJ2z022VnpP8SrosVYbz0gMPI41HT3lOnng4EcwWt3g-v3Fn19NXmgIHJufqx3raJqyWn1QeVXy32zYArDw910YfaQ2e9RxxlMI0-KVoBJM5hdn6kJ-VmWOTA82ZQ", offset: true, external: "https://kenjabek-gold-white.vercel.app/" },
            { id: 9, collection: "Online Taklifnoma", title: "Snejana Gold White", price: "Online", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBarWaxYj1Bl_vJnXW1w_CkywXSTh51YtQhTxmwD3DHsUYCUH_FuGisl123su5Fng5J2O3-OYHFt0FM703beY-dMPT46-zgfKn4kkYxI8c7oeXHb4mxb0eoBD-j-02EGXGVgtcOnuV0kl8TdggsLf_0WitEsJpKgXhex6-aIAkA0vwmAZuNaaizFAosTAF168nOuED9CsKKTXZgnymXXx1OTJmsjdY_p-CCrmjxpewmZU2nYBORk7yX1vaiT55JtJaZdKERSWvjRc", offset: false, external: "https://kenjabek-snejana-gold-white.vercel.app/" },
            { id: 10, collection: "Online Taklifnoma", title: "Pink Classic Edition", price: "Online", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSLKCaewMcTnRI_R1BNBnmfMN4I-U7vfFd_Kx_lbDjAZ0e11ZNLJBTupXM1i3RSPi4D3HmuHaqCN940qS_CaXUf5O-oTC-fLI85WRg3Q6Z0htZ4G_OJB_Z38JIND_np0TemCpQWcV8A3gynCI7-BADzQuhbMkZEVrnyE5CkCOyywcQk8L-osi2BLfHjxydU9LsZAR8zJqXgI5IQrkSUumUjhcy7npnH4QvoIGYB8lr0NfliNUpSLzrrBZpsveCINHiI8njmBsCSGU", offset: true, external: "https://kenjabek-snejana-pink-classic.vercel.app/" },
            { id: 4, collection: "Art Deko", title: "Geometrik Nur", price: "420 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEGzLlNnrDbbBVsGt0dINPnOXLjinqiV3dTKacWgUg0qaBh6KQw8tJsPcPe8J1L33XAOB2YdGEBb-HjX4JMUUMVdV3yyq847s7vzzhw6_TA8Xe3fx-CTTXtpTt4yCSyGSD2nA9VbX2B2JfJ9oJ2z022VnpP8SrosVYbz0gMPI41HT3lOnng4EcwWt3g-v3Fn19NXmgIHJufqx3raJqyWn1QeVXy32zYArDw910YfaQ2e9RxxlMI0-KVoBJM5hdn6kJ-VmWOTA82ZQ", offset: false },
            { id: 5, collection: "Klassika", title: "Klassik Xat", price: "350 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAIdtMv6i_tTvHALFrTeHKr6vqw0htayBdpnltaHt13pYZ9Oiq_MZe5xvo6hyWgpkrKVwICagE8TQ0ZpNZIViUj0TNx8FIxEWCk5cm7nGJG8nEDcAxrWdw9MyaY-hiMfunGWJMqeD_kNWXtkTrzsG2Zys-5par5vZ3yXZv3yTPpxI-mvBsclGYu7NNorSyDtlPyFlnk51l4tDCX0tnsnpOXClZjAnhyCebeoJjtocS_7Qjx4C2jahyYzfPxklI9PveJ2M0d4ZaZ2A", offset: true },
            { id: 6, collection: "Yorqinlik", title: "Kumush Shoda", price: "480 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy-H77t_N4iPZYrnf2MvDwyO_Ej08Z6iPM14KNAKvkYIEJ-94NWF1430sLSR6CPGZblXLrWDw-lFT5UH9tlMDQFeX9Ry1xvFtUByAfWOsZPKns59MHuiv2VimW0Odh-GR2djBRCl77pRCBbbooUbudDl7pXcFpnGHu3QVa7PkR6z0N-BkWgNh4ZYcWI2LDL_w3a7CcNzXb5NFk3PVFOXlp-7JOIgm5ehgFqKAXZiTvTBbqbpV1qxNMO1XbA40xHiyQA20nUYRg_fs", offset: false }
          ].map((item) => (
            <article key={item.id} className={`group relative ${item.offset ? 'md:mt-12' : ''}`}>
              {item.external ? (
                <a href={item.external} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gilded-surface-container mb-6 p-4 border border-gilded-outline/10 group-hover:border-gilded-primary/30 transition-all duration-700">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
                    <img 
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                      alt={item.title} 
                      src={item.img}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gilded-surface/40 backdrop-blur-[2px]">
                      <span className="bg-gilded-primary text-gilded-on-primary px-8 py-3 font-manrope text-[10px] tracking-[0.2em] uppercase">Online Ko'rish</span>
                    </div>
                  </div>
                </a>
              ) : (
                <Link href={`/stitch/product/${item.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-gilded-surface-container mb-6 p-4 border border-gilded-outline/10 group-hover:border-gilded-primary/30 transition-all duration-700">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
                    <img 
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                      alt={item.title} 
                      src={item.img}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gilded-surface/40 backdrop-blur-[2px]">
                      <span className="bg-gilded-primary text-gilded-on-primary px-8 py-3 font-manrope text-[10px] tracking-[0.2em] uppercase">Batafsil ko'rish</span>
                    </div>
                  </div>
                </Link>
              )}
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-manrope text-[9px] tracking-[0.2em] text-gilded-outline uppercase mb-1 block">{item.collection}</span>
                  <h3 className="font-headline text-lg font-light text-gilded-on-surface">{item.title}</h3>
                </div>
                <span className="font-body text-sm font-medium text-gilded-primary-container">{item.price} <span className="text-[10px] text-gilded-outline font-light">/ DONA</span></span>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination / View More */}
        <div className="mt-32 flex flex-col items-center">
          <div className="h-12 w-[1px] bg-gilded-outline/30 mb-8"></div>
          <button className="group flex flex-col items-center gap-4">
            <span className="font-manrope text-[10px] tracking-[0.4em] text-gilded-on-surface-variant group-hover:text-gilded-primary transition-colors">KO'PROQ KO'RISH</span>
            <span className="material-symbols-outlined text-gilded-primary group-hover:translate-y-2 transition-transform">keyboard_double_arrow_down</span>
          </button>
        </div>
      </main>

      {/* Moblie Filter Button */}
      <button className="fixed bottom-24 right-8 z-[60] bg-gradient-to-br from-gilded-primary to-gilded-primary-container w-14 h-14 flex items-center justify-center shadow-lg active:scale-90 transition-transform md:hidden">
        <span className="material-symbols-outlined text-gilded-on-primary">filter_list</span>
      </button>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 bg-gilded-surface/95 backdrop-blur-lg border-t border-gilded-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <Link href="/stitch" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">home</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase">ASOSIY</span>
        </Link>
        <Link href="/stitch/collections" className="flex flex-col items-center justify-center text-gilded-primary bg-gilded-surface-container-highest/30 rounded-none p-2 transition-all active:scale-90">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase">KOLLEKSIYA</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">person</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase">PROFIL</span>
        </Link>
        <Link href="/stitch/cart" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all active:scale-90">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase">SAVAT</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="w-full py-20 px-10 border-t border-gilded-surface-container mt-20 flex flex-col items-center text-center space-y-8 max-w-7xl mx-auto mb-16">
        <Link href="/stitch" className="font-headline text-lg text-gilded-primary mb-4 lowercase tracking-[0.1em] hover:opacity-80 transition-opacity">taklifnoma.asia</Link>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <Link href="#" className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">MAXFIYLIK</Link>
          <Link href="#" className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">SHARTLAR</Link>
          <Link href="#" className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">ALOQA</Link>
        </div>
        <div className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-primary-container uppercase">© 2026 TAKLIFNOMA.ASIA. BARCHA HUQUQLAR HIMOYA QILINGAN.</div>
      </footer>


      <style jsx>{`
        .text-gold-gradient {
          background: linear-gradient(135deg, #f2ca50 0%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default StitchCollectionsPage;
