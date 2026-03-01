export interface Location {
  id: string
  name: string
  address: string
  city: string
  phone: string
  hours: {
    day: string
    time: string
  }[]
  notes: string
  mapUrl: string
}

export const locations: Location[] = [
  {
    id: 'jerusalem',
    name: 'קליניקה פרטית — ירושלים',
    address: 'רחוב המלך דוד 23, ירושלים',
    city: 'ירושלים',
    phone: '02-555-1234',
    hours: [
      { day: 'ראשון', time: '09:00 – 13:00' },
      { day: 'שלישי', time: '14:00 – 19:00' },
      { day: 'חמישי', time: '09:00 – 14:00' },
    ],
    notes: 'חניה בסמוך. נגיש לנכים. אין צורך בהפניה.',
    mapUrl: 'https://maps.google.com/?q=המלך+דוד+23+ירושלים',
  },
  {
    id: 'modiin',
    name: 'מכבי שירותי בריאות — מודיעין',
    address: 'מרכז מכבי מודיעין, רחוב עמינדב 1',
    city: 'מודיעין',
    phone: '*3555',
    hours: [
      { day: 'שני', time: '08:00 – 13:00' },
      { day: 'רביעי', time: '13:00 – 18:00' },
    ],
    notes: 'לפי תור בלבד. נדרשת הפניה מרופא משפחה. מבוטחי מכבי בלבד.',
    mapUrl: 'https://maps.google.com/?q=עמינדב+1+מודיעין',
  },
]
