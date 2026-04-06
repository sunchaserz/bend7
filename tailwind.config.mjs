/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dockit-inspired brand with cycling amber/orange
        brand: {
          25:  '#FFFBF5',
          50:  '#FFF5EB',
          100: '#FFE5CC',
          200: '#FFCB99',
          300: '#FFB066',
          400: '#FF9633',
          500: '#E07A1F',
          600: '#C4652A',
          700: '#9E4F1A',
          800: '#793C13',
          900: '#53290D',
        },
        // Dockit-style grays
        surface: {
          0:   '#FFFFFF',
          50:  '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0A0F1A',
        },
        // Dark mode surfaces
        dark: {
          bg:      '#0F1117',
          card:    '#171923',
          border:  '#2D3348',
          muted:   '#9CA3AF',
        },
        // Semantic
        success: { 50: '#ECFDF3', 100: '#D1FAE5', 500: '#10B981', 700: '#047857' },
        warning: { 50: '#FFFBEB', 100: '#FEF3C7', 500: '#F59E0B', 700: '#B45309' },
        error:   { 50: '#FEF2F2', 100: '#FEE2E2', 500: '#EF4444', 700: '#B91C1C' },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4rem',     { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl':  ['3rem',     { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg':  ['2.25rem',  { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md':  ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm':  ['1.5rem',   { lineHeight: '1.3' }],
        'display-xs':  ['1.25rem',  { lineHeight: '1.4' }],
        'body-lg':     ['1.125rem', { lineHeight: '1.7' }],
        'body-md':     ['1rem',     { lineHeight: '1.7' }],
        'body-sm':     ['0.875rem', { lineHeight: '1.5' }],
        'body-xs':     ['0.75rem',  { lineHeight: '1.4' }],
      },
      maxWidth: {
        'content': '720px',
        'wide': '1200px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.08), 0 4px 10px -3px rgba(0,0,0,0.04)',
        'glow': '0 0 60px rgba(196, 101, 42, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(196,101,42,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.08) 0%, transparent 50%)',
        'hero-gradient-dark': 'radial-gradient(ellipse at 50% 0%, rgba(196,101,42,0.20) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.12) 0%, transparent 50%)',
        'dot-pattern': 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
