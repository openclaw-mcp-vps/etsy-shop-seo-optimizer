import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Shop SEO Optimizer – Rank Higher, Sell More",
  description: "Analyze your Etsy listings, discover high-traffic keywords, track ranking changes, and monitor competitor strategies — all in one dashboard."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="63a1e15c-7881-4d14-abe2-bc6ece1b36d8"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
