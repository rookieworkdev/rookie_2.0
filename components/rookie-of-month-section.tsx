'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GraduationCap } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function RookieOfMonthSection() {
  return (
    <section className="bg-background border-border border-t">
      <div className="border-border mx-auto max-w-7xl border-r border-l px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Employee card - Left side */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="from-muted/50 to-primary/20 border-border/50 flex flex-col justify-between rounded-xl border bg-gradient-to-br p-6 shadow-xs md:p-8 dark:bg-gradient-to-br"
          >
            {/* Avatar, Name, and City grouped */}
            <div className="mb-8 flex flex-col items-center text-center">
              <Avatar className="border-primary mb-4 size-32 md:size-32">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
                  alt="Björn Gabrielsson"
                />
                <AvatarFallback className="text-3xl">BG</AvatarFallback>
              </Avatar>
              <h3 className="mb-3 text-2xl font-semibold md:text-3xl">Björn Gabrielsson</h3>
              <Badge variant="default">UMEÅ</Badge>
            </div>

            {/* Studies and School with icons */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-0.5 size-5 shrink-0" />
                <div className="flex-1">
                  <dt className="text-muted-foreground mb-1 font-medium">Studier</dt>
                  <dd className="text-base">
                    Civilingenjör i industriell ekonomi, Optimering och logistik
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-0.5 size-5 shrink-0" />
                <div className="flex-1">
                  <dt className="text-muted-foreground mb-1 font-medium">Skola</dt>
                  <dd className="text-base">Umeå universitet</dd>
                </div>
              </div>
            </div>
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
              Månadens rookie för <em className="text-primary not-italic">december</em>
            </h2>
            <p className="text-muted-foreground mt-6">
              Vi hyllar och uppmärksammar de mest framstående studenterna från olika program och
              universitet. Baserat på studenters akademiska prestationer utser vi varje månad
              Månadens Rookie!
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="#utmarkelser">
                  <span className="text-nowrap">Visa alla utmärkelser</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
