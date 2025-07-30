# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js portfolio website for Quietloop, a solo development studio. The site showcases personal projects and has a minimal, professional design with animated blob backgrounds.

## Commands

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Build for production
- **Start**: `npm run start` - Start production server
- **Lint**: `npm run lint` - Run ESLint

## Architecture & Tech Stack

**Framework**: Next.js 15 with App Router
- Uses TypeScript for type safety
- Server and client components mixed (note "use client" directives)

**Styling**: 
- Tailwind CSS with custom color palette (lavenders, apricots)
- shadcn/ui components for consistent UI elements
- Custom blob animations using Framer Motion

**Key Dependencies**:
- `framer-motion` - Complex animated blob backgrounds
- `@radix-ui/*` - Accessible UI primitives (via shadcn/ui)
- `lucide-react` - Icon library
- `next-themes` - Theme management support

## Code Structure

**App Directory (`/app`)**:
- `layout.tsx` - Root layout with Google Fonts (Inter, Playfair Display)
- `page.tsx` - Main homepage with hero section and product showcase
- Route-based pages: `/contact`, `/legal`, `/privacy`, `/terms`

**Components (`/components`)**:
- `HeroBlobs.tsx` - Complex animated background with 6 morphing SVG blobs
- `Footer.tsx` - Site footer component
- `ui/` - shadcn/ui component library
- `theme-provider.tsx` - Theme context provider

**Key Features**:
- **Performance-aware animations**: HeroBlobs detects desktop vs mobile and `prefers-reduced-motion`
- **Accessibility**: Uses proper ARIA attributes, respects motion preferences
- **Responsive design**: Mobile-first approach with desktop enhancements

## Development Notes

**Build Configuration**:
- ESLint and TypeScript errors ignored during builds (`next.config.mjs`)
- Images unoptimized for static deployment
- Tailwind configured with custom design tokens

**Animation System**:
- Desktop-only blob movement animations (mobile shows static blobs)
- Uses `will-change: transform` and `translate3d(0,0,0)` for GPU acceleration
- Individual blob animations with varying durations (20-35s cycles)

**Styling Conventions**:
- Custom color palette defined in `tailwind.config.ts`
- Uses CSS custom properties for shadcn/ui integration
- Serif fonts (Playfair Display) for headings, Inter for body text

**Performance Considerations**:
- Blob animations conditionally rendered based on device capabilities
- Static positioning on mobile to reduce CPU usage