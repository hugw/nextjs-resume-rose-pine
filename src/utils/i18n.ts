import { DEFAULT_LANGUAGE, LANGUAGES } from '@/config'

export const getLangFromUrl = (slug?: string[]) => {
  if (!slug) return DEFAULT_LANGUAGE
  const lang = slug[0]

  if (LANGUAGES.includes(lang)) {
    return lang
  }

  return DEFAULT_LANGUAGE
}
