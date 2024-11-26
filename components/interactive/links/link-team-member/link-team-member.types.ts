import { AnchorHTMLAttributes } from 'react'

export const teamMemberNames = [
  'trost-vince',
  'voruganti-vineeth',
  'leer-courtland',
  'balcells-dani',
  'lopata-ben',
  'davis-lili',
  'paul-ayush',
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
