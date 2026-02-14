"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { NewsItem } from "@/types/news";
import { fetchGeneralNews } from "@/lib/api/news";

interface UseInfiniteScrollReturn {
  news: NewsItem[];
  loading: boolean;
  hasMore: boolean;
  error: string | null;
  loadMore: () => Promise<void>;
}

export function useInfiniteScroll(
  initialNews: NewsItem[],
  initialHasMore: boolean = true
): UseInfiniteScrollReturn {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [error, setError] = useState<string | null>(null);
  const loadingRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const response = await fetchGeneralNews();

      if (response.error) {
        setError(response.error);
        setHasMore(false);
      } else if (response.data.length > 0) {
        setNews((prev) => {
          const existingIds = new Set(prev.map((item) => item.id));
          const newItems = response.data.filter(
            (item) => !existingIds.has(item.id)
          );
          return [...prev, ...newItems];
        });
        setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load more news";
      setError(errorMessage);
      setHasMore(false);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [hasMore]);

  useEffect(() => {
    setNews(initialNews);
    setHasMore(initialHasMore);
    setError(null);
  }, [initialNews, initialHasMore]);

  return {
    news,
    loading,
    hasMore,
    error,
    loadMore,
  };
}
