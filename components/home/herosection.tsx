'use client';

import { useState } from 'react';
import {
  Star,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop")`,
          }}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-900/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        

        {/* Main Headline */}
        <h1 className="text-5xl  font-extrabold text-white mb-6  mt-15 ">
          One Vision. <br />   A World of <br/>
          <span className="text-transparent bg-clip-text bg-[#5b714b]">
           Experiences
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          From the high peaks of the Himalayas to global trade routes, we curate excellence across industries. Explore the diverse portfolio of MalayaGlobe.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button className="w-full sm:w-auto bg-[#5b714b] hover:bg-[#4a5c3d] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95">
            Book A Trip
          </button>
          
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <div className="w-10 h-10 bg-[#00AA6C] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.462a6.462 6.462 0 110-12.924 6.462 6.462 0 010 12.924z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-none">Tripadvisor</p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/30 text-amber-400'}`} />
                  ))}
                </div>
                <span className="text-white font-bold text-sm leading-none">4.7 / 5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sector Indicators / Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">15+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Years of Legacy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">4+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Sectors</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">50k+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Global Clients</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">Nepal</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Based Operations</p>
          </div>
        </div> */}
      </div>

      {/* Decorative Navigation Arrows (Optional - if you have a slider) */}
      <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-[#5b714b] text-white transition-all hidden lg:flex">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-[#5b714b] text-white transition-all hidden lg:flex">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </section>
  );
}