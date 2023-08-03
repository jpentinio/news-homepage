/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-image": "url('/src/assets/images/image-web-3-desktop.jpg')",
        "image-1": "url('/src/assets/images/image-retro-pcs.jpg')",
        "image-2": "url('/src/assets/images/image-gaming-growth.jpg')",
        "image-3": "url('/src/assets/images/image-top-laptops.jpg')",
      },
      colors: {
        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark-grayish-blue": "hsl(236, 13%, 42%)",
        "very-dark-blue": "hsl(240, 100%, 5%)",
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
};
