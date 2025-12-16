'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image container - Left side */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-muted relative aspect-square w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
              alt="Unga talanger samarbetar"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>

          {/* Text container - Right side */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Ung kraft och starka möjligheter
            </h2>
            <p className="text-muted-foreground mt-6">
              Rookie är dedikerade till att underlätta rekryteringsprocessen för både företag och
              unga jobbsökande genom att matcha rätt kompetens med rätt möjligheter. Vi förstår
              vikten av att anställa unga mellan 18-28 år för att skapa en dynamisk och framåtriktad
              arbetsmiljö.
            </p>
            <p className="text-muted-foreground mt-4">
              Unga talanger är redo att ta sig an nya utmaningar och bidrar med nya perspektiv till
              teamet som kan vara avgörande för att främja innovation och kreativitet inom
              organisationen.
            </p>
            <p className="text-muted-foreground mt-4">
              Upptäck hur vi kan hjälpa dig att forma din framtid eller att hitta de bästa unga
              talangerna för ditt företag.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
