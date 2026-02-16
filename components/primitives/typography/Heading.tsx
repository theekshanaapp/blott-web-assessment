import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils/cn";
import { typography } from "@/lib/design-system/tokens";

export interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "mobile" | "desktop" | "sm" | "md" | "lg" | "xl";
  fontFamily?: "sans" | "serif" | "mono" | "albra";
  className?: string;
  align?: "left" | "center" | "right";
}

const sizeClasses = {
  mobile: "text-40 leading-[47px]",
  desktop: "text-70 xl:text-80 leading-[88%]",
  sm: "text-18 sm:text-20",
  md: "text-20 sm:text-22",
  lg: "text-24 sm:text-32",
  xl: "text-32 sm:text-40",
};

const fontFamilyClasses = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
  albra: "font-albra",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Heading({
  children,
  level = 1,
  size = "md",
  fontFamily = "sans",
  className,
  align = "left",
}: HeadingProps) {
  const Component = `h${level}` as ElementType;

  return (
    <Component
      className={cn(
        sizeClasses[size],
        fontFamilyClasses[fontFamily],
        alignClasses[align],
        "text-main-text-color font-normal",
        className
      )}
      style={{
        letterSpacing: size === "mobile" ? typography.letterSpacing.none : typography.letterSpacing.wide,
      }}
    >
      {children}
    </Component>
  );
}
