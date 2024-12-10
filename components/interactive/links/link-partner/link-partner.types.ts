import { AnchorHTMLAttributes } from 'react'

export const partnerNames = [
  'betaworks',
  'mozilla-ventures',
  'greycroft',
  'differential',
  'algovera',
  'white-star-capital',
  'seed-club-ventures',
  'thomas-howell',
  'nima-ashgari',
  'triplicate',
] as const
export type PartnerName = (typeof partnerNames)[number]

export interface LinkPartnerProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  partnerName: PartnerName
}

export interface Partner {
  imageSrc?: string
  imageScale?: number
  name: string
  offsetX?: number // +/- integer percent
  offsetY?: number // +/- integer percent
}
