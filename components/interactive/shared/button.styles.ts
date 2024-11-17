'use client'

import { css } from 'styled-components'
import { THIN_BREAKPOINT, WIDE_BREAKPOINT } from '@/styles/breakpoints'
import { SharedStylesButtonProps } from './button.types'

export const sharedButtonStyles = css<SharedStylesButtonProps>`
  // vars
  --padding: 2rem;

  --height-base: 3rem;
  --height: calc(var(--height-base) / 3 * 2);

  --font-size-base: 1rem;
  --font-size: calc(var(--font-size-base) / 8 * 7);

  --color-base: var(--interactive-button-surface-contrast);
  --background-base: var(--interactive-button-surface);
  --border-color-base: transparent;

  --color-pressed: var(--color-black);
  --background-pressed: hsl(from var(--neutral-black) h s l / 0.2);
  --border-color-pressed: var(--border-color-base);

  --color-disabled: hsl(from var(--color-base) h s l / 0.5);
  --background-disabled: var(--neutral-grey);
  --border-color-disabled: var(--border-color-base);

  // base styles
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 var(--padding);
  height: var(--height);
  min-height: var(--height);
  overflow: hidden;
  font-family: var(--font-family-roboto-mono);
  font-size: var(--font-size);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
  transition:
    color var(--ui-transition-speed) ease,
    border-color var(--ui-transition-speed) ease;

  appearance: none;
  user-select: none;

  // responsive size
  @media (min-width: ${THIN_BREAKPOINT}rem) {
    --height: calc(var(--height-base) / 6 * 5);
    --font-size: var(--font-size-base);
  }

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    --height: var(--height-base);
  }

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
    background: var(
      --background-hover,
      var(--background, var(--background-base))
    );
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
    background: var(
      --background-pressed,
      var(--background, var(--background-base))
    );
    opacity: 0;
    z-index: 1;
    transition: opacity var(--ui-transition-speed) ease;
  }

  // states
  &,
  &:visited {
    color: var(--color, var(--color-base));
    background: var(--background, var(--background-base));
    border-color: var(--border-color, var(--border-color-base));
  }

  @media (hover: hover) {
    --color-hover: var(--color-black);
    --background-hover: var(--interactive-button-accent);
    --border-color-hover: var(--border-color-base);
  }

  &:hover:not(:active):not([disabled]):not([href='']):not([href='#']):not(
      [data-state]
    ),
  &[data-state='hover'] {
    color: var(--color-hover, var(--color, var(--color-base)));
    background: none;
    border-color: var(
      --border-color-hover,
      var(--border-color, var(--border-color-base))
    );

    &::before {
      opacity: 1;
    }
  }

  &:active:not([disabled]):not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([disabled]):not([href='']):not([href='#']):not(
      [data-state]
    ),
  &[data-state='pressed'] {
    color: var(--color-pressed, var(--color, var(--color-base)));
    background: none;
    border-color: var(
      --border-color-pressed,
      var(--border-color, var(--border-color-base))
    );

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  &[disabled]:not([data-state]),
  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: var(--color-disabled, var(--color, var(--color-base)));
    background: var(
      --background-disabled,
      var(--background, var(--background-base))
    );
    border-color: var(
      --border-color-disabled,
      var(--border-color, var(--border-color-base))
    );
    pointer-events: none;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'navigation':
        return css`
          --padding: 0.5rem;

          --height-base: 2rem;

          --color-base: var(--interactive-button-surface);
          --background-base: transparent;
          --border-color-base: var(--interactive-button-surface);

          --color-pressed: var(--interactive-button-surface-contrast);
          --background-pressed: var(--interactive-button-surface);
          --border-color-pressed: transparent;

          border-style: dashed;

          @media (hover: hover) {
            --border-color-hover: transparent;
          }
        `
      case 'default':
      default:
        // already applied above
        return ''
    }
  }}
`
