'use client'

import styled, { css } from 'styled-components'
import { THIN_BREAKPOINT, WIDE_BREAKPOINT } from '@/styles/breakpoints'
import { defaultTag } from './typography.constants'
import { TypographyProps } from './typography.types'

const sharedHeaderStyles = css`
  font-family: var(--font-family-departure-mono);
  font-style: normal;
  font-weight: 600;
`

const sharedBodyStyles = css`
  font-family: var(--default-font-family);
  font-style: normal;
  font-weight: 400;
`

const isHeaderFontFamily = (style: TypographyProps['variant']): boolean =>
  ['Banner', 'H1', 'H2', 'H3', 'H5', 'H6'].includes(style)

const StyledText = styled.p<{
  $align: TypographyProps['align']
  $color: TypographyProps['color']
  $variant: TypographyProps['variant']
}>`
  margin: 0;
  padding: 0;
  text-decoration: inherit;

  ${({ $variant }) =>
    isHeaderFontFamily($variant) ? sharedHeaderStyles : sharedBodyStyles}

  ${({ $variant }) => {
    switch ($variant) {
      case 'Banner':
        return css`
          font-size: 3rem;
          line-height: 1.2;

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            font-size: 5rem;
          }
        `
      case 'H1':
        return css`
          font-size: 2rem;
          line-height: 1.1;

          @media (min-width: ${THIN_BREAKPOINT}rem) {
            font-size: 2.5rem;
          }

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            font-size: 3rem;
          }
        `
      case 'H2':
        return css`
          font-size: 1.75rem;
          line-height: 1.1;

          @media (min-width: ${THIN_BREAKPOINT}rem) {
            font-size: 2.25rem;
          }

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            font-size: 2.75rem;
          }
        `
      case 'H3':
        return css`
          font-size: 1.5rem;
          line-height: 1.2;

          @media (min-width: ${THIN_BREAKPOINT}rem) {
            font-size: 2rem;
          }

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            font-size: 2.5rem;
          }
        `
      case 'H4':
        return css`
          font-size: 1.25rem;
          line-height: 1.35;
        `
      case 'H5':
        return css`
          font-size: 1rem;
          line-height: 1.5;
        `
      case 'H6':
        return css`
          font-size: 1rem;
          line-height: 1.35;
        `
      case 'Body1':
        return css`
          font-size: 1rem;
          line-height: 1.5;
        `
      case 'Body2':
        return css`
          font-size: 0.875rem;
          line-height: 1.35;
        `
      default:
        // no default
        return ''
    }
  }}

  ${({ $color }) => {
    return css`
      color: ${$color === 'currentColor' ? 'currentColor' : `var(${$color})`};
    `
  }}

  ${({ $align }) => {
    switch ($align) {
      case 'left':
        return css`
          justify-self: start;
          margin-right: auto;
          text-align: 'left';
        `
      case 'right':
        return css`
          justify-self: end;
          margin-left: auto;
          text-align: 'right';
        `
      case 'center':
      case 'inherit':
      default:
        return css`
          text-align: ${$align};
        `
    }
  }}
`
/**
 * This component is for rendering all text content in a consistent fashion.
 */
export const Text: React.FC<TypographyProps> = ({
  align = 'inherit',
  as,
  children,
  color = 'currentColor',
  variant,
  ...props
}) => {
  return (
    <StyledText
      {...props}
      $align={align}
      $color={color}
      $variant={variant}
      as={as || defaultTag[variant]}
    >
      {children}
    </StyledText>
  )
}
