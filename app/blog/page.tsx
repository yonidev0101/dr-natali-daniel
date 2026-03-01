import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/data/posts'
import RevealWrapper from '@/components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'בלוג | מאמרים על אלרגולוגיה',
  description:
    'מאמרים מקצועיים על אלרגיות, אסתמה, ומחלות עור — מאת ד"ר נטלי דניאל, מומחית לאלרגולוגיה.',
}

const categories = ['הכל', 'אלרגיות מזון', 'אסתמה', 'עור', 'כללי'] as const

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

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 pb-16">
        <div className="container-main text-center">
          <RevealWrapper>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-sans font-medium tracking-widest uppercase">
                ידע הוא כוח
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              בלוג רפואי
            </h1>
            <p className="text-sage-light font-sans text-lg max-w-xl mx-auto">
              מידע מקצועי ומדויק על אלרגיות, אסתמה ומחלות חיסוניות — בשפה פשוטה ונגישה.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          {/* Category filter — visual only in static version */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-sans rounded-full border transition-colors ${
                  cat === 'הכל'
                    ? 'bg-gold text-white border-gold'
                    : 'border-ink/20 text-ink/60 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <RevealWrapper key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className="px-6 pt-6">
                    <span
                      className={`inline-block text-xs font-sans font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-lg font-bold text-ink leading-snug mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
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
        </div>
      </section>
    </>
  )
}
