import { DEFAULT_LANGUAGE, LANGUAGES } from '@/config'
import { getLangFromUrl } from '@/utils/i18n'
import { PageLayout } from '@/components/layouts/page-layout'
import { Metadata } from 'next'
import { getBasics } from '@/data/data'
import { getJSONLD, getMetaTags } from '@/utils/seo'

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
  const basics = getBasics(lang)

  return getMetaTags(basics)
}

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ slug?: string[] }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params

  const lang = getLangFromUrl(slug)
  const basics = getBasics(lang)

  const JSON_LD = getJSONLD(basics)

  return (
    <PageLayout lang={lang}>
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      {children}
    </PageLayout>
  )
}
