import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from 'next/image'
import Link from 'next/link'
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
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.9)_100%)]" />

          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <h1 className="mt-8 text-5xl font-medium tracking-tight text-balance md:text-6xl xl:text-7xl">
                Rookie matchar företag med talanger
              </h1>
              <p className="mt-8 max-w-2xl text-lg">
                Plattformen där unga talanger matchas med spännande karriärmöjligheter.
              </p>

              <div className="mt-12 flex flex-col items-start justify-start gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#link">
                    <span className="text-nowrap">Hitta personal</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#link">
                    <span className="text-nowrap">Hitta jobb</span>
                  </Link>
                </Button>
              </div>
            </div>
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
                      <Image
                        className="mx-auto h-5 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                        alt="Nvidia Logo"
                        height={20}
                        width={100}
                        unoptimized
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-4 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/column.svg"
                        alt="Column Logo"
                        height={16}
                        width={80}
                        unoptimized
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-4 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/github.svg"
                        alt="GitHub Logo"
                        height={16}
                        width={80}
                        unoptimized
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-5 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/nike.svg"
                        alt="Nike Logo"
                        height={20}
                        width={60}
                        unoptimized
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-5 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                        alt="Lemon Squeezy Logo"
                        height={20}
                        width={120}
                        unoptimized
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-4 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/laravel.svg"
                        alt="Laravel Logo"
                        height={16}
                        width={80}
                        unoptimized
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-7 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/lilly.svg"
                        alt="Lilly Logo"
                        height={28}
                        width={60}
                        unoptimized
                      />
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto h-6 w-auto invert"
                        src="https://html.tailus.io/blocks/customers/openai.svg"
                        alt="OpenAI Logo"
                        height={24}
                        width={100}
                        unoptimized
                      />
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
