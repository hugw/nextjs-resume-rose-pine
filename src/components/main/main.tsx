import { getIntro, getSkills } from '@/data/data'
import { MainIntro } from './intro/main-intro'
import { MainBlock } from './main-block'
import { MainTitle } from './main-title'
import { MainSkills } from './skills/main-skills'

type MainProps = {
  lang: string
}

export const Main = ({ lang }: MainProps) => {
  const intro = getIntro(lang)
  const skills = getSkills(lang)

  return (
    <main
      id="main"
      className="mx-theme-5x md:mx-theme-10x lg:mx-theme-20x flex flex-1 flex-col md:max-w-[65ch]"
    >
      {/* className="pt-10 pb-5 md:pt-20 md:pb-10" */}
      <MainBlock id={intro.slug}>
        <MainTitle title={intro.title} />
        <MainIntro intro={intro} />
      </MainBlock>

      {/* className="pb-5 pt-10 md:pb-10 md:pt-20" */}
      <MainBlock id={skills.slug}>
        <MainTitle title={skills.title} />
        <MainSkills skills={skills.skills} />
      </MainBlock>
    </main>
  )
}
