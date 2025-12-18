import CTASection from '@/components/cta-section'
import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { getAllSlugs, getPostBySlug } from '@/lib/inspiration'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Inlägg hittades inte',
    }
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/inspiration/${slug}`,
    },
    openGraph: {
      url: `/inspiration/${slug}`,
      title: `${post.title} - Rookie`,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      title: `${post.title} - Rookie`,
      description: post.description,
      images: [post.image],
      card: 'summary_large_image',
    },
  }
}

export default async function InspirationPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <HeroHeader />
      <main>
        {/* Hero Image Section */}
        <section className="relative min-h-[60vh]">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-4xl px-6 pb-12 pt-24">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-3 text-white/80">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('sv-SE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-background py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-3xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-2xl prose-h4:mb-2 prose-h4:mt-6 prose-h4:text-xl prose-p:mb-4 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline prose-a:transition-colors hover:prose-a:underline prose-strong:font-semibold prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-pre:bg-muted prose-pre:p-4 prose-img:rounded-lg prose-hr:my-8">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <CTASection />
      </main>
      <FooterSection />
    </>
  )
}
