import { memo } from "react";
import type { SkeletonCardProps } from "@/types/news";
import { cn } from "@/lib/utils/cn";
import { Skeleton } from "@/components/primitives/skeleton";
import {
  CardLayout,
  CardLinkContainer,
} from "@/components/patterns/card";
import {
  cardImageConfig,
  cardLinkConfig,
  skeletonHeadlineConfig,
  getGridBottomMargin,
  getColumnSpan,
  getSkeletonHeadlineMarginTop,
  getLinkMarginTop,
} from "@/lib/config/cardLayout";

/**
 * SkeletonCard Component
 *
 * Uses shared CardLayout to ensure perfect sync with NewsCard.
 * All layout values come from cardLayout config (single source of truth).
 *
 * Architecture:
 * - Same structure as NewsCard via CardLayout
 * - Same spacing via shared config
 * - Cannot diverge from NewsCard layout
 */
const SkeletonCard = memo(function SkeletonCard({
  variant = "medium",
}: SkeletonCardProps) {
  return (
    <div className={cn(getColumnSpan(variant), getGridBottomMargin())}>
      <CardLayout isSkeleton>
        {{
          image: (
            <Skeleton
              width="w-full"
              aspectRatio={cardImageConfig.aspectRatio}
              radius={cardImageConfig.borderRadius}
              className="absolute inset-0"
            />
          ),
          headline: (
            <div className={cn(getSkeletonHeadlineMarginTop(), skeletonHeadlineConfig.containerGap)}>
              {skeletonHeadlineConfig.lineWidths.map((width, index) => (
                <Skeleton
                  key={index}
                  variant="text"
                  width={width}
                  height={cn(
                    skeletonHeadlineConfig.lineHeights.base,
                    skeletonHeadlineConfig.lineHeights.sm
                  )}
                  radius="rounded"
                />
              ))}
            </div>
          ),
          link: (
            <div className={cn(getLinkMarginTop(), cardLinkConfig.paddingBottom)}>
              <CardLinkContainer>
                <Skeleton
                  width={cn(
                    cardLinkConfig.linkWidth.base,
                    cardLinkConfig.linkWidth.sm,
                    cardLinkConfig.linkWidth.tablet
                  )}
                  height={cn(
                    cardLinkConfig.containerHeight.base,
                    cardLinkConfig.containerHeight.sm,
                    cardLinkConfig.containerHeight.tablet
                  )}
                  radius="rounded"
                />
              </CardLinkContainer>
            </div>
          ),
        }}
      </CardLayout>
    </div>
  );
});

SkeletonCard.displayName = "SkeletonCard";

export default SkeletonCard;
