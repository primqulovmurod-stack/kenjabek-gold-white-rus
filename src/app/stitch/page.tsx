'use client';

import React from 'react';
import Link from 'next/link';

const StitchHomePage = () => {
  return (
    <div className="bg-gilded-surface text-gilded-on-surface font-body selection:bg-gilded-primary selection:text-gilded-on-primary min-h-screen">
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
      
      <div className="fixed top-20 left-0 bg-gilded-surface-container h-[1px] w-full z-50"></div>

      <main className="pt-20 pb-32">
        {/* Hero Section: Intentional Asymmetry */}
        <section className="relative min-h-[795px] flex items-center px-6 md:px-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-12">
            <div className="md:col-span-7 z-10 space-y-8">
              <div className="font-manrope text-xs tracking-[0.3em] text-gilded-primary uppercase mb-4">Eksklyuziv To'plam</div>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-gilded-on-surface max-w-3xl">
                Unutilmas <span className="italic text-shimmer">lahzalar</span> uchun noyob taklifnomalar
              </h1>
              <div className="flex flex-wrap gap-8 pt-8 items-center">
                <Link href="/stitch/collections" className="bg-gilded-primary text-gilded-on-primary px-10 py-5 font-manrope text-sm tracking-widest font-bold hover:bg-gilded-primary-container transition-all active:scale-95">
                  KATALOGGA O'TISH
                </Link>
                <a href="https://t.me/taklifnoma_asia" target="_blank" rel="noopener noreferrer" className="border border-gilded-primary/20 text-gilded-primary px-10 py-5 font-manrope text-sm tracking-widest hover:border-gilded-primary transition-all active:scale-95 inline-block">
                  BOG'LANISH
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gilded-surface-container rotate-3 scale-105 opacity-50"></div>
              <img 
                className="relative z-10 w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Luxury wedding invitations"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBarWaxYj1Bl_vJnXW1w_CkywXSTh51YtQhTxmwD3DHsUYCUH_FuGisl123su5Fng5J2O3-OYHFt0FM703beY-dMPT46-zgfKn4kkYxI8c7oeXHb4mxb0eoBD-j-02EGXGVgtcOnuV0kl8TdggsLf_0WitEsJpKgXhex6-aIAkA0vwmAZuNaaizFAosTAF168nOuED9CsKKTXZgnymXXx1OTJmsjdY_p-CCrmjxpewmZU2nYBORk7yX1vaiT55JtJaZdKERSWvjRc"
              />
              <div className="absolute -bottom-10 -left-10 z-20 w-48 h-48 bg-gilded-primary/10 backdrop-blur-xl border border-gilded-primary/20 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-headline text-4xl text-gilded-primary">100+</span>
                <span className="font-manrope text-[10px] tracking-widest text-gilded-on-surface-variant uppercase mt-2">Noyob dizaynlar</span>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute top-1/4 right-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-gilded-primary/30"></div>
        </section>

        {/* Online Taklifnoma Section */}
        <section className="px-6 md:px-20 py-24 bg-gilded-surface-container/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-manrope text-xs tracking-[0.3em] text-gilded-primary uppercase mb-4 block">Raqamli Atelye</span>
              <h2 className="font-headline text-4xl md:text-5xl">Online taklifnomalar</h2>
            </div>
            <Link href="/stitch/collections" className="font-manrope text-[10px] tracking-[0.2em] text-gilded-on-surface-variant hover:text-gilded-primary transition-colors pb-1 border-b border-gilded-outline/20">BARCHASINI KO'RISH</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "Gold White (Rus)", link: "https://kenjabek-gold-white-rus.vercel.app/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJY6oc4m9UYkr4DAZLkRRQgwcqIW9BA6lcSh6nfodHXDxr4cQOil0YCashTqvFTEKIDutn5pnAFVmr1dUAlKajlbj1Az_xksEiyecL4mXg7MTWAYFhpfDNFFAyeMBo1SbWOEYeqSVg32jAbxb1LfS6h0hPmhGNWMjFOGHLnB1WzspSxhSxU2CLtX0_wjGi8vGk-94di19XOaDpZ9m47KEw7iJGNQzXTMQLdEVlrw3ibYSe2jQ8o-Rhb7dz1gMajrJuFA886RG8-f0" },
              { title: "Gold White", link: "https://kenjabek-gold-white.vercel.app/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEGzLlNnrDbbBVsGt0dINPnOXLjinqiV3dTKacWgUg0qaBh6KQw8tJsPcPe8J1L33XAOB2YdGEBb-HjX4JMUUMVdV3yyq847s7vzzhw6_TA8Xe3fx-CTTXtpTt4yCSyGSD2nA9VbX2B2JfJ9oJ2z022VnpP8SrosVYbz0gMPI41HT3lOnng4EcwWt3g-v3Fn19NXmgIHJufqx3raJqyWn1QeVXy32zYArDw910YfaQ2e9RxxlMI0-KVoBJM5hdn6kJ-VmWOTA82ZQ" },
              { title: "Snejana Gold", link: "https://kenjabek-snejana-gold-white.vercel.app/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBarWaxYj1Bl_vJnXW1w_CkywXSTh51YtQhTxmwD3DHsUYCUH_FuGisl123su5Fng5J2O3-OYHFt0FM703beY-dMPT46-zgfKn4kkYxI8c7oeXHb4mxb0eoBD-j-02EGXGVgtcOnuV0kl8TdggsLf_0WitEsJpKgXhex6-aIAkA0vwmAZuNaaizFAosTAF168nOuED9CsKKTXZgnymXXx1OTJmsjdY_p-CCrmjxpewmZU2nYBORk7yX1vaiT55JtJaZdKERSWvjRc" },
              { title: "Pink Classic", link: "https://kenjabek-snejana-pink-classic.vercel.app/", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSLKCaewMcTnRI_R1BNBnmfMN4I-U7vfFd_Kx_lbDjAZ0e11ZNLJBTupXM1i3RSPi4D3HmuHaqCN940qS_CaXUf5O-oTC-fLI85WRg3Q6Z0htZ4G_OJB_Z38JIND_np0TemCpQWcV8A3gynCI7-BADzQuhbMkZEVrnyE5CkCOyywcQk8L-osi2BLfHjxydU9LsZAR8zJqXgI5IQrkSUumUjhcy7npnH4QvoIGYB8lr0NfliNUpSLzrrBZpsveCINHiI8njmBsCSGU" }
            ].map((item, idx) => (
              <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="group block relative aspect-[3/4] overflow-hidden bg-gilded-surface shadow-2xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-gilded-surface to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="font-headline text-lg text-gilded-on-surface">{item.title}</h4>
                  <span className="font-manrope text-[10px] tracking-widest text-gilded-primary">ONLINE KO'RISH</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section className="px-6 md:px-20 py-24 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-manrope text-xs tracking-[0.3em] text-gilded-on-surface-variant uppercase">Kolleksiyalarimiz</span>
              <h2 className="font-headline text-4xl md:text-5xl mt-4">Saralangan asarlar</h2>
            </div>
            <div className="max-w-md text-gilded-on-surface-variant font-body leading-relaxed">
              Har bir taklifnoma — bu nafaqat qog'oz, balki sizning muhim kuningizning birinchi sahifasi.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-0.5 bg-gilded-outline-variant/10">
            {/* Collection 1: To'ylar */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-gilded-surface-container">
              <img 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" 
                alt="Wedding Collection"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSLKCaewMcTnRI_R1BNBnmfMN4I-U7vfFd_Kx_lbDjAZ0e11ZNLJBTupXM1i3RSPi4D3HmuHaqCN940qS_CaXUf5O-oTC-fLI85WRg3Q6Z0htZ4G_OJB_Z38JIND_np0TemCpQWcV8A3gynCI7-BADzQuhbMkZEVrnyE5CkCOyywcQk8L-osi2BLfHjxydU9LsZAR8zJqXgI5IQrkSUumUjhcy7npnH4QvoIGYB8lr0NfliNUpSLzrrBZpsveCINHiI8njmBsCSGU"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-gilded-surface via-transparent to-transparent">
                <h3 className="font-headline text-3xl mb-4">To'ylar</h3>
                <p className="font-body text-sm text-gilded-on-surface-variant mb-6 line-clamp-2">Eng baxtli kuningiz uchun klassik va zamonaviy uslubdagi premium taklifnomalar.</p>
                <Link href="/stitch/collections" className="font-manrope text-xs tracking-widest text-gilded-primary hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  BATAFSIL <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Collection 2: Tadbir va marosimlar */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-gilded-surface-container">
              <img 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" 
                alt="Events Collection"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-HwuDpJn29NzRLLxzMZeJOOIDPQAl8j-_3PKbFv0Q3kcdfVUWC-DO5WAlVEkMxVNjr1Ww5xK_nmIfMyuggDsosisHCrQf4ipb4iJfHYZXRIWWyyvocn-M3XR2WzHEG-y2y9EfEZ7w3B_Q_ydsb1R7Lp-azoRe5Imk_YP2dxQZv7kmYJRNaBbKjfz5jUlT69wCi2HehVnfnoVRqp_8OJyBxlVXRikmWeqM2b5TMvg86jg2bkcdLQhmdS6BW_OiIp55g8l5sf8iSM"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-gilded-surface via-transparent to-transparent">
                <h3 className="font-headline text-3xl mb-4">Tadbir va marosimlar</h3>
                <p className="font-body text-sm text-gilded-on-surface-variant mb-6 line-clamp-2">Korporativ tadbirlar va tantanali kechalar uchun rasmiy va hashamatli dizaynlar.</p>
                <Link href="/stitch/collections" className="font-manrope text-xs tracking-widest text-gilded-primary hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  BATAFSIL <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Collection 3: Eksklyuziv */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-gilded-surface-container">
              <img 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" 
                alt="Exclusive Collection"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm5ItHgWNlUE2qSVHRnjqdjzKIV7cj8xzK57maRHjItqYjxE9uJKJEKTryQ705KRfRP4MkC-B4hkAOZVu6JQB8CGo7OZaoaSbyqTV8daIVqJrdnPUYcp5uqynjejrf-M3JFfHUFTJ33Zhu1k74dwO_gxToYr4urA23C4x1ZO8zrA2LXOi-0iPPpPTqSSb1HD_hgDr5LEAD6-fOSR3oB2vCrdLtmjjusJNJBshONVCRxfIZ-4s_962ENSXzHBLytYJHXs86X1-Us_w"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-gilded-surface via-transparent to-transparent">
                <div className="mb-4 inline-block bg-gilded-primary px-3 py-1 font-manrope text-[10px] text-gilded-on-primary tracking-widest">EKSKLYUZIV</div>
                <h3 className="font-headline text-3xl mb-4">Cheklangan</h3>
                <p className="font-body text-sm text-gilded-on-surface-variant mb-6 line-clamp-2">Qo'lda tayyorlangan qog'ozlar va noyob zargarlik ishlovlari bilan yaratilgan durdonalar.</p>
                <Link href="/stitch/collections" className="font-manrope text-xs tracking-widest text-gilded-primary hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  BATAFSIL <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nega biz? Section is already in Uzbek, checking CTA */}
        <section className="bg-gilded-surface-container py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gilded-surface-container-high p-8 flex flex-col justify-center border-l-2 border-gilded-primary">
                <span className="material-symbols-outlined text-gilded-primary text-4xl mb-6">workspace_premium</span>
                <h4 className="font-headline text-xl mb-3">Premium Sifat</h4>
                <p className="font-body text-xs text-gilded-on-surface-variant leading-relaxed">Italiya va Frantsiyadan keltirilgan eng saralangan qog'oz turlari.</p>
              </div>
              <div className="aspect-square bg-gilded-surface-container-highest p-8 flex flex-col justify-center translate-y-8">
                <span className="material-symbols-outlined text-gilded-primary text-4xl mb-6">brush</span>
                <h4 className="font-headline text-xl mb-3">Shaxsiy Yondashuv</h4>
                <p className="font-body text-xs text-gilded-on-surface-variant leading-relaxed">Har bir mijoz uchun individual dizayn va kaligrafiya xizmati.</p>
              </div>
              <div className="aspect-square bg-gilded-surface-container-highest p-8 flex flex-col justify-center -translate-y-8">
                <span className="material-symbols-outlined text-gilded-primary text-4xl mb-6">auto_awesome</span>
                <h4 className="font-headline text-xl mb-3">Zargarlik Ishlovi</h4>
                <p className="font-body text-xs text-gilded-on-surface-variant leading-relaxed">Haqiqiy tilla suvi va kumush zarralari bilan bezatish texnologiyasi.</p>
              </div>
              <div className="aspect-square bg-gilded-surface-container-high p-8 flex flex-col justify-center">
                <span className="material-symbols-outlined text-gilded-primary text-4xl mb-6">history_edu</span>
                <h4 className="font-headline text-xl mb-3">Tezkor Tayyorlash</h4>
                <p className="font-body text-xs text-gilded-on-surface-variant leading-relaxed">Murakkab dizaynlarni ham kelishilgan muddatlarda mukammal yetkazish.</p>
              </div>
            </div>
            <div className="space-y-8">
              <span className="font-manrope text-xs tracking-[0.3em] text-gilded-primary uppercase">Nega aynan biz?</span>
              <h2 className="font-headline text-5xl leading-tight">Sizning tarixingiz bizning san'atimiz</h2>
              <p className="font-body text-lg text-gilded-on-surface-variant leading-relaxed">
                Biz faqatgina taklifnomalar yaratmaymiz, biz sizning hayotingizdagi eng muhim damlarning nafis vizual ifodasini shakllantiramiz. Har bir detal, har bir chiziq va har bir qog'oz tolasi bizning atelierimizda o'zgacha mehr bilan ishlov beriladi.
              </p>
              <div className="pt-6">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-[1px] bg-gilded-primary"></div>
                  <p className="font-manrope text-sm italic tracking-widest text-gilded-primary">Master Artisans since 2014</p>
                </div>
                <button className="bg-gilded-surface border border-gilded-outline-variant/30 text-gilded-on-surface px-12 py-5 font-manrope text-sm tracking-widest hover:border-gilded-primary transition-all">
                  BIZNING TARIX
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-12">
          <h2 className="font-headline text-4xl md:text-6xl text-shimmer">O'z orzuingizdagi taklifnomani yarating</h2>
          <p className="font-body text-gilded-on-surface-variant text-xl leading-relaxed">
            Bizning dizaynerlarimiz sizga eng maqbul variantni tanlashda yordam berishga tayyor.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-4 bg-gilded-surface-container px-8 py-6">
              <span className="material-symbols-outlined text-gilded-primary">phone_in_talk</span>
              <div className="text-left">
                <div className="font-manrope text-[10px] text-gilded-on-surface-variant uppercase tracking-widest">QO'NG'IROQ QILING</div>
                <div className="font-headline text-lg">+998 91 593 08 33</div>
              </div>
            </div>
            <a href="https://t.me/taklifnoma_asia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gilded-surface-container px-8 py-6 group hover:bg-gilded-primary/5 transition-all">
              <span className="material-symbols-outlined text-gilded-primary group-hover:scale-110 transition-transform">send</span>
              <div className="text-left">
                <div className="font-manrope text-[10px] text-gilded-on-surface-variant uppercase tracking-widest">TELEGRAMDAN YOZING</div>
                <div className="font-headline text-lg">@taklifnoma_asia</div>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gilded-surface w-full py-20 px-10 border-t border-gilded-surface-container mt-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-7xl mx-auto">
          <Link href="/stitch" className="font-headline text-lg text-gilded-primary mb-4 lowercase tracking-[0.1em] hover:opacity-80 transition-opacity">taklifnoma.asia</Link>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <Link href="#" className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">MAXFIYLIK</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">SHARTLAR</Link>
            <Link href="#" className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">ALOQA</Link>
          </div>
          <p className="font-manrope text-[11px] tracking-widest leading-loose text-gilded-primary-container uppercase">© 2026 TAKLIFNOMA.ASIA. BARCHA HUQUQLAR HIMOYA QILINGAN.</p>
        </div>
      </footer>

      {/* BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 bg-gilded-surface/95 backdrop-blur-lg border-t border-gilded-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <Link href="/stitch" className="flex flex-col items-center justify-center text-gilded-primary bg-gilded-surface-container-highest/30 rounded-none p-2">
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

      <style jsx>{`
        .text-shimmer {
          background: linear-gradient(135deg, #f2ca50 0%, #ffe088 50%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default StitchHomePage;
