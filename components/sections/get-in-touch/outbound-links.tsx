'use client'

import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { LinkGiant } from '@/components/interactive/links/link-giant'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'

const StyledOutboundLinks = styled.nav`
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

export const OutboundLinks: React.FC<HTMLAttributes<HTMLElement>> = props => {
  return (
    <StyledOutboundLinks {...props}>
      <LinkGiant
        href="https://discord.gg/plasticlabs"
        inverse
        prompt="To connect with Plastic Labs"
        text="Join Discord"
        title="Plastic Labs"
      />
      <Divider />
      <LinkGiant
        href="mailto:hello@plasticlabs.ai"
        inverse
        prompt="For other inquiries"
        text="hello@plasticlabs.ai"
        title="Questions"
      />
    </StyledOutboundLinks>
  )
}
