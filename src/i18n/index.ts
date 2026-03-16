import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

const STORAGE_KEY = 'rusoft_lang'
export const SUPPORTED_LOCALES = ['en', 'es'] as const

function detectLocale(): string {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && (SUPPORTED_LOCALES as readonly string[]).includes(saved)) return saved
  return 'en'
}

const i18n = createI18n({
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, es },
  legacy: false,
})

export { STORAGE_KEY }
export default i18n
