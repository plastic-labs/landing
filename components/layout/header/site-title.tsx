'use client'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import styled from 'styled-components'
import { Text } from '@/components/core/typography'
import { Wordmark } from '@/components/core/wordmark'
import { WIDE_BREAKPOINT } from '@/styles/breakpoints'
import type { SiteTitleProps } from './header.types'

const StyledSiteTitle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 0;

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    display: flex;
  }
`

export const SiteTitle: React.FC<SiteTitleProps> = props => {
  return (
    <StyledSiteTitle {...props}>
      <VisuallyHidden>
        <Text variant="H1">Plastic Labs</Text>
      </VisuallyHidden>
      <Wordmark height={23} width={128} />
    </StyledSiteTitle>
  )
}
