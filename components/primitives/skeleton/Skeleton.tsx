import { memo } from "react";
import { cn } from "@/lib/utils/cn";

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  className?: string;
  aspectRatio?: string;
  lines?: number;
  variant?: "default" | "text" | "circular" | "rectangular";
}

const Skeleton = memo(function Skeleton({
  width,
  height,
  radius = "rounded",
  className,
  aspectRatio,
  lines = 1,
  variant = "default",
}: SkeletonProps) {
  const widthStyle = typeof width === "number" ? { width: `${width}px` } : {};
  const widthClass = typeof width === "string" ? width : "";

  const heightStyle = typeof height === "number" ? { height: `${height}px` } : {};
  const heightClass = typeof height === "string" ? height : "";

  const radiusStyle = typeof radius === "number" ? { borderRadius: `${radius}px` } : {};
  const radiusClass = typeof radius === "string" ? radius : "";

  const aspectRatioStyle = aspectRatio ? { aspectRatio } : {};

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
