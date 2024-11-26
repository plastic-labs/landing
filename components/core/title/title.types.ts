import { HTMLAttributes } from 'react'

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
  subItems?: string[]
  title: string
}
