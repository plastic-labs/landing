import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { SharedThemeProps } from '../shared/theme.types'

export interface InlineLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps,
    SharedThemeProps {
  children: ReactNode
}
