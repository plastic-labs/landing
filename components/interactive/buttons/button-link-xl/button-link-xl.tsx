'use client'

import styled, { css } from 'styled-components'
import { inverseThemePaletteVar } from '@/styles/themes'
import { isInternalUrl } from '@/utils/url'
import { ButtonChildren } from '../shared/button-children'
import type { ButtonLinkXlProps } from './button-link-xl.types'
import type { SharedThemeStylesProps } from '../shared/theme.types'

const StyledAnchor = styled.a<SharedThemeStylesProps>`
  // vars
  --surface: var(--interactive-primary-button-surface);
  --surface-contrast: var(--interactive-primary-button-surface-contrast);
  --accent: var(--interactive-primary-button-accent);

  // base styles
  justify-self: stretch;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 3rem;
  height: 6.5rem;
  min-height: 6.5rem;
  overflow: hidden;

  font-family: var(--font-family-roboto-mono);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;

  border-width: 0;
  border-radius: 0.25rem;

  transition: color var(--ui-transition-speed) ease;

  box-sizing: border-box;
  appearance: none;
  user-select: none;

  * {
    z-index: 2;
  }

  // over background
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--surface);
    opacity: 0;
    z-index: 0;
    transition: opacity var(--ui-transition-speed) ease;
  }

  // border
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-width: 0.0625rem;
    border-style: dotted;
    border-color: var(--surface);
    border-radius: inherit;
    z-index: 1;
    transition: border-color var(--ui-transition-speed) ease;
  }

  // states
  &,
  &:visited {
    color: var(--surface);
    background: var(--surface-contrast);
  }

  &:hover:not(:active):not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'] {
    color: var(--surface-contrast);

    &::before {
      opacity: 1;
    }

    &::after {
      border-color: var(--surface-contrast);
    }
  }

  &:active:not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([href='']):not([href='#']):not([data-state]),
  &[data-state='pressed'] {
    color: var(--color-black);
    background: var(--accent);

    &::after {
      border-color: var(--color-black);
    }
  }

  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: hsl(from var(--color-black) h s l / 0.6);
    background: var(--neutral-grey);
    pointer-events: none;

    &::after {
      border-color: hsl(from var(--color-black) h s l / 0.3);
    }
  }

  ${({ $inverse, theme }) =>
    $inverse
      ? css`
          --surface: var(
            ${inverseThemePaletteVar(
              theme,
              '--interactive-primary-button-surface',
            )}
          );
          --surface-contrast: var(
            ${inverseThemePaletteVar(
              theme,
              '--interactive-primary-button-surface-contrast',
            )}
          );
          --accent: var(
            ${inverseThemePaletteVar(
              theme,
              '--interactive-primary-button-accent',
            )}
          );
        `
      : ''}
`

/**
 * This component is for outbound links which appear as gigantic buttons.
 */
export const ButtonLinkXl: React.FC<ButtonLinkXlProps> = ({
  children,
  href,
  inverse,
  ...props
}) => {
  if (!children || isInternalUrl(href)) {
    return null
  }

  return (
    <StyledAnchor
      {...props}
      href={href}
      rel="noopener"
      target="_blank"
      $inverse={inverse}
    >
      <ButtonChildren>{children}</ButtonChildren>
    </StyledAnchor>
  )
}
