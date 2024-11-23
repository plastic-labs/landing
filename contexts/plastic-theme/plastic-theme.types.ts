import { Theme, ThemeName } from '@/styles/themes'

export type ThemeState = {
  themeName: ThemeName
  theme: Theme
  toggledManually: boolean
}

export interface IThemeContext extends ThemeState {
  toggleTheme: VoidFunction
}
