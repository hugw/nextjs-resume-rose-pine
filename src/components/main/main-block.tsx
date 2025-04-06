'use client'

import { Element } from 'react-scroll'

type MainBlockProps = {
  children: React.ReactNode
  id: string
  className?: string
}

export const MainBlock = ({ children, id, className }: MainBlockProps) => (
  <Element className={className} name={id}>
    {children}
  </Element>
)
