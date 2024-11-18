import { IThemeContext } from '@/contexts/plastic-theme'

export interface UsePlasticThemeReturns
  extends Pick<IThemeContext, 'themeName' | 'toggleTheme'> {}
