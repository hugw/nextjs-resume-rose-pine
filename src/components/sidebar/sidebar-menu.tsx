import { MenuItem } from './sidebar-menu-item'

type SidebarMenuProps = {
  items: {
    name: string
    slug: string
  }[]
}

export const SidebarMenu = ({ items }: SidebarMenuProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-col">
        {items.map((item) => (
          <MenuItem key={item.slug} to={item.slug}>
            {item.name}
          </MenuItem>
        ))}
      </ul>
    </nav>
  )
}
