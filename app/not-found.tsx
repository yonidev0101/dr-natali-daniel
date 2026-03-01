import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center text-center px-4">
      <div>
        <p className="font-serif text-8xl font-bold text-gold mb-4">404</p>
        <h1 className="font-serif text-3xl font-bold text-white mb-4">הדף לא נמצא</h1>
        <p className="text-sage font-sans mb-8">הדף שחיפשתם אינו קיים. ייתכן שהוא הועבר או נמחק.</p>
        <Link
          href="/"
          className="inline-block bg-gold text-white font-sans font-medium px-6 py-3 rounded-sm hover:bg-gold-light transition-colors"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  )
}
