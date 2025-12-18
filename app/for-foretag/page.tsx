import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'För företag',
  description:
    'Rookie är specialiserade på unga talanger. Vi har ett starkt nätverk av kvalitetssäkrade unga människor. Oavsett om ditt företag är i behov av hyrrekrytering, konsult eller rekrytering av en framtida kollega så är vi partnern för dig.',
  alternates: {
    canonical: '/for-foretag',
  },
  openGraph: {
    url: '/for-foretag',
    title: 'För företag - Rookie',
    description: 'Vi har ett starkt nätverk av kvalitetssäkrade unga talanger mellan 18-28 år.',
  },
  twitter: {
    title: 'För företag - Rookie',
    description: 'Vi har ett starkt nätverk av kvalitetssäkrade unga talanger mellan 18-28 år.',
  },
}

export default function ForForetagPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="För företag"
          description="Rookie är specialiserade på unga talanger. Vi har ett starkt nätverk av kvalitetssäkrade unga människor mellan 18-28 år."
          showButton
          buttonText="Hitta personal"
          buttonHref="/kontakt"
        />
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="prose prose-lg max-w-none">
              <h2>Vad Rookie erbjuder arbetsgivare</h2>
              <p>
                Rookie är specialiserade på unga talanger. Vi har ett starkt nätverk av
                kvalitetssäkrade unga människor. Oavsett om ditt företag är i behov av
                hyrrekrytering, konsult eller rekrytering av en framtida kollega så är vi partnern
                för dig.
              </p>

              <h3>Unga talanger</h3>
              <p>
                Med Rookie så får du fokus. Vi rekryterar inte alla typer av kandidater utan vår
                laserfokus på unga innebär att du får de bästa inom just den kravprofilen.
              </p>

              <h3>Hitta rätt kollegor</h3>
              <p>
                Vi har en tydligt segmenterad och kvalitétssäkrad talangpool som gör att vi lättare
                hittar helt rätt person för er organisation.
              </p>

              <h3>Snabbt och smidigt</h3>
              <p>
                Med 20 års erfarenhet av rekrytering vet vi att hastighet är viktigt för att inte
                tappa toppkandidater. Med Rookie får du snabb uppstart och en enkel process utan att
                tappa kvalité.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
