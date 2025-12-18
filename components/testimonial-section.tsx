'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface TestimonialProps {
  quote: string
  authorName: string
  authorTitle: string
  authorImage: string
  companyLogo: ReactNode
  companyName: string
}

export default function TestimonialSection({
  quote,
  authorName,
  authorTitle,
  authorImage,
  companyLogo,
  companyName,
}: TestimonialProps) {
  return (
    <section className="border-border border-t">
      <div className="border-border mx-auto max-w-7xl border-r border-l px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Vad andra säger
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="bg-muted dark:bg-card border-border/50 mt-12 rounded-2xl border p-8 shadow-xs md:p-12"
        >
          {/* Company logo */}
          <div className="mb-8">
            <div role="graphics-document" aria-label={companyName}>
              {companyLogo}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-xl font-medium md:text-3xl lg:text-4xl">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Author info */}
          <div className="mt-8 flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src={authorImage} alt={authorName} />
              <AvatarFallback>
                {authorName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{authorName}</div>
              <div className="text-muted-foreground text-sm">{authorTitle}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
