"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate particles only on client
  const particles = mounted ? [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 3
  })) : [];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-purple-500/20 rounded-full animate-ping"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto">
          {/* Main Title with gradient */}
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="gradient-text inline-block animate-pulse">THE</span>{" "}
            <span className="gradient-text inline-block animate-pulse" style={{ animationDelay: "0.2s" }}>
              CULT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Where fashion meets the future. Experience a new dimension of style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/products"
              className="group relative px-8 py-4 glass-effect rounded-full hover-glow overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore Collection</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
            
            <Link
              href="/about"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          </div>

          {/* Stats Cards - without emojis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "10K+", label: "Products", delay: 0 },
              { value: "50K+", label: "Customers", delay: 0.2 },
              { value: "100+", label: "Countries", delay: 0.4 },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                style={{
                  animation: mounted ? `fadeInUp 0.6s ease-out ${stat.delay}s forwards` : 'none',
                  opacity: 0,
                }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse" />
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
