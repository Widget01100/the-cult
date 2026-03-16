import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          <span className="gradient-text">THE</span>{' '}
          <span className="gradient-text">CULT</span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl">
          Where fashion meets the future. Experience a new dimension of style.
        </p>
        
        <div className="flex gap-4">
          <Link 
            href="/products" 
            className="px-8 py-3 glass-effect rounded-full hover-glow"
          >
            Explore Collection
          </Link>
          
          <Link 
            href="/about" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
          >
            Learn More
          </Link>
        </div>

        {/* Simple stats */}
        <div className="flex gap-8 mt-16">
          <div>
            <div className="text-2xl font-bold gradient-text">10K+</div>
            <div className="text-sm text-slate-400">Products</div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text">50K+</div>
            <div className="text-sm text-slate-400">Customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text">100+</div>
            <div className="text-sm text-slate-400">Countries</div>
          </div>
        </div>
      </div>
    </div>
  )
}
