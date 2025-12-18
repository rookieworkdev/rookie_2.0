'use client'

import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn, horizontalPadding, whiteBorderWrapper } from '@/lib/utils'
import { motion } from 'motion/react'
import Link from 'next/link'
import { AutolivLogo, CoopLogistikLogo, KlarnaLogo, SkandiaLogo, VolvoLogo } from './company-logos'
import { HeroHeader } from './header'

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative min-h-screen">
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

          {/* Border container wrapping entire section */}
          <div
            className={cn(
              'relative mx-auto flex min-h-screen w-full max-w-7xl flex-col',
              whiteBorderWrapper()
            )}
          >
            {/* Main content */}
            <div className={`flex-1 ${horizontalPadding} py-29.5`}>
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
            <div className="pb-16">
              <div className="flex flex-col items-center gap-6">
                <p className="text-end font-medium text-white/70">
                  Urval av bolag vi hjälpt med rekrytering
                </p>
                <div className="relative w-full">
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
                    className="pointer-events-none absolute top-0 left-0 h-full w-12"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute top-0 right-0 h-full w-12"
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
