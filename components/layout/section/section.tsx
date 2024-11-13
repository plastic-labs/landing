'use client'

import styled, { css } from 'styled-components'
import { SectionProps } from './section.types'

const StyledSection = styled.section<{ $useViewport: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  font-family: var(--default-font-family);

  ${({ $useViewport }) =>
    $useViewport
      ? css`
          height: 100vh;

          @supports (height: 100dvh) {
            height: 100dvh;
          }
        `
      : ''}
`

export const Section: React.FC<SectionProps> = ({
  children,
  useViewport = false,
  ...props
}) => {
  return (
    <StyledSection {...props} $useViewport={useViewport}>
      {children}
    </StyledSection>
  )
}
