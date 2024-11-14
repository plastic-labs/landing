import { HTMLAttributes } from 'react'
import { Color } from '@/styles/palette'

export const typographyTags = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'ol',
  'ul',
  'li',
  'span',
] as const
export type TypographyTag = (typeof typographyTags)[number]

export const typographyVariants = [
  'Banner',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'Body1',
  'Body2',
] as const
export type TypographyVariant = (typeof typographyVariants)[number]

export type DefaultTagMap = {
  [key in TypographyVariant]: TypographyTag
}

export const typographyAlignments = [
  'inherit',
  'left',
  'center',
  'right',
] as const
export type TypographyAlignment = (typeof typographyAlignments)[number]

export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  align?: TypographyAlignment
  as?: TypographyTag
  children: string | string[] | React.ReactNode
  color?: Color
  variant: TypographyVariant
}
