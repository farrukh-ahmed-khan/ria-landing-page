import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lavanya Suresh — Speaker · Stylist · Innovator",
  description:
    "AI · Fashion · Entrepreneurship. Keynote speaker, Outfitiq app creator, Technology Manager at FordDirect. Book Lavanya for your next event.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
