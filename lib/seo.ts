export const SITE_NAME = 'Rookie'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rookiework.se').replace(
  /\/$/,
  ''
)

export const DEFAULT_DESCRIPTION =
  'Rookie är dedikerade till att underlätta rekryteringsprocessen för både företag och unga jobbsökande genom att matcha rätt kompetens med rätt möjligheter.'

export const DEFAULT_KEYWORDS = [
  'rekrytering',
  'jobb',
  'karriär',
  'unga talanger',
  'nyexaminerade',
  'junior',
  'jobbsökande',
  'arbetsgivare',
  'Stockholm',
  'Sverige',
  'hyrrekrytering',
  'konsult',
  'trainee',
]

export const metadataBase = new URL(SITE_URL)

export const OG_IMAGE_PATH = '/opengraph-image'
export const TWITTER_IMAGE_PATH = '/twitter-image'

export const structuredData = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: 'info@rookiework.se',
    telephone: '010 129 60 00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Drottninggatan 32, 8tr',
      postalCode: '111 51',
      addressLocality: 'Stockholm',
      addressCountry: 'SE',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
  },
])
