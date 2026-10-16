'use client';

import { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface ApiEvent {
  id: number;
  events_name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  image: string;
  price: number;
  is_active: number;
}

interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  address: string;
  description: string;
  price: number;
  image: string;
  day: number;
  month: string;
  dayOfWeek: string;
}

export default function Events() {
  const [eventsList, setEventsList] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://admin.malayaglobe.com/api/exhibitions');
        const data: ApiEvent[] = await response.json();

        // Transform API data to local UI Interface
        const transformedEvents: Event[] = data.map((item) => {
          const startDate = new Date(item.start_date);
          const endDate = new Date(item.end_date);
          
          // Splitting location string (assuming it contains a bullet point or comma)
          const locationParts = item.location.split('•');
          const locName = locationParts[0]?.trim() || 'Tibet';
          const locAddress = locationParts[1]?.trim() || '';

          return {
            id: item.id.toString(),
            title: item.events_name,
            startDate: startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
            endDate: endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
            location: locName,
            address: locAddress,
            description: item.description,
            price: item.price,
            // Assuming image path needs a base URL if it's just a filename
            image: item.image,
            day: startDate.getDate(),
            month: startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            dayOfWeek: startDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
          };
        });

        setEventsList(transformedEvents);
      } catch (error) {
        console.error("Error fetching exhibitions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const groupedEvents = eventsList.reduce((acc, event) => {
    if (!acc[event.month]) acc[event.month] = [];
    acc[event.month].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const filteredGroups = Object.entries(groupedEvents).reduce((acc, [month, monthEvents]) => {
    const filtered = monthEvents.filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) acc[month] = filtered;
    return acc;
  }, {} as Record<string, Event[]>);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Header */}
        <div className="mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for Tibet exhibitions..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="px-8 py-3 bg-[#FEA500] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
            Find Events
          </button>
        </div>

        {/* Month Sections */}
        {Object.entries(filteredGroups).length > 0 ? (
          Object.entries(filteredGroups).map(([month, monthEvents]) => (
            <div key={month} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-slate-800 border-l-4 border-orange-400 pl-4">{month}</h2>
              
              <div className="space-y-8">
                {monthEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-[100px_1fr_350px]"
                  >
                    {/* Date Column */}
                    <div className="bg-slate-50 flex flex-col items-center justify-center py-6 border-r border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{event.dayOfWeek}</span>
                      <span className="text-4xl font-black text-slate-800">{event.day}</span>
                    </div>

                    {/* Content Column */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.startDate} — {event.endDate}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors mb-3">
                          {event.title}
                        </h3>
                        <div className="flex items-start gap-2 text-slate-500 mb-4">
                          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm font-medium">{event.location} {event.address && `• ${event.address}`}</span>
                        </div>
                        <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      <div className="mt-4 text-2xl font-black  justify-between text-slate-900" style={{display:"flex"}}>
                        <div>
                          {event.price}
                        </div>
                        <div>
                         <Link href="https://wa.me/9779704889881"  target="_blank" rel="noopener noreferrer">
                            <button className="px-2 mx-5 py-2 border-2 bg-orange-500 text-white hover:bg-orange-600 rounded-xl font-bold text-lg transition-all">
                              WhatsApp Inquiry
                          </button>
                          </Link>
                        </div>
                        
        
                      </div>
                      
                    </div>

                    {/* Image Column */}
                    <div className="relative h-64 md:h-full w-full overflow-hidden">
                      <img
                        src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${event.image}`}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-slate-500">No exhibitions found matching your search.</div>
        )}
      </div>
    </div>
  );
}