import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { SharedThemeProps } from '../../buttons/shared/theme.types'

export interface LinkGiantProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    LinkProps,
    SharedThemeProps {
  prompt: string
  text: string
  title: string
}
