import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global-styles'
import { themes } from '../styles/themes'

const viewports = {
  mobileSe: {
    name: 'Mobile SE',
    styles: {
      width: '375px',
      height: '844px',
    },
  },
  mobileXr: {
    name: 'Mobile',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1280px',
      height: '982px',
    },
  },
  laptopWide: {
    name: 'Laptop (Wide)',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
}

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
    viewport: {
      viewports,
    }
  },
}

export default preview
