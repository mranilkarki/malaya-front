'use client';
import React, { useEffect, useState } from 'react';
import { ShoppingCart, ChevronUp, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';

function ItemDetails({ slug }: { slug: string }) {
    const [quantity, setQuantity] = useState(1);
    const [details, setDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const handleWhatsAppOrder=()=>{
        const phoneNumber = '9779704889881'; 
        const message = `Hello, I would like to order ${quantity}  ${details.name} which you have placed in Website.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`);
                if (!res.ok) throw new Error('Failed to fetch product data');
                const data = await res.json();
                setDetails(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProductDetails();
    }, [slug]);

    // 1. Handle Loading State
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-stone-400" />
            </div>
        );
    }

    // 2. Handle Case where product isn't found
    if (!details) return <div className="text-center p-10">Product not found.</div>;

    return (
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT: IMAGE SECTION */}
            <div className="relative bg-[#F5F2ED] p-8 md:p-12 flex items-center justify-center group">
                <div className="relative shadow-2xl rounded-lg overflow-hidden border-8 border-white bg-white">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${details.image}`}
                        alt={details.name} 
                        height={500}
                        width={500}
                        className="w-full max-w-sm h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* RIGHT: CONTENT SECTION */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
                <div className="mb-6">
                    <span className="text-orange-600 text-sm font-sans font-bold tracking-widest uppercase mb-2 block">
                        {details.category?.name || 'Sacred Item'} {/* Mapped from category object */}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
                        {details.name} {/* Mapped from 'name' */}
                    </h1>
                    <p className="text-stone-500 italic text-lg mb-4">
                        SKU: {details.sku} <span className="text-stone-400 not-italic mx-2">|</span> 
                        Stock: {details.stock}
                    </p>
                    <div className="text-3xl font-bold text-[#D64D47] font-sans">
                        {parseFloat(details.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                </div>

                <div className="space-y-6 mb-8 text-stone-600 leading-relaxed text-lg font-sans">
                    <p>{details.description}</p>
                    
                    {details.stock > 0 ? (
                        <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
                            <CheckCircle2 className="w-4 h-4" />
                            In Stock & Ready to Ship
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 w-fit px-3 py-1 rounded-full border border-red-100">
                            Out of Stock
                        </div>
                    )}
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
                            onClick={handleWhatsAppOrder} 
                            className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-sans font-bold py-4 px-8 rounded-full shadow-lg shadow-green-100 transition-all uppercase tracking-widest text-sm"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Order via WhatsApp
                    </button>
                   
                </div>

                {/* METADATA */}
                <div className="pt-8 border-t border-stone-100 space-y-3 font-sans text-sm">
                    <div className="flex gap-2">
                        <span className="font-bold text-stone-900">Category:</span>
                        <span className="text-stone-500">{details.category?.name}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-bold text-stone-900">Last Updated:</span>
                        <span className="text-stone-500">{new Date(details.updated_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;