import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFAF9",
        foreground: "#1F2937",
        primary: {
          DEFAULT: "#C8C6F7",
          hover: "#A5A3E8",
          foreground: "#1F2937",
          deep: "#9B97E6",
          vibrant: "#9B97E6",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          sky: "#87CEEB",
          sunset: "#FFB347",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        grey: "#E5E7EB",
        "light-bg": "#F9F9FB",
        apricot: "#FAD6C9",
        "pale-lavender": "#E8E7FB",
        "complement-vibrant": "#FFB347",
        text: {
          primary: "#2D3748",
          secondary: "#4A5568",
          muted: "#718096",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: "4rem",
        section: "2rem",
        body: "1.125rem",
      },
      animation: {
        "fade-in": "fadeIn 400ms ease-in-out",
        "shape-fade": "shapeFadeIn 800ms ease-out",
        "morph-blob1": "morphBlob1 30s ease-in-out infinite alternate",
        "morph-blob2": "morphBlob2 30s ease-in-out infinite alternate",
        "morph-blob3": "morphBlob3 30s ease-in-out infinite alternate",
        "morph-blob4": "morphBlob4 30s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shapeFadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        morphBlob1: {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            transform: "scale(1.1) rotate(3deg)",
            borderRadius: "40% 60% 50% 50% / 70% 60% 40% 30%",
          },
        },
        morphBlob2: {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            borderRadius: "40% 60% 70% 30% / 50% 60% 30% 70%",
          },
          "50%": {
            transform: "scale(1.1) rotate(-3deg)",
            borderRadius: "60% 40% 30% 70% / 40% 70% 60% 30%",
          },
        },
        morphBlob3: {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            borderRadius: "70% 30% 50% 50% / 40% 70% 60% 30%",
          },
          "50%": {
            transform: "scale(1.1) rotate(2deg)",
            borderRadius: "30% 70% 40% 60% / 70% 30% 50% 50%",
          },
        },
        morphBlob4: {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            borderRadius: "50% 50% 80% 20% / 60% 40% 80% 20%",
          },
          "50%": {
            transform: "scale(1.1) rotate(-2deg)",
            borderRadius: "80% 20% 50% 50% / 40% 60% 20% 80%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
