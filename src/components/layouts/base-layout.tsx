import { Inter, Roboto_Mono } from 'next/font/google'
import '../../styles/theme.css'
import { DEFAULT_LANGUAGE } from '@/config'
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

type BaseLayoutProps = {
  children: React.ReactNode
  lang?: string
}

export const BaseLayout = async ({
  children,
  lang = DEFAULT_LANGUAGE,
}: BaseLayoutProps) => {
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${robotoMono.variable} bg-theme-surface text-theme-text font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
