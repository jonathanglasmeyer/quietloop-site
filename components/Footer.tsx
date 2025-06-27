import Link from "next/link"

export default function Footer() {
  return (
    <footer className="px-6 py-6 bg-background/45 backdrop-blur border-t border-grey fixed bottom-0 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm text-foreground/60">© {new Date().getFullYear()} Quietloop</span>
        <div className="flex items-center gap-8">
          <Link href="/privacy" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/legal" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Legal Notice
          </Link>
          <a href="mailto:contact@quietloop.dev" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
