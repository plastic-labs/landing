import { HTMLAttributes } from 'react'

export const directions = ['horizontal', 'vertical'] as const
export type Direction = (typeof directions)[number]

export interface AsciiFieldProps extends HTMLAttributes<HTMLElement> {
  direction?: Direction
  duration?: number
  inverse?: boolean
}

export type FigureSize = {
  height: number
  width: number
}
