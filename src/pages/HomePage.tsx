import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown, Star, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import { saveScrollPosition, getScrollPosition, clearScrollPosition } from '../hooks/useScrollPosition';
import { useSeo } from '../hooks/useSeo';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  // SEO optimization
  useSeo({
    title: 'CULT CURATE - Discover the Most Innovative & Exciting Products 2026',
    description: 'Explore the most innovative and exciting products from top D2C brands in India. Discover emerging direct-to-consumer brands across beauty, fashion, food, tech, and lifestyle. Stay updated with the newest D2C products, sustainable brands, and trending launches in 2026.',
    keywords: 'new D2C brands 2026, top D2C brands India, sustainable D2C products, innovative products 2026, emerging brands, direct to consumer brands India, eco-friendly D2C brands, clean beauty 2026, sustainable fashion, trending D2C products, new product launches 2026, AI-curated products',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CULT CURATE",
      "description": "Discover the most innovative and exciting products from new D2C brands",
      "url": "https://cultcurate.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cultcurate.com/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  });

  useEffect(() => {
    // Handle scroll restoration
    if (location.state?.fromProduct) {
      // Coming from product page, restore scroll position
      const savedPosition = getScrollPosition('homepage');
      if (savedPosition > 0) {
        setTimeout(() => {
          window.scrollTo({ top: savedPosition, behavior: 'instant' });
        }, 100);
      }
    } else {
      // Fresh navigation to homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
      clearScrollPosition('homepage');
    }
  }, [location]);

  const handleProductClick = () => {
    // Save current scroll position before navigating
    saveScrollPosition('homepage');
  };

  const sortedProducts = [...products].sort((a, b) => 
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

  const filteredProducts = sortedProducts.filter(product => 
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  return (
    <>
      {/* Header Section */}
      <header className="sticky top-0 bg-zinc-950/80 backdrop-blur-lg z-50 border-b border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              CULT CURATE
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-white hover:text-zinc-300 transition-colors font-medium"
              >
                Products
              </Link>
              <Link 
                to="/brands" 
                className="text-zinc-400 hover:text-white transition-colors font-medium"
              >
                Brands
              </Link>
            </div>
            <div className="md:hidden">
              <Link 
                to="/brands" 
                className="text-zinc-400 hover:text-white transition-colors font-medium text-sm"
              >
                Brands
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-[-0.02em] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            CULT CURATE
          </h1>
          <p className="text-sm md:text-xl text-zinc-400 mb-6 md:mb-8 px-2">
            Discover the most innovative and exciting products across beauty, fashion, food, technology, lifestyle and more.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 pb-20 md:pb-24">
        {/* Modern Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-900 rounded-2xl px-4 md:px-6 py-3 md:py-4 pl-12 md:pl-14 text-sm md:text-base text-white placeholder-zinc-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
            />
            <Search className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex justify-center md:justify-center gap-2 md:gap-3 px-4 md:px-0 pb-2 md:pb-0 min-w-min md:min-w-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 md:px-6 py-1.5 md:py-3 rounded-full text-xs md:text-base font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === category
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 md:px-0">
          {filteredProducts.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              onClick={handleProductClick}
              className="group relative block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - New D2C product from ${product.category} category`}
                  className="w-full rounded-[.4rem] h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4 md:mt-6">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs md:text-sm text-emerald-500">Newly Added</span>
                    </div>
                    <h3 className="text-lg md:text-2xl font-medium mb-2">{product.name}</h3>
                    <p className="text-xs md:text-sm text-zinc-400 mb-3 md:mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <Star className="fill-yellow-500 stroke-yellow-500" size={14} />
                      <span className="text-yellow-500 text-sm md:text-base">{product.rating}</span>
                    </div>
                    <p className="text-lg md:text-xl font-semibold">{product.price}</p>
                  </div>
                  <div className="p-2 border border-zinc-700 rounded-full group-hover:border-white transition-colors flex-shrink-0">
                    <ArrowUpRight size={18} className="md:w-6 md:h-6" />
                  </div>
                </div>
                <div className="mt-3 md:mt-4">
                  <span className="text-xs md:text-sm text-zinc-500">{product.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <p className="text-xs md:text-lg text-zinc-400 px-4">
              No products found {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}
              {searchQuery ? ` matching "${searchQuery}"` : ''}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 md:px-6 py-2 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors text-sm md:text-base"
            >
              Clear Filters
            </button>
          </div>
        )}
    </>
  );
}