import { getBasics } from '@/data/data'
import { SidebarCopyright } from './sidebar-copyright'
import { SidebarHeader } from './sidebar-header'
import { SidebarMenu } from './sidebar-menu'
import { SidebarSocial } from './sidebar-social'

type SidebarProps = {
  lang: string
}

export const Sidebar = ({ lang }: SidebarProps) => {
  const basics = getBasics(lang)

  return (
    <aside className="border-b-theme-border bg-theme-base md:border-r-theme-border md:pr-theme-10x lg:pr-theme-20x flex w-full justify-end border-b md:w-xs md:border-r lg:w-1/3 lg:min-w-md">
      <div className="w-full shrink-0 p-0 lg:max-w-xs">
        <div className="gap-theme-10x px-theme-5x py-theme-10x md:pt-theme-20x sticky top-0 flex flex-col md:h-screen md:px-0 md:pb-0">
          <SidebarHeader profile={basics.profile} labels={basics.labels} />
          <SidebarMenu items={Object.values(basics.sections)} />
          <SidebarSocial socials={basics.profile.socials} />
          <SidebarCopyright labels={basics.labels} />
        </div>
      </div>
    </aside>
  )
}
