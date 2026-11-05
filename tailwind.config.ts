import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071C35",
          50: "#EBF2FA",
          100: "#D6E4F5",
          200: "#ACC9EB",
          300: "#83AEE1",
          400: "#3E74B7",
          500: "#1E4C86",
          600: "#133562",
          700: "#0D2545",
          800: "#071C35",
          900: "#040F1E",
        },
        royal: {
          DEFAULT: "#1265A8",
          light: "#1F7EC9",
          dark: "#0C4C81",
        },
        aqua: {
          DEFAULT: "#36C6D9",
          light: "#6BE0EE",
          dark: "#1FA4B6",
          glow: "rgba(54, 198, 217, 0.25)",
        },
        surface: {
          light: "#F4F7FA",
          card: "#FFFFFF",
          subtle: "#EDF2F7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(7, 28, 53, 0.06)",
        card: "0 10px 30px -5px rgba(7, 28, 53, 0.08)",
        elevated: "0 20px 40px -10px rgba(7, 28, 53, 0.12)",
        glow: "0 0 25px rgba(54, 198, 217, 0.35)",
        royal: "0 8px 25px -4px rgba(18, 101, 168, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        pulse_subtle: "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
