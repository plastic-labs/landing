import { AnchorHTMLAttributes, FunctionComponent, SVGProps } from 'react'

export const hrefOrigins = [
  'https://discord.gg',
  'https://github.com',
  'https://huggingface.co',
  'https://twitter.com',
  'https://x.com',
] as const
export type HrefOrigin = (typeof hrefOrigins)[number]

export type HrefOriginIconMap = Record<
  HrefOrigin,
  FunctionComponent<SVGProps<SVGSVGElement>>
>

export type Href = `${HrefOrigin}${string}`

export interface ButtonSocialProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: Href
}
