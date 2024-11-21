'use client'

import styled from 'styled-components'
import {
  LinkTeamMember,
  teamMemberNames,
} from '@/components/interactive/links/link-team-member'
import { BREAKPOINT, EXTRA_WIDE_BREAKPOINT, THIN_BREAKPOINT } from '@/styles/breakpoints'
import type { TeamProps } from './team.types'
import type { TeamMemberName } from '@/components/interactive/links/link-team-member'

const teamMemberHref: Record<TeamMemberName, string> = {
  'leer-courtland': 'https://x.com/courtlandleer',
  'trost-vince': 'https://x.com/vintrotweets',
  'voruganti-vineeth': 'https://x.com/TheMarshmalon',
  'balcells-dani': 'https://x.com/danibalcells',
  'lopata-ben': 'https://x.com/bengineer10',
  'paul-ayush': 'https://x.com/hyusapx',
  'davis-lili': '',
}

const StyledTeam = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, min(calc((100vw - 3rem) / 2), 177px));
  grid-gap: 0.75rem 1rem;
  margin: 0 auto;
  width: min-content;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-template-columns: repeat(3, 185px);
    grid-gap: 0.75rem;
  }

  @media (min-width: ${BREAKPOINT}rem) {
    grid-template-columns: repeat(4, 185px);
  }

  @media (min-width: ${EXTRA_WIDE_BREAKPOINT}rem) {
    grid-template-columns: repeat(7, 185px);
  }
`

export const Team: React.FC<TeamProps> = props => {
  return (
    <StyledTeam {...props}>
      {teamMemberNames.map(teamMemberName => (
        <LinkTeamMember
          href={teamMemberHref[teamMemberName]}
          teamMemberName={teamMemberName}
          key={teamMemberName}
        />
      ))}
    </StyledTeam>
  )
}
