'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Text } from '@/components/core/typography'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import { inverseThemePaletteVar } from '@/styles/themes'
import { isInternalUrl } from '@/utils/url'
import { SharedThemeStylesProps } from '../../buttons/shared/theme.types'
import { IconUpRightArrow } from './icon-up-right-arrow'
import type { LinkGiantProps } from './link-giant.types'

const linkStyles = css<SharedThemeStylesProps>`
  --surface-base: var(--color-primary-surface);
  --surface-contrast-base: var(--color-primary-surface-contrast);

  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr min-content;
  grid-template-rows: min-content 1fr;
  grid-gap: 1.5rem;
  padding: 1.5rem 1rem;
  min-height: 9rem;
  color: var(--surface-contrast-base);
  text-decoration: none;
  background: var(--surface-base);
  transition: color var(--ui-transition-speed) ease;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
    padding: 2.5rem;
    min-height: 20.6875rem;
  }

  * {
    z-index: 1;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    @media (min-width: ${THIN_BREAKPOINT}rem) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--surface-contrast-base);
    opacity: 0;
    transition: opacity var(--ui-transition-speed) ease;
    z-index: 0;
  }

  // states
  &,
  &:visited {
    color: var(--surface-contrast-base);
  }

  &:hover:not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'] {
    > *:last-child > *:last-child {
      text-decoration: underline;
    }
  }

  &:active:not([href='']):not([href='#']):not([data-state]),
  &:hover:active:not([href='']):not([href='#']):not([data-state]),
  &[data-state='pressed'] {
    color: var(--surface-base);

    &::before {
      opacity: 1;
    }
  }

  &[href='']:not([data-state]),
  &[href='#']:not([data-state]),
  &[data-state='disabled'] {
    color: hsl(from var(--surface-contrast-base) h s l / 0.5);
    text-decoration: none;
    pointer-events: none;
    cursor: default;
  }

  ${({ $inverse, theme }) =>
    $inverse
      ? css`
          --surface-base: var(
            ${inverseThemePaletteVar(theme, '--color-primary-surface')}
          );
          --surface-contrast-base: var(
            ${inverseThemePaletteVar(theme, '--color-primary-surface-contrast')}
          );
        `
      : ''}
`

const StyledTitle = styled(Text)`
  text-transform: uppercase;
`

const StyledPrompt = styled(Text)`
  &::before {
    content: '>';
    padding-right: 0.5em;
  }
`

const StyledDetails = styled.div`
  align-self: end;
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    grid-column: 1;
  }
`

const StyledNextLink = styled(Link)<SharedThemeStylesProps>`
  ${linkStyles}
`

const StyledAnchor = styled.a<SharedThemeStylesProps>`
  ${linkStyles}
`

/**
 * This component is for links— often outbound— which appear in a series.
 */
export const LinkGiant: React.FC<LinkGiantProps> = ({
  href,
  inverse,
  prompt,
  text,
  title,
  ...props
}) => {
  if (!text || !title) {
    return null
  }

  const content = (
    <>
      <StyledTitle variant="Body1">{title}</StyledTitle>
      <IconUpRightArrow />
      <StyledDetails>
        {prompt ? <StyledPrompt variant="Body1">{prompt}</StyledPrompt> : null}
        <Text variant="Body1">{text}</Text>
      </StyledDetails>
    </>
  )

  if (isInternalUrl(href)) {
    return (
      <StyledNextLink {...props} href={href} $inverse={inverse}>
        {content}
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
      {content}
    </StyledAnchor>
  )
}
