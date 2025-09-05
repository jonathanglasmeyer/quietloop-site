"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Sparkles, Zap, Heart, Chrome, Github, Terminal, Code, Cpu } from "lucide-react"
import Footer from "@/components/Footer"

export default function HomePage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    setIsLoaded(true)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative pb-24" style={{fontFamily: 'var(--font-space-mono)'}}>
      
      {/* Custom Cursor - disabled */}

      
      {/* ───────────────── MINIMAL NAV ───────────────── */}
      <nav className="border-b border-white/20 bg-black">
        <div className="max-w-4xl mx-auto px-8 py-6 relative">
          
          {/* Infinity positioned to align horizontally with Hey */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 overflow-visible">
            <svg width="32" height="16" viewBox="0 0 32 16" className="infinity-path overflow-visible">
              <defs>
                <path id="infinity-path" d="M4,8 C4,4 6,2 8,2 C10,2 12,4 16,8 C20,4 22,2 24,2 C26,2 28,4 28,8 C28,12 26,14 24,14 C22,14 20,12 16,8 C12,12 10,14 8,14 C6,14 4,12 4,8 Z"/>
                
                <radialGradient id="movingGlow" cx="50%" cy="50%" r="30%">
                  <stop offset="0%" stopColor="rgba(220,220,220,0.7)"/>
                  <stop offset="60%" stopColor="rgba(180,180,180,0.3)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                </radialGradient>
              </defs>
              
              {/* Base path */}
              <path 
                d="M4,8 C4,4 6,2 8,2 C10,2 12,4 16,8 C20,4 22,2 24,2 C26,2 28,4 28,8 C28,12 26,14 24,14 C22,14 20,12 16,8 C12,12 10,14 8,14 C6,14 4,12 4,8 Z" 
                fill="none" 
                stroke="rgba(255,255,255,0.4)" 
                strokeWidth="1"
              />
              
              {/* Subtle gray moving glow */}
              <circle r="3" fill="url(#movingGlow)" opacity="0.7">
                <animateMotion dur="25s" repeatCount="indefinite">
                  <mpath href="#infinity-path"/>
                </animateMotion>
              </circle>
            </svg>
          </div>
          
          <span className="font-bold text-xl text-white ml-4">Quietloop</span>
        </div>
      </nav>

      {/* ───────────────── PROFESSIONAL HERO ───────────────── */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Conversational Intro */}
          <div className="mb-16">
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-4">
              Hey, I'm Jonathan.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Senior PM at MOIA by day, building AI-native tools by night.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I spend most of my time thinking about how to make software that actually helps people get things done. 
              Currently working on some small tools and experiments that I'll share here when they're ready.
            </p>
          </div>
          
        </div>
      </section>

      {/* ───────────────── PROJECTS ───────────────── */}
      <section id="products" className="px-8 pb-20 border-t border-white/10 pt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>
          <div className="border border-white/20 p-8">
            <p className="text-lg text-gray-300">New projects launching soon.</p>
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
