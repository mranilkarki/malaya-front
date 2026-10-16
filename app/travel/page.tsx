import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mountain, ShieldCheck, HeartHandshake } from 'lucide-react';
import TravelPackagesSection from '../../components/travelPackage/travelpackage';

export const metadata: Metadata = {
  title: 'Travel & Tours | Malaya Globe',
  description:
    'Himalayan trekking, pilgrimage, Tibet & China expeditions, and inbound/outbound travel experiences.',
};

export default function TravelPage() {

  return (
    <div className="bg-white min-h-screen text-slate-800 mt-15">
      {/* 1. GREEN BANNER WITH BRAND JOURNEY FLOW */}
      <section className="bg-[#5b714b] text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-emerald-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span className="text-emerald-200/60">/</span>
            <span className="text-white">TRAVEL & TOURS</span>
          </nav>

          {/* Heading */}
          <div className="max-w-3xl mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
              Journeys Through the Himalayas & Beyond
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base font-light leading-relaxed">
              Inbound and outbound tours, sacred pilgrimages, Tibetan expeditions, and tailored Himalayan trekking managed by local destination experts.
            </p>
          </div>

          {/* The Core Journey Flow: People -> Places -> Products -> Trade -> Impact */}
          <div className="pt-6 border-t border-white/20">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-200 mb-3">
              The Malaya Experience
            </p>
           
          </div>
        </div>
      </section>

      {/* 3. PACKAGES COMPONENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Your Imported Package List */}
        <TravelPackagesSection />
      </section>

      {/* 4. CUSTOM TRIP PLANNER BANNER */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Looking for a Tailored Himalayan Itinerary?
          </h3>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Whether planning a solo mountain trek, cultural family tour, or group spiritual pilgrimage to Tibet, our Kathmandu desk can build a custom schedule around your dates.
          </p>
          <Link
            href="/contact?type=custom-trip"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5b714b] hover:bg-[#4a5c3d] text-white text-sm font-bold transition-colors shadow-sm"
          >
            Plan a Custom Trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}