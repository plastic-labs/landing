'use client'

import styled from 'styled-components'
import { Marquee } from '@/components/core/marquee'
import { Section } from '@/components/layout/section'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import { OutboundLinks } from './outbound-links'

const StyledGetInTouchSection = styled(Section)`
  --line-width: 0.0625rem;

  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  background: var(--color-primary-surface-contrast);
  border-width: var(--line-width) 0;
  border-style: solid;
  border-color: var(--color-primary-surface);

  @media (min-resolution: 192dpi) {
    --line-width: 0.03125rem;
  }

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    //
  }
`

export const GetInTouchSection: React.FC = () => {
  return (
    <StyledGetInTouchSection>
      <OutboundLinks />
      <Marquee inverse>Get in Touch</Marquee>
    </StyledGetInTouchSection>
  )
}
