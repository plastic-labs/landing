import { HTMLAttributes } from 'react'

export const cycles = [1, 2, 3] as const
export type Cycle = (typeof cycles)[number]

export interface CharacterCellStyleProps {
  $cellSize: number // pixels
  $cycle: Cycle
}

export interface CharacterCellProps extends HTMLAttributes<HTMLSpanElement> {
  cellSize?: number // pixels
  character: string
  cycle: Cycle
}

export type Character = {
  character: string
  cycle: Cycle
  key: string
}

export interface StatementProps extends HTMLAttributes<HTMLParagraphElement> {
  statement: string
}
