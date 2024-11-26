import { HTMLAttributes, ReactNode } from 'react'

export interface TextContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  ctas?: ReactNode
  title: string
}
