import { ExternalLink } from '@/components/shared/external-link'

export const SidebarCopyright = () => {
  return (
    <footer className="hidden md:block">
      <p className="pb-4 text-sm">
        Copyright {new Date().getFullYear()}.
        <br />
        Built with{' '}
        <ExternalLink href="https://nextjs.org" title="NextJS">
          NextJS
        </ExternalLink>
        ,{' '}
        <ExternalLink href="https://tailwindcss.com" title="Tailwindcss">
          Tailwind CSS
        </ExternalLink>
        , and {/* @TODO Update URL */}
        <ExternalLink href="https://rosepinetheme.com" title="Rosé Pine">
          Rosé Pine
        </ExternalLink>{' '}
        theme.
      </p>
    </footer>
  )
}
