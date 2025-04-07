// import type { Metadata } from 'next'

import { DEFAULT_LANGUAGE, LANGUAGES } from '@/config'
import { getLangFromUrl } from '@/utils/i18n'
import { PageLayout } from '@/components/layouts/page-layout'
// export const metadata: Metadata = {
//   title: APP_META_TITLE,
//   description: APP_META_DESC,
// }

export const dynamicParams = false

export const generateStaticParams = async () =>
  LANGUAGES.map((lang) => ({
    slug: lang === DEFAULT_LANGUAGE ? undefined : [lang],
  }))

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ slug?: string[] }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params
  const lang = getLangFromUrl(slug)

  return <PageLayout lang={lang}>{children}</PageLayout>
}
