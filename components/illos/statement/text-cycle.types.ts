import { HTMLAttributes } from 'react'

export const cycles = [1, 2, 3, 4] as const
export type Cycle = (typeof cycles)[number]

export interface CharacterCellStyleProps {
  $cycle: Cycle
  $duration: number
}

export interface CharacterCellProps extends HTMLAttributes<HTMLSpanElement> {
  character: string
  cycle: Cycle
  duration: number
}

export type Character = {
  character: string
  cycle: Cycle
  key: string
}

export interface NumberStyleProps {
  $column: number
  $cycle: Cycle
  $duration: number
  $left: number
  $row: number
  $top: number
}

export interface StatementProps extends HTMLAttributes<HTMLParagraphElement> {
  characterCount?: number
  duration?: number
  statement: string
}
