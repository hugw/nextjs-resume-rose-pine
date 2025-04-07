import { getBasics, getExperience, getFaqs, getIntro } from '@/data/data'
import { MainIntro } from './intro/main-intro'
import { MainBlock } from './main-block'
import { MainTitle } from './main-title'
import { MainSkills } from './skills/main-skills'
import { MainFaq } from './faq/main-faq'
import { MainExperience } from './experience/main-experience'

type MainProps = {
  lang: string
}

export const Main = ({ lang }: MainProps) => {
  const intro = getIntro(lang)
  const basics = getBasics(lang)
  const questions = getFaqs(lang)
  const experience = getExperience(lang)

  return (
    <main
      id="main"
      className="mx-theme-5x md:mx-theme-10x lg:mx-theme-20x flex flex-1 flex-col md:max-w-[65ch]"
    >
      <MainBlock id={basics.sections.intro.slug}>
        <MainTitle title={basics.sections.intro.name} />
        <MainIntro intro={intro} />
      </MainBlock>

      <MainBlock id={basics.sections.skills.slug}>
        <MainTitle title={basics.sections.skills.name} />
        <MainSkills skills={basics.skills} />
      </MainBlock>

      <MainBlock id={basics.sections.experience.slug}>
        <MainTitle title={basics.sections.experience.name} />
        <MainExperience experience={experience.experience} />
      </MainBlock>

      <MainBlock id={basics.sections.faq.slug}>
        <MainTitle title={basics.sections.faq.name} />
        <MainFaq questions={questions} />
      </MainBlock>
    </main>
  )
}
