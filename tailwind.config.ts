import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111418',
          soft: '#1f2329',
          muted: '#5b6470',
          subtle: '#8a93a0',
        },
        paper: {
          DEFAULT: '#fbfbfa',
          alt: '#f4f4f1',
          line: '#e6e6e1',
        },
        accent: {
          DEFAULT: '#0f6f6a',
          hover: '#0a5955',
          soft: '#e6f2f1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
