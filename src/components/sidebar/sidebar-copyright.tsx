import { ExternalLink } from '@/components/shared/external-link'
import { Basics } from 'content-collections'

type SidebarCopyrightProps = {
  labels: Basics['labels']
}

export const SidebarCopyright = ({ labels }: SidebarCopyrightProps) => {
  return (
    <footer className="hidden md:block">
      <p className="pb-4 text-sm">
        {`${labels.builtWith} `}
        <ExternalLink href="https://nextjs.org" title="NextJS">
          NextJS
        </ExternalLink>
        {', '}
        <ExternalLink href="https://tailwindcss.com" title="Tailwindcss">
          Tailwind CSS
        </ExternalLink>
        {`, ${labels.and} `}
        <ExternalLink href="https://rosepinetheme.com" title="Rosé Pine">
          Rosé Pine theme.
        </ExternalLink>
      </p>
    </footer>
  )
}
