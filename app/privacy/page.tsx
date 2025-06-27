import Link from "next/link"
import Footer from "@/components/Footer"
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
              <p className="mb-4">When using the Chrome Extension, we process the following data:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Lichess Game Data:</strong> The extension sends your Lichess game data to our server to generate AI-based analysis. This data does not contain personal information.
                </li>
                <li>
                  <strong>IP Address:</strong> Your IP address is technically necessary to process your request and is automatically transmitted to our server. We immediately hash it using the SHA-256 algorithm and store only the hashed form. This hash cannot be reasonably used to identify you.
                </li>
                <li>
                  <strong>No tracking or advertising</strong> is used within the extension.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">4. Authentication and User Account (Google Sign-In)</h2>
              <p className="mb-4">To provide a personalized and secure experience, our extension uses Google's OAuth 2.0 service for user authentication. This is an optional feature to access additional services like analysis credits.</p>

              <h3 className="text-xl font-serif font-medium mt-6 mb-3">4.1. Authentication Process</h3>
              <p>When you choose to sign in, you will be directed to Google's secure login page. This process ensures that your Google credentials (like your password) are never shared with our extension or our servers.</p>

              <h3 className="text-xl font-serif font-medium mt-6 mb-3">4.2. Data We Receive from Google</h3>
              <p>Upon successful authentication, Google provides us with a limited set of your profile information. This includes:</p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>Your primary email address</li>
              </ul>
              <p>We do not receive access to your Google password or any other personal data from your Google account beyond what is listed above.</p>

              <h3 className="text-xl font-serif font-medium mt-6 mb-3">4.3. How We Use Your Data</h3>
              <p>The information we receive from Google is used exclusively for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>To create and manage your user account within our service.</li>
                <li>To associate your usage of the service (e.g., analysis credits) with your account.</li>
              </ul>

              <h3 className="text-xl font-serif font-medium mt-6 mb-3">4.4. Secure Token Management</h3>
              <p>After you sign in, our authentication provider, Supabase, generates secure access and refresh tokens. These tokens are stored securely within your browser's local extension storage (<code>chrome.storage.local</code>). They are used solely to authenticate your requests to our servers and are never shared with any other third parties.</p>

              <h3 className="text-xl font-serif font-medium mt-6 mb-3">4.5. User Control and Revoking Access</h3>
              <p>You have full control over the permissions you grant to our application. You can review and revoke our extension's access to your Google account at any time through your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">Google Account security settings</a>.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">5. Purpose and Legal Basis of Data Processing</h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Processing game data and hashed IP addresses:</strong> Necessary to fulfill the core functionality of the extension (Art. 6(1)(b) GDPR – performance of a contract).
                </li>
                <li>
                  <strong>Processing your account data (Google login):</strong> Necessary to create and manage your user account and associate service usage (Art. 6(1)(b) GDPR – performance of a contract).
                </li>
                <li>
                  <strong>Server logs on the website:</strong> Necessary for security and proper operation of the website (Art. 6(1)(f) GDPR – legitimate interest).
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">6. Data Storage and Third-Party Services</h2>
              <p className="mb-4">We do not share personal data with third parties, except where necessary to provide our services or as required by law. Your account data (email) is stored until you delete your account. Our service providers include:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Supabase:</strong> We use Supabase as our backend and authentication service provider. Supabase handles the secure verification of your Google identity and the management of your user session. For more information, please refer to the <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">Supabase Privacy Policy</a>.
                </li>
                <li>
                  <strong>Stripe:</strong> To process payments, we use the service provider Stripe, Inc. As a result, your email address may be transmitted to a third country outside the European Economic Area (EEA). Stripe ensures compliance with European data protection standards through the use of EU Standard Contractual Clauses. You can find more information in <a href="https://stripe.com/privacy" className="text-primary underline-offset-4 hover:underline">Stripe’s Privacy Policy</a>.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">7. Data Security</h2>
              <p>
                All data transmissions between the Chrome Extension, our servers, and third-party providers (such as Stripe and Supabase) are encrypted using HTTPS (TLS encryption).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">8. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Request information about your stored personal data.</li>
                <li>Request correction of your data.</li>
                <li>Request the deletion of your account and all associated personal data by contacting us at contact@quietloop.dev. Your data will be permanently deleted without undue delay.</li>
                <li>Withdraw your consent at any time, where applicable.</li>
                <li>File a complaint with the competent supervisory authority.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">9. Contact</h2>
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
