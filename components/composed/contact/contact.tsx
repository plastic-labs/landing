'use client'

import styled from 'styled-components'
import { LinkGiant } from '@/components/interactive/links/link-giant'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import type { ContactProps } from './contact.types'

const StyledContact = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: var(--line-width) solid var(--color-primary-surface);
  box-sizing: border-box;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-template-columns: 1fr min-content 1fr;
  }
`

const Divider = styled.span`
  height: var(--line-width);
  background: var(--color-primary-surface);

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    width: var(--line-width);
    height: auto;
  }
`

export const Contact: React.FC<ContactProps> = props => {
  return (
    <StyledContact {...props} aria-label="Contact">
      <LinkGiant
        href="https://discord.gg/plasticlabs"
        inverse
        prompt="To connect with Plastic Labs"
        text="Join Discord"
        title="Contact"
      />
      <Divider />
      <LinkGiant
        href="mailto:hello@plasticlabs.ai"
        inverse
        prompt="For other inquiries"
        text="Email hello@plasticlabs.ai"
        title="Inquire"
      />
    </StyledContact>
  )
}
