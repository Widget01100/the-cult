'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function InteractiveLink({ href, children, variant = 'glass' }) {
  const [isHovered, setIsHovered] = useState(false);

  const glassStyle = {
    padding: '0.75rem 2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '9999px',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: isHovered ? '0 0 30px rgba(168, 85, 247, 0.5)' : 'none'
  };

  const gradientStyle = {
    padding: '0.75rem 2rem',
    background: 'linear-gradient(to right, #9333ea, #db2777)',
    borderRadius: '9999px',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s',
    boxShadow: isHovered ? '0 0 30px rgba(168, 85, 247, 0.5)' : 'none'
  };

  const style = variant === 'glass' ? glassStyle : gradientStyle;

  return (
    <Link
      href={href}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}

export function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Generate particles only on client
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) {
    return null; // Don't render anything on server
  }

  return (
    <div style={{ 
      position: 'absolute', 
      inset: 0, 
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating"
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            backgroundColor: 'rgba(168, 85, 247, 0.3)',
            borderRadius: '50%',
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
}
