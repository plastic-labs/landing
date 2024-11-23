'use client'

import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Statement } from '@/components/illos/statement'
import { BREAKPOINT } from '@/styles/breakpoints'
import type { HeroStatementProps, StatementState } from './hero-statement.types'

const StyledHeroStatement = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  padding: 3.25rem 1rem;

  @media (min-width: ${BREAKPOINT}rem) {
    align-items: start;
    padding: 0;
  }
`

const thinViewportState: StatementState = {
  characterCount: 9,
  name: 'thin',
  statement: 'Radically\nDecentralizing \nAlignment',
}

const wideViewportState: StatementState = {
  characterCount: 14,
  name: 'wide',
  statement: 'Radically \nDecentralizing Alignment',
}

export const HeroStatement: React.FC<HeroStatementProps> = props => {
  const heroStatementRef = useRef<HTMLDivElement>(null)
  const [statementState, setStatementState] =
    useState<StatementState>(thinViewportState)

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth < BREAKPOINT * 16 &&
        statementState.name === 'wide'
      ) {
        setStatementState(thinViewportState)
      } else if (
        window.innerWidth >= BREAKPOINT * 16 &&
        statementState.name === 'thin'
      ) {
        setStatementState(wideViewportState)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { name, ...statementProps } = statementState

  return (
    <StyledHeroStatement {...props} ref={heroStatementRef}>
      <Statement {...statementProps} />
    </StyledHeroStatement>
  )
}
