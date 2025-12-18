import { InspirationCard } from '@/components/inspiration-card'
import { getAllPosts } from '@/lib/inspiration'

export default function InspirationGridSection() {
  const posts = getAllPosts()

  return (
    <section className="bg-background border-border border-t">
      <div className="border-border mx-auto max-w-7xl border-r border-l px-6 py-24">
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
  )
}
