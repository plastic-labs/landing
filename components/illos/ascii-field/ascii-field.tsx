'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { WIDE_BREAKPOINT } from '@/styles/breakpoints'
import { inverseThemePaletteVar } from '@/styles/themes'
import { FIELD } from './ascii-field.constants'
import { AsciiFieldProps, Direction, FigureSize } from './ascii-field.types'

const swayHorizontal = keyframes`
  0% {
    transform: translate(0, -50%);
  }
  50% {
    transform: translate(calc(-100% + var(--figure-width) * 1px), -50%);
  }
  100% {
    transform: translate(0, -50%);
  }
`

const swayVertical = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, calc(-100% + var(--figure-height) * 1px));
  }
  100% {
    transform: translate(-50%, 0);
  }
`

const StyledAsciiField = styled.figure<{
  $inverse: boolean
}>`
  --color: var(--color-primary-surface-contrast);
  --background: var(--color-primary-surface);

  align-self: stretch;
  justify-self: stretch;
  position: relative;
  display: grid;
  align-items: center;
  justify-items: start;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  overflow: hidden;

  color: var(--color);
  background: var(--background);

  box-sizing: border-box;
  user-select: none;
  pointer-events: none;

  ${({ $inverse, theme }) =>
    $inverse
      ? css`
          --color: var(
            ${inverseThemePaletteVar(theme, '--color-primary-surface-contrast')}
          );
          --background: var(
            ${inverseThemePaletteVar(theme, '--color-primary-surface')}
          );
        `
      : ''}
`

const StyledField = styled.p<{
  $direction: Direction
  $duration: number
}>`
  --figure-height: 0;
  --figure-width: 0;

  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;

  color: currentColor;
  font-size: max(1.75vw, 0.9rem);
  line-height: 1;

  animation-duration: ${({ $duration }) => $duration}s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-iteration-count: infinite;

  ${({ $direction }) => {
    switch ($direction) {
      case 'vertical':
        return css`
          top: 0;
          left: 50%;

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            font-size: max(1.35vw, 1rem);
            font-weight: 200;
            opacity: 0.7;
          }

          animation-name: ${swayVertical};
        `
      case 'horizontal':
      default:
        return css`
          top: 50%;
          left: 0;

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            font-size: max(1.1vw, 1rem);
            font-weight: 300;
          }

          animation-name: ${swayHorizontal};
        `
    }
  }}
`

const StyledRow = styled.span`
  color: currentColor;
  white-space: nowrap;
`

const initialFigureSize: FigureSize = { height: 0, width: 0 }

export const AsciiField: React.FC<AsciiFieldProps> = ({
  direction = 'horizontal',
  duration = 20,
  inverse = false,
  ...props
}) => {
  const figureRef = useRef<HTMLElement>(null)
  const [figureSize, setFigureSize] = useState<FigureSize>(initialFigureSize)

  useEffect(() => {
    const handleResize = () => {
      const { height, width } =
        figureRef.current?.getBoundingClientRect() || initialFigureSize
      setFigureSize({ height, width })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <StyledAsciiField {...props} ref={figureRef} $inverse={inverse}>
      <StyledField
        style={
          {
            '--figure-height': figureSize.height,
            '--figure-width': figureSize.width,
          } as CSSProperties
        }
        $direction={direction}
        $duration={duration}
      >
        {FIELD.trim()
          .split('\n')
          .map(row => (
            <StyledRow key={row}>{row}</StyledRow>
          ))}
      </StyledField>
    </StyledAsciiField>
  )
}
