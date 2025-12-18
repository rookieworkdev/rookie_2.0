'use client'

import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { motion } from 'motion/react'
import Link from 'next/link'
import { AutolivLogo, CoopLogistikLogo, KlarnaLogo, SkandiaLogo, VolvoLogo } from './company-logos'
import { HeroHeader } from './header'

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative flex min-h-screen items-center justify-start">
          {/* Full-screen background video */}
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/rookie-hero-video.mp4" type="video/mp4" />
          </video>
          {/* Radial gradient overlay for the whole hero */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.9)_100%)]" />

          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(12px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <h1 className="mt-8 text-5xl font-medium tracking-tight text-balance text-white md:text-6xl xl:text-7xl">
                Rookie matchar företag med talanger
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-white/80">
                Plattformen där unga talanger matchas med spännande karriärmöjligheter.
              </p>

              <div className="mt-12 flex flex-col items-start justify-start gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/for-foretag">
                    <span className="text-nowrap">Hitta personal</span>
                  </Link>
                </Button>
                <div className="dark">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/lediga-jobb">
                      <span className="text-nowrap">Hitta jobb</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Logo carousel */}
          <div className="absolute inset-x-0 bottom-0 pb-12">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-white/20 md:pr-6">
                  <p className="text-end text-sm font-medium text-white/70">
                    Urval av bolag vi hjälpt med rekrytering
                  </p>
                </div>
                <div className="relative py-4 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                    <div className="flex items-center justify-center">
                      <CoopLogistikLogo className="text-white" />
                    </div>
                    <div className="flex items-center justify-center">
                      <VolvoLogo className="text-white" />
                    </div>
                    <div className="flex items-center justify-center">
                      <KlarnaLogo className="text-white" />
                    </div>
                    <div className="flex items-center justify-center">
                      <SkandiaLogo className="text-white" />
                    </div>
                    <div className="flex items-center justify-center">
                      <AutolivLogo className="text-white" />
                    </div>
                  </InfiniteSlider>
                  <ProgressiveBlur
                    className="pointer-events-none absolute top-0 left-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute top-0 right-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
