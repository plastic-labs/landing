'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { isInternalUrl } from '@/utils/url'
import { ButtonChildren } from '../shared/button-children'
import { sharedButtonStyles } from '../shared/button.styles'
import { SharedStylesButtonProps } from '../shared/button.types'
import { ButtonLinkProps } from './button-link.types'

const StyledNextLink = styled(Link)<SharedStylesButtonProps>`
  ${sharedButtonStyles}
`

const StyledAnchor = styled.a<SharedStylesButtonProps>`
  ${sharedButtonStyles}
`

/**
 * This component is for links which appear as buttons throughout the site.
 */
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  inverse,
  variant = 'default',
  ...props
}) => {
  if (!children) {
    return null
  }

  if (isInternalUrl(href)) {
    return (
      <StyledNextLink
        {...props}
        href={href}
        $inverse={inverse}
        $variant={variant}
      >
        <ButtonChildren>{children}</ButtonChildren>
      </StyledNextLink>
    )
  }

  const { as, ...rest } = props

  return (
    <StyledAnchor
      {...rest}
      href={href.toString()}
      rel="noopener"
      target="_blank"
      $inverse={inverse}
      $variant={variant}
    >
      <ButtonChildren>{children}</ButtonChildren>
    </StyledAnchor>
  )
}
