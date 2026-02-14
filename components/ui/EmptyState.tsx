import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Text } from "@/components/primitives/typography";
import { Stack } from "@/components/primitives/layout";

export interface EmptyStateProps {
  message?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  message = "No items found.",
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "min-h-[400px] p-xl",
        "text-center",
        className
      )}
      role="status"
      aria-live="polite"
    >
      <Stack gap="md" align="center">
        {icon && <div>{icon}</div>}

        <Text size="lg" align="center" className="text-text-muted">
          {message}
        </Text>

        {action && <div>{action}</div>}
      </Stack>
    </div>
  );
}
