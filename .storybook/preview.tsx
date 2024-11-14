import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global-styles'
import { themes } from '../styles/themes'

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
]

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
