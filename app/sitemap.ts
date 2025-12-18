import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes = [
    '',
    'manadens-rookie',
    'for-jobbsokande',
    'for-foretag',
    'lediga-jobb',
    'om-oss',
    'inspiration',
    'kontakt',
    'integritetspolicy',
  ]

  return routes.map((route) => {
    const url = route === '' ? SITE_URL : `${SITE_URL}/${route}`

    return {
      url,
      lastModified,
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.7,
    }
  })
}
