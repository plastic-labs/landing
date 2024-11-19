import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { SharedButtonProps } from '../shared/button.types'

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps,
    SharedButtonProps {
  children: ReactNode
}
