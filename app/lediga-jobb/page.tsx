import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import JobsGridSection from '@/components/jobs-grid-section'
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
          breadcrumbs={[{ label: 'Hem', href: '/' }, { label: 'Lediga jobb' }]}
          title="Rookie matchar unga talanger med lediga jobb"
          description="Ta nästa steg i din karriär och hitta ditt nästa spännande jobb hos ett företag som söker unga talanger mellan 18-28 år."
        />
        <JobsGridSection />
      </main>
      <FooterSection />
    </>
  )
}
