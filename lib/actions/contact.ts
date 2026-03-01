'use server'

export interface ContactFormState {
  success?: boolean
  error?: string
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const reason = formData.get('reason') as string
  const message = formData.get('message') as string

  // Validation
  if (!name || name.trim().length < 2) {
    return { error: 'אנא הזינו שם מלא' }
  }
  if (!phone || !/^[\d\-\+\s]{9,15}$/.test(phone.trim())) {
    return { error: 'אנא הזינו מספר טלפון תקין' }
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { error: 'אנא הזינו כתובת אימייל תקינה' }
  }
  if (!message || message.trim().length < 10) {
    return { error: 'אנא הזינו הודעה (לפחות 10 תווים)' }
  }

  // Log the contact form submission (connect to Resend/EmailJS later)
  console.log('Contact form submission:', {
    name: name.trim(),
    phone: phone.trim(),
    email: email?.trim() || '',
    reason: reason || 'לא צוין',
    message: message.trim(),
    timestamp: new Date().toISOString(),
  })

  // Simulate a small delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true }
}
