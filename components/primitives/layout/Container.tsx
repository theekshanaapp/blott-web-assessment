import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export interface ContainerProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none";
  padding?: "none" | "sm" | "md" | "lg" | "responsive";
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
  none: "",
} as const;

const paddingClasses = {
  none: "",
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
  responsive: "px-4 sm:px-6 md:px-8 tablet:px-20 xl:px-[60px]",
} as const;

export function Container({
  children,
  maxWidth = "full",
  padding = "responsive",
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
}
