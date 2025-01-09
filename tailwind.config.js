/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#60a5fa',
              },
            },
            code: {
              color: 'white',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};