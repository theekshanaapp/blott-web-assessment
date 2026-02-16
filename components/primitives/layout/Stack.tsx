import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface StackProps {
  children: ReactNode;
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  align?: "start" | "center" | "end" | "stretch";
  className?: string;
  as?: "div" | "section" | "nav" | "header" | "footer";
}

const gapClasses = {
  xs: "gap-1",      // 4px
  sm: "gap-2",      // 8px
  md: "gap-4",      // 16px
  lg: "gap-6",      // 24px
  xl: "gap-8",      // 32px
  "2xl": "gap-12",  // 48px
  "3xl": "gap-16",  // 64px
  "4xl": "gap-20",  // 80px
  "5xl": "gap-32",  // 128px
  "6xl": "gap-44",  // 176px
} as const;

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export function Stack({
  children,
  gap = "md",
  align = "stretch",
  className,
  as: Component = "div",
}: StackProps) {
  return (
    <Component
      className={cn(
        "flex flex-col",
        gapClasses[gap],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
}
