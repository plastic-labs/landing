'use client'

import styled from 'styled-components'
import { ButtonLink } from '@/components/interactive/buttons/button-link'
import { WIDE_BREAKPOINT } from '@/styles/breakpoints'
import { NavigationProps } from './header.types'

const StyledNavigationWrapper = styled.div`
  justify-self: end;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  padding: 0 1.5rem;
  border-left: 0.0625rem solid transparent;
  box-sizing: border-box;
  z-index: 1;

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    border-color: var(--color-primary-surface-contrast);
  }
`

const StyledNavigation = styled.nav`
  align-self: center;
  justify-self: center;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1.25rem;
`

export const Navigation: React.FC<NavigationProps> = props => {
  return (
    <StyledNavigationWrapper {...props} id="main-navigation">
      <StyledNavigation aria-label="Main">
        <ButtonLink href="https://blog.plasticlabs.ai/" variant="navigation">
          Blog
        </ButtonLink>
        <ButtonLink href="https://discord.gg/plasticlabs" variant="navigation">
          Community
        </ButtonLink>
      </StyledNavigation>
    </StyledNavigationWrapper>
  )
}
