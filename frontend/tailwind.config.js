/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#efeeec",

        // Shirin theme
        'shirin-blue': "#A1EAFB",
        'shirin-white': "#FDFDFD",
        'shirin-pink': "#FFCEF3",
        'shirin-purple': "#CABBE9",

        // ✅ แก้สีแดง (ของเดิมสะกดผิด Cfef)
        'shirin-red': "#FFCFEF",
      },

      animation: {
        shine: 'shine 1s',
        'gradient-xy': 'gradient-xy 3s ease infinite',
      },

      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },

        'gradient-xy': {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
