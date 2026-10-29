import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ember: '#ff7a18',
        night: '#0b1020',
        charcoal: '#101822',
        blush: '#f5d0d0',
        plum: '#2f1c3c',
        mint: '#8de5cd'
      },
      boxShadow: {
        glow: '0 0 30px rgba(255,122,24,0.25)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top, rgba(255,122,24,0.18), transparent 40%), linear-gradient(135deg, #0b1020 0%, #101822 30%, #171a2f 100%)'
      }
    }
  },
  plugins: []
};

export default config;
