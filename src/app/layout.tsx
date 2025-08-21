import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://example.com";
const title = "Day One Executive — Lead with impact from day one";
const description =
  "A practical playbook for new executives to deliver results, build trust, and scale leadership in the first 90 days and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/logos/key.png",
    shortcut: "/logos/key.png",
    apple: "/logos/key.png",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Day One Executive",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Day One Executive book cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/key.png?v=1" sizes="any" />
        <link rel="icon" type="image/png" href="/logos/key.png?v=1" />
        <link rel="apple-touch-icon" href="/logos/key.png?v=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
