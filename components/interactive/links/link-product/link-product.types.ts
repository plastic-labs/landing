import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export const products = ['bloom', 'honcho', 'yousim'] as const
export type Product = (typeof products)[number]

export type Position = {
  x: number
  y: number
}

export interface LinkProductProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  inverse?: boolean
  isDraggable: boolean
  product: Product
  x?: Position['x']
  y?: Position['y']
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
