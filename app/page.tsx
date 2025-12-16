import AboutSection from '@/components/about-section'
import CTASection from '@/components/cta-section'
import EmployerSection from '@/components/employer-section'
import FooterSection from '@/components/footer'
import HeroSection from '@/components/hero-section'
import JobseekerSection from '@/components/jobseeker-section'
import RookieOfMonthSection from '@/components/rookie-of-month-section'
import TestimonialSection from '@/components/testimonial-section'

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EmployerSection />
      <JobseekerSection />
      <TestimonialSection />
      <RookieOfMonthSection />
      <CTASection />
      <FooterSection />
    </>
  )
}
