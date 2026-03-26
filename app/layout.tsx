import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZiggyHQ — The CRM That Works While You Sleep",
  description: "AI-powered CRM for real estate agents. New leads get called in 2 minutes — automatically. Built for closers.",
  openGraph: {
    title: "ZiggyHQ — The CRM That Works While You Sleep",
    description: "AI-powered CRM for real estate agents. New leads get called in 2 minutes — automatically.",
    siteName: "ZiggyHQ",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
