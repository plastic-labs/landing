import { HTMLAttributes } from 'react'

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  duration?: number
  inverse?: boolean
}
