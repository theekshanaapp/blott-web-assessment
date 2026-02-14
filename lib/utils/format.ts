import { format, formatDistanceToNow } from "date-fns";

/**
 * Formats a timestamp to a readable date string
 */
export function formatDate(timestamp: number): string {
  try {
    return format(new Date(timestamp), "MMM d, yyyy");
  } catch {
    return "Invalid Date";
  }
}

/**
 * Formats a timestamp to relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(timestamp: number): string {
  try {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  } catch {
    return "Recently";
  }
}

/**
 * Truncates text to a specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Validates and sanitizes URL
 */
export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.toString();
  } catch {
    return "#";
  }
}
