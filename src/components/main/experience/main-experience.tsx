import { Experience } from 'content-collections'

type MainExperienceProps = {
  experience: Experience['experience']
}

export const MainExperience = ({ experience }: MainExperienceProps) => {
  return (
    <div className="border-l-theme-primary gap-theme-10x py-theme-5x pl-theme-5x sm:pl-theme-10x relative flex flex-col border-l">
      {experience.map((experience, index) => (
        <div key={index}>
          <div className="flex items-center">
            <div className="border-theme-primary bg-theme-surface absolute left-[-8px] h-[15px] w-[15px] rounded-full border-2"></div>
            <h4 className="text-theme-primary text-xl font-black tracking-tight">
              {experience.company}
            </h4>
            <div className="text-theme-subtle hidden flex-1 text-right text-sm font-semibold sm:block">
              {experience.date}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h3 className="text-theme-text text-lg font-bold tracking-tight">
                  {role.title}
                </h3>
                <p className="text-theme-subtle text-sm font-semibold">
                  {role.date}
                </p>
                <div className="prose-sm text-theme-subtle md:w-3/4">
                  <ul className="list-disc">
                    {role.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
