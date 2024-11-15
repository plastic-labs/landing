'use client'

import styled, { css } from 'styled-components'
import { cycleCharacter, cycleFlash } from './character-cell.keyframes'
import {
  CharacterCellStyleProps,
  CharacterCellProps,
} from './text-cycle.types'

const DURATION = 5 // seconds

const StyledCharacterCell = styled.span<CharacterCellStyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;

  ${({ $cellSize }) => css`
    width: ${$cellSize / 16}rem;
    height: ${$cellSize / 16}rem;
    font-size: ${($cellSize / 16) * (13 / 14)}rem;
  `}

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
    font-size: inherit;
    line-height: 1;
    background-color: var(--color-primary-surface);
    opacity: 0;
    animation-name: ${({ $cycle }) => cycleCharacter[$cycle]};
    animation-duration: ${DURATION}s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    z-index: 0;
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
    animation-duration: ${DURATION}s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    z-index: 1;
  }
`

export const CharacterCell: React.FC<CharacterCellProps> = ({
  cellSize = 70,
  character,
  cycle,
  ...props
}) => {
  return (
    <StyledCharacterCell
      {...props}
      data-character={character.slice(0, 1).toUpperCase()}
      $cellSize={cellSize}
      $cycle={cycle}
    />
  )
}
