'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  PlusCircle, 
  User, 
  LogOut, 
  Menu, 
  X,
  CreditCard,
  Settings,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        // For local development, if session is not found, we'll suggest login
        // but for now let's just mock a user to let them work on the UI
        setUser({ email: 'test@example.com', user_metadata: { full_name: 'Murod' } });
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/dashboard/login');
  };

  const menuItems = [
    { name: 'Mening taklifnomalarim', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Yangi yaratish', icon: PlusCircle, href: '/dashboard/new' },
    { name: "To'lovlar", icon: CreditCard, href: '/dashboard/billing' },
    { name: 'Profil', icon: User, href: '/dashboard/profile' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF9FA]">
        <div className="w-12 h-12 border-4 border-[#E11D48] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Skip layout for login page
  if (pathname === '/dashboard/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#FFF9FA] flex text-[#2D2424]">
      {/* Sidebar for desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-[#FFE4E6]/50 sticky top-0 h-screen">
        <div className="p-8 border-b border-[#FFE4E6]/30 h-24 flex items-center">
            <Link href="/" className="flex items-center gap-2">
                <span className="font-playfair text-xl font-black tracking-tighter text-[#E11D48]">TAKLIFNOMA</span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] text-[8px] uppercase tracking-widest font-black">Asia</span>
            </Link>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                pathname === item.href 
                ? 'bg-[#E11D48] text-white shadow-xl shadow-[#E11D48]/20 translate-x-1' 
                : 'text-gray-400 hover:bg-[#FFF1F2] hover:text-[#E11D48]'
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-[#FFE4E6]/30">
          <div className="bg-[#FFF1F2] rounded-2xl p-4 flex items-center gap-3 mb-4 border border-[#FFE4E6]/50">
             <div className="w-10 h-10 rounded-full bg-[#E11D48] text-white flex items-center justify-center font-bold shadow-lg">
                {user?.user_metadata?.full_name?.[0] || user?.email?.[0]?.toUpperCase()}
             </div>
             <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate">{user?.user_metadata?.full_name || 'Mijoz'}</p>
                <p className="text-[10px] text-gray-400 truncate">{user?.email}</p>
             </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-red-400 hover:bg-red-50 transition-all hover:text-red-500"
          >
            <LogOut size={20} />
            Chiqish
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#FFE4E6]/30 h-20 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
            <span className="font-playfair text-xl font-black tracking-tighter text-[#E11D48]">TAKLIFNOMA</span>
        </Link>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-xl bg-gray-50 text-gray-600"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[100]"
            />
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-80 bg-white z-[110] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12 border-b border-[#FFE4E6]/30 pb-6">
                <span className="font-playfair text-xl font-black text-[#E11D48] uppercase tracking-widest">Menu</span>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-[#E11D48]"><X size={24} /></button>
              </div>

              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-4 px-6 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                      pathname === item.href ? 'bg-[#E11D48] text-white shadow-xl shadow-[#E11D48]/20' : 'text-gray-400'
                    }`}
                  >
                    <item.icon size={24} />
                    {item.name}
                  </Link>
                ))}
              </nav>

              <button 
                onClick={handleLogout}
                className="mt-auto w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-red-50 text-red-500 font-bold"
              >
                <LogOut size={24} /> Chiqish
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 w-full lg:pt-0 pt-20 overflow-y-auto">
        <div className="max-w-7xl mx-auto min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
