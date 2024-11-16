'use client'

import styled from 'styled-components'
import { cycleCharacter, cycleFlash } from './character-cell.keyframes'
import { CharacterCellStyleProps, CharacterCellProps } from './text-cycle.types'

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
    background: var(--feature-text-cycle-flash);
    opacity: 0;
    animation-name: ${({ $cycle }) => cycleFlash[$cycle]};
    animation-duration: ${({ $duration }) => $duration}s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    z-index: 2;
  }
`

export const CharacterCell: React.FC<CharacterCellProps> = ({
  character,
  cycle,
  duration,
  ...props
}) => {
  return (
    <StyledCharacterCell
      {...props}
      data-character={character.slice(0, 1).toUpperCase()}
      $cycle={cycle}
      $duration={duration}
    />
  )
}
