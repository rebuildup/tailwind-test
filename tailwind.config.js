// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        // 'max-sm' は 639px 以下に適用 (smブレークポイントの-1px)
        "max-sm": { max: "639px" },
        // 'max-md' は 767px 以下に適用 (mdブレークポイントの-1px)
        "max-md": { max: "767px" },
      },
    },
  },
  plugins: [],
};
