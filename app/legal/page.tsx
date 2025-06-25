import Link from "next/link"
import { Github } from "lucide-react"

export default function LegalPage() {
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
          <h1 className="text-3xl font-serif font-bold mb-8">Legal Notice</h1>
          
          <div className="prose prose-slate">
            <p className="text-lg text-gray-600 mb-6">Last Updated: June 25, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Information According to § 5 TMG</h2>
              <p>
                Jonathan Glasmeyer<br />
                Redder 4<br />
                25421 Pinneberg<br />
                Germany
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Contact</h2>
              <p>
                Email: contact@quietloop.com<br />
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Responsible for Content (§ 55 Abs. 2 RStV)</h2>
              <p>
                Jonathan Glasmeyer<br />
                Redder 4<br />
                25421 Pinneberg<br />
                Germany
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (OS): 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p className="mt-4">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Liability for Content</h2>
              <p className="mb-4">
                As a service provider, we are responsible for our own content on these pages according to § 7 paragraph 1 TMG under general laws. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
              <p>
                Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Liability for Links</h2>
              <p>
                Our website contains links to external websites over which we have no control. Therefore, we cannot accept any responsibility for their content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
              </p>
              <p className="mt-4">
                However, permanent monitoring of the content of the linked pages is not reasonable without concrete indications of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-medium mb-4">Copyright</h2>
              <p>
                The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are permitted for private, non-commercial use only.
              </p>
              <p className="mt-4">
                Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
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
