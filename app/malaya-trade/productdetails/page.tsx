'use client';

import React, { useState } from 'react';

import { ShoppingCart, Heart, Share2, ChevronUp, ChevronDown, CheckCircle2 } from 'lucide-react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    title: "The Buddha's Way of Happiness",
    author: "Thomas Bien, Ph.D.",
    foreword: "Lama Surya Das",
    price: 25.00,
    description: "A profound guide to healing sorrow, transforming negative emotions, and finding authentic well-being in the present moment. This work blends ancient wisdom with modern psychological insights.",
    image: "https://v.greattibettour.com/photos/2021/04/prayer-bells-16-62347.jpg", // High-quality placeholder
    categories: ["Philosophy", "Spiritual Growth"],
    tags: ["Mindfulness", "Buddhism", "Wellness"]
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6 md:p-12 mt-10">
      <div 
        className="max-w-6xl w-full bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2"
      >
        {/* LEFT: IMAGE SECTION */}
        <div className="relative bg-[#F5F2ED] p-8 md:p-12 flex items-center justify-center group">
          <div 
            className="relative shadow-2xl rounded-lg overflow-hidden border-8 border-white"
          >
            {/* Referencing the book structure from */}
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full max-w-sm h-100 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
        </div>

        {/* RIGHT: CONTENT SECTION */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-orange-600 text-sm font-sans font-bold tracking-widest uppercase mb-2 block">
              Sacred Literature
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
              {product.title}
            </h1>
            <p className="text-stone-500 italic text-lg mb-4">
              by {product.author} <span className="text-stone-400 not-italic mx-2">|</span> 
              <span className="text-sm font-sans uppercase tracking-tighter">Foreword by {product.foreword}</span>
            </p>
            <div className="text-3xl font-bold text-[#D64D47] font-sans">
              ${product.price.toFixed(2)}
            </div>
          </div>

          <div className="space-y-6 mb-8 text-stone-600 leading-relaxed text-lg font-sans">
            <p>{product.description}</p>
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
              <CheckCircle2 className="w-4 h-4" />
              In Stock & Ready to Ship
            </div>
          </div>

          {/* QUANTITY & ADD TO CART */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center border-2 border-stone-200 rounded-full px-4 py-2 bg-stone-50">
              <span className="text-stone-400 mr-4 font-sans font-bold">Qty</span>
              <input 
                type="text" 
                value={quantity} 
                readOnly 
                className="w-8 text-center bg-transparent font-bold text-stone-900 font-sans focus:outline-none" 
              />
              <div className="flex flex-col ml-2">
                <button onClick={() => setQuantity(q => q + 1)} className="text-stone-400 hover:text-stone-900 transition-colors">
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-stone-400 hover:text-stone-900 transition-colors">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button 
             
              className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-[#D64D47] hover:bg-[#B33B36] text-white font-sans font-bold py-4 px-8 rounded-full shadow-lg shadow-red-100 transition-all uppercase tracking-widest text-sm"
            >
              <ShoppingCart className="w-5 h-5" />
              Add To Cart
            </button>
          </div>

          {/* METADATA */}
          <div className="pt-8 border-t border-stone-100 space-y-3 font-sans text-sm">
            <div className="flex gap-2">
              <span className="font-bold text-stone-900">Categories:</span>
              <span className="text-stone-500">{product.categories.join(", ")}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-stone-900">Tags:</span>
              <span className="text-stone-500">{product.tags.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;