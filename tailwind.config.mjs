/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // supports class-based dark mode as well as media-query-based if we want, or media
  theme: {
    extend: {
      colors: {
        brand: {
          bg: {
            light: '#f8fafc',
            lightSecondary: '#ffffff',
            dark: '#0c1017',
            darkSecondary: '#0f141d',
          },
          text: {
            light: '#1e293b',
            lightSecondary: '#475569',
            dark: '#ffffff',
            darkSecondary: '#cbd5e1',
            muted: '#718294',
          },
          accent: {
            DEFAULT: '#00f0ff',
            hover: '#38bdf8',
            light: '#0284c7',
            lightHover: '#0369a1',
          }
        }
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
