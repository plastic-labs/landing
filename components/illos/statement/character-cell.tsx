'use client'

import { customAlphabet } from 'nanoid/non-secure'
import styled from 'styled-components'
import { shuffle } from '@/utils/shuffle'
import {
  cycleCharacter,
  cycleFlash,
  cycleNumber,
} from './character-cell.keyframes'
import {
  CharacterCellStyleProps,
  CharacterCellProps,
  NumberStyleProps,
  Cycle,
} from './text-cycle.types'

const NUMERIC_CHARACTER_COUNT = 4

const numericCharacters = customAlphabet(
  '1234567890+-*%#?',
  NUMERIC_CHARACTER_COUNT,
)
const numericKey = customAlphabet('1234567890abcdef', 6)
const numericPosition = customAlphabet('1234567890', 2)

const StyledCharacterCell = styled.span<CharacterCellStyleProps>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  aspect-ratio: 1;
  width: var(--cell-size);
  height: var(--cell-size);

  * {
    z-index: 0;
  }

  // character and background
  &::before {
    content: attr(data-character);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary-surface-contrast);
    font-family: var(--font-family-departure-mono);
    font-size: calc(var(--cell-size) * 13 / 14);
    line-height: 1;
    background-color: var(--color-primary-surface);
    opacity: 0;
    animation-name: ${({ $cycle }) => cycleCharacter[$cycle]};
    animation-duration: ${({ $duration }) => $duration}s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    z-index: 1;
  }

  // flash
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--illos-statement-flash);
    opacity: 0;
    animation-name: ${({ $cycle }) => cycleFlash[$cycle]};
    animation-duration: ${({ $duration }) => $duration}s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    z-index: 2;
  }
`

const StyledNumber = styled.span.attrs<NumberStyleProps>(props => ({
  style: {
    gridColumn: props.$column,
    gridRow: props.$row,
    '--top': `${props.$top}%`,
    '--left': `${props.$left}%`,
    '--animation-duration': `${props.$duration}s`,
  },
}))`
  position: relative;
  display: block;
  aspect-ratio: 1;
  color: var(--color-primary-surface-contrast);
  font-family: var(--font-family-roboto-mono);
  font-size: calc(var(--cell-size) * 9 / 35);
  font-weight: 200;
  line-height: 1;

  &::before {
    content: attr(data-character);
    position: absolute;
    top: var(--top);
    left: var(--left);
    opacity: 0;
    animation-name: ${({ $cycle }) => cycleNumber[$cycle]};
    animation-duration: var(--animation-duration);
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
`

export const CharacterCell: React.FC<CharacterCellProps> = ({
  character,
  cycle,
  duration,
  ...props
}) => {
  const numeric = numericCharacters()
    .split('')
    .slice(0, Math.ceil(Math.random() * NUMERIC_CHARACTER_COUNT))
  const columns = shuffle([1, 2, 3])
  const rows = shuffle([1, 2, 3])

  return (
    <StyledCharacterCell
      {...props}
      data-character={character.slice(0, 1).toUpperCase()}
      $cycle={cycle}
      $duration={duration}
    >
      {numeric.map((n, i) => (
        <StyledNumber
          data-character={n}
          key={numericKey()}
          $column={columns[i]}
          $cycle={Math.round(cycle + i * 0.5) as Cycle}
          $duration={duration}
          $row={rows[i]}
          $top={Number(numericPosition())}
          $left={Number(numericPosition())}
        />
      ))}
    </StyledCharacterCell>
  )
}
