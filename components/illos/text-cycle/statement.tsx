'use client'

import { customAlphabet } from 'nanoid/non-secure'
import { useEffect, useRef, useState } from 'react'
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

const LineBreak = styled.span`
  flex-basis: 100%;
  height: 0;
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
  characterCount = 15,
  duration = 3,
  statement,
  ...props
}) => {
  const illoRef = useRef<HTMLHeadingElement>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [headingWidth, setHeadingWidth] = useState<number>(Infinity)

  useEffect(() => {
    if (illoRef.current) {
      setHeadingWidth(illoRef.current.getBoundingClientRect().width || 60)
    }
  }, [headingWidth])

  useEffect(() => {
    const reset = () => {
      setCharacters(generateCharacters(statement))
    }

    reset()
    const timer = setInterval(reset, duration * 1000)

    return () => timer && clearInterval(timer)
  }, [duration, statement])

  return (
    <StyledTextCycle
      {...props}
      ref={illoRef}
      $cellSize={headingWidth / characterCount}
    >
      {characters.map(character => {
        if (character.character === '\n') {
          return <LineBreak key={character.key} />
        }
        return (
          <CharacterCell
            {...character}
            duration={duration}
            key={character.key}
          />
        )
      })}
    </StyledTextCycle>
  )
}
