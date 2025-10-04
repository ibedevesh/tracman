import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tracman - Get Your Product Recommended by AI | AEO Marketing Agency",
  description: "If AI is not recommending your product, you are dead! We dominate Reddit conversations with 500K+ karma accounts, AI automation, and strategic AEO that makes your product the obvious choice every single time.",
  keywords: [
    "AEO", "Answer Engine Optimization", "AI recommends product", "Reddit marketing", 
    "ChatGPT product mentions", "AI search optimization", "product recommendation AI",
    "Reddit karma accounts", "AI automation marketing", "get recommended by AI",
    "AEO vs SEO", "AI-driven growth", "Reddit dominance", "ChatGPT marketing",
    "AI models recommend", "answer engine marketing", "AI product placement",
    "Reddit AEO strategy", "AI recommendation engine", "product discovery AI"
  ],
  authors: [{ name: "Tracman AEO Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://tracman.xyz",
  },
  openGraph: {
    title: "Get Your Product Recommended by AI - Tracman AEO Agency",
    description: "77% of Americans now use ChatGPT as search engine. Reddit is 40.1% of all AI citations. We make AI models recommend YOUR product automatically with proven AEO strategies.",
    url: "https://tracman.xyz",
    siteName: "Tracman AEO Agency",
    type: "website",
    images: [
      {
        url: "https://tracman.xyz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tracman - AI Product Recommendation Agency"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Product Recommended by AI - Tracman",
    description: "We dominate Reddit conversations so AI models recommend YOUR product automatically. 500K+ karma accounts, 99% success rate.",
    images: ["https://tracman.xyz/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional SEO Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:creator" content="@ibedevesh" />
        <meta name="twitter:site" content="@tracman_aeo" />
        
        {/* Structured Data for AEO Agency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tracman",
              "description": "Leading Answer Engine Optimization (AEO) agency specializing in AI product recommendations",
              "url": "https://tracman.xyz",
              "logo": "https://tracman.xyz/favicon.svg",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Devesh Pratap Singh"
              },
              "services": [
                "Answer Engine Optimization",
                "Reddit Marketing",
                "AI Product Recommendations",
                "ChatGPT Optimization",
                "AI Search Optimization"
              ],
              "areaServed": "Worldwide",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+916399935535",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}