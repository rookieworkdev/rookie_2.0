import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { InspirationCard } from '@/components/inspiration-card'
import { PageHeader } from '@/components/page-header'
import { getAllPosts } from '@/lib/inspiration'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspiration',
  description:
    'Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter från rekryteringsvärlden.',
  alternates: {
    canonical: '/inspiration',
  },
  openGraph: {
    url: '/inspiration',
    title: 'Inspiration - Rookie',
    description:
      'Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter.',
  },
  twitter: {
    title: 'Inspiration - Rookie',
    description:
      'Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter.',
  },
}

export default function InspirationPage() {
  const posts = getAllPosts()

  return (
    <>
      <HeroHeader />
      <main>
        <PageHeader
          title="Inspiration"
          description="Få inspiration från framgångsrika unga talanger och företag. Läs om karriärvägar, tips och insikter från rekryteringsvärlden."
        />
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            {posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <InspirationCard
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    author={post.author}
                    image={post.image}
                    category={post.category}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                <p>Inga inlägg tillgängliga ännu. Kom tillbaka snart!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
