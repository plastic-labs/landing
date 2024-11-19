'use client'

import { SVGProps } from 'react'
import styled from 'styled-components'
import { IconBloom } from './icon-bloom'
import { IconHoncho } from './icon-honcho'
import { IconYousim } from './icon-yousim'
import type { Product, ProductNameProps } from './link-product.types'

const productNameMap: Record<Product, React.FC<SVGProps<SVGSVGElement>>> = {
  bloom: IconBloom,
  honcho: IconHoncho,
  yousim: IconYousim,
}

const StyledProductName = styled.figure`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: stretch;
  margin: 0;
  padding: 0.25rem 0 0;
  color: var(--surface-base, var(--interactive-product-surface));
  transition: color var(--ui-transition-speed) ease;

  *:hover:not([data-state]) > * > &,
  *[data-state='hover'] > * > &,
  *:active:not([data-state]) > * > &,
  *[data-state='pressed'] > * > & {
    > svg:last-child {
      color: var(--accent-base, var(--interactive-product-accent));
      transition: color var(--ui-transition-speed) ease;
    }
  }
`

export const ProductName: React.FC<ProductNameProps> = ({
  product,
  ...props
}) => {
  const IconName = productNameMap[product]

  return (
    <StyledProductName {...props}>
      <IconName />
      <IconName />
      <IconName />
      <IconName />
      <IconName />
    </StyledProductName>
  )
}
