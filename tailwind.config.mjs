/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // supports class-based dark mode as well as media-query-based if we want, or media
  theme: {
    extend: {
      colors: {
        brand: {
          bg: {
            light: '#fbfbfd',
            lightSecondary: '#ffffff',
            dark: '#0c1017',
            darkSecondary: '#0f141d',
          },
          text: {
            light: '#12233f',
            lightSecondary: '#3a4d6b',
            dark: '#ffffff',
            darkSecondary: '#cbd5e1',
            muted: '#627d98',
          },
          accent: {
            DEFAULT: '#00f0ff',
            hover: '#38bdf8',
            light: '#162e56',
            lightHover: '#0e1e38',
            gold: '#b89758',
            goldHover: '#9a7b41',
            goldLight: '#f4ede0',
          }
        }
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.2)',
        'gold-glow': '0 0 15px rgba(184, 151, 88, 0.35), 0 0 30px rgba(184, 151, 88, 0.15)',
        'navy-subtle': '0 10px 30px -10px rgba(18, 35, 63, 0.12)',
      }
    },
  },
  plugins: [],
}
