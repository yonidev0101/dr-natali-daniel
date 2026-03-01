import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPostBySlug, getAdjacentPosts } from '@/lib/data/posts'
import RevealWrapper from '@/components/ui/RevealWrapper'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  'אלרגיות מזון': 'bg-amber-100 text-amber-700',
  אסתמה: 'bg-sky-100 text-sky-700',
  עור: 'bg-rose-100 text-rose-700',
  כללי: 'bg-sage-light/50 text-ink-light',
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Convert markdown-like content to simple HTML sections
function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="font-serif text-2xl font-bold text-ink mt-8 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="font-serif text-xl font-semibold text-ink mt-6 mb-3">
          {line.replace('### ', '')}
        </h3>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-sans font-semibold text-ink mt-4 mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="font-sans text-ink/70 text-base leading-relaxed mb-1 mr-4">
          {line.replace('- ', '')}
        </li>
      )
    } else if (/^\d+\./.test(line)) {
      elements.push(
        <li key={key++} className="font-sans text-ink/70 text-base leading-relaxed mb-1 mr-4 list-decimal">
          {line.replace(/^\d+\.\s/, '')}
        </li>
      )
    } else if (line.startsWith('✅')) {
      elements.push(
        <li key={key++} className="font-sans text-ink/70 text-base leading-relaxed mb-1 mr-4">
          {line}
        </li>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />)
    } else {
      elements.push(
        <p key={key++} className="font-sans text-ink/70 text-base leading-relaxed">
          {line}
        </p>
      )
    }
  }

  return elements
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const { prev, next } = getAdjacentPosts(slug)

  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 pb-16">
        <div className="container-main max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sage text-sm font-sans mb-6">
            <Link href="/" className="hover:text-gold transition-colors">בית</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">בלוג</Link>
            <span>/</span>
            <span className="text-sage/60 truncate">{post.title}</span>
          </div>

          <span
            className={`inline-block text-xs font-sans font-medium px-2.5 py-1 rounded-full mb-4 ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}
          >
            {post.category}
          </span>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sage text-sm font-sans">
            <span>ד&quot;ר נטלי דניאל</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} דקות קריאה</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-main max-w-3xl">
          <RevealWrapper>
            <div className="bg-white rounded-sm p-8 md:p-12 shadow-sm">
              <p className="font-sans text-ink/80 text-lg leading-relaxed mb-6 border-r-4 border-gold pr-4 italic">
                {post.excerpt}
              </p>
              <div className="prose-content space-y-1">
                {renderContent(post.content)}
              </div>
            </div>
          </RevealWrapper>

          {/* Navigation */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
                className="group bg-white rounded-sm p-5 shadow-sm hover:shadow-md transition-all border border-ink/5"
              >
                <p className="text-xs font-sans text-ink/40 mb-1">← המאמר הקודם</p>
                <p className="font-serif text-sm font-semibold text-ink group-hover:text-gold transition-colors line-clamp-2">
                  {prev.title}
                </p>
              </Link>
            )}
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group bg-white rounded-sm p-5 shadow-sm hover:shadow-md transition-all border border-ink/5 md:text-left"
              >
                <p className="text-xs font-sans text-ink/40 mb-1">המאמר הבא →</p>
                <p className="font-serif text-sm font-semibold text-ink group-hover:text-gold transition-colors line-clamp-2">
                  {next.title}
                </p>
              </Link>
            )}
          </div>

          {/* CTA */}
          <RevealWrapper delay={0.2}>
            <div className="mt-10 bg-ink rounded-sm p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                יש לכם שאלות?
              </h3>
              <p className="text-sage font-sans text-sm mb-6">
                פנו לד&quot;ר דניאל לייעוץ מקצועי ואישי.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold text-white font-sans font-medium px-6 py-3 rounded-sm hover:bg-gold-light transition-colors"
              >
                קביעת תור
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
