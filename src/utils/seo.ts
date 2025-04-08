import { DEFAULT_LANGUAGE, LANGUAGES } from '@/config'
import { Basics } from 'content-collections'

export const getMetaTags = (basics: Basics) => ({
  metadataBase: new URL(basics.meta.url),
  title: basics.meta.title,
  description: basics.meta.description,
  keywords: basics.meta.keywords.join(', '),
  verification: {},
  openGraph: {
    title: basics.meta.title,
    description: basics.meta.description,
    images: basics.meta.image,
  },
  alternates: {
    canonical: '/',
    languages: LANGUAGES.filter((lang) => lang !== DEFAULT_LANGUAGE).reduce(
      (acc, lang) => ({
        ...acc,
        [lang]: `/${lang}`,
      }),
      {},
    ),
  },
  robots: 'index, follow',
  icons: '/favicon.ico',
})

export const getJSONLD = (basics: Basics) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: basics.profile.name,
  jobTitle: basics.profile.role,
  url: basics.meta.url,
})
