'use client'

import { useContext } from 'react'
import { PlasticThemeContext } from '@/contexts/plastic-theme'
import { UsePlasticThemeReturns } from './use-plastic-theme.types'

export const usePlasticTheme = (): UsePlasticThemeReturns => {
  const context = useContext(PlasticThemeContext)

  if (!context) {
    throw new Error(
      'PlasticThemeContext has been referenced outside its provider.',
    )
  }

  const { themeName, toggleTheme } = context

  return {
    themeName,
    toggleTheme,
  }
}
