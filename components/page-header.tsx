'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

interface PageHeaderProps {
  title?: string
  description?: string
  imageSrc?: string
  buttonText?: string
  buttonHref?: string
  showButton?: boolean
  imageAlt?: string
}

export function PageHeader({
  title,
  description,
  imageSrc = '/rookie-hero-video.mp4',
  buttonText,
  buttonHref,
  showButton = false,
  imageAlt = 'Header background',
}: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[60vh] items-end justify-start md:min-h-[70vh]">
      {/* Full-bleed background image/video */}
      {imageSrc.endsWith('.mp4') ? (
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={imageSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="absolute inset-0 -z-20 object-cover"
          priority
        />
      )}

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.9)_100%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {title && (
            <h1 className="text-4xl font-medium tracking-tight text-balance text-white md:text-5xl xl:text-6xl">
              {title}
            </h1>
          )}
          {description && <p className="mt-6 max-w-2xl text-lg text-white/80">{description}</p>}

          {showButton && buttonText && buttonHref && (
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={buttonHref}>
                  <span className="text-nowrap">{buttonText}</span>
                </Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
