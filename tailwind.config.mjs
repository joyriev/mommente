/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        brand: {
          offwhite: "#FBFBFB",
          charcoal: "#0F0F0F",
          gold: "#B29762",
          gray: "#F2F2F2",
        },
      },
    },
  },
  plugins: [],
};
