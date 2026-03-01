import Link from 'next/link'
import { posts } from '@/lib/data/posts'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Button from '@/components/ui/Button'

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

export default function BlogPreview() {
  const latestPosts = posts.slice(0, 3)

  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <RevealWrapper>
          <SectionHeader
            eyebrow="מאמרים ועדכונים"
            title="מהבלוג שלנו"
            subtitle="מידע מקצועי ומדויק על אלרגיות, אסתמה ומחלות חיסוניות — בשפה נגישה."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <RevealWrapper key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
              >
                {/* Category tag */}
                <div className="px-6 pt-6">
                  <span
                    className={`inline-block text-xs font-sans font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-ink leading-snug mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-ink/60 font-sans text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-ink/10">
                    <span className="text-ink/40 font-sans text-xs">{formatDate(post.date)}</span>
                    <span className="text-ink/40 font-sans text-xs">{post.readTime} דק׳ קריאה</span>
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
