'use client';

import React, { useState, useEffect } from 'react';
import RolexLuxuryInvitation from '@/components/RolexLuxuryInvitation';
import PinkLuxuryInvitation from '@/components/PinkLuxuryInvitation';
import WatchDesignInvitation from '@/components/WatchDesignInvitation';
import GoldClassicInvitation from '@/components/GoldClassicInvitation';
import GoldWhiteInvitation from '@/components/GoldWhiteInvitation';
import PinkWhiteInvitation from '@/components/PinkWhiteInvitation';

interface InvitationWrapperProps {
  initialHost: string;
}

export default function InvitationWrapper({ initialHost }: InvitationWrapperProps) {
  const [mounted, setMounted] = useState(false);
  // Improved detection
  const hostLower = initialHost.toLowerCase();
  const isXurshid = hostLower.includes('xurshid') || hostLower.includes('mohinur') || hostLower.includes('rolex') || hostLower.includes('watch');
  
  const [theme, setTheme] = useState<'rolex' | 'pink' | 'watch' | 'goldclassic' | 'goldwhite'>(() => {
    if (hostLower.includes('watch')) return 'watch';
    if (hostLower.includes('goldclassic')) return 'goldclassic';
    if (hostLower.includes('goldwhite') || hostLower.includes('white')) return 'goldwhite';
    if (hostLower.includes('rolex')) return 'rolex';
    if (isXurshid) return 'rolex'; // default to rolex theme for Xurshid if no specific keyword
    if (hostLower.includes('localhost')) return 'rolex'; // Default to Xurshid locally
    return 'pink';
  });

  useEffect(() => {
    setMounted(true);
    const search = window.location.search.replace(/%3D/gi, '=').toLowerCase();
    const params = new URLSearchParams(search);
    const themeParam = params.get('theme');
    const windowHost = window.location.hostname.toLowerCase();
    const isXurshidHost = windowHost.includes('xurshid') || windowHost.includes('mohinur') || windowHost.includes('rolex') || windowHost.includes('watch');
    
    if (themeParam === 'rolex' || (windowHost.includes('rolex') && isXurshidHost)) {
      setTheme('rolex');
    } else if (themeParam === 'pink-luxury' || (windowHost.includes('pink') && isXurshidHost)) {
      setTheme('rolex'); // We'll handle pink luxury separately in the return
    } else if (themeParam === 'watch' || windowHost.includes('watch')) {
      setTheme('watch');
    } else if (themeParam === 'goldwhite' || windowHost.includes('goldwhite') || windowHost.includes('gold-white') || windowHost.includes('white')) {
      setTheme('goldwhite');
    } else if (themeParam === 'goldclassic' || windowHost.includes('goldclassic')) {
      setTheme('goldclassic');
    } else if (themeParam === 'pink' || (windowHost.includes('pink') && !isXurshidHost)) {
      setTheme('pink');
    } else if (windowHost.includes('localhost')) {
      setTheme('rolex');
    } else {
      setTheme('pink');
    }
  }, []);

  if (!mounted) return null;

  const GlobalCTA = () => (
    <div className="w-full py-16 px-6 bg-black text-white text-center border-t border-white/5 relative">
      <div className="max-w-2xl mx-auto space-y-6">
        <h3 className="font-playfair text-2xl font-bold italic">Siz ham shunday chiroyli virtual taklifnoma xohlaysizmi?</h3>
        <p className="text-gray-400 text-sm">O'z baxtli kuningiz uchun biz bilan eng yaxshisini yarating.</p>
        <a 
          href="https://t.me/taklifnoma_asia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#B8962E] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl shadow-[#B8962E]/20 hover:scale-105 transition-all active:scale-95"
        >
          Buyurtma Berish <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" className="w-5 h-5" alt="TG" />
        </a>
        <div className="pt-8 text-[10px] text-gray-700 tracking-[0.3em] font-bold uppercase">Taklifnoma.Asia</div>
      </div>
    </div>
  );

  let content;
  // Handle Xurshid's themes
  if (isXurshid) {
    if (hostLower.includes('pink') || theme === 'pink') {
      content = <PinkLuxuryInvitation groomName="Xurshidbek" brideName="Mohinur" />;
    } else {
      content = <RolexLuxuryInvitation groomName="Xurshidbek" brideName="Mohinur" />;
    }
  } else if (theme === 'pink' || hostLower.includes('pink')) {
    content = (
      <PinkWhiteInvitation 
        groomName="Kenjabek"
        brideName="Snejana"
        date="24 - APREL - 2026"
        time="19:00"
        locationName="Demir (Asr)"
        locationAddress="Jizzax Shahar"
        locationLink="https://www.google.com/maps/place/ASR+Wedding+Hall/@40.1490597,67.8229612,20.75z/data=!4m6!3m5!1s0x38b2969244164953:0xcf441bf7b030ea16!8m2!3d40.1490952!4d67.8228464!16s%2Fg%2F11h9w32rg7!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
        imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
        musicUrl="/assets/die_with_a_smile.mp3"
      />
    );
  } else if (theme === 'rolex' || hostLower.includes('rolex') || hostLower.includes('localhost')) {
    content = <RolexLuxuryInvitation groomName="Xurshidbek" brideName="Mohinur" />;
  } else if (theme === 'watch') {
    content = (
      <div className="bg-black">
        <WatchDesignInvitation 
          groomName="Xurshid"
          brideName="Mohinur"
          date="20 Iyun 2026"
          time="18:00"
          locationName="Oqsaroy Koshonasi"
          locationAddress="Sho'rchi tumani"
          imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
          musicUrl="/assets/die_with_a_smile.mp3"
        />
      </div>
    );
  } else if (theme === 'goldclassic') {
    content = (
      <GoldClassicInvitation 
        groomName="Kenjabek"
        brideName="Snejana"
        date="24 - APREL - 2026"
        time="19:00"
        locationName="Demir (Asr)"
        locationAddress="Jizzax Shahar"
        locationLink="https://www.google.com/maps/place/ASR+Wedding+Hall/@40.1490597,67.8229612,20.75z/data=!4m6!3m5!1s0x38b2969244164953:0xcf441bf7b030ea16!8m2!3d40.1490952!4d67.8228464!16s%2Fg%2F11h9w32rg7!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
        imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
        musicUrl="/assets/die_with_a_smile.mp3"
      />
    );
  } else if (theme === 'goldwhite') {
    content = (
      <GoldWhiteInvitation 
        groomName="Kenjabek"
        brideName="Snejana"
        date="24 - APREL - 2026"
        time="19:00"
        locationName="Demir (Asr)"
        locationAddress="Sho'rchi tumani"
        locationLink="https://www.google.com/maps/place/ASR+Wedding+Hall/@40.1490597,67.8229612,20.75z/data=!4m6!3m5!1s0x38b2969244164953:0xcf441bf7b030ea16!8m2!3d40.1490952!4d67.8228464!16s%2Fg%2F11h9w32rg7!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
        imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
        musicUrl="/assets/die_with_a_smile.mp3"
      />
    );
  } else {
    content = (
      <div className="bg-[#f8f8f8]">
        <RolexLuxuryInvitation 
          groomName="Xurshidbek"
          brideName="Mohinur"
          date="20 Iyun 2026"
          time="18:00"
          locationName="Oqsaroy Koshonasi"
          locationAddress="Surxondaryo viloyati, Sho'rchi tumani"
          imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
          musicUrl="/assets/die_with_a_smile.mp3"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {content}
      </div>
      <GlobalCTA />
    </div>
  );
}

