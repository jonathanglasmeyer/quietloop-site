import Link from "next/link"
import Footer from "@/components/Footer"
import { Github } from "lucide-react"

export default function TermsPage() {
  const lastUpdated = "June 27, 2025";

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
          <h1 className="text-3xl font-serif font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate">
            <p className="text-lg text-gray-600 mb-6">Last Updated: {lastUpdated}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Product Covered</h2>
              <p>
                These Terms apply exclusively to the browser extension “AI Analysis for Lichess” and the related backend services operated by Quietloop. They do not govern any other software, consulting, or portfolio projects presented on quietloop.dev.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">1. Scope</h2>
              <p>
                These Terms govern the purchase and use of digital analysis credits (“Analyses”) provided through the AI Analysis for Lichess browser extension and its backend (collectively “Service”). By purchasing or using the Service you accept these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">2. Provider</h2>
              <p>
                Quietloop – Jonathan Glasmeyer<br />
                Redder 4, 25421 Pinneberg, Germany<br />
                E-mail: contact@quietloop.dev
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">3. Service Description</h2>
              <p>
                Each Analysis applies AI models to a Lichess PGN and returns natural-language feedback.
              </p>
              <p>
                Credits are delivered automatically to the user account immediately after successful payment and can be consumed at any time.
              </p>
              <p>
                The Extension requires an existing Lichess.org account but is otherwise independent of Lichess.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">4. Prices & Payment</h2>
              <p>
                Prices are shown in EUR and include applicable VAT.
              </p>
              <p>
                Payments are processed exclusively by Stripe, Inc. We never see or store your full payment data.
              </p>
              <p>
                A purchase constitutes a binding contract once Stripe confirms payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">5. Right of Withdrawal (Digital Content)</h2>
              <p>
                Because the Analyses are digital content delivered immediately after purchase, you expressly consent to the immediate execution of the contract and acknowledge that your statutory 14-day right of withdrawal expires at the moment the first credit is provided (§ 356 Abs. 5 BGB).
              </p>
              <p>
                By clicking the “Pay” button in Stripe Checkout you give this consent and waive your right of withdrawal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">6. Licence & Acceptable Use</h2>
              <p>
                We grant you a non-exclusive, non-transferable licence to use the Analysis texts for personal, non-commercial study and commentary.
              </p>
              <p>
                Resale, automated scraping or public redistribution of analyses is prohibited without prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">7. Availability & Support</h2>
              <p>
                The Service is provided with commercially reasonable uptime but no specific availability guarantee. Support requests can be sent to contact@quietloop.dev.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">8. Limitation of Liability</h2>
              <p>
                We are liable without limitation for intent and gross negligence.
              </p>
              <p>
                For simple negligence we are liable only for foreseeable damages typical for this type of contract.
              </p>
              <p>
                The Service provides educational insights; we do not guarantee any tournament results or rating improvements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">9. User Data & Privacy</h2>
              <p>
                Processing of personal data is outlined in our <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">Privacy Policy</Link> and forms part of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">10. Changes to the Terms</h2>
              <p>
                We may update these Terms for valid reasons (e.g. legal changes, new features). You will be notified by e-mail or in-app notice. Continued use after the effective date constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">11. Governing Law & Disputes</h2>
              <p>
                These Terms are governed by German law. The EU Commission’s Online Dispute Resolution platform is available at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">ec.europa.eu/consumers/odr</a>. We are neither obliged nor willing to participate in alternative dispute resolution before a consumer arbitration board.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">12. Severability</h2>
              <p>
                If any provision is invalid, the remaining provisions remain in full force.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
