"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Zap,
  Heart,
  Chrome,
  Github,
  Terminal,
  Code,
  Cpu,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground relative flex flex-col"
    >
      {/* Custom Cursor - disabled */}

      {/* ───────────────── MINIMAL NAV ───────────────── */}
      <nav className="sticky top-0 z-50 border-b border-grey/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-8 py-6 relative">
          {/* Infinity positioned to align horizontally with Hey */}
          <div className="absolute left-8 lg:left-0 top-1/2 transform -translate-y-1/2 overflow-visible">
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              className="infinity-path overflow-visible"
            >
              <defs>
                <path
                  id="infinity-path"
                  d="M4,8 C4,4 6,2 8,2 C10,2 12,4 16,8 C20,4 22,2 24,2 C26,2 28,4 28,8 C28,12 26,14 24,14 C22,14 20,12 16,8 C12,12 10,14 8,14 C6,14 4,12 4,8 Z"
                />

                <radialGradient id="movingGlow" cx="50%" cy="50%" r="30%">
                  <stop offset="0%" stopColor="rgba(200,162,216,0.7)" />
                  <stop offset="60%" stopColor="rgba(216,191,216,0.3)" />
                  <stop offset="100%" stopColor="rgba(216,191,216,0)" />
                </radialGradient>
              </defs>

              {/* Base path */}
              <path
                d="M4,8 C4,4 6,2 8,2 C10,2 12,4 16,8 C20,4 22,2 24,2 C26,2 28,4 28,8 C28,12 26,14 24,14 C22,14 20,12 16,8 C12,12 10,14 8,14 C6,14 4,12 4,8 Z"
                fill="none"
                stroke="rgba(184,159,216,0.5)"
                strokeWidth="1.5"
              />

              {/* Subtle purple moving glow */}
              <circle r="5" fill="url(#movingGlow)" opacity="0.7">
                <animateMotion dur="25s" repeatCount="indefinite">
                  <mpath href="#infinity-path" />
                </animateMotion>
              </circle>
            </svg>
          </div>

          <span className="font-bold text-xl text-foreground ml-10 lg:ml-4">Quietloop</span>
        </div>
      </nav>

      {/* Main content that grows to fill space */}
      <div className="flex-1 flex flex-col">
        {/* ───────────────── PROFESSIONAL HERO ───────────────── */}
        <section className="px-8 py-12 pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Conversational Intro */}
            <div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                Hey, I'm Jonathan.
              </p>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
                I'm a Senior PM at{" "}
                <a
                  href="https://moia.io/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary-hover hover:underline underline-offset-4 transition-colors"
                >
                  MOIA
                </a>
                . I also love hacking on things. See some stuff I've built below.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────── GITHUB PROJECTS ───────────────── */}
        <section id="projects" className="px-8 pt-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FluidVoice */}
              <a
                href="https://github.com/jonathanglasmeyer/FluidVoice"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-grey p-6 hover:border-primary-deep hover:bg-pale-lavender/40 transition-all cursor-pointer rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-foreground">FluidVoice</h3>
                  <Github className="h-4 w-4 text-text-muted ml-auto" />
                </div>
                <p className="text-base md:text-lg text-text-secondary mb-4">
                  A lightweight macOS menu bar app for quick on-device audio transcription using Parakeet v3 Multilingual. Press a hotkey, record your thoughts, and get instant text that's automatically inserted in your active app.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Swift
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    macOS
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    AI
                  </span>
                </div>
              </a>

              {/* Knowledge Vector Search */}
              <a
                href="https://github.com/jonathanglasmeyer/knowledge-vector-search"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-grey p-6 hover:border-primary-deep hover:bg-pale-lavender/40 transition-all cursor-pointer rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    Knowledge Vector Search
                  </h3>
                  <Github className="h-4 w-4 text-text-muted ml-auto" />
                </div>
                <p className="text-base md:text-lg text-text-secondary mb-4">
                  Find relevant information in your documents using natural language queries - no more keyword matching or manual browsing through hundreds of files.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Vector Search
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    ML
                  </span>
                </div>
              </a>

              {/* Claude Obsidian Server */}
              <a
                href="https://github.com/jonathanglasmeyer/claude-obsidian-server"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-grey p-6 hover:border-primary-deep hover:bg-pale-lavender/40 transition-all cursor-pointer rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    Claude Obsidian Server
                  </h3>
                  <Github className="h-4 w-4 text-text-muted ml-auto" />
                </div>
                <p className="text-base md:text-lg text-text-secondary mb-4">
                  Discord bot providing mobile access to Claude Code within an Obsidian vault
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Node.js
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Discord
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Docker
                  </span>
                </div>
              </a>

              {/* News Aggregator */}
              <a
                href="https://github.com/jonathanglasmeyer/news-aggregator"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-grey p-6 hover:border-primary-deep hover:bg-pale-lavender/40 transition-all cursor-pointer rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    News Aggregator
                  </h3>
                  <Github className="h-4 w-4 text-text-muted ml-auto" />
                </div>
                <p className="text-base md:text-lg text-text-secondary mb-4">
                  Automated daily news digest system that fetches German/international news feeds, filters content using Claude AI, and delivers curated summaries to Discord.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    Claude AI
                  </span>
                  <span className="text-xs bg-primary/20 text-foreground px-2 py-1 rounded">
                    GitHub Actions
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

/* ——————————————————————————————————————————————————————————— */
/* Helper components */

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-16">
      <h2 className="fade-in-on-scroll font-serif text-section font-bold mb-4 text-text-primary">
        {title}
      </h2>
      <div className="h-px w-20 bg-primary-vibrant shadow-sm" />
    </div>
  );
}

function Benefit({
  icon: Icon,
  title,
  children,
  bordered,
  iconColor = "primary",
}: {
  icon: typeof Sparkles;
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
  iconColor?: string;
}) {
  const iconColorClass =
    iconColor === "apricot" ? "text-apricot" : "text-primary";

  return (
    <div
      className={`fade-in-on-scroll text-center ${bordered ? "md:border-x md:px-8 border-grey" : ""}`}
    >
      <Icon className={`mx-auto mb-6 h-8 w-8 stroke-1 ${iconColorClass}`} />
      <h3 className="mb-4 font-serif text-xl font-bold text-text-primary">
        {title}
      </h3>
      <p className="text-body text-text-secondary">{children}</p>
    </div>
  );
}

function ProductCard({
  icon: Icon,
  title,
  description,
  placeholder,
  accentColor = "primary",
  link,
}: {
  icon: typeof Sparkles;
  title: string;
  description: string;
  placeholder: string;
  accentColor?: string;
  link?: string;
}) {
  return (
    <div className="card-container">
      <style jsx>{`
        .card-container :global(.card) {
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .card-container:hover :global(.card) {
          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.12),
            0 0 8px 2px rgba(124, 58, 237, 0.08);
        }

        .card-container :global(.glowy-button) {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .card-container:hover :global(.glowy-button) {
          box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.08),
            0 0 6px 1px rgba(124, 58, 237, 0.1);
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
            <h3 className="font-serif text-xl font-bold text-text-primary">
              {title}
            </h3>
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
  );
}
