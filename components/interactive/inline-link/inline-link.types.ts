import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface InlineLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps {
  children: ReactNode
}
