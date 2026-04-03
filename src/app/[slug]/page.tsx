'use client';

import React, { use, useEffect, useState } from 'react';
import TemplatePreview from '@/components/dashboard/TemplatePreview';
import { InvitationContent } from '@/lib/types';
import { notFound } from 'next/navigation';

// Mock fetching function
const getInvitationBySlug = async (slug: string) => {
  // In production: fetch from Supabase
  const mockData: Record<string, InvitationContent> = {
    'ali-laylo': {
      groomName: 'Ali',
      brideName: 'Laylo',
      date: '24 - MAY - 2026',
      time: '18:00',
      locationName: 'Tantana Milliy Taomlar',
      locationUrl: '#',
      imageUrl: '',
      musicUrl: '',
      theme: 'gold-white',
      locationAddress: 'Toshkent shahar'
    },
    'behzod-dilfuza': {
      groomName: 'Behzod',
      brideName: 'Dilfuza',
      date: '20 - IYUN - 2026',
      time: '19:00',
      locationName: 'Navro\'z To\'yxonasi',
      locationUrl: '#',
      imageUrl: '',
      musicUrl: '',
      theme: 'floral',
      locationAddress: 'Samarqand shahar'
    }
  };

  return mockData[slug] || null;
};

export default function InvitationPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const [content, setContent] = useState<InvitationContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInvitationBySlug(slug).then(data => {
      setContent(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
     return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-12 h-12 border-4 border-[#B8962E] border-t-transparent rounded-full animate-spin"></div>
        </div>
     );
  }

  if (!content) {
    return notFound();
  }

  return (
    <div className="min-h-screen">
      <TemplatePreview content={content} />
    </div>
  );
}
