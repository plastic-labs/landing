import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export const products = ['bloom', 'honcho', 'yousim'] as const
export type Product = (typeof products)[number]

export interface LinkProductProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  inverse?: boolean
  left?: number
  product: Product
  top?: number
}

export interface TitleBarProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export interface ProductNameProps extends HTMLAttributes<HTMLElement> {
  product: Product
}

export interface BackgroundDotsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
