import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          deep: '#0c3540',
          base: '#114856',
          light: '#1b5b6c',
          soft: '#eaf1f3',
          faint: '#f2f7f8',
        },
        gold: {
          warm: '#c29b53',
          hover: '#ab853e',
          soft: '#faf5ed',
        },
        ivory: {
          page: '#fbfbfa',
          card: '#ffffff',
          dark: '#09262f',
        },
      },
      fontFamily: {
        title: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(12, 53, 64, 0.05)',
        card: '0 12px 36px -8px rgba(12, 53, 64, 0.08), 0 2px 6px -1px rgba(12, 53, 64, 0.04)',
        hover: '0 20px 48px -10px rgba(12, 53, 64, 0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
