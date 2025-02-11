'use client'

import styled from 'styled-components'
import {
  LinkTeamMember,
  teamMemberNames,
} from '@/components/interactive/links/link-team-member'
import type { TeamProps } from './team.types'
import type { TeamMemberName } from '@/components/interactive/links/link-team-member'

const teamMemberHref: Record<TeamMemberName, string> = {
  'trost-vince': 'https://x.com/vintrotweets',
  'voruganti-vineeth': 'https://x.com/TheMarshmalon',
  'leer-courtland': 'https://x.com/courtlandleer',
  'balcells-dani': 'https://x.com/danibalcells',
  'davis-lili': 'http://www.linkedin.com/in/lili-behumi-davis-a296b4156',
  'paul-ayush': 'https://x.com/hyusapx',
  'tokens-novel': 'https://x.com/noveltokens',
}

const StyledTeam = styled.nav`
  justify-self: start;
  display: grid;
  grid-template-columns: repeat(2, min(calc((100vw - 3rem) / 2), 11rem));
  grid-gap: 0.75rem 1rem;
  margin: 0 auto 0 0;
  width: min-content;

  @media (min-width: 38rem) {
    grid-template-columns: repeat(3, 11.5625rem);
    grid-gap: 0.75rem;
  }

  @media (min-width: 56rem) {
    grid-template-columns: repeat(4, 11.5625rem);
  }

  @media (min-width: 95rem) {
    grid-template-columns: repeat(7, 11.5625rem);
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
