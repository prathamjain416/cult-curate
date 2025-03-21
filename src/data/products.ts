export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  category: string;
  releaseDate: string;
  price: string;
  features: string[];
  rating?: number;
}

export const products: Product[] = [
  {
    id: 7,
    name: "Glow Boosting Hydrating Moisturiser",
    description: "Meet your skin’s new BFF. This featherlight gel crème does it all—hydrating, glowing, and smoothing your skin to perfection. Powered by Luminescine (from Italy’s Mullein flower) to boost radiance, Mannaferm HF (from Sicilian Manna Ash trees) for deep hydration, plus Hyaluronic Acid and Niacinamide to lock in moisture, smooth pores, and keep shine under control.",
    image: "https://sammmm.com/cdn/shop/files/Glow_1_PDP.jpg?v=1739189036&width=1920",
    link: "https://sammmm.com/products/glow-boosting-hydrating-moisturiser",
    category: "Beauty",
    releaseDate: "2024-02-15",
    price: "₹800",
    features: [
      "Natural ingredients",
      "Deep hydration formula",
      "Suitable for all skin types",
      "Paraben-free",
      "Dermatologically tested"
    ],
    rating: 4.9
  },
  {
    id: 8,
    name: "Bhutan's Ema Datshi Cheesy Spicy Dip",
    description: "It's not just a condiment but a cultural emblem in Bhutan, where the local belief is that the spicier the sauce, the warmer the heart, reflecting the Bhutanese warmth & hospitality.",
    image: "https://eatatlas.myshopify.com/cdn/shop/files/1.jpg?v=1740029245&width=1100",
    link: "https://eatatlas.myshopify.com/products/bhutan-s-ema-datshi-cheesy-spicy-dip-ready-to-eat",
    category: "Food",
    releaseDate: "2024-02-20",
    price: "₹349",
    features: [
      "Authentic Bhutanese recipe",
      "Premium cheese blend",
      "Ready to eat",
      "No artificial preservatives",
      "Perfect heat level"
    ],
    rating: 4.7
  },
  {
    id: 9,
    name: "Mocha Cotton Oxford Slim Fit Shirt",
    description: "Sharp enough for the boardroom, yet daring enough for after hours, this cotton oxford is anything but ordinary. With a crisp finish and a fit that's tailored to perfection, it walks the line between formal and flirty. The subtle sheen of premium cotton adds a touch of allure, while classic details keep it grounded. Whether you're closing deals or catching glances, this shirt ensures you do it in style.",
    image: "https://coveandlane.in/cdn/shop/files/0H8A3068_copy_2.jpg?v=1741248593&width=1946",
    link: "https://coveandlane.in/products/mocha-cotton-oxford-slim-fit-shirt",
    category: "Fashion",
    releaseDate: "2024-02-18",
    price: "₹2,350",
    features: [
      "100% premium cotton oxford",
      "Modern slim fit",
      "Mother of pearl buttons",
      "Single-needle stitching",
      "Reinforced collar"
    ],
    rating: 4.8
  },
  {
    id: 10,
    name: "5% Niacinamide Sunscreen Body Lotion",
    description: "Advanced body lotion combining niacinamide benefits with broad-spectrum sun protection",
    image: "https://innovist.com/cdn/shop/files/5_first_image.png?v=1740045114&width=1800",
    link: "https://innovist.com/products/5-niacinamide-sunscreen-body-lotion",
    category: "Beauty",
    releaseDate: "2024-02-16",
    price: "₹549",
    features: [
      "5% Niacinamide concentration",
      "Broad-spectrum SPF protection",
      "Non-greasy formula",
      "Fast-absorbing",
      "Suitable for all skin types"
    ],
    rating: 4.9
  },
  {
    id: 11,
    name: "The Sculpted Skirt",
    description: "Some skirts are made to sit still, this one was made to move. With tailored details and delicate pleating that adds a unique layer of texture and dimension, the Sculpted Skirt is all about keeping up with your rhythm. Whether you're striding into meetings or twirling through your day, it's a perfect mix of elegance and ease.",
    image: "https://coveandlane.in/cdn/shop/files/IMG_6206_22e582f9-8928-44e7-a4de-83f013c8e2a4.jpg?v=1740993398&width=1946",
    link: "https://coveandlane.in/products/the-sculpted-skirt",
    category: "Fashion",
    releaseDate: "2024-02-19",
    price: "₹1,850",
    features: [
      "Premium fabric blend",
      "Sculptural design elements",
      "Hidden zip closure",
      "Fully lined",
      "Made in India"
    ],
    rating: 4.7
  },
  {
    id: 12,
    name: "Intrecciato Cotton Polo",
    description: "Where heritage craftsmanship meets contemporary sophistication. Crafted from premium, breathable cotton, this polo features an intricate Intrecciato-inspired knit texture, adding depth and refinement to a timeless silhouette.",
    image: "https://coveandlane.in/cdn/shop/files/CNL39.jpg?v=1738829943&width=1946",
    link: "https://coveandlane.in/products/intrecciato-cotton-polo",
    category: "Fashion",
    releaseDate: "2024-02-17",
    price: "₹2,100",
    features: [
      "Premium cotton construction",
      "Signature intrecciato pattern",
      "Mother of pearl buttons",
      "Ribbed collar and cuffs",
      "Classic fit"
    ],
    rating: 4.8
  },
  {
    id: 13,
    name: "Classic Fit Cotton Oxford Shirt",
    description: "A shirt that's as effortlessly cool as it is sophisticated. Inspired by the timeless allure of a coastal summer, it captures the perfect blend of classic and contemporary. The crisp blue-and-white stripes echo days spent under sunny skies, while the hidden placket and elongated This shirt is all about quiet confidence and understated charm. Your go-to for moments when elegance feels easy.",
    image: "https://coveandlane.in/cdn/shop/files/Linda_Blue_0000.jpg?v=1740569410&width=1946",
    link: "https://coveandlane.in/products/classic-fit-cotton-oxford-shirt-upgraded-copy-1",
    category: "Fashion",
    releaseDate: "2024-02-15",
    price: "₹2,100",
    features: [
      "Blue-and-white striped pattern",
      "Hidden placket",
      "Elongated cuffs with drawstring",
      "Breathable fabric"
    ],
    rating: 4.6
  },
  {
    id: 14,
    name: "The Transit Cabin Pro",
    description: "Meet the Transit Cabin Pro, designed for greater accessibility and greater transits. The front compartment gives you quick access to your tech, making airport security checks easy, breezy. Fits up to a 15.6” laptop.",
    image: "https://mokobara.com/cdn/shop/files/The-Transit-Cabin-Pro-Shopify-New-We-meet-Again-Sunray-1.jpg?v=1721817800&width=800",
    link: "https://mokobara.com/products/the-transit-cabin-pro-copy",
    category: "Travel",
    releaseDate: "2024-02-14",
    price: "₹6,999",
    features: [
      "Unbreakable & lightweight",
      "Quick access front compartment",
      "TSA-approved lock",
      "360° silent wheels"
    ],
    rating: 4.9
  },
  {
    id: 15,
    name: "Korea's Cheesy Gochujang with Lavash Chips",
    description: "As comforting as your favorite K-drama and as popular as K-pop, this is Korea in every bite. Creamy cheese, mild Gochugaru heat, and rich Gochujang blend for a smooth, savory, and delicious flavor.",
    image: "https://eatatlas.myshopify.com/cdn/shop/files/7.png?v=1740376090&width=1100",
    link: "https://eatatlas.myshopify.com/products/koreas-cheesy-gochujang-with-lavash-chips-korean-cheesy-dip-sweet-savory-paired-with-crispy-lavash-chips-ready-to-eat-paired-combo-200-gms-dip-150-gms-lavash",
    category: "Food",
    releaseDate: "2024-02-21",
    price: "₹338",
    features: [
      "Authentic Korean flavors",
      "Ready-to-eat combo",
      "Includes lavash chips",
      "Perfect blend of sweet and spicy",
      "No artificial preservatives"
    ],
    rating: 4.8
  },
  {
    id: 16,
    name: "Winston Nut Groomer 1.0",
    description: "Keep it clean, close, and confident with every trim. The Nut Groomer 1.0 is designed for body and below-the-belt grooming, offering a safe, comfortable trim with no nicks or irritation. It's your go-to tool for groomed look.",
    image: "https://winstonindia.com/cdn/shop/files/NutGroomer1.0_c4133cbb-6b43-43bd-ac6e-c19b8cdbfc08.png?v=1740117793&width=800",
    link: "https://winstonindia.com/products/winston-nut-groomer-1-o",
    category: "Grooming",
    releaseDate: "2024-02-22",
    price: "₹1,499",
    features: [
      "Precision trimming head",
      "Waterproof design",
      "Rechargeable battery",
      "LED light guide",
      "Travel-friendly size"
    ],
    rating: 4.7
  },
  {
    id: 17,
    name: "Blackhead Remover",
    description: "Engineered to effortlessly eliminate blackheads and whiteheads while offering deep cleansing, Winston blackhead remover is a cutting-edge device that is based on mild suction technology to suck all impurities.",
    image: "https://winstonindia.com/cdn/shop/files/01_Blackhead_Remover.png?v=1742463449&width=800",
    link: "https://winstonindia.com/products/blackhead-remover",
    category: "Beauty",
    releaseDate: "2024-02-22",
    price: "₹1,949",
    features: [
      "Stainless steel construction",
      "Multiple extraction loops",
      "Anti-slip grip",
      "Sterilizable",
      "Protective case included"
    ],
    rating: 4.6
  },
  {
    id: 18,
    name: "Halo Air Circulator Fan with Mood Lamp",
    description: "Modern air circulator with integrated ambient lighting. India's most silent air circulation fan - Zero noise. Cool breeze. Warm glow. All style.",
    image: "https://nuuk.in/cdn/shop/files/HALOlisting_1.jpg?v=1710401388&width=800",
    link: "https://nuuk.in/products/halo-air-circulator-fan-with-mood-lamp",
    category: "Home",
    releaseDate: "2024-02-23",
    price: "₹10,999",
    features: [
      "360° air circulation",
      "RGB mood lighting",
      "Remote controlled",
      "Energy efficient",
      "Ultra-quiet operation"
    ],
    rating: 4.8
  },
  {
    id: 19,
    name: "Rizz Lint Remover",
    description: "RIZZ removes lint, fuzz, and pills with ease. Dual speeds, precision design, and portable style make it your go-to for fresh, flawless clothes.",
    image: "https://nuuk.in/cdn/shop/files/rizz_red.jpg?v=1737525140&width=800",
    link: "https://nuuk.in/products/rizz-lint-remover",
    category: "Home",
    releaseDate: "2024-02-23",
    price: "₹1,299",
    features: [
      "Extra sticky sheets",
      "Ergonomic handle",
      "Large roller surface",
      "Easy sheet removal",
      "Travel-size option"
    ],
    rating: 4.7
  },
  {
    id: 20,
    name: "Ren Go 4-in-1 Cordless Vacuum Cleaner",
    description: "Meet REN GO: the powerful but nimble, cordless 4-in-1 vacuum that's ready to suck the drama out of cleaning. It's like a cleaning ninja for your car and home—stealthy, powerful, and doesn't miss a spot.",
    image: "https://nuuk.in/cdn/shop/files/REN_GO_listing-image_black.png?v=1726472355&width=800",
    link: "https://nuuk.in/products/nuuk-ren-go-4-in-1-cordless-vacuum-cleaner-for-car-and-home",
    category: "Home",
    releaseDate: "2024-02-23",
    price: "₹3,299",
    features: [
      "4-in-1 functionality",
      "Powerful suction",
      "Long battery life",
      "HEPA filtration",
      "Multiple attachments"
    ],
    rating: 4.9
  },
  {
    id: 21,
    name: "Harvest Medley",
    description: "Explore the rich flavours of our Harvest Medley Combo Pack, featuring four exquisite chocolates. Indulge in the nutty delight of 64% Dark Pistachio with Summer Harvest Desert Salt, the robust intensity of 64% Dark Winter Harvest Desert Salt, the earthy sweetness of 70% Dark Country Jaggery, and the spicy allure of 55% Dark Mango with Chilli. A symphony of tastes awaits in this curated collection, celebrating the essence of the harvest season.",
    image: "https://ziaho.in/cdn/shop/files/11HarvestMedley.png?v=1706353759&width=1800",
    link: "https://ziaho.in/collections/shop-all/products/harvest-medley",
    category: "Food",
    releaseDate: "2024-02-24",
    price: "₹1,370",
    features: [
      "Premium ingredients",
      "No added sugar",
      "Resealable packaging",
      "High in nutrients",
      "Perfect snack size"
    ],
    rating: 4.8
  },
  {
    id: 22,
    name: "Nostalgic Trio",
    description: "Take a trip down memory lane with the Nostalgic Trio Combo Pack. This collection of four chocolates, including the 55% Dark Milk Bar, 40% Milk Bar, 40% Milk Roasted Hazelnuts, and White Chocolate Bar, is a delightful blend of rich nostalgia and timeless indulgence. Discover the perfect harmony of dark, milk, and white chocolate in every blissful bite.",
    image: "https://ziaho.in/cdn/shop/files/9NostalgicTrio.png?v=1706354561&width=1800",
    link: "https://ziaho.in/collections/shop-all/products/nostalgic-trio",
    category: "Food",
    releaseDate: "2024-02-24",
    price: "₹1,570",
    features: [
      "Traditional recipes",
      "Handcrafted blends",
      "Premium packaging",
      "Perfect gifting option",
      "Long shelf life"
    ],
    rating: 4.7
  },
  {
    id: 23,
    name: "64% Dark Winter Harvest Desert Salt",
    description: "Savour this smooth and luxurious dark chocolate sprinkled with winter harvest desert salt from Rajasthan and enjoy the perfect blend of sweet and salty.",
    image: "https://ziaho.in/cdn/shop/files/3PackwithBar_368232f7-039a-46f3-8593-fd9c3c9776e9.png?v=1698668021&width=1800",
    link: "https://ziaho.in/collections/shop-all/products/64-dark-winter-harvest-desert-salt-1",
    category: "Food",
    releaseDate: "2024-02-24",
    price: "₹335",
    features: [
      "64% cocoa content",
      "Artisanal desert salt",
      "Winter spice blend",
      "Single origin cocoa",
      "Sustainable packaging"
    ],
    rating: 4.9
  },
  {
    id: 24,
    name: "White Pina Colada",
    description: "Escape to a tropical paradise with our innovative Pina Colada flavoured white chocolate topped with Pineapples sourced from Goa and experience bliss in every bite.",
    image: "https://ziaho.in/cdn/shop/files/3PackwithBar_2cf22491-a2ff-4376-83ce-c913cd852f2c.png?v=1698668507&width=1800",
    link: "https://ziaho.in/collections/shop-all/products/white-pina-colada-with-pineapple-1",
    category: "Food",
    releaseDate: "2024-02-24",
    price: "₹495",
    features: [
      "Premium white chocolate",
      "Real pineapple pieces",
      "Natural flavoring",
      "Handcrafted bars",
      "Gift-ready packaging"
    ],
    rating: 4.8
  }
];