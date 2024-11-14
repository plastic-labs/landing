'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import { isInternalUrl } from '@/utils/url'
import { InlineLinkProps } from './inline-link.types'

const linkStyles = css`
  --underline-color-base: black;
  --underline-color: var(--underline-color-base);

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
    color: currentColor;
    text-decoration-color: var(--underline-color);
  }

  @media (hover: hover) {
    --underline-color: hsl(from var(--underline-color-base) h s calc(l + 60));
    --underline-color-hover: var(--underline-color-base);
  }

  &:hover:not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'] {
    text-decoration-color: var(
      --underline-color-hover,
      var(--underline-color, var(--underline-color-base))
    );
  }

  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    text-decoration: none;
    pointer-events: none;
  }
`

const StyledNextLink = styled(Link)`
  ${linkStyles}
`

const StyledAnchor = styled.a`
  ${linkStyles}
`

/**
 * This component is for links which appear inline within text content.
 */
export const InlineLink: React.FC<InlineLinkProps> = ({
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
