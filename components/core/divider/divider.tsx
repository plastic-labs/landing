'use client'

import styled from 'styled-components'
import type { DividerProps, DividerStyleProps } from './divider.types'

const StyledDivider = styled.hr<DividerStyleProps>`
  align-self: stretch;
  justify-self: stretch;
  grid-column: ${({ $columns }) => $columns};
  grid-row: ${({ $rows }) => $rows};
  margin: 0;
  min-width: 0.0625rem;
  min-height: 0.0625rem;
  background-color: var(--color-primary-surface-contrast);
  border: none;
`

export const Divider: React.FC<DividerProps> = ({
  columns = 'span 1',
  rows = 'span 1',
  ...props
}) => {
  return <StyledDivider {...props} $columns={columns} $rows={rows} />
}
