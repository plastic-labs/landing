'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from 'react-draggable'
import styled, { css, keyframes } from 'styled-components'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import { inverseThemePaletteVar } from '@/styles/themes'
import { BackgroundDots } from './background-dots'
import { ProductName } from './product-name'
import { TitleBar } from './title-bar'
import type { LinkProductProps, Position } from './link-product.types'

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledLinkProduct = styled.a<{ $inverse?: boolean }>`
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

  opacity: 0;
  animation-name: ${appear};
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-delay: 500ms;
  animation-fill-mode: forwards;

  @media (max-width: ${THIN_BREAKPOINT - 0.0625}rem) {
    transform: none !important;
  }

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    position: absolute;
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
  isDraggable,
  product,
  x = 0,
  y = 0,
  ...props
}) => {
  const productRef = useRef<HTMLAnchorElement>(null)
  const [previousPosition, setPreviousPosition] = useState<Position>({
    x,
    y,
  })
  const [wasDragging, setWasDragging] = useState<boolean>(false)

  useEffect(() => {
    setPreviousPosition({ x, y })
  }, [x, y])

  if (!href) {
    return null
  }

  const handleDragStop: DraggableEventHandler = (
    _: DraggableEvent,
    { lastX, lastY }: DraggableData,
  ): void => {
    if (lastX !== previousPosition.x || lastY !== previousPosition.y) {
      setWasDragging(true)
      setPreviousPosition({ x: lastX, y: lastY })
    }
  }

  const handlePress = (event: MouseEvent<HTMLAnchorElement>) => {
    if (wasDragging) {
      event.preventDefault()
      setWasDragging(false)
    }
  }

  return (
    <Draggable
      bounds="parent"
      disabled={!isDraggable}
      nodeRef={productRef}
      onStop={handleDragStop}
      position={previousPosition}
    >
      <StyledLinkProduct
        {...props}
        draggable="false"
        href={href}
        onClick={handlePress}
        rel="noopener"
        target="_blank"
        ref={productRef}
        $inverse={inverse}
      >
        <TitleBar>{`Enter ${product}`}</TitleBar>
        <BackgroundDots>
          <ProductName product={product} />
        </BackgroundDots>
      </StyledLinkProduct>
    </Draggable>
  )
}
