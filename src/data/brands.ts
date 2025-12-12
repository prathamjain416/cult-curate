export interface Brand {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  founded: string;
  category: string;
  location: string;
  story: string;
  values: string[];
}

export const brands: Brand[] = [
  {
    id: "sammmm",
    name: "Sammmm",
    description: "Leading D2C clean beauty brand focused on natural skincare solutions with innovative formulations. This emerging Indian brand combines traditional ingredients with modern science.",
    logo: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=200&h=200&fit=crop&crop=center",
    website: "https://sammmm.com",
    founded: "2020",
    category: "Beauty",
    location: "Mumbai, India",
    story: "Founded as a pioneering D2C beauty brand with a mission to create effective skincare products using natural ingredients sourced from across India. This innovative brand believes in the power of traditional remedies combined with modern science, making it one of the top new D2C brands in the beauty space.",
    values: ["Natural ingredients", "Sustainable packaging", "Cruelty-free", "Made in India"]
  },
  {
    id: "eat-atlas",
    name: "Eat Atlas",
    description: "Innovative D2C food brand bringing authentic global cuisine experiences and traditional flavors from around the world directly to consumers.",
    logo: "	https://eatatlas.myshopify.com/cdn/shop/files/dfrtghyujh_4.png?v=1735848106&width=150",
    website: "https://eatatlas.myshopify.com",
    founded: "2021",
    category: "Food",
    location: "Delhi, India",
    story: "Eat Atlas emerged as a top D2C food brand born from a passion for authentic global flavors. This innovative direct-to-consumer company travels the world to bring you traditional recipes and ingredients, making international cuisine accessible to everyone through their curated product offerings.",
    values: ["Authentic recipes", "Premium ingredients", "Cultural preservation", "Global flavors"]
  },
  {
    id: "cove-lane",
    name: "Cove & Lane",
    description: "Contemporary fashion brand creating timeless pieces with modern sophistication.",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&crop=center",
    website: "https://coveandlane.in",
    founded: "2019",
    category: "Fashion",
    location: "Bangalore, India",
    story: "Cove & Lane represents the intersection of classic tailoring and contemporary design. Each piece is crafted with attention to detail and designed for the modern individual who values quality and style.",
    values: ["Quality craftsmanship", "Timeless design", "Sustainable fashion", "Modern elegance"]
  },
  {
    id: "innovist",
    name: "Innovist",
    description: "Advanced skincare solutions combining science and innovation for modern beauty needs.",
    logo: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&crop=center",
    website: "https://innovist.com",
    founded: "2022",
    category: "Beauty",
    location: "Pune, India",
    story: "Innovist is dedicated to creating scientifically-backed skincare products that deliver real results. We combine cutting-edge research with proven ingredients to address modern skincare challenges.",
    values: ["Scientific innovation", "Proven results", "Quality ingredients", "Modern solutions"]
  },
  {
    id: "mokobara",
    name: "Mokobara",
    description: "Premium travel gear designed for the modern traveler with style and functionality.",
    logo: "https://mokobara.com/cdn/shop/files/The-Transit-Backpack-30L_Crypto---2.0.jpg?v=1748843257&width=500",
    website: "https://mokobara.com",
    founded: "2018",
    category: "Travel",
    location: "Mumbai, India",
    story: "Mokobara was created for travelers who refuse to compromise on style or functionality. Every product is designed with the modern nomad in mind, combining durability with aesthetic appeal.",
    values: ["Travel-focused design", "Premium materials", "Functional beauty", "Durability"]
  },
  {
    id: "winston",
    name: "Winston",
    description: "Men's grooming essentials designed for the modern gentleman's lifestyle.",
    logo: "https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=200&fit=crop&crop=center",
    website: "https://winstonindia.com",
    founded: "2020",
    category: "Grooming",
    location: "Delhi, India",
    story: "Winston understands that modern men need grooming solutions that fit their busy lifestyles. We create products that are effective, easy to use, and designed for the contemporary gentleman.",
    values: ["Modern grooming", "Quality products", "Gentleman's choice", "Effective solutions"]
  },
  {
    id: "nuuk",
    name: "Nuuk",
    description: "Smart home solutions that blend technology with elegant design for modern living.",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center",
    website: "https://nuuk.in",
    founded: "2021",
    category: "Home",
    location: "Hyderabad, India",
    story: "Nuuk creates smart home products that seamlessly integrate into your daily life. We believe technology should enhance your living experience without compromising on design or simplicity.",
    values: ["Smart technology", "Elegant design", "User-friendly", "Modern living"]
  },
  {
    id: "ziaho",
    name: "Ziaho",
    description: "Artisanal chocolate crafters creating premium confections with unique flavor profiles.",
    logo: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=200&h=200&fit=crop&crop=center",
    website: "https://ziaho.in",
    founded: "2019",
    category: "Food",
    location: "Goa, India",
    story: "Ziaho is passionate about creating exceptional chocolate experiences. We source the finest ingredients and use traditional techniques to craft chocolates that tell a story with every bite.",
    values: ["Artisanal craftsmanship", "Premium ingredients", "Unique flavors", "Traditional techniques"]
  },
  {
    id: "bloody-bubbly",
    name: "Bloody Bubbly",
    description: "India's first pomegranate & tomato-based bubbly mocktail drink brand, creating innovative and natural sparkling beverages.",
    logo: "https://images.unsplash.com/photo-1585518419759-fc7042228318?w=200&h=200&fit=crop&crop=center",
    website: "https://www.amazon.in/Flavoured-Variety-Artficial-Flavours-Preservatives/dp/B0DTHZ3YYP",
    founded: "2024",
    category: "Food & Beverage",
    location: "India",
    story: "Bloody Bubbly emerged as a revolutionary D2C beverage brand with a mission to redefine mocktail experiences. Born from a passion for natural ingredients and innovative flavor combinations, we created India's first pomegranate and tomato-based sparkling drink. Our journey began with a simple idea: to make sophisticated, healthy, and delicious beverages accessible to everyone who seeks premium alternatives to traditional drinks.",
    values: ["Natural ingredients", "Innovation", "Health-conscious", "Sustainability", "Premium quality"]
  }
];

// Helper function to get brand by ID
export function getBrandById(id: string): Brand | undefined {
  return brands.find(brand => brand.id === id);
}

// Helper function to get brand by product
export function getBrandByProduct(productLink: string): Brand | undefined {
  for (const brand of brands) {
    if (productLink.includes(brand.website.replace('https://', '').replace('http://', ''))) {
      return brand;
    }
  }
  return undefined;
}