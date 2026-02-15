import type { Metadata, Viewport } from "next";
import { Inter, Roboto, Roboto_Mono, Noto_Serif, Lora } from "next/font/google";
import "./globals.css";

const helveticaNowDisplay = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-helvetica-now",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

// Albra font - using Lora variable for serif font with weight 300 support
// Lora has a similar elegant R shape to Albra
const albra = Lora({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-albra",
  display: "swap",
});

const notoSerif = Noto_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLOTT - Latest News from the World of Finance",
  description:
    "Stay updated with the latest financial news, market insights, and economic updates from around the world.",
  keywords: ["finance", "news", "market", "stocks", "economy", "business", "financial news", "market updates"],
  authors: [{ name: "BLOTT" }],
  creator: "BLOTT",
  publisher: "BLOTT",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://blott.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BLOTT - Latest News from the World of Finance",
    description:
      "Stay updated with the latest financial news, market insights, and economic updates from around the world.",
    type: "website",
    locale: "en_US",
    siteName: "BLOTT",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 48,
        alt: "BLOTT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOTT - Latest News from the World of Finance",
    description:
      "Stay updated with the latest financial news, market insights, and economic updates.",
    creator: "@blott",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${helveticaNowDisplay.variable} ${roboto.variable} ${albra.variable} ${notoSerif.variable} ${robotoMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
