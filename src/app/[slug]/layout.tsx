import { Metadata } from 'next';
import { supabase } from '@/lib/supabase';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const unwrappedParams = await params;
  const slug = unwrappedParams.slug;

  try {
    const { data: invitation } = await supabase
      .from('invitations')
      .select('content')
      .eq('slug', slug)
      .single();

    if (invitation && invitation.content) {
      const { groomName, brideName } = invitation.content;
      const title = `${groomName} & ${brideName} — Taklifnoma.Asia`;
      const description = `Sizni baxtli kunimizga taklif etamiz! 💍✨`;
      
      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: ['/og-image.png'], // Add a default OG image path or dynamic if available
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
        },
      };
    }
  } catch (e) {
    console.error('Metadata error:', e);
  }

  return {
    title: 'Taklifnoma.Asia — Raqamli Taklifnomalar',
    description: 'Zamonaviy va premium darajadagi virtual taklifnomalar xizmati.',
  };
}

export default function InvitationLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
}
