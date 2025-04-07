import { DEFAULT_LANGUAGE, LANGUAGES } from '@/config'
import { getLangFromUrl } from '@/utils/i18n'
import { PageLayout } from '@/components/layouts/page-layout'
import { Metadata } from 'next'
import { getBasics } from '@/data/data'

export const dynamicParams = false

export const generateStaticParams = async () =>
  LANGUAGES.map((lang) => ({
    slug: lang === DEFAULT_LANGUAGE ? undefined : [lang],
  }))

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const lang = getLangFromUrl(slug)
  const basics = await getBasics(lang)

  return {
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
  }
}

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ slug?: string[] }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params
  const lang = getLangFromUrl(slug)
  const basics = await getBasics(lang)

  const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: basics.profile.name,
    jobTitle: basics.profile.role,
    url: basics.meta.url,
    sameAs: basics.profile.socials.map((social) => social.url),
  }

  return (
    <PageLayout lang={lang}>
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      {children}
    </PageLayout>
  )
}
