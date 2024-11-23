'use client'

import { customAlphabet } from 'nanoid/non-secure'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { shuffle } from '@/utils/shuffle'
import { CharacterCell } from './character-cell'
import { Character, cycles, StatementProps } from './text-cycle.types'

const nanoid = customAlphabet('1234567890abcdef', 6)
const DEFAULT_WIDTH = 414

const StyledStatement = styled.h2<{ $cellSize: number }>`
  --cell-size: ${({ $cellSize }) => $cellSize / 16}rem;

  display: flex;
  flex-wrap: wrap;
  margin: 0;
  user-select: none;
  pointer-events: none;
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

export const Statement: React.FC<StatementProps> = ({
  characterCount = 15,
  duration = 3,
  statement,
  ...props
}) => {
  const illoRef = useRef<HTMLHeadingElement>(null)
  const [characters, setCharacters] = useState<Character[]>([])
  const [width, setWidth] = useState<number>(DEFAULT_WIDTH)

  useEffect(() => {
    const handleResize = () => {
      setWidth(illoRef.current?.getBoundingClientRect().width || DEFAULT_WIDTH)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [statement])

  useEffect(() => {
    const reset = () => {
      setCharacters(generateCharacters(statement))
    }

    reset()
    const timer = setInterval(reset, duration * 1000)

    return () => timer && clearInterval(timer)
  }, [duration, statement])

  return (
    <StyledStatement
      {...props}
      ref={illoRef}
      $cellSize={width / characterCount}
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
    </StyledStatement>
  )
}
