import { Sidebar } from '@/components/sidebar/sidebar'
import { BaseLayout } from './base-layout'

type PageLayoutProps = {
  children: React.ReactNode
  lang: string
}

export const PageLayout = async ({ children, lang }: PageLayoutProps) => {
  return (
    <BaseLayout lang={lang}>
      <div className="flex min-h-screen w-full flex-col md:flex-row">
        <Sidebar lang={lang} />
        {children}
      </div>
    </BaseLayout>
  )
}
