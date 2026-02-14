import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Grid } from "@/components/primitives/layout";
import { Container } from "@/components/primitives/layout";

/**
 * List Pattern Component
 * 
 * Generic list pattern for displaying collections.
 * Handles loading, empty, and error states.
 * 
 * Architecture:
 * - Composes Grid primitive
 * - Handles all list states (loading, empty, error)
 * - Responsive by default
 * - Fully accessible
 */
export interface ListProps<T> {
  /**
   * Items to render
   */
  items: T[];
  /**
   * Render function for each item
   */
  renderItem: (item: T, index: number) => ReactNode;
  /**
   * Loading state
   */
  isLoading?: boolean;
  /**
   * Loading skeleton component
   */
  renderSkeleton?: (index: number) => ReactNode;
  /**
   * Empty state component
   */
  emptyState?: ReactNode;
  /**
   * Error state component
   */
  errorState?: ReactNode;
  /**
   * Grid columns configuration
   */
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    tablet?: number;
    lg?: number;
    xl?: number;
  };
  /**
   * Grid gap
   */
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Additional className
   */
  className?: string;
}

/**
 * List - Generic list pattern
 * 
 * Handles loading, empty, error, and loaded states consistently.
 */
export function List<T>({
  items,
  renderItem,
  isLoading = false,
  renderSkeleton,
  emptyState,
  errorState,
  columns = { base: 1, tablet: 3 },
  gap = "md",
  className,
}: ListProps<T>) {
  // Error state
  if (errorState) {
    return <Container>{errorState}</Container>;
  }

  // Loading state
  if (isLoading && renderSkeleton) {
    return (
      <Grid columns={columns} gap={gap} className={className}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>{renderSkeleton(index)}</div>
        ))}
      </Grid>
    );
  }

  // Empty state
  if (items.length === 0 && emptyState) {
    return <Container>{emptyState}</Container>;
  }

  // Loaded state
  return (
    <Grid columns={columns} gap={gap} className={className}>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item, index)}</div>
      ))}
    </Grid>
  );
}
