import { useEffect } from 'react';

interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
}

export function useSeo({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData
}: SeoData) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Set basic meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Set Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', type, true);
    
    if (image) {
      setMetaTag('og:image', image, true);
    }
    
    if (url) {
      setMetaTag('og:url', url, true);
    }

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    
    if (image) {
      setMetaTag('twitter:image', image);
    }

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Remove structured data script when component unmounts
      if (structuredData) {
        const script = document.querySelector('script[type="application/ld+json"]');
        if (script) {
          script.remove();
        }
      }
    };
  }, [title, description, keywords, image, url, type, structuredData]);
}