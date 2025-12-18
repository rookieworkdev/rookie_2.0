import CTASection from '@/components/cta-section'
import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import PreviousRookiesSection from '@/components/previous-rookies-section'
import RookieOfMonthSection from '@/components/rookie-of-month-section'
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
          breadcrumbs={[{ label: 'Hem', href: '/' }, { label: 'Månadens Rookie' }]}
          title="Månadens mest lovande talang"
          description="Vi hyllar och uppmärksammar de mest framstående studenterna från olika program och universitet runt om i Sverige."
        />
        <RookieOfMonthSection />
        <PreviousRookiesSection />
        <CTASection
          content={{
            title: 'Kan vi hjälpa dig?',
            description:
              'Kontakta oss så berättar vi gärna mer om hur vi matchar unga talanger med rätt företag.',
            buttonText: 'Kontakta oss',
            buttonHref: '/kontakt',
          }}
        />
      </main>
      <FooterSection />
    </>
  )
}
