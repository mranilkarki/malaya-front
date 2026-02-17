'use client';

import { useEffect, useState } from 'react';
import { Grid, List, ShoppingCart, Eye, Search, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  products?: Product[];
  categories?: string[];
}

export default function TradeItems({   }: ProductGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

   const [products, setproducts] = useState<Product[]>([]);
      const [categories, setCategories] = useState<string[]>([]);

  
    useEffect(() => {
      const fetchproducts = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
          const data = await response.json();
          console.log('Fetched products:', data);
          setproducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      const fetchCategories = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);
          const data = await response.json();
          console.log('Fetched categories:', data);
          setCategories(data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchproducts();
      fetchCategories();
    }, []);
  


  const defaultCategories = [
    'Book',
    'Buddhism',
    'Inspiration',
    'Meditation',
    'Other',
    'Philosophy',
    'Teaching',
    'Art',
    'Incense'
  ];

  const productList = products ;
  const categoryList = categories || defaultCategories;

  // Filter products
  const filteredProducts = productList.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Shopping Cart */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Shopping Cart
              </h3>
              <p className="text-slate-600">No products in the cart.</p>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Search Products</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-[#5b714b]  rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-6">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      selectedCategory === null
                        ? 'bg-white/30 font-semibold'
                        : 'hover:bg-white/20'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categoryList.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? 'bg-white/30 font-semibold'
                          : 'hover:bg-white/20'
                      }`}
                    >
                      {/* {category.name} */}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            {/* <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Buddhism', 'Meditation', 'Mindfulness', 'Tibet', 'Zen', 'Spiritual'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div> */}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            {/* <div className="flex items-center justify-between mb-6 bg-white rounded-xl shadow-sm p-4 border border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-emerald-100 text-[#5b714b]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-emerald-100 text-[#5b714b]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              {/* <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none text-sm font-medium"
              >
                <option value="latest">SORT BY LATEST</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div> */} 

            {/* Products Grid */}
            <div className={`grid gap-4 ${
              viewMode === 'grid' 
                ? 'grid-cols-2 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-2'
            }`}>
              {filteredProducts.map((product) => (
                
                <Link key={product.id} href={`/malaya-trade/productdetails`}>
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                    <Image
               
                      src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${product.image}`}
                      alt={product.name}
                      height={100}
                      width={100}
                    
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-3 bg-amber-400 hover:bg-amber-500 text-white rounded-full shadow-lg transition-all transform hover:scale-110">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-emerald-500 hover:bg-[#5b714b] text-white rounded-full shadow-lg transition-all transform hover:scale-110">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Sale Badge */}
                    {product.price && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SALE
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#5b714b] transition-colors">
                      {product.name}
                    </h3>


                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#5b714b]">
                        {product.price}
                      </span>
                     
                    </div>
                  </div>
                </div>
                </Link>
              
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-slate-600">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="mt-4 px-6 py-3 bg-emerald-500 hover:bg-[#5b714b] text-white rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}