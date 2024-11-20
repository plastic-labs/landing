import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { SharedSimpleButtonProps } from '../shared/button.types'

export interface ButtonLogoProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps,
    SharedSimpleButtonProps {}
