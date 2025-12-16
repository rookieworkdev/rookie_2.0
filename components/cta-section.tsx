'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl p-8 shadow-xs md:p-12 lg:p-16"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop)',
            }}
          />
          {/* Gradient overlay - solid top-left to transparent bottom-right */}
          <div className="absolute inset-0 bg-linear-to-br from-black via-black/70 to-black/0" />

          {/* Content */}
          <div className="relative flex flex-col justify-between gap-8 md:min-h-[200px]">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
                Kan vi hjälpa dig?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/80">
                Kontakta oss så berätta vi gärna mer om hur vi matchar unga talanger med rätt
                företag.
              </p>
            </div>
            <div className="self-start">
              <Button asChild size="lg">
                <Link href="#kontakt">
                  <span className="text-nowrap">Kontakta oss</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
