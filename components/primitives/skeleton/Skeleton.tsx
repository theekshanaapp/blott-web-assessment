import { memo } from "react";
import { cn } from "@/lib/utils/cn";

export interface SkeletonProps {
  /**
   * Width of the skeleton
   * Can be a Tailwind class (e.g., "w-full", "w-24") or a number (px)
   */
  width?: string | number;
  /**
   * Height of the skeleton
   * Can be a Tailwind class (e.g., "h-4", "h-8") or a number (px)
   */
  height?: string | number;
  /**
   * Border radius
   * Can be a Tailwind class (e.g., "rounded", "rounded-lg") or a number (px)
   */
  radius?: string | number;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Aspect ratio for image-like skeletons (e.g., "16/9", "1/1")
   */
  aspectRatio?: string;
  /**
   * Number of skeleton lines (for text blocks)
   */
  lines?: number;
  /**
   * Variant for different skeleton types
   */
  variant?: "default" | "text" | "circular" | "rectangular";
}

/**
 * Skeleton Primitive Component
 * 
 * A reusable, accessible skeleton loading component with shimmer animation.
 * 
 * Features:
 * - Shimmer animation with gradient (not animate-pulse)
 * - Full accessibility support (aria-hidden, role="presentation")
 * - Reduced motion support
 * - Flexible sizing (Tailwind classes or pixel values)
 * - Aspect ratio support for images
 * - Multiple line support for text blocks
 * - React.memo optimized
 * 
 * @example
 * ```tsx
 * // Simple skeleton
 * <Skeleton width="w-full" height="h-4" />
 * 
 * // Image skeleton with aspect ratio
 * <Skeleton width="w-full" aspectRatio="16/9" radius="rounded-lg" />
 * 
 * // Text block with multiple lines
 * <Skeleton variant="text" lines={3} width="w-full" />
 * ```
 */
const Skeleton = memo(function Skeleton({
  width,
  height,
  radius = "rounded",
  className,
  aspectRatio,
  lines = 1,
  variant = "default",
}: SkeletonProps) {
  // Handle width - support both Tailwind classes and pixel values
  const widthStyle = typeof width === "number" ? { width: `${width}px` } : {};
  const widthClass = typeof width === "string" ? width : "";

  // Handle height - support both Tailwind classes and pixel values
  const heightStyle = typeof height === "number" ? { height: `${height}px` } : {};
  const heightClass = typeof height === "string" ? height : "";

  // Handle radius - support both Tailwind classes and pixel values
  const radiusStyle = typeof radius === "number" ? { borderRadius: `${radius}px` } : {};
  const radiusClass = typeof radius === "string" ? radius : "";

  // Aspect ratio handling
  const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};

  // Variant-based classes
  const variantClasses = {
    default: "",
    text: "h-4",
    circular: "rounded-full",
    rectangular: "rounded-none",
  };

  const baseClasses = cn(
    "bg-background-secondary",
    "skeleton-shimmer",
    variantClasses[variant],
    widthClass,
    heightClass,
    radiusClass,
    className
  );

  // If multiple lines requested, render them
  if (lines > 1 && variant === "text") {
    const lineWidths = [
      "w-full",
      "w-5/6",
      "w-4/6",
      "w-3/6",
    ];
    
    return (
      <div
        className="space-y-2"
        role="presentation"
        aria-hidden="true"
      >
        {Array.from({ length: lines }).map((_, index) => {
          const lineWidth = lineWidths[index] || lineWidths[lineWidths.length - 1];
          const lineWidthStyle = typeof width === "number" ? { width: `${width}px` } : {};
          const lineWidthClass = typeof width === "string" ? width : lineWidth;
          
          return (
            <div
              key={index}
              className={cn(
                "bg-background-secondary",
                "skeleton-shimmer",
                "h-4",
                lineWidthClass,
                radiusClass,
                className
              )}
              style={{
                ...lineWidthStyle,
                ...radiusStyle,
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={baseClasses}
      style={{
        ...widthStyle,
        ...heightStyle,
        ...radiusStyle,
        ...aspectRatioStyle,
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
});

Skeleton.displayName = "Skeleton";

export default Skeleton;
