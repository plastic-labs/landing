'use client'

import { customAlphabet } from 'nanoid/non-secure'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { shuffle } from '@/utils/shuffle'
import { CharacterCell } from './character-cell'
import { Character, cycles, StatementProps } from './text-cycle.types'

const nanoid = customAlphabet('1234567890abcdef', 6)

const StyledTextCycle = styled.h2<{ $cellSize: number }>`
  --cell-size: ${({ $cellSize }) => $cellSize / 16}rem;

  display: flex;
  flex-wrap: wrap;
`

const generateCharacters = (statement: string): Character[] => {
  const characterCycles = Array(Math.ceil(statement.length / cycles.length))
    .fill(null)
    .map(() => shuffle([...cycles]))
    .flat()
    .slice(0, statement.length)

  return characterCycles.map((cycle, index) => ({
    character: statement[index],
    cycle,
    key: nanoid(),
  }))
}

export const TextCycle: React.FC<StatementProps> = ({
  cellSize = 70,
  duration = 5,
  statement,
  ...props
}) => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const reset = () => {
      setCharacters(generateCharacters(statement))
    }

    reset()
    const timer = setInterval(reset, duration * 1000)

    return () => timer && clearInterval(timer)
  }, [duration, statement])

  return (
    <StyledTextCycle {...props} $cellSize={cellSize}>
      {characters.map(character => (
        <CharacterCell {...character} duration={duration} key={character.key} />
      ))}
    </StyledTextCycle>
  )
}
