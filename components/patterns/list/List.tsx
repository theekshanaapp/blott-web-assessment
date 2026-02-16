import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Grid } from "@/components/primitives/layout";
import { Container } from "@/components/primitives/layout";

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  isLoading?: boolean;
  renderSkeleton?: (index: number) => ReactNode;
  emptyState?: ReactNode;
  errorState?: ReactNode;
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
}

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
  if (errorState) {
    return <Container>{errorState}</Container>;
  }

  if (isLoading && renderSkeleton) {
    return (
      <Grid columns={columns} gap={gap} className={className}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>{renderSkeleton(index)}</div>
        ))}
      </Grid>
    );
  }

  if (items.length === 0 && emptyState) {
    return <Container>{emptyState}</Container>;
  }

  return (
    <Grid columns={columns} gap={gap} className={className}>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item, index)}</div>
      ))}
    </Grid>
  );
}
