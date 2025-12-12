import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { brands } from '../data/brands';
import { saveScrollPosition, getScrollPosition, clearScrollPosition } from '../hooks/useScrollPosition';
import { useSeo } from '../hooks/useSeo';

export function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // SEO optimization
  useSeo({
    title: 'Featured D2C Brands - Top Direct-to-Consumer Brands in India | CULT CURATE',
    description: 'Discover featured D2C brands and top direct-to-consumer companies in India. Explore innovative brands across beauty, fashion, food, tech, and lifestyle categories. Find new emerging D2C brands.',
    keywords: 'featured D2C brands, top D2C brands India, direct to consumer brands, new D2C companies, emerging brands, innovative brands, startup brands, D2C beauty brands, D2C fashion brands',
    type: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Featured D2C Brands",
      "description": "Collection of top direct-to-consumer brands in India",
      "url": "https://cultcurate.com/brands"
    }
  });

  useEffect(() => {
    // Always scroll to top when entering brands page
    window.scrollTo({ top: 0, behavior: 'instant' });
    clearScrollPosition('brands');
  }, []);

  const handleBrandClick = () => {
    // Save current scroll position before navigating
    saveScrollPosition('brands');
  };

  const filteredBrands = brands.filter(brand => 
    brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    brand.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    brand.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 bg-zinc-950/80 backdrop-blur-lg z-50 border-b border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              CULT CURATE
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-zinc-400 hover:text-white transition-colors font-medium"
              >
                Products
              </Link>
              <Link 
                to="/brands" 
                className="text-white hover:text-zinc-300 transition-colors font-medium"
              >
                Brands
              </Link>
            </div>
            <div className="md:hidden">
              <Link 
                to="/" 
                className="text-zinc-400 hover:text-white transition-colors font-medium text-sm"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-display text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-[-0.02em] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Featured Brands
          </h1>
          <p className="text-sm md:text-xl text-zinc-400 max-w-2xl mx-auto px-2">
            Discover the most innovative and exciting brands behind your favorite products
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-900 rounded-2xl px-4 md:px-6 py-3 md:py-4 pl-12 md:pl-14 text-sm md:text-base text-white placeholder-zinc-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
            />
            <Search className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 px-4 md:px-0">
          {filteredBrands.map(brand => (
            <Link
              key={brand.id}
              to={`/brand/${brand.id}`}
              onClick={handleBrandClick}
              className="group relative block"
            >
              <div className="bg-zinc-900 rounded-2xl p-4 md:p-8 hover:bg-zinc-800 transition-colors">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} - D2C ${brand.category} brand logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 truncate">{brand.name}</h3>
                    <span className="text-xs md:text-sm text-zinc-400 truncate block">{brand.category}</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-zinc-400 mb-4 md:mb-6 line-clamp-3">{brand.description}</p>

                <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
                    <MapPin size={14} />
                    <span className="truncate">{brand.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
                    <Calendar size={14} />
                    <span>Founded {brand.founded}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-emerald-500">View Brand</span>
                  <div className="p-2 border border-zinc-700 rounded-full group-hover:border-white transition-colors flex-shrink-0">
                    <ArrowUpRight size={16} className="md:w-5 md:h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <p className="text-zinc-400 text-sm md:text-lg">No brands found matching your search.</p>
          </div>
        )}
      </div>
    </>
  );
}