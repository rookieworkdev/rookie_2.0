'use client'

import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { carouselItems } from '@/lib/career-carousel-data'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

export default function JobseekerSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header with text and CTA */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Vad Rookie erbjuder unga arbetssökande
            </h2>
            <p className="text-muted-foreground mt-6">
              Är du i början av din karriär? Då har du kommit helt rätt. Upptäck lediga jobb och
              ladda enkelt upp ditt CV för att göra dig synlig för spännande företag.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="#link">
              <span className="text-nowrap">Hitta jobb</span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Full-width carousel */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(12px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="relative mt-12"
      >
        <InfiniteSlider speed={50} gap={16}>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square w-72 shrink-0 overflow-hidden rounded-2xl"
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.image}
                    alt={item.label || ''}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {item.label && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-background/90 rounded-full px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
                        {item.label}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <div className={`flex h-full w-full flex-col justify-end p-6 ${item.color}`}>
                  <span className="text-5xl font-bold tracking-tight text-white">{item.title}</span>
                </div>
              )}
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          direction="right"
          blurIntensity={1}
        />
      </motion.div>
    </section>
  )
}
