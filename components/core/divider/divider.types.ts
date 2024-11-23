import { HTMLAttributes } from 'react'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  columns?: string
  rows?: string
}

export interface DividerStyleProps {
  $columns: string
  $rows: string
}
