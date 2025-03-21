import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown, Star, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const productsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromProduct && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const sortedProducts = [...products].sort((a, b) => 
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );

  const filteredProducts = sortedProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center relative px-4">
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-center tracking-[-0.02em] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          CULT CURATE
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl text-center mb-12">
          Discover the latest product launches across technology, fashion, home goods, and more.
        </p>
        <ChevronDown className="absolute bottom-12 animate-bounce" size={32} />
      </div>

      {/* Products Section */}
      <div ref={productsRef} className="container mx-auto px-4 py-24">
        {/* Modern Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-900 rounded-2xl px-6 py-4 pl-14 text-white placeholder-zinc-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProducts.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="group relative block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-[.4rem] h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-emerald-500">New Release</span>
                    </div>
                    <h3 className="text-2xl font-medium mb-2">{product.name}</h3>
                    <p className="text-zinc-400 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="fill-yellow-500 stroke-yellow-500" size={16} />
                      <span className="text-yellow-500">{product.rating}</span>
                    </div>
                    <p className="text-xl font-semibold">{product.price}</p>
                  </div>
                  <div className="p-2 border border-zinc-700 rounded-full group-hover:border-white transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-zinc-500">{product.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}