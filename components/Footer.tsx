import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t-4 border-white bg-black text-white">
      <div className="px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bold text-sm uppercase tracking-wider">
            © 2025–{new Date().getFullYear()} QUIETLOOP.DEV
          </div>
          <div className="flex items-center gap-6 text-sm font-bold uppercase">
            <Link href="/privacy" className="hover:bg-white hover:text-black px-2 py-1 border-2 border-transparent hover:border-white transition-all">
              PRIVACY
            </Link>
            <Link href="/terms" className="hover:bg-white hover:text-black px-2 py-1 border-2 border-transparent hover:border-white transition-all">
              TERMS
            </Link>
            <Link href="/legal" className="hover:bg-white hover:text-black px-2 py-1 border-2 border-transparent hover:border-white transition-all">
              LEGAL
            </Link>
            <a href="mailto:contact@quietloop.dev" className="hover:bg-white hover:text-black px-2 py-1 border-2 border-transparent hover:border-white transition-all">
              CONTACT
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
