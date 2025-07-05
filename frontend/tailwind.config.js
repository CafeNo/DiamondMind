/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                light: "#efeeec",
                // Shirin Ch. inspired blue theme
                'shirin-blue': "#A1EAFB", // Light cyan blue - main blue
                'shirin-white': "#FDFDFD", // Almost pure white
                'shirin-pink': "#FFCEF3", // Light pink accent
                'shirin-purple': "#CABBE9", // Light purple accent
                'shirin-red': "#FFCfef",
            },
        },
    },
    plugins: [],
};