import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                shine: {
                    "0%": { backgroundPosition: "100%" },
                    "100%": { "background-position": "-100%" },
                },
            },
            animation: {
                shine: "shine 5s linear infinite",
            },
        },
    },

    daisyui: {
        styled: true,
        themes: "black",
    },
    plugins: [daisyui],
} satisfies Config;
