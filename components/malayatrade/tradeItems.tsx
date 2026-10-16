'use client';

import { useEffect, useState } from 'react';
import { Search, Globe2, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryType {
  id: number | string;
  name: string;
  slug?: string;
}

interface ProductType {
  id: number | string;
  category_id?: number | string | null;
  name: string;
  slug: string;
  price: string | number;
  image: string;
  target_market?: 'local' | 'international' | 'both'; // optional field if your backend supports it
  category?: CategoryType | null;
}

export default function TradeItems() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCatId, setSelectedCatId] = useState<number | string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [buyerType, setBuyerType] = useState<'all' | 'local' | 'international'>('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`),
        ]);

        if (prodRes.ok) {
          const pData = await prodRes.json();
          setProducts(Array.isArray(pData) ? pData : pData?.data || []);
        }

        if (catRes.ok) {
          const cData = await catRes.json();
          const rawCats = Array.isArray(cData) ? cData : cData?.data || [];
          
          const formattedCats: CategoryType[] = rawCats.map((c: any, index: number) => {
            if (typeof c === 'object' && c !== null) {
              return {
                id: c.id ?? index,
                name: String(c.name || 'Category'),
                slug: c.slug ?? '',
              };
            }
            return {
              id: index,
              name: String(c),
            };
          });

          setCategories(formattedCats);
        }
      } catch (err) {
        console.error('Error fetching trade data:', err);
      }
    };

    fetchData();
  }, []);

  // Format price safely from string or number
  const formatPrice = (priceVal: string | number) => {
    const num = typeof priceVal === 'string' ? parseFloat(priceVal) : priceVal;
    if (isNaN(num)) return priceVal;
    return num.toLocaleString('en-US');
  };

  // Filter products by category, search text, and local/international audience
  const filteredProducts = products.filter((product) => {
    const matchesSearch = String(product.name || '')
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCatId === null ||
      String(product.category_id) === String(selectedCatId);

    // Filter by buyer type (defaults to show all if product doesn't specify)
    let matchesBuyer = true;
    if (buyerType !== 'all' && product.target_market) {
      matchesBuyer = product.target_market === buyerType || product.target_market === 'both';
    }

    return matchesSearch && matchesCategory && matchesBuyer;
  });

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
     

        {/* 2. LOCAL VS INTERNATIONAL BUYER SEGMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div 
            onClick={() => setBuyerType(buyerType === 'local' ? 'all' : 'local')}
            className={`cursor-pointer border rounded-xl p-5 transition-all ${
              buyerType === 'local' 
                ? 'border-[#5b714b] bg-emerald-50/40 ring-2 ring-[#5b714b]/20' 
                : 'border-slate-200 bg-white hover:border-[#5b714b]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#5b714b]" />
                <h3 className="font-bold text-slate-900 text-base">For Local Buyers (Nepal)</h3>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                buyerType === 'local' ? 'bg-[#5b714b] text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {buyerType === 'local' ? 'Active Filter' : 'Filter Items'}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wholesale and retail supplies within Nepal. Direct dispatch for hotels, cafés, souvenir stores, and retail partners.
            </p>
          </div>

          <div 
            onClick={() => setBuyerType(buyerType === 'international' ? 'all' : 'international')}
            className={`cursor-pointer border rounded-xl p-5 transition-all ${
              buyerType === 'international' 
                ? 'border-[#5b714b] bg-emerald-50/40 ring-2 ring-[#5b714b]/20' 
                : 'border-slate-200 bg-white hover:border-[#5b714b]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#5b714b]" />
                <h3 className="font-bold text-slate-900 text-base">For International Buyers (Export)</h3>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                buyerType === 'international' ? 'bg-[#5b714b] text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {buyerType === 'international' ? 'Active Filter' : 'Filter Items'}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Export-ready batches, phytosanitary clearance, air/sea cargo forwarding, and custom-labeled Himalayan packaging.
            </p>
          </div>
        </div>

        {/* 3. SEARCH & ACTIVE BUYER PILL */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-semibold text-slate-500">Market View:</span>
            <button
              onClick={() => setBuyerType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                buyerType === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setBuyerType('local')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                buyerType === 'local'
                  ? 'bg-[#5b714b] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Nepal Market
            </button>
            <button
              onClick={() => setBuyerType('international')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                buyerType === 'international'
                  ? 'bg-[#5b714b] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Export Market
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-[#5b714b] focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* 4. TOP CATEGORIES BAR (Easy Scannability) */}
        <div className="mb-8 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCatId(null)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCatId === null
                  ? 'bg-[#5b714b] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>

            {categories.map((cat) => (
              <button
                key={String(cat.id)}
                onClick={() => setSelectedCatId(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCatId === cat.id
                    ? 'bg-[#5b714b] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 5. PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => {
            const categoryTitle = product.category?.name || null;

            return (
              <Link
                key={String(product.id)}
                href={`/malaya-trade/${product.slug}`}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#5b714b] hover:shadow-sm transition-all flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${product.image}`}
                    alt={product.name || 'Product'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {categoryTitle && (
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs text-slate-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-slate-200/80">
                      {categoryTitle}
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#5b714b] line-clamp-2 mb-1">
                      {product.name}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-base font-extrabold text-[#5b714b]">
                      NPR {mounted ? formatPrice(product.price) : product.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-[#5b714b] inline-flex items-center gap-1">
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-200 rounded-xl my-6">
            <p className="text-slate-600 text-sm mb-1">No products found matching your active filter.</p>
            <p className="text-xs text-slate-400 mb-4">Try choosing another category or clearing your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCatId(null);
                setBuyerType('all');
              }}
              className="px-4 py-2 bg-[#5b714b] text-white text-xs font-semibold rounded-lg hover:bg-[#4a5c3d] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}