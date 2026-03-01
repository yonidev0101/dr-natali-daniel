'use client'

import { useActionState } from 'react'
import { submitContact, type ContactFormState } from '@/lib/actions/contact'

const reasons = [
  'אלרגיות מזון', 'אסתמה', 'קדחת השחת / אלרגיות עונתיות',
  'אלרגיות עור / אקזמה', 'אלרגיה לתרופות', 'ארס חרקים',
  'אימונותרפיה', 'ייעוץ ראשוני כללי', 'אחר',
]

const initialState: ContactFormState = {}

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState)

  if (state.success) {
    return (
      <div className="card p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 text-3xl">✅</div>
        <h3 className="font-sans text-xl font-bold text-heading mb-2">ההודעה נשלחה בהצלחה!</h3>
        <p className="text-muted font-sans text-sm">תודה שפניתם אלינו. נחזור אליכם תוך יום עסקים.</p>
      </div>
    )
  }

  return (
    <form action={action} className="card p-8 space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-sans">
          {state.error}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-sans font-semibold text-heading mb-1.5">
          שם מלא <span className="text-red-500">*</span>
        </label>
        <input
          id="name" name="name" type="text" required placeholder="ישראל ישראלי"
          className="w-full border border-border rounded-xl px-4 py-3 text-sm font-sans text-heading placeholder-muted/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-sans font-semibold text-heading mb-1.5">
          טלפון <span className="text-red-500">*</span>
        </label>
        <input
          id="phone" name="phone" type="tel" required placeholder="050-000-0000"
          className="w-full border border-border rounded-xl px-4 py-3 text-sm font-sans text-heading placeholder-muted/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
          dir="ltr"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-sans font-semibold text-heading mb-1.5">
          אימייל
        </label>
        <input
          id="email" name="email" type="email" placeholder="example@email.com"
          className="w-full border border-border rounded-xl px-4 py-3 text-sm font-sans text-heading placeholder-muted/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
          dir="ltr"
        />
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="reason" className="block text-sm font-sans font-semibold text-heading mb-1.5">
          סיבת הפנייה
        </label>
        <select
          id="reason" name="reason"
          className="w-full border border-border rounded-xl px-4 py-3 text-sm font-sans text-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
        >
          <option value="">בחרו סיבה...</option>
          {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-sans font-semibold text-heading mb-1.5">
          הודעה <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="תארו בקצרה את הבעיה או השאלה שלכם..."
          className="w-full border border-border rounded-xl px-4 py-3 text-sm font-sans text-heading placeholder-muted/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none bg-white"
        />
      </div>

      <p className="text-muted/60 text-xs font-sans">
        המידע ישמש לצורך תיאום הפגישה בלבד. אנו מחויבים לפרטיותכם.
      </p>

      <button
        type="submit" disabled={isPending}
        className="w-full bg-primary text-white font-sans font-bold py-3.5 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-blue"
      >
        {isPending ? 'שולח...' : 'שליחת הודעה'}
      </button>
    </form>
  )
}
