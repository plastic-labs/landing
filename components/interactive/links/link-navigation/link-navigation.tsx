'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import { isInternalUrl } from '@/utils/url'
import type { LinkNavigationProps } from './link-navigation.types'

const linkStyles = css`
  // base styles
  display: inline;

  font-family: var(--font-family-roboto-mono);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;

  transition: color var(--ui-transition-speed) ease;

  user-select: none;

  // states
  &,
  &:visited {
    color: var(--color-primary-surface-contrast);
  }

  &:hover:not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'] {
    text-decoration: underline;
  }

  &:active:not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([href='']):not([href='#']):not([data-state]),
  &[data-state='pressed'] {
    text-decoration: underline;
    text-decoration-color: var(--color-primary-accent);
  }

  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: hsl(from var(--color-black) h s l / 0.6);
    text-decoration: underline;
    text-decoration-color: hsl(from var(--color-black) h s l / 0.3);

    pointer-events: none;
    cursor: default;
  }
`

const StyledNextLink = styled(Link)`
  ${linkStyles}
`

const StyledAnchor = styled.a`
  ${linkStyles}
`

/**
 * This component is for links which appear within the main navigation.
 */
export const LinkNavigation: React.FC<LinkNavigationProps> = ({
  children,
  href,
  ...props
}) => {
  if (!children) {
    return null
  }

  if (isInternalUrl(href)) {
    return (
      <StyledNextLink {...props} href={href}>
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
    >
      {children}
    </StyledAnchor>
  )
}
