import { AnchorHTMLAttributes, ReactNode } from 'react'
import { SharedThemeProps } from '../shared/theme.types'

export interface ButtonLinkXlProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    SharedThemeProps {
  href: string
  children: ReactNode
}
