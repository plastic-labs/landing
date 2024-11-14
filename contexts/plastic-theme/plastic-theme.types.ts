import { Theme, ThemeName } from '@/styles/themes'

export type ThemeState = {
  themeName: ThemeName
  theme: Theme
}

export interface IThemeContext extends ThemeState {
  toggleTheme: VoidFunction
}
