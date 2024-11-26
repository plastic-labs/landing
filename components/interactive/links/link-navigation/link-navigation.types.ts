import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface LinkNavigationProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps {
  children: ReactNode
}
