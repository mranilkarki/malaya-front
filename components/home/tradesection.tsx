'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// 1. Match the interface to your database JSON
interface Product {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    price: string; // "0.00" is a string in your JSON
    sku: string;
    stock: number;
    description: string;
    image: string; // Matches "01KGXS..."
    is_active: number;
}

export default function TradeSection() {
    // 2. Add the Type to the useState hook
    const [products, setproducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
                const data = await response.json();
                
                // 3. Handle data if it's wrapped in a 'data' key or is a direct array
                const actualData = Array.isArray(data) ? data : data.data;
                setproducts(actualData?.slice(0, 4) || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchproducts();
    }, []);

    if (loading) return <div className="text-center py-20">Loading Products...</div>;

    return (
        <>
            <div className="text-center mb-10">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
            Trade With Us
          </h2>
          <p className="text-slate-500 text-sm mt-2">We make trading easy and accessible for everyone internationally. </p>
        
        </div>
            
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        /* Use product.id for the key */
                        <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200 h-full">
                            
                            {/* Product Image */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                                {product.image ? (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${product.image}`}
                                        alt={product.name}
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                                )}

                                {/* Badge: Shows if price is not "0.00" or just exists */}
                                {product.price !== "0.00" && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                                        Exhibition
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                                <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 group-hover:text-[#5b714b] transition-colors line-clamp-2">
                                    {product.name}
                                </h3>

                                <div className="flex items-baseline gap-2">
                                    <span className="text-lg font-bold text-[#5b714b]">
                                        {product.price}
                                    </span>
                                    {/* Optional: Show stock */}
                                    <span className="text-[10px] text-slate-400 ml-auto">
                                        Stock: {product.stock}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}