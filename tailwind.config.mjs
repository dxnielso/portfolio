/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5874a3",
        secondary: "#cda919",
        light: "#f4f5ff",
        dark: "#19181a",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
    fontFamily: {
      azeret: ["Azeret Mono Variable", "sans-serif"],
      montserrat: ["Montserrat Variable", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      spaceGrotesk: ["Space Grotesk Variable", "sans-serif"],
    },
  },
  plugins: [],
  // darkMode: 'class',
};
