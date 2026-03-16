'use client';

import { useState, useEffect } from 'react';

export function AnimatedStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: '10K+', label: 'Products' },
    { value: '50K+', label: 'Customers' },
    { value: '100+', label: 'Countries' }
  ];

  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      marginTop: '4rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {stats.map((stat, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #c084fc, #f472b6, #818cf8)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`
          }}>
            {stat.value}
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: '#94a3b8',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease ${i * 0.1 + 0.2}s, transform 0.5s ease ${i * 0.1 + 0.2}s`
          }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
