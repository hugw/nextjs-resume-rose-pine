import {
  type IconDefinition,
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SidebarThemeSwitcher } from './sidebar-theme-switcher'
import { ExternalLink } from '../shared/external-link'

const SOCIALS = {
  github: {
    icon: faGithub,
    title: 'Github',
  },
  linkedin: {
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  twitter: {
    icon: faXTwitter,
    title: 'Twitter',
  },
} as { [key: string]: { icon: IconDefinition; title: string } }

const SocialButton = ({
  href,
  icon,
  title,
}: {
  href: string
  icon: IconDefinition
  title: string
}) => {
  return (
    <ExternalLink
      href={href}
      title={title}
      className="border-theme-border bg-theme-overlay text-theme-text hover:border-theme-accent p-theme-2x block rounded border transition-all duration-200"
    >
      <FontAwesomeIcon icon={icon} className="h-5 w-5" />
    </ExternalLink>
  )
}

type SidebarSocialProps = {
  socials: { id: string; url: string }[]
}

export const SidebarSocial = ({ socials }: SidebarSocialProps) => {
  return (
    <div className="flex-1">
      <div className="gap-theme-2x flex items-center justify-center md:justify-normal">
        {socials.map(({ id, url }) => (
          <SocialButton
            key={id}
            href={url}
            icon={SOCIALS[id].icon}
            title={SOCIALS[id].title}
          />
        ))}

        <div className="border-l-theme-border ml-theme-4x pl-theme-4x border-l">
          <SidebarThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
