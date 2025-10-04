import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tracman - Answer Engine Optimization Agency | tracman.xyz",
  description: "Leading AEO agency specializing in Reddit marketing and AI-driven growth. Get your product mentioned in AI app answers with 99% index rate.",
  keywords: ["AEO", "Answer Engine Optimization", "Reddit Marketing", "AI Apps", "Growth Marketing"],
  authors: [{ name: "Tracman Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Tracman - Answer Engine Optimization Agency",
    description: "Leading AEO agency specializing in Reddit marketing and AI-driven growth.",
    url: "https://tracman.xyz",
    siteName: "Tracman",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracman - Answer Engine Optimization Agency",
    description: "Leading AEO agency specializing in Reddit marketing and AI-driven growth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}