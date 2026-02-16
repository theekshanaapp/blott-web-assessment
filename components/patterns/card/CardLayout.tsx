import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import {
  cardImageConfig,
  cardHeadlineConfig,
  cardLinkConfig,
  cardContainerConfig,
  getHeadlineMarginTop,
  getHeadlineFontSize,
  getLinkMarginTop,
  getLinkContainerHeight,
  getLinkGap,
} from "@/lib/config/cardLayout";

interface CardLayoutProps {
  children: {
    image: ReactNode;
    headline: ReactNode;
    link: ReactNode;
  };
  className?: string;
  isSkeleton?: boolean;
}

export function CardLayout({ children, className, isSkeleton = false }: CardLayoutProps) {
  return (
    <article
      className={cn(
        cardContainerConfig.baseClasses,
        isSkeleton && cardContainerConfig.skeletonClasses,
        className
      )}
      {...(isSkeleton ? { role: "presentation", "aria-hidden": true } : {})}
    >
      <div
        className="relative w-full overflow-hidden bg-background-secondary rounded-[6px]"
        style={{
          aspectRatio: "300 / 199",
          minHeight: "199px",
        }}
      >
        {children.image}
      </div>

      <div
        className={cn(
          getHeadlineMarginTop(),
          getHeadlineFontSize(),
          cardHeadlineConfig.fontFamily,
          cardHeadlineConfig.fontWeight,
          "text-main-text-color",
          cardHeadlineConfig.textTransform,
          "break-words overflow-wrap-anywhere"
        )}
        style={{
          fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
          fontWeight: 400,
          lineHeight: "130%",
          letterSpacing: "-4%",
          wordBreak: "break-word",
          overflowWrap: "break-word",
        }}
      >
        {children.headline}
      </div>

      <div className={cn(getLinkMarginTop(), cardLinkConfig.paddingBottom)}>
        {children.link}
      </div>
    </article>
  );
}

interface CardLinkContainerProps {
  children: ReactNode;
  className?: string;
}

export function CardLinkContainer({ children, className }: CardLinkContainerProps) {
  return (
    <div className={cn(getLinkContainerHeight(), getLinkGap(), "flex justify-start items-center", className)}>
      {children}
    </div>
  );
}

interface CardLinkTextProps {
  children: ReactNode;
  className?: string;
}

export function CardLinkText({ children, className }: CardLinkTextProps) {
  return (
    <span
      className={cn(
        "border-b-[1px] border-main-text-color flex items-center",
        cardLinkConfig.textHeight.base,
        cardLinkConfig.textHeight.sm,
        cardLinkConfig.textHeight.tablet,
        cardLinkConfig.textFontSize.base,
        cardLinkConfig.textFontSize.sm,
        className
      )}
    >
      {children}
    </span>
  );
}

interface CardLinkIconProps {
  children: ReactNode;
  className?: string;
}

export function CardLinkIcon({ children, className }: CardLinkIconProps) {
  return (
    <span
      className={cn(
        "flex items-center flex-shrink-0",
        cardLinkConfig.iconSize.base,
        cardLinkConfig.iconSize.sm,
        cardLinkConfig.iconSize.tablet,
        className
      )}
    >
      {children}
    </span>
  );
}
