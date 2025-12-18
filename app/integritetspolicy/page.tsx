import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { PageHeader } from '@/components/page-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description:
    'Läs om hur Rookie hanterar personuppgifter och integritet. Vi värnar om din integritet och följer gällande dataskyddslagar.',
  alternates: {
    canonical: '/integritetspolicy',
  },
  openGraph: {
    url: '/integritetspolicy',
    title: 'Integritetspolicy - Rookie',
    description:
      'Läs om hur Rookie hanterar personuppgifter och integritet. Vi värnar om din integritet.',
  },
  twitter: {
    title: 'Integritetspolicy - Rookie',
    description:
      'Läs om hur Rookie hanterar personuppgifter och integritet. Vi värnar om din integritet.',
  },
}

export default function IntegritetspolicyPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          breadcrumbs={[{ label: 'Hem', href: '/' }, { label: 'Integritetspolicy' }]}
          title="Hur vi hanterar dina personuppgifter"
          description="Vi värnar om din integritet och följer gällande dataskyddslagar."
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
