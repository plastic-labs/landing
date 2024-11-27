'use client'

import styled from 'styled-components'
import { Team } from '@/components/composed/team'
import { Title } from '@/components/core/title'
import { Section } from '@/components/layout/section'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'

const StyledTeamSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.375rem;
  padding: 2.8125rem 1rem;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-gap: 4.75rem;
    padding: 2.8125rem 4.375rem 7.875rem;
  }
`

export const TeamSection: React.FC = () => {
  return (
    <StyledTeamSection id="team">
      <Title title="The Team" />
      <Team />
    </StyledTeamSection>
  )
}
