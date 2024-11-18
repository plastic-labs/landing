'use client'

import styled from 'styled-components'
import { simpleSecondaryButtonStyles } from '../shared/button.styles'
import { hrefOriginIconMap } from './button-social.constants'
import { ButtonSocialProps, HrefOrigin } from './button-social.types'
import type { SharedSimpleButtonStylesProps } from '../shared/button.types'

const StyledButtonSocial = styled.a<SharedSimpleButtonStylesProps>`
  ${simpleSecondaryButtonStyles}

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1;
  border-radius: 0.25rem;

  // pressed background
  &::after {
    background: hsl(from var(--neutral-black) h s l / 0.2);
  }

  &:active:not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([href='']):not([href='#']):not([data-state]),
  &[data-state='pressed'] {
    color: var(--color-black);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }
`

/**
 * This component is used as an outbound link to a social service.
 */
export const ButtonSocial: React.FC<ButtonSocialProps> = ({
  href,
  inverse,
  ...props
}) => {
  if (!href) {
    return null
  }

  const { origin } = new URL(href)

  const Icon = hrefOriginIconMap[origin as HrefOrigin]

  return (
    <StyledButtonSocial
      {...props}
      href={href}
      target="_blank"
      rel="noopener"
      $inverse={inverse}
    >
      <Icon />
    </StyledButtonSocial>
  )
}
