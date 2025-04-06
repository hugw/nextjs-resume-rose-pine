import { allBasics, allIntros, Basics, Intro } from 'content-collections'

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

const getRecord = <T>(records: Record<string, T>, key: string): T => {
  return records[key] || records[DEFAULT_KEY]
}

export const getBasics = (lang: string): Basics => {
  return getRecord<Basics>(BASICS, lang)
}

export const getIntro = (lang: string): Intro => {
  return getRecord<Intro>(INTROS, lang)
}
