'use client';

import { useState, useEffect } from 'react';
import { InteractiveLink, FloatingParticles } from '@/components/client/InteractiveElements'
import { AnimatedStats } from '@/components/client/AnimatedStats'

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0f172a, #581c87, #0f172a)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Only render particles after mounting */}
      {mounted && <FloatingParticles />}

      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          fontWeight: 900,
          marginBottom: '1.5rem'
        }}>
          <span className="gradient-text">THE</span>{' '}
          <span className="gradient-text">CULT</span>
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#cbd5e1',
          marginBottom: '2rem',
          maxWidth: '42rem'
        }}>
          Where fashion meets the future. Experience a new dimension of style.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <InteractiveLink href="/products" variant="glass">
            Explore Collection
          </InteractiveLink>
          
          <InteractiveLink href="/about" variant="gradient">
            Learn More
          </InteractiveLink>
        </div>

        <AnimatedStats />
      </div>
    </div>
  );
}
