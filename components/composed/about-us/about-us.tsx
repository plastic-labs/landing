'use client'

import styled from 'styled-components'
import { Text } from '@/components/core/typography'
import { ButtonLink } from '@/components/interactive/buttons/button-link'
import { BREAKPOINT } from '@/styles/breakpoints'
import { TextContent } from '../text-content'
import type { AboutUsProps } from './about-us.types'

const StyledAboutUs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;

  @media (min-width: ${BREAKPOINT}rem) {
    padding: 8.75rem 4.375rem 4.375rem;
  }
`

export const AboutUs: React.FC<AboutUsProps> = props => {
  return (
    <StyledAboutUs {...props}>
      <TextContent
        title="About Us"
        ctas={
          <ButtonLink href="https://blog.plasticlabs.ai/">
            Learn more
          </ButtonLink>
        }
      >
        <Text variant="Body2">
          Plastic Labs is a research-driven company building at the intersection
          of human and machine cognition.
        </Text>
        <Text variant="Body2">
          Our mission is to solve identity for the agentic world, accelerating a
          future of abundant, dynamically-aligned synthetic intelligence.
        </Text>
      </TextContent>
    </StyledAboutUs>
  )
}
