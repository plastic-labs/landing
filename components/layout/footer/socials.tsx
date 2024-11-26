'use client'

import styled from 'styled-components'
import { ButtonSocial } from '@/components/interactive/buttons/button-social'
import { SocialsProps } from './footer.types'

const StyledSocials = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
`

export const Socials: React.FC<SocialsProps> = props => {
  return (
    <StyledSocials {...props} aria-label="Socials">
      <ButtonSocial href="https://discord.gg/plasticlabs" inverse />
      <ButtonSocial href="https://huggingface.co/plastic-labs" inverse />
      <ButtonSocial href="https://github.com/plastic-labs" inverse />
      <ButtonSocial href="https://twitter.com/Plastic_Labs" inverse />
    </StyledSocials>
  )
}
