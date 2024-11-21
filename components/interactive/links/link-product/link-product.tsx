'use client'

import styled, { css } from 'styled-components'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import { inverseThemePaletteVar } from '@/styles/themes'
import { BackgroundDots } from './background-dots'
import { ProductName } from './product-name'
import { TitleBar } from './title-bar'
import type { LinkProductProps } from './link-product.types'

const StyledLinkProduct = styled.a<{ $inverse?: boolean; $left: number; $top: number }>`
  --surface-base: var(--interactive-product-surface);
  --surface-contrast-base: var(--interactive-product-surface-contrast);
  --accent-base: var(--interactive-product-accent);
  --surface-hover-base: var(--interactive-product-surface-hover);
  --border-hover-base: var(--interactive-product-border-hover);

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.375rem;
  padding: 0.375rem;
  max-width: 27rem;
  color: var(--surface-contrast-base);
  background: var(--surface-base);
  border: 0.03125rem solid var(--surface-contrast-base);
  border-radius: 0.25rem;
  text-decoration: none;
  box-sizing: border-box;
  isolation: isolate;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    width: 100%;
  }

  ${({ $inverse, theme }) =>
    $inverse
      ? css`
          --surface-base: var(
            ${inverseThemePaletteVar(theme, '--interactive-product-surface')}
          );
          --surface-contrast-base: var(
            ${inverseThemePaletteVar(
              theme,
              '--interactive-product-surface-contrast',
            )}
          );
          --accent-base: var(
            ${inverseThemePaletteVar(theme, '--interactive-product-accent')}
          );
          --surface-hover-base: var(
            ${inverseThemePaletteVar(
              theme,
              '--interactive-product-surface-hover',
            )}
          );
          --border-hover-base: var(
            ${inverseThemePaletteVar(
              theme,
              '--interactive-product-border-hover',
            )}
          );
        `
      : ''}
`

/**
 * This component is used as an outbound link to a Plastic Labs product.
 */
export const LinkProduct: React.FC<LinkProductProps> = ({
  href,
  inverse,
  left = 0,
  product,
  top = 0,
  ...props
}) => {
  if (!href) {
    return null
  }

  return (
    <StyledLinkProduct
      {...props}
      href={href}
      target="_blank"
      rel="noopener"
      $left={left}
      $inverse={inverse}
      $top={top}
    >
      <TitleBar>Enter</TitleBar>
      <BackgroundDots>
        <ProductName product={product} />
      </BackgroundDots>
    </StyledLinkProduct>
  )
}
