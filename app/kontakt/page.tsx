import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakta Rookie så berättar vi gärna mer om hur vi matchar unga talanger med rätt företag. Ring oss på 010 129 60 00 eller maila info@rookiework.se',
  alternates: {
    canonical: '/kontakt',
  },
  openGraph: {
    url: '/kontakt',
    title: 'Kontakt - Rookie',
    description:
      'Kontakta Rookie så berättar vi gärna mer om hur vi matchar unga talanger med rätt företag.',
  },
  twitter: {
    title: 'Kontakt - Rookie',
    description:
      'Kontakta Rookie så berättar vi gärna mer om hur vi matchar unga talanger med rätt företag.',
  },
}

export default function KontaktPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="Kontakt"
          description="Kontakta oss så berättar vi gärna mer om hur vi matchar unga talanger med rätt företag."
        />
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="prose prose-lg">
                <h2>Kan vi hjälpa dig?</h2>
                <p>
                  Kontakta oss så berättar vi gärna mer om hur vi matchar unga talanger med rätt
                  företag.
                </p>

                <h3>Kontaktuppgifter</h3>
                <div className="not-prose space-y-4">
                  <div>
                    <h4 className="font-semibold">Adress</h4>
                    <p className="text-muted-foreground">
                      Drottninggatan 32, 8tr
                      <br />
                      111 51 Stockholm
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">E-post</h4>
                    <a
                      href="mailto:info@rookiework.se"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@rookiework.se
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <a
                      href="tel:+4610129600"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      010 129 60 00
                    </a>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg">
                <p>Kontaktformulär kommer snart...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
