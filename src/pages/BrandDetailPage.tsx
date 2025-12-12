import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MapPin, Calendar, Star, ArrowUpRight } from 'lucide-react';
import { getBrandById } from '../data/brands';
import { products } from '../data/products';
import { clearScrollPosition } from '../hooks/useScrollPosition';
import { useSeo } from '../hooks/useSeo';

export function BrandDetailPage() {
  const { id } = useParams();
  const brand = getBrandById(id || '');

  // SEO optimization
  if (brand) {
    useSeo({
      title: `${brand.name} - D2C ${brand.category} Brand | CULT CURATE`,
      description: `Discover ${brand.name}, a leading D2C ${brand.category.toLowerCase()} brand from ${brand.location}. ${brand.description} Founded in ${brand.founded}. Explore their innovative products and brand story.`,
      keywords: `${brand.name}, D2C ${brand.category} brand, ${brand.location} brands, new ${brand.category.toLowerCase()} brand, innovative ${brand.category.toLowerCase()} products, direct to consumer ${brand.category.toLowerCase()}`,
      image: brand.logo,
      type: 'article',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": brand.name,
        "description": brand.description,
        "url": brand.website,
        "logo": brand.logo,
        "foundingDate": brand.founded,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": brand.location.split(',')[0],
          "addressCountry": "India"
        },
        "sameAs": [brand.website]
      }
    });
  }

  useEffect(() => {
    // Always scroll to top when entering brand detail page
    window.scrollTo(0, 0);
    // Clear any saved scroll positions
    clearScrollPosition('brands');
    clearScrollPosition('homepage');
  }, [id]);

  if (!brand) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Brand not found</h2>
        <Link to="/brands" className="text-blue-500 hover:underline">Return to brands</Link>
      </div>
    );
  }

  // Filter products by brand website domain
  const brandProducts = products.filter(product => 
    product.link.includes(brand.website.replace('https://', '').replace('http://', ''))
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
                to="/brands" 
                className="text-white hover:text-zinc-300 transition-colors font-medium text-sm"
              >
                Brands
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">

      {/* Brand Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
        <div className="md:col-span-1">
          <div className="w-32 h-32 rounded-2xl overflow-hidden bg-zinc-800 mb-6">
            <img
              src={brand.logo}
              alt={`${brand.name} - D2C ${brand.category} brand logo and company profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 text-sm md:text-base text-zinc-400">
              <MapPin size={16} />
              <span>{brand.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-zinc-400">
              <Calendar size={16} />
              <span>Founded {brand.founded}</span>
            </div>
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors text-xs md:text-sm font-medium"
            >
              <ExternalLink size={14} />
              Visit Website
            </a>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{brand.name}</h1>
            <span className="text-emerald-500 text-base md:text-lg">{brand.category}</span>
          </div>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            {brand.description}
          </p>

          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Our Story</h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              {brand.story}
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {brand.values.map((value, index) => (
                <div key={index} className="flex items-center gap-2 text-xs md:text-sm text-zinc-400">
                  <span className="text-emerald-500">•</span>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Products */}
      {brandProducts.length > 0 && (
        <div className="border-t border-zinc-800 pt-12 md:pt-16">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">Products from {brand.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {brandProducts.map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group relative block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3 md:mb-4">
                  <img
                    src={product.image}
                    alt={`${product.name} - New D2C product by ${brand.name}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm text-emerald-500">Newly Added</span>
                  </div>
                  <h3 className="text-base md:text-xl font-semibold">{product.name}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between pt-2 md:pt-0">
                    <div className="flex items-center gap-2">
                      <Star className="fill-yellow-500 stroke-yellow-500" size={14} />
                      <span className="text-yellow-500 text-xs md:text-sm">{product.rating}</span>
                    </div>
                    <span className="text-base md:text-lg font-semibold">{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {brandProducts.length === 0 && (
        <div className="border-t border-zinc-800 pt-12 md:pt-16 text-center">
          <p className="text-zinc-400 text-sm md:text-lg">No products available from this brand yet.</p>
        </div>
      )}
    </div>
    </>
  );
}