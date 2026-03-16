"use client";

import { useState } from "react";
import Link from "next/link";

// Sample product data with better placeholder images
const products = [
  {
    id: 1,
    name: "Neural Edge Jacket",
    price: 299.99,
    category: "Outerwear",
    image: "https://placehold.co/600x400/2d1b4e/ffffff?text=Neural+Jacket",
    isNew: true,
  },
  {
    id: 2,
    name: "Quantum Hoodie",
    price: 129.99,
    category: "Hoodies",
    image: "https://placehold.co/600x400/2d1b4e/ffffff?text=Quantum+Hoodie",
    isNew: true,
  },
  {
    id: 3,
    name: "Digital Watch",
    price: 199.99,
    category: "Accessories",
    image: "https://placehold.co/600x400/2d1b4e/ffffff?text=Digital+Watch",
    isNew: false,
  },
  {
    id: 4,
    name: "Cyber Sneakers",
    price: 159.99,
    category: "Footwear",
    image: "https://placehold.co/600x400/2d1b4e/ffffff?text=Cyber+Sneakers",
    isNew: true,
  },
  {
    id: 5,
    name: "Tech Tee",
    price: 49.99,
    category: "T-Shirts",
    image: "https://placehold.co/600x400/2d1b4e/ffffff?text=Tech+Tee",
    isNew: false,
  },
  {
    id: 6,
    name: "Futuristic Glasses",
    price: 89.99,
    category: "Accessories",
    image: "https://placehold.co/600x400/2d1b4e/ffffff?text=Futuristic+Glasses",
    isNew: true,
  },
];

export default function ProductsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Digital</span> Collection
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore our curated selection of futuristic fashion pieces designed for the modern era
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative glass-effect rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-purple-900/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold text-white">
                    NEW ARRIVAL
                  </div>
                )}

                {/* Quick View Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent flex items-end justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="mb-6 px-6 py-2 glass-effect rounded-full text-white hover:bg-white/20 transition-all transform hover:scale-105">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-1">{product.category}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text">${product.price}</span>
                  <button className="px-4 py-2 glass-effect rounded-full text-sm hover:bg-white/10 transition-all transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
