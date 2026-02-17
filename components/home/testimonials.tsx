'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  time: string;
  source: 'tripadvisor' | 'facebook' | 'google';
  review: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeSource, setActiveSource] = useState<'tripadvisor' | 'facebook' | 'google'>('tripadvisor');
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Liam Nohkan',
      location: 'Italy',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      date: 'May 9, 2023',
      time: '10:30 PM',
      source: 'tripadvisor',
      review: '"Incredible craftsmanship! Egens Lab\'s web development services surpassed my expectations at every turn. Highly recommended!"'
    },
    {
      id: '2',
      name: 'Mateo Daniel',
      location: 'Australia',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      date: 'May 9, 2023',
      time: '10:30 PM',
      source: 'tripadvisor',
      review: '"Absolute perfection! Egens Lab\'s web development services left me completely satisfied and eager to recommend them to others."'
    },
    {
      id: '3',
      name: 'Lucas Mora',
      location: 'France',
      avatar: 'https://i.pravatar.cc/150?img=68',
      rating: 5,
      date: 'May 9, 2023',
      time: '10:30 PM',
      source: 'tripadvisor',
      review: '"Exemplary service! Egens Lab\'s Figma, web design and development team went above and beyond, leaving me thoroughly impressed and grateful."'
    },
    {
      id: '4',
      name: 'Emma Wilson',
      location: 'Canada',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      date: 'May 10, 2023',
      time: '2:15 PM',
      source: 'facebook',
      review: '"Outstanding experience from start to finish! The team\'s attention to detail and creative solutions exceeded all expectations."'
    },
    {
      id: '5',
      name: 'James Chen',
      location: 'Singapore',
      avatar: 'https://i.pravatar.cc/150?img=52',
      rating: 5,
      date: 'May 11, 2023',
      time: '9:45 AM',
      source: 'google',
      review: '"Professional, efficient, and incredibly talented. They transformed our vision into reality with seamless execution."'
    }
  ];

  const sources = [
    { id: 'tripadvisor' as const, label: 'Tripadvisor', icon: '🌐' },
    { id: 'facebook' as const, label: 'Facebook', icon: '📘' },
    { id: 'google' as const, label: 'Google', icon: '🔍' }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
        );
      }, 5000); // Slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  
  // Fill remaining slots if less than 3 testimonials are visible
  while (visibleTestimonials.length < 3 && testimonials.length >= 3) {
    const remainingIndex = (currentIndex + visibleTestimonials.length) % testimonials.length;
    visibleTestimonials.push(testimonials[remainingIndex]);
  }

  return (
    <section className="py-5 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5b714b] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5b714b] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">     
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Regards From Travelers
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white hover:bg- rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-110 group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white hover:bg- rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-110 group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-white" />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.15}s backwards`
                }}
              >
                {/* Review Text */}
                <p className="text-slate-600 leading-relaxed mb-6 text-base min-h-[120px]">
                  {testimonial.review}
                </p>

                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'fill-[#5b714b] text-[#5b714b]'
                            : 'fill-slate-200 text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-700">{testimonial.date}</p>
                    <p className="text-xs text-slate-400">{testimonial.time}</p>
                  </div>
                </div>

                {/* Source Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5b714b]" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 capitalize">
                    {testimonial.source}
                  </span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg- rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index * 3);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / 3) === index
                    ? 'w-8 bg-'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-slate-500 hover:text-[#5b714b] transition-colors flex items-center gap-2 mx-auto"
          >
            {isAutoPlaying ? (
              <>
                <span className="w-2 h-2 bg- rounded-full animate-pulse" />
                Auto-playing
              </>
            ) : (
              <>
                <span className="w-2 h-2 bg-slate-400 rounded-full" />
                Paused
              </>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}