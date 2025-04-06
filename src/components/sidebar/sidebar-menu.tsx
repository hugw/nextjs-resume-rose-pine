import { getIntro } from '@/data/data'
import { MenuItem } from './sidebar-menu-item'

type SidebarMenuProps = {
  lang: string
}

export const SidebarMenu = ({ lang }: SidebarMenuProps) => {
  const intro = getIntro(lang)

  return (
    <nav className="hidden md:block">
      <ul className="flex flex-col">
        <MenuItem to={`${intro.slug}`}>{intro.title}</MenuItem>
        <MenuItem to="skills">Skills</MenuItem>
        <MenuItem to="experience">Experience</MenuItem>
        <MenuItem to="faq">About me</MenuItem>
      </ul>
    </nav>
  )
}
