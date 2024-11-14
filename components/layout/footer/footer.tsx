'use client'

import styled from 'styled-components'
import { FooterProps } from './footer.types'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  font-family: var(--default-font-family);
`

export const Footer: React.FC<FooterProps> = ({ children, ...props }) => {
  return <StyledFooter {...props}>{children}</StyledFooter>
}
