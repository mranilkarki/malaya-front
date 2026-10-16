'use client';

import Link from 'next/link';
import { Plane, Globe, Sparkles, Coffee, Hotel, ArrowRight } from 'lucide-react';

const businessSectors = [
  {
    icon: Plane,
    title: 'Travel & Tourism',
    description:
      'Explore Nepal and the world through tours, pilgrimage, trekking, visas, air tickets and destination management',
    href: '/visa-country',
  },
  {
    icon: Globe,
    title: 'International Trade',
    description:
      'Connecting Nepal with international markets, reliable suppliers, buyers, and business expansion opportunities.',
    href: '/malaya-trade',
  },
  {
    icon: Sparkles,
    title: 'Handicrafts & Lifestyle',
    description:
      'Nepali handmade products, pashmina, traditional crafts, singing bowls, and contemporary Himalayan designs.',
    href: '/exhibition',
  },
  {
    icon: Coffee,
    title: 'Agriculture & Coffee',
    description:
      'Specialty Nepali organic coffee beans, high-altitude crops, and authentic Himalayan products for export.',
    href: '/malaya-trade',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description:
      'Comfortable stays, artisanal coffee shops, and warm hospitality experiences through our partner network.',
    href: '/about',
  },
];

export default function WorldOfBusiness() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[#5b714b] uppercase tracking-wider mb-2">
            More Than Travel
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            One company. Multiple connections.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Malaya Globe brings together businesses and initiatives across travel, international trade, handicrafts,
agriculture, coffee and hospitality—connecting Nepal's people, destinations and products with
international opportunities.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessSectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-[#5b714b] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#5b714b] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>
                </div>

                <Link
                  href={sector.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5b714b] hover:text-[#4a5c3d]"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}