import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            keyframes: {
                shine: {
                    "0%": { backgroundPosition: "100%" },
                    "100%": { "background-position": "-100%" },
                },
                fadeInUp: {
                    "0%": { 
                        opacity: "0", 
                        transform: "translateY(30px)" 
                    },
                    "100%": { 
                        opacity: "1", 
                        transform: "translateY(0)" 
                    },
                },
                slideInFromBottom: {
                    "0%": { 
                        opacity: "0", 
                        transform: "translateY(100%)" 
                    },
                    "100%": { 
                        opacity: "1", 
                        transform: "translateY(0)" 
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                pulse: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
            },
            animation: {
                shine: "shine 5s linear infinite",
                fadeInUp: "fadeInUp 0.6s ease-out",
                slideInFromBottom: "slideInFromBottom 0.5s ease-out",
                float: "float 3s ease-in-out infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            backdropBlur: {
                xs: "2px",
            },
            boxShadow: {
                'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
                'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
            },
        },
    },
    daisyui: {
        styled: true,
        themes: [
            {
                light: {
                    "primary": "#3b82f6",
                    "primary-focus": "#2563eb",
                    "primary-content": "#ffffff",
                    "secondary": "#f59e0b",
                    "secondary-focus": "#d97706",
                    "secondary-content": "#ffffff",
                    "accent": "#10b981",
                    "accent-focus": "#059669",
                    "accent-content": "#ffffff",
                    "neutral": "#374151",
                    "neutral-focus": "#1f2937",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#f3f4f6",
                    "base-content": "#1f2937",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
            {
                dark: {
                    "primary": "#60a5fa",
                    "primary-focus": "#3b82f6",
                    "primary-content": "#030712",
                    "secondary": "#fbbf24",
                    "secondary-focus": "#f59e0b",
                    "secondary-content": "#030712",
                    "accent": "#34d399",
                    "accent-focus": "#10b981",
                    "accent-content": "#030712",
                    "neutral": "#2a2e37",
                    "neutral-focus": "#16181d",
                    "neutral-content": "#ffffff",
                    "base-100": "#0f172a",
                    "base-200": "#1e293b",
                    "base-300": "#334155",
                    "base-content": "#f1f5f9",
                    "info": "#0ea5e9",
                    "success": "#22c55e",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },
    plugins: [daisyui],
} satisfies Config;
