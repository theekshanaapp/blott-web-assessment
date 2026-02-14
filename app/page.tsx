import { Suspense } from "react";
import { MainLayout } from "@/components/layout";
import { NewsList } from "@/components/features/news";
import SkeletonCard from "@/components/news/SkeletonCard";
import ErrorState from "@/components/ui/ErrorState";
import { fetchGeneralNews } from "@/lib/api/news";

async function NewsContent() {
  const { data, error } = await fetchGeneralNews();

  if (error) {
    return (
      <div className="col-span-12">
        <ErrorState message={error} />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="col-span-12">
        <ErrorState message="No news articles available at this time." />
      </div>
    );
  }

  return <NewsList initialNews={data} hasMore={false} />;
}

function LoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCard
          key={index}
          variant={index === 0 ? "large" : "medium"}
        />
      ))}
    </>
  );
}

export default async function HomePage() {
  const { data } = await fetchGeneralNews();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "BLOTT",
    description: "Latest news from the world of finance",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://blott.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://blott.com"}/logo.png`,
    sameAs: [],
    ...(data && data.length > 0 && {
      newsArticle: data.slice(0, 10).map((item) => ({
        "@type": "NewsArticle",
        headline: item.headline,
        image: item.thumbnail || undefined,
        datePublished: item.datetime ? new Date(item.datetime * 1000).toISOString() : new Date().toISOString(),
        dateModified: item.datetime ? new Date(item.datetime * 1000).toISOString() : new Date().toISOString(),
        author: {
          "@type": "Organization",
          name: item.source || "BLOTT",
        },
        publisher: {
          "@type": "Organization",
          name: "BLOTT",
          logo: {
            "@type": "ImageObject",
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://blott.com"}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": item.url,
        },
      })),
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MainLayout>
        <Suspense fallback={<LoadingSkeleton />}>
          <NewsContent />
        </Suspense>
      </MainLayout>
    </>
  );
}
