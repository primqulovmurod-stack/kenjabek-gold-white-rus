'use client';

import React from 'react';
import { InvitationContent } from '@/lib/types';
import GoldWhiteInvitation from '@/components/GoldWhiteInvitation';
import { FloralInvitation } from '@/components/FloralInvitation';
import GoldClassicInvitation from '@/components/GoldClassicInvitation';
import RolexLuxuryInvitation from '@/components/RolexLuxuryInvitation';
import MilliyInvitation from '@/components/MilliyInvitation';
import WatchDesignInvitation from '@/components/WatchDesignInvitation';
import PinkLuxuryInvitation from '@/components/PinkLuxuryInvitation';
import { ElegantInvitation } from '@/components/ElegantInvitation';
import LuxuryDarkInvitation from '@/components/LuxuryDarkInvitation';
import PinkWhiteInvitation from '@/components/PinkWhiteInvitation';
import StitchInvitation from '@/components/StitchInvitation/Main';

export const templates = [
  { 
    id: 'gold-white', 
    name: 'Premium Oq-Oltin', 
    image: '/assets/gold_white_invite_mockup.png',
    style: 'Elegant & Klassik'
  },
  { 
    id: 'floral', 
    name: 'Pushti Atirgul', 
    image: '/assets/pink_invite_mockup.png',
    style: 'Nozik & Romantik'
  },
  { 
    id: 'goldclassic', 
    name: 'Klassik Oltin', 
    image: '/assets/gold_white_invite_mockup.png',
    style: 'Eksklyuziv'
  },
  { 
    id: 'rolex', 
    name: 'Rolex Luxury', 
    image: '/assets/rolex_invite_mockup.png',
    style: 'Zamonaviy & Hashamatli'
  },
  { 
    id: 'milliy', 
    name: 'Milliy Ornament', 
    image: '/assets/gold_white_invite_mockup.png',
    style: 'An\'anaviy'
  },
  { 
    id: 'pink-luxury', 
    name: 'Pushti Luxury', 
    image: '/assets/pink_invite_mockup.png',
    style: 'Nozik Luxury'
  },
  { 
    id: 'watch-design', 
    name: 'Watch Design', 
    image: '/assets/rolex_invite_mockup.png',
    style: 'Premium Soat Dizayn'
  },
  { 
    id: 'elegant', 
    name: 'Premium Oq-Oltin (Elite)', 
    image: '/assets/gold_white_invite_mockup.png',
    style: 'Elite Klasik'
  },
  { 
    id: 'luxury-dark', 
    name: 'Luxury Dark Edition', 
    image: '/assets/rolex_invite_mockup.png',
    style: 'Modern Dark'
  },
  { 
    id: 'pink-white', 
    name: 'Nozik Pushti (Romantik)', 
    image: '/assets/pink_invite_mockup.png',
    style: 'Romantik'
  },
  { 
    id: 'stitch', 
    name: 'Minimal & Tab (Stitch)', 
    image: '/assets/gold_white_invite_mockup.png',
    style: 'Premium Tabli Dizayn'
  },
];

interface TemplatePreviewProps {
  content: InvitationContent;
  readonly?: boolean;
}

export default function TemplatePreview({ content, readonly }: TemplatePreviewProps) {
  const theme = content.theme || 'gold-white';

  switch (theme) {
    case 'gold-white':
      return <GoldWhiteInvitation {...content} />;
    case 'floral':
      return <FloralInvitation content={content} />;
    case 'goldclassic':
        return <GoldClassicInvitation {...content} />;
    case 'rolex':
        return <RolexLuxuryInvitation {...content} />;
    case 'milliy':
        return <MilliyInvitation {...content} />;
    case 'pink-luxury':
        return <PinkLuxuryInvitation {...content} />;
    case 'watch-design':
        return <WatchDesignInvitation {...content} />;
    case 'elegant':
        return <ElegantInvitation content={content} />;
    case 'luxury-dark':
        return <LuxuryDarkInvitation {...content} />;
    case 'pink-white':
        return <PinkWhiteInvitation {...content} />;
    case 'stitch':
        return <StitchInvitation />;
    default:
      return <GoldWhiteInvitation {...content} />;
  }
}
