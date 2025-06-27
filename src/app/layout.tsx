import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/header";
import Footer from "./components/Footer";
import { APP_CONFIG, SEO_CONFIG } from "./common/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.DEFAULT_TITLE,
    template: SEO_CONFIG.TITLE_TEMPLATE,
  },
  description: SEO_CONFIG.DEFAULT_DESCRIPTION,
  keywords: [
    "portfolio",
    "web developer",
    "frontend",
    "backend",
    "fullstack",
    "react",
    "nextjs",
    "typescript",
  ],
  authors: [{ name: APP_CONFIG.AUTHOR, url: APP_CONFIG.SITE_URL }],
  creator: APP_CONFIG.AUTHOR,
  publisher: APP_CONFIG.AUTHOR,
  metadataBase: new URL(APP_CONFIG.SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_CONFIG.SITE_URL,
    title: SEO_CONFIG.DEFAULT_TITLE,
    description: SEO_CONFIG.DEFAULT_DESCRIPTION,
    siteName: APP_CONFIG.SITE_NAME,
    images: [
      {
        url: SEO_CONFIG.DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${APP_CONFIG.AUTHOR} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.DEFAULT_TITLE,
    description: SEO_CONFIG.DEFAULT_DESCRIPTION,
    creator: SEO_CONFIG.TWITTER_HANDLE,
    images: [SEO_CONFIG.DEFAULT_OG_IMAGE],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
