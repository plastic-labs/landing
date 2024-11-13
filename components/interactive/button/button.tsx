'use client'

import styled from 'styled-components'
import { sharedButtonStyles } from '../shared/button.styles'
import { SharedStylesButtonProps } from '../shared/button.types'
import { ButtonProps } from './button.types'

const StyledButton = styled.button<SharedStylesButtonProps>`
  ${sharedButtonStyles}
`

/**
 * This component is for buttons throughout the site.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  size = 'medium',
  variant = 'primary',
  ...props
}) => {
  if (!children) {
    return null
  }

  return (
    <StyledButton
      {...props}
      disabled={disabled}
      onClick={onClick}
      $size={size}
      $variant={variant}
    >
      {children}
    </StyledButton>
  )
}
