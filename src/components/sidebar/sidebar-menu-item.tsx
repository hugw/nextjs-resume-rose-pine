'use client'

import { Hash } from 'lucide-react'
import { type PropsWithChildren, useState } from 'react'
import { Link } from 'react-scroll'
import { cn } from '../../utils/cn'

export const MenuItem = ({
  to,
  children,
}: PropsWithChildren<{ to: string }>) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <li
      className={cn(
        'group hover:bg-theme-primary/10 hover:pl-theme-2x flex w-full cursor-pointer items-center rounded transition-all duration-200',
        isActive && 'bg-theme-primary/5 pl-theme-2x',
      )}
    >
      <Hash
        className="m-theme-2x text-theme-primary h-4 w-4"
        strokeWidth="1.5"
      />
      <Link
        to={to}
        spy={true}
        smooth={'linear'}
        delay={0}
        duration={300}
        hashSpy={true}
        className={cn(
          'py-theme-2x text-theme-subtle group-hover:text-theme-primary block flex-1 font-medium',
          isActive && 'text-theme-primary font-bold',
          'text-theme-sm',
        )}
        onSetActive={() => setIsActive(true)}
        onSetInactive={() => setIsActive(false)}
      >
        {children}
      </Link>
    </li>
  )
}
