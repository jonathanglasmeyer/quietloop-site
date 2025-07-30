"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import HeroBlobs from "../components/HeroBlobs"
import { Sparkles, Zap, Heart, Chrome, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"

// Custom animations werden in globals.css definiert

export default function HomePage() {
  // ——— fade-in on scroll for section content ———
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll(".fade-in-on-scroll").forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div
     className="min-h-screen bg-gray-50/90 text-foreground font-sans relative overflow-hidden pb-24">
      {/* Background blobs for the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBlobs />
      </div>
      
      {/* Subtiler Farbverlauf über die Hauptinhaltsbereiche */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#D1CFFF]/10 via-transparent to-[#FFE5DC]/15" />
      
      {/* ───────────────── Sticky Nav ───────────────── */}
      <nav className="sticky top-0 z-50 bg-background/65 backdrop-blur border-b border-grey/30">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 pl-4 lg:pl-0 py-4">
          <span className="font-serif font-bold text-xl">Quietloop</span>

         
        </div>
      </nav>

      {/* ───────────────── Hero with About Me ───────────────── */}
      <section className="relative z-10 px-6 py-24 pb-16 overflow-visible">

        {/* hero copy */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center gap-6 mb-8 fade-in-on-scroll">
              
              
              <h1 className="font-serif text-2xl md:text-4xl font-bold text-text-primary drop-shadow-sm">
                Hey, I'm Jonathan.
              </h1>
            </div>
            
              <p className="text-lg md:text-xl text-foreground/70 mt-4 leading-relaxed">
                I have a soft spot for well-crafted, carefully made apps.<br></br>You'll find all my work here.
              </p>
              
              <a href="#products">
               
              </a>
            </div>
          </div>

      </section>

    

      {/* ───────────────── Things I've Built ───────────────── */}
      <section id="products" className="px-6 pb-20 pt-0 relative overflow-hidden">

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2  relative z-10 items-start">
          <ProductCard
            icon={Chrome}
            title="AI Analysis for Lichess"
            description="Chrome extension delivering intelligent chess insights and post-game analysis."
            placeholder="Extension Screenshot"
            accentColor="primary-vibrant"
            link="https://chromewebstore.google.com/detail/ai-analysis-for-lichess/jempiiikmmcmijljkmhjhlmdblghmche?authuser=0&hl=en"
          />
         
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}

/* ——————————————————————————————————————————————————————————— */
/* Helper components */

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-16">
      <h2 className="fade-in-on-scroll font-serif text-section font-bold mb-4 text-text-primary">{title}</h2>
      <div className="h-px w-20 bg-primary-vibrant shadow-sm" />
    </div>
  )
}

function Benefit({
  icon: Icon,
  title,
  children,
  bordered,
  iconColor = "primary",
}: {
  icon: typeof Sparkles
  title: string
  children: React.ReactNode
  bordered?: boolean
  iconColor?: string
}) {
  const iconColorClass = iconColor === "apricot" ? "text-apricot" : "text-primary"

  return (
    <div className={`fade-in-on-scroll text-center ${bordered ? "md:border-x md:px-8 border-grey" : ""}`}>
      <Icon className={`mx-auto mb-6 h-8 w-8 stroke-1 ${iconColorClass}`} />
      <h3 className="mb-4 font-serif text-xl font-bold text-text-primary">{title}</h3>
      <p className="text-body text-text-secondary">{children}</p>
    </div>
  )
}

function ProductCard({
  icon: Icon,
  title,
  description,
  placeholder,
  accentColor = "primary",
  link,
}: {
  icon: typeof Sparkles
  title: string
  description: string
  placeholder: string
  accentColor?: string
  link?: string
}) {
  return (
    <div className="card-container">
      <style jsx>{`
        .card-container :global(.card) {
          box-shadow: 0 2px 5px rgba(0,0,0,0.06);
          transition: box-shadow 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .card-container:hover :global(.card) {
          box-shadow: 0 8px 20px rgba(0,0,0,0.12), 0 0 8px 2px rgba(124,58,237,0.08);
        }
        
        .card-container :global(.glowy-button) {
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .card-container:hover :global(.glowy-button) {
          box-shadow: 0 4px 8px rgba(0,0,0,0.08), 0 0 6px 1px rgba(124,58,237,0.1);
          transform: scale(1.02);
        }
      `}</style>
      <Card className="card fade-in-on-scroll border-0 bg-white/95 backdrop-blur-sm hover:bg-white/98 hover:ring-2 hover:ring-primary/10 group relative overflow-hidden">
        <CardContent className="p-8">
          <div className="mb-4 flex items-center gap-3">
            <div
              className={`h-10 w-10 rounded-lg bg-${accentColor}/10 flex items-center justify-center group-hover:bg-${accentColor}/30 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3`}
            >
              <Icon className="h-5 w-5 stroke-1 text-text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-text-primary">{title}</h3>
          </div>
          <p className="mb-6 text-body text-text-secondary">{description}</p>
          
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button className="glowy-button mt-8 rounded-full px-6" size="lg">
                Try it out
              </Button>
            </a>
          ) : (
            <Button className="glowy-button mt-8 rounded-full px-6" size="lg">
              Try it out
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
