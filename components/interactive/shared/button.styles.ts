'use client'

import { css } from 'styled-components'
import { THIN_BREAKPOINT, WIDE_BREAKPOINT } from '@/styles/breakpoints'
import { SharedStylesButtonProps } from './button.types'

export const sharedButtonStyles = css<SharedStylesButtonProps>`
  // vars
  --height: 3rem;
  --font-size: 1rem;

  --color-base: white;
  --background-color-base: black;
  --border-color-base: black;

  --color-pressed: rgb(
    from var(--color-base) calc(255 - r) calc(255 - g) calc(255 - b)
  );
  --background-color-pressed: rgb(
    from var(--background-color-base) calc(255 - r) calc(255 - g) calc(255 - b)
  );
  --border-color-pressed: var(--border-color-base);

  --color-disabled: hsl(from var(--color-base) h s calc(l - 20));
  --background-color-disabled: hsl(
    from var(--background-color-base) h s calc(l + (100 - l) * 0.45)
  );
  --border-color-disabled: hsl(
    from var(--border-color-base) h s calc(l + (100 - l) * 0.45)
  );

  // base styles
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.75rem;
  height: var(--height);
  min-height: var(--height);
  overflow: hidden;
  font-family: var(--font-family-exo2);
  font-size: var(--font-size);
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  transition:
    color var(--ui-transition-speed) ease,
    background-color var(--ui-transition-speed) ease,
    border-color var(--ui-transition-speed) ease;

  appearance: none;
  user-select: none;

  // size, responsive
  @media (min-width: ${THIN_BREAKPOINT}rem) {
    --height: 3.5rem;
    --font-size: 1.25rem;
  }

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    --height: 4rem;
    --font-size: 1.5rem;
  }

  // states
  &,
  &:visited {
    color: var(--color, var(--color-base));
    background-color: var(--background-color, var(--background-color-base));
    border-color: var(--border-color, var(--border-color-base));
  }

  @media (hover: hover) {
    --color: hsl(from var(--color-base) h s calc(l - 10));
    --background-color: hsl(from var(--background-color-base) h s calc(l + 20));
    --border-color: hsl(from var(--background-color-base) h s calc(l + 20));

    --color-hover: var(--color-base);
    --background-color-hover: var(--background-color-base);
    --border-color-hover: var(--border-color-base);
  }

  &:hover:not(:active):not([disabled]):not([href='']):not([href='#']):not(
      [data-state]
    ),
  &[data-state='hover'] {
    color: var(--color-hover, var(--color, var(--color-base)));
    background-color: var(
      --background-color-hover,
      var(--background-color, var(--background-color-base))
    );
    border-color: var(
      --border-color-hover,
      var(--border-color, var(--border-color-base))
    );
  }

  &:active:not([disabled]):not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([disabled]):not([href='']):not([href='#']):not(
      [data-state]
    ),
  &[data-state='pressed'] {
    color: var(--color-pressed, var(--color, var(--color-base)));
    background-color: var(
      --background-color-pressed,
      var(--background-color, var(--background-color-base))
    );
    border-color: var(
      --border-color-pressed,
      var(--border-color, var(--border-color-base))
    );
  }

  &[disabled]:not([data-state]),
  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: var(--color-disabled, var(--color, var(--color-base)));
    background-color: var(
      --background-color-disabled,
      var(--background-color, var(--background-color-base))
    );
    border-color: var(
      --border-color-disabled,
      var(--border-color, var(--border-color-base))
    );
    pointer-events: none;
  }

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          --height: 2.5rem;
          --font-size: 0.75rem;

          @media (min-width: ${THIN_BREAKPOINT}rem) {
            --height: 3rem;
            --font-size: 1rem;
          }

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            --height: 3.5rem;
            --font-size: 1.25rem;
          }
        `
      case 'medium':
      default:
        return ''
    }
  }}

  ${({ $variant }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          --color-base: white;
          --background-color-base: rebeccapurple;
          --border-color-base: rebeccapurple;
        `
      case 'primary':
      default:
        return ''
    }
  }}
`
