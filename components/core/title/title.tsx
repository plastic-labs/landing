'use client'

import styled, { keyframes } from 'styled-components'
import { Text } from '../typography'
import type { TitleProps } from './title.types'

const blink = keyframes`
  0% {
    opacity: 0;
  }
  65.99999% {
    opacity: 0;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`

const StyledTitleArea = styled.div<{ $delay: number }>`
  display: flex;
  flex-direction: column;

  * {
    text-transform: lowercase;
    white-space: nowrap;

    &:first-child:before {
      content: '>';
      padding-right: 0.34em;
    }

    &:not(:first-child):before {
      content: '-';
      padding-right: 0.34em;
    }
  }

  *:first-child::after {
    content: '\258A';
    padding-left: 0.5em;

    animation-name: ${blink};
    animation-duration: 2s;
    animation-delay: ${({ $delay }) => $delay}ms;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
    animation-iteration-count: infinite;
  }
`

export const Title: React.FC<TitleProps> = ({ title, subItems, ...props }) => {
  const delay = Math.random() * 500 // ms

  return (
    <StyledTitleArea {...props} $delay={delay}>
      <Text as="h2" variant="Body2">
        {title}
      </Text>
      {subItems?.length
        ? subItems.map(subItem => (
            <Text variant="Body2" key={subItem}>
              {subItem}
            </Text>
          ))
        : null}
    </StyledTitleArea>
  )
}
