"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample product data
const products = [
  {
    id: 1,
    name: "Neural Edge Jacket",
    price: 299.99,
    description: "The Neural Edge Jacket represents the pinnacle of smart fashion technology. Featuring integrated heating elements, motion-responsive LED accents, and water-resistant nano-fabric, this jacket adapts to your environment and style.",
    category: "Outerwear",
    images: [
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Neural+Jacket+1",
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Neural+Jacket+2",
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Neural+Jacket+3",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2d1b4e", "#1e1a3a", "#4a1d4a"],
    isNew: true,
    inStock: true,
    features: [
      "Temperature regulation system",
      "Motion-responsive LED panels",
      "Water-resistant nano-fabric",
      "Wireless charging compatible",
      "Smartphone connectivity"
    ]
  },
  {
    id: 2,
    name: "Quantum Hoodie",
    price: 129.99,
    description: "Experience next-level comfort with the Quantum Hoodie. Made from sustainable smart fabric that adapts to your body temperature, this hoodie features hidden pockets for your devices and integrated headphone routing.",
    category: "Hoodies",
    images: [
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Quantum+Hoodie+1",
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Quantum+Hoodie+2",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2d1b4e", "#1e4620", "#4a3d1a"],
    isNew: true,
    inStock: true,
    features: [
      "Temperature-regulating fabric",
      "Hidden device pockets",
      "Headphone routing system",
      "Sustainable materials",
      "Anti-microbial treatment"
    ]
  },
  {
    id: 3,
    name: "Digital Watch",
    price: 199.99,
    description: "The Digital Watch is more than a timepiece - it's a statement. With its holographic display, gesture controls, and seamless smartphone integration, this watch keeps you connected without sacrificing style.",
    category: "Accessories",
    images: [
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Digital+Watch+1",
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Digital+Watch+2",
    ],
    sizes: ["One Size"],
    colors: ["#2d1b4e", "#4a1d1d", "#1e3d4a"],
    isNew: false,
    inStock: true,
    features: [
      "Holographic display",
      "Gesture controls",
      "Smartphone notifications",
      "7-day battery life",
      "Wireless charging"
    ]
  },
  {
    id: 4,
    name: "Cyber Sneakers",
    price: 159.99,
    description: "Step into the future with Cyber Sneakers. Featuring self-lacing technology, pressure-responsive cushioning, and glow-in-the-dark accents, these sneakers redefine what footwear can be.",
    category: "Footwear",
    images: [
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Cyber+Sneakers+1",
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Cyber+Sneakers+2",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["#2d1b4e", "#1e4a2d", "#4a1d3d"],
    isNew: true,
    inStock: true,
    features: [
      "Self-lacing technology",
      "Pressure-responsive cushioning",
      "Glow-in-the-dark accents",
      "Carbon fiber sole",
      "Breathable smart mesh"
    ]
  },
  {
    id: 5,
    name: "Tech Tee",
    price: 49.99,
    description: "The Tech Tee combines comfort with innovation. Made from moisture-wicking smart fabric that adapts to your activity level, this t-shirt keeps you comfortable whether you're coding or climbing.",
    category: "T-Shirts",
    images: [
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Tech+Tee+1",
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Tech+Tee+2",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2d1b4e", "#1e4a3d", "#4a2d1a"],
    isNew: false,
    inStock: true,
    features: [
      "Moisture-wicking fabric",
      "Activity-adaptive cooling",
      "UV protection",
      "Odor-resistant treatment",
      "Recycled materials"
    ]
  },
  {
    id: 6,
    name: "Futuristic Glasses",
    price: 89.99,
    description: "See the world differently with Futuristic Glasses. These blue-light blocking frames feature integrated audio and a minimalist design that looks like it belongs in a sci-fi film.",
    category: "Accessories",
    images: [
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Futuristic+Glasses+1",
      "https://placehold.co/800x1000/2d1b4e/ffffff?text=Futuristic+Glasses+2",
    ],
    sizes: ["One Size"],
    colors: ["#2d1b4e", "#1e1e1e", "#4a2d2d"],
    isNew: true,
    inStock: true,
    features: [
      "Blue-light blocking lenses",
      "Integrated audio",
      "Ultra-lightweight frame",
      "Polarized option available",
      "Wireless charging case"
    ]
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Find product by id (convert string to number)
    const productId = parseInt(params.id as string);
    const found = products.find(p => p.id === productId);
    setProduct(found || null);
  }, [params.id]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold gradient-text mb-4">Product Not Found</h1>
        <p className="text-slate-300 mb-8">The product you're looking for doesn't exist.</p>
        <Link href="/products" className="px-6 py-3 glass-effect rounded-full hover-glow">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>→</span>
          <Link href="/products" className="hover:text-purple-400 transition-colors">Products</Link>
          <span>→</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square glass-effect rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white">
                  NEW ARRIVAL
                </div>
              )}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square glass-effect rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-2 ring-purple-500 scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-purple-400 mb-2">{product.category}</div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                <span className="gradient-text">{product.name}</span>
              </h1>
              <p className="text-slate-300 text-lg">{product.description}</p>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold gradient-text">
              ${product.price}
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <div className="text-sm font-semibold text-slate-300">SIZE</div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 glass-effect rounded-lg transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-purple-600 text-white scale-110'
                          : 'hover:bg-white/10 hover:scale-105'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3">
                <div className="text-sm font-semibold text-slate-300">COLOR</div>
                <div className="flex gap-3">
                  {product.colors.map((color: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full transition-all duration-300 ${
                        selectedColor === color
                          ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-purple-900'
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-300">QUANTITY</div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 glass-effect rounded-lg hover:bg-white/10 transition-all"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 glass-effect rounded-lg hover:bg-white/10 transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-6">
              <button 
                onClick={() => {
                  // Add to cart functionality will go here
                  alert(`Added ${quantity} x ${product.name} to cart!`);
                }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 transform"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Features */}
            <div className="glass-effect rounded-2xl p-6 mt-8">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-300">
                    <span className="text-purple-400">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
