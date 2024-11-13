import { Fragment } from 'react'
import styled, { css } from 'styled-components'

const StyledStatesGrid = styled.div<{
  $columns: readonly string[]
  $rows: readonly string[]
}>`
  display: grid;
  align-items: center;

  ${({ $columns, $rows }) => css`
    grid-template-columns: min-content repeat(${$columns.length || 1}, 1fr);
    grid-template-rows: min-content repeat(${$rows.length || 1}, auto);
  `}
`

const Name = styled.h6`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  font-family: var(--default-font-family);
  font-size: 1rem;
  line-height: 1;
  white-space: nowrap;
`

const ColumnName = styled(Name)`
  align-items: end;
  justify-items: center;
`

const RowName = styled(Name)`
  align-items: center;
  justify-items: end;
`

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
`

/**
 * This component is for Storybook demonstration purposes only and
 * not expected to be used in the application/site proper.
 */
export const StatesGrid = ({
  columns,
  rows,
  Story,
}: {
  columns: readonly string[]
  rows: readonly string[]
  Story: React.FC<{ column: string; row: string }>
}) => {
  return (
    <StyledStatesGrid $columns={columns} $rows={rows}>
      <span key="empty" />
      {columns.map(column => (
        <ColumnName key={column}>{column}</ColumnName>
      ))}
      {rows.map(row => (
        <Fragment key={row}>
          <RowName>{row}</RowName>
          {columns.map(column => (
            <StyledItem key={`${row}-${column}`}>
              <Story column={column} row={row} />
            </StyledItem>
          ))}
        </Fragment>
      ))}
    </StyledStatesGrid>
  )
}
