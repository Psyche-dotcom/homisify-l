/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-desk": "url(/images/home-imagedesk.png)",
        "hero-mobil": "url(/images/home-imagemobile.png)",
        "hero-second": "url(/images/house2.png)",
        "agent-hero": "url(/images/pexels-rdne-stock-project-82937781.png)",
        "signup-bg": "url(/images/signupimg.png)",
        "blur-desk": "url(/images/rectangled.png)",
        "blur-desk2": "url(/images/blurImg.png)",
        "blur-mob": "url(/images/rectanglemob.png)",
      },
      colors: {
        "main-grey": "rgba(255, 255, 255, 0.56)",
        "orange-col": "#FF8A00",
        "orange-li": "#FEBB6B",
        "gry-b": "#B3B3B3",
        "foot-btn": "#E9E9E9",
        "grey-prop": "#A3A3A3",
        "grey-p": "#F7F7F7",
        "grey-txt": "#6C6C6C",
        "home-grey": "#F2F2F2",
        "border-g": "#DADADA",
      },
      backgroundColor: {
        "main-grey": "rgba(255, 255, 255, 0.56)",
        "orange-col": "#FF8A00",

        "foot-btn": "E9E9E9",
        "orange-li": "#FEBB6B",
        "grey-p": "#F7F7F7",
        "home-grey": "#F2F2F2",
        "border-g": "#DADADA",
      },
    },
  },
  plugins: [],
};
