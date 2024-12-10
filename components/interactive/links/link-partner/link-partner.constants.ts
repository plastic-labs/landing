import { Partner, PartnerName } from './link-partner.types'

export const PARTNER_WIDTH = 18.75 // rem

export const PARTNERS: Record<PartnerName, Partner> = {
  betaworks: {
    imageSrc: '/partner/betaworks.svg',
    imageScale: 0.60667,
    name: 'betaworks',
  },
  'mozilla-ventures': {
    imageSrc: '/partner/mozilla-ventures.svg',
    imageScale: 0.78,
    name: 'Mozilla Ventures',
  },
  greycroft: {
    imageSrc: '/partner/greycroft.svg',
    imageScale: 0.41,
    name: 'Greycroft',
  },
  differential: {
    imageSrc: '/partner/differential.svg',
    imageScale: 0.50333,
    name: 'Differential',
  },
  algovera: {
    imageSrc: '/partner/algovera.svg',
    imageScale: 0.47333,
    name: 'Algovera',
  },
  'white-star-capital': {
    imageSrc: '/partner/white-star-capital.svg',
    imageScale: 0.66667,
    name: 'White Star Capital',
  },
  'seed-club-ventures': {
    imageSrc: '/partner/seed-club-ventures.png',
    imageScale: 0.6,
    name: 'Seed Club Ventures',
    offsetX: -5,
    offsetY: -10,
  },
  'thomas-howell': {
    name: 'Thomas Howell',
  },
  'nima-ashgari': {
    name: 'NiMA Asghari',
  },
  triplicate: {
    imageSrc: '/partner/triplicate.svg',
    imageScale: 0.55,
    name: 'Triplicate',
  },
}
