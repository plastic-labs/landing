'use client'

import styled, { css } from 'styled-components'
import { Text } from '@/components/core/typography'
import { PARTNERS } from './link-partner.constants'
import type { LinkPartnerProps } from './link-partner.types'

const StyledPartner = styled.a`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  width: min(100%, 18.75rem);
  aspect-ratio: 2 / 1;
  color: var(--color-primary-surface-contrast);
  background: var(--color-primary-surface);
  border: 0.0625rem solid var(--color-primary-surface-contrast);
  text-decoration: none;
  box-sizing: border-box;

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
  }
`

const StyledImage = styled.img<{ $imageScale?: number }>`
  display: block;
  width: 100%;
  overflow: hidden;
  object-fit: contain;

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
    <StyledPartner {...props}>
      {imageSrc ? (
        <StyledImage alt={name} src={imageSrc} $imageScale={imageScale} />
      ) : (
        <Text variant="H3">{name}</Text>
      )}
    </StyledPartner>
  )
}
