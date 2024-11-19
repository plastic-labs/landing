'use client'

import styled from 'styled-components'
import { IconClose } from './icon-close'
import type { TitleBarProps } from './button-product.types'

const StyledTitleBar = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr min-content;
  grid-gap: 0.375rem;
  height: 0.5625rem;
`

const StyledBar = styled.div`
  --line-width: 0.0625rem;

  display: flex;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    currentColor 0%,
    currentColor calc(0% + var(--line-width)),
    transparent calc(0% + var(--line-width)),
    transparent calc(50% - var(--line-width) / 2),
    currentColor calc(50% - var(--line-width) / 2),
    currentColor calc(50% + var(--line-width) / 2),
    transparent calc(50% + var(--line-width) / 2),
    transparent calc(100% - var(--line-width)),
    currentColor calc(100% - var(--line-width)),
    currentColor 100%
  );

  @media (min-resolution: 192dpi) {
    --line-width: 0.03125rem;
  }
`

const StyledTitle = styled.p`
  margin: 0 auto;
  color: currentColor;
  font-family: var(--default-font-family);
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  white-space: nowrap;
  background: var(--surface-base, var(--interactive-product-surface));

  &::before {
    content: '[';
    padding: 0 0.34em 0 0.5em;
  }

  &::after {
    content: ']';
    padding: 0 0.5em 0 0.34em;
  }
`

export const TitleBar: React.FC<TitleBarProps> = ({ children, ...props }) => {
  return (
    <StyledTitleBar {...props}>
      <StyledBar>
        <StyledTitle>{children}</StyledTitle>
      </StyledBar>
      <IconClose />
    </StyledTitleBar>
  )
}
