'use client'

import { css } from 'styled-components'
import { inverseThemePaletteVar } from '@/styles/themes'
import {
  SharedStylesButtonProps,
  SharedSimpleButtonStylesProps,
} from './button.types'

export const simpleSecondaryButtonStyles = css<SharedSimpleButtonStylesProps>`
  // vars
  --surface: var(--interactive-primary-button-surface);
  --surface-contrast: var(--interactive-primary-button-surface-contrast);
  --accent: var(--interactive-primary-button-accent);

  // base styles
  padding: 0;
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
    background: var(--accent);
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
    background: var(--surface);
    opacity: 0;
    z-index: 1;
    transition: opacity var(--ui-transition-speed) ease;
  }

  // states
  &,
  &:visited {
    color: var(--surface);
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
    color: var(--surface-contrast);

    &::after {
      opacity: 1;
    }
  }

  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: hsl(from var(--surface-contrast) h s l / 0.5);
    background: var(--neutral-grey);
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

export const sharedButtonStyles = css<SharedStylesButtonProps>`
  // vars
  --padding: 2rem;
  --height: 3rem;

  --surface: var(--interactive-primary-button-surface);
  --surface-contrast: var(--interactive-primary-button-surface-contrast);
  --accent: var(--interactive-primary-button-accent);

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
  font-size: 1rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-width: 0;
  border-radius: 0.25rem;
  transition:
    color var(--ui-transition-speed) ease,
    border-color var(--ui-transition-speed) ease;

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
    background: var(--background-over);
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
    border-style: solid;
    border-color: var(--border-color);
    border-radius: inherit;
    opacity: 0;
    z-index: 1;
    transition: opacity var(--ui-transition-speed) ease;
  }

  // states
  &,
  &:visited {
    color: var(--color);
    background: var(--background-under);
    border-color: var(--border-color);
  }

  &:hover:not(:active):not([disabled]):not([href='']):not([href='#']):not(
      [data-state]
    ),
  &[data-state='hover'] {
    color: var(--color-hover, var(--color));
    background: var(--background-under-hover, var(--background-under));

    &::before {
      background: var(--background-over-hover, var(--background-over));
      opacity: 1;
    }

    &::after {
      border-color: var(--border-color-hover, var(--border-color));
    }
  }

  &:active:not([disabled]):not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([disabled]):not([href='']):not([href='#']):not(
      [data-state]
    ),
  &[data-state='pressed'] {
    color: var(--color-pressed, var(--color));
    background: var(--background-under-pressed, var(--background-under));

    &::before {
      background: var(--background-over-pressed, var(--background-over));
      opacity: var(--opacity-over-pressed, 0);
    }

    &::after {
      border-color: var(--border-color-pressed, var(--border-color));
    }
  }

  &[disabled]:not([data-state]),
  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: var(--color-disabled, var(--color));
    background: var(--background-under-disabled, var(--background-under));
    pointer-events: none;

    &::before {
      background: var(--background-over-disabled, var(--background-over));
      opacity: var(--opacity-over-disabled, 0);
    }

    &::after {
      border-color: var(--border-color-disabled, var(--border-color));
    }
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'navigation':
        return css`
          --padding: 0.5rem;
          --height: 2rem;

          --color: var(--surface);
          --background-under: transparent;
          --border-color: var(--surface);

          --color-hover: var(--color-black);
          --background-over-hover: var(--accent);
          --border-color-hover: transparent;

          --color-pressed: var(--surface-contrast);
          --background-under-pressed: var(--surface);
          --border-color-pressed: transparent;

          --color-disabled: hsl(from var(--color-black) h s l / 0.6);
          --background-under-disabled: var(--neutral-grey);
          --border-color-disabled: transparent;

          &::after {
            border-style: dashed;
            opacity: 1;
          }
        `
      case 'secondary':
        return css`
          --color: var(--surface);
          --background-under: var(--surface-contrast);
          --border-color: var(--surface);

          --color-hover: var(--color-black);
          --background-over-hover: var(--neutral-white);
          --border-color-hover: var(--color-black);

          --color-pressed: var(--color-black);
          --background-under-pressed: var(--neutral-white);
          --background-over-pressed: hsl(from var(--neutral-black) h s l / 0.2);
          --opacity-over-pressed: 1;
          --border-color-pressed: var(--color-black);

          --color-disabled: hsl(from var(--color-black) h s l / 0.6);
          --background-under-disabled: var(--neutral-grey);
          --border-color-disabled: var(--color-black);

          &::after {
            border-style: dashed;
            opacity: 1;
          }
        `
      case 'primary':
      default:
        return css`
          --color: var(--surface-contrast);
          --background-under: var(--surface);
          --border-color: var(--surface);

          --color-hover: var(--color-black);
          --background-over-hover: var(--accent);
          --border-color-hover: transparent;

          --color-pressed: var(--color-black);
          --background-under-pressed: var(--accent);
          --background-over-pressed: hsl(from var(--neutral-black) h s l / 0.2);
          --opacity-over-pressed: 1;
          --border-color-pressed: transparent;

          --color-disabled: hsl(from var(--color-black) h s l / 0.6);
          --background-under-disabled: var(--neutral-grey);
          --border-color-disabled: transparent;
        `
        return ''
    }
  }}

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
