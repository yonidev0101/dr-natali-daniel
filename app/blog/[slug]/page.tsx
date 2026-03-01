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
  return { title: post.title, description: post.excerpt }
}

const categoryColors: Record<string, string> = {
  'אלרגיות מזון': 'bg-amber-50 text-amber-600 border border-amber-200',
  'אסתמה': 'bg-sky-50 text-sky-600 border border-sky-200',
  'עור': 'bg-rose-50 text-rose-600 border border-rose-200',
  'כללי': 'bg-primary-subtle text-primary border border-primary-light',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="font-sans text-2xl font-bold text-heading mt-8 mb-4">{line.replace('## ', '')}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="font-sans text-xl font-bold text-heading mt-6 mb-3">{line.replace('### ', '')}</h3>)
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={key++} className="font-sans font-bold text-heading mt-4 mb-2">{line.replace(/\*\*/g, '')}</p>)
    } else if (line.startsWith('- ')) {
      elements.push(<li key={key++} className="font-sans text-body text-base leading-relaxed mb-1.5 mr-4">{line.replace('- ', '')}</li>)
    } else if (/^\d+\./.test(line)) {
      elements.push(<li key={key++} className="font-sans text-body text-base leading-relaxed mb-1.5 mr-4 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>)
    } else if (line.startsWith('✅')) {
      elements.push(<li key={key++} className="font-sans text-body text-base leading-relaxed mb-1.5 mr-4">{line}</li>)
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />)
    } else {
      elements.push(<p key={key++} className="font-sans text-body text-base leading-relaxed">{line}</p>)
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
      <section className="bg-surface-alt border-b border-border pt-28 pb-14">
        <div className="container-main max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-muted text-sm font-sans mb-6">
            <Link href="/" className="hover:text-primary transition-colors">בית</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">בלוג</Link>
            <span>/</span>
            <span className="text-muted/60 truncate">{post.title}</span>
          </div>

          <span className={`badge text-xs mb-5 ${categoryColors[post.category] ?? 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
            {post.category}
          </span>

          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-muted text-sm font-sans flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center text-xs">👩‍⚕️</div>
              <span>ד&quot;ר נטלי דניאל</span>
            </div>
            <span className="text-border">·</span>
            <span>{formatDate(post.date)}</span>
            <span className="text-border">·</span>
            <span>{post.readTime} דקות קריאה</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-3xl">
          <RevealWrapper>
            <div className="card p-8 md:p-12">
              <p className="font-sans text-body text-lg leading-relaxed mb-8 border-r-4 border-primary pr-5 text-muted italic">
                {post.excerpt}
              </p>
              <div className="space-y-1">
                {renderContent(post.content)}
              </div>
            </div>
          </RevealWrapper>

          {/* Navigation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="card p-5 group hover:-translate-y-0.5 transition-transform">
                <p className="text-xs font-sans text-muted mb-1">← המאמר הקודם</p>
                <p className="font-sans text-sm font-bold text-heading group-hover:text-primary transition-colors line-clamp-2">{prev.title}</p>
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="card p-5 group hover:-translate-y-0.5 transition-transform">
                <p className="text-xs font-sans text-muted mb-1">המאמר הבא →</p>
                <p className="font-sans text-sm font-bold text-heading group-hover:text-primary transition-colors line-clamp-2">{next.title}</p>
              </Link>
            )}
          </div>

          {/* CTA */}
          <RevealWrapper delay={0.2}>
            <div className="mt-8 bg-primary rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
              <div className="relative z-10">
                <h3 className="font-sans text-2xl font-extrabold text-white mb-2">יש לכם שאלות?</h3>
                <p className="text-white/75 font-sans text-sm mb-6">פנו לד&quot;ר דניאל לייעוץ מקצועי ואישי.</p>
                <Link href="/contact" className="inline-block bg-white text-primary font-sans font-bold px-6 py-3 rounded-pill hover:bg-primary-light transition-colors">
                  קביעת תור
                </Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
