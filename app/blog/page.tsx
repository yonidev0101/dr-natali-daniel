import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/data/posts'
import RevealWrapper from '@/components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'בלוג | מאמרים על אלרגולוגיה',
  description: 'מאמרים מקצועיים על אלרגיות, אסתמה, ומחלות עור — מאת ד"ר נטלי דניאל.',
}

const categories = ['הכל', 'אלרגיות מזון', 'אסתמה', 'עור', 'כללי'] as const

const categoryColors: Record<string, string> = {
  'אלרגיות מזון': 'bg-amber-50 text-amber-600 border border-amber-200',
  'אסתמה': 'bg-sky-50 text-sky-600 border border-sky-200',
  'עור': 'bg-rose-50 text-rose-600 border border-rose-200',
  'כללי': 'bg-primary-subtle text-primary border border-primary-light',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt border-b border-border pt-28 pb-14">
        <div className="container-main text-center">
          <RevealWrapper>
            <span className="inline-flex items-center gap-2 bg-primary-subtle text-primary text-xs font-sans font-semibold px-3 py-1.5 rounded-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              ידע הוא כוח
            </span>
            <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-heading mb-4">
              בלוג רפואי
            </h1>
            <p className="text-muted font-sans text-lg max-w-xl mx-auto">
              מידע מקצועי ומדויק על אלרגיות, אסתמה ומחלות חיסוניות — בשפה פשוטה ונגישה.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-sans font-medium rounded-pill border transition-colors ${
                  cat === 'הכל'
                    ? 'bg-primary text-white border-primary'
                    : 'border-border text-muted hover:border-primary hover:text-primary bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <RevealWrapper key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card block group overflow-hidden hover:-translate-y-1 transition-transform duration-300 h-full"
                >
                  <div className="h-1 bg-primary" />
                  <div className="p-6">
                    <span className={`badge text-xs mb-4 ${categoryColors[post.category] ?? 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
                      {post.category}
                    </span>
                    <h2 className="font-sans font-bold text-base text-heading leading-snug mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted font-sans text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-muted font-sans text-xs">{formatDate(post.date)}</span>
                      <span className="text-muted font-sans text-xs">{post.readTime} דק׳ קריאה</span>
                    </div>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
