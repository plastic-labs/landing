import { SVGProps } from 'react'
import { Color } from '@/styles/palette'

export interface LogoProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  fill?: Color | 'transparent'
}
