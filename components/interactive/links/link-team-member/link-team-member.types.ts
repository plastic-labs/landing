import { AnchorHTMLAttributes } from 'react'

export const teamMemberNames = [
  'leer-courtland',
  'trost-vince',
  'voruganti-vineeth',
  'balcells-dani',
  'lopata-ben',
  'paul-ayush',
  'davis-lili',
] as const
export type TeamMemberName = (typeof teamMemberNames)[number]

export interface LinkTeamMemberProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  teamMemberName: TeamMemberName
}

export interface TeamMember {
  firstName: string
  imageSrc: string
  lastName: string
  other: string
  role: string
}
