/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the Marsven One logo (royal blue)
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd3ff',
          300: '#8eb6ff',
          400: '#598cff',
          500: '#3b67f6',
          600: '#2b48eb', // primary
          700: '#2438d4',
          800: '#2431ab',
          900: '#233087',
          950: '#1a1f52',
        },
        ink: {
          950: '#05060f',
          900: '#0a0c1b',
          850: '#0e1124',
          800: '#13172e',
          700: '#1b2040',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 50% -20%, rgba(59,103,246,0.25), transparent 60%)',
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(43,72,235,0.35), transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(59,103,246,0.55)',
        'glow-lg': '0 0 80px -10px rgba(59,103,246,0.5)',
        glass: '0 8px 32px rgba(0,0,0,0.37)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        shimmer: 'shimmer 2s infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
      },
    },
  },
  plugins: [],
}
