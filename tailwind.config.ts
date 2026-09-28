import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral palette. Every value used for text clears WCAG AA (4.5:1)
        // against both paper and paper-alt — checked, not assumed.
        ink: {
          DEFAULT: '#141413', // 17.50 : 1
          soft: '#1f1e1d',    // 15.80 : 1
          muted: '#5e5d59',   //  6.26 : 1
          subtle: '#6b6862',  //  5.27 : 1
        },
        paper: {
          DEFAULT: '#faf9f5',
          alt: '#f0eee6',
          line: '#e8e6dc',
        },
        accent: {
          // Clay, darkened for text: the bright tone reads 2.96:1 and fails.
          DEFAULT: '#a8462a', // 5.58 : 1
          hover: '#8f3a21',   // 7.13 : 1
          // Bright clay is kept for fills and decoration only, never for text.
          fill: '#d97757',
          soft: '#f0dfd5',
          tint: '#faf2ee',
        },
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.125rem' }],
        sm: ['0.9375rem', { lineHeight: '1.375rem' }],
        base: ['1.0625rem', { lineHeight: '1.625rem' }],
        lg: ['1.1875rem', { lineHeight: '1.8125rem' }],
        xl: ['1.3125rem', { lineHeight: '1.875rem' }],
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
