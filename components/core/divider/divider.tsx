'use client'

import styled, { css } from 'styled-components'
import type { DividerProps, DividerStyleProps } from './divider.types'

const StyledDivider = styled.hr<DividerStyleProps>`
  grid-column: ${({ $columns }) => $columns};
  grid-row: ${({ $rows }) => $rows};
  background-color: var(--color-primary-surface-contrast);
  border: none;

  ${({ $orientation }) => {
    switch ($orientation) {
      case 'horizontal':
        return css`
          height: 0.0625rem;
          width: 100%;
        `
      case 'vertical':
      default:
        return css`
          height: 100%;
          width: 0.0625rem;
        `
    }
  }}
`

export const Divider: React.FC<DividerProps> = ({
  orientation,
  columns = 'span 1',
  rows = 'span 1',
  ...props
}) => {
  return (
    <StyledDivider
      {...props}
      $columns={columns}
      $orientation={orientation}
      $rows={rows}
    />
  )
}
