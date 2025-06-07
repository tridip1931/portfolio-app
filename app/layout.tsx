import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "../components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Tridip - Product Designer",
    template: "%s | Tridip"
  },
  description: "Product designer passionate about creating meaningful digital experiences through user-centered design and strategic thinking.",
  keywords: ["product design", "UX design", "UI design", "design systems", "user experience", "portfolio"],
  authors: [{ name: "Tridip" }],
  creator: "Tridip",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tridip.design",
    siteName: "Tridip - Product Designer",
    title: "Tridip - Product Designer",
    description: "Product designer passionate about creating meaningful digital experiences through user-centered design and strategic thinking.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tridip - Product Designer",
    description: "Product designer passionate about creating meaningful digital experiences through user-centered design and strategic thinking.",
    creator: "@tridip1931",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
