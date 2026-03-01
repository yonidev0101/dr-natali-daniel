import Link from 'next/link'
import { posts } from '@/lib/data/posts'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Button from '@/components/ui/Button'

const categoryColors: Record<string, string> = {
  'אלרגיות מזון': 'bg-amber-50 text-amber-600 border border-amber-200',
  'אסתמה': 'bg-sky-50 text-sky-600 border border-sky-200',
  'עור': 'bg-rose-50 text-rose-600 border border-rose-200',
  'כללי': 'bg-primary-subtle text-primary border border-primary-light',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('he-IL', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function BlogPreview() {
  const latest = posts.slice(0, 3)

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-main">
        <RevealWrapper>
          <SectionHeader
            eyebrow="מאמרים ועדכונים"
            title="מהבלוג שלנו"
            subtitle="מידע מקצועי ומדויק על אלרגיות, אסתמה ומחלות חיסוניות — בשפה נגישה."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latest.map((post, i) => (
            <RevealWrapper key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="card block group overflow-hidden hover:-translate-y-1 transition-transform duration-300 h-full"
              >
                {/* Color bar */}
                <div className="h-1 bg-primary" />

                <div className="p-6">
                  <span className={`badge text-xs mb-4 ${categoryColors[post.category] ?? 'bg-gray-50 text-gray-600'}`}>
                    {post.category}
                  </span>

                  <h3 className="font-sans font-bold text-base text-heading leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted font-sans text-sm leading-relaxed mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-muted font-sans text-xs">{formatDate(post.date)}</span>
                    <span className="text-muted font-sans text-xs">{post.readTime} דק׳</span>
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={0.3}>
          <div className="text-center mt-10">
            <Button href="/blog" variant="outline" size="lg">
              כל המאמרים
            </Button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
