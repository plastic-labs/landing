import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import React, { CSSProperties } from 'react'
import { GlobalStyles } from '../styles/global-styles'

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
  // assign next google fonts to ensure that they load properly
  (Story: React.FC) => (
    <main
      style={
        {
          '--font-family-exo2': '"Exo 2", sans-serif',
          '--default-font-family': '"Exo 2", sans-serif',
        } as CSSProperties
      }
    >
      <Story />
    </main>
  ),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
