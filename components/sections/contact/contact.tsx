'use client'

import styled from 'styled-components'
import { Contact } from '@/components/composed/contact'
import { AsciiField } from '@/components/illos/ascii-field'
import { Section } from '@/components/layout/section'
import { WIDE_BREAKPOINT } from '@/styles/breakpoints'

const StyledContactSection = styled(Section)`
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
`

const StyledAsciiField = styled(AsciiField)`
  min-height: 6rem;

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    min-height: 12rem;
  }
`

export const ContactSection: React.FC = () => {
  return (
    <StyledContactSection id="contact">
      <Contact />
      <StyledAsciiField direction="vertical" inverse />
    </StyledContactSection>
  )
}
