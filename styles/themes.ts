import { ColorVar, NeutralVar } from './palette'

export const themePaletteNames = [
  '--color-primary-surface',
  '--color-primary-surface-contrast',
  '--color-primary-accent',
  '--illos-statement-flash',
  '--interactive-primary-button-surface',
  '--interactive-primary-button-surface-contrast',
  '--interactive-primary-button-accent',
  '--interactive-product-surface',
  '--interactive-product-surface-contrast',
  '--interactive-product-accent',
  '--interactive-product-surface-hover',
  '--interactive-product-border-hover',
  '--interactive-link-surface-contrast',
  '--interactive-link-accent',
] as const
export type ThemePaletteName = (typeof themePaletteNames)[number]

export type ThemePalette = Record<ThemePaletteName, ColorVar | NeutralVar>

export const themeNames = ['light', 'dark'] as const
export type ThemeName = (typeof themeNames)[number]

export type Theme = {
  name: ThemeName
  palette: ThemePalette
}

export const lightTheme: Theme = {
  name: 'light',
  palette: {
    '--color-primary-surface': '--color-dusty-white',
    '--color-primary-surface-contrast': '--color-black',
    '--color-primary-accent': '--color-green',
    '--illos-statement-flash': '--color-green',
    '--interactive-primary-button-surface': '--color-black',
    '--interactive-primary-button-surface-contrast': '--color-dusty-white',
    '--interactive-primary-button-accent': '--color-green',
    '--interactive-product-surface': '--color-dusty-white',
    '--interactive-product-surface-contrast': '--color-black',
    '--interactive-product-accent': '--color-green',
    '--interactive-product-surface-hover': '--neutral-white',
    '--interactive-product-border-hover': '--neutral-black',
    '--interactive-link-surface-contrast': '--neutral-black',
    '--interactive-link-accent': '--neutral-dark-grey',
  },
}

export const darkTheme: Theme = {
  name: 'dark',
  palette: {
    '--color-primary-surface': '--color-black',
    '--color-primary-surface-contrast': '--color-dusty-white',
    '--color-primary-accent': '--color-green',
    '--illos-statement-flash': '--color-green',
    '--interactive-primary-button-surface': '--color-dusty-white',
    '--interactive-primary-button-surface-contrast': '--color-black',
    '--interactive-primary-button-accent': '--color-green',
    '--interactive-product-surface': '--color-black',
    '--interactive-product-surface-contrast': '--color-dusty-white',
    '--interactive-product-accent': '--color-green',
    '--interactive-product-surface-hover': '--neutral-black',
    '--interactive-product-border-hover': '--neutral-white',
    '--interactive-link-surface-contrast': '--neutral-white',
    '--interactive-link-accent': '--color-green',
  },
}

export const themes: Record<ThemeName, Theme> = {
  light: lightTheme,
  dark: darkTheme,
}

export const inverseThemePaletteVar = (
  theme: Theme,
  themePaletteName: ThemePaletteName,
): string => {
  if (theme.name === 'light') {
    return darkTheme.palette[themePaletteName]
  }
  return lightTheme.palette[themePaletteName]
}
