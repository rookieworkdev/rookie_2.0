import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Månadens Rookie',
  description:
    'Vi hyllar och uppmärksammar de mest framstående studenterna från olika program och universitet. Baserat på studenters akademiska prestationer utser vi varje månad Månadens Rookie.',
  alternates: {
    canonical: '/manadens-rookie',
  },
  openGraph: {
    url: '/manadens-rookie',
    title: 'Månadens Rookie - Rookie',
    description:
      'Vi hyllar och uppmärksammar de mest framstående studenterna från olika program och universitet.',
  },
  twitter: {
    title: 'Månadens Rookie - Rookie',
    description:
      'Vi hyllar och uppmärksammar de mest framstående studenterna från olika program och universitet.',
  },
}

export default function ManadensRookiePage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="Månadens Rookie"
          description="Vi hyllar och uppmärksammar de mest framstående studenterna från olika program och universitet. Baserat på studenters akademiska prestationer utser vi varje månad Månadens Rookie."
        />
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="prose prose-lg max-w-none">
              <p>Innehåll kommer snart...</p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
