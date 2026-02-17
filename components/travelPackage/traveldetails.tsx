'use client';
import { useEffect, useState } from 'react';
import { 
  Globe, 
  Calendar, 
  TrendingUp, 
  MapPin,
  Star,
  Heart,
  Share2,
  CheckCircle,
  Loader2
} from 'lucide-react';
import Itinerary from './itinerary';
import BookingSidebar from '../bookings/bookingsidebar';
import Gallery from './gallery';

interface TravelPackage {
  id: number;
  title: string;
  description: string;
  price: string;
  duration_days: number;
  start_location: string;
  end_location: string;
  highlights: string;
  image_path: string;
  gallery: [];
  itineraries: [];
}

interface TravelDetailsProps {
  slug: string;
}

export default function TravelDetails({ slug }: TravelDetailsProps) {
  const [tour, setTour] = useState<TravelPackage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/travel-packages/${slug}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch tour data');
        }
        
        const data = await response.json();
        console.log("Fetched tour data:", data);
        setTour(data);
      } catch (error) {
        console.error("Error fetching tour data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-[#5b714b]" />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-slate-600">Package not found.</p>
      </div>
    );
  }

  const tourHighlights = tour.highlights 
    ? tour.highlights.split('\n').map(h => h.replace(/^\d+\.\s*/, '').trim()).filter(Boolean)
    : [];

  return (
    <>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery Section */}
          <div className="mb-8">
       {tour.gallery && <Gallery gallery={tour.gallery} />}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
           <div className="space-y-5">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-600 capitalize">
              <a href="/" className="hover:text-[#5b714b]">home</a>
              <span>›</span>
              <a href="/travel-packages" className="hover:text-[#5b714b]">Travel Packages</a>
              <span>›</span>
              <span className="text-slate-400 truncate">{tour.title}</span>
            </nav>

            {/* Title and Actions */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {tour.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                
                  <div className="flex items-center gap-2 text-slate-700">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <span>Starting from {tour.price}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="p-3 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200">
                  <Share2 className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Tour Info Grid */}
            {/* <div className="bg-slate-50 rounded-2xl px-8 border border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
                
                {tour.features.map((feature, index) => {
                  return (
                    <>
                    <div className="flex items-start gap-3">
                      <div className="p-2 px-5 bg-white shadow-sm rounded-lg">
                      <div key={index}>
                        <p className="text-sm text-slate-500 mb-1">{feature.feature_name}</p>
                        <p className="font-semibold text-slate-900">{feature.feature_value}</p>
                      </div>
                    </div>
                  </div>
                    </>
                  
                  );
                })}
                  
                

              </div>
            </div> */}

            {/* Highlights Section */}
            <div className="pt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Trip Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-[#5b714b] flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed font-medium">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview Section */}
            <div className="pt-4 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Trip Overview
              </h2>
              <div className="prose prose-slate max-w-none">
                {tour.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-700 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            {tour.itineraries && tour.itineraries.length > 0 && (
              <Itinerary itinerary={tour.itineraries} />
            )}
          
          </div>
          </div>

          <div className="lg:col-span-1">
            <BookingSidebar  />
          </div>
        </div>
      </div>
    
  
   
    </>
  );
}