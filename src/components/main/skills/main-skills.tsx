type Skills = {
  group: string
  items: {
    name: string
  }[]
}

type MainSkillsProps = {
  skills: Skills[]
}

export const MainSkills = ({ skills }: MainSkillsProps) => {
  return (
    <>
      <div className="gap-theme-4x flex flex-col">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-theme-border bg-theme-base p-theme-4x rounded-md border"
          >
            <h3 className="mb-theme-4x font-semibold">{skill.group}</h3>
            <ul className="gap-theme-2x flex flex-wrap">
              {skill.items.map((item) => (
                <li
                  key={item.name}
                  className="border-theme-border bg-theme-overlay text-theme-text hover:border-theme-accent hover:text-theme-accent px-theme-3x py-theme-1x cursor-default rounded-full border text-sm font-semibold transition-all duration-200"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
