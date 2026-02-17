'use client';

import { useState } from 'react';
import { Calendar, Phone, Globe } from 'lucide-react';
import Link from 'next/link';

interface Expert {
  name: string;
  country: string;
  avatar: string;
  whatsapp: string;
  flag: string;
}

interface BookingSidebarProps {
  price?: number;
  currency?: string;
  expert?: Expert;
}

export default function BookingSidebar({
  price = 1875,
  currency = 'USD',
  expert
}: BookingSidebarProps) {
  
  const defaultExpert: Expert = {
    name: 'Sujan',
    country: 'Nepal',
    avatar: 'https://i.pravatar.cc/150?img=15',
    whatsapp: '+977985123710',
    flag: '🇳🇵'
  };

  const tourExpert = expert || defaultExpert;
  
  // Sample team avatars
  const teamAvatars = [
    'https://i.pravatar.cc/150?img=12',
    'https://i.pravatar.cc/150?img=33',
    'https://i.pravatar.cc/150?img=15',
    'https://i.pravatar.cc/150?img=68'
  ];

  return (
    <div className="lg:sticky lg:top-24 space-y-4">
      {/* Price Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
        {/* <div className="text-center mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-slate-900">{currency} {price.toLocaleString()}</span>
            <span className="text-slate-500">/ person</span>
          </div>
        </div> */}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-[#5b714b] hover:bg-[#4a5d3c] text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            BOOK NOW
          </button>
          
          {/* <button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
            CHECK AVAILABILITY
          </button>
           */}
           <Link href="https://wa.me/9779704889881" target="_blank" rel="noopener noreferrer">
          <button className="w-full border-2 border-[#5b714b] text-[#5b714b] hover:bg-blue-50 py-4 rounded-xl font-bold text-lg transition-all">
            WhatsApp Inquiry
          </button>
          </Link>
        </div>
      </div>



      {/* Dossier Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
        <button className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 py-3 rounded-xl font-semibold transition-all">
          <Calendar className="w-5 h-5" />
          <span>Download Pamphlet</span>
        </button>
      </div>
    </div>
  );
}