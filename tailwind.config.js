import daisyui from 'daisyui';
import tsh from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      animation: {
        gradient: 'gradientAnimation 7s infinite linear',
      },
      keyframes: {
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [daisyui, tsh],
  daisyui: {
    themes: ['black', 'lofi'],
  },
};
