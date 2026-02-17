'use client';

import { useEffect, useState } from 'react';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface travelPackage {
  id: string;
  imageUrl: string;
  duration_days: string;
  location: string;
  title: string;
  destinations: string[];
  startingPrice: number;
  originalPrice: number;
  currency: string;
  rating?: number;
  slug: string;
  price: string;
  image_path: string;
  start_location: string;
  end_location: string;
  highlights: string;
  


}

export default function TravelPackagesSection() {
  const [activeTab, setActiveTab] = useState<'travel' | 'hotel' | 'transport'>('travel');
  const [travelPackages, setTravelPackages] = useState<travelPackage[]>([]);

  useEffect(() => {
    const fetchTravelPackages = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/travel-packages`);
        const data = await response.json();
        console.log('Fetched travel packages:', data);
        setTravelPackages(data);
      } catch (error) {
        console.error('Error fetching travel packages:', error);
      }
    };

    fetchTravelPackages();
  }, []);

 

  return (
    <section className="py-10 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 rounded-sm blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-sm blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
            Ultimate Travel Experience
          </h2>
          <p className="text-slate-500 text-sm mt-2">Discover our curated travel packages designed for unforgettable journeys. Make it Happen with MalayaGlobe. </p>
        
        </div>

        {/* travel Cards Grid */}
      
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelPackages.map((travel, index) => (
              <div
                key={travel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={`/travel-packages/${travel.slug}`}
                  prefetch={false}
                  className="block"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-slate-200">
                    <img
                      src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${travel.image_path}`}
                      alt={travel.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute top-4 left-4 bg-[#5b714b] text-white px-4 py-2 rounded-lg text-xs font-bold">
                      {travel.duration_days} - Days Trip
                    </div>

                    <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#5b714b]" />
                      <span className="text-xs font-bold uppercase">
                        {travel.end_location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 min-h-[3.5rem] group-hover:text-[#5b714b]">
                      {travel.title}
                    </h3>

                    <div className="flex items-end justify-between pt-2">
                      <div>
                        <p className="text-xs text-slate-500">Starting From:</p>
                        <span className="text-lg text-slate-400 font-medium">
                          {travel.price}
                        </span>
                        <p className="text-xs text-slate-400 mt-1">
                          *TAXES INCL./PER
                        </p>
                      </div>

                      <div className="bg-[#5b714b] text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
                        Book A Trip
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

     

        {/* View All Button */}
        {/* <div className="text-center mt-16">
          <button className="bg-[#FEA500] hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
            View All Packages
          </button>
        </div> */}
      </div>
    </section>
  );
}