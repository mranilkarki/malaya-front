'use client';

import React from 'react';
import Image from 'next/image';

import { Plane, Eye, Target, ArrowUpRight, Quote } from 'lucide-react';

const AboutUsSection = () => {
  const stats = [
    { label: 'Travel Experience', value: '20+', icon: Plane },
    { label: 'Destinations Covered', value: '50+', icon: Target },
  ];

  return (
    <section className="py-30 bg-white overflow-hidden mt-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 text-sm font-semibold tracking-wide">
              <Plane className="w-4 h-4 text-orange-500" />
              ABOUT US
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-[1.1]">
              Your Trusted Travel <br />
              <span className="text-orange-500 italic">Partner</span> For You
            </h2>
            
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
              Discover the world with experts who care. We don't just book trips; we craft 
              lifelong memories through curated experiences and local insights that 
              you won't find in any guidebook.
            </p>

            {/* Featured Hero Image (Bottom Left) */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200" 
                alt="Tropical Destination"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Floating Testimonial Card */}
              <div 
                
                className="absolute bottom-6 right-6 left-6 md:left-auto md:w-80 bg-[#003333] p-6 rounded-2xl text-white shadow-xl"
              >
                <Quote className="w-10 h-10 text-orange-400 opacity-50 mb-2" />
                <p className="text-sm italic mb-4 leading-relaxed">
                  "The best travel agency I've ever worked with. Every detail was perfect."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-400">
                    <img src="https://i.pravatar.cc/150?u=sunny" alt="Sunny Melon" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Sunny Melon</h4>
                    <p className="text-[10px] uppercase tracking-tighter text-orange-400">Travel Planner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT GRID COLUMN */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
           

            {/* Vision & Mission Cards */}
            <div className="bg-[#f0f7f7] p-8 rounded-3xl group hover:bg-[#003333] transition-colors duration-500">
              <div className="w-12 h-12 bg-[#003333] group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Eye className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Our Vision</h3>
              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                To become the world's most innovative travel partner, inspiring people 
                to explore the unknown with confidence and comfort.
              </p>
            </div>

            <div className="bg-[#f0f7f7] p-8 rounded-3xl group hover:bg-[#003333] transition-colors duration-500">
              <div className="w-12 h-12 bg-[#003333] group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Our Mission</h3>
              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                Providing personalized, high-quality travel services that create 
                unforgettable experiences while supporting local communities.
              </p>
            </div>

            {/* Stats */}
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 border border-slate-100 rounded-3xl hover:border-orange-200 transition-colors">
                <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <stat.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div className="md:col-span-2 pt-6">
              <p className="text-slate-500 mb-8 italic">
                "We believe that travel is the only thing you buy that makes you richer."
              </p>
              <button className="group relative inline-flex items-center gap-4 bg-[#003333] text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10">More About Us</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <ArrowUpRight className="text-slate-900 group-hover:text-white w-4 h-4" />
                </div>
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;