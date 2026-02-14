"use client";

import { memo } from "react";
import type { ErrorStateProps } from "@/types/news";
import { cn } from "@/lib/utils/cn";

const ErrorState = memo(function ErrorState({
  message = "Something went wrong. Please try again later.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "min-h-[400px] p-xl",
        "text-center"
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="mb-4">
        <svg
          className="w-16 h-16 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h2 className="text-24 font-roboto text-main-text-color mb-2">
        Unable to Load News
      </h2>
      <p className="text-15 text-text-muted mb-6 max-w-md">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className={cn(
            "px-lg py-md",
            "bg-main-text-color text-background-main",
            "font-roboto text-15 font-medium",
            "rounded-sm",
            "hover:opacity-80",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-main-text-color focus:ring-offset-2 focus:ring-offset-background-main"
          )}
          type="button"
        >
          Try Again
        </button>
      )}
    </div>
  );
});

ErrorState.displayName = "ErrorState";

export default ErrorState;
