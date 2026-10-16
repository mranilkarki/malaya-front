'use client';

import Link from 'next/link';
import { GraduationCap, HeartPulse, Users, ArrowRight } from 'lucide-react';

export default function SocialImpact() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5b714b] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Travel • Trade • Give Back
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Every Journey Creates an Impact
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 leading-relaxed">
            Malaya Globe was founded on the belief that enterprise must uplift its homeland.
          </p>
        </div>

        {/* 35% Net Profit Highlight Banner */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 text-center mb-10">
          <div className="text-3xl sm:text-4xl font-black text-[#5b714b]">
            35% of Net Profit
          </div>
          <p className="text-sm md:text-base font-semibold text-slate-800 mt-2">
            Donated directly to community development through <strong className="text-slate-900">Nawa Jyoti Samaj</strong>
          </p>
          <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-xl mx-auto leading-relaxed">
            From every travel booking, export delivery, or retail product, 35% of net proceeds are dedicated to uplifting underprivileged communities across Nepal.
          </p>
        </div>

        {/* Three Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="text-center p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-[#5b714b] transition-colors">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-[#5b714b] flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Education</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scholarships, educational supplies, and digital classroom infrastructure for rural students.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-[#5b714b] transition-colors">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-[#5b714b] flex items-center justify-center mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Healthcare</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Community health camps, medical supplies, and maternal health support across mountain districts.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-[#5b714b] transition-colors">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-[#5b714b] flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Community Welfare</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Emergency assistance, senior welfare, and sustainable livelihood vocational training programs.
            </p>
          </div>
        </div>

        {/* CTA Action */}
        <div className="text-center">
          <Link
            href="/about#impact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#5b714b] hover:bg-[#4a5c3d] text-white font-semibold text-sm transition-colors shadow-sm"
          >
            Our Social Impact <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}