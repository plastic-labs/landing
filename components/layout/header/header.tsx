'use client'

import styled from 'styled-components'
import { HeaderProps } from './header.types'

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-gap: 1rem;
  font-family: var(--default-font-family);
`

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return <StyledHeader {...props}>{children}</StyledHeader>
}
