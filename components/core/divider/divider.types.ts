import { HTMLAttributes } from 'react'

export const orientations = ['horizontal', 'vertical'] as const
export type Orientation = (typeof orientations)[number]

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation: Orientation
  columns?: string
  rows?: string
}

export interface DividerStyleProps {
  $orientation: Orientation
  $columns: string
  $rows: string
}
