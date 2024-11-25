import { HTMLAttributes, ReactNode } from 'react'

export const periods = ['month', 'year'] as const
export type Period = (typeof periods)[number]

export interface PricingCardProps extends HTMLAttributes<HTMLLIElement> {
  ctas: ReactNode
  description?: string
  details: string[]
  isFeatured?: boolean
  name: string
  period?: Period
  price: number
}
