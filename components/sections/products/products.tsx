'use client'

import styled from 'styled-components'
import { Products } from '@/components/composed/products'
import { Title } from '@/components/core/title'
import { Section } from '@/components/layout/section'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'

const StyledProductsSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    padding: 1rem;
  }
`

const StyledProductsInner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.875rem;
  padding: 1.875rem 1rem;
  color: var(--color-primary-surface);
  background: var(--color-primary-surface-contrast);

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-gap: 0;
    padding: 2.5rem 3.375rem;
    min-height: 37.5rem;
    border-radius: 0.25rem;
  }
`

export const ProductsSection: React.FC = () => {
  return (
    <StyledProductsSection>
      <StyledProductsInner>
        <Title title="Our Products" subItems={['Honcho', 'Bloom', 'Yousim']} />
        <Products />
      </StyledProductsInner>
    </StyledProductsSection>
  )
}
