import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'För jobbsökande',
  description:
    'Är du i början av din karriär? Då har du kommit helt rätt. Upptäck lediga jobb och ladda enkelt upp ditt CV för att göra dig synlig för spännande företag.',
  alternates: {
    canonical: '/for-jobbsokande',
  },
  openGraph: {
    url: '/for-jobbsokande',
    title: 'För jobbsökande - Rookie',
    description:
      'Upptäck lediga jobb och ladda enkelt upp ditt CV för att göra dig synlig för spännande företag.',
  },
  twitter: {
    title: 'För jobbsökande - Rookie',
    description:
      'Upptäck lediga jobb och ladda enkelt upp ditt CV för att göra dig synlig för spännande företag.',
  },
}

export default function ForJobbsokandePage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="För jobbsökande"
          description="Är du i början av din karriär? Då har du kommit helt rätt. Upptäck lediga jobb och ladda enkelt upp ditt CV för att göra dig synlig för spännande företag."
          showButton
          buttonText="Hitta jobb"
          buttonHref="/lediga-jobb"
        />
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="prose prose-lg max-w-none">
              <h2>Vad Rookie erbjuder unga arbetssökande</h2>
              <p>
                Är du i början av din karriär? Då har du kommit helt rätt. Upptäck lediga jobb och
                ladda enkelt upp ditt CV för att göra dig synlig för spännande företag.
              </p>
              <p>Innehåll kommer snart...</p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
