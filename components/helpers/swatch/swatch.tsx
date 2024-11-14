'use client'

import styled from 'styled-components'
import { colorValues, ColorVar } from '@/styles/palette'

const StyledSwatch = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
`

const Chip = styled.div<{ $color: ColorVar }>`
  width: 5rem;
  height: 5rem;
  background-color: var(${({ $color }) => $color});
  border-radius: 0.5rem;
`

const HexCode = styled.p`
  margin: 0;
  font-size: 0.8em;
`

/**
 * This component is for Storybook demonstration purposes only and
 * not expected to be used in the application/site proper.
 */
export const Swatch: React.FC<{
  color: ColorVar
  name: string
}> = ({ color }) => {
  return (
    <StyledSwatch>
      <Chip $color={color} />
      <HexCode>{colorValues[color]}</HexCode>
    </StyledSwatch>
  )
}
