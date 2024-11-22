'use client'

import styled from 'styled-components'
import { Text } from '@/components/core/typography'
import { ButtonLink } from '@/components/interactive/buttons/button-link'
import { TextContent } from '../text-content'
import type { AboutUsProps } from './about-us.types'
import { BREAKPOINT } from '@/styles/breakpoints'

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
        ctas={<ButtonLink href="https://blog.plasticlabs.ai/">Blog</ButtonLink>}
      >
        <Text variant="Body2">
          Plastic Labs is a research-driven product company building at the
          intersection of human and machine learning.
        </Text>
        <Text variant="Body2">
          Our mission is to eliminate the principal-agent problem in human-AI
          interaction, powering a future of abundant, autonomous,
          individually-aligned agents.
        </Text>
      </TextContent>
    </StyledAboutUs>
  )
}
