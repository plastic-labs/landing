import { HTMLAttributes, ReactNode } from 'react'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  useViewport?: boolean
}
