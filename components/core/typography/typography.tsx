'use client'

import styled, { css } from 'styled-components'
import { THIN_BREAKPOINT, WIDE_BREAKPOINT } from '@/styles/breakpoints'
import { defaultTag } from './typography.constants'
import { TypographyProps } from './typography.types'

const sharedHeaderStyles = css`
  font-family: var(--font-family-departure-mono);
  font-style: normal;
  font-weight: 400;
`

const sharedBodyStyles = css`
  font-family: var(--default-font-family);
  font-style: normal;
  font-weight: 400;
`

const isHeaderFontFamily = (style: TypographyProps['variant']): boolean =>
  ['Banner', 'Accent', 'H1', 'H3'].includes(style)

const StyledText = styled.p<{
  $align: TypographyProps['align']
  $color: TypographyProps['color']
  $inverse: TypographyProps['inverse']
  $variant: TypographyProps['variant']
}>`
  margin: 0;
  padding: 0;
  text-decoration: inherit;

  ${({ $variant }) =>
    isHeaderFontFamily($variant) ? sharedHeaderStyles : sharedBodyStyles}

  ${({ $variant }) => {
    switch ($variant) {
      case 'Banner': // Giant text
        return css`
          font-size: 5.9rem;
          line-height: 1;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          text-wrap: pretty;

          @media (min-width: ${THIN_BREAKPOINT}rem) {
            font-size: 12.5rem;
          }
        `
      case 'Accent': // Still very large text
        return css`
          font-size: 2.1875rem;
          line-height: ${40 / 35};
          letter-spacing: -0.023em;
          text-transform: uppercase;
          text-wrap: balance;

          @media (min-width: ${THIN_BREAKPOINT}rem) {
            font-size: 2.8125rem;
            line-height: ${55 / 45};
          }
        `
      case 'H1': // Not visible
        return css`
          font-size: 2rem;
          line-height: 1.1;

          @media (min-width: ${WIDE_BREAKPOINT}rem) {
            font-size: 3rem;
          }
        `
      case 'H2': // section titles, mirrors Body2
        return css`
          font-size: 0.875rem;
          line-height: ${22 / 14};
          letter-spacing: -0.01em;
        `
      case 'H3': // team member name
        return css`
          font-size: 1.25rem;
          line-height: ${24 / 20};
          text-transform: uppercase;
        `
      case 'H4': // Body1 lead
        return css`
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.02em;
        `
      case 'H5': // Body2 lead
        return css`
          font-size: 0.875rem;
          font-weight: 600;
          line-height: ${22 / 14};
          letter-spacing: -0.01em;
        `
      case 'H6': // Body3 lead
        return css`
          font-size: 0.75rem;
          font-weight: 600;
          line-height: ${20 / 12};
          letter-spacing: -0.01em;
        `
      case 'Body1':
        return css`
          font-size: 1rem;
          line-height: 1.5;
          letter-spacing: -0.02em;
        `
      case 'Body2':
        return css`
          font-size: 0.875rem;
          line-height: ${22 / 14};
          letter-spacing: -0.01em;
        `
      case 'Body3':
        return css`
          font-size: 0.75rem;
          line-height: ${20 / 12};
          letter-spacing: -0.01em;
        `
      default:
        // no default
        return ''
    }
  }}

  ${({ $color, $inverse }) => {
    if ($color && $color.startsWith('--')) {
      return css`
        color: var(${$color});
      `
    }
    if ($inverse) {
      return css`
        color: var(--color-primary-surface);
      `
    }
    return css`
      color: currentColor;
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
  inverse,
  variant,
  ...props
}) => {
  return (
    <StyledText
      {...props}
      $align={align}
      $color={color}
      $inverse={inverse}
      $variant={variant}
      as={as || defaultTag[variant]}
    >
      {children}
    </StyledText>
  )
}
