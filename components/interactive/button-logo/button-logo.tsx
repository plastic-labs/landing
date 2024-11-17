'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Logo } from '@/components/core/logo'
import { ButtonLogoProps } from './button-logo.types'

const StyledNextLink = styled(Link)`
  // vars
  --surface-base: var(--interactive-button-surface);
  --surface-contrast-base: var(--interactive-button-surface-contrast);
  --accent-base: var(--interactive-button-accent);

  // base styles
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 4.25rem;
  height: 4.25rem;
  aspect-ratio: 1;
  overflow: hidden;
  background: transparent;
  border: none;
  transition: color var(--ui-transition-speed) ease;

  appearance: none;
  user-select: none;

  * {
    z-index: 2;
  }

  // hover background
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--accent-base);
    opacity: 0;
    z-index: 0;
    transition: opacity var(--ui-transition-speed) ease;
  }

  // pressed background
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--surface-base);
    opacity: 0;
    z-index: 1;
    transition: opacity var(--ui-transition-speed) ease;
  }

  // states
  &,
  &:visited {
    color: var(--surface-base);
  }

  &:hover:not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'] {
    color: var(--color-black);

    &::before {
      opacity: 1;
    }
  }

  &:active:not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([href='']):not([href='#']):not([data-state]),
  &[data-state='pressed'] {
    color: var(--surface-contrast-base);

    &::after {
      opacity: 1;
    }
  }

  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: hsl(from var(--surface-contrast-base) h s l / 0.5);
    background: var(--neutral-grey);
  }
`

/**
 * This component is used in the navigation.
 */
export const ButtonLogo: React.FC<ButtonLogoProps> = ({
  href = '/',
  ...props
}) => {
  return (
    <StyledNextLink {...props} href={href}>
      <Logo width={58} height={58} fill="transparent" />
    </StyledNextLink>
  )
}
