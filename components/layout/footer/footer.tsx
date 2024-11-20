'use client'

import styled from 'styled-components'
import { Text } from '@/components/core/typography'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import { FooterProps } from './footer.types'
import { Socials } from './socials'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem;
  min-height: 5.625rem;
  background: var(--color-primary-surface-contrast);

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    justify-content: space-between;
    flex-direction: row;
    padding: 1.25rem 3.5rem 1.25rem 4.375rem;
  }
`

export const Footer: React.FC<FooterProps> = props => {
  return (
    <StyledFooter {...props}>
      <Text inverse variant="Body2">
        Made by Plastic Labs, © {new Date().getFullYear()}
      </Text>
      <Socials />
    </StyledFooter>
  )
}
