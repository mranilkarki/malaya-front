'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MalayaFamily() {
  const familyCompanies = [
    {
      name: 'Malaya Travels & Tours Pvt. Ltd.',
      sector: 'Inbound & Outbound Tours',
      logo: '/companies/malaya trade.jpeg', // stored in public/logos/
    },
    {
      name: 'MalayaTrade and Exhibition Pvt. Ltd.',
      sector: 'Global Trade & B2B Expos',
      logo: '/companies/malayatravels.jpeg',
    },
    {
      name: 'Haru Café Pvt. Ltd.',
      sector: 'Himalayan Java Franchise',
      logo: '/companies/haru caffee.jpeg',
    },
    {
      name: 'Gangba T&T Handicraft',
      sector: 'Heritage & Craft Exports',
      logo: '/companies/gangba handicraft.jpeg',
    },
    {
      name: 'Gangba Multipurpose Cooperative Ltd.',
      sector: 'Community Financial Services',
      logo: '/companies/gangba multipurpose.jpeg',
    },
    {
      name: 'Gangba Agricultural Firm',
      sector: 'Organic Farming & Agro-products',
      logo: '/companies/gangba krishi.jpeg',
    },
  ];

  const outlets = [
    {
      id: 1,
      name: 'Gallery By Himalayan Java',
      location: 'Gallery Outlet',
      description:
        'Experience the authentic taste of Himalayan beans in a cozy, modern atmosphere.',
      image:
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop',
      link: 'https://share.google/TLnhzVnwSaFJdgCVD',
    },
    {
      id: 2,
      name: 'Himalayan Java Coffee',
      location: 'Phulbari Outlet',
      description:
        'A serene coffee escape located in the heart of Phulbari, perfect for travelers and locals.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
      link: 'https://share.google/XI5kXOut63cXa6gav',
    },
  ];

  return (
    <section className="bg-[#5b714b] text-white py-20 px-4 sm:px-6 lg:px-8" id="business">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* 1. PART OF THE MALAYA GLOBE FAMILY */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest bg-white/20 text-emerald-100 px-3 py-1 rounded-full font-semibold">
              Corporate Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
              Part of the Malaya Globe Family
            </h2>
            <p className="text-emerald-100 text-sm md:text-base font-light">
              A diversified business network uniting hospitality, trade, agriculture, and travel under one vision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {familyCompanies.map((company) => (
              <div
                key={company.name}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 flex items-start gap-4"
              >
                {/* Logo Container */}
                <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                  <Image
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider block mb-1">
                    {company.sector}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {company.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FEATURED OUTLETS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Our Featured Outlets
            </h2>
            <p className="text-emerald-100 text-sm mt-1 font-light">
              Wherever you travel, our warm Himalayan coffee spaces welcome you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {outlets.map((outlet) => (
              <div
                key={outlet.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl h-[360px] border border-white/20"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${outlet.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                <Link
                  href={outlet.link}
                  target="_blank"
                  className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5b714b] bg-white px-3 py-1 rounded-full w-fit mb-2 shadow-sm">
                    {outlet.location}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{outlet.name}</h3>
                  <p className="text-slate-200 text-sm line-clamp-2 max-w-lg mb-2">
                    {outlet.description}
                  </p>
                  <span className="text-xs font-semibold text-emerald-300 inline-flex items-center gap-1 group-hover:underline">
                    View on Google Maps <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}