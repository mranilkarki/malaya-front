'use client';

import Link from 'next/link';

const services = [
  {
    icon: '🏔️',
    title: 'Nepal Tours',
    description: 'Curated cultural & scenic packages across Nepal',
    href: '/travel?type=nepal-tours',
  },
  {
    icon: '🥾',
    title: 'Trekking & Adventure',
    description: 'Everest, Annapurna, Langtang and beyond',
    href: '/travel?type=trekking',
  },
  {
    icon: '🕉️',
    title: 'Kailash Mansarovar',
    description: 'Sacred pilgrimage to Mount Kailash, Tibet',
    href: '/travel?type=kailash',
  },
  {
    icon: 'CN',
    isTextIcon: true,
    title: 'Tibet & China',
    description: 'Cross-border tours to Lhasa and beyond',
    href: '/travel?type=tibet-china',
  },
  {
    icon: '🛕',
    title: 'Pilgrimage Tours',
    description: 'Pashupatinath, Muktinath, Lumbini & more',
    href: '/travel?type=pilgrimage',
  },
  {
    icon: '✈️',
    title: 'International Tours',
    description: 'Europe, Southeast Asia, Middle East packages',
    href: '/travel?type=international',
  },
  {
    icon: '📄',
    title: 'Visa Services',
    description: 'Nepal, China, Schengen & worldwide assistance',
    href: '/visa-country',
  },
  {
    icon: '🎫',
    title: 'Air Tickets',
    description: 'Best fares on domestic and international flights',
    href: '/contact?service=tickets',
  },
  {
    icon: '🏢',
    title: 'Corporate & Group Travel',
    description: 'Tailored solutions for teams and organisations',
    href: '/contact?service=corporate',
  },
  {
    icon: '🤝',
    title: 'B2B Destination Management',
    description: 'Trade partner services & ground handling',
    href: '/contact?service=b2b-dmc',
  },
];

export default function ExploreTravel() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Explore Nepal &amp; Beyond
            </h2>
          </div>

          {/* Right Subtext */}
          <div className="max-w-md lg:text-left">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              From Himalayan treks to international packages, visa assistance to corporate travel — we handle every journey.
            </p>
          </div>
        </div>

        {/* 10 Cards Grid (5 across on desktop, 2-3 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {services.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-6 flex flex-col justify-start transition-all hover:shadow-xs group"
            >
              {/* Icon */}
              <div className="mb-4">
                {item.isTextIcon ? (
                  <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
                    {item.icon}
                  </span>
                ) : (
                  <span className="text-2xl block leading-none">
                    {item.icon}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-bold text-slate-900 text-base leading-snug mb-1.5 group-hover:text-slate-700 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}