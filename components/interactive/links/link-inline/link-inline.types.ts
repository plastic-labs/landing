import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { SharedThemeProps } from '../../buttons/shared/theme.types'

export interface LinkInlineProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps,
    SharedThemeProps {
  children: ReactNode
}
