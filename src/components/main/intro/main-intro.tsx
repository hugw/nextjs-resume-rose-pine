import { Typography } from '@/components/shared/typography'
import { Intro } from 'content-collections'

type MainIntroProps = {
  intro: Intro
}

export const MainIntro = ({ intro }: MainIntroProps) => {
  return (
    <Typography
      content={intro.html}
      className="prose-sm text-theme-text md:prose md:text-theme-text"
    />
  )
}
