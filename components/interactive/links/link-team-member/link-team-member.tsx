'use client'

import styled from 'styled-components'
import { Text } from '@/components/core/typography'
import { TEAM_MEMBERS } from './link-team-member.constants'
import type { LinkTeamMemberProps } from './link-team-member.types'

const StyledLinkTeamMember = styled.a`
  display: grid;
  grid-template-columns: 1fr;
  color: var(--color-primary-surface-contrast);
  text-decoration: none;
`

const StyledFigure = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.75rem;
  margin: 0;
  padding: 0;
`

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 11.125rem;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`

const StyledMemberDetails = styled.figcaption`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.75rem;
`

const StyledName = styled(Text)`
  --line-width: 0.0625rem;

  padding: 0.5rem 0;
  border-width: var(--line-width) 0;
  border-style: solid;
  border-color: var(--color-primary-surface-contrast);
  box-sizing: border-box;

  @media (min-resolution: 192dpi) {
    --line-width: 0.03125rem;
  }

  a:hover:not([data-state]) > * > * > &,
  a[data-state='hover'] > * > * > &,
  a:active:not([data-state]) > * > * > &,
  a[data-state='pressed'] > * > * > & {
    > span {
      background-color: var(--color-primary-accent);
    }
  }
`

const StyledRoles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-wrap: nowrap;
`

export const LinkTeamMember: React.FC<LinkTeamMemberProps> = ({
  teamMemberName,
  ...props
}) => {
  const { firstName, imageSrc, lastName, other, role } =
    TEAM_MEMBERS[teamMemberName]

  return (
    <StyledLinkTeamMember target="_blank" rel="noopener" {...props}>
      <StyledFigure>
        <StyledImage alt={`${firstName} ${lastName}`} src={imageSrc} />
        <StyledMemberDetails>
          <StyledName variant="H3">
            <span>
              {firstName}
              <br />
              {lastName}
            </span>
          </StyledName>
          <StyledRoles>
            <Text variant="H6">
              {'>'} {role}
            </Text>
            <Text variant="Body3">
              {'>'} {other}
            </Text>
          </StyledRoles>
        </StyledMemberDetails>
      </StyledFigure>
    </StyledLinkTeamMember>
  )
}
