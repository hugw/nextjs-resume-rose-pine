import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

import {
  APP_META_TITLE,
  APP_META_DESC,
  DEFAULT_LANGUAGE,
  LANGUAGES,
} from '@/config'
import '../../styles/theme.css'
import { getLangFromUrl } from '@/utils/i18n'
import { Sidebar } from '@/components/sidebar/sidebar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: APP_META_TITLE,
  description: APP_META_DESC,
}

export const dynamicParams = false

export const generateStaticParams = async () =>
  LANGUAGES.map((lang) => ({
    slug: lang === DEFAULT_LANGUAGE ? undefined : [lang],
  }))

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ slug?: string[] }>
}>) {
  const { slug } = await params
  const lang = getLangFromUrl(slug)

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <div className="bg-theme-surface text-theme-text flex min-h-screen w-full flex-col font-sans antialiased md:flex-row">
          <Sidebar lang={lang} />
          {children}
        </div>
      </body>
    </html>
  )
}
