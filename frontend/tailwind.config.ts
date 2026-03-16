import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'floating': 'floating 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'glitch': 'glitch 3s infinite',
        'glitch-top': 'glitch-top 1s infinite linear alternate-reverse',
        'glitch-bottom': 'glitch-bottom 1.5s infinite linear alternate-reverse',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px, 0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px, 0) skew(0deg)' },
          '62%': { transform: 'translate(0, 0) skew(5deg)' },
        },
        'glitch-top': {
          '2%, 64%': { transform: 'translate(2px, -2px)' },
          '4%, 60%': { transform: 'translate(-2px, 2px)' },
          '62%': { transform: 'translate(13px, -1px) skew(-13deg)' },
        },
        'glitch-bottom': {
          '2%, 64%': { transform: 'translate(-2px, 0)' },
          '4%, 60%': { transform: 'translate(-2px, 0)' },
          '62%': { transform: 'translate(-22px, 5px) skew(21deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
