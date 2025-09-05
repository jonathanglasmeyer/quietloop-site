import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono, Fira_Code, Source_Code_Pro, Space_Mono, Ubuntu_Mono, Inconsolata, Roboto_Mono, Anonymous_Pro, Courier_Prime, Noto_Sans_Mono, PT_Mono, Overpass_Mono, Share_Tech_Mono, VT323, Major_Mono_Display, Azeret_Mono, Red_Hat_Mono, Martian_Mono } from "next/font/google"
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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira-code",
})


const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-source-code",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
})

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inconsolata",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
})

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-anonymous-pro",
})

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
})

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-mono",
})

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pt-mono",
})

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-overpass-mono",
})

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech-mono",
})

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
})

const majorMonoDisplay = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-major-mono-display",
})

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-azeret-mono",
})

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-red-hat-mono",
})

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-martian-mono",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${firaCode.variable} ${sourceCode.variable} ${spaceMono.variable} ${ubuntuMono.variable} ${inconsolata.variable} ${robotoMono.variable} ${anonymousPro.variable} ${courierPrime.variable} ${notoSansMono.variable} ${ptMono.variable} ${overpassMono.variable} ${shareTechMono.variable} ${vt323.variable} ${majorMonoDisplay.variable} ${azeretMono.variable} ${redHatMono.variable} ${martianMono.variable}`}>
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
