/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "320px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {},
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            // body: ["Oxygen", "sans-serif"],
        },
    },

    plugins: [],
};