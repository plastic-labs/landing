'use client'

import styled, { css, keyframes } from 'styled-components'
import { inverseThemePaletteVar } from '@/styles/themes'
import { Text } from '../typography'
import type { MarqueeProps } from './marquee.types'

const marqueeScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const StyledMarqueeWrapper = styled.div<{ $inverse?: boolean }>`
  --surface-contrast-base: var(--color-primary-surface-contrast);

  display: flex;
  justify-content: start;
  overflow-x: hidden;
  color: var(--surface-contrast-base);

  ${({ $inverse, theme }) =>
    $inverse
      ? css`
          --surface-contrast-base: var(
            ${inverseThemePaletteVar(theme, '--color-primary-surface-contrast')}
          );
        `
      : ''}
`

const StyledMarquee = styled(Text)<{ $duration: number }>`
  padding-right: 0.6em;
  white-space: nowrap;

  animation-name: ${marqueeScroll};
  animation-duration: ${({ $duration }) => $duration}s;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
`

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  duration = 20,
  inverse,
  ...props
}) => {
  if (!children) {
    return null
  }

  return (
    <StyledMarqueeWrapper {...props} $inverse={inverse}>
      <StyledMarquee variant="Banner" $duration={duration}>
        {`— ${children} — ${children} `}
      </StyledMarquee>
    </StyledMarqueeWrapper>
  )
}
