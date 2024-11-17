import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export interface ButtonLogoProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps {}
