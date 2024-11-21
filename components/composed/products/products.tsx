'use client'

import styled from 'styled-components'
import { LinkProduct } from '@/components/interactive/links/link-product'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import type { ProductsProps } from './products.types'

const StyledProducts = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  min-height: 37.5rem;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    //
  }
`

export const Products: React.FC<ProductsProps> = props => {
  return (
    <StyledProducts {...props}>
      <LinkProduct href="https://honcho.dev/" product="honcho" />
      <LinkProduct href="https://bloombot.ai/" product="bloom" />
      <LinkProduct href="https://yousim.ai/" product="yousim" />
    </StyledProducts>
  )
}
