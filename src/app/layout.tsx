import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finispect.co.uk"),
  title: "Finispect | New Build Snagging Inspections London & UK",
  description:
    "Independent snagging inspections for new build homes in London and the UK. Professional, defect-led reports by an experienced QA specialist. Protect your investment with Finispect.",
  keywords: [
    "snagging inspections",
    "new build inspection",
    "London",
    "UK",
    "property inspection",
    "defect report",
    "independent inspector",
    "Finispect",
    "quality assurance",
    "snag list",
    "home inspection",
  ],
  openGraph: {
    title: "Finispect | New Build Snagging Inspections London & UK",
    description:
      "Professional, independent snagging inspections for new build homes. Detailed, photo-based reports by an experienced QA specialist.",
    url: "https://finispect.co.uk",
    siteName: "Finispect",
    images: [
      {
        url: "/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Finispect - New Build Snagging Inspections",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer year={year} />
      </body>
    </html>
  );
}
