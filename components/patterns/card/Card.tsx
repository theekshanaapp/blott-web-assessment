import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/primitives/layout";
import { Stack } from "@/components/primitives/layout";
import { Skeleton } from "@/components/primitives/skeleton";
import { aspectRatios, borderRadius } from "@/lib/design-system/tokens";

/**
 * Card Pattern Component
 * 
 * Generic card pattern that works for both real and loading states.
 * Uses shared CardLayout to prevent divergence.
 * 
 * Architecture:
 * - Composes primitives (Container, Stack, Skeleton)
 * - Accepts isLoading prop for skeleton state
 * - Responsive by default
 * - Fully accessible
 */
export interface CardProps {
  children: {
    image?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
  };
  /**
   * Loading state - shows skeletons
   */
  isLoading?: boolean;
  /**
   * Additional className
   */
  className?: string;
}

/**
 * Card - Generic card pattern
 * 
 * Provides consistent card structure for real and loading states.
 */
export function Card({ children, isLoading = false, className }: CardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col animate-fade-in transition-all duration-300 ease-out",
        isLoading && "role-presentation aria-hidden-true",
        className
      )}
      {...(isLoading ? { role: "presentation", "aria-hidden": true } : {})}
    >
      <Stack gap="md" align="stretch">
        {/* Image Section */}
        {children.image && (
          <div
            className="relative w-full overflow-hidden bg-background-secondary rounded-[6px]"
            style={{
              aspectRatio: aspectRatios.card,
            }}
          >
            {isLoading ? (
              <Skeleton
                width="w-full"
                aspectRatio={aspectRatios.card}
                radius={borderRadius.sm}
                className="absolute inset-0"
              />
            ) : (
              children.image
            )}
          </div>
        )}

        {/* Content Section */}
        {children.content && (
          <div>
            {isLoading ? (
              <Skeleton variant="text" lines={3} width="w-full" />
            ) : (
              children.content
            )}
          </div>
        )}

        {/* Footer Section */}
        {children.footer && (
          <div>
            {isLoading ? (
              <Skeleton width="w-24" height="h-8" radius="rounded" />
            ) : (
              children.footer
            )}
          </div>
        )}
      </Stack>
    </article>
  );
}
