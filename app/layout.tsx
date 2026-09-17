import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOREMM Hospitality Management & Consulting Ltd.",
  description:
    "LOREMM Hospitality Management & Consulting Ltd. — Hospitality Management. Operational Excellence. Sustainable Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}