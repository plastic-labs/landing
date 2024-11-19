import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export const products = ['bloom', 'honcho', 'yousim'] as const
export type Product = (typeof products)[number]

export interface ButtonProductProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  inverse?: boolean
  product: Product
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
