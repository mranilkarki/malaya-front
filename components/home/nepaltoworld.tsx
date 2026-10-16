'use client';

import Link from 'next/link';
import { Users, PackageCheck, BriefcaseBusiness, TrendingUp, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'People',
    subtitle: 'Travel • Pilgrimage • Trekking',
    description:
      'Welcoming global travelers to the Himalayas with curated treks, spiritual pilgrimages, and seamless inbound/outbound travel logistics.',
    linkText: 'Explore Travel',
    href: '/visa-country',
  },
  {
    icon: PackageCheck,
    title: 'Products',
    subtitle: 'Coffee • Handicrafts • Agriculture',
    description:
      'Taking the best of Nepal to the globe—single-origin specialty coffee, handwoven textiles, singing bowls, and organic produce.',
    linkText: 'Discover Products',
    href: '/exhibition',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business',
    subtitle: 'Trade • Expos • Partnerships',
    description:
      'Representing Nepal at global exhibitions and building reliable trading routes between trusted domestic producers and global buyers.',
    linkText: 'Trade Services',
    href: '/malaya-trade',
  },
  {
    icon: TrendingUp,
    title: 'Opportunities',
    subtitle: 'B2B • Sourcing • Market Access',
    description:
      'Creating clear pathways for international companies looking to source ethically from Nepal or invest in local hospitality and agriculture.',
    linkText: 'B2B Inquiries',
    href: '/contact',
  },
];

export default function NepalToWorld() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#5b714b] text-xs font-bold uppercase tracking-wider mb-3">
            Connecting Horizons
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Nepal <span className="text-[#5b714b]">🇳🇵</span> to the World <span className="text-[#5b714b]">🌍</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            One trusted bridge for mountain journeys, artisanal exports, and international commercial partnerships.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-[#5b714b] hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#5b714b] mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#5b714b] uppercase tracking-wide mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#5b714b] hover:text-[#445538] transition-colors"
                >
                  {item.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-[#5b714b] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold">Looking to travel, source, or collaborate?</h4>
            <p className="text-emerald-100 text-sm mt-1">
              Talk directly with our team in Kathmandu for bespoke itineraries or international trade inquiries.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-white text-[#5b714b] px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}