"use client";

import Link from "next/link";


export default function FeaturedOutlets() {
    const outlets = [
        {
            id: 1,
            name: "Gallery By Himalayan Java",
            location: "Gallery Outlet",
            description: "Experience the authentic taste of Himalayan beans in a cozy, modern atmosphere.",
            image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop",
            // Replace with your actual storage URL
             link:"https://share.google/TLnhzVnwSaFJdgCVD"
        },
        {
            id: 2,
            name: "Himalayan Java Coffee",
            location: "Phulbari Outlet",
            description: "A serene coffee escape located in the heart of Phulbari, perfect for travelers.",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
            // Replace with your actual storage URL
             link:"https://share.google/XI5kXOut63cXa6gav"
        }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                        Our Featured Outlets
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">Wherever you go, we are there to serve you.                                                     </p>
                </div>
                
                {/* 1 column on mobile (default), 2 columns on lg (desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {outlets.map((outlet) => (
                        <div key={outlet.id} className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px]">
                          
                            {/* Parallax Background Container */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                style={{ 
                                    backgroundImage: `url(${outlet.image})`,
                                    backgroundAttachment: 'fixed' // This creates the Parallax effect
                                }}
                            />
                              <Link href={outlet.link} target="_blank" className="absolute inset-0 z-20" >

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                <span className="text-sm font-medium uppercase tracking-widest text-[#5b714b] bg-white/90 px-3 py-1 rounded-full w-fit mb-3">
                                    {outlet.location}
                                </span>
                                <h3 className="text-2xl font-bold mb-2">{outlet.name}</h3>
                                <p className="text-slate-100 line-clamp-2 text-sm md:text-base">
                                    {outlet.description}
                                </p>
                            </div>
                            </Link>
                          
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}