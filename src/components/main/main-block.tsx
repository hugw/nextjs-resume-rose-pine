'use client'

import { cn } from '@/utils/cn'
import { Element } from 'react-scroll'

type MainBlockProps = {
  children: React.ReactNode
  id: string
  className?: string
}

export const MainBlock = ({ children, id, className }: MainBlockProps) => (
  <Element
    className={cn(
      'pt-theme-10x pb-theme-5x md:pt-theme-20x md:pb-theme-10x',
      className,
    )}
    name={id}
  >
    {children}
  </Element>
)
