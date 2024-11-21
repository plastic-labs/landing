import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { ThemeName, themes } from '@/styles/themes'
import type { IThemeContext, ThemeState } from './plastic-theme.types'

const initialState: ThemeState = {
  themeName: 'light',
  theme: themes['light'],
  toggledManually: false,
}

export const PlasticThemeContext = createContext<IThemeContext>({
  ...initialState,
  toggleTheme: () => undefined,
})

export const PlasticThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeState, setThemeState] = useState<ThemeState>(initialState)

  const setWhenDifferent = useCallback(
    (themeName: ThemeName) => {
      if (!themeState.toggledManually && themeName !== themeState.themeName) {
        setThemeState({ themeName, theme: themes[themeName], toggledManually: false })
      }
    },
    [themeState.themeName, themeState.toggledManually],
  )

  useEffect(() => {
    // light scheme preferred
    const setSchemeLight = ({ matches }: { matches: boolean }): void => {
      if (matches) setWhenDifferent('light')
    }
    window
      .matchMedia?.('(prefers-color-scheme: light)')
      .addEventListener?.('change', setSchemeLight)

    if (window.matchMedia?.('(prefers-color-scheme: light)')?.matches) {
      setWhenDifferent('light')
    }

    // dark scheme preferred
    const setSchemeDark = ({ matches }: { matches: boolean }): void => {
      if (matches) setWhenDifferent('dark')
    }
    window
      .matchMedia?.('(prefers-color-scheme: dark)')
      .addEventListener?.('change', setSchemeDark)

    if (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches) {
      setWhenDifferent('dark')
    }

    return () => {
      window
        .matchMedia?.('(prefers-color-scheme: light)')
        .removeEventListener?.('change', setSchemeLight)
      window
        .matchMedia?.('(prefers-color-scheme: dark)')
        .removeEventListener?.('change', setSchemeDark)
    }
  }, [setWhenDifferent])

  const value = useMemo(() => {
    const toggleTheme = () => {
      if (themeState.themeName === 'light') {
        setThemeState({
          themeName: 'dark',
          theme: themes['dark'],
          toggledManually: true,
        })
      } else {
        setThemeState({
          themeName: 'light',
          theme: themes['light'],
          toggledManually: true,
        })
      }
    }

    return {
      ...themeState,
      toggleTheme,
    }
  }, [themeState])

  return (
    <PlasticThemeContext.Provider value={value}>
      {children}
    </PlasticThemeContext.Provider>
  )
}
