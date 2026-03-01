import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-alt flex items-center justify-center text-center px-4">
      <div>
        <div className="w-24 h-24 rounded-2xl bg-primary-subtle flex items-center justify-center mx-auto mb-6">
          <span className="font-sans font-extrabold text-4xl text-primary">404</span>
        </div>
        <h1 className="font-sans text-3xl font-extrabold text-heading mb-3">הדף לא נמצא</h1>
        <p className="text-muted font-sans mb-8">הדף שחיפשתם אינו קיים. ייתכן שהוא הועבר או נמחק.</p>
        <Link href="/" className="btn-primary px-7 py-3.5 text-base">
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  )
}
