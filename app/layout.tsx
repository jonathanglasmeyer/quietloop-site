import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Quietloop",
  description: "Solo studio shipping small, human-centered tools with thoughtful UX",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          src="https://cdn.databuddy.cc/databuddy.js"
          data-client-id="L7QNcbum2IVpr4iiWpBqK"
          data-track-outgoing-links="true"
          data-track-engagement="true"
          data-track-scroll-depth="true"
          data-track-exit-intent="true"
          data-track-bounce-rate="true"
          data-track-web-vitals="true"
          data-track-errors="true"
          data-enable-batching="true"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body className="font-sans bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
