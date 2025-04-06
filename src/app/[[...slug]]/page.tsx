import { Main } from '@/components/main/main'
import { getLangFromUrl } from '@/utils/i18n'

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const lang = getLangFromUrl(slug)

  return <Main lang={lang} />
}
