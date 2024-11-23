'use client'

import styled from 'styled-components'
import { Title } from '@/components/core/title'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import type { TextContentProps } from './text-content.types'

const StyledTextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.125rem;
  max-width: 56.25rem;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    display: block;
    column-count: 2;
    column-gap: 1.25rem;
  }
`

const StyledActions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > * {
      min-width: 13.25rem;
    }
  }
`

export const TextContent: React.FC<TextContentProps> = ({
  children,
  ctas = null,
  title,
  ...props
}) => {
  return (
    <StyledTextContent {...props}>
      <Title title={title} />
      <StyledContent>{children}</StyledContent>
      {ctas ? <StyledActions>{ctas}</StyledActions> : null}
    </StyledTextContent>
  )
}
