import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { typography } from "@/lib/design-system/tokens";

export interface TextProps {
  children: ReactNode;
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  fontFamily?: "sans" | "serif" | "mono";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  lineHeight?: "tight" | "normal" | "relaxed";
  letterSpacing?: "tight" | "normal" | "wide" | "none";
  className?: string;
  align?: "left" | "center" | "right" | "justify";
}

const sizeClasses = {
  xs: "text-14",
  sm: "text-15",
  base: "text-18 sm:text-20",
  md: "text-20 sm:text-22",
  lg: "text-22 sm:text-24",
  xl: "text-24 sm:text-32",
};

const fontFamilyClasses = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const lineHeightClasses = {
  tight: "leading-[100%]",
  normal: "leading-[130%]",
  relaxed: "leading-[150%]",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export function Text({
  children,
  as: Component = "p",
  size = "base",
  fontFamily = "sans",
  weight = "normal",
  lineHeight = "normal",
  letterSpacing = "normal",
  className,
  align = "left",
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeClasses[size],
        fontFamilyClasses[fontFamily],
        weightClasses[weight],
        lineHeightClasses[lineHeight],
        alignClasses[align],
        "text-main-text-color",
        className
      )}
      style={{
        letterSpacing: typography.letterSpacing[letterSpacing],
      }}
    >
      {children}
    </Component>
  );
}
