'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Logo } from '@/components/core/logo'
import { simpleSecondaryButtonStyles } from '../shared/button.styles'
import { ButtonLogoProps } from './button-logo.types'

const StyledNextLink = styled(Link)`
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
 * This component is used in the navigation.
 */
export const ButtonLogo: React.FC<ButtonLogoProps> = ({
  href = '/',
  ...props
}) => {
  return (
    <StyledNextLink {...props} href={href}>
      <Logo width={58} height={58} fill="transparent" />
    </StyledNextLink>
  )
}
