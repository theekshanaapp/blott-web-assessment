import type { Config } from "tailwindcss";
import { spacing, typography, colors, borderRadius, breakpoints, aspectRatios } from "./lib/design-system/tokens";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: breakpoints.sm,
      md: breakpoints.md,
      tablet: breakpoints.tablet,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
      "2xl": breakpoints["2xl"],
    },
    extend: {
      colors: {
        "background-main": colors.background.main,
        "background-secondary": colors.background.secondary,
        "main-text-color": colors.text.main,
        "text-secondary": colors.text.secondary,
        "text-muted": colors.text.muted,
        "border-default": colors.border.default,
        "border-light": colors.border.light,
        background: {
          main: colors.background.main,
          secondary: colors.background.secondary,
        },
        text: {
          main: colors.text.main,
          secondary: colors.text.secondary,
          muted: colors.text.muted,
        },
        border: {
          default: colors.border.default,
          light: colors.border.light,
        },
      },
      spacing: {
        xs: spacing.xs,
        sm: spacing.sm,
        md: spacing.md,
        lg: spacing.lg,
        xl: spacing.xl,
        "2xl": spacing["2xl"],
        "3xl": spacing["3xl"],
        "4xl": spacing["4xl"],
        "5xl": spacing["5xl"],
        "6xl": spacing["6xl"],
        1: "4px",   // xs
        2: "8px",   // sm
        4: "16px",  // md
        6: "24px",  // lg
        8: "32px",  // xl
        12: "48px", // 2xl
        16: "64px", // 3xl
        20: "80px", // 4xl
        32: "128px", // 5xl
        44: "176px", // 6xl
        60: "60px",  // Container padding at xl breakpoint
        24: "24px",  // Alias for lg
      },
      fontSize: {
        xs: typography.fontSize.xs,
        sm: typography.fontSize.sm,
        base: typography.fontSize.base,
        md: typography.fontSize.md,
        lg: typography.fontSize.lg,
        xl: typography.fontSize.xl,
        "2xl": typography.fontSize["2xl"],
        "3xl": typography.fontSize["3xl"],
        "4xl": typography.fontSize["4xl"],
        "5xl": typography.fontSize["5xl"],

        14: typography.fontSize.xs,
        15: typography.fontSize.sm,
        18: typography.fontSize.base,
        20: typography.fontSize.md,
        22: typography.fontSize.lg,
        24: typography.fontSize.xl,
        32: typography.fontSize["2xl"],
        40: typography.fontSize["3xl"],
        50: "50px",
        70: typography.fontSize["4xl"],
        80: typography.fontSize["5xl"],
      },
      lineHeight: {
        tight: typography.lineHeight.tight,
        normal: typography.lineHeight.normal,
        relaxed: typography.lineHeight.relaxed,

        mobile: typography.lineHeight.custom.mobile,
        desktop: typography.lineHeight.custom.desktop,
      },
      letterSpacing: {
        tight: typography.letterSpacing.tight,
        normal: typography.letterSpacing.normal,
        wide: typography.letterSpacing.wide,
        none: typography.letterSpacing.none,
      },
      fontFamily: {
        "helvetica-now": ["var(--font-helvetica-now)", "Helvetica Neue", "Arial", "sans-serif"],
        albra: ["var(--font-albra)", "'Lora'", "Georgia", "serif"],
        roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
        serif: ["var(--font-noto-serif)", "Noto Serif", "Georgia", "serif"],
        sans: ["var(--font-helvetica-now)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        none: borderRadius.none,
        sm: borderRadius.sm,
        DEFAULT: borderRadius.md,
        md: borderRadius.lg,
        lg: borderRadius.xl,
        full: borderRadius.full,
      },
      aspectRatio: {
        card: aspectRatios.card,
        video: aspectRatios.video,
        square: aspectRatios.square,
        portrait: aspectRatios.portrait,
        landscape: aspectRatios.landscape,
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
  safelist: [
    "xl:col-span-6",
    "xl:col-span-3",
    "tablet:col-span-6",
    "tablet:col-span-3",
    "tablet:col-span-4",

    "mt-2",
    "sm:mt-3",
    "md:mt-4",
    "tablet:mt-6",
    "xl:mt-8",
  ],
};

export default config;
