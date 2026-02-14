import type { FinnhubNewsItem, NewsItem, NewsApiResponse } from "@/types/news";

/**
 * Finnhub API configuration
 */
const FINNHUB_API_BASE = "https://finnhub.io/api/v1";
const API_KEY = "crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg";

/**
 * Transforms Finnhub news item to our application format
 * Maps API fields to our internal structure:
 * - image → thumbnail
 * - source → source
 * - datetime → datetime (converted to milliseconds)
 * - headline → headline
 * - url → url
 *
 * @param item - Raw news item from Finnhub API
 * @returns Transformed news item for our application
 */
function transformNewsItem(item: FinnhubNewsItem): NewsItem {
  return {
    id: item.id,
    thumbnail: item.image || "",
    source: item.source || "Unknown",
    datetime: item.datetime * 1000, // Convert Unix timestamp to milliseconds
    headline: item.headline || "",
    url: item.url || "",
    category: item.category,
    summary: item.summary,
  };
}

/**
 * Fetches general news from Finnhub API
 * Uses Next.js fetch with revalidation caching (5 minutes)
 *
 * @returns Promise resolving to news data and error state
 * @throws Will not throw, but returns error in response object
 */
export async function fetchGeneralNews(): Promise<NewsApiResponse> {
  try {
    const response = await fetch(
      `${FINNHUB_API_BASE}/news?category=general&token=${API_KEY}`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data: FinnhubNewsItem[] = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid API response format");
    }

    const transformedData = data.map(transformNewsItem);

    return {
      data: transformedData,
      error: null,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch news";

    return {
      data: [],
      error: errorMessage,
    };
  }
}

/**
 * Validates if an image URL is accessible
 * Uses HEAD request to check without downloading the full image
 *
 * @param url - Image URL to validate
 * @returns Promise resolving to true if image is accessible, false otherwise
 */
export async function validateImageUrl(url: string): Promise<boolean> {
  if (!url || url.trim() === "") return false;

  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
