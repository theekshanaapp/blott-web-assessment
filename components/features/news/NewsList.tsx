"use client";

import { memo } from "react";
import type { NewsListProps } from "@/types/news";
import NewsCard from "./NewsCard";
import { useInfiniteScroll } from "@/lib/hooks/useInfiniteScroll";
import { getGridBottomMargin, getColumnSpan } from "@/lib/config/cardLayout";
import { cn } from "@/lib/utils/cn";
import SkeletonCard from "@/components/news/SkeletonCard";
import ErrorState from "@/components/ui/ErrorState";

const NewsList = memo(function NewsList({
  initialNews,
  hasMore: initialHasMore = true,
}: NewsListProps) {
  const {
    news,
    loading,
    hasMore,
    error,
    loadMore,
  } = useInfiniteScroll(initialNews, initialHasMore);

  const getGridClass = (index: number) => {
    if (index === 0) {
      return cn(getColumnSpan("large"), getGridBottomMargin());
    }
    return cn(getColumnSpan("medium"), getGridBottomMargin());
  };

  if (error && news.length === 0) {
    return (
      <div className="col-span-12">
        <ErrorState message={error} onRetry={() => window.location.reload()} />
      </div>
    );
  }

  if (news.length === 0 && !loading) {
    return (
      <div className="col-span-12">
        <ErrorState message="No news articles found." />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-x-0 sm:gap-x-2 md:gap-x-3 tablet:gap-x-4 xl:gap-x-4 gap-y-0" role="list">
        {loading && news.length === 0 ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={getGridClass(index)} role="listitem">
              <SkeletonCard variant={index === 0 ? "large" : "medium"} />
            </div>
          ))
        ) : (
          news.map((item, index) => (
            <div key={item.id} className={getGridClass(index)} role="listitem">
              <NewsCard news={item} priority={index < 3} />
            </div>
          ))
        )}
      </div>

      {hasMore && news.length > 0 && (
        <div className="col-span-12 flex justify-center mt-16">
          <button
            onClick={loadMore}
            disabled={loading}
            className={cn(
              "px-xl py-md",
              "bg-main-text-color text-background-main",
              "font-roboto text-15 font-medium",
              "rounded-sm",
              "hover:opacity-80",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-main-text-color focus:ring-offset-2 focus:ring-offset-background-main"
            )}
            type="button"
            aria-label="Load more news"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
});

NewsList.displayName = "NewsList";

export default NewsList;
