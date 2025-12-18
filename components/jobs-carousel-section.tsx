'use client'

import { JobCard } from '@/components/job-card'
import { Button } from '@/components/ui/button'
import { availableJobs } from '@/lib/jobs'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRef, useState } from 'react'

interface JobsCarouselSectionProps {
  maxJobs?: number
  showCTA?: boolean
}

export default function JobsCarouselSection({
  maxJobs = 6,
  showCTA = true,
}: JobsCarouselSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const jobs = availableJobs.slice(0, maxJobs)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })

      // Check scrollability after animation
      setTimeout(checkScrollability, 300)
    }
  }

  return (
    <section className="border-border border-t">
      <div className="border-border bg-muted mx-auto max-w-7xl border-r border-l px-6 py-20">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Lediga <em className="text-primary not-italic">tjänster</em>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl text-pretty">
              Upptäck spännande karriärmöjligheter hos företag som söker unga talanger
            </p>
          </motion.div>

          {/* Navigation buttons - desktop */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="hidden gap-2 sm:flex"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Föregående jobb"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Nästa jobb"
            >
              <ChevronRight className="size-4" />
            </Button>
          </motion.div>
        </div>

        {/* Carousel container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {jobs.map((job, index) => (
              <div key={job.id} className="min-w-[280px] shrink-0 sm:min-w-[340px]">
                <JobCard job={job} index={index} disableAnimation />
              </div>
            ))}
          </div>

          {/* Fade overlays for edges */}
          {canScrollLeft && (
            <div className="from-muted via-muted/50 pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r to-transparent" />
          )}
          {canScrollRight && (
            <div className="from-muted via-muted/50 pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l to-transparent" />
          )}
        </div>

        {/* CTA to view all jobs */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex justify-start text-center"
          >
            <Button asChild size="lg" variant="secondary">
              <Link href="/lediga-jobb">
                <span className="text-nowrap">Se alla lediga jobb</span>
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
