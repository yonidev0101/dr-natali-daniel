export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'food-allergy',
    title: 'אלרגיות מזון',
    description: 'אבחון וטיפול בכל סוגי אלרגיות המזון, כולל בדיקות רגישות ותוכנית טיפול אישית.',
    icon: '🥜',
  },
  {
    id: 'asthma',
    title: 'אסתמה',
    description: 'ניהול וטיפול באסתמה לכל הגילאים, כולל בדיקות תפקודי ריאות ותוכניות מניעה.',
    icon: '🫁',
  },
  {
    id: 'hay-fever',
    title: 'קדחת השחת',
    description: 'טיפול בנזלת אלרגית, התעטשויות ועיניים דומעות הנגרמות מאבקה ופריחת עצים.',
    icon: '🌿',
  },
  {
    id: 'skin-allergy',
    title: 'אלרגיות עור',
    description: 'אבחון וטיפול באקזמה, אורטיקריה ודלקת עור מגע — פתרונות ארוכי טווח.',
    icon: '🩺',
  },
  {
    id: 'drug-allergy',
    title: 'אלרגיות לתרופות',
    description: 'הערכת רגישות לתרופות, כולל פניצילין ואנטיביוטיקות, עם בדיקות מדויקות.',
    icon: '💊',
  },
  {
    id: 'insect-venom',
    title: 'ארס חרקים',
    description: 'טיפול ואימונותרפיה לאנשים עם תגובה חמורה לעקיצות דבורים ואנשים.',
    icon: '🐝',
  },
  {
    id: 'anaphylaxis',
    title: 'אנפילקסיס',
    description: 'ניהול תגובות אלרגיות קשות, הדרכה לשימוש בעט אדרנלין ותוכנית מניעה.',
    icon: '⚡',
  },
  {
    id: 'immunotherapy',
    title: 'אימונותרפיה',
    description: 'טיפול שגורם לדה-סנסיטיזציה לאלרגנים — הפתרון הקבוע לאלרגיות.',
    icon: '💉',
  },
  {
    id: 'chronic-urticaria',
    title: 'אורטיקריה כרונית',
    description: 'אבחון וטיפול בגרד ופריחות כרוניות עם מעקב קפדני ותוכנית אישית.',
    icon: '🔴',
  },
  {
    id: 'sinusitis',
    title: 'סינוסיטיס ופוליפים',
    description: 'טיפול בדלקות סינוסים אלרגיות, פוליפים באף ובעיות נשימה כרוניות.',
    icon: '👃',
  },
  {
    id: 'children-allergy',
    title: 'אלרגיות בילדים',
    description: 'טיפול מיוחד לילדים ותינוקות עם אלרגיות, אסתמה ואקזמה אטופית.',
    icon: '👶',
  },
  {
    id: 'immunodeficiency',
    title: 'כשל חיסוני',
    description: 'הערכה וטיפול בחוסר חיסוני ראשוני ושניוני, כולל מעקב מעמיק.',
    icon: '🛡️',
  },
]
