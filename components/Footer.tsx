import Link from "next/link"

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 border-t border-grey/50 bg-background/80 backdrop-blur-sm text-foreground">
      <div className="px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bold text-sm uppercase tracking-wider text-text-muted">
            © 2025–{new Date().getFullYear()} QUIETLOOP.DEV
          </div>
          <div className="flex items-center gap-6 text-sm font-bold uppercase">
            <Link href="/privacy" className="hover:bg-primary hover:text-background px-2 py-1 border-2 border-transparent hover:border-primary transition-all">
              PRIVACY
            </Link>
            <Link href="/legal" className="hover:bg-primary hover:text-background px-2 py-1 border-2 border-transparent hover:border-primary transition-all">
              LEGAL
            </Link>
            <a href="https://x.com/jonathan_builds" target="_blank" rel="noopener noreferrer" className="hover:bg-primary hover:text-background px-2 py-1 border-2 border-transparent hover:border-primary transition-all">
              X<span className="relative -top-1">↗</span>
            </a>
            <a href="https://github.com/jonathanglasmeyer" target="_blank" rel="noopener noreferrer" className="hover:bg-primary hover:text-background px-2 py-1 border-2 border-transparent hover:border-primary transition-all">
              GITHUB<span className="relative -top-1">↗</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
