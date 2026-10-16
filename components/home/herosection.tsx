'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    title: 'Connecting Nepal to the World',
    subtitle: 'Travel • Trade • Handicrafts • Agriculture • Hospitality',
    description:
      'A Nepal-based diversified business group connecting people, products, destinations and opportunities between Nepal and the world.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop',
    title: 'From the Himalayas to the World',
    subtitle: 'Trekking • Expeditions • Cultural Tours',
    description:
      'Experience authentic Nepalese heritage, pristine trails, and bespoke adventures tailored for global explorers.',
  },
  {
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2070&auto=format&fit=crop',
    title: 'Authentic Trade & Global Exports',
    subtitle: 'Organic Agriculture • Premium Handicrafts',
    description:
      'Bringing authentic Himalayan produce and world-renowned artisan handicrafts directly to international markets.',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Slides with Cross-Fade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[4000ms]' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 mt-12 transition-all duration-700">
          Malaya Globe <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-100">
            {slides[currentSlide].title}
          </span>
        </h1>

        {/* Subheading */}
        <h3 className="text-xl sm:text-2xl text-emerald-400 font-medium mb-4 transition-all duration-700">
          {slides[currentSlide].subtitle}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light min-h-[4rem] transition-all duration-700">
          {slides[currentSlide].description}
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a href='#business'>
          <button className="w-full sm:w-auto bg-[#5b714b] hover:bg-[#4a5c3d] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer">
           Explore Our Business
          </button>
          </a>

          <div className="w-full sm:w-auto bg-white  px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer">
           
              
              <a href='/contact'><h3 className="text-1xl uppercase font-bold tracking-widest leading-none">Plan Your Journey</h3></a>
              
          
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-emerald-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#5b714b] text-white transition-all hidden lg:flex cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#5b714b] text-white transition-all hidden lg:flex cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}