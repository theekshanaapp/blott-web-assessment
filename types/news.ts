export interface FinnhubNewsItem {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export interface NewsItem {
  id: number;
  thumbnail: string;
  source: string;
  datetime: number;
  headline: string;
  url: string;
  category?: string;
  summary?: string;
}

export interface NewsApiResponse {
  data: NewsItem[];
  error: string | null;
}

export interface NewsCardProps {
  news: NewsItem;
  priority?: boolean;
}

export interface NewsListProps {
  initialNews: NewsItem[];
  hasMore?: boolean;
}

export interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export interface SkeletonCardProps {
  variant?: "large" | "medium" | "equal" | "small";
}
