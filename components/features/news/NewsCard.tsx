"use client";

import Image from "next/image";
import { memo, useState } from "react";
import type { NewsCardProps } from "@/types/news";
import { sanitizeUrl } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";
import {
  CardLayout,
  CardLinkContainer,
  CardLinkText,
  CardLinkIcon,
} from "@/components/patterns/card";
import { cardImageConfig, cardLinkConfig } from "@/lib/config/cardLayout";

const PLACEHOLDER_IMAGE = "/placeholder-image.png";

const NewsCard = memo(function NewsCard({
  news,
  priority = false,
}: NewsCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const hasValidImage = news.thumbnail &&
    news.thumbnail.trim() !== "" &&
    news.thumbnail.trim().length > 0 &&
    (news.thumbnail.startsWith("http://") ||
     news.thumbnail.startsWith("https://") ||
     news.thumbnail.startsWith("//") ||
     news.thumbnail.startsWith("/"));

  const imageUrl = hasValidImage && !imageError
    ? (news.thumbnail.startsWith("//")
        ? `https:${news.thumbnail}`
        : news.thumbnail)
    : PLACEHOLDER_IMAGE;
  const articleUrl = sanitizeUrl(news.url);

  return (
    <CardLayout>
      {{
        image: (
          <>
            {imageLoading && (
              <div className="absolute inset-0 bg-background-secondary animate-pulse z-10" />
            )}
            <Image
              src={imageUrl}
              alt={news.headline}
              width={cardImageConfig.width}
              height={cardImageConfig.height}
              className={cn(
                "w-full h-full object-cover rounded-[6px] transition-opacity duration-300 relative z-20",
                imageLoading ? "opacity-0" : "opacity-100"
              )}
              priority={priority}
              loading={priority ? undefined : "lazy"}
              unoptimized={imageUrl === PLACEHOLDER_IMAGE || imageError}
              onLoad={() => {
                setImageLoading(false);
                setImageError(false);
              }}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {imageError && !imageLoading && (
              <div className="absolute inset-0 z-30">
                <Image
                  src={PLACEHOLDER_IMAGE}
                  alt=""
                  width={cardImageConfig.width}
                  height={cardImageConfig.height}
                  className="w-full h-full object-cover rounded-[6px]"
                  unoptimized
                />
              </div>
            )}
          </>
        ),
        headline: <>{news.headline}</>,
        link: (
          <a
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              cardLinkConfig.fontFamily,
              cardLinkConfig.fontSize.base,
              cardLinkConfig.fontSize.sm,
              cardLinkConfig.lineHeight,
              "text-main-text-color inline-flex items-center"
            )}
            style={{
              fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
            aria-label={`Read article: ${news.headline}`}
          >
            <CardLinkContainer>
              <CardLinkText>Read Article</CardLinkText>
              <CardLinkIcon>
            <Image
              src="/arrow.svg"
              alt=""
              width={20}
              height={20}
              className="w-full h-full"
              unoptimized
              aria-hidden="true"
            />
              </CardLinkIcon>
            </CardLinkContainer>
          </a>
        ),
      }}
    </CardLayout>
  );
});

NewsCard.displayName = "NewsCard";

export default NewsCard;
