import Link from "next/link"
import Footer from "@/components/Footer"
import { Github } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative pb-24">

      {/* Navigation */}
      <nav className="border-b border-grey/50 bg-background">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <Link href="/" className="font-bold text-xl text-foreground">Quietloop</Link>
        </div>
      </nav>

      {/* Content */}
      <main className="px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Legal Notice</h1>

          <div className="text-text-secondary leading-relaxed space-y-6">
            <p className="text-lg text-text-muted mb-6">Last Updated: June 25, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">Information According to § 5 TMG</h2>
              <p>
                Jonathan Glasmeyer<br />
                Redder 4<br />
                25421 Pinneberg<br />
                Germany
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">Contact</h2>
              <p>
                Email: contact@quietloop.dev<br />
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">Responsible for Content (§ 55 Abs. 2 RStV)</h2>
              <p>
                Jonathan Glasmeyer<br />
                Redder 4<br />
                25421 Pinneberg<br />
                Germany
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">Dispute Resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (OS): 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-foreground underline-offset-4 hover:underline hover:text-primary-hover">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p className="mt-4">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">Liability for Content</h2>
              <p className="mb-4">
                As a service provider, we are responsible for our own content on these pages according to § 7 paragraph 1 TMG under general laws. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
              <p>
                Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">Liability for Links</h2>
              <p>
                Our website contains links to external websites over which we have no control. Therefore, we cannot accept any responsibility for their content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
              </p>
              <p className="mt-4">
                However, permanent monitoring of the content of the linked pages is not reasonable without concrete indications of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground border-l-4 border-primary pl-4">Copyright</h2>
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

      <Footer />
    </div>
  )
}
