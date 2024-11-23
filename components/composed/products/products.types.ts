import { HTMLAttributes } from 'react'

export type Area = {
  height: number
  width: number
}

export type Range = {
  low: number
  high: number
}

export interface ProductsProps extends HTMLAttributes<HTMLDivElement> {}
