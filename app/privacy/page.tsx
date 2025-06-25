import Link from "next/link"
import { Github } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50/90 text-foreground font-sans relative overflow-hidden pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#D1CFFF]/10 via-transparent to-[#FFE5DC]/15" />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/65 backdrop-blur border-b border-grey/30">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif font-bold text-xl">Quietloop</Link>
        </div>
      </nav>
      
      {/* Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-serif font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate">
            <p className="text-lg text-gray-600 mb-6">Last Updated: June 25, 2025</p>
            
            <section className="mb-8">
      
              <p>
                We take the protection of your personal data seriously. This privacy policy explains how we process data when you use our website (quietloop.dev) and the Chrome Extension "AI Analysis for Lichess."
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">1. Data Controller</h2>
              <p>
                Jonathan Glasmeyer<br />
                Redder 4<br />
                25421 Pinneberg<br />
                Germany
                <br />
                Email: contact@quietloop.dev
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">2. Data Processing on the Website</h2>
              <p className="mb-4">When you visit quietloop.dev:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Server logs:</strong> The IP address of your device is automatically transmitted when you access the website. This IP address is stored by the hosting provider in standard server logs for security purposes. No further processing or tracking takes place.
                </li>
                <li>
                  <strong>No cookies, analytics, or tracking tools</strong> are used on this website.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">3. Data Processing in the Chrome Extension "AI Analysis for Lichess"</h2>
              <p className="mb-4">When using the Chrome Extension:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Lichess Game Data:</strong> The extension sends your Lichess game data to our server to generate AI-based analysis. Game data does not contain personal data.
                </li>
                <li>
                  <strong>IP Address:</strong> Your IP address is technically necessary to process the request and is automatically transmitted to our server. However, the IP address is immediately hashed using the SHA-256 algorithm and stored in hashed form only. This hash cannot be reasonably linked back to you.
                </li>
                <li>
                  <strong>Google Login:</strong> You can optionally log in via Google to access additional features. In this case, we store your Google account email address to identify your user account and facilitate payments via Stripe. No further personal data is collected.
                </li>
                <li>
                  <strong>No tracking or advertising</strong> is used within the extension.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">4. Purpose and Legal Basis of Data Processing</h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Processing game data and hashed IP addresses:</strong> Necessary to fulfill the core functionality of the extension (Art. 6(1)(b) GDPR – performance of a contract).
                </li>
                <li>
                  <strong>Processing your email address (Google login):</strong> Necessary to manage your user account and process payments (Art. 6(1)(b) GDPR – performance of a contract).
                </li>
                <li>
                  <strong>Server logs on the website:</strong> Necessary for security and proper operation of the website (Art. 6(1)(f) GDPR – legitimate interest).
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">5. Data Storage</h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Server logs and hashed IP addresses are stored for security purposes and to prevent misuse. The hashes cannot be reasonably linked back to individuals.
                </li>
                <li>
                  Email addresses provided via Google login are stored until the user account is deleted.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">6. No Data Sharing</h2>
              <p>
                We do not share personal data with third parties, except as required to process payments via Stripe.
              </p>
              To process payments, we use the service provider Stripe, Inc., based in the United States. 
              As a result, your email address may be transmitted to a third country outside the European Economic Area (EEA).
              Stripe ensures compliance with European data protection standards through the use of EU Standard Contractual Clauses pursuant to Art. 46 GDPR. 
              You can find more information in <a href="https://stripe.com/privacy" className="text-primary underline-offset-4 hover:underline">Stripe’s Privacy Policy</a>.
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Request information about your stored personal data.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Withdraw your consent at any time, where applicable.</li>
                <li>File a complaint with the competent supervisory authority.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">8. Contact</h2>
              <p>
                If you have questions about privacy or data protection, you can contact:<br />
                contact@quietloop.dev
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 bg-background/45 backdrop-blur border-t border-grey fixed bottom-0 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm text-foreground/60">© {new Date().getFullYear()} Quietloop</span>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/legal" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Legal Notice
            </Link>
            <a href="mailto:contact@quietloop.com" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="https://github.com/quietloop" className="text-foreground/60 hover:text-foreground transition-colors" aria-label="Github">
              <Github className="h-5 w-5 stroke-1" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
