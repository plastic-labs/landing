'use client'

import styled from 'styled-components'
import { MainProps } from './main.types'

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  font-family: var(--default-font-family);

  @supports (height: 100dvh) {
    min-height: 100dvh;
  }
`

export const Main: React.FC<MainProps> = ({ children, ...props }) => {
  return <StyledMain {...props}>{children}</StyledMain>
}
