import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/inspiration')

export interface InspirationPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image: string
  category: string
  content: string
}

export function getAllPosts(): InspirationPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        image: data.image,
        category: data.category,
        content,
      } as InspirationPost
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): InspirationPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      image: data.image,
      category: data.category,
      content,
    } as InspirationPost
  } catch (error) {
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}
