'use client'

import { MoonStar, SunMedium } from 'lucide-react'
import React, { useState } from 'react'

const LIGHT = 'light'
const DARK = 'dark'

export const SidebarThemeSwitcher = () => {
  const [isLight, setIsLight] = useState(true)

  const handleClick = () => {
    if (isLight) {
      document.body.classList.remove(LIGHT)
      document.body.classList.add(DARK)
    } else {
      document.body.classList.remove(DARK)
      document.body.classList.add(LIGHT)
    }

    setIsLight(!isLight)
  }

  return (
    <button
      onClick={handleClick}
      className="hover:bg-theme-overlay p-theme-2x cursor-pointer rounded-full transition-all duration-200"
    >
      {!isLight ? (
        <MoonStar strokeWidth={1.5} />
      ) : (
        <SunMedium strokeWidth={1.5} />
      )}
    </button>
  )
}
