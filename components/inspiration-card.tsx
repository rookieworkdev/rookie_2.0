'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

interface InspirationCardProps {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image: string
  category: string
  index?: number
}

export function InspirationCard({
  slug,
  title,
  description,
  date,
  author,
  image,
  category,
  index = 0,
}: InspirationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link href={`/inspiration/${slug}`}>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary">{category}</Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="group-hover:text-primary text-xl font-semibold tracking-tight transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mt-2 line-clamp-2">{description}</p>
            <div className="text-muted-foreground mt-4 flex items-center gap-2 text-sm">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('sv-SE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{author}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
