import type { FinnhubNewsItem, NewsItem, NewsApiResponse } from "@/types/news";

const FINNHUB_API_BASE = "https://finnhub.io/api/v1";
const API_KEY = "crals9pr01qhk4bqotb0crals9pr01qhk4bqotbg";

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

export async function validateImageUrl(url: string): Promise<boolean> {
  if (!url || url.trim() === "") return false;

  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
