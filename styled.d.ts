// eslint-disable-next-line react/no-typos
import {} from 'react'
import {} from 'styled-components'
import { Theme } from './styles/themes'
import type { CSSProp } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | undefined
  }
}
