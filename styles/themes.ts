import { ColorVar, NeutralVar } from './palette'

export const themePaletteNames = [
  '--color-primary-surface',
  '--color-primary-surface-contrast',
] as const
export type ThemePaletteName = (typeof themePaletteNames)[number]

export type ThemePalette = Record<ThemePaletteName, ColorVar | NeutralVar>

export type Theme = {
  palette: ThemePalette
}

export const themeNames = ['light', 'dark'] as const
export type ThemeName = (typeof themeNames)[number]

export const lightTheme: Theme = {
  palette: {
    '--color-primary-surface': '--color-dusty-white',
    '--color-primary-surface-contrast': '--color-black',
  },
}

export const darkTheme: Theme = {
  palette: {
    '--color-primary-surface': '--color-black',
    '--color-primary-surface-contrast': '--color-dusty-white',
  },
}

export const themes: Record<ThemeName, Theme> = {
  light: lightTheme,
  dark: darkTheme,
}
