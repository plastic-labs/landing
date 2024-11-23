import { HTMLAttributes } from 'react'

export interface HeroStatementProps extends HTMLAttributes<HTMLDivElement> {}

export type StatementState = {
  characterCount: number
  name: 'thin' | 'wide'
  statement: string
}
