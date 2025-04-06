import { Intro } from 'content-collections'

type MainIntroProps = {
  intro: Intro
}

export const MainIntro = ({ intro }: MainIntroProps) => {
  return (
    <div
      className="prose-sm text-theme-text md:prose md:text-theme-text"
      dangerouslySetInnerHTML={{ __html: intro.html }}
    />
  )
}
