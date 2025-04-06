import {
  forwardRef,
  type PropsWithChildren,
  type AnchorHTMLAttributes,
} from 'react'
import { cn } from '../../utils/cn'

type ExternalLinkProps = {
  href: string
  title: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const ExternalLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<ExternalLinkProps>
>(({ href, title, className, children, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      title={title}
      className={cn('hover:text-theme-accent font-semibold', className)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
})

ExternalLink.displayName = 'ExternalLink'
