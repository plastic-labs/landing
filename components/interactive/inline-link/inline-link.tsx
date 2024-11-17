'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import { inverseThemePaletteVar } from '@/styles/themes'
import { isInternalUrl } from '@/utils/url'
import { SharedThemeStylesProps } from '../shared/theme.types'
import { InlineLinkProps } from './inline-link.types'

const linkStyles = css<SharedThemeStylesProps>`
  --color-base: var(--interactive-link-surface-contrast);
  --accent-base: var(--interactive-link-accent);

  display: inline;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-decoration: underline;

  // states
  &,
  &:visited {
    color: var(--color-base);
  }

  @media (hover: hover) {
    --color-hover: var(--accent-base);
  }

  &:hover:not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'] {
    color: var(--color-hover, var(--color-base));
  }

  &:active:not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([href='']):not([href='#']):not([data-state]),
  &[data-state='pressed'] {
    color: var(--accent-base);
    text-shadow:
      -0.002rem -0.002rem 0 var(--accent-base),
      0.002rem -0.002rem 0 var(--accent-base),
      -0.002rem 0.002rem 0 var(--accent-base),
      0.002rem 0.002rem 0 var(--accent-base);
  }

  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    text-decoration: none;
    pointer-events: none;
    cursor: default;
  }

  ${({ $inverse, theme }) =>
    $inverse
      ? css`
          --color-base: var(
            ${inverseThemePaletteVar(
              theme,
              '--interactive-link-surface-contrast',
            )}
          );
          --accent-base: var(
            ${inverseThemePaletteVar(theme, '--interactive-link-accent')}
          );
        `
      : ''}
`

const StyledNextLink = styled(Link)<SharedThemeStylesProps>`
  ${linkStyles}
`

const StyledAnchor = styled.a<SharedThemeStylesProps>`
  ${linkStyles}
`

/**
 * This component is for links which appear inline within text content.
 */
export const InlineLink: React.FC<InlineLinkProps> = ({
  children,
  href,
  inverse,
  ...props
}) => {
  if (!children) {
    return null
  }

  if (isInternalUrl(href)) {
    return (
      <StyledNextLink {...props} href={href} $inverse={inverse}>
        {children}
      </StyledNextLink>
    )
  }

  const { as, ...rest } = props

  return (
    <StyledAnchor
      {...rest}
      href={href.toString()}
      rel="noopener"
      target="_blank"
      $inverse={inverse}
    >
      {children}
    </StyledAnchor>
  )
}
