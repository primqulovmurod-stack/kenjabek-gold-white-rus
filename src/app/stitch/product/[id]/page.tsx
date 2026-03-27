'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const StitchProductPage = ({ params }: { params: { id: string } }) => {
  const [quantity, setQuantity] = useState(50);

  return (
    <div className="bg-gilded-surface text-gilded-on-surface font-body selection:bg-gilded-primary-container selection:text-gilded-on-primary-container min-h-screen">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 h-20 bg-gilded-surface/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <button className="text-gilded-primary hover:opacity-70 active:scale-95 transition-all">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <Link href="/stitch" className="font-headline text-xl tracking-[0.10em] text-gilded-primary font-medium lowercase hover:opacity-80 transition-opacity">
          taklifnoma.asia
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/stitch/cart" className="text-gilded-primary hover:opacity-70 active:scale-95 transition-all relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-gilded-primary text-gilded-on-primary text-[8px] font-bold px-1 rounded-full">2</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-12 text-[10px] tracking-widest text-gilded-on-surface-variant font-manrope">
            <Link href="/stitch" className="uppercase hover:text-gilded-primary transition-colors">ASOSIY</Link>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <Link href="/stitch/collections" className="uppercase hover:text-gilded-primary transition-colors">KOLLEKSIYALAR</Link>
            <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            <span className="text-gilded-primary uppercase font-bold">Qirollik To'y Taklifnomasi</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Image Gallery */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {/* Main Display */}
                <div className="relative group aspect-[4/5] overflow-hidden bg-gilded-surface-container-low cursor-zoom-in">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt="Luxury Wedding Invitation" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjN4Gla797jAIq53_Dtbw4xoFAOGNC5YDHm0s5HNgejwGzhqJO3R5NVqywga-kOSo_IFMtregqeE8Q_OoW3HdUWh26WGl70Jg4yBPgIEZZwlYi0nq8avaWI5FrqAHTzVMxxMx4CEuOqzS9lru8WXhilGl4x7qngzBPUvk-92ppED0dLP657dYF8KEnYoNf_Jb1BteoDQilf5_AHs9WiIuQ1HkctA5elZROQVPb93QEZF0t8ob0HlpUV74l6BIadq4fnkAqwFPROXA"
                  />
                  <div className="absolute bottom-6 right-6 flex flex-col gap-4">
                    <button className="bg-gilded-surface/60 backdrop-blur-md p-3 text-gilded-primary hover:bg-gilded-surface transition-colors">
                      <span className="material-symbols-outlined">zoom_in</span>
                    </button>
                  </div>
                </div>
                {/* Thumbnail Grid */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="aspect-square bg-gilded-surface-container-high border-b-2 border-gilded-primary overflow-hidden cursor-pointer">
                    <img className="w-full h-full object-cover" alt="Detail 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfXD2uGBwA98Gy2p70uka9L4_5453jHAUfyLKNpI4Xj2jqRlWvSy48321RINHQfctPtvx19sE4SSkLzodPEhR5f_fcW6T0iu-dkYeUzE01gnnbIBze4ts7naC1-4D4rhEmzKHb3-KudrWN7q0kSYS-7OHShKS996L-rk_MiMJeomTD2PC7MKjCF5g-yg8JjvNFbkecTlQ0jmRbHtOT1xPMvz4RyTdehbgJN8ziKyFUo-5g9jfBLTVATAy28rm2xVLN37LGbkU0oYI"/>
                  </div>
                  <div className="aspect-square bg-gilded-surface-container-high overflow-hidden cursor-pointer">
                    <img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Detail 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCimXmRlfRk3O3n5k1mhFvT5gPvGVkvNZwiufscr7NQaGCYQcgpY2w2lvGf640I9tJGzHf9ri5zhQlJkyjkBRmcv68pO7m68a2nV_gIy3GC4Ug0yNDoVcEz-mKjSrhdsJ6fn8CQjgQ7VYmZAnK0qxjj80_ltir8-iKIK1bjMz7nbLzeyMeEtdDGc0pYUVnPg-4646eqMU8OOqm-pv47PRzCXSw-JaDxIWAqLEv-g4lHkJbc4XesSILTR7yvWecyqR8gio0UJ_J3IPE"/>
                  </div>
                  <div className="aspect-square bg-gilded-surface-container-high overflow-hidden cursor-pointer">
                    <img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Detail 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCunCRPQZ9QU3QxPUzyS3ut_5e2gLP1ByBRZRxszu1bagrJzPnUsCdCaKuz9eBi-IIZUXEP_Cge3Xlj3S96HiSLc-3xm8NfdD47nVIIPYKdPDjfAiTHxOMY8aey-RJER88Xv6IxlNrVo5DGk5_K9AoitLyLbN6G7ZcjIVfFvkAEgdwVQYPu4s_RYQWrNQhIvphLkufoDyzUEWCXNemd6gBumLb3qKtcQwPY6AEWgafnJJwRRmrhAeTOvagibLR3ULzuRaLLvVlurD4"/>
                  </div>
                  <div className="aspect-square bg-gilded-surface-container-high overflow-hidden cursor-pointer relative">
                    <img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Detail 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnk2CIOroxDjaFUKc70AGE2wzh6nUhXpbPwi-NsfHoCRLNpoXMh7Wts0UyJVdt7oV0qvxLkUVJdJuzx1XDYO3NmPHraYcxaPKmgesxEGaWtpvNGIlxFYDDW8oBxuQOmw5P_Z1y289R8Iw5ZQl9U7LB7op2YbpsxWU75ZzCTnnpuem8hLwNHFP7V-GUvlvpCi-y4wzdGBOu-JjT8cj2hzr9zknJ973N2WY_PujsIdvpvchOqRKGnXTdst2AZrY67dTLmX3-Upjykig"/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-[10px] tracking-widest">+2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-1">
                <span className="text-[11px] tracking-[0.2em] text-gilded-primary-container font-manrope uppercase">Imzo To'plami</span>
              </div>
              <h1 className="font-headline text-4xl lg:text-5xl mb-6 leading-tight text-glow">Qirollik To'y Taklifnomasi</h1>
              <div className="flex items-baseline gap-6 mb-10">
                <span className="font-headline text-3xl text-gilded-primary">1 250 000 UZS</span>
                <span className="text-xs text-green-500 font-manrope tracking-widest flex items-center gap-1 uppercase">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Omborda mavjud
                </span>
              </div>
              <p className="text-gilded-on-surface-variant leading-relaxed text-lg mb-10 font-light italic">
                "Qo'lda ishlangan, 24k oltin suvli hoshiyalar, italyancha qog'oz. Har bir taklifnoma bizning ustaxonamizda mahorat bilan tayyorlanadi, bu sizning tantanangiz uchun haqiqiy san'at asaridir."
              </p>

              {/* Customization Options */}
              <div className="space-y-10 mb-12">
                {/* Paper Type */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] font-manrope text-gilded-primary mb-4 uppercase">Qog'oz turi</label>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-2 bg-gilded-surface-container-highest border border-gilded-primary text-[11px] tracking-widest uppercase transition-all">Vellum</button>
                    <button className="px-6 py-2 bg-gilded-surface-container border border-gilded-outline-variant/30 text-[11px] tracking-widest uppercase hover:border-gilded-primary/50 transition-all text-gilded-on-surface-variant">Linen Finish</button>
                    <button className="px-6 py-2 bg-gilded-surface-container border border-gilded-outline-variant/30 text-[11px] tracking-widest uppercase hover:border-gilded-primary/50 transition-all text-gilded-on-surface-variant">Cotton Pressed</button>
                  </div>
                </div>
                {/* Ink Color */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] font-manrope text-gilded-primary mb-4 uppercase">Siyoh rangi</label>
                  <div className="flex gap-4">
                    <button className="w-8 h-8 rounded-full bg-gilded-primary border-2 border-gilded-primary-container shadow-lg" title="Gold"></button>
                    <button className="w-8 h-8 rounded-full bg-[#2a2a2a] border-2 border-transparent hover:border-gilded-outline transition-all" title="Black"></button>
                    <button className="w-8 h-8 rounded-full bg-[#ffffff] border-2 border-transparent hover:border-gilded-outline transition-all" title="White"></button>
                    <button className="w-8 h-8 rounded-full bg-[#4a0e0e] border-2 border-transparent hover:border-gilded-outline transition-all" title="Burgundy"></button>
                  </div>
                </div>
                {/* Quantity */}
                <div className="w-32">
                  <label className="block text-[10px] tracking-[0.2em] font-manrope text-gilded-primary mb-4 uppercase">Miqdor (dona)</label>
                  <div className="flex items-center border border-gilded-outline-variant/30">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-gilded-primary">
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <input 
                      className="w-full bg-transparent border-none text-center font-headline focus:ring-0 text-sm" 
                      type="text" 
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    />
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:text-gilded-primary">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button className="w-full py-5 bg-gradient-to-br from-gilded-primary to-gilded-primary-container text-gilded-on-primary font-manrope text-[12px] tracking-[0.3em] uppercase font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Savatga qo'shish
                </button>
                <Link href="/stitch/customizer" className="w-full py-5 border border-gilded-primary/20 bg-gilded-surface-container-low text-gilded-primary font-manrope text-[12px] tracking-[0.3em] uppercase hover:bg-gilded-surface-container transition-all flex items-center justify-center gap-3 group">
                  <span className="material-symbols-outlined">edit_note</span>
                  Shaxsiylashtirish
                </Link>
              </div>

              {/* Additional Details */}
              <div className="mt-16 pt-10 border-t border-gilded-outline-variant/20 space-y-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-[11px] tracking-widest uppercase font-manrope text-gilded-on-surface hover:text-gilded-primary transition-colors">
                    Mahsulot xususiyatlari
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="pt-4 text-xs leading-loose text-gilded-on-surface-variant space-y-2">
                    <p>• Hajmi: 150x200mm</p>
                    <p>• Qog'oz og'irligi: 450gsm</p>
                    <p>• Texnika: Foil Stamping & Letterpress</p>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-[11px] tracking-widest uppercase font-manrope text-gilded-on-surface hover:text-gilded-primary transition-colors">
                    Yetkazib berish
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="pt-4 text-xs leading-loose text-gilded-on-surface-variant">
                    Standart yetkazib berish 3-5 ish kuni. Ekspress variantlar mavjud. Har bir buyurtma himoyalangan qadoqda keladi.
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <section className="mt-32 pt-20 border-t border-gilded-outline-variant/20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h2 className="font-headline text-3xl mb-4">Mijozlarimiz fikri</h2>
                <div className="flex items-center gap-4">
                  <div className="flex text-gilded-primary">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  </div>
                  <span className="text-xs tracking-widest text-gilded-on-surface-variant uppercase">4.9 / 5.0 (24 Sharhlar)</span>
                </div>
              </div>
              <button className="text-gilded-primary text-[11px] tracking-[0.2em] font-manrope uppercase underline underline-offset-8 decoration-gilded-primary/30 hover:decoration-gilded-primary transition-all">
                Sharh qoldirish
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-gilded-surface-container-low">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="font-headline text-lg mb-1">Malika R.</p>
                    <p className="text-[10px] tracking-widest text-gilded-on-surface-variant uppercase">15 Mart, 2024</p>
                  </div>
                  <div className="flex text-gilded-primary">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gilded-on-surface italic">"Taklifnomalar kutilganidan ham ajoyib chiqdi. Qog'ozning sifati va oltin hoshiyalar juda professional. Rahmat!"</p>
              </div>
              <div className="p-8 bg-gilded-surface-container-low">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="font-headline text-lg mb-1">Jamshid A.</p>
                    <p className="text-[10px] tracking-widest text-gilded-on-surface-variant uppercase">28 Fevral, 2024</p>
                  </div>
                  <div className="flex text-gilded-primary">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gilded-on-surface italic">"Eksklyuzivlikni xohlovchilar uchun ayni muddao. Mehmolarimiz juda hayratda qolishdi."</p>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="mt-32">
            <h2 className="font-headline text-3xl mb-12 text-center italic">Sizga ham yoqishi mumkin</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { title: "Kumush Simfoniyasi", price: "980 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVRAaZVRRH_LTxsQGmK5-Z5XcFHawv-6Rz3_7XrwjAvwOrAaGbXImRL9qUmO5M4NUSWGv-NNBup9k39j-FBAtnfMYq-p97vWrNHN_Xada5WWVx240JutV93Tt4wVGifrInQV-EVegHDClv1Q4P7NKt0X2Q2dd1k5EewSWFp68Ne3OJ-ZLKHy-zU3fdWzt-uKQc09T84KgY6ypHDRZWDfWg0vJsM_DEjgxURVAW7C99nJIDYvQV3rmsvI-gBSlpi2kD9DRdKCs0i1k" },
                { title: "Klassik Sharq", price: "850 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxFjCncp68sLA-bO9UtJLJrPVfDoWJO3VJxNipzaMgNKvkr6hdsMu_77hEoxZXdu5LFEhouiFENd_AqHjMKH1Yp0LZWq53VzQk-WbsX9lkLDrKK55uO1Isoga9QsbHCVsy84acP2XB8zUH7KKA9VBNI5HOlnq_uxJZsYuUNi2ypleTOgczMhru41k_9NgkK4Pq6chrstLBK3LcptBX5Bl8J_KTuK0HOuzgcaNAw6X0DZcaQptkIZBLmf9-h23VXur_P_SMTqK73FE" },
                { title: "Modern Rose", price: "1 100 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8xjxCPFfmGdg6ZWkXcNxrACFCsxcw_1B_QNOlE49tSuC3ytDdiLHFs4YmAkMReXLS7aM5vXHdsTQhB-XYYX6fzqe-2NG4I183X9-HYa3EPoPoMFcGurE9CT4UYwCA1g6y7CyxSBshGpWO6L1O03xQow1WF8HfH1HdKazMl55xEkgA6QaqBZMXYbyDJdGts9QTXLvJ5IHFWTa5UmkiMU6VsyT_AoMKEzBMnsuG4h0D-UcvhQ8MkeS-TWegl0M4UreBdDk8WALCJG0" },
                { title: "Botanika Bog'i", price: "1 350 000 UZS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRCaOPqa1orZCjUxOq1JIOGQdVj81zXcNepJ2vxmC1eg3rWl0H6YpJvP4TfomOSlOhi-IseZzxuY_3ZLmrYXQ3b17J38-m8DyCVknOWZqV2PUzwRawx6F_ZmkYtTA4TtfBJ-OfPsQdHtJBpPUWAOaQTGy_gI21NWwqw8YDd58fp5NnIlVYqAwx96B_51AsPbWRgEQn8UhpMJYlvARdl8U_3o-osrIegMZvV1CJ4FzZd9bzWd8-eKi-Ekp0TAojMnUBJwVcrAwo-Q8" }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="aspect-[3/4] overflow-hidden mb-6 bg-gilded-surface-container-low relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} src={item.img}/>
                    <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity"></div>
                  </div>
                  <h3 className="font-headline text-sm uppercase tracking-widest mb-2">{item.title}</h3>
                  <p className="text-gilded-primary text-xs font-manrope">{item.price}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-10 border-t border-gilded-surface-container mt-20 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
          <Link href="/stitch" className="font-headline text-lg text-gilded-primary mb-4 lowercase tracking-[0.15em] hover:opacity-80 transition-opacity">taklifnoma.asia</Link>
          <div className="flex flex-wrap justify-center gap-10">
            {['MAXFIYLIK', 'SHARTLAR', 'ALOQA', 'MAHORAT'].map(link => (
              <Link key={link} href="#" className="font-manrope text-[11px] tracking-widest text-gilded-on-surface-variant hover:text-gilded-primary underline underline-offset-8 decoration-[0.5px] transition-all">{link}</Link>
            ))}
          </div>
          <div className="pt-8 text-gilded-primary-container font-manrope text-[11px] tracking-widest leading-loose uppercase">
            © 2026 TAKLIFNOMA.ASIA. BARCHA HUQUQLAR HIMOYA QILINGAN.
          </div>
        </div>
      </footer>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 backdrop-blur-lg bg-gilded-surface/95 border-t border-gilded-primary/10">
        <Link href="/stitch" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">home</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">ASOSIY</span>
        </Link>
        <Link href="/stitch/collections" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">KOLLEKSIYA</span>
        </Link>
        <Link href="/stitch/cart" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">SAVAT</span>
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center text-gilded-on-surface-variant p-2 hover:text-gilded-primary transition-all">
          <span className="material-symbols-outlined">person</span>
          <span className="font-manrope text-[10px] tracking-[0.1em] font-medium uppercase mt-1">PROFIL</span>
        </Link>
      </nav>


      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 15px rgba(242, 202, 80, 0.3);
        }
      `}</style>
    </div>
  );
};

export default StitchProductPage;
