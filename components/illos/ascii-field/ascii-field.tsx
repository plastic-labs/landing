'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FIELD } from './ascii-field.constants'
import { AsciiFieldProps } from './ascii-field.types'

const shift = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(-100% + var(--figure-width) * 1px));
  }
  100% {
    transform: translateX(0);
  }
`

const StyledAsciiField = styled.figure`
  display: grid;
  align-items: center;
  justify-items: start;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  min-width: 0;
  overflow: hidden;
  box-sizing: border-box;
`

const StyledField = styled.p<{ $duration: number }>`
  --figure-width: 0;

  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  font-size: 1.29113rem;
  line-height: 1;
  object-position: left center;

  animation-name: ${shift};
  animation-duration: ${({ $duration }) => $duration}s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`

const StyledRow = styled.span`
  color: var(--color-primary-surface-contrast);
  white-space: nowrap;
`

export const AsciiField: React.FC<AsciiFieldProps> = ({
  duration = 20,
  ...props
}) => {
  const figureRef = useRef<HTMLElement>(null)
  const [figureWidth, setFigureWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setFigureWidth(figureRef.current?.getBoundingClientRect().width || 0)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <StyledAsciiField {...props} ref={figureRef}>
      <StyledField
        style={{ '--figure-width': figureWidth } as CSSProperties}
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
