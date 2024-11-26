import { TeamMember, TeamMemberName } from './link-team-member.types'

export const TEAM_MEMBERS: Record<TeamMemberName, TeamMember> = {
  'trost-vince': {
    firstName: 'Vince',
    imageSrc: '/team/trost-vince.png',
    lastName: 'Trost',
    other: 'ML, Crypto',
    role: 'Co-founder / CEO',
  },
  'voruganti-vineeth': {
    firstName: 'Vineeth',
    imageSrc: '/team/voruganti-vineeth.png',
    lastName: 'Voruganti',
    other: 'Systems, DevSecOps',
    role: 'Co-founder / CTO',
  },
  'leer-courtland': {
    firstName: 'Courtland',
    imageSrc: '/team/leer-courtland.png',
    lastName: 'Leer',
    other: 'CogSci, Memetics',
    role: 'Co-founder / COO',
  },
  'balcells-dani': {
    firstName: 'Dani',
    imageSrc: '/team/balcells-dani.png',
    lastName: 'Balcells',
    other: 'Research, Evals',
    role: 'Founding ML Engineer',
  },
  'lopata-ben': {
    firstName: 'Ben',
    imageSrc: '/team/lopata-ben.png',
    lastName: 'Lopata',
    other: 'Full Stack, DevOps',
    role: 'Founding Engineer',
  },
  'davis-lili': {
    firstName: 'Lili',
    imageSrc: '/team/davis-lili.png',
    lastName: 'Davis',
    other: 'Community, Growth',
    role: 'Bloom Lead',
  },
  'paul-ayush': {
    firstName: 'Ayush',
    imageSrc: '/team/paul-ayush.png',
    lastName: 'Paul',
    other: 'Dev/ML, Design',
    role: 'Engineering Intern',
  },
}
