import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZiggyHQ — CRM for Small Business | $49/mo",
  description: "ZiggyHQ is the affordable GoHighLevel alternative for small business. Visual pipeline, email sequences, smart lists, and team management — starting at $49/mo. No credit card required.",
  keywords: "small business CRM, GoHighLevel alternative, CRM software, sales pipeline software, contact management, email sequences, CRM for real estate, CRM for contractors",
  openGraph: {
    title: "ZiggyHQ — CRM for Small Business | $49/mo",
    description: "The GoHighLevel alternative built for small business. Powerful CRM without the complexity or $297/mo price tag.",
    siteName: "ZiggyHQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggyHQ — CRM for Small Business | $49/mo",
    description: "The GoHighLevel alternative built for small business. Starting at $49/mo.",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{children}</body>
    </html>
  )
}
