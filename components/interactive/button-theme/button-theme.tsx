'use client'

import styled, { useTheme } from 'styled-components'
import { simpleSecondaryButtonStyles } from '../shared/button.styles'
import { ButtonThemeProps } from './button-theme.types'
import { IconMoon } from './icon-moon'
import { IconSun } from './icon-sun'

const StyledButtonTheme = styled.button`
  ${simpleSecondaryButtonStyles}

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.25rem;
  height: 4.25rem;
  aspect-ratio: 1;
`

/**
 * This component is used as a theme toggle in the navigation.
 */
export const ButtonTheme: React.FC<ButtonThemeProps> = ({
  disabled = false,
  onClick,
  ...props
}) => {
  const theme = useTheme()

  return (
    <StyledButtonTheme {...props} disabled={disabled} onClick={onClick}>
      {theme.name === 'light' ? (
        <IconSun height={24} width={24} />
      ) : (
        <IconMoon height={20} width={20} />
      )}
    </StyledButtonTheme>
  )
}
