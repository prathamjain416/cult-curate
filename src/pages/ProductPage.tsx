import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ExternalLink, X } from 'lucide-react';
import { products } from '../data/products';
import { getBrandByProduct } from '../data/brands';
import { clearScrollPosition } from '../hooks/useScrollPosition';
import { useSeo } from '../hooks/useSeo';

export function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const brand = product ? getBrandByProduct(product.link) : undefined;

  // SEO optimization
  if (product) {
    useSeo({
      title: `${product.name} - New D2C Product ${brand ? `by ${brand.name}` : ''} | CULT CURATE`,
      description: `${product.description} Price: ${product.price}. ${brand ? `From ${brand.name}, a leading D2C ${product.category.toLowerCase()} brand.` : ''} Discover this exciting new D2C product in 2026.`,
      keywords: `${product.name}, new D2C product 2026, ${product.category.toLowerCase()} products, ${brand?.name || ''}, innovative products 2026, sustainable ${product.category.toLowerCase()}, trending ${product.category.toLowerCase()}, D2C ${product.category.toLowerCase()}, new launches 2026`,
      image: product.image,
      type: 'product',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "brand": brand ? {
          "@type": "Brand",
          "name": brand.name
        } : undefined,
        "offers": {
          "@type": "Offer",
          "price": product.price.replace('₹', '').replace(',', ''),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": product.link
        },
        "aggregateRating": product.rating ? {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "bestRating": "5",
          "worstRating": "1"
        } : undefined,
        "category": product.category,
        "releaseDate": product.releaseDate
      }
    });
  }

  useEffect(() => {
    // Always scroll to top when entering product page
    window.scrollTo(0, 0);
    // Clear any saved scroll positions
    clearScrollPosition('homepage');
    clearScrollPosition('brands');
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="text-blue-500 hover:underline">Return to home</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

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

      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain p-4"
          />
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">

        {/* Product Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <button
              onClick={() => setIsFullscreen(true)}
              className="block w-full group relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={`${product.name} - New D2C product ${brand ? `by ${brand.name}` : ''} in ${product.category} category`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Click to view full image</span>
                </div>
              </div>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {brand && (
                  <Link
                    to={`/brand/${brand.id}`}
                    className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition-colors truncate"
                  >
                    {brand.name}
                  </Link>
                )}
                {brand && <span className="text-zinc-600">•</span>}
                <span className="text-xs md:text-sm text-emerald-500">Newly Added</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Star className="fill-yellow-500 stroke-yellow-500" size={18} />
                <span className="text-yellow-500 text-base md:text-lg">{product.rating}</span>
              </div>
              <p className="text-xl md:text-3xl font-bold mb-6">{product.price}</p>
              <p className="text-sm md:text-lg text-zinc-400 leading-relaxed mb-6 md:mb-8">
                {product.description}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-8 py-2 md:py-4 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors text-sm md:text-base font-medium"
              >
                <ExternalLink size={18} />
                View on Retailer
              </a>
            </div>

            <div className="border-t border-zinc-800 pt-4 md:pt-6">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Key Features</h2>
              <ul className="space-y-2 md:space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-zinc-400">
                    <span className="text-emerald-500 flex-shrink-0">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {product.flavors && product.flavors.length > 0 && (
          <div className="border-t border-zinc-800 pt-12 md:pt-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Available Flavors</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 md:gap-3 pb-2 md:pb-0 min-w-min md:min-w-0">
                  {product.flavors.map((flavor, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFlavor(index)}
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                        selectedFlavor === index
                          ? 'bg-white text-black'
                          : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                      }`}
                    >
                      {flavor.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 items-start">
                <div className="md:col-span-1 overflow-hidden rounded-lg">
                  <img
                    src={product.flavors[selectedFlavor].image}
                    alt={product.flavors[selectedFlavor].name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{product.flavors[selectedFlavor].name}</h3>
                    {product.flavors[selectedFlavor].description && (
                      <p className="text-base md:text-lg text-zinc-400">{product.flavors[selectedFlavor].description}</p>
                    )}
                  </div>
                  {product.flavors[selectedFlavor].link && (
                    <a
                      href={product.flavors[selectedFlavor].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors font-medium text-sm md:text-base"
                    >
                      <ExternalLink size={18} />
                      Buy on Amazon
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-zinc-800 pt-12 md:pt-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3 md:mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} - Related D2C product in ${relatedProduct.category}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-base md:text-xl font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 line-clamp-2">{relatedProduct.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}