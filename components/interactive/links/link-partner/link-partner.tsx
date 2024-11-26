'use client'

import styled, { css } from 'styled-components'
import { Text } from '@/components/core/typography'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import { PARTNERS } from './link-partner.constants'
import type { LinkPartnerProps } from './link-partner.types'

const StyledPartner = styled.a`
  flex-shrink: 0;
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  aspect-ratio: 2 / 1;
  color: var(--color-primary-surface-contrast);
  background: var(--color-primary-surface);
  text-decoration: none;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    width: 18.75rem;
  }

  * {
    z-index: 1;
  }

  // hover background
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--color-primary-accent);
    opacity: 0;
    z-index: 0;
    transition: opacity var(--ui-transition-speed) ease;
  }

  &:hover:not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'],
  &:active:not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([href='']):not([href='#']):not([data-state]),
  &[data-state='pressed'] {
    color: var(--color-black);

    &::before {
      opacity: 1;
    }

    img {
      filter: none;
    }
  }
`

const StyledImage = styled.img<{ $imageScale?: number }>`
  width: 100%;
  transition: filter var(--ui-transition-speed) ease;

  ${({ theme }) =>
    theme.name === 'dark'
      ? css`
          filter: invert(1);
        `
      : ''}

  ${({ $imageScale }) =>
    $imageScale
      ? css`
          transform: scale(${$imageScale});
        `
      : ''}
`

export const LinkPartner: React.FC<LinkPartnerProps> = ({
  partnerName,
  ...props
}) => {
  const { imageScale, imageSrc, name } = PARTNERS[partnerName]

  return (
    <StyledPartner target="_blank" rel="noopener" {...props}>
      {imageSrc ? (
        <StyledImage alt={name} src={imageSrc} $imageScale={imageScale} />
      ) : (
        <Text align="center" variant="H3">
          {name}
        </Text>
      )}
    </StyledPartner>
  )
}
