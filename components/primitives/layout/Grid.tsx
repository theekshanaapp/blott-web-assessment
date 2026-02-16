import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface GridProps {
  children: ReactNode;
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    tablet?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  as?: "div" | "section" | "main" | "ul" | "ol";
}

const gapClasses = {
  xs: "gap-2",      // 8px (sm token)
  sm: "gap-2",      // 8px (sm token)
  md: "gap-4",      // 16px (md token)
  lg: "gap-6",      // 24px (lg token)
  xl: "gap-8",      // 32px (xl token)
} as const;

const gridColsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
} as const;

const smGridColsClasses = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
} as const;

const mdGridColsClasses = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
} as const;

const tabletGridColsClasses = {
  1: "tablet:grid-cols-1",
  2: "tablet:grid-cols-2",
  3: "tablet:grid-cols-3",
  4: "tablet:grid-cols-4",
  5: "tablet:grid-cols-5",
  6: "tablet:grid-cols-6",
  7: "tablet:grid-cols-7",
  8: "tablet:grid-cols-8",
  9: "tablet:grid-cols-9",
  10: "tablet:grid-cols-10",
  11: "tablet:grid-cols-11",
  12: "tablet:grid-cols-12",
} as const;

const lgGridColsClasses = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
} as const;

const xlGridColsClasses = {
  1: "xl:grid-cols-1",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
  7: "xl:grid-cols-7",
  8: "xl:grid-cols-8",
  9: "xl:grid-cols-9",
  10: "xl:grid-cols-10",
  11: "xl:grid-cols-11",
  12: "xl:grid-cols-12",
} as const;

function getGridColumns(columns: GridProps["columns"] = {}): string {
  const { base = 1, sm, md, tablet, lg, xl } = columns;

  const classes = [
    gridColsClasses[base as keyof typeof gridColsClasses],
    sm && smGridColsClasses[sm as keyof typeof smGridColsClasses],
    md && mdGridColsClasses[md as keyof typeof mdGridColsClasses],
    tablet && tabletGridColsClasses[tablet as keyof typeof tabletGridColsClasses],
    lg && lgGridColsClasses[lg as keyof typeof lgGridColsClasses],
    xl && xlGridColsClasses[xl as keyof typeof xlGridColsClasses],
  ].filter(Boolean);

  return classes.join(" ");
}

export function Grid({
  children,
  columns = { base: 1 },
  gap = "md",
  className,
  as: Component = "div",
}: GridProps) {
  return (
    <Component
      className={cn(
        "grid",
        getGridColumns(columns),
        gapClasses[gap],
        className
      )}
    >
      {children}
    </Component>
  );
}
