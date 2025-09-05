import Link from "next/link"
import Footer from "@/components/Footer"
import { Github } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white relative pb-24" style={{fontFamily: 'var(--font-space-mono)'}}>
      
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-black">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <Link href="/" className="font-bold text-xl text-white">Quietloop</Link>
        </div>
      </nav>
      
      {/* Content */}
      <main className="px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>
          
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p className="text-lg text-gray-400 mb-6">Last Updated: June 25, 2025</p>
            
            <section className="mb-8">
              <p className="text-gray-300">
                We take the protection of your personal data seriously. This privacy policy explains how we process data when you use our website (quietloop.dev).
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white border-l-4 border-white pl-4">1. Data Controller</h2>
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
              <h2 className="text-2xl font-bold mb-4 text-white border-l-4 border-white pl-4">2. Data Processing on the Website</h2>
              <p className="mb-4">When you visit quietloop.dev:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Server logs:</strong> Your IP address is automatically transmitted when you access the website. This IP address is stored by the hosting provider in standard server logs for security and operational purposes.
                </li>
                <li>
                  <strong>Analytics:</strong> We use privacy-focused analytics to understand how visitors use our site. This data is anonymized and used only for improving the website experience.
                </li>
                <li>
                  <strong>No tracking or advertising cookies</strong> are used on this website.
                </li>
              </ul>
            </section>
            

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white border-l-4 border-white pl-4">3. Purpose and Legal Basis of Data Processing</h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Server logs:</strong> Necessary for security and proper operation of the website (Art. 6(1)(f) GDPR – legitimate interest).
                </li>
                <li>
                  <strong>Analytics data:</strong> Used to improve website functionality and user experience (Art. 6(1)(f) GDPR – legitimate interest).
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white border-l-4 border-white pl-4">4. Data Storage and Third-Party Services</h2>
              <p className="mb-4">We do not share personal data with third parties, except where necessary to provide our services or as required by law. Our service providers include:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Hosting Provider:</strong> Website hosting and server log storage for security and operational purposes.
                </li>
                <li>
                  <strong>Analytics Provider:</strong> Privacy-focused analytics service to understand website usage patterns.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white border-l-4 border-white pl-4">5. Data Security</h2>
              <p>
                All data transmissions between your browser and our servers are encrypted using HTTPS (TLS encryption) to protect your information during transit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white border-l-4 border-white pl-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Request information about any personal data we may have stored.</li>
                <li>Request correction of your data.</li>
                <li>Request the deletion of any personal data by contacting us at contact@quietloop.dev.</li>
                <li>Withdraw your consent at any time, where applicable.</li>
                <li>File a complaint with the competent supervisory authority.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white border-l-4 border-white pl-4">7. Contact</h2>
              <p>
                If you have questions about privacy or data protection, you can contact:<br />
                contact@quietloop.dev
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
