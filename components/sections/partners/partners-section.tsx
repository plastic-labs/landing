'use client'

import styled from 'styled-components'
import { Partners } from '@/components/composed/partners'
import { Title } from '@/components/core/title'
import { Text } from '@/components/core/typography'
import { Section } from '@/components/layout/section'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'

const StyledPartnersSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  padding: 3.25rem 1rem;
  border-top: 0.0625rem solid var(--color-primary-surface-contrast);
  box-sizing: border-box;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-gap: 4.75rem;
    padding: 2.8125rem 0 8.625rem;
  }
`

const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5rem;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-gap: 8.25rem;
    padding: 0 4.735rem;
  }
`

const StyledAccent = styled(Text)`
  @media (min-width: ${THIN_BREAKPOINT}rem) {
    margin-left: -0.2em;
  }
`

export const PartnersSection: React.FC = () => {
  return (
    <StyledPartnersSection id="partners">
      <StyledIntro>
        <Title title="Our Partners" />
        <StyledAccent variant="Accent2">We are backed by</StyledAccent>
      </StyledIntro>
      <Partners />
    </StyledPartnersSection>
  )
}
