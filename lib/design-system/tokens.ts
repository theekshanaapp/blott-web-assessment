/**
 * Design System Tokens
 *
 * Single source of truth for all design values.
 * Used by components, Tailwind config, and CSS variables.
 *
 * Architecture:
 * - Type-safe constants
 * - CSS variable generation
 * - No magic numbers
 * - Survives redesigns (change tokens, components adapt)
 */

/**
 * Spacing scale (4px base unit)
 */
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
  "4xl": "80px",
  "5xl": "128px",
  "6xl": "176px",
} as const;

/**
 * Typography scale
 */
export const typography = {
  fontSize: {
    xs: "14px",
    sm: "15px",
    base: "18px",
    md: "20px",
    lg: "22px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "70px",
    "5xl": "80px",
  },
  lineHeight: {
    tight: "100%",
    normal: "130%",
    relaxed: "150%",
    custom: {
      mobile: "47px",
      desktop: "88%",
    },
  },
  letterSpacing: {
    tight: "-0.06em",
    normal: "-0.04em",
    wide: "-0.01em",
    none: "0%",
  },
  fontFamily: {
    sans: "var(--font-helvetica-now), sans-serif",
    serif: "var(--font-noto-serif), serif",
    mono: "var(--font-roboto-mono), monospace",
    albra: "var(--font-albra), serif",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

/**
 * Color palette
 */
export const colors = {
  background: {
    main: "#000000",
    secondary: "#0A0A0A",
  },
  text: {
    main: "#FFFFFF",
    secondary: "#CCCCCC",
    muted: "#999999",
  },
  border: {
    default: "#333333",
    light: "#1A1A1A",
  },
} as const;

/**
 * Border radius
 */
export const borderRadius = {
  none: "0px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;

/**
 * Breakpoints (for reference, prefer Container Queries)
 */
export const breakpoints = {
  sm: "360px",
  md: "768px",
  tablet: "1024px",
  lg: "1280px",
  xl: "1366px",
  "2xl": "1536px",
} as const;

/**
 * Animation durations
 */
export const animation = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
} as const;

/**
 * Z-index scale
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;

/**
 * Aspect ratios
 */
export const aspectRatios = {
  square: "1/1",
  video: "16/9",
  card: "300/199",
  portrait: "3/4",
  landscape: "4/3",
} as const;

/**
 * Type exports for TypeScript
 */
export type Spacing = typeof spacing[keyof typeof spacing];
export type TypographySize = typeof typography.fontSize[keyof typeof typography.fontSize];
export type Color = typeof colors[keyof typeof colors];
export type BorderRadius = typeof borderRadius[keyof typeof borderRadius];
