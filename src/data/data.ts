import {
  allBasics,
  allFaqs,
  allIntros,
  Basics,
  Faq,
  Intro,
} from 'content-collections'

const DEFAULT_KEY = 'default'

const BASICS = allBasics.reduce(
  (acc, basics) => ({
    ...acc,
    [basics._meta.path]: basics,
  }),
  {} as Record<string, Basics>,
)

const INTROS = allIntros.reduce(
  (acc, intro) => ({
    ...acc,
    [intro._meta.path]: intro,
  }),
  {} as Record<string, Intro>,
)

const FAQs = allFaqs.reduce(
  (acc, faq) => ({
    ...acc,
    [faq._meta.path]: faq,
  }),
  {} as Record<string, Faq>,
)

const getRecord = <T>(records: Record<string, T>, key: string): T => {
  return records[key] || records[DEFAULT_KEY]
}

const getRecords = <T>(records: Record<string, T>, key: string): T[] => {
  const ids = new Set(
    Object.keys(records).map((id) => id.substring(0, id.lastIndexOf('/'))),
  )

  return Array.from(ids).map((id) => {
    const localizedKey = `${id}/${key}`
    const defaultKey = `${id}/${DEFAULT_KEY}`
    return records[localizedKey] || records[defaultKey]
  })
}

export const getBasics = (lang: string): Basics => {
  return getRecord<Basics>(BASICS, lang)
}

export const getIntro = (lang: string): Intro => {
  return getRecord<Intro>(INTROS, lang)
}

export const getFaqs = (lang: string): Faq[] => {
  return getRecords<Faq>(FAQs, lang)
}
