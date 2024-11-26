'use client'

import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles/global-styles'
import { PlasticThemeContext } from './plastic-theme-context'

export const PlasticTheme: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(PlasticThemeContext)

  if (!context) {
    throw new Error(
      'PlasticThemeContext has been referenced outside its provider.',
    )
  }

  const { theme } = context

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
