'use client'

import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  LinkProduct,
  Position,
  LINK_PRODUCT_MAX_HEIGHT,
  LINK_PRODUCT_MAX_WIDTH,
} from '@/components/interactive/links/link-product'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import type { Area, ProductsProps, Range } from './products.types'

const StyledProducts = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  min-height: 37.5rem;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const startingValue = ({ high, low }: Range): number =>
  high <= low ? high : Math.round(Math.random() * (high - low)) + low

const startingPosition = (h: Range, v: Range): Position => ({
  x: startingValue(h),
  y: startingValue(v),
})

const initialArea: Area = { height: 0, width: 0 }

export const Products: React.FC<ProductsProps> = props => {
  const productsRef = useRef<HTMLElement>(null)
  const [area, setArea] = useState<Area>(initialArea)
  const [isDraggable, setIsDraggable] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= THIN_BREAKPOINT * 16 && !isDraggable) {
        setIsDraggable(true)
      } else if (window.innerWidth < THIN_BREAKPOINT * 16 && isDraggable) {
        setIsDraggable(false)
      }
      const { height, width } =
        productsRef.current?.getBoundingClientRect() || initialArea
      if (height !== area.height || width !== area.width) {
        setArea({ height, width })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [area, isDraggable])

  return (
    <StyledProducts {...props} ref={productsRef}>
      <LinkProduct
        href="https://honcho.dev/"
        isDraggable={isDraggable}
        product="honcho"
        {...startingPosition(
          { low: 70, high: area.width / 5 },
          { low: 140, high: area.height - LINK_PRODUCT_MAX_HEIGHT },
        )}
      />
      <LinkProduct
        href="https://bloombot.ai/"
        isDraggable={isDraggable}
        product="bloom"
        {...startingPosition(
          {
            low: area.width / 4,
            high: Math.min(area.width / 2, area.width - LINK_PRODUCT_MAX_WIDTH),
          },
          { low: 140, high: area.height - LINK_PRODUCT_MAX_HEIGHT },
        )}
      />
      <LinkProduct
        href="https://yousim.ai/"
        isDraggable={isDraggable}
        product="yousim"
        {...startingPosition(
          {
            low: area.width / 2,
            high: area.width - LINK_PRODUCT_MAX_WIDTH - 70,
          },
          {
            low: 40,
            high: Math.min(
              area.height / 3,
              area.height - LINK_PRODUCT_MAX_HEIGHT,
            ),
          },
        )}
      />
    </StyledProducts>
  )
}
