'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Mountain, Footprints } from 'lucide-react';

interface ItineraryDay {
  day_number: number;
  title: string;
  description: string;
  altitude?: string;
  duration?: string;
  distance?: string;
  accommodation?: string;
  meals?: string;
  highlights?: string[];
}

interface ItineraryProps {
  itinerary?: ItineraryDay[];
}

export default function Itinerary({ itinerary }: ItineraryProps) {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);

  const toggleDay = (day: number) => {
    setExpandedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const toggleAll = () => {
    if (expandedDays.length === itinerary?.length) {
      setExpandedDays([]);
    } else {
      setExpandedDays(itinerary?.map(d => d.day_number) || []);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Detailed Itinerary
        </h2>
        <button
          onClick={toggleAll}
          className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
        >
          {expandedDays.length === itinerary?.length ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      <div className="space-y-4">
        {itinerary?.map((dayInfo) => {
          const isExpanded = expandedDays.includes(dayInfo.day_number);
          
          return (
            <div
              key={dayInfo.day_number}
              className="bg-white rounded-xl border-2 border-slate-100 hover:border-emerald-200 transition-all overflow-hidden"
            >
              {/* Day Header */}
              <button
                onClick={() => toggleDay(dayInfo.day_number)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">{dayInfo.day_number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-900 mb-1">
                      Day {dayInfo.day_number}: {dayInfo.title}
                    </h3>
                    {dayInfo.altitude && (
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Mountain className="w-4 h-4" />
                          {dayInfo.altitude}
                        </span>
                        {dayInfo.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {dayInfo.duration}
                          </span>
                        )}
                        {dayInfo.distance && (
                          <span className="flex items-center gap-1">
                            <Footprints className="w-4 h-4" />
                            {dayInfo.distance}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="ml-4">
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Day Content */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {dayInfo.description}
                  </p>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {dayInfo.accommodation && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-slate-900">Accommodation:</span>
                        <span className="text-slate-600">{dayInfo.accommodation}</span>
                      </div>
                    )}
                    {dayInfo.meals && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-slate-900">Meals:</span>
                        <span className="text-slate-600">{dayInfo.meals}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  {dayInfo.highlights && dayInfo.highlights.length > 0 && (
                    <div>
                      <p className="font-semibold text-slate-900 mb-2 text-sm">Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {dayInfo.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}