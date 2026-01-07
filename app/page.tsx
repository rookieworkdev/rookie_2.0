import AboutSection from '@/components/about-section'
import { CoopLogistikLogo } from '@/components/company-logos'
import CTASection from '@/components/cta-section'
import EmployerSection from '@/components/employer-section'
import FooterSection from '@/components/footer'
import HeroSection from '@/components/hero-section'
import JobseekerSection from '@/components/jobseeker-section'
import RookieOfMonthSection from '@/components/rookie-of-month-section'
import TestimonialSection from '@/components/testimonial-section'
import { getCurrentRookie } from '@/lib/previous-rookies'
import { DEFAULT_DESCRIPTION } from '@/lib/seo'
import type { Metadata } from 'next'

// Revalidate the homepage every day (86400 seconds)
// Homepage shows current rookie which changes monthly
export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Vi matchar företag med unga talanger',
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    title: 'Vi matchar företag med unga talanger - Rookie',
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    title: 'Vi matchar företag med unga talanger - Rookie',
    description: DEFAULT_DESCRIPTION,
  },
}

export default async function Page() {
  const currentRookie = await getCurrentRookie()

  return (
    <>
      <HeroSection />
      <AboutSection />
      <EmployerSection />
      <JobseekerSection />
      <TestimonialSection
        quote="Det har varit ett smidigt samarbete och en träffsäkerhet i urval av rätt profiler. Det har bidragit till snabb tillsättning vid konsultbehov. Rekommenderas varmt!"
        authorName="Jesper Eriksson"
        authorTitle="Head of Finance & Business Control"
        authorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        companyLogo={<CoopLogistikLogo />}
        companyName="Coop Logistik"
      />
      <RookieOfMonthSection rookie={currentRookie} />
      <CTASection
        content={{
          title: 'Kan vi hjälpa dig?',
          description:
            'Kontakta oss så berättar vi gärna mer om hur vi matchar unga talanger med rätt företag.',
          buttonText: 'Kontakta oss',
          buttonHref: '/kontakt',
        }}
      />
      <FooterSection />
    </>
  )
}
