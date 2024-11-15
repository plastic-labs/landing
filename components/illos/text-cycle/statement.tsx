'use client'

import { customAlphabet } from 'nanoid/non-secure'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { shuffle } from '@/utils/shuffle'
import { CharacterCell } from './character-cell'
import { Character, cycles, StatementProps } from './text-cycle.types'

const nanoid = customAlphabet('1234567890abcdef', 6)

const StyledTextCycle = styled.h2`
  display: flex;
  flex-wrap: wrap;
`

const generateCharacters = (statement: string): Character[] => {
  const characterCycles = shuffle(
    Array(Math.ceil(statement.length / cycles.length))
      .fill(cycles)
      .flat()
      .slice(0, statement.length),
  )

  return characterCycles.map((cycle, index) => ({
    character: statement[index],
    cycle,
    key: nanoid(),
  }))
}

export const TextCycle: React.FC<StatementProps> = ({
  statement,
  ...props
}) => {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    const reset = () => {
      setCharacters(generateCharacters(statement))
    }

    reset()
    const timer = setInterval(reset, 5000)

    return () => timer && clearInterval(timer)
  }, [statement])

  return (
    <StyledTextCycle {...props}>
      {characters.map(character => (
        // eslint-disable-next-line react/jsx-key
        <CharacterCell {...character} />
      ))}
    </StyledTextCycle>
  )
}
