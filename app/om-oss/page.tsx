import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om oss',
  description:
    'Rookie är dedikerade till att underlätta rekryteringsprocessen för både företag och unga jobbsökande genom att matcha rätt kompetens med rätt möjligheter.',
  alternates: {
    canonical: '/om-oss',
  },
  openGraph: {
    url: '/om-oss',
    title: 'Om oss - Rookie',
    description:
      'Rookie är dedikerade till att underlätta rekryteringsprocessen för både företag och unga jobbsökande.',
  },
  twitter: {
    title: 'Om oss - Rookie',
    description:
      'Rookie är dedikerade till att underlätta rekryteringsprocessen för både företag och unga jobbsökande.',
  },
}

export default function OmOssPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="Om oss"
          description="Rookie är dedikerade till att underlätta rekryteringsprocessen för både företag och unga jobbsökande genom att matcha rätt kompetens med rätt möjligheter."
        />
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="prose prose-lg max-w-none">
              <h2>Ung kraft och starka möjligheter</h2>
              <p>
                Rookie är dedikerade till att underlätta rekryteringsprocessen för både företag och
                unga jobbsökande genom att matcha rätt kompetens med rätt möjligheter. Vi förstår
                vikten av att anställa unga mellan 18-28 år för att skapa en dynamisk och
                framåtriktad arbetsmiljö.
              </p>
              <p>
                Unga talanger är redo att ta sig an nya utmaningar och bidrar med nya perspektiv
                till teamet som kan vara avgörande för att främja innovation och kreativitet inom
                organisationen.
              </p>
              <p>
                Upptäck hur vi kan hjälpa dig att forma din framtid eller att hitta de bästa unga
                talangerna för ditt företag.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
