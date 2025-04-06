import { allIntros, allProfiles, Intro, Profile } from 'content-collections'

const DEFAULT_KEY = 'default'

const PROFILES = allProfiles.reduce(
  (acc, profile) => ({
    ...acc,
    [profile._meta.path]: profile,
  }),
  {} as Record<string, Profile>,
)

const INTROS = allIntros.reduce(
  (acc, intro) => ({
    ...acc,
    [intro._meta.path]: intro,
  }),
  {} as Record<string, Intro>,
)

export const getProfile = (lang: string): Profile => {
  return PROFILES[lang] || PROFILES[DEFAULT_KEY]
}

export const getIntro = (lang: string): Intro => {
  return INTROS[lang] || INTROS[DEFAULT_KEY]
}
