import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lediga jobb',
  description:
    'Upptäck lediga jobb för unga talanger mellan 18-28 år. Hitta din nästa karriärmöjlighet hos spännande företag.',
  alternates: {
    canonical: '/lediga-jobb',
  },
  openGraph: {
    url: '/lediga-jobb',
    title: 'Lediga jobb - Rookie',
    description:
      'Upptäck lediga jobb för unga talanger mellan 18-28 år. Hitta din nästa karriärmöjlighet hos spännande företag.',
  },
  twitter: {
    title: 'Lediga jobb - Rookie',
    description:
      'Upptäck lediga jobb för unga talanger mellan 18-28 år. Hitta din nästa karriärmöjlighet hos spännande företag.',
  },
}

export default function LedigaJobbPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="Lediga jobb"
          description="Upptäck lediga jobb för unga talanger mellan 18-28 år. Hitta din nästa karriärmöjlighet hos spännande företag."
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
