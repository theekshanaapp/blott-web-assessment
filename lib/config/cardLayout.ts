/**
 * Card Layout Configuration
 *
 * Single source of truth for NewsCard and SkeletonCard layout.
 *
 * Architecture Principle:
 * - Both components MUST use these exact values
 * - Changes here automatically sync to both components
 * - Prevents layout divergence between real and loading states
 *
 * Design System Integration:
 * - All values match Figma specifications
 * - Responsive breakpoints: sm, md, tablet, xl
 * - Maintains pixel-perfect accuracy
 */

/**
 * Image container configuration
 */
export const cardImageConfig = {
  aspectRatio: "300/199" as const,
  borderRadius: 6,
  width: 300,
  height: 199,
} as const;

/**
 * Headline typography configuration
 * Figma specs: Roboto (sans-serif), 400, 24px, 130% line height, -4% letter spacing, Title case
 */
export const cardHeadlineConfig = {
  fontFamily: "font-roboto",
  fontWeight: "font-normal",
  lineHeight: "leading-[130%]",
  letterSpacing: "-4%",
  textTransform: "capitalize" as const,
  fontSize: {
    base: "text-18",
    sm: "sm:text-20",
    md: "md:text-22",
    tablet: "tablet:text-24",
    xl: "xl:text-24",
  },
  marginTop: {
    base: "mt-8",
    sm: "sm:mt-6",
    md: "md:mt-8",
    tablet: "tablet:mt-16",
    xl: "xl:mt-6",
  },
} as const;

/**
 * Read Article link configuration
 */
export const cardLinkConfig = {
  fontFamily: "font-roboto",
  fontSize: {
    base: "text-15",
    sm: "sm:text-15",
  },
  lineHeight: "leading-[100%]",
  marginTop: {
    base: "mt-8",
    sm: "sm:mt-5",
    md: "md:mt-6",
    tablet: "tablet:mt-20",
    xl: "xl:mt-6",
  },
  paddingBottom: "pb-[7px]",
  containerHeight: {
    base: "h-[28px]",
    sm: "sm:h-[30px]",
    tablet: "tablet:h-[31px]",
    xl: "xl:h-[31px]",
  },
  gap: {
    base: "gap-2",
    sm: "sm:gap-[8px]",
    tablet: "tablet:gap-[10px]",
    xl: "xl:gap-[10px]",
  },
  textHeight: {
    base: "h-[28px]",
    sm: "sm:h-[30px]",
    tablet: "tablet:h-[31px]",
    xl: "xl:h-[31px]",
  },
  textFontSize: {
    base: "text-14",
    sm: "sm:text-15",
    tablet: "tablet:text-15",
    xl: "xl:text-15",
  },
  iconSize: {
    base: "h-[20px] w-[20px]",
    sm: "sm:h-[22px] sm:w-[22px]",
    tablet: "tablet:h-[24px] tablet:w-[24px]",
    xl: "xl:h-[24px] xl:w-[24px]",
  },
  linkWidth: {
    base: "w-24",
    sm: "sm:w-28",
    tablet: "tablet:w-32",
  },
} as const;

/**
 * Skeleton headline configuration
 */
export const skeletonHeadlineConfig = {
  containerMarginTop: {
    base: "mt-4",
    sm: "sm:mt-6",
    md: "md:mt-8",
    tablet: "tablet:mt-16",
  },
  containerGap: "space-y-2",
  lineHeights: {
    base: "h-5",
    sm: "sm:h-6",
  },
  lineWidths: ["w-full", "w-5/6", "w-4/6"] as const,
} as const;

/**
 * Grid layout configuration
 */
export const cardGridConfig = {
  bottomMargin: {
    base: "mb-10",        // 40px - mobile spacing
    sm: "sm:mb-12",       // 48px
    md: "md:mb-14",       // 56px
    tablet: "tablet:mb-16", // 64px
    xl: "xl:mb-24",       // 96px - desktop spacing
  },
  columnSpans: {
    large: {
      base: "col-span-12",
      tablet: "tablet:col-span-6",
      xl: "xl:col-span-6",
    },
    medium: {
      base: "col-span-12",
      tablet: "tablet:col-span-3",
      xl: "xl:col-span-3",
    },
    equal: {
      base: "col-span-12",
      tablet: "tablet:col-span-4",
      xl: "xl:col-span-4",
    },
    small: {
      base: "col-span-12",
      tablet: "tablet:col-span-3",
      xl: "xl:col-span-4",
    },
  },
} as const;

/**
 * Card container configuration
 */
export const cardContainerConfig = {
  baseClasses: "group flex flex-col animate-fade-in transition-all duration-300 ease-out",
  skeletonClasses: "role-presentation aria-hidden-true",
} as const;

/**
 * Utility function to combine responsive classes
 */
export function combineResponsiveClasses(
  base: string,
  sm?: string,
  md?: string,
  tablet?: string,
  xl?: string
): string {
  return [base, sm, md, tablet, xl].filter(Boolean).join(" ");
}

/**
 * Get headline margin top classes
 */
export function getHeadlineMarginTop(): string {
  return combineResponsiveClasses(
    cardHeadlineConfig.marginTop.base,
    cardHeadlineConfig.marginTop.sm,
    cardHeadlineConfig.marginTop.md,
    cardHeadlineConfig.marginTop.tablet,
    cardHeadlineConfig.marginTop.xl
  );
}

/**
 * Get headline font size classes
 */
export function getHeadlineFontSize(): string {
  return combineResponsiveClasses(
    cardHeadlineConfig.fontSize.base,
    cardHeadlineConfig.fontSize.sm,
    cardHeadlineConfig.fontSize.md,
    cardHeadlineConfig.fontSize.tablet,
    cardHeadlineConfig.fontSize.xl
  );
}

/**
 * Get link margin top classes
 */
export function getLinkMarginTop(): string {
  return combineResponsiveClasses(
    cardLinkConfig.marginTop.base,
    cardLinkConfig.marginTop.sm,
    cardLinkConfig.marginTop.md,
    cardLinkConfig.marginTop.tablet,
    cardLinkConfig.marginTop.xl
  );
}

/**
 * Get link container height classes
 */
export function getLinkContainerHeight(): string {
  return combineResponsiveClasses(
    cardLinkConfig.containerHeight.base,
    cardLinkConfig.containerHeight.sm,
    cardLinkConfig.containerHeight.tablet,
    cardLinkConfig.containerHeight.xl
  );
}

/**
 * Get link gap classes
 */
export function getLinkGap(): string {
  return combineResponsiveClasses(
    cardLinkConfig.gap.base,
    cardLinkConfig.gap.sm,
    cardLinkConfig.gap.tablet,
    cardLinkConfig.gap.xl
  );
}

/**
 * Get skeleton headline margin top classes
 */
export function getSkeletonHeadlineMarginTop(): string {
  return combineResponsiveClasses(
    skeletonHeadlineConfig.containerMarginTop.base,
    skeletonHeadlineConfig.containerMarginTop.sm,
    skeletonHeadlineConfig.containerMarginTop.md,
    skeletonHeadlineConfig.containerMarginTop.tablet
  );
}

/**
 * Get grid bottom margin classes
 */
export function getGridBottomMargin(): string {
  return combineResponsiveClasses(
    cardGridConfig.bottomMargin.base,
    cardGridConfig.bottomMargin.sm,
    cardGridConfig.bottomMargin.md,
    cardGridConfig.bottomMargin.tablet,
    cardGridConfig.bottomMargin.xl
  );
}

/**
 * Get column span classes for a variant
 */
export function getColumnSpan(variant: "large" | "medium" | "equal" | "small"): string {
  const spans = cardGridConfig.columnSpans[variant];
  return combineResponsiveClasses(spans.base, undefined, undefined, spans.tablet, spans.xl);
}
