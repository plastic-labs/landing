'use client'

import styled from 'styled-components'
import {
  colorValues,
  ColorVar,
  isColorVar,
  isNeutralVar,
  neutralValues,
  NeutralVar,
} from '@/styles/palette'

const StyledSwatch = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
`

const Chip = styled.div<{ $color: ColorVar | NeutralVar }>`
  width: 5rem;
  height: 5rem;
  background-color: var(${({ $color }) => $color});
  border-radius: 0.5rem;
`

const HexCode = styled.p`
  margin: 0;
  font-size: 0.8em;
`

const hexCode = (color: ColorVar | NeutralVar): string => {
  if (isNeutralVar(color)) {
    return neutralValues[color]
  }

  if (isColorVar(color)) {
    return colorValues[color]
  }

  return '#unknown'
}

/**
 * This component is for Storybook demonstration purposes only and
 * not expected to be used in the application/site proper.
 */
export const Swatch: React.FC<{
  color: ColorVar | NeutralVar
  name: string
}> = ({ color }) => {
  return (
    <StyledSwatch>
      <Chip $color={color} />
      <HexCode>{hexCode(color)}</HexCode>
    </StyledSwatch>
  )
}
