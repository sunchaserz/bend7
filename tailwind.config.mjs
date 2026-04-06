/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          25:  '#FFFAF5',
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
          950: '#2E1707',
        },
        // Grays (Untitled UI style)
        gray: {
          25:  '#FCFCFD',
          50:  '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
          950: '#0C111D',
        },
        // Success (for easy difficulty)
        success: {
          50:  '#ECFDF3',
          500: '#12B76A',
          700: '#027A48',
        },
        // Warning (for moderate)
        warning: {
          50:  '#FFFAEB',
          500: '#F79009',
          700: '#B54708',
        },
        // Error (for extreme)
        error: {
          50:  '#FEF3F2',
          500: '#F04438',
          700: '#B42318',
        },
        // Alpine green
        alpine: {
          50:  '#F0F9F4',
          100: '#D1F0DF',
          500: '#2E7D4F',
          700: '#1B5E38',
          900: '#0D3A20',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',     { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md':  ['2.25rem',  { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm':  ['1.875rem', { lineHeight: '1.25' }],
        'display-xs':  ['1.5rem',   { lineHeight: '1.3' }],
        'text-xl':     ['1.25rem',  { lineHeight: '1.5' }],
        'text-lg':     ['1.125rem', { lineHeight: '1.6' }],
        'text-md':     ['1rem',     { lineHeight: '1.5' }],
        'text-sm':     ['0.875rem', { lineHeight: '1.4' }],
        'text-xs':     ['0.75rem',  { lineHeight: '1.3' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
      },
      maxWidth: {
        'content': '768px',
        'wide': '1280px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
        'sm': '0 1px 3px 0 rgba(16, 24, 40, 0.10), 0 1px 2px 0 rgba(16, 24, 40, 0.06)',
        'md': '0 4px 8px -2px rgba(16, 24, 40, 0.10), 0 2px 4px -2px rgba(16, 24, 40, 0.06)',
        'lg': '0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)',
        'xl': '0 20px 24px -4px rgba(16, 24, 40, 0.08), 0 8px 8px -4px rgba(16, 24, 40, 0.03)',
      },
    },
  },
  plugins: [],
};
