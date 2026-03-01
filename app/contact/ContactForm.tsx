'use client'

import { useActionState } from 'react'
import { submitContact, type ContactFormState } from '@/lib/actions/contact'

const reasons = [
  'אלרגיות מזון',
  'אסתמה',
  'קדחת השחת / אלרגיות עונתיות',
  'אלרגיות עור / אקזמה',
  'אלרגיה לתרופות',
  'ארס חרקים',
  'אימונותרפיה',
  'ייעוץ ראשוני כללי',
  'אחר',
]

const initialState: ContactFormState = {}

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState)

  if (state.success) {
    return (
      <div className="bg-white rounded-sm p-8 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-ink mb-2">ההודעה נשלחה בהצלחה!</h3>
        <p className="text-ink/60 font-sans text-sm">
          תודה שפניתם אלינו. נחזור אליכם תוך יום עסקים.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="bg-white rounded-sm p-8 shadow-sm space-y-5">
      {/* Error message */}
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm font-sans">
          {state.error}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-sans font-medium text-ink mb-1.5">
          שם מלא <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="ישראל ישראלי"
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-sans font-medium text-ink mb-1.5">
          טלפון <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="050-000-0000"
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          dir="ltr"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-sans font-medium text-ink mb-1.5">
          אימייל
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          dir="ltr"
        />
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="reason" className="block text-sm font-sans font-medium text-ink mb-1.5">
          סיבת הפנייה
        </label>
        <select
          id="reason"
          name="reason"
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-sm font-sans text-ink focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white"
        >
          <option value="">בחרו סיבה...</option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-sans font-medium text-ink mb-1.5">
          הודעה <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="תארו בקצרה את הבעיה או השאלה שלכם..."
          className="w-full border border-ink/20 rounded-sm px-4 py-3 text-sm font-sans text-ink placeholder-ink/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
        />
      </div>

      {/* Disclaimer */}
      <p className="text-ink/40 text-xs font-sans leading-relaxed">
        המידע שתמסרו ישמש לצורך תיאום הפגישה בלבד. אנו מחויבים לפרטיותכם.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-gold text-white font-sans font-medium py-3.5 rounded-sm hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {isPending ? 'שולח...' : 'שליחת הודעה'}
      </button>
    </form>
  )
}
