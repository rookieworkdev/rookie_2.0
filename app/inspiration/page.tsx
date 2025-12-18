import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import InspirationGridSection from '@/components/inspiration-grid-section'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspiration',
  description:
    'Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter från rekryteringsvärlden.',
  alternates: {
    canonical: '/inspiration',
  },
  openGraph: {
    url: '/inspiration',
    title: 'Inspiration - Rookie',
    description:
      'Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter.',
  },
  twitter: {
    title: 'Inspiration - Rookie',
    description:
      'Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter.',
  },
}

export default function InspirationPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="Inspiration"
          description="Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter från rekryteringsvärlden."
          breadcrumbs={[{ label: 'Hem', href: '/' }, { label: 'Inspiration' }]}
        />
        <InspirationGridSection />
      </main>
      <FooterSection />
    </>
  )
}
